import React from 'react';
import StatusBadge from './StatusBadge';
import HeroCTA from './HeroCTA';
import SystemTopologyVisual from './SystemTopologyVisual';
import Avatar from '@/components/ui/Avatar';
import { profileData } from '@/data/portfolio';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Profile Avatar + Status Lockup */}
            <div className="flex items-center gap-4">
              <Avatar
                src={profileData.avatarUrl}
                alt={profileData.name}
                size="lg"
                showStatus={true}
                priority={true}
              />
              <div className="flex flex-col gap-1.5">
                <StatusBadge />
                <span className="text-[11px] font-mono text-foreground-muted tracking-wide">
                  SAI Digital • Ex-Bosch • Ex-Softbank Project
                </span>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold tracking-tight text-foreground leading-[1.12]"
            >
              {profileData.headline}
            </h1>

            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl font-normal">
              {profileData.subheadline}
            </p>

            <HeroCTA />
          </div>

          {/* Minimal Distributed System Visualization */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SystemTopologyVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
