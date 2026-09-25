'use client';

import React from 'react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { profileData } from '@/data/portfolio';

export default function HeroCTA() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3.5 pt-2">
      {/* Primary CTA */}
      <a
        href="#toyota-modernization"
        onClick={(e) => scrollToSection(e, 'toyota-modernization')}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-foreground border border-accent-cyan/40 hover:border-accent-cyan text-sm font-medium transition-all shadow-sm hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.3)] group"
      >
        <span className="text-accent-cyan group-hover:translate-x-0.5 transition-transform">
          Explore System Architecture
        </span>
        <ArrowDownRight className="w-4 h-4 text-accent-cyan group-hover:translate-y-0.5 transition-transform" />
      </a>

      {/* Secondary CTA */}
      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, 'contact')}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-white/[0.04] text-foreground-secondary hover:text-foreground border border-white/[0.08] text-sm transition-colors"
      >
        <Mail className="w-3.5 h-3.5 text-foreground-muted" />
        <span>Get In Touch</span>
      </a>

      {/* Tertiary / External LinkedIn */}
      <a
        href={profileData.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-foreground-muted hover:text-foreground text-sm transition-colors"
      >
        <span>View LinkedIn</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
