// src/components/pages/Testimonials.tsx

import { MessageSquare } from 'lucide-react';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';
import Cta from '../ui/Cta';
import HeroPage from '../section/HeroPage';
import testimonialsHeroBg from '@/assets/images/hero/testimonials-bg.avif';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <HeroPage
        icon={<MessageSquare size={40} />}
        title="Témoignages"
        subtitle="Ils partagent leur expérience et leur avis sur nos services."
        align="center"
        backgroundImage={testimonialsHeroBg}
        overlayOpacity={0.4}
      />
      <TestimonialsSectionServer />
      <Cta
        title="Prêts à écrire votre propre témoignage ?"
        description="Bénéficiez, vous aussi, d’un accompagnement humain et attentif au quotidien."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
