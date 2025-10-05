// src/components/pages/Home.tsx

import { HandCoins } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import Cta from '../ui/Cta';
import AidsSection from '../section/AidsSection';

export default function Aids() {
  return (
    <div>
      <HeroIntro
        icon={<HandCoins size={40} />}
        title="Aides & financements"
        subtitle="Retrouvez les dernières nouvelles, articles et mises à jour."
        align="center"
      />
      <AidsSection />
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
