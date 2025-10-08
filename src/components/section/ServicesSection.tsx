// src/components/Section/ServicesSection.tsx

'use client';

import { BrushCleaning, FileText, Handshake, UserCheck, Utensils } from 'lucide-react';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import Split from '../patterns/Split';
import SectionTitle from '../ui/SectionTitle';

type Props = {
  className?: string;
};

export default function ServicesSection({ className }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle align="left">Nos Prestations</SectionTitle>
        <div className="mt-10 space-y-16">
          <Split
            icon={<BrushCleaning />}
            as="article"
            titleLevel={3}
            title="Aide-ménagère"
            imageSrc="/images/services/home-cleaning-service.avif"
            imageAlt=""
            reverse
          >
            <p>
              Nous proposons un service d’aide-ménagère pour vous soulager des tâches domestiques.
              Nos professionnels formés peuvent vous assister dans:
            </p>
            <ul className="list-disc pl-6 text-left inline-block">
              <li>
                Le nettoyage et l’entretien de votre intérieur (aspiration, dépoussiérage, lavage
                des sols, etc.)
              </li>
              <li>Le rangement de vos espaces de vie</li>
              <li>La gestion de votre linge (lavage, repassage, pliage)</li>
            </ul>
            <p>
              Ce service est idéal pour maintenir un environnement sain et agréable, tout en vous
              permettant de proﬁter de votre temps libre.
            </p>
          </Split>
          <Split
            as="article"
            icon={<Utensils />}
            titleLevel={3}
            title="Aide aux repas"
            imageSrc="/images/services/meal-assistance.avif"
            imageAlt=""
          >
            <p>
              Notre équipe s’occupe de la préparation de vos repas pour garantir une alimentation
              saine et équilibrée. Que ce soit pour :
            </p>
            <ul className="list-disc pl-6 text-left inline-block">
              <li>
                La préparation de plats faits maison selon vos préférences et régimes alimentaires
              </li>
              <li>
                L’aide à la prise de repas pour ceux rencontrant des difﬁcultés de mobilité. Nous
                veillons à ce que chaque repas soit un moment de convivialité.
              </li>
            </ul>
          </Split>
          <Split
            icon={<UserCheck />}
            as="article"
            titleLevel={3}
            title="Aide à l’autonomie"
            imageSrc="/images/services/personal-assistance.avif"
            imageAlt=""
            reverse
          >
            <p>
              Nous soutenons votre autonomie en vous offrant un accompagnement adapté à vos besoins.
              Nos intervenants sont formés pour :
            </p>
            <ul className="list-disc pl-6 text-left inline-block">
              <li>Aider à la toilette et à l’hygiène personnelle</li>
              <li>
                Accompagner pour les déplacements à l’extérieur (médecin, courses, promenades)
              </li>
              <li>Assister lors des activités quotidiennes (habillage, déplacement, etc.)</li>
            </ul>
            <p>
              Notre objectif est de vous permettre de maintenir votre indépendance tout en assurant
              votre sécurité.
            </p>
          </Split>
          <Split
            as="article"
            icon={<FileText />}
            titleLevel={3}
            title="Aide administrative"
            imageSrc="/images/services/administrative-support.avif"
            imageAlt=""
          >
            <p>
              Nous comprenons que les démarches administratives peuvent être complexes et
              chronophages. C’est pourquoi nous vous proposons une assistance pour :
            </p>
            <ul className="list-disc pl-6 text-left inline-block">
              <li>La gestion de vos papiers et documents administratifs</li>
              <li>L’aide à la rédaction de courriers et formulaires</li>
              <li>La prise de rendez-vous et le suivi de vos dossiers</li>
            </ul>
            <p>
              Nos intervenants sont là pour vous simpliﬁer la vie et vous aider à naviguer dans les
              obligations administratives.
            </p>
          </Split>
          <Split
            icon={<Handshake />}
            as="article"
            titleLevel={3}
            title="Compagnie et soutien"
            imageSrc="/images/services/companionship-care.avif"
            imageAlt=""
            reverse
          >
            <p>
              La solitude peut être difﬁcile à vivre, c’est pourquoi nous offrons un service de
              compagnie pour créer du lien et apporter du soutien moral. Nos agents sont là pour :
            </p>
            <ul className="list-disc pl-6 text-left inline-block">
              <li>Passer du temps ensemble (jeux de société, discussions, promenades)</li>
              <li>Écouter et apporter une présence réconfortante</li>
              <li>Organiser des activités selon vos centres d’intérêt</li>
            </ul>
            <p>
              Nous croyons en l’importance des relations humaines pour le bien-être et nous nous
              engageons à être à vos côtés.
            </p>
          </Split>
        </div>
      </SectionWrapper>
    </Section>
  );
}
