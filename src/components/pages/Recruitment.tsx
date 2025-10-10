// src/components/pages/Recruitment.tsx

import RecruitmentClient from '@/components/pages/RecruitmentClient';
import JobOffersSectionServer from '../section/JobOffersSectionServer';
import { Suspense } from 'react';
import HeroIntro from '../section/HeroIntro';
import { FileText } from 'lucide-react';
import Cta from '../ui/Cta';

export default async function Recruitment() {
  return (
    <>
      <HeroIntro
        icon={<FileText size={40} />}
        title="Recrutement"
        subtitle="Découvrez nos opportunités et rejoignez notre équipe."
        align="center"
        backgroundImage="/images/hero/recruitment-bg.avif"
        overlayOpacity={0.4}
      />
      <JobOffersSectionServer />
      <Suspense fallback={<div>Chargement…</div>}>
        <RecruitmentClient />;
      </Suspense>
      <Cta
        title="Une question sur le recrutement ?"
        description="Notre équipe est à votre écoute pour vous renseigner."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </>
  );
}
