// src/components/form/JobApplicationForm.tsx

'use client';

import { useState } from 'react';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import Button from '../ui/Button';
import { sendApplication } from '@/app/recruitment/actions';
import './JobApplicationForm.css';
import Radio from './Radio';

type JobApplicationFormProps = {
  jobTitle: string;
};

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [fileName, setFileName] = useState('');

  // on "lie" le titre de l’offre à l’action serveur
  const formAction = sendApplication.bind(null, jobTitle);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <form className="job-form" action={formAction}>
      <h2 className="job-form-title">Postuler à : {jobTitle}</h2>

      {/* Civilité */}
      <div className="mb-4">
        <span className="block text-[#785F49] mb-2 font-medium">Civilité</span>
        <div className="flex flex-wrap gap-6">
          <Radio name="civilite" value="Mme" label="Mme" />
          <Radio name="civilite" value="M." label="M." />
        </div>
      </div>

      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FloatingInput name="prenom" label="Prénom" required />
        <FloatingInput name="nom" label="Nom" required />
      </div>

      {/* Email */}
      <FloatingInput name="email" label="Adresse email" type="email" required />

      {/* Message */}
      <FloatingTextarea name="message" label="Message" rows={5} required />

      {/* CV */}
      <div className="file-upload mt-4">
        <label htmlFor="cv" className="block text-[#785F49]  font-medium">
          Joindre un CV
        </label>

        <div className="relative">
          <Button variant="secondary">
            <label htmlFor="cv" className="cursor-pointer">
              Sélectionner un fichier{' '}
              <span className="ml-2" aria-hidden="true">
                &rsaquo;
              </span>
            </label>
          </Button>

          {/* Input masqué */}
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Nom du fichier affiché */}
        {fileName && (
          <p className="file-name mt-2 text-sm text-[#785F49] italic">
            Fichier sélectionné : {fileName}
          </p>
        )}
      </div>

      {/* Bouton d’envoi */}
      <div className="mt-6 text-left">
        <Button type="submit" variant="primary">
          Envoyer la candidature
        </Button>
      </div>
    </form>
  );
}
