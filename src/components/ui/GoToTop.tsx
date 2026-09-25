'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to top"
        className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#121419]/90 hover:bg-[#1a1d24] text-foreground-secondary hover:text-accent-cyan border border-white/[0.1] hover:border-accent-cyan/50 shadow-lg shadow-black/50 backdrop-blur-md transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      >
        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
