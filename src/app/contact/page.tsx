// src/app/contact/page.tsx

import Contact from '@/components/pages/Contact';

export const metadata = {
  title: 'Contact – Compagnie Care & Services',
  description:
    'Contactez Compagnie Care & Services pour toute demande d’information ou de devis concernant nos prestations d’aide à domicile en Charente et Gironde.',
  alternates: {
    canonical: 'https://careetservices.pro/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
