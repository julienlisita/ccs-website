// src/app/recruitment/page.tsx

import Recruitment from '@/components/pages/Recruitment';

export const metadata = {
  title: 'Recrutement – Compagnie Care & Services',
  description:
    'Rejoignez Compagnie Care & Services ! Découvrez nos offres d’emploi et postulez en ligne pour contribuer à un accompagnement humain et professionnel à domicile.',
  alternates: {
    canonical: 'https://careetservices.pro/recruitment',
  },
};

export default function RecruitmentPage() {
  return <Recruitment />;
}
