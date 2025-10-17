// src/app/news/page.tsx

import News from '@/components/pages/News';

export const metadata = {
  title: 'Actualités - Compagnie Care & Services',
  description:
    'Suivez les actualités et les conseils de Compagnie Care & Services : informations sur le secteur de l’aide à domicile, événements et initiatives locales.',
  alternates: {
    canonical: 'https://careetservices.pro/news',
  },
};

export default function NewsPage() {
  return <News />;
}
