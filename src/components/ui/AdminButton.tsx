'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Controllo client-side di base se siamo loggati
    const token = localStorage.getItem('admin_token');
    if (token) {
      setTimeout(() => setIsAuthenticated(true), 0);
    }
  }, []);

  const handleClick = () => {
    if (isAuthenticated) {
      router.push('/auth-admin');
    } else {
      setIsOpen(true);
    }
  };

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
        localStorage.setItem('admin_token', data.token);
        document.cookie = `admin_token=${data.token}; path=/; max-age=86400; SameSite=Lax`;
        setTimeout(() => setIsAuthenticated(true), 0);
        setIsOpen(false);
        router.push('/auth-admin');
      } else {
        setError(data.error || 'Errore durante il login');
      }
    } catch (_err) {
      setError('Errore di connessione. Riprova.');
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-gray-400 font-sans text-[12px] hover:text-amber-500 transition-colors duration-300 border-none bg-transparent cursor-pointer"
      >
        {isAuthenticated ? 'Admin Dashboard' : 'Admin Login'}
      </button>

      {isOpen && !isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 p-8 w-full max-w-md relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="font-title text-2xl text-white mb-6 text-center tracking-widest uppercase">Admin Access</h2>

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
                  className="w-full bg-black border border-gray-800 p-3 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-xs text-gray-400 mb-1 uppercase tracking-wider">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-gray-800 p-3 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-amber-500 text-black font-ui uppercase tracking-widest py-3 px-6 hover:bg-white transition-colors duration-300 w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}