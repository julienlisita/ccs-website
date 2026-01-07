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
  company: z.string().optional(), // honeypot
});

const TO = [{ email: 'contact@careetservices.pro', name: 'Care et Services' }];

/**
 * IMPORTANT: éviter no-reply si possible → meilleure perception + parfois meilleure délivrabilité
 * (et de toute façon le reply-to pointe vers l’email du visiteur)
 */
const FROM = { email: 'contact@careetservices.pro', name: 'Care et Services – Site web' };

/** Escape HTML minimal pour éviter l’injection dans ton template */
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

async function sendBrevoEmail(params: {
  subject: string;
  htmlContent: string;
  textContent: string;
  replyToEmail?: string;
  replyToName?: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('Missing BREVO_API_KEY');

  const payload: Record<string, unknown> = {
    sender: FROM,
    to: TO,
    subject: params.subject,
    htmlContent: params.htmlContent,
    textContent: params.textContent,

    // Optionnel mais utile : identifier l’app (et parfois aider le scoring)
    headers: {
      'X-Mailer': 'CareEtServices Website',
      'X-Entity-Ref-ID': `contact-form-${Date.now()}`,
    },
  };

  // Brevo Transactional: replyTo sous forme d'objet
  if (params.replyToEmail) {
    payload.replyTo = {
      email: params.replyToEmail,
      name: params.replyToName ?? params.replyToEmail,
    };
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

  const fullName = `${data.prenom} ${data.nom}`.trim();

  // HTML (avec footer "normal" + échappement minimal)
  const html = `
    <div style="font-family:Arial, sans-serif; font-size:14px; line-height:1.5">
      <h3 style="margin:0 0 12px">Nouvelle demande de contact</h3>

      <p style="margin:0 0 6px"><strong>Civilité :</strong> ${escapeHtml(data.civilite || '—')}</p>
      <p style="margin:0 0 6px"><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p style="margin:0 0 12px"><strong>Email :</strong> ${escapeHtml(data.email)}</p>

      <p style="margin:0 0 6px"><strong>Message :</strong></p>
      <p style="margin:0 0 16px">${nl2br(data.message)}</p>

      <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
      <p style="margin:0;color:#666;font-size:12px">
        Message envoyé depuis le formulaire de contact du site careetservices.pro
      </p>
    </div>
  `.trim();

  // Texte (excellent pour délivrabilité)
  const text = `
Nouvelle demande de contact

Civilité: ${data.civilite || '—'}
Nom: ${fullName}
Email: ${data.email}

Message:
${data.message}

---
Envoyé depuis le formulaire de contact du site careetservices.pro
  `.trim();

  await sendBrevoEmail({
    subject: 'Nouveau message – Formulaire de contact',
    htmlContent: html,
    textContent: text,
    replyToEmail: data.email,
    replyToName: fullName,
  });

  redirect('/thank-you');
}
