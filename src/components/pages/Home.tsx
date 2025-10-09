// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
import ServicesFeaturesIntro from '../section/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import NewsSectionHomeServer from '../section/NewsSectionHomeServer';
import AidsSectionHome from '../section/AidsSectionHome';
import RecruitmentSectionHome from '../section/RecruitmentSectionHome';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesFeaturesIntro />
      <AidsSectionHome />
      <TestimonialsSectionHomeServer />
      <NewsSectionHomeServer />
      <RecruitmentSectionHome />
      <Cta
        title="Prêt à en savoir plus ?"
        description="Contactez-nous dès aujourd’hui pour découvrir comment nous pouvons vous accompagner."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
