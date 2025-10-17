// src/app/services/page.tsx

import Services from '@/components/pages/Services';

export const metadata = {
  title: 'Services – Compagnie Care & Services',
  description:
    'Découvrez les services d’aide à domicile de Compagnie Care & Services : entretien du logement, aide à la toilette, préparation des repas, téléassistance et accompagnement quotidien.',
  alternates: {
    canonical: 'https://careetservices.pro/services',
  },
};

export default function ServicesPage() {
  return <Services />;
}
