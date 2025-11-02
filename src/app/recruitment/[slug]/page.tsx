// app/recruitment/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { jobOffers } from '@/data/jobOffers';
import HeroIntro from '@/components/section/HeroIntro';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import { Briefcase } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Button from '@/components/ui/Button';

// --- SSG : génère toutes les pages de détail à partir des slugs connus ---
export async function generateStaticParams() {
  return jobOffers.map((o) => ({ slug: o.slug }));
}

// (optionnel) : revalidate 0 pour éviter un cache agressif en dev
export const revalidate = 0;

export default async function JobOfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = jobOffers.find((o) => o.slug === slug);
  if (!offer) return notFound();

  const pubDate = format(new Date(offer.publishedAt), 'd MMMM yyyy', { locale: fr });

  return (
    <div>
      <HeroIntro
        icon={<Briefcase size={40} />}
        title={offer.title}
        subtitle={`${offer.location} • ${offer.contractType} • Publiée le ${pubDate}`}
        align="center"
      />

      {/* En-tête / méta */}
      <Section>
        <SectionWrapper className="text-[#785F49]">
          {offer.missionStatement && (
            <>
              <h2 className="text-xl font-semibold">Objectif du poste</h2>
              <p>{offer.missionStatement}</p>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {offer.service && (
              <div>
                <div className="text-sm opacity-70">Service</div>
                <div>{offer.service}</div>
              </div>
            )}
            {offer.reportingLine && (
              <div>
                <div className="text-sm opacity-70">Rattachement</div>
                <div>{offer.reportingLine}</div>
              </div>
            )}
            {offer.workMode && (
              <div>
                <div className="text-sm opacity-70">Mode de travail</div>
                <div>{offer.workMode}</div>
              </div>
            )}
            {offer.scheduleNote && (
              <div>
                <div className="text-sm opacity-70">Horaires</div>
                <div>{offer.scheduleNote}</div>
              </div>
            )}
            {offer.remunerationNote && (
              <div className="sm:col-span-2">
                <div className="text-sm opacity-70">Rémunération</div>
                <div>{offer.remunerationNote}</div>
              </div>
            )}
            {!!offer.equipments?.length && (
              <div className="sm:col-span-2">
                <div className="text-sm opacity-70">Matériel fourni</div>
                <ul className="list-disc ml-5 space-y-1">
                  {offer.equipments!.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </SectionWrapper>
      </Section>

      {/* Sections détaillées (missions, compétences, profil, etc.) */}
      {offer.sections?.map((sec) => (
        <Section key={sec.key}>
          <SectionWrapper className="text-[#785F49]">
            <h2 className="text-xl font-semibold">{sec.title}</h2>

            {!!sec.items?.length && (
              <ul className="list-disc ml-5 space-y-1">
                {sec.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            )}

            {!!sec.groups?.length &&
              sec.groups.map((g, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-medium">{g.title}</h3>
                  <ul className="list-disc ml-5 space-y-1">
                    {g.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </SectionWrapper>
        </Section>
      ))}

      {/* CTA candidature */}
      <Section>
        <SectionWrapper className="text-center py-10">
          <div className="bg-[#D8973C]/10 border border-[#D8973C]/30 rounded-2xl p-8 inline-block shadow-sm">
            <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">
              Ce poste vous correspond ?
            </h2>
            <p className="text-[#785F49] mb-6">
              Rejoignez l’équipe Compagnie Care & Services et contribuez à améliorer le quotidien de
              nos bénéficiaires.
            </p>
            <Button
              href={`/recruitment?apply=${encodeURIComponent(offer.title)}`}
              variant="primary"
              aria-label={`Postuler à l'offre ${offer.title}`}
            >
              Postuler à cette offre
              <span className="ml-2" aria-hidden="true">
                &rsaquo;
              </span>
            </Button>
          </div>
        </SectionWrapper>
      </Section>
    </div>
  );
}
