'use client';

import React, { useEffect, useState } from 'react';

export default function SystemTopologyVisual() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className="relative w-full max-w-lg lg:max-w-none h-64 sm:h-72 rounded-2xl bg-[#0d0e11]/80 border border-white/[0.08] p-5 flex flex-col justify-between overflow-hidden shadow-2xl"
      aria-label="Abstract Distributed Architecture Topology"
      role="img"
    >
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent-cyan/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent-emerald/[0.04] blur-3xl pointer-events-none" />

      {/* Header status bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-foreground-muted border-b border-white/[0.06] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
          <span>DISTRIBUTED_TOPOLOGY_MONITOR</span>
        </div>
        <span className="text-[10px] tracking-wider text-accent-emerald/80">LATENCY &lt; 8ms</span>
      </div>

      {/* Diagram SVG Canvas */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-1">
        <svg
          viewBox="0 0 460 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-48"
        >
          {/* Connecting Lines */}
          {/* Gateway -> Services */}
          <path
            d="M 230 38 L 80 80"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeDasharray={prefersReducedMotion ? 'none' : '4 4'}
            className={prefersReducedMotion ? '' : 'animate-[dash_20s_linear_infinite]'}
          />
          <path
            d="M 230 38 L 230 80"
            stroke="rgba(0,240,255,0.3)"
            strokeWidth="1.5"
            strokeDasharray={prefersReducedMotion ? 'none' : '4 4'}
            className={prefersReducedMotion ? '' : 'animate-[dash_15s_linear_infinite]'}
          />
          <path
            d="M 230 38 L 380 80"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeDasharray={prefersReducedMotion ? 'none' : '4 4'}
            className={prefersReducedMotion ? '' : 'animate-[dash_20s_linear_infinite]'}
          />

          {/* Services -> Event Bus */}
          <path
            d="M 80 102 L 170 135"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.2"
          />
          <path
            d="M 230 102 L 230 135"
            stroke="rgba(16,185,129,0.3)"
            strokeWidth="1.2"
          />
          <path
            d="M 380 102 L 290 135"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.2"
          />

          {/* LEVEL 1: API Gateway */}
          <g transform="translate(160, 16)">
            <rect
              width="140"
              height="28"
              rx="6"
              fill="#15171b"
              stroke="rgba(0, 240, 255, 0.4)"
              strokeWidth="1"
            />
            <circle cx="16" cy="14" r="3" fill="#00f0ff" />
            <text
              x="26"
              y="18"
              fill="#f5f5f5"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="500"
            >
              API Gateway
            </text>
          </g>

          {/* LEVEL 2: Services */}
          {/* Service A */}
          <g transform="translate(25, 78)">
            <rect
              width="110"
              height="26"
              rx="5"
              fill="#121316"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
            <circle cx="12" cy="13" r="2.5" fill="#a1a1aa" />
            <text
              x="22"
              y="17"
              fill="#d4d4d8"
              fontSize="10"
              fontFamily="monospace"
            >
              Auth / IAM
            </text>
          </g>

          {/* Service B (Core) */}
          <g transform="translate(175, 78)">
            <rect
              width="110"
              height="26"
              rx="5"
              fill="#121316"
              stroke="rgba(0, 240, 255, 0.3)"
              strokeWidth="1"
            />
            <circle cx="12" cy="13" r="2.5" fill="#00f0ff" />
            <text
              x="22"
              y="17"
              fill="#f5f5f5"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="500"
            >
              Order Service
            </text>
          </g>

          {/* Service C */}
          <g transform="translate(325, 78)">
            <rect
              width="110"
              height="26"
              rx="5"
              fill="#121316"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
            <circle cx="12" cy="13" r="2.5" fill="#a1a1aa" />
            <text
              x="22"
              y="17"
              fill="#d4d4d8"
              fontSize="10"
              fontFamily="monospace"
            >
              Payment Flow
            </text>
          </g>

          {/* LEVEL 3: Event Bus & Cache */}
          {/* Event Bus */}
          <g transform="translate(95, 134)">
            <rect
              width="125"
              height="24"
              rx="5"
              fill="#101114"
              stroke="rgba(16, 185, 129, 0.35)"
              strokeWidth="1"
            />
            <circle cx="12" cy="12" r="2.5" fill="#10b981" />
            <text
              x="22"
              y="16"
              fill="#e4e4e7"
              fontSize="9.5"
              fontFamily="monospace"
            >
              Event Bus / Stream
            </text>
          </g>

          {/* Database / Cache */}
          <g transform="translate(240, 134)">
            <rect
              width="125"
              height="24"
              rx="5"
              fill="#101114"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
            />
            <circle cx="12" cy="12" r="2.5" fill="#a1a1aa" />
            <text
              x="22"
              y="16"
              fill="#e4e4e7"
              fontSize="9.5"
              fontFamily="monospace"
            >
              Postgres / Redis
            </text>
          </g>
        </svg>
      </div>

      {/* Footer telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-foreground-muted/70 pt-2 border-t border-white/[0.04]">
        <span>SERVICE_MESH: ACTIVE</span>
        <span>RESILIENCE: 99.99%</span>
      </div>
    </div>
  );
}
