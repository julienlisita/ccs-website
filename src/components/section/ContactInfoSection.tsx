// src/components/sections/ContactInfoSection.tsx

'use client';

import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import FeatureCard from '../widgets/FeatureCard';
import FeaturesGrid from './FeaturesGrid';
import { contactInfos } from '@/data/contact';

export default function ContactInfoSection() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Contact"
          title="Nos coordonnées"
          subtitle="Joignez-nous par téléphone, email, ou venez nous voir."
          align="left"
        />

        <FeaturesGrid
          items={contactInfos}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
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
