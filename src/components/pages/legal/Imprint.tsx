// src/components/pages/legal/Imprint.tsx

import { Scale } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import HeroPage from '@/components/section/HeroPage';

export default function Imprint() {
  return (
    <div>
      <HeroPage
        icon={<Scale size={40} />}
        title="Mentions légales"
        subtitle="Informations légales concernant l’édition et l’hébergement du site de Compagnie Care & Services."
        align="center"
      />

      {/* Éditeur */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p>
            <strong>Compagnie Care & Services</strong>
            <br />
            Entreprise d’aide à domicile en Charente et en Gironde
            <br />
            Siège social : <span className="opacity-80">5 rue Fénelon, 33000 Bordeaux</span>
            <br />
            Téléphone : <span className="opacity-80">06 12 57 52 42</span>
            <br />
            Email : <span className="opacity-80">contact@careetservices.pro</span>
            <br />
            Représentant légal / Responsable de publication :{' '}
            <span className="opacity-80">Mlle Lesly-Meghan NKAZAMYAMPI</span>
            <br />
            Forme juridique : <span className="opacity-80">SAS</span>
            <br />
            SIRET : <span className="opacity-80">938 298 759</span>
          </p>
        </SectionWrapper>
      </Section>

      {/* Hébergement */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>
            Le site <strong>careetservices.pro</strong> est hébergé par :<br />
            <strong>Vercel Inc.</strong>
            <br />
            <span className="opacity-80">440 N Barranca Avenue, Suite 4133</span>
            <br />
            <span className="opacity-80">Covina, CA 91723, États-Unis</span>
            <br />
            Téléphone : <span className="opacity-80">non communiqué</span>
            <br />
            Site web :{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BA805B] hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </SectionWrapper>
      </Section>

      {/* Propriété intellectuelle */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments du site <strong>Compagnie Care & Services</strong> (textes,
            images, graphismes, logo, icônes, structure, etc.) est la propriété exclusive de
            l’entreprise, sauf mention contraire. Toute reproduction, distribution, modification,
            adaptation ou publication, même partielle, est interdite sans l’accord écrit préalable
            de <strong>Compagnie Care & Services</strong>.
          </p>
        </SectionWrapper>
      </Section>

      {/* Responsabilité */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>
            <strong>Compagnie Care & Services</strong> s’efforce de fournir des informations exactes
            et à jour. Toutefois, elle ne saurait être tenue responsable des erreurs ou omissions,
            ni des dommages résultant de l’utilisation des informations présentes sur le site.
          </p>
        </SectionWrapper>
      </Section>

      {/* Données personnelles */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          <h2 className="text-xl font-semibold">Données personnelles</h2>
          <p>
            Les informations collectées via les formulaires (contact et candidature) sont utilisées
            uniquement pour traiter votre demande et ne sont pas stockées dans une base de données à
            des fins marketing. Pour en savoir plus sur vos droits (accès, rectification,
            suppression), consultez notre{' '}
            <a href="/legal/privacy" className="text-[#BA805B] hover:underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </SectionWrapper>
      </Section>

      {/* Crédits */}
      <Section>
        <SectionWrapper className="text-[#785F49] pb-8 sm:pb-10 md:pb-12 lg:pb-16">
          <h2 className="text-xl font-semibold">Crédits</h2>
          <p>
            Design & développement : <strong>Julien Lisita</strong>
            <br />
            Illustrations / Icônes : Lucide Icons, Unsplash, Freepik (ou autres ressources libres de
            droits) — si applicable
            <br />
            Dernière mise à jour : {new Date().getFullYear()}
          </p>
        </SectionWrapper>
      </Section>
    </div>
  );
}
