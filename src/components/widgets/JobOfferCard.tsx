// src/components/widgets/JobOfferCard.tsx

'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import './JobOfferCard.css';
import Link from 'next/link';

type JobOfferCardProps = {
  title: string;
  location: string;
  description: string;
  contractType: string; // ex: "CDI - Temps partiel"
  publishedAt: string; // date ISO
  slug: string;
};

export function JobOfferCard({
  title,
  location,
  description,
  contractType,
  publishedAt,
  slug,
}: JobOfferCardProps) {
  return (
    <div className="job-card">
      {/* Header */}
      <div className="job-card-header">
        <h3 className="job-card-title">{title}</h3>
      </div>

      {/* Description */}
      <p className="job-card-description">{description}</p>

      {/* Infos complémentaires */}
      <div className="job-card-meta">
        <span className="meta-item">
          <MapPin size={16} /> {location}
        </span>
        <span className="meta-item">
          <Clock size={16} /> {contractType}
        </span>
        <span className="meta-item">
          <Calendar size={16} /> Publié le{' '}
          {new Date(publishedAt).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <div>
        <Button
          href={`/recruitment/${slug}`}
          variant="secondary"
          aria-label={`Voir l’offre ${title}`}
        >
          Voir l’offre{' '}
          <span className="ml-2" aria-hidden="true">
            &rsaquo;
          </span>
        </Button>
      </div>
    </div>
  );
}
