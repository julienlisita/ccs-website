// src/components/sections/ServicesTeaser.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import { services } from '@/data/services';

type Props = {
  className?: string;
};

export default function ServicesTeaser({ className }: Props) {
  return (
    <FeaturesGrid
      eyebrow="Nos Services"
      title="Ce que nous proposons"
      subtitle="Un accompagnement complet et bienveillant au quotidien."
      items={services.slice(0, 3)}
      ctaLabel="Voir tous nos services"
      ctaHref="/services"
      align="left"
      className={className}
    />
  );
}
