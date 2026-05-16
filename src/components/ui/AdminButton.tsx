'use client';

import React, { useState } from 'react';

export default function AdminButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-400 font-sans text-[12px] hover:text-amber-500 transition-colors duration-300 border-none bg-transparent cursor-pointer"
      >
        Admin Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 p-8 w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="font-title text-2xl text-white mb-6 text-center">Admin Access</h2>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-sans text-xs text-gray-400 mb-1 uppercase tracking-wider">Username</label>
                <input
                  type="text"
                  className="w-full bg-black border border-gray-800 p-3 text-white font-sans focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs text-gray-400 mb-1 uppercase tracking-wider">Password</label>
                <input
                  type="password"
                  className="w-full bg-black border border-gray-800 p-3 text-white font-sans focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-amber-500 text-black font-ui uppercase tracking-widest py-3 px-6 hover:bg-white transition-colors duration-300"
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