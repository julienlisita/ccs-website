// src/components/sections/TestimonialsTeaser.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/widgets/TestimonialCard';
import FeaturesGrid from './FeaturesGrid';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';

type Props = {
  items: ReadonlyArray<Testimonial>;
};

export default function TestimonialsTeaser({ items }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Ils nous font confiance"
          title="Les avis de nos clients"
          subtitle="Avis vérifiés, triés et présentés pour vous aider à décider."
          align="left"
        />

        <FeaturesGrid
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          items={items}
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

        <ActionsStack
          align="left"
          items={[
            { label: 'Voir tous les témoignages', href: '/testimonials', variant: 'primary' },
          ]}
          className="mt-2"
        />
      </SectionWrapper>
    </Section>
  );
}
