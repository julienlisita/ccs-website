// src/app/page.tsx

import Home from '@/components/pages/Home';

export const metadata = {
  title: 'Accueil – Compagnie Care & Services',
  description:
    'Bienvenue sur le site de Compagnie Care & Services, votre partenaire de confiance pour l’aide à domicile en Charente et en Gironde. Découvrez nos services daccompagnement, d’aide aux personnes âgées et de maintien à domicile.',
  alternates: {
    canonical: 'https://careetservices.pro/',
  },
};

export default function HomePage() {
  return <Home />;
}
