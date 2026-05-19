'use client';

import React, { useState, useRef } from 'react';
import { formSuccessMorph } from '@/lib/anime-effects';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save to localStorage as requested
    const existingMessages = JSON.parse(localStorage.getItem('procione_messages') || '[]');
    localStorage.setItem('procione_messages', JSON.stringify([...existingMessages, { ...formData, date: new Date().toISOString() }]));

    // Show alert
    if (formRef.current) formSuccessMorph(formRef.current.parentElement as HTMLElement);
    setTimeout(() => alert('Messaggio inviato! Ti risponderò entro 48 ore.'), 600);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-[40px] px-[16px] md:py-[80px] md:px-[32px] max-w-[600px] mx-auto">
      <div className="flex justify-center mb-4"><svg id="raven-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22h20L12 2z" stroke="#D9A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
      <h2 className="font-title text-2xl text-amber-500 mb-8 uppercase tracking-widest text-center">
        Contattami
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 mb-12">
        <div>
          <label htmlFor="name" className="block font-sans text-xs text-gray-400 mb-2 uppercase tracking-wider">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#2D1A0A] border border-[#3A1F0D] p-4 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-sans text-xs text-gray-400 mb-2 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#2D1A0A] border border-[#3A1F0D] p-4 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-sans text-xs text-gray-400 mb-2 uppercase tracking-wider">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#2D1A0A] border border-[#3A1F0D] p-4 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-stone-600 text-white hover:border-amber-neon hover:shadow-[0_0_12px_rgba(245,214,78,0.4)] px-[24px] py-[16px] font-ui uppercase tracking-wider transition-all duration-300 cursor-pointer text-center"
        >
          Invia Messaggio
        </button>
      </form>

      {/* Icone Social */}
      <div className="flex items-center justify-center gap-6">
        <a href="#" aria-label="Discord" className="text-gray-400 hover:text-amber-500 transition-colors">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
          </svg>
        </a>
        <a href="#" aria-label="Email" className="text-gray-400 hover:text-amber-500 transition-colors">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-amber-500 transition-colors">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2L2 10.5L9 13.5L13 20L15.5 15.5L21.5 2Z"/>
            <path d="M21.5 2L9 13.5"/>
          </svg>
        </a>
      </div>
    </div>
  );
}