// src/data/contact.tsx

import type { FeatureItem } from '@/components/section/FeaturesGrid';
import { Phone, Mail, MapPin } from 'lucide-react';

export const contactInfos: ReadonlyArray<FeatureItem> = [
  {
    icon: Phone,
    title: 'Téléphone',
    description: (
      <a href="tel:+33612345678" className="underline hover:no-underline">
        06 12 57 52 42
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    description: (
      <a href="mailto:contact@careetservices.pro" className="underline hover:no-underline">
        contact@careetservices.pro
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Adresse',
    description: (
      <a
        href="https://maps.app.goo.gl/jEaYBxjJpJS6SqQH7"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        5 rue fenélon, 33000 Bordeaux
      </a>
    ),
  },
] as const;
