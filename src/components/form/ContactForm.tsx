// src/components/ui/FloatingInput.tsx

'use client';

import Button from '../ui/Button';
import FloatingInput from '../form/FloatingInput';
import FloatingTextarea from '../form/FloatingTextarea';
import { sendContact } from '@/app/contact/actions';
import './ContactForm.css';

type ContactFormProps = {
  /** Alignement du bouton CTA (appliqué à partir de lg) */
  ctaAlign?: 'left' | 'center' | 'right';
  className?: string;
};

export default function ContactForm({ ctaAlign = 'left', className }: ContactFormProps) {
  // mapping responsive : mobile = center, desktop selon prop
  const alignClass =
    ctaAlign === 'center'
      ? 'text-center lg:text-center'
      : ctaAlign === 'right'
        ? 'text-center lg:text-right'
        : 'text-center lg:text-left';

  return (
    <form action={sendContact} className={`contact-form ${className ?? ''}`}>
      {/* honeypot anti-spam */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Civilité */}
      <div className="mb-4">
        <label className="sr-only" htmlFor="civilite">
          Civilité
        </label>
        <select
          id="civilite"
          name="civilite"
          className="w-full rounded-lg border border-[#92A095] bg-white px-4 py-2 text-[#785F49] placeholder-[#785F49]/70 focus:border-[#BA805B] focus:ring-1 focus:ring-[#BA805B]/50"
          defaultValue=""
        >
          <option value="">Civilité</option>
          <option value="Mme">Mme</option>
          <option value="M.">M.</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FloatingInput label="Prénom" name="prenom" type="text" required />
        <FloatingInput label="Nom" name="nom" type="text" required />
      </div>
      <FloatingInput label="Email" name="email" type="email" required />
      <FloatingTextarea label="Message" name="message" required />

      <div className={alignClass}>
        <Button type="submit" variant="primary">
          Envoyer
        </Button>
      </div>
    </form>
  );
}
