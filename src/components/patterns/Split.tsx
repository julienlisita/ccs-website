// src/components/patterns/Split.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import '@/components/section/SplitSection.css';

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactElement;

type SplitProps = {
  as?: 'div' | 'article';

  /** --- Nouveau : icône en tête de bloc texte --- */
  icon?: IconType;
  /** Classe utilitaire pour styliser l’icône (taille, couleur, fond…) */
  iconClassName?: string;
  /** Si true, icône dans un médaillon rond */
  iconCircle?: boolean;

  eyebrow?: string;
  title?: string;
  titleLevel?: 2 | 3 | 4 | 5 | 6;
  subtitle?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;

  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;

  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;

  className?: string;
};

export default function Split({
  as = 'div',
  icon,
  iconClassName,
  iconCircle = false,
  eyebrow,
  title,
  titleLevel = 3,
  subtitle,
  content,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  className,
}: SplitProps) {
  const Tag = as;
  const TitleTag = `h${titleLevel}` as keyof React.JSX.IntrinsicElements;

  /** Rendu de l’icône */
  const renderIcon = () => {
    if (!icon) return null;

    const baseIcon =
      React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
            className: clsx('w-8 h-8', iconClassName),
            'aria-hidden': true,
          })
        : React.createElement(icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, {
            className: clsx('w-8 h-8', iconClassName),
            'aria-hidden': true,
          });

    if (!iconCircle) return baseIcon;

    // Médaillon rond derrière l’icône
    return (
      <span
        className={clsx(
          'inline-flex items-center justify-center rounded-full',
          'w-12 h-12',
          'bg-[var(--color-bg)] text-[var(--color-primary)]'
        )}
        aria-hidden
      >
        {baseIcon}
      </span>
    );
  };

  return (
    <Tag className={clsx('split', className)}>
      <div className={clsx('split__grid', reverse && 'is-reverse')}>
        {/* MEDIA */}
        <div className="split__media">
          <div className="split__img-wrap">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="split__img"
              priority
            />
          </div>
        </div>

        {/* TEXTE */}
        <div className="split__body">
          {/* Icône au tout début du bloc texte */}
          {icon && <div className="mb-3">{renderIcon()}</div>}

          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          {title && (
            <TitleTag className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-[var(--color-dark)]">
              {title}
            </TitleTag>
          )}

          {subtitle && (
            <p className="mt-2 text-base sm:text-lg text-[color:var(--color-dark)]/80">
              {subtitle}
            </p>
          )}

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
    </Tag>
  );
}