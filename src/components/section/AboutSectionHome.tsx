// src/components/sections/AboutSectionHome.tsx

import SplitSection from './SplitSection';

export default function AboutSectionHome() {
  return (
    <SplitSection
      eyebrow="À VOS CÔTÉS AU QUOTIDIEN"
      title="Une entreprise familiale au service du lien humain"
      content={
        <p>
          Basée en Charente et en Gironde, notre équipe s’engage chaque jour pour apporter une
          présence attentive et des services de qualité à domicile. Nous croyons que le maintien à
          domicile est avant tout une question d’écoute, de confiance et de proximité. Derrière
          chaque prestation, il y a une histoire, un sourire, une relation qui se construit dans la
          durée.
        </p>
      }
      imageSrc="/images/home/team-illustration.avif"
      imageAlt="Illustration d’une équipe souriante dans un cadre chaleureux"
      aspect="square"
      ctaLabel="En savoir plus"
      ctaHref="/about"
      tone="muted"
    />
  );
}
