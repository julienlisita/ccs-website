// src/components/section/HeroIntro.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import './HeroIntro.css';
import Image from 'next/image';

type HeroIntroProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  icon?: ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
  className?: string;
};

export default function HeroIntro({
  title,
  subtitle,
  align = 'center',
  icon,
  backgroundImage,
  overlayOpacity = 0.4,
  className = '',
}: HeroIntroProps) {
  return (
    <section
      className={clsx('hero-intro', className, {
        'is-left': align === 'left',
        'is-center': align === 'center',
        'is-right': align === 'right',
      })}
    >
      {backgroundImage && (
        <div className="hero-intro__bg">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-intro__bg-image"
          />
          <div className="hero-intro__overlay" style={{ opacity: overlayOpacity }} />
        </div>
      )}
      <div className="hero-intro__inner relative z-10">
        {icon && (
          <div className="hero-intro__icon" aria-hidden="true">
            {icon}
          </div>
        )}

        {/* IMPORTANT: color="inherit" pour laisser le thème de HeroIntro s’appliquer */}
        <PageTitle className="hero-intro__title" color="inherit">
          {title}
        </PageTitle>

        {subtitle && <p className="hero-intro__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
