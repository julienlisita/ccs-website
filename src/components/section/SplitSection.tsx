// src/components/section/SplitSection.tsx

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';
import './SplitSection.css';
import Eyebrow from '../ui/Eyebrow';
import SectionTitle from '../ui/SectionTitle';
import Subtitle from '../ui/Subtitle';

type SplitSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  tone?: 'default' | 'muted' | 'brand';
  className?: string;
  children?: React.ReactNode;
};

export default function SplitSection({
  eyebrow,
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  tone = 'default',
  className,
  children,
}: SplitSectionProps) {
  return (
    <Section className={clsx('split', `split--${tone}`, className)}>
      <SectionWrapper>
        <div className={clsx('split__grid', reverse && 'is-reverse')}>
          {/* IMAGE */}
          <div className="split__media">
            <div className="split__img-wrap">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="split__img"
                priority
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="split__body">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <SectionTitle align="left">{title}</SectionTitle>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {content && <div className="split__text">{content}</div>}
            {children && <div className="split__extra">{children}</div>}

            {(ctaLabel || secondaryCtaLabel) && (
              <div className="split__actions">
                {ctaLabel && ctaHref && (
                  <Button href={ctaHref} variant="primary">
                    {ctaLabel}
                  </Button>
                )}
                {secondaryCtaLabel && secondaryCtaHref && (
                  <Button href={secondaryCtaHref} variant="secondary">
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}