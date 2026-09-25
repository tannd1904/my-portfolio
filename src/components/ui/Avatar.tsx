'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
  className?: string;
  priority?: boolean;
  enableZoom?: boolean;
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
  enableZoom = true,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  const initials = alt
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const px = dimensionMap[size];

  const handleOpenZoom = (e: React.MouseEvent) => {
    if (enableZoom && !imageError) {
      e.stopPropagation();
      setIsZoomed(true);
    }
  };

  return (
    <>
      <div className={`relative inline-block ${className}`}>
        <button
          type="button"
          onClick={handleOpenZoom}
          disabled={!enableZoom || imageError}
          title={enableZoom && !imageError ? 'Click to view full size photo' : alt}
          aria-label={enableZoom && !imageError ? 'Click to view full size photo' : alt}
          className={`group relative overflow-hidden rounded-full border border-white/[0.14] bg-[#14161b] shadow-inner transition-all duration-300 block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
            enableZoom && !imageError
              ? 'cursor-pointer hover:border-accent-cyan hover:scale-[1.03]'
              : 'cursor-default'
          } ${sizeClasses[size]}`}
        >
          {!imageError && src ? (
            <>
              <Image
                src={src}
                alt={alt}
                width={px}
                height={px}
                priority={priority}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              {/* Subtle zoom hint overlay on hover */}
              {enableZoom && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-3.5 h-3.5 text-accent-cyan" />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1d24] via-[#121418] to-[#0c0d10] font-mono font-semibold text-accent-cyan tracking-wider select-none">
              {initials || 'TD'}
            </div>
          )}
        </button>

        {showStatus && (
          <span
            className="absolute bottom-0 right-0 block rounded-full ring-2 ring-[#0a0a0c] bg-accent-emerald pointer-events-none"
            style={{
              width: size === 'sm' ? '8px' : '12px',
              height: size === 'sm' ? '8px' : '12px',
            }}
            title="Active & Available"
          />
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size profile photo"
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl bg-[#0f1014] border border-white/[0.12] p-5 sm:p-7 flex flex-col items-center gap-4 shadow-2xl shadow-black/80"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-foreground-secondary hover:text-foreground border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
              aria-label="Close full size view"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Profile Photo Display */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl mt-2">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {/* Caption & Identity */}
            <div className="text-center space-y-1">
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                {alt}
              </h3>
              <p className="text-xs font-mono text-accent-cyan">
                Senior Software Engineer
              </p>
              <p className="text-[11px] font-mono text-foreground-muted">
                Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
