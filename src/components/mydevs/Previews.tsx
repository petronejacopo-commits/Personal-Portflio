'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';

// --- THREE JS PREVIEW (BlockSmith) ---
function WireframeSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshBasicMaterial color="#D4A843" wireframe />
    </mesh>
  );
}

export function ThreeJsPreview() {
  return (
    <div className="w-full h-[250px] bg-black overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <WireframeSphere />
      </Canvas>
    </div>
  );
}

// --- DISCORD PREVIEW (Discord Bot) ---
export function DiscordPreview() {
  return (
    <div className="w-full h-[250px] bg-[#36393f] flex flex-col p-4 text-left font-sans text-sm rounded-sm">
      <div className="flex gap-4 mb-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-[#5865F2] flex-shrink-0 flex items-center justify-center text-white text-xl">🤖</div>
        <div>
          <p className="text-white mb-1"><span className="font-bold">SystemBot</span> <span className="bg-[#5865F2] text-xs px-1 rounded ml-1">BOT</span> <span className="text-gray-400 text-xs ml-2">Today at 10:42 AM</span></p>
          <div className="bg-[#2f3136] border-l-4 border-[#3ba55c] p-3 rounded text-gray-300">
            <strong>✅ User Verified</strong><br/>
            User <span className="text-[#5865F2]">@new_player</span> has passed security checks.
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs">U</div>
        <div>
          <p className="text-white mb-1"><span className="font-bold">user123</span> <span className="text-gray-400 text-xs ml-2">Today at 10:45 AM</span></p>
          <p className="text-gray-300">!ticket open &quot;Need help with login&quot;</p>
        </div>
      </div>
    </div>
  );
}

// --- SKILL TREE PREVIEW (The Core) ---
export function SkillTreePreview() {
  const [activeNode, setActiveNode] = useState<number | null>(1);

  const nodes = [
    { id: 1, label: 'Warrior Base', x: '50%', y: '10%' },
    { id: 2, label: 'Heavy Strike', x: '30%', y: '50%' },
    { id: 3, label: 'Shield Block', x: '70%', y: '50%' },
    { id: 4, label: 'Berserk', x: '50%', y: '90%' },
  ];

  return (
    <div className="w-full h-[250px] bg-[#0D0D0D] relative overflow-hidden">
      {/* SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="50%" y1="10%" x2="30%" y2="50%" stroke={activeNode === 2 || activeNode === 1 ? '#D4A843' : '#262626'} strokeWidth="2" />
        <line x1="50%" y1="10%" x2="70%" y2="50%" stroke={activeNode === 3 || activeNode === 1 ? '#D4A843' : '#262626'} strokeWidth="2" />
        <line x1="30%" y1="50%" x2="50%" y2="90%" stroke={activeNode === 4 || activeNode === 2 ? '#D4A843' : '#262626'} strokeWidth="2" />
        <line x1="70%" y1="50%" x2="50%" y2="90%" stroke={activeNode === 4 || activeNode === 3 ? '#D4A843' : '#262626'} strokeWidth="2" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.button
          key={node.id}
          className={`absolute w-[80px] h-[40px] -ml-[40px] -mt-[20px] rounded-sm font-ui text-[10px] uppercase flex items-center justify-center transition-colors cursor-pointer border ${
            activeNode === node.id ? 'bg-[#B87351] text-white border-[#B87351]' : 'bg-[#1A1A1A] text-gray-400 border-gray-600 hover:border-[#D4A843]'
          }`}
          style={{ left: node.x, top: node.y }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveNode(node.id)}
        >
          {node.label}
        </motion.button>
      ))}
    </div>
  );
}

// --- DASHBOARD PREVIEW (ServerWatch) ---
export function DashboardPreview() {
  const [metrics, setMetrics] = useState({ cpu: 45, ram: 60, disk: 35 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 60) + 20, // 20-80
        ram: Math.floor(Math.random() * 40) + 40, // 40-80
        disk: Math.floor(Math.random() * 5) + 35, // 35-40
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getColor = (val: number) => {
    if (val < 50) return '#38b764'; // Green
    if (val < 75) return '#ffcd75'; // Yellow
    return '#b13e53'; // Red
  };

  return (
    <div className="w-full h-[250px] bg-[#1A1A1A] flex flex-col justify-center p-8 gap-6 font-mono text-xs text-left">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-gray-400">
          <span>CPU USAGE</span>
          <span>{metrics.cpu}%</span>
        </div>
        <div className="w-full h-4 bg-black rounded-sm overflow-hidden border border-gray-800">
          <motion.div
            className="h-full"
            animate={{ width: `${metrics.cpu}%`, backgroundColor: getColor(metrics.cpu) }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-gray-400">
          <span>RAM ALLOCATION</span>
          <span>{metrics.ram}%</span>
        </div>
        <div className="w-full h-4 bg-black rounded-sm overflow-hidden border border-gray-800">
          <motion.div
            className="h-full"
            animate={{ width: `${metrics.ram}%`, backgroundColor: getColor(metrics.ram) }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-gray-400">
          <span>DISK I/O</span>
          <span>{metrics.disk}%</span>
        </div>
        <div className="w-full h-4 bg-black rounded-sm overflow-hidden border border-gray-800">
          <motion.div
            className="h-full"
            animate={{ width: `${metrics.disk}%`, backgroundColor: getColor(metrics.disk) }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}