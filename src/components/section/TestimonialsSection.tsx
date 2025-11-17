// src/components/sections/TestimonialsSection.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/widgets/TestimonialCard';
import FeaturesGrid from './FeaturesGrid';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function TestimonialsSection({ items }: { items: ReadonlyArray<Testimonial> }) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Ils nous font confiance"
          title="Tous les témoignages"
          subtitle="Consultez les retours authentiques de nos clients."
          align="left"
        />

        <FeaturesGrid
          items={items}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          filterByTab={(t, tab) => (tab === 'featured' ? Boolean(t.highlight) : true)}
          pageSize={8}
          renderItem={(t) => (
            <TestimonialCard
              name={t.name}
              role={t.role}
              company={t.company}
              quote={t.quote}
              rating={t.rating}
              avatarUrl={t.avatarUrl}
              displayDate={t.displayDate}
              city={t.city}
              variant="default"
            />
          )}
          getKey={(t) => t.id}
        />
      </SectionWrapper>
    </Section>
  );
}
