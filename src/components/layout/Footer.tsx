import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdminButton from '../ui/AdminButton';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-6 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Colonna 1: Logo e Copyright */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-[24px] h-[24px] relative">
              <Image
                src="/assets/images/logo/logo-raccoon.svg"
                alt="Logo Procione"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-ui font-bold text-white tracking-widest text-md">PROCIONE</span>
          </Link>
          <p className="text-gray-400 font-sans text-sm">© {new Date().getFullYear()} Procione</p>
        </div>

        {/* Colonna 2: Link Rapidi */}
        <div className="flex flex-col gap-3">
          <h4 className="font-ui text-white uppercase tracking-wider mb-2">Menu</h4>
          <Link href="/" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">Chi Sono</Link>
          <Link href="/blocksmith" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">Blocksmith</Link>
          <Link href="/commissioni" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">Commissioni</Link>
          <Link href="/mydevs" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">My Devs</Link>
          <Link href="/team" className="text-gray-400 font-sans text-sm hover:text-amber-500 transition-colors">Team</Link>
        </div>

        {/* Colonna 3: Social Icons */}
        <div className="flex flex-col gap-3">
          <h4 className="font-ui text-white uppercase tracking-wider mb-2">Social</h4>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Discord" className="text-gray-400 hover:text-amber-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
            <a href="#" aria-label="Email" className="text-gray-400 hover:text-amber-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-amber-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2L2 10.5L9 13.5L13 20L15.5 15.5L21.5 2Z"/>
                <path d="M21.5 2L9 13.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Sezione Inferiore */}
      <div className="max-w-7xl mx-auto flex justify-center mt-8">
        <AdminButton />
      </div>
    </footer>
  );
}