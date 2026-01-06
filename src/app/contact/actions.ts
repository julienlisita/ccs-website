// src/app/contact/actions.ts

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const schema = z.object({
  civilite: z.string().optional(),
  prenom: z.string().min(1),
  nom: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional(),
});

const TO = [{ email: 'contact@careetservices.pro', name: 'Care et Services' }];

const FROM = { email: 'no-reply@careetservices.pro', name: 'Care et Services' };

async function sendBrevoEmail(params: {
  subject: string;
  htmlContent: string;
  replyToEmail?: string;
  replyToName?: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('Missing BREVO_API_KEY');

  const payload = {
    sender: FROM,
    to: TO,
    subject: params.subject,
    htmlContent: params.htmlContent,
    // Brevo Transactional: replyTo sous forme d'objet
    ...(params.replyToEmail
      ? { replyTo: { email: params.replyToEmail, name: params.replyToName ?? params.replyToEmail } }
      : {}),
  };

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
    // Optionnel: éviter un cache côté runtime
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    // On log côté serveur (utile en prod), mais on ne leak pas les détails au user
    console.error('Brevo send failed:', res.status, text);
    throw new Error('Brevo send failed');
  }
}

export async function sendContact(formData: FormData): Promise<void> {
  'use server';

  // Honeypot anti-spam
  if (formData.get('company')) {
    console.warn('Spam détecté via le champ honeypot');
    redirect('/thank-you');
  }

  const data = schema.parse({
    civilite: formData.get('civilite')?.toString(),
    prenom: formData.get('prenom')?.toString(),
    nom: formData.get('nom')?.toString(),
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
    company: formData.get('company')?.toString(),
  });

  const html = `
    <h3>Nouvelle demande de contact</h3>
    <p><strong>Civilité :</strong> ${data.civilite || '—'}</p>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
  `;

  await sendBrevoEmail({
    subject: 'Nouveau message – Formulaire de contact',
    htmlContent: html,
    replyToEmail: data.email,
    replyToName: `${data.prenom} ${data.nom}`.trim(),
  });

  redirect('/thank-you');
}
