// src/app/legal/privacy/page.tsx

import Privacy from '@/components/pages/legal/Policy';

export const metadata = {
  title: 'Politique de confidentialité – Compagnie Care & Services',
  description:
    'Consultez la politique de confidentialité de Compagnie Care & Services : gestion des données personnelles, cookies et droits des utilisateurs.',
  alternates: {
    canonical: 'https://careetservices.pro/legal/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
