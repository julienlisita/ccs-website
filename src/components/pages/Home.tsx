// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
// import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import AboutTeaser from '../section/AboutTeaser';
import AidsTeaser from '../section/AidsTeaser';
import ServicesTeaser from '../section/ServicesTeaser';
import NewsTeaserServer from '../section/NewsTeaserServer';
import RecruitmentTeaser from '../section/RecruitmentTeaser';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <AidsTeaser />
      {/* <TestimonialsSectionHomeServer /> */}
      <NewsTeaserServer />
      <RecruitmentTeaser />
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
