import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudiesData } from '@/data/caseStudies';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 max-w-6xl mx-auto px-6" aria-labelledby="cases-heading">
      {/* Section Header */}
      <div className="flex flex-col gap-2.5 mb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-cyan tracking-wider">02 // ARCHITECTURE & CASE STUDIES</span>
          <span className="h-px w-8 bg-accent-cyan/30" />
        </div>
        <h2 id="cases-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Selected Engineering Case Studies
        </h2>
        <p className="text-sm text-foreground-secondary max-w-2xl">
          Architectural challenges, technical implementations, and production outcomes delivered across automotive, enterprise, and fintech domains.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="flex flex-col gap-14">
        {caseStudiesData.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
