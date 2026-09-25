import React from 'react';
import { CaseStudy } from '@/data/caseStudies';
import { CheckCircle2, ChevronRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import ArchitectureViewer from '@/components/architecture/ArchitectureViewer';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article
      id={study.id}
      className="rounded-2xl bg-[#0e0f13] border border-white/[0.08] p-6 sm:p-8 md:p-10 flex flex-col gap-8 transition-all hover:border-white/[0.14]"
    >
      {/* Header & Meta */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-accent-cyan tracking-wider">
              CASE STUDY {study.number}
            </span>
            <span className="text-xs font-mono text-foreground-muted">•</span>
            <span className="text-xs font-mono text-foreground-secondary">{study.company}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {study.project}
          </h3>
          {study.clientContext && (
            <span className="inline-block mt-2 text-xs font-mono text-accent-emerald bg-accent-emerald/10 px-2.5 py-1 rounded">
              {study.clientContext}
            </span>
          )}
        </div>

        {/* Quality metrics badges if provided (Bosch) */}
        {study.qualityMetrics && (
          <div className="flex items-center gap-3 self-start md:self-auto">
            {study.qualityMetrics.map((qm) => (
              <div
                key={qm.label}
                className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-right"
              >
                <div className="text-sm font-mono font-bold text-accent-emerald">
                  {qm.value}
                </div>
                <div className="text-[10px] font-mono text-foreground-secondary">
                  {qm.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grid: Problem & Engineering Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Problem & Context */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400/90 font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span>THE CHALLENGE</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
            {study.challenge}
          </p>

          <div className="mt-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-[11px] font-mono text-foreground-muted block mb-1">
              ARCHITECTURAL SUMMARY
            </span>
            <p className="text-xs text-foreground-secondary leading-relaxed">
              {study.summary}
            </p>
          </div>
        </div>

        {/* Right Column: Engineering Contribution */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan font-semibold tracking-wide">
            <Zap className="w-3.5 h-3.5 text-accent-cyan" />
            <span>ENGINEERING APPROACH & EXECUTION</span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {study.approach.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-secondary leading-relaxed"
              >
                <span className="text-accent-cyan font-mono text-xs mt-0.5">▹</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Architecture Simulator (Specific to Toyota Case Study) */}
      {study.hasInteractiveArchitecture && (
        <div className="pt-2">
          <ArchitectureViewer />
        </div>
      )}

      {/* Impact & Outcome */}
      <div className="p-5 sm:p-6 rounded-xl bg-accent-emerald/[0.03] border border-accent-emerald/20 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-accent-emerald font-semibold tracking-wide">
          <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
          <span>MEASURABLE IMPACT & OUTCOME</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {study.impact.map((point, idx) => (
            <div key={idx} className="flex flex-col gap-1 text-xs text-foreground-secondary leading-relaxed">
              <span className="font-mono text-accent-emerald text-[11px]">0{idx + 1}.</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
        <span className="text-[11px] font-mono text-foreground-muted mr-2">TECH_STACK:</span>
        {study.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-foreground-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
