// src/data/news.ts

import type { NewsItem } from '@/types/news';

export const newsItems: ReadonlyArray<NewsItem> = [
  {
    id: 1,
    slug: 'emploi-a-domicile-statut',
    title: 'Tout savoir sur le statut d’employeur à domicile',
    description:
      'Informations pratiques sur les droits, obligations et avantages fiscaux liés à l’emploi d’un salarié à domicile.',
    source: 'economie.gouv.fr',
    url: 'https://www.economie.gouv.fr/particuliers/gerer-mon-impot-sur-le-revenu/emploi-domicile-ce-quil-faut-savoir-sur-le-statut-de',
    displayDate: '21 mars 2025',
    publishedAt: '2025-03-21T08:00:00Z',
    isPublished: true,
    imageUrl: '/images/news/emploi-domicile.png',
    imageAlt: 'Illustration emploi à domicile',
  },
  {
    id: 2,
    slug: 'aide-a-domicile-actualites',
    title: 'Toute l’actualité du secteur de l’aide à domicile',
    description:
      'Les dernières réformes, initiatives et informations sur le secteur de l’aide à domicile.',
    source: 'solidarites.gouv.fr',
    url: 'https://solidarites.gouv.fr/aide-domicile-0',
    displayDate: '28 juillet 2025',
    publishedAt: '2025-07-28T08:00:00Z',
    isPublished: true,
    imageUrl: '/images/news/aide-domicile.png',
    imageAlt: 'Illustration aide à domicile',
  },
  {
    id: 3,
    slug: 'personnes-agees-aidants',
    title: 'Actualités pour les personnes âgées et les aidants',
    description:
      'Ressources, conseils et dispositifs pour les personnes âgées et leurs proches aidants.',
    source: 'pour-les-personnes-agees.gouv.fr',
    url: 'https://www.pour-les-personnes-agees.gouv.fr/',
    displayDate: '20 juillet 2025',
    publishedAt: '2025-07-20T08:00:00Z',
    isPublished: true,
    imageUrl: '/images/news/personnes-agees.png',
    imageAlt: 'Illustration personnes âgées',
  },
] as const;
