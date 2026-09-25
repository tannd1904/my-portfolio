import React from 'react';
import { Server, ShoppingBag, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ArsenalCategory } from '@/data/technologies';

interface BentoCardProps {
  category: ArsenalCategory;
  className?: string;
}

export default function BentoCard({ category, className = '' }: BentoCardProps) {
  const getIcon = () => {
    switch (category.iconName) {
      case 'network':
        return <Server className="w-5 h-5 text-accent-cyan" />;
      case 'commerce':
        return <ShoppingBag className="w-5 h-5 text-accent-cyan" />;
      case 'database':
        return <Database className="w-5 h-5 text-accent-cyan" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-accent-emerald" />;
      default:
        return <Server className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-[#0f1013] border border-white/[0.08] hover:border-accent-cyan/30 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.07)] hover:-translate-y-0.5 ${className}`}
    >
      {/* Top category metadata & icon */}
      <div>
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-accent-cyan/40 transition-colors">
              {getIcon()}
            </div>
            <div>
              <span className="text-[11px] font-mono text-foreground-muted block tracking-wider">
                CATEGORY {category.categoryNumber}
              </span>
              <h3 className="text-base font-semibold text-foreground tracking-tight group-hover:text-accent-cyan transition-colors">
                {category.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-foreground-secondary mt-3 mb-5 leading-relaxed">
          {category.tagline}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-foreground-secondary hover:text-foreground hover:border-white/[0.15] transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-accent-cyan/60" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics strip if applicable (e.g. Card 4) */}
      {category.metrics && (
        <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-2 gap-4 bg-white/[0.01] -mx-2 -mb-2 p-3 rounded-lg">
          {category.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <div className="flex items-center gap-1 text-accent-emerald text-sm font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{metric.value}</span>
              </div>
              <span className="text-[11px] font-mono text-foreground font-medium">
                {metric.label}
              </span>
              <span className="text-[10px] text-foreground-muted leading-tight mt-0.5">
                {metric.context}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
