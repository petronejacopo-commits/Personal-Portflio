'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from '@vnedyalk0v/react19-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const minecraftMarkers = [
  { name: "Partner 1", type: "Minecraft", coordinates: [-123.1, 49.2], color: '#D9A63E' },
  { name: "Partner 2", type: "Minecraft", coordinates: [-0.1, 51.5], color: '#DC4424' },
  { name: "Partner 3", type: "Minecraft", coordinates: [5.7, 52.5], color: '#D9A63E' },
  { name: "Partner 4", type: "Minecraft", coordinates: [12.6, 55.7], color: '#DC4424' },
  { name: "Partner 5", type: "Minecraft", coordinates: [2.3, 48.8], color: '#D9A63E' },
  { name: "Partner 6", type: "Minecraft", coordinates: [12.5, 41.9], color: '#DC4424' },
  { name: "Partner 7", type: "Minecraft", coordinates: [9.2, 45.5], color: '#D9A63E' },
  { name: "Partner 8", type: "Minecraft", coordinates: [14.2, 40.8], color: '#803014' },
  { name: "Partner 9", type: "Minecraft", coordinates: [8.9, 44.4], color: '#D9A63E' },
  { name: "Partner 10", type: "Minecraft", coordinates: [10.4, 43.7], color: '#DC4424' },
  { name: "Partner 11", type: "Minecraft", coordinates: [16.9, 41.1], color: '#803014' },
  { name: "Partner 12", type: "Minecraft", coordinates: [18.0, 59.3], color: '#D9A63E' },
  { name: "Partner 13", type: "Minecraft", coordinates: [127.0, 37.5], color: '#DC4424' },
  { name: "Partner 14", type: "Minecraft", coordinates: [1.4, 43.6], color: '#D9A63E' },
  { name: "Partner 15", type: "Minecraft", coordinates: [3.7, 51.0], color: '#803014' }
];

const outsiderMarkers = [
  { name: "Partner 16", type: "Outsider", coordinates: [24.7, 59.4], color: '#F5D64E' },
  { name: "Partner 17", type: "Outsider", coordinates: [-73.6, 45.5], color: '#F5D64E' },
  { name: "Partner 18", type: "Outsider", coordinates: [18.0, 59.3], color: '#F5D64E' },
  { name: "Partner 19", type: "Outsider", coordinates: [174.8, -41.3], color: '#F5D64E' },
  { name: "Partner 20", type: "Outsider", coordinates: [-79.4, 43.6], color: '#F5D64E' },
  { name: "Partner 21", type: "Outsider", coordinates: [76.9, 43.2], color: '#F5D64E' },
  { name: "Partner 22", type: "Outsider", coordinates: [106.9, 47.9], color: '#F5D64E' },
  { name: "Partner 23", type: "Outsider", coordinates: [36.8, -1.3], color: '#F5D64E' },
  { name: "Partner 24", type: "Outsider", coordinates: [3.4, 6.5], color: '#F5D64E' },
  { name: "Partner 25", type: "Outsider", coordinates: [151.2, -33.8], color: '#F5D64E' } // Fallback outsider to reach 10
];

const allMarkers = [...minecraftMarkers, ...outsiderMarkers];

// Memoized Map Geographies
const MapGeographies = memo(() => (
  <Geographies geography={geoUrl}>
    {({ geographies }) =>
      geographies.map((geo) => (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill="#2D1A0A"
          stroke="#1A0F05"
          strokeWidth={0.5}
          style={{
            default: { outline: "none" },
            hover: { fill: "#3A1F0D", outline: "none" },
            pressed: { fill: "#4A2F1D", outline: "none" },
          }}
        />
      ))
    }
  </Geographies>
));
MapGeographies.displayName = "MapGeographies";

export default function PartnerWorldMap() {
  const [filter, setFilter] = useState('All Partners');
  const [tooltipContent, setTooltipContent] = useState<any>(null);

  const getButtonClass = (buttonFilter: string) => {
    return filter === buttonFilter
      ? 'bg-[#D9A63E] text-[#1E0F05] px-4 py-2 rounded font-bold transition-colors'
      : 'bg-[#2D1A0A] text-white px-4 py-2 rounded transition-colors';
  };

  return (
    <div className="w-full flex flex-col items-center p-4">

      <div className="flex space-x-4 mb-8">
        <button className={getButtonClass('All Partners')} onClick={() => setFilter('All Partners')}>
          All Partners
        </button>
        <button className={getButtonClass('Minecraft')} onClick={() => setFilter('Minecraft')}>
          Minecraft
        </button>
        <button className={getButtonClass('Outsider')} onClick={() => setFilter('Outsider')}>
          Outsider
        </button>
      </div>

      <div className="relative w-full max-w-5xl h-[500px] bg-[#1A0F05] border border-[#803014] rounded-lg overflow-hidden">

        <ComposableMap projectionConfig={{ scale: 140 }} width={800} height={500}>
          <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={4}>
            <MapGeographies />

            {allMarkers.map((marker, idx) => {
              const isActive = filter === 'All Partners' || filter === marker.type;

              return (
                <Marker
                  key={idx}
                  coordinates={marker.coordinates as [number, number]}
                  onClick={() => setTooltipContent(marker)}
                  onMouseEnter={() => setTooltipContent(marker)}
                  onMouseLeave={() => setTooltipContent(null)}
                >
                  <circle
                    r={5}
                    fill={marker.color}
                    opacity={isActive ? 1 : 0.2}
                    className="transition-all duration-300 hover:scale-150 transform-gpu origin-center cursor-pointer"
                  />
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip Overlay */}
        <AnimatePresence>
          {tooltipContent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 bg-[#2D1A0A] border border-[#D9A63E] p-4 rounded shadow-lg pointer-events-none"
            >
              <h4 className="text-[#D9A63E] font-bold text-lg mb-1">{tooltipContent.name}</h4>
              <p className="text-[#C4A86A] text-sm mb-2">{tooltipContent.type}</p>
              <p className="text-gray-400 text-xs font-mono">
                Lng: {tooltipContent.coordinates[0]}, Lat: {tooltipContent.coordinates[1]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}