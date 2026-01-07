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
  company: z.string().optional(), // honeypot
});

const TO = [{ email: 'contact@careetservices.pro', name: 'Care et Services' }];

/**
 * IMPORTANT: éviter no-reply si possible.
 * replyTo reste l’email du candidat, donc on peut garder un FROM "contact@"
 */
const FROM = { email: 'contact@careetservices.pro', name: 'Care et Services – Recrutement' };

// Brevo attend:
// attachment: [{ name: "cv.pdf", content: "<base64>" }]
type BrevoAttachment = { name: string; content: string };

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function nl2br(input: string): string {
  return escapeHtml(input).replace(/\n/g, '<br/>');
}

async function blobToBase64(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString('base64');
}

/** Optionnel mais utile : éviter des noms de fichiers bizarres */
function safeFilename(name: string): string {
  const cleaned = name.replace(/[^\w.\-() ]+/g, '_').trim();
  return cleaned.length ? cleaned : 'cv';
}

async function sendBrevoEmail(params: {
  subject: string;
  htmlContent: string;
  textContent: string;
  replyToEmail?: string;
  replyToName?: string;
  attachments?: BrevoAttachment[];
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('Missing BREVO_API_KEY');

  const payload: Record<string, unknown> = {
    sender: FROM,
    to: TO,
    subject: params.subject,
    htmlContent: params.htmlContent,
    textContent: params.textContent,

    headers: {
      'X-Mailer': 'CareEtServices Website',
      'X-Entity-Ref-ID': `job-application-${Date.now()}`,
    },
  };

  if (params.replyToEmail) {
    payload.replyTo = {
      email: params.replyToEmail,
      name: params.replyToName ?? params.replyToEmail,
    };
  }

  // Brevo Transactional: champ "attachment" (singulier)
  if (params.attachments?.length) {
    payload.attachment = params.attachments;
  }

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

  // Garde-fous
  const MAX_BYTES = 5 * 1024 * 1024; // 5MB
  const allowedTypes = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]);

  let attachments: BrevoAttachment[] = [];
  let hasCv = false;

  if (cv && cv.size > 0) {
    if (cv.size > MAX_BYTES) throw new Error('CV too large');
    if (cv.type && !allowedTypes.has(cv.type)) throw new Error('Unsupported CV type');

    hasCv = true;

    // (optionnel) nommer le fichier de manière plus pro
    const fullName = `${data.prenom} ${data.nom}`.trim();
    const filename = safeFilename(`CV_${fullName}_${jobTitle}_${cv.name}`);

    attachments = [{ name: filename, content: await blobToBase64(cv) }];
  }

  const fullName = `${data.prenom} ${data.nom}`.trim();

  const html = `
    <div style="font-family:Arial, sans-serif; font-size:14px; line-height:1.5">
      <h3 style="margin:0 0 12px">Nouvelle candidature</h3>

      <p style="margin:0 0 6px"><strong>Poste :</strong> ${escapeHtml(jobTitle)}</p>
      <p style="margin:0 0 6px"><strong>Civilité :</strong> ${escapeHtml(data.civilite || '—')}</p>
      <p style="margin:0 0 6px"><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p style="margin:0 0 12px"><strong>Email :</strong> ${escapeHtml(data.email)}</p>

      <p style="margin:0 0 6px"><strong>Message :</strong></p>
      <p style="margin:0 0 16px">${nl2br(data.message)}</p>

      <p style="margin:0 0 12px"><em>CV : ${hasCv ? 'fourni (en pièce jointe)' : 'non fourni'}</em></p>

      <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
      <p style="margin:0;color:#666;font-size:12px">
        Candidature envoyée depuis le formulaire de recrutement du site careetservices.pro
      </p>
    </div>
  `.trim();

  const text = `
Nouvelle candidature

Poste: ${jobTitle}
Civilité: ${data.civilite || '—'}
Nom: ${fullName}
Email: ${data.email}

Message:
${data.message}

CV: ${hasCv ? 'fourni (pièce jointe)' : 'non fourni'}

---
Envoyé depuis le formulaire de recrutement du site careetservices.pro
  `.trim();

  await sendBrevoEmail({
    subject: `Nouvelle candidature – ${jobTitle}`,
    htmlContent: html,
    textContent: text,
    replyToEmail: data.email,
    replyToName: fullName,
    attachments,
  });

  redirect('/thank-you-application');
}
