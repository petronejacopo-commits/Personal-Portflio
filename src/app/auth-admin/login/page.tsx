'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth-admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success && data.token) {
        // Salva il token in localStorage
        localStorage.setItem('admin_token', data.token);

        // Imposta il cookie per il middleware
        document.cookie = `admin_token=${data.token}; path=/; max-age=86400; SameSite=Lax`;

        // Redirect alla dashboard
        router.push('/auth-admin');
      } else {
        setError(data.error || 'Errore durante il login');
      }
    } catch (_err) {
      setError('Errore di connessione. Riprova.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] border border-[#262626] p-8 w-full max-w-md relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <h2 className="font-title text-2xl text-amber-500 mb-6 text-center uppercase tracking-widest">
          Admin Access
        </h2>

        {error && (
          <div className="bg-red-900/30 border border-red-500/50 text-red-400 p-3 mb-6 text-sm font-sans text-center rounded-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label className="block font-sans text-xs text-gray-400 mb-1 uppercase tracking-wider">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-gray-800 p-3 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block font-sans text-xs text-gray-400 mb-1 uppercase tracking-wider">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-gray-800 p-3 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 border border-stone-600 text-white hover:border-amber-500 hover:shadow-[0_0_12px_rgba(212,168,67,0.4)] px-[24px] py-[12px] font-ui uppercase tracking-wider transition-all duration-300 cursor-pointer w-full"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}