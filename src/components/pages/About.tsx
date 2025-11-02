// src/components/pages/About.tsx

import Cta from '../ui/Cta';
import HeroIntro from '../section/HeroIntro';
import { Users } from 'lucide-react';
import ValuesSection from '../section/ValueSection';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import SplitSection from '../section/SplitSection';

export default function About() {
  return (
    <div>
      <HeroIntro
        icon={<Users size={40} />}
        title="Qui sommes-nous ?"
        subtitle="Découvrez notre équipe, nos valeurs et notre vision."
        align="center"
        backgroundImage="/images/hero/about-bg.avif"
      />
      {/* 1) Intro texte seul (titre de page) */}
      <Section>
        <SectionWrapper>
          <SectionTitle className="text-center sm:text-left">Présentation</SectionTitle>
          <p className="text-center sm:text-left text-base sm:text-lg text-dark mt-4">
            Bienvenue dans notre agence d'aide à la personne, où notre mission est de vous offrir un
            accompagnement personnalisé et de qualité pour améliorer votre quotidien. Fondée par des
            passionnés du bien-être et de l'autonomie, notre équipe se consacre à soutenir les
            personnes dans le besoin, qu'il s'agisse de personnes âgées, de personnes en situation
            de handicap ou de toute personne nécessitant une aide ponctuelle.
          </p>
        </SectionWrapper>
      </Section>

      {/* 2) Nos services (aperçu) */}
      <SplitSection
        eyebrow="Nos services"
        title="Des prestations adaptées à chaque besoin"
        content={
          <p>
            Nous comprenons que chaque individu a des besoins uniques et que la vie peut parfois
            devenir complexe. C’est pourquoi nous proposons une large gamme de services, notamment
            l’aide-ménagère, l’aide aux repas, le soutien à l’autonomie, l’assistance administrative
            et un service de compagnie. Chacun de nos intervenants est soigneusement sélectionné et
            formé pour garantir un accompagnement respectueux, chaleureux et professionnel.
          </p>
        }
        imageSrc="/images/about/about-mission.png"
        imageAlt="Aperçu des services à domicile"
        aspect="landscape"
      />

      {/* 3) Notre approche (écoute & empathie) */}
      <SplitSection
        eyebrow="Notre approche"
        title="Écoute, empathie et relation de confiance"
        content={
          <p>
            Notre approche repose sur l’écoute et l’empathie. Nous travaillons main dans la main
            avec nos clients et leurs familles pour instaurer une relation de conﬁance et leur
            permettre de conserver leur indépendance tout en bénéﬁciant d’un soutien indispensable.
            Nous croyons fermement que le bien-être passe par la dignité, le respect et le maintien
            des liens sociaux.
          </p>
        }
        imageSrc="/images/about/companionship-care.png"
        imageAlt="Écoute et accompagnement au domicile"
        aspect="square"
        reverse
      />

      {/* 4) Qualité & flexibilité */}
      <SplitSection
        className="pb-8 sm:pb-10 md:pb-12 lg:pb-16"
        eyebrow="Engagement qualité"
        title="Prestation fiable et flexible"
        content={
          <p>
            Nous nous engageons à offrir des services de qualité qui répondent réellement aux
            attentes de nos clients, tout en veillant à la ﬂexibilité de nos interventions pour
            s’adapter à vos horaires et à vos besoins spéciﬁques.
          </p>
        }
        imageSrc="/images/about/quality-flexibility.png"
        imageAlt="Intervention de qualité et flexible"
        aspect="landscape"
      />

      {/* 5) Conclusion */}
      <Section bgColor="cream">
        <SectionWrapper className="text-center">
          <p className="mx-auto max-w-3xl font-bold sm:text-lg text-dark pb-8 sm:pb-10 md:pb-12 lg:pb-16">
            Nous sommes là pour vous accompagner, vous épauler, et améliorer votre qualité de vie au
            quotidien. Merci de nous faire conﬁance dans cette mission si importante. Ensemble,
            faisons en sorte que chaque jour soit plus lumineux et agréable.
          </p>
        </SectionWrapper>
      </Section>
      <ValuesSection />
      <Cta
        title="Envie d’en savoir plus sur nos services ?"
        description="Notre équipe est disponible pour répondre à vos questions et discuter de vos besoins."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
