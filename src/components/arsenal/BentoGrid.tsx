import React from 'react';
import BentoCard from './BentoCard';
import { arsenalCategories } from '@/data/technologies';

export default function BentoGrid() {
  return (
    <section id="arsenal" className="py-24 max-w-6xl mx-auto px-6" aria-labelledby="arsenal-heading">
      {/* Section Header */}
      <div className="flex flex-col gap-2.5 mb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-cyan tracking-wider">01 // ARSENAL</span>
          <span className="h-px w-8 bg-accent-cyan/30" />
        </div>
        <h2 id="arsenal-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Tech Arsenal & Engineering Metrics
        </h2>
        <p className="text-sm text-foreground-secondary max-w-xl">
          Tools and engineering practices used to build reliable enterprise systems.
        </p>
      </div>

      {/* Bento Grid Layout: 2x2 on desktop with balanced rhythm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {arsenalCategories.map((category) => (
          <BentoCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
