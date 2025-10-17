// src/app/thank-you-application/page.tsx

import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Candidature envoyée – Compagnie Care & Services',
  description:
    'Merci pour votre candidature ! Votre profil a bien été transmis à notre équipe RH. Nous vous contacterons si votre profil correspond à nos besoins actuels.',
  alternates: {
    canonical: 'https://careetservices.pro/thank-you-application',
  },
};

export default function ThankYouApplicationPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-semibold text-[#785F49] mb-4">Merci pour votre candidature !</h1>
      <p className="text-[#785F49]/80 max-w-lg mb-4">
        Votre profil a bien été transmis à notre équipe. <br />
        Si votre candidature correspond à nos besoins actuels, nous vous contacterons rapidement.
      </p>
      <Button href="/">Retour à l'accueil</Button>
    </main>
  );
}
