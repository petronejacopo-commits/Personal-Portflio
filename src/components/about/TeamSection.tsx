'use client';

import React, { useState } from 'react';
import teamData from '@/lib/data/team.json';
import ProgressBar from '@/components/ui/ProgressBar';
import AmberButton from '@/components/ui/AmberButton';
import Modal from '@/components/ui/Modal';

type TeamMember = {
  id: string;
  name: string;
  surname: string;
  birthYear: number;
  city: string;
  role: string;
  description: string;
  stats: { label: string; value: number }[];
  sampleFile: string;
  founder: boolean;
  color?: string;
};

export default function TeamSection() {
  const { team } = teamData as { team: TeamMember[] };
  const founders = team.filter((m) => m.founder);
  const members = team.filter((m) => !m.founder);

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <div className="pt-[80px] pb-[80px] px-[32px] max-w-[1200px] mx-auto">

      {/* SEZIONE INTRO */}
      <section className="flex flex-col items-center mb-24">
        <h1 className="font-title text-4xl text-amber-500 mb-4 text-center tracking-widest">
          IL TEAM
        </h1>
        <p className="font-sans text-xl text-gray-400 mb-2 text-center">
          12 professionisti. 0 uffici. Tutti under 25.
        </p>
        <p className="font-sans text-lg text-white max-w-[800px] text-center mb-16 leading-relaxed">
          Ci siamo trovati online durante il lockdown. Eravamo su Rainbow Six, su Discord, su forum di coding — ragazzi della stessa età che passavano le giornate al computer perché non c&#39;era altro da fare. Ad un certo punto quello che facevamo insieme ha smesso di essere un passatempo.
        </p>
      </section>

      {/* SEZIONE FONDATORI */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="bg-gray-900 p-8 flex flex-col"
            style={{ borderLeft: `4px solid ${founder.color}` }}
          >
            <h2 className="font-title text-2xl text-white mb-1 uppercase tracking-widest">
              {founder.name} {founder.surname}
            </h2>
            <span
              className="font-ui text-sm uppercase tracking-widest mb-6"
              style={{ color: founder.color }}
            >
              {founder.role}
            </span>
            <p className="font-sans text-sm text-gray-400 mb-8 leading-relaxed flex-grow">
              {founder.description}
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {founder.stats.map((stat, index) => (
                <ProgressBar key={index} label={stat.label} value={stat.value} />
              ))}
            </div>

            <div className="mt-auto">
              {/* For Luca we point to #luca, for Jacopo standard link based on prompt */}
              <AmberButton
                variant="ghost"
                href={founder.id === 'luca' ? '/chi-sono#luca' : '/chi-sono'}
                className="pl-0 hover:pl-2 transition-all"
              >
                Profilo Completo
              </AmberButton>
            </div>
          </div>
        ))}
      </section>

      {/* SEZIONE TEAM */}
      <section className="mb-24 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 p-6 border-t-[2px] border-amber-500 transition-transform duration-300 hover:-translate-y-1 flex flex-col"
            >
              <h3 className="font-title text-lg text-white uppercase tracking-wider mb-1">
                {member.name} {member.surname}
              </h3>
              <p className="font-sans text-sm text-gray-400 mb-2">
                {member.birthYear} | {member.city}
              </p>
              <span className="font-ui text-sm text-amber-500 uppercase tracking-widest mb-4">
                {member.role}
              </span>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6 flex-grow line-clamp-4">
                {member.description}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-800">
                <AmberButton
                  variant="ghost"
                  onClick={() => setSelectedMember(member)}
                  className="w-full justify-between px-0 hover:text-amber-500"
                >
                  <span>Vedi Progetto</span>
                  <span>→</span>
                </AmberButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SEZIONE */}
      <section className="flex justify-center mt-16">
        <p className="font-sans text-lg text-white max-w-[800px] text-center italic leading-relaxed">
          &quot;Quello che ha tenuto insieme questo gruppo non è stato un contratto o un annuncio di lavoro. Ci siamo trovati per caso, online, durante uno dei periodi più strani degli ultimi anni. Siamo cresciuti insieme — come giocatori prima, come professionisti dopo. Oggi lavoriamo su progetti reali per clienti in tutto il mondo, ognuno dalla propria città, ognuno con il proprio ruolo. La distanza non ha mai cambiato nulla. Siamo più uniti adesso di quanto non fossimo su quei server nel 2020.&quot;
        </p>
      </section>

      {/* MODAL MEMBRO DEL TEAM */}
      <Modal
        isOpen={selectedMember !== null}
        onClose={closeModal}
      >
        {selectedMember && (
          <div className="flex flex-col">
            <h2 className="font-title text-3xl text-white uppercase tracking-widest mb-1">
              {selectedMember.name} {selectedMember.surname}
            </h2>
            <span className="font-ui text-md text-amber-500 uppercase tracking-widest mb-6">
              {selectedMember.role}
            </span>

            <div className="mb-8">
              <p className="font-sans text-base text-gray-400 leading-relaxed">
                {selectedMember.description}
              </p>
            </div>

            <div className="bg-black p-6 border border-gray-800 flex flex-col items-center justify-center min-h-[150px] text-center">
              <h4 className="font-ui text-sm text-gray-400 uppercase tracking-widest mb-4">Campione Progetto</h4>

              {selectedMember.sampleFile ? (
                <a
                  href={selectedMember.sampleFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-amber-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  Scarica o visualizza il file
                </a>
              ) : (
                <p className="font-sans text-sm text-gray-400 italic">
                  Nessun campione caricato. Contattaci per maggiori informazioni.
                </p>
              )}
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}