'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-[11px]',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 sm:w-20 sm:h-20 text-base sm:text-lg',
  xl: 'w-24 h-24 text-xl',
};

const dimensionMap = {
  sm: 32,
  md: 48,
  lg: 80,
  xl: 96,
};

export default function Avatar({
  src = '/avatar.jpg',
  alt,
  size = 'md',
  showStatus = false,
  className = '',
  priority = false,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const initials = alt
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const px = dimensionMap[size];

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`relative overflow-hidden rounded-full border border-white/[0.14] bg-[#14161b] shadow-inner transition-all duration-300 hover:border-accent-cyan/60 ${sizeClasses[size]}`}
      >
        {!imageError && src ? (
          <Image
            src={src}
            alt={alt}
            width={px}
            height={px}
            priority={priority}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1d24] via-[#121418] to-[#0c0d10] font-mono font-semibold text-accent-cyan tracking-wider select-none">
            {initials || 'TD'}
          </div>
        )}
      </div>

      {showStatus && (
        <span
          className="absolute bottom-0 right-0 block rounded-full ring-2 ring-[#0a0a0c] bg-accent-emerald"
          style={{
            width: size === 'sm' ? '8px' : '12px',
            height: size === 'sm' ? '8px' : '12px',
          }}
          title="Active & Available"
        />
      )}
    </div>
  );
}
