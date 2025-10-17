// src/app/testimonials/page.tsx

import Testimonials from '@/components/pages/Testimonials';

export const metadata = {
  title: 'Témoignages – Compagnie Care & Services',
  description:
    'Découvrez les témoignages et avis de nos bénéficiaires et de leurs familles. Compagnie Care & Services s’engage chaque jour pour un accompagnement humain et professionnel.',
  alternates: {
    canonical: 'https://careetservices.pro/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
