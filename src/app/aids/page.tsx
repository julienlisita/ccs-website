// src/app/aids/page.tsx

import Aids from '@/components/pages/Aids';

export const metadata = {
  title: 'Aides & financement – Compagnie Care & Services',
  description:
    'Besoin d’informations ou d’un devis ? Contactez-nous via notre formulaire ou par téléphone.',
  alternates: {
    canonical: 'https://www.exemple.com/aids',
  },
};

export default function AidsPage() {
  return <Aids />;
}
