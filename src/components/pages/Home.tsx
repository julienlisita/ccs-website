// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
import ServicesFeaturesIntro from '../section/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import NewsSectionHomeServer from '../section/NewsSectionHomeServer';
import AidsSectionHome from '../section/AidsSectionHome';
import RecruitmentSectionHome from '../section/RecruitmentSectionHome';
import AboutSectionHome from '../section/AboutSectionHome';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSectionHome />
      <ServicesFeaturesIntro />
      <AidsSectionHome />
      <TestimonialsSectionHomeServer />
      <NewsSectionHomeServer />
      <RecruitmentSectionHome />
      <Cta
        title="Besoin d’un accompagnement au quotidien ?"
        description="Nous sommes à vos côtés en Charente et en Gironde."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
