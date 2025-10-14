// src/components/form/JobApplicationForm.tsx

'use client';

import { useState } from 'react';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import Button from '../ui/Button';
import { sendApplication } from '@/app/recruitment/actions';
import './JobApplicationForm.css';

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
        <label className="sr-only" htmlFor="civilite">
          Civilité
        </label>
        <select
          id="civilite"
          name="civilite"
          className="w-full rounded-lg border border-[#92A095] bg-white px-4 py-2 text-[#785F49] placeholder-[#785F49]/70 focus:border-[#BA805B] focus:ring-1 focus:ring-[#BA805B]/50"
          defaultValue=""
        >
          <option value="">Civilité</option>
          <option value="Mme">Mme</option>
          <option value="M.">M.</option>
        </select>
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
        <label htmlFor="cv" className="file-label">
          Joindre un CV
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="file-input"
        />
        {fileName && <p className="file-name">Fichier sélectionné : {fileName}</p>}
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
