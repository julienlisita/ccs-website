// src/data/aids.ts

import type { FeatureItem } from '@/components/section/FeaturesGrid';
import { Handshake, Accessibility, Euro, Landmark } from 'lucide-react';

export const aids: ReadonlyArray<FeatureItem> = [
  {
    icon: Handshake,
    title: 'APA (Allocation Personnalisée d’Autonomie)',
    description: 'Pour les personnes âgées de 60 ans et + en perte d’autonomie.',
    href: 'https://www.service-public.fr/particuliers/vosdroits/F10009',
    linkLabel: 'En savoir plus',
  },
  {
    icon: Accessibility,
    title: 'PCH (Prestation de Compensation du Handicap)',
    description: 'Pour les personnes en situation de handicap.',
    href: 'https://www.service-public.fr/particuliers/vosdroits/F14202',
    linkLabel: 'En savoir plus',
  },
  {
    icon: Euro,
    title: 'Crédit d’impôt / réduction d’impôt',
    description: 'Jusqu’à 50 % sur certaines prestations à domicile.',
    href: 'https://www.service-public.fr/particuliers/vosdroits/F12',
    linkLabel: 'En savoir plus',
  },
  {
    icon: Landmark,
    title: 'Caisses de retraite & mutuelles',
    description: 'Aides ponctuelles ou régulières selon les contrats.',
    href: 'https://www.service-public.fr/particuliers/vosdroits/F2652',
    linkLabel: 'En savoir plus',
  },
] as const;
