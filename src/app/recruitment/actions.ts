// src/app/recrutement/actions.ts

'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

const schema = z.object({
  civilite: z.string().optional(),
  prenom: z.string().min(1),
  nom: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = 'Recrutement CCS <no-reply@careetservices.pro>';
const TO = 'contact@careetservices.pro';

async function blobToBase64(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString('base64');
}

export async function sendApplication(jobTitle: string, formData: FormData): Promise<void> {
  'use server';

  const data = schema.parse({
    civilite: formData.get('civilite')?.toString(),
    prenom: formData.get('prenom')?.toString(),
    nom: formData.get('nom')?.toString(),
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
  });

  const cv = formData.get('cv') as File | null;
  const attachments =
    cv && cv.size > 0 ? [{ filename: cv.name, content: await blobToBase64(cv) }] : [];

  const html = `
    <h3>Nouvelle candidature</h3>
    <p><strong>Poste :</strong> ${jobTitle}</p>
    <p><strong>Civilité :</strong> ${data.civilite || '—'}</p>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
    <p><em>CV : ${attachments.length ? 'fourni' : 'non fourni'}</em></p>
  `;

  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Nouvelle candidature – ${jobTitle}`,
    html,
    attachments,
  });

  redirect('/thank-you-application');
}
