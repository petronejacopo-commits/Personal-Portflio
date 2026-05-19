'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/', icon: '/assets/images/icons/icon-home.svg' },
  { name: 'Chi Sono', path: '/chi-sono', icon: '/assets/images/icons/icon-about.svg' },
  { name: 'Blocksmith', path: '/blocksmith', icon: '/assets/images/icons/icon-blocksmith.svg' },
  { name: 'Commissioni', path: '/commissioni', icon: '/assets/images/icons/icon-commissions.svg' },
  { name: 'My Devs', path: '/my-devs', icon: '/assets/images/icons/icon-mydevs.svg' },
  { name: 'Team', path: '/team', icon: '/assets/images/icons/icon-team.svg' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full h-[64px] z-50 bg-[#1E0F05]/95 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 border-b border-gray-800">
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
                {link.icon && <img src={link.icon} alt="" className="w-5 h-5 mr-2 object-contain filter-amber-500 inline-block" />}
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
              className="fixed inset-0 bg-[#1E0F05]/80 backdrop-blur-md z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[100vw] bg-[#2D1A0A] border-l border-[#3A1F0D] z-[65] flex flex-col pt-[24px] px-6 shadow-2xl md:hidden"
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
                      className={`min-h-[48px] px-4 py-4 font-ui uppercase tracking-wider text-[18px] transition-colors duration-300 flex items-center border-b border-[#3A1F0D] ${
                        isActive ? 'text-amber-500 font-bold' : 'text-gray-400 hover:text-amber-500'
                      }`}
                    >
                      {link.icon && <img src={link.icon} alt="" className="w-5 h-5 mr-2 object-contain filter-amber-500 inline-block" />}
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