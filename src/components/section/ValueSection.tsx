// src/components/sections/ValuesSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import FeatureCard from '@/components/widgets/FeatureCard';
import { values } from '@/data/values';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ValuesSection() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Nos valeurs"
          title="Ce qui nous guide"
          subtitle="Des principes simples qui structurent notre accompagnement."
          align="left"
        />

        <FeaturesGrid
          items={values}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              align="left"
            />
          )}
        />
      </SectionWrapper>
    </Section>
  );
}
