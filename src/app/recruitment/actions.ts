// src/app/recrutement/actions.ts

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const schema = z.object({
  civilite: z.string().optional(),
  prenom: z.string().min(1),
  nom: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
  company: z.string().optional(),
});

const TO = [{ email: 'contact@careetservices.pro', name: 'Care et Services' }];
const FROM = { email: 'no-reply@careetservices.pro', name: 'Care et Services' };

// Brevo attend les pièces jointes au format:
// attachments: [{ name: "cv.pdf", content: "<base64>" }]
type BrevoAttachment = { name: string; content: string };

async function blobToBase64(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString('base64');
}

async function sendBrevoEmail(params: {
  subject: string;
  htmlContent: string;
  replyToEmail?: string;
  replyToName?: string;
  attachments?: BrevoAttachment[];
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('Missing BREVO_API_KEY');

  const payload = {
    sender: FROM,
    to: TO,
    subject: params.subject,
    htmlContent: params.htmlContent,
    ...(params.replyToEmail
      ? { replyTo: { email: params.replyToEmail, name: params.replyToName ?? params.replyToEmail } }
      : {}),
    ...(params.attachments?.length ? { attachment: params.attachments } : {}),
  };

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('Brevo send failed:', res.status, text);
    throw new Error('Brevo send failed');
  }
}

export async function sendApplication(jobTitle: string, formData: FormData): Promise<void> {
  'use server';

  // Honeypot AVANT validation
  if (formData.get('company')) {
    console.warn('Spam détecté sur le formulaire de recrutement');
    redirect('/thank-you-application');
  }

  const data = schema.parse({
    civilite: formData.get('civilite')?.toString(),
    prenom: formData.get('prenom')?.toString(),
    nom: formData.get('nom')?.toString(),
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
    company: formData.get('company')?.toString(),
  });

  const cv = formData.get('cv') as File | null;

  // (Optionnel mais recommandé) mini garde-fous
  const MAX_BYTES = 5 * 1024 * 1024; // 5MB
  const allowedTypes = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]);

  let attachments: BrevoAttachment[] = [];
  if (cv && cv.size > 0) {
    if (cv.size > MAX_BYTES) {
      // tu peux aussi redirect vers une page d'erreur dédiée
      throw new Error('CV too large');
    }
    if (cv.type && !allowedTypes.has(cv.type)) {
      throw new Error('Unsupported CV type');
    }

    attachments = [{ name: cv.name, content: await blobToBase64(cv) }];
  }

  const html = `
    <h3>Nouvelle candidature</h3>
    <p><strong>Poste :</strong> ${jobTitle}</p>
    <p><strong>Civilité :</strong> ${data.civilite || '—'}</p>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
    <p><em>CV : ${attachments.length ? 'fourni' : 'non fourni'}</em></p>
  `;

  await sendBrevoEmail({
    subject: `Nouvelle candidature – ${jobTitle}`,
    htmlContent: html,
    replyToEmail: data.email,
    replyToName: `${data.prenom} ${data.nom}`.trim(),
    attachments,
  });

  redirect('/thank-you-application');
}
