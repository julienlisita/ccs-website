// src/data/jobOffers.ts

import type { JobOffer } from '@/types/job';

export const jobOffers: ReadonlyArray<JobOffer> = [
  {
    id: 1,
    slug: 'astreinte-administrative',
    title: 'Astreinte administrative – Remplacement / Soutien',
    location: 'Gironde & Charente',
    contractType: 'Astreinte – Indemnités + interventions',
    publishedAt: '2025-10-30T09:00:00Z',
    description:
      'Assurer la continuité du service administratif en cas d’absence ou hors horaires habituels. Relais téléphonique, gestion des urgences, mises à jour planning, reporting.',
    service: 'Administration / Coordination – Services à la personne',
    reportingLine: 'Responsable d’agence / Responsable administrative',
    missionStatement:
      'Assurer la continuité du service administratif pour garantir le bon fonctionnement de l’activité et la qualité du service rendu aux bénéficiaires et aux intervenants.',
    sections: [
      {
        key: 'missions',
        title: 'Missions principales',
        groups: [
          {
            title: '1) Gestion administrative courante',
            items: [
              'Relais téléphonique et traitement des urgences.',
              'Traitement des mails et courriers urgents.',
              'Transmission des informations (bénéficiaires, intervenants, urgences, absences).',
              'Mise à jour des plannings si nécessaire (remplacements, imprévus).',
              'Rédaction et transmission des comptes rendus.',
            ],
          },
          {
            title: '2) Soutien opérationnel au service d’intervention',
            items: [
              'Relais d’informations entre intervenants et coordination.',
              'Aide à la gestion des remplacements / organisation de dernière minute.',
              'Vérification de la conformité des interventions (heures, bénéficiaires).',
            ],
          },
          {
            title: '3) Suivi des bénéficiaires et de la qualité',
            items: [
              'Garantir la continuité du service (écoute, réactivité, empathie).',
              'Remonter toute situation à risque (chute, hospitalisation, maltraitance présumée).',
              'Informer le responsable des incidents nécessitant un suivi.',
            ],
          },
          {
            title: '4) Reporting et communication',
            items: [
              'Tenue du registre d’astreinte et traçabilité des actions.',
              'Rapport synthétique en fin d’astreinte à la direction / agence.',
              'Communication fluide avec les équipes pour la continuité du service.',
            ],
          },
        ],
      },
      {
        key: 'skills',
        title: 'Compétences requises',
        items: [
          'Connaissance du secteur SAP / médico-social.',
          'Maîtrise des outils bureautiques et de planification.',
          'Excellente expression écrite et orale.',
          'Sens du service, réactivité, discrétion.',
          'Gestion du stress, priorisation des urgences.',
        ],
      },
      {
        key: 'profile',
        title: 'Profil recherché',
        items: [
          'Expérience en assistance administrative ou coordination à domicile.',
          'Connaissance des publics fragiles et du cadre réglementaire.',
          'Autonomie, sens des responsabilités, fiabilité.',
        ],
      },
    ],
    scheduleNote: 'Soirs, week-ends et jours fériés selon planning d’astreinte.',
    workMode: 'Astreinte téléphonique à domicile et/ou présence sur site selon besoins.',
    remunerationNote: 'Indemnité d’astreinte + paiement des interventions selon convention BAD.',
    equipments: ['Téléphone professionnel', 'Accès logiciel', 'Documentation interne'],
  },
] as const;
