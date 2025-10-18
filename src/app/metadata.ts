// src/app/metadata.ts

export const metadata = {
  title: 'Compagnie Care & Services – Aide à domicile en Charente & Gironde',
  description:
    'Compagnie Care & Services propose des services d’aide à domicile personnalisés en Charente et en Gironde : accompagnement des personnes âgées, entretien du logement, aide à la mobilité et bien plus.',
  metadataBase: new URL('https://careetservices.pro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Compagnie Care & Services – Aide à domicile en Charente & Gironde',
    description:
      'Découvrez nos prestations d’aide à domicile, d’accompagnement et de maintien à domicile pour personnes âgées et en situation de handicap.',
    url: 'https://careetservices.pro',
    siteName: 'Compagnie Care & Services',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://careetservices.pro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compagnie Care & Services – aide à domicile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compagnie Care & Services',
    description:
      'Votre partenaire de confiance pour l’aide à domicile en Charente et en Gironde. Services humains, professionnels et adaptés à vos besoins.',
    images: ['https://careetservices.pro/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Compagnie Care & Services',
  },
};
