import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  status,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex flex-row relative">
      {/* Colonna Sinistra (Punto e Linea) */}
      <div className="flex flex-col items-center mr-4 md:mr-6 relative w-[12px] md:w-[16px]">
        {/* Punto */}
        <div className="mt-1 md:mt-2 flex-shrink-0 z-10 w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center bg-gray-900 border border-amber-500">
          {status === 'completed' && <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500" />}
          {status === 'in-progress' && <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500 animate-[pulse-scale_2s_ease-in-out_infinite]" />}
          {status === 'planned' && null}
        </div>

        {/* Linea Verticale */}
        {!isLast && (
          <div
            className={`w-[2px] h-full absolute top-[16px] md:top-[24px] left-1/2 -translate-x-1/2 min-h-[40px] pb-4
              ${status === 'completed' ? 'bg-amber-500' : 'border-l-2 border-dashed border-gray-800 bg-transparent'}`}
          />
        )}
      </div>

      {/* Colonna Destra (Contenuto) */}
      <div className="pb-10 md:pb-8 flex flex-col w-full">
        {/* Su mobile l'anno è esplicitamente sopra, per coerenza lo lasciamo sopra ma curiamo lo spacing md */}
        <span className="font-ui text-xs md:text-sm text-amber-500 tracking-widest uppercase mb-1 md:mb-0 block">{year}</span>
        <h4 className="font-title text-lg md:text-xl text-white mt-1 mb-2 leading-tight">{title}</h4>
        <p className="font-sans text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}