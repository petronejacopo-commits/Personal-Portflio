'use client';


import React, { useEffect } from 'react';
import AmberButton from '@/components/ui/AmberButton';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="font-title text-4xl md:text-6xl text-red-500 mb-4 uppercase tracking-widest">
        Errore di Sistema
      </h1>
      <p className="font-sans text-lg text-gray-400 mb-8 max-w-md">
        Un&#39;anomalia ha colpito il server. Riprova.
      </p>
      <AmberButton onClick={() => reset()} variant="primary">
        Riprova
      </AmberButton>
    </div>
  );
}