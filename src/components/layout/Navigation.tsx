'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Sono', path: '/about' },
  { name: 'Blocksmith', path: '/blocksmith' }, // Default path for blocksmith
  { name: 'Commissioni', path: '/commissions' },
  { name: 'My Devs', path: '/mydevs' },
  { name: 'Team', path: '/team' }, // Default path for team
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[64px] z-50 bg-[#0D0D0D]/95 backdrop-blur-sm flex items-center justify-between px-8 border-b border-gray-800">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 relative z-[60]">
          <div className="w-[30px] h-[30px] relative flex items-center justify-center">
            <Image
              src="/assets/images/logo/logo-raccoon.svg"
              alt="Logo Procione"
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-ui font-bold text-white tracking-widest text-lg">PROCIONE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative font-sans text-sm p-2 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-amber-500'
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-amber-500 relative z-[60] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[55] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-gray-900 border-l border-gray-800 z-[55] flex flex-col pt-[80px] px-6 transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-4 font-ui uppercase tracking-wider text-sm border-b border-gray-800/50 transition-colors duration-300 flex items-center ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-amber-500'
              }`}
            >
              {link.name}
              {isActive && (
                <div className="ml-2 w-1 h-1 bg-amber-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}