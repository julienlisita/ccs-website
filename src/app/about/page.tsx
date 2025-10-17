// src/app/about/page.tsx

import About from '@/components/pages/About';

export const metadata = {
  title: 'À propos – Compagnie Care & Services',
  description:
    'Découvrez l’histoire et les valeurs de Compagnie Care & Services. Une entreprise familiale engagée dans l’accompagnement à domicile des personnes âgées et en situation de handicap, en Charente et Gironde.',
  alternates: {
    canonical: 'https://careetservices.pro/about',
  },
};

export default function AboutPage() {
  return <About />;
}
