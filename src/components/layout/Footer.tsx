'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E0F05] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 font-[Inter]">

        {/* Global fonts if not injected elsewhere */}
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
        `}} />

        <div className="w-full text-center py-4 border-t border-[#803014]/30">
          <p className="text-[#C4A86A] text-sm">
            © 2026 Jacopo Petrone – Tutti i diritti riservati. Tutti i contenuti, il codice, il design, le animazioni e gli asset grafici di questo sito sono di proprietà esclusiva di Jacopo Petrone. È vietata la riproduzione, anche parziale, senza autorizzazione scritta.
          </p>
        </div>
      </div>
    </footer>
  );
}