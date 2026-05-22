'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Italy from '@react-map/italy';

const teamMembers = [
  { name: "Jacopo Petrone", role: "Fondatore", city: "Cuneo", x: 15, y: 22, color: "#F5D64E" },
  { name: "Luca Ferrari", role: "Co-Fondatore", city: "Cuneo", x: 17, y: 24, color: "#D9A63E" },
  { name: "Alessandro Greco", role: "3D Artist", city: "Napoli", x: 62, y: 68, color: "#D9A63E" },
  { name: "Riccardo Conti", role: "Backend Dev", city: "Torino", x: 10, y: 20, color: "#DC4424" },
  { name: "Martina Romano", role: "UI/UX Designer", city: "Roma", x: 52, y: 62, color: "#D9A63E" },
  { name: "Kevin Mbaye", role: "Game Designer", city: "Caserta", x: 60, y: 66, color: "#DC4424" },
  { name: "Sofia Marino", role: "Graphic Designer", city: "Milano", x: 28, y: 15, color: "#803014" },
  { name: "Ivan Horvat", role: "Full-Stack Dev", city: "Trieste", x: 72, y: 12, color: "#D9A63E" },
  { name: "Giulia Ferretti", role: "Motion Designer", city: "Firenze", x: 46, y: 48, color: "#DC4424" },
  { name: "Omar Benhaddou", role: "Social Media", city: "Bologna", x: 48, y: 38, color: "#D9A63E" },
  { name: "Marco Vitale", role: "Audio Designer", city: "Genova", x: 20, y: 28, color: "#803014" },
  { name: "Yasmine Cherif", role: "Cybersecurity", city: "Milano", x: 26, y: 13, color: "#DC4424" },
  { name: "Matteo Serra", role: "Frontend Dev", city: "Cagliari", x: 22, y: 72, color: "#D9A63E" },
  { name: "Laura De Santis", role: "Project Manager", city: "Bologna", x: 46, y: 36, color: "#803014" }
];

export default function ItalyTeamMap() {
  const [hoveredMember, setHoveredMember] = useState<any>(null);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="relative w-full max-w-[600px] aspect-[3/4] bg-[#1A0F05] border border-[#803014] rounded-lg overflow-hidden flex items-center justify-center p-4">

        {/* Base Italy Map SVG via library */}
        <div className="w-full h-full relative flex items-center justify-center" style={{ color: '#2D1A0A' }}>
           <Italy
             size={500}
             type="select-single"
             hoverColor="#3A1F0D"
             mapColor="#2D1A0A"
             strokeColor="#803014"
             strokeWidth={1}
           />

           {/* Absolute Positioning for Markers */}
           {teamMembers.map((member, idx) => (
             <div
               key={idx}
               className="absolute w-3 h-3 rounded-full cursor-pointer transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2 hover:scale-[2] hover:z-10"
               style={{
                 left: `${member.x}%`,
                 top: `${member.y}%`,
                 backgroundColor: member.color,
                 boxShadow: `0 0 10px ${member.color}80`
               }}
               onMouseEnter={() => setHoveredMember(member)}
               onMouseLeave={() => setHoveredMember(null)}
               onClick={() => setHoveredMember(member)}
             />
           ))}
        </div>

        {/* Tooltip Overlay */}
        <AnimatePresence>
          {hoveredMember && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute bottom-6 right-6 bg-[#2D1A0A] border border-[#D9A63E] p-3 rounded shadow-2xl pointer-events-none z-20"
            >
              <h4 className="text-[#D9A63E] font-bold text-lg leading-tight">{hoveredMember.name}</h4>
              <p className="text-[#C4A86A] text-sm font-semibold mt-1">{hoveredMember.role}</p>
              <div className="flex items-center mt-2 space-x-2 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hoveredMember.color }} />
                <span>{hoveredMember.city}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}