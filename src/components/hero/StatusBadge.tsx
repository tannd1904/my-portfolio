import React from 'react';
import { profileData } from '@/data/portfolio';

export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-foreground-secondary tracking-tight">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
      </span>
      <span>{profileData.statusBadge}</span>
    </div>
  );
}
