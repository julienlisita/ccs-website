// src/app/contact/actions.ts

'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

const schema = z.object({
  civilite: z.string().optional(),
  prenom: z.string().min(1),
  nom: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Site CCS <no-reply@careetservices.pro>';
const TO = 'contact@careetservices.pro';

export async function sendContact(formData: FormData): Promise<void> {
  'use server';

  const data = schema.parse({
    civilite: formData.get('civilite')?.toString(),
    prenom: formData.get('prenom')?.toString(),
    nom: formData.get('nom')?.toString(),
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
    company: formData.get('company')?.toString(),
  });

  if (data.company) {
    redirect('/contact?sent=1');
  }

  const html = `
    <h3>Nouvelle demande de contact</h3>
    <p><strong>Civilité :</strong> ${data.civilite || '—'}</p>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
  `;
  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: 'Nouveau message – Formulaire de contact',
    html,
  });

  redirect('/contact?sent=1');
}
