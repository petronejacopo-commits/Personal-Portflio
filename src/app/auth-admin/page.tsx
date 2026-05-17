'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AmberButton from '@/components/ui/AmberButton';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Controllo client-side di base (il vero controllo è nel middleware)
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/auth-admin/login');
    } else {
      setTimeout(() => setIsAuthenticated(true), 0);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/auth-admin/login');
  };

  if (!isAuthenticated) return null; // Previene flash della UI

  return (
    <div className="min-h-[70vh] p-8 max-w-4xl mx-auto mt-[80px]">
      <div className="flex justify-between items-center mb-12 border-b border-gray-800 pb-6">
        <h1 className="font-title text-3xl text-amber-500 uppercase tracking-widest">
          Benvenuto, Procione19
        </h1>
        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-red-500 font-sans text-sm transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-sm">
          <h2 className="font-ui text-xl text-white mb-2 uppercase tracking-wider">CMS Payload</h2>
          <p className="font-sans text-sm text-gray-400 mb-6">
            Gestisci i contenuti del sito, inclusi i progetti, il team e i testi delle pagine.
          </p>
          <AmberButton href="/admin" variant="secondary" className="w-full">
            Apri Payload CMS
          </AmberButton>
        </div>

        <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-sm">
          <h2 className="font-ui text-xl text-white mb-2 uppercase tracking-wider">Messaggi</h2>
          <p className="font-sans text-sm text-gray-400 mb-6">
            Visualizza i messaggi ricevuti dal modulo di contatto del sito.
          </p>
          <AmberButton href="#" variant="ghost" onClick={() => alert("Modulo in sviluppo")} className="w-full border border-gray-800">
            Vedi Messaggi
          </AmberButton>
        </div>
      </div>
    </div>
  );
}