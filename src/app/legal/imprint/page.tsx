// src/app/legal/imprint/page.tsx

import Imprint from '@/components/pages/legal/Imprint';

export const metadata = {
  title: 'Mentions légales – Compagnie Care & Services',
  description:
    'Mentions légales du site Compagnie Care & Services : informations sur l’éditeur, l’hébergeur et les conditions d’utilisation du site.',
  alternates: {
    canonical: 'https://careetservices.pro/legal/imprint',
  },
};

export default function ImprintPage() {
  return <Imprint />;
}
