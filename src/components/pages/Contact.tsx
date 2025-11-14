// src/components/pages/Contact.tsx

import { Mail } from 'lucide-react';
import ContactInfoSection from '../section/ContactInfoSection';
import ContactFormSection from '../section/ContactFormSection';
import LocationSection from '../section/LocationSection';
import HeroPage from '../section/HeroPage';

export default function Contact() {
  return (
    <div>
      <HeroPage
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
        backgroundImage="/images/hero/contact-bg.avif"
        overlayOpacity={0.4}
      />
      <ContactFormSection
        eyebrow="Contact"
        title="Parlez-nous de votre besoin"
        subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
        align="left"
      />
      <ContactInfoSection />
      <LocationSection align="left" />
    </div>
  );
}
