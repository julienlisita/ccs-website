// src/components/section/LocationSection.tsx

'use client';

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import Subtitle from '@/components/ui/Subtitle';
import clsx from 'clsx';

type Props = {
  className?: string;
  align?: 'left' | 'center' | 'right';
};

export default function LocationSection({ className, align = 'center' }: Props) {
  const alignText =
    align === 'left'
      ? 'text-center md:text-left'
      : align === 'right'
        ? 'text-center md:text-right'
        : 'text-center';

  const cardAlign =
    align === 'left' ? 'md:items-start' : align === 'right' ? 'md:items-end' : 'md:items-center';

  return (
    <Section className={className}>
      <SectionWrapper>
        {/* Header */}
        <div className={clsx('space-y-3', alignText)}>
          <Eyebrow align={align}>Nos implantations</Eyebrow>
          <SectionTitle align={align}>Présents en Gironde et en Charente</SectionTitle>
          <Subtitle>Retrouvez nos antennes locales pour un accompagnement de proximité.</Subtitle>
        </div>

        {/* Cartes */}
        <div
          className={clsx('mt-10 grid grid-cols-1 md:grid-cols-2 gap-8', 'items-start md:gap-12')}
        >
          {/* Carte Gironde */}
          <div className={clsx('flex flex-col items-center text-center space-y-4', cardAlign)}>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Gironde"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730107.584051683!2d-1.132312478860891!3d44.89846104260659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552e4eb6f605f3%3A0x306651748112790!2sGironde%2C%20France!5e1!3m2!1sfr!2sus!4v1759996313899!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-dark)]">Agence Gironde</h3>
          </div>

          {/* Carte Charente */}
          <div className={clsx('flex flex-col items-center text-center space-y-4', cardAlign)}>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Charente"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036637.4598074357!2d-1.3003137632989488!3d45.65633104369037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48010f8cd49d63f3%3A0x305d39260e72680!2sCharente-Maritime%2C%20France!5e1!3m2!1sfr!2sus!4v1759996201281!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-dark)]">Agence Charente</h3>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
