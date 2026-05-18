'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Sono', path: '/chi-sono' },
  { name: 'Blocksmith', path: '/blocksmith' },
  { name: 'Commissioni', path: '/commissioni' },
  { name: 'My Devs', path: '/my-devs' },
  { name: 'Team', path: '/team' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full h-[64px] z-50 bg-[#0D0D0D]/95 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 border-b border-gray-800">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 relative z-[60] min-h-[44px] min-w-[44px]">
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
                className={`relative font-sans text-sm p-2 transition-colors duration-300 min-h-[44px] flex items-center ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-amber-500'
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-amber-500 relative z-[60] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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

      {/* Mobile Menu via Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0D0D0D]/80 backdrop-blur-md z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[100vw] bg-[#1A1A1A] border-l border-[#262626] z-[65] flex flex-col pt-[24px] px-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close Menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`min-h-[48px] px-4 py-4 font-ui uppercase tracking-wider text-[18px] transition-colors duration-300 flex items-center border-b border-[#262626] ${
                        isActive ? 'text-amber-500 font-bold' : 'text-gray-400 hover:text-amber-500'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}