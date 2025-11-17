// src/components/pages/Services.tsx

'use client';

import Cta from '../ui/Cta';
import ServicesSection from '../section/ServicesSection';
import { Briefcase } from 'lucide-react';
import HeroPage from '../section/HeroPage';
import servicesHeroBg from '@/assets/images/hero/services-bg.avif';

export default function ServicesFeatures() {
  return (
    <div>
      <HeroPage
        icon={<Briefcase size={40} />}
        title="Nos services"
        subtitle="Un aperçu clair et détaillé de ce que nous proposons."
        align="center"
        backgroundImage={servicesHeroBg}
        overlayOpacity={0.4}
      />
      <ServicesSection />
      <Cta
        title="Un service adapté à vos besoins."
        description="Contactez-nous pour créer ensemble un accompagnement personnalisé."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
