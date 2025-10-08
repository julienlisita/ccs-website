// src/components/home/AidsSectionHome.tsx

import SplitSection from '@/components/section/SplitSection';

export default function AidsSectionHome() {
  return (
    <SplitSection
      eyebrow="Aide"
      title="Aides Financières pour Soins à Domicile"
      subtitle="Découvrez les différentes aides financières disponibles pour les soins à domicile. Ces ressources peuvent vous aider à alléger le coût des services nécessaires pour le bien-être de vos proches."
      imageSrc="/images/aides-illu.png"
      imageAlt=""
      ctaLabel="En savoir plus"
      ctaHref="/aides"
      tone="muted"
      reverse
    />
  );
}
