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
      <a href="mailto:contact.ccs@ccs.com" className="underline hover:no-underline">
        contact.ccs@ccs.com
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
        Résidence Mosaïque Bât 3 - 86 Avenue Léon Blum 33110 Le Bouscat
      </a>
    ),
  },
] as const;
