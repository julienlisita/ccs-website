// src/components/sections/Hero.tsx

'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
// import './Hero.css';

export default function Hero() {
  return (
    <section
      className="hero w-full  flex flex-col justify-center  text-[#3B2F2F] px-4 text-center"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/hero.avif') " }}
      />
      {/* Overlay noir avec opacité */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Logo */}
      <div className="max-w-4xl mx-auto space-y-6 z-10">
        <div className="flex justify-center">
          <Image
            src="/images/logoWithoutText.png"
            alt="Company Care & Services logo"
            width={200}
            height={200}
          />
        </div>
        <PageTitle color="#FFFFFF"> Compagnie Care & Services</PageTitle>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white">
          Un accompagnement humain et professionnel à domicile
        </h2>
        <p className="text-sm sm:text-lg text-white/80">
          En Charente et en Gironde, nous vous épaulons au quotidien
        </p>
        <Button variant="primary" href="/contact">
          Nous contacter
        </Button>
      </div>
    </section>
  );
}
