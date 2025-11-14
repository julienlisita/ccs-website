// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
// import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import NewsSectionHomeServer from '../section/NewsSectionHomeServer';
import RecruitmentSectionHome from '../section/RecruitmentSectionHome';
import AboutTeaser from '../section/AboutTeaser';
import AidsTeaser from '../section/AidsTeaser';
import ServicesTeaser from '../section/ServicesTeaser';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <AidsTeaser />
      {/* <TestimonialsSectionHomeServer /> */}
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
