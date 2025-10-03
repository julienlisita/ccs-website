// src/data/values.ts

import type { FeatureItem } from '@/components/section/FeaturesGrid';
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  HandHeart,
  Lightbulb,
  RefreshCw,
  BadgeCheck,
} from 'lucide-react';

export const values: ReadonlyArray<FeatureItem> = [
  {
    icon: HeartHandshake,
    title: 'Empathie',
    description:
      'Nous croyons en l’importance de l’écoute et de la compréhension des besoins de chaque individu. Notre équipe s’engage à créer des relations humaines authentiques basées sur le respect et la bienveillance, aﬁn d’apporter un soutien réconfortant à ceux qui en ont besoin.',
  },
  {
    icon: Users,
    title: 'Respect',
    description:
      'Nous traitons chaque client avec dignité et égard, en tenant compte de leurs souhaits, préférences et valeurs personnelles. Respecter l’autonomie et la vie privée de nos clients est primordial pour nous.',
  },
  {
    icon: BadgeCheck,
    title: 'Professionnalisme',
    description:
      'Nos intervenants sont soigneusement sélectionnés et formés pour offrir un service de qualité. Nous nous engageons à respecter les normes les plus élevées en matière de compétence, de ﬁabilité et de rigueur dans toutes nos interventions.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptabilité',
    description:
      'Nous comprenons que chaque situation est unique. C’est pourquoi nous nous efforçons de nous adapter aux besoins spéciﬁques de nos clients, en proposant des services sur mesure et ﬂexibles qui s’ajustent à leur rythme de vie.',
  },
  {
    icon: HandHeart,
    title: 'Solidarité',
    description:
      'Nous croyons en la force des liens humains. En tant qu’agence d’aide à la personne, nous favorisons une approche collaborative, en travaillant main dans la main avec les familles, les professionnels de santé et d’autres acteurs pour offrir un soutien complet et harmonieux.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Nous sommes en constante recherche de solutions novatrices pour améliorer nos services et répondre aux déﬁs actuels. Nous utilisons les nouvelles technologies et les meilleures pratiques pour garantir un accompagnement à la pointe et efﬁcace.',
  },
] as const;
