import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function Skeleton({
  width = '100%',
  height = '20px',
  className = ''
}: SkeletonProps) {
  return (
    <div
      className={`bg-gray-800 animate-[pulse-scale_2s_ease-in-out_infinite] rounded-sm ${className}`}
      style={{ width, height }}
    />
  );
}