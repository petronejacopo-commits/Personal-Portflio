'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSfx } from '../../lib/useSfx';

const MOCK_LINES = [
  "Initialize core system...",
  "Loading neural weights...",
  "Connecting to node 42...",
  "Bypassing proxy security...",
  "Access granted.",
];

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const { playTerminalType } = useSfx();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineIndex >= MOCK_LINES.length) return;

    const targetLine = MOCK_LINES[lineIndex];

    if (charIndex < targetLine.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + targetLine[charIndex]);
        setCharIndex((prev) => prev + 1);
        try {
          if (playTerminalType) playTerminalType();
        } catch(e) {}
      }, Math.random() * 50 + 30); // Random typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, currentLine]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, currentLine, playTerminalType]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  return (
    <div className="w-full max-w-2xl bg-[#0a0503] border border-[#803014] rounded-lg p-4 font-mono text-sm text-[#C4A86A] shadow-[0_0_15px_rgba(217,166,62,0.1)]">
      <div className="flex space-x-2 mb-4 border-b border-[#803014]/50 pb-2">
        <div className="w-3 h-3 rounded-full bg-[#DC4424]" />
        <div className="w-3 h-3 rounded-full bg-[#F5D64E]" />
        <div className="w-3 h-3 rounded-full bg-[#10B981]" />
      </div>

      <div
        ref={containerRef}
        className="h-48 overflow-y-auto custom-scrollbar"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            <span className="text-[#D9A63E] mr-2">&gt;</span>
            {line}
          </div>
        ))}
        {lineIndex < MOCK_LINES.length && (
          <div className="mb-1">
            <span className="text-[#D9A63E] mr-2">&gt;</span>
            {currentLine}
            <span className="animate-pulse bg-[#C4A86A] w-2 h-4 inline-block ml-1 align-middle" />
          </div>
        )}
        {lineIndex >= MOCK_LINES.length && (
          <div className="mb-1">
            <span className="text-[#D9A63E] mr-2">&gt;</span>
            <span className="animate-pulse bg-[#C4A86A] w-2 h-4 inline-block align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}