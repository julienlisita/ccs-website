// src/app/not-found.tsx

import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Page introuvable – Compagnie Care & Services',
  description:
    'La page que vous recherchez n’existe pas ou a été déplacée. Retournez à l’accueil pour poursuivre votre navigation sur Compagnie Care & Services.',
  alternates: {
    canonical: 'https://careetservices.pro/404',
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-[#BA805B] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#785F49] mb-2">Page introuvable</h2>
      <p className="text-[#785F49]/80 max-w-lg mb-8">
        Désolé, la page que vous recherchez n’existe pas ou a été déplacée. Retournez à l’accueil
        pour poursuivre votre navigation.
      </p>

      <Button href="/">Retour à l'accueil</Button>
    </main>
  );
}
