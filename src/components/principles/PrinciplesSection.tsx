import React from 'react';
import { engineeringPrinciples } from '@/data/principles';

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-24 max-w-6xl mx-auto px-6" aria-labelledby="principles-heading">
      {/* Section Header */}
      <div className="flex flex-col gap-2.5 mb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-cyan tracking-wider">04 // PHILOSOPHY</span>
          <span className="h-px w-8 bg-accent-cyan/30" />
        </div>
        <h2 id="principles-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Engineering Principles
        </h2>
        <p className="text-sm text-foreground-secondary max-w-xl">
          Core mental models guiding distributed system design, API contracts, and operational quality.
        </p>
      </div>

      {/* 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringPrinciples.map((principle) => (
          <div
            key={principle.number}
            className="group relative rounded-xl bg-[#0e0f12] border border-white/[0.07] hover:border-accent-cyan/30 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.06)]"
          >
            <div>
              <span className="text-xs font-mono text-accent-cyan font-bold tracking-widest block mb-3">
                {principle.number}
              </span>
              <h3 className="text-base font-semibold text-foreground tracking-tight mb-2 group-hover:text-accent-cyan transition-colors">
                {principle.title}
              </h3>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
