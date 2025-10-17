// src/app/aids/page.tsx

import Aids from '@/components/pages/Aids';

export const metadata = {
  title: 'Aides & financement – Compagnie Care & Services',
  description:
    'Informez-vous sur les aides financières comme l’APA ou la PCH, destinées à soutenir les services d’aide à domicile proposés par Compagnie Care & Services.',
  alternates: {
    canonical: 'https://careetservices.pro/aids',
  },
};

export default function AidsPage() {
  return <Aids />;
}
