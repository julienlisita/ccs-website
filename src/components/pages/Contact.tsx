// src/components/pages/Contact.tsx

import HeroIntro from '../section/HeroIntro';
import { Mail } from 'lucide-react';
import ContactInfoSection from '../section/ContactInfoSection';
import ContactFormSection from '../section/ContactFormSection';

export default function Contact() {
  return (
    <div>
      <HeroIntro
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
      />
      <ContactFormSection
        eyebrow="Contact"
        title="Parlez-nous de votre besoin"
        subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
        align="left"
      />
      <ContactInfoSection />
    </div>
  );
}
