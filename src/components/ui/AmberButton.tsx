import React from 'react';
import Link from 'next/link';

interface AmberButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function AmberButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: AmberButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-[24px] py-[12px] font-ui uppercase tracking-wider transition-all duration-300 cursor-pointer';

  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'border border-stone-600 text-white hover:border-amber-neon hover:shadow-[0_0_12px_rgba(245,214,78,0.4)]';
      break;
    case 'secondary':
      variantClasses = 'border border-gray-800 text-gray-400 hover:border-orange-700 hover:text-white';
      break;
    case 'ghost':
      variantClasses = 'text-gray-400 hover:text-amber-500';
      break;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}