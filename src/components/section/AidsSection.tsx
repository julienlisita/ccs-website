// src/components/sections/AidsSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import FeatureCard from '@/components/widgets/FeatureCard';
import { aids } from '@/data/aids';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function AidsSection() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Financement"
          title="Aides & Financement"
          subtitle="Découvrez les principaux dispositifs qui peuvent réduire le coût de l’aide à domicile."
          align="left"
        />

        <FeaturesGrid
          items={aids}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              href={item.href}
              linkLabel={item.linkLabel}
              align="left"
            />
          )}
          getKey={(it, i) => `${it.title}-${i}`}
        />
      </SectionWrapper>
    </Section>
  );
}
