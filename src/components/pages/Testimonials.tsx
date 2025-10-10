// src/components/pages/Testimonials.tsx

import { MessageSquare } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';
import Cta from '../ui/Cta';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <HeroIntro
        icon={<MessageSquare size={40} />}
        title="Témoignages"
        subtitle="Ils partagent leur expérience et leur avis sur nos services."
        align="center"
        backgroundImage="/images/hero/testimonials-bg.avif"
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
