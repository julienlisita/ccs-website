// src/components/sections/AidsSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import FeatureCard from '@/components/widgets/FeatureCard';
import { aids } from '@/data/aids';

type Props = { className?: string };

export default function AidsSection({ className }: Props) {
  return (
    <FeaturesGrid
      eyebrow="Financement"
      title="Aides & Financement"
      subtitle="Découvrez les principaux dispositifs qui peuvent réduire le coût de l’aide à domicile."
      items={aids}
      align="left"
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
      className={className}
      // On passe nos FeatureCard pour contrôler l’align/variant
      renderItem={(item) => (
        <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          linkLabel={item.linkLabel}
          variant="with-header"
          align="left"
        />
      )}
      getKey={(it, i) => `${it.title}-${i}`}
    />
  );
}
