import React from 'react';
import { keyMetrics } from '@/data/metrics';

export default function MetricStrip() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0c0d10]/60 py-10" aria-label="Key Engineering Metrics">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {keyMetrics.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col gap-1.5 ${
                idx !== 0 ? 'md:border-l md:border-white/[0.08] md:pl-10' : ''
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-mono font-semibold text-foreground tracking-tight">
                  {item.value}
                </span>
                <span className="text-sm font-mono text-accent-cyan font-medium">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
