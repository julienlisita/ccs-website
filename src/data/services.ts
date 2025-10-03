// src/data/services.ts

import type { FeatureItem } from '@/components/section/FeaturesGrid';
import { FileText, BrushCleaning, Utensils, UserCheck, Handshake } from 'lucide-react';

export const services: ReadonlyArray<FeatureItem> = [
  {
    icon: BrushCleaning,
    title: 'Aide-ménagère',
    description:
      'Un intérieur propre et agréable grâce à notre aide au ménage et à la gestion du linge.',
  },
  {
    icon: Utensils,
    title: 'Aide aux repas',
    description:
      'Un accompagnement pour la préparation, la prise et la surveillance des repas, adapté aux besoins nutritionnels de chacun.',
  },
  {
    icon: UserCheck,
    title: 'Aide à l’autonomie',
    description:
      'Un accompagnement adapté pour préserver votre indépendance et votre sécurité au quotidien.',
  },
  {
    icon: FileText,
    title: 'Aide administrative',
    description:
      'Un soutien dans vos démarches administratives, la gestion de vos documents et vos rendez-vous importants.',
  },
  {
    icon: Handshake,
    title: 'Compagnie et soutien',
    description: 'Rompre la solitude avec des moments d’échange, d’écoute et de convivialité.',
  },
] as const;
