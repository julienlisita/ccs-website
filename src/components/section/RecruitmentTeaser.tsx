// src/components/section/RecruitmentTeaser.tsx

'use client';

import SplitSection from '@/components/section/SplitSection';

export default function RecruitmentTeaser() {
  return (
    <SplitSection
      eyebrow="Recrutement"
      title="Rejoignez notre équipe chaleureuse"
      subtitle="Nous recherchons des personnes passionnées pour aider nos aînés et personnes en situation de handicap."
      imageSrc="/images/home/recruitment-illustration.avif"
      imageAlt="Illustration recrutement"
      ctaLabel="Voir les offres"
      ctaHref="/recruitment"
      tone="muted"
      aspect="square"
      imageFit="contain"
    />
  );
}
