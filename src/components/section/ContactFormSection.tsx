// src/components/sections/ContactFormSection.tsx

'use client';

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import ContactForm from '@/components/form/ContactForm'; // adapte le chemin si besoin
import clsx from 'clsx';
import './ContactFormSection.css';
import HeaderBlock from '../patterns/HeaderBlock';

type ContactFormSectionProps = {
  /** Ajoute une carte de texte à gauche/droite si besoin (ex: infos RGPD, horaires…) */
  aside?: React.ReactNode;
  asidePosition?: 'left' | 'right';
};

export default function ContactFormSection({
  aside,
  asidePosition = 'left',
}: ContactFormSectionProps) {
  const hasAside = Boolean(aside);

  return (
    <Section className="contact-form-section">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Contact"
          title="Écrivez-nous"
          subtitle="Nous vous répondrons au plus vite."
          align="left"
        />

        {/* Layout responsive : 1 colonne mobile, 2 colonnes ≥ lg si aside */}
        <div
          className={clsx(
            'grid gap-8',
            hasAside ? 'grid-cols-1 lg:grid-cols-2 items-start' : 'grid-cols-1'
          )}
        >
          {hasAside && asidePosition === 'left' && (
            <div className="contact-form-aside">{aside}</div>
          )}

          <div className="max-w-2xl bg-white">
            <ContactForm />
          </div>

          {hasAside && asidePosition === 'right' && (
            <div className="contact-form-aside">{aside}</div>
          )}
        </div>
      </SectionWrapper>
    </Section>
  );
}
