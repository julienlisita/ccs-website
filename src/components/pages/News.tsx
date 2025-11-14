// src/components/pages/News.tsx

import { Newspaper } from 'lucide-react';
import NewsSectionServer from '../section/NewsSectionServer';
import Cta from '../ui/Cta';
import HeroPage from '../section/HeroPage';

export default function NewsPageView() {
  return (
    <div>
      <HeroPage
        icon={<Newspaper size={40} />}
        title="Actualités"
        subtitle="Retrouvez les dernières nouvelles, articles et mises à jour."
        align="center"
        backgroundImage="/images/hero/news-bg.avif"
        overlayOpacity={0.4}
      />
      <NewsSectionServer />
      <Cta
        title="Restez informés de nos dernières actualités."
        description="Pour rester informé ou poser vos questions, contactez notre équipe."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
