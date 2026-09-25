import React from 'react';
import { careerTimeline } from '@/data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function CareerTimeline() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6" aria-labelledby="experience-heading">
      {/* Section Header */}
      <div className="flex flex-col gap-2.5 mb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-cyan tracking-wider">03 // TRACK RECORD</span>
          <span className="h-px w-8 bg-accent-cyan/30" />
        </div>
        <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Career Journey
        </h2>
        <p className="text-sm text-foreground-secondary max-w-xl">
          Progressive engineering ownership across global technology partners and enterprise clients.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-white/[0.1] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {careerTimeline.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                item.isCurrent
                  ? 'bg-accent-cyan border-[#0a0a0c] shadow-[0_0_12px_rgba(0,240,255,0.8)]'
                  : 'bg-[#15171a] border-white/30 group-hover:border-accent-cyan'
              }`}
            />

            {/* Timeline Content Card */}
            <div className="rounded-xl bg-[#0f1013] border border-white/[0.07] hover:border-white/[0.14] p-5 sm:p-7 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-white/[0.05]">
                <div>
                  <span className="text-sm font-semibold text-foreground tracking-tight">
                    {item.role}
                  </span>
                  <span className="text-foreground-muted mx-2">•</span>
                  <span className="text-xs font-mono text-accent-cyan font-medium">
                    {item.company}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-foreground-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-foreground-muted" />
                    <span>{item.period}</span>
                  </div>
                  {item.isCurrent && (
                    <span className="text-[10px] text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded font-mono font-medium">
                      ACTIVE
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-foreground-secondary">
                <span className="text-foreground-muted">Context:</span>
                <span className="text-foreground font-medium">{item.project}</span>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {item.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground-secondary leading-relaxed">
                    <span className="text-accent-cyan/70 font-mono text-xs mt-0.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills / Tech Tags */}
              <div className="mt-5 pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-foreground-muted border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
