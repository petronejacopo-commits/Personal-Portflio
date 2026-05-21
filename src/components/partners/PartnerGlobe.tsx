'use client';

interface PartnerGlobeProps {
  filter: string;
  onChangeFilter: (filter: string) => void;
}

export default function PartnerGlobe({ filter, onChangeFilter }: PartnerGlobeProps) {
  const getButtonClass = (buttonFilter: string) => {
    return filter === buttonFilter
      ? 'bg-[#D9A63E] text-white px-4 py-2 rounded transition-colors duration-200'
      : 'bg-[#2D1A0A] text-white px-4 py-2 rounded transition-colors duration-200';
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex space-x-4">
        <button
          className={getButtonClass('All Partners')}
          onClick={() => onChangeFilter('All Partners')}
        >
          All Partners
        </button>
        <button
          className={getButtonClass('Minecraft')}
          onClick={() => onChangeFilter('Minecraft')}
        >
          Minecraft
        </button>
        <button
          className={getButtonClass('Outsider')}
          onClick={() => onChangeFilter('Outsider')}
        >
          Outsider
        </button>
      </div>
    </div>
  );
}
