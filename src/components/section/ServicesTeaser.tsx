// src/components/sections/ServicesTeaser.tsx

'use client';

import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import ActionsStack from '../patterns/ActionsStack';
import HeaderBlock from '../patterns/HeaderBlock';
import FeatureCard from '../widgets/FeatureCard';
import FeaturesGrid from './FeaturesGrid';
import { services } from '@/data/services';

export default function ServicesTeaser() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Nos Services"
          title="Ce que nous proposons"
          subtitle="Un accompagnement complet et bienveillant au quotidien."
          align="left"
        />

        <FeaturesGrid
          items={services.slice(0, 3)}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              align="left"
            />
          )}
        />

        <ActionsStack
          align="left"
          items={[{ label: 'Voir tous nos services', href: '/services', variant: 'primary' }]}
          className="mt-2"
        />
      </SectionWrapper>
    </Section>
  );
}
