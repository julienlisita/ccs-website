// src/components/pages/legal/Policy.tsx

import { Shield } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import HeroPage from '@/components/section/HeroPage';

export default function Privacy() {
  return (
    <div>
      <HeroPage
        icon={<Shield size={40} />}
        title="Politique de confidentialité"
        subtitle="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
        align="center"
      />

      {/* 1. Données collectées */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">1. Données collectées</h2>
          <p>
            Nous recueillons uniquement les informations nécessaires au traitement de vos demandes
            via les formulaires de contact et de candidature :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail et/ou téléphone</li>
            <li>Message (objet de la demande)</li>
            <li>CV et lettre de motivation (candidatures)</li>
          </ul>
        </SectionWrapper>
      </Section>

      {/* 2. Finalités du traitement */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">2. Finalités du traitement</h2>
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Répondre à vos demandes d’information</li>
            <li>Étudier votre candidature le cas échéant</li>
          </ul>
          <p className="mt-1">Aucune donnée n’est cédée ni utilisée à des fins commerciales.</p>
        </SectionWrapper>
      </Section>

      {/* 3. Base légale & durée de conservation */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">3. Base légale & durée de conservation</h2>
          <p>
            Le traitement repose sur votre consentement et/ou notre intérêt légitime à répondre à
            votre demande. Les données sont conservées uniquement pendant le temps nécessaire à leur
            traitement, puis supprimées.
          </p>
        </SectionWrapper>
      </Section>

      {/* 4. Sécurité */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">4. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
            protéger vos informations contre tout accès non autorisé, altération ou divulgation.
          </p>
        </SectionWrapper>
      </Section>

      {/* 5. Vos droits */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de
            suppression, ainsi que d’un droit d’opposition et de limitation du traitement.
          </p>
          <p>
            Pour exercer vos droits :{' '}
            <span className="text-[#BA805B] font-medium">
              <a href="mailto:contact@careetservices.pro" className="underline hover:no-underline">
                contact@careetservices.pro
              </a>
            </span>
          </p>
        </SectionWrapper>
      </Section>

      {/* 6. Responsable du traitement */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">6. Responsable du traitement</h2>
          <p>
            Le responsable du traitement est <strong>Compagnie Care & Services</strong>. Les
            informations d’identification complètes (éditeur, adresse, SIRET, hébergeur) sont
            disponibles dans nos{' '}
            <a href="/legal/imprint" className="text-[#BA805B] hover:underline">
              Mentions légales
            </a>
            .
          </p>
        </SectionWrapper>
      </Section>

      {/* 7. Mise à jour */}
      <Section>
        <SectionWrapper className="text-[#785F49] pb-8 sm:pb-10 md:pb-12 lg:pb-16">
          <h2 className="text-xl font-semibold">7. Mise à jour</h2>
          <p>
            La présente politique peut être modifiée à tout moment pour tenir compte des évolutions
            légales ou techniques. Dernière mise à jour : {new Date().getFullYear()}.
          </p>
        </SectionWrapper>
      </Section>
    </div>
  );
}
