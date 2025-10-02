// src/components/pages/Contact.tsx

import ContactForm from '@/components/form/ContactForm';
import HeroIntro from '../section/HeroIntro';
import { Mail } from 'lucide-react';
import ContactInfoSection from '../section/ContactInfoSection';

export default function Contact() {
  return (
    <div>
      <HeroIntro
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
      />
      <ContactForm />
      <ContactInfoSection />
    </div>
  );
}
