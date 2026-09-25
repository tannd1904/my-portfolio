'use client';

import React, { useState } from 'react';
import { Layers, GitFork, ShieldAlert, Info, ArrowDown, Database, Cpu, Globe } from 'lucide-react';

type ArchitectureMode = 'modern' | 'legacy';

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  protocol: string;
  description: string;
}

export default function ArchitectureViewer() {
  const [mode, setMode] = useState<ArchitectureMode>('modern');
  const [selectedNode, setSelectedNode] = useState<NodeDetail | null>(null);

  const modernNodes: NodeDetail[] = [
    {
      id: 'client',
      name: 'Client Applications',
      category: 'Frontend / Client Tier',
      protocol: 'HTTPS / TLS 1.3',
      description: 'Web & mobile e-commerce storefronts interacting via headless REST APIs.',
    },
    {
      id: 'gateway',
      name: 'API Gateway',
      category: 'Edge & Routing',
      protocol: 'Reverse Proxy / JWT',
      description: 'Rate limiting, SSL termination, authentication validation, and request routing.',
    },
    {
      id: 'svc-auth',
      name: 'Catalog & Vehicle Service',
      category: 'Microservice Domain',
      protocol: 'REST / JSON',
      description: 'Independent domain service managing vehicle models, trims, and dealership allocations.',
    },
    {
      id: 'svc-order',
      name: 'Order & Reservation Service',
      category: 'Microservice Domain',
      protocol: 'REST / Event Producer',
      description: 'Autonomous service orchestrating customer reservation workflows with state isolation.',
    },
    {
      id: 'svc-payment',
      name: 'Integration & Payment Service',
      category: 'Microservice Domain',
      protocol: 'REST / Webhooks',
      description: 'Encapsulated third-party gateway interactions and transactional callbacks.',
    },
    {
      id: 'event-bus',
      name: 'Event / Messaging Layer',
      category: 'Asynchronous Backbone',
      protocol: 'Pub/Sub & Topics',
      description: 'Decoupled asynchronous event broker ensuring eventual consistency across services.',
    },
    {
      id: 'datastores',
      name: 'Domain Data Stores & Cache',
      category: 'Persistence Tier',
      protocol: 'PostgreSQL / Redis',
      description: 'Dedicated persistence per microservice maintaining strict bounded contexts.',
    },
  ];

  const legacyNodes: NodeDetail[] = [
    {
      id: 'legacy-client',
      name: 'End User / Browser',
      category: 'Presentation',
      protocol: 'HTTP / Web Requests',
      description: 'Direct browser interaction with monolithic web templates.',
    },
    {
      id: 'legacy-monolith',
      name: 'SAP Commerce / Hybris Core',
      category: 'Central Monolith',
      protocol: 'Internal In-Memory / JVM',
      description: 'All business logic, catalog, checkout, pricing, and integrations bundled inside a single deployment unit.',
    },
    {
      id: 'legacy-db',
      name: 'Centralized Monolithic Database',
      category: 'Shared Storage',
      protocol: 'JDBC / Shared Schema',
      description: 'Single database shared by all domain modules, creating strong coupling and locking contentions.',
    },
  ];

  const activeNodes = mode === 'modern' ? modernNodes : legacyNodes;

  return (
    <div className="w-full rounded-2xl bg-[#0b0c0f] border border-white/[0.08] overflow-hidden p-5 sm:p-7 shadow-xl">
      {/* Top Controls: Mode Switcher & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent-cyan" />
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
              System Topology Simulator
            </span>
          </div>
          <p className="text-xs text-foreground-secondary mt-1">
            Toggle architectural models to observe structural decoupling and state isolation.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="inline-flex p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] self-start sm:self-center">
          <button
            onClick={() => {
              setMode('modern');
              setSelectedNode(null);
            }}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
              mode === 'modern'
                ? 'bg-accent-cyan text-black font-semibold shadow-sm'
                : 'text-foreground-secondary hover:text-foreground'
            }`}
          >
            Modern Microservices
          </button>
          <button
            onClick={() => {
              setMode('legacy');
              setSelectedNode(null);
            }}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
              mode === 'legacy'
                ? 'bg-accent-cyan text-black font-semibold shadow-sm'
                : 'text-foreground-secondary hover:text-foreground'
            }`}
          >
            Legacy Architecture
          </button>
        </div>
      </div>

      {/* NDA Notice Banner */}
      <div className="mt-4 mb-6 flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-foreground-muted">
        <ShieldAlert className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
        <span>
          Architecture shown is a simplified conceptual representation due to client confidentiality.
          Internal service names and network topologies are abstract conceptual models.
        </span>
      </div>

      {/* Interactive Topology Display (Desktop & Tablet) */}
      <div className="relative min-h-[360px] bg-[#08080a] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        {mode === 'modern' ? (
          /* MODERN ARCHITECTURE VIEW */
          <div className="relative z-10 flex flex-col gap-6">
            {/* Tier 1: Client */}
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedNode(modernNodes[0])}
                className="group px-6 py-2.5 rounded-lg bg-[#14161a] border border-white/[0.12] hover:border-accent-cyan transition-all text-xs font-mono text-foreground flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Globe className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Client Applications (Web / Mobile)</span>
              </button>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center -my-3">
              <div className="flex flex-col items-center">
                <span className="w-px h-6 bg-accent-cyan/40" />
                <ArrowDown className="w-3.5 h-3.5 text-accent-cyan -mt-1" />
              </div>
            </div>

            {/* Tier 2: API Gateway */}
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedNode(modernNodes[1])}
                className="group px-8 py-2.5 rounded-lg bg-[#15181e] border border-accent-cyan/40 hover:border-accent-cyan transition-all text-xs font-mono text-foreground font-semibold flex items-center gap-2.5 shadow-[0_0_20px_-5px_rgba(0,240,255,0.15)]"
              >
                <Cpu className="w-4 h-4 text-accent-cyan" />
                <span>API Gateway (Routing & Auth)</span>
              </button>
            </div>

            {/* Down Connector to 3 Microservices */}
            <div className="flex justify-center -my-3">
              <div className="flex flex-col items-center">
                <span className="w-px h-6 bg-white/[0.15]" />
                <ArrowDown className="w-3.5 h-3.5 text-foreground-muted -mt-1" />
              </div>
            </div>

            {/* Tier 3: Independent Microservices */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <button
                onClick={() => setSelectedNode(modernNodes[2])}
                className="p-3.5 rounded-lg bg-[#121418] border border-white/[0.08] hover:border-accent-cyan/60 transition-all text-left flex flex-col gap-1 group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-accent-cyan">
                  <span>SERVICE_A</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                </div>
                <span className="text-xs font-semibold text-foreground group-hover:text-accent-cyan">
                  Catalog & Vehicle Module
                </span>
                <span className="text-[10px] font-mono text-foreground-muted">Independent REST API</span>
              </button>

              <button
                onClick={() => setSelectedNode(modernNodes[3])}
                className="p-3.5 rounded-lg bg-[#121418] border border-accent-cyan/30 hover:border-accent-cyan transition-all text-left flex flex-col gap-1 group shadow-[0_0_15px_-5px_rgba(0,240,255,0.1)]"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-accent-cyan">
                  <span>SERVICE_B</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                </div>
                <span className="text-xs font-semibold text-foreground group-hover:text-accent-cyan">
                  Order & Reservation Module
                </span>
                <span className="text-[10px] font-mono text-foreground-muted">Event Producer & State Isolation</span>
              </button>

              <button
                onClick={() => setSelectedNode(modernNodes[4])}
                className="p-3.5 rounded-lg bg-[#121418] border border-white/[0.08] hover:border-accent-cyan/60 transition-all text-left flex flex-col gap-1 group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-accent-cyan">
                  <span>SERVICE_C</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                </div>
                <span className="text-xs font-semibold text-foreground group-hover:text-accent-cyan">
                  Payment & Integration Module
                </span>
                <span className="text-[10px] font-mono text-foreground-muted">External Gateway Adapter</span>
              </button>
            </div>

            {/* Down Connector to Event Bus & Data */}
            <div className="flex justify-center -my-3">
              <div className="flex flex-col items-center">
                <span className="w-px h-6 bg-accent-emerald/40" />
                <ArrowDown className="w-3.5 h-3.5 text-accent-emerald -mt-1" />
              </div>
            </div>

            {/* Tier 4: Event Messaging & Distributed Persistence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedNode(modernNodes[5])}
                className="p-3 rounded-lg bg-[#101416] border border-accent-emerald/30 hover:border-accent-emerald transition-all text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <GitFork className="w-4 h-4 text-accent-emerald" />
                  <span className="text-xs font-mono font-medium text-foreground">
                    Event / Messaging Layer
                  </span>
                </div>
                <span className="text-[10px] font-mono text-accent-emerald">Async Pub/Sub</span>
              </button>

              <button
                onClick={() => setSelectedNode(modernNodes[6])}
                className="p-3 rounded-lg bg-[#101416] border border-white/[0.08] hover:border-accent-emerald/40 transition-all text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-foreground-secondary" />
                  <span className="text-xs font-mono font-medium text-foreground">
                    Domain Data Stores / Cache
                  </span>
                </div>
                <span className="text-[10px] font-mono text-foreground-muted">Isolated DBs</span>
              </button>
            </div>
          </div>
        ) : (
          /* LEGACY MONOLITH VIEW */
          <div className="relative z-10 flex flex-col gap-8 max-w-md mx-auto w-full py-4">
            <button
              onClick={() => setSelectedNode(legacyNodes[0])}
              className="p-4 rounded-lg bg-[#14161a] border border-white/[0.12] text-center text-xs font-mono text-foreground hover:border-white/[0.3] transition-colors"
            >
              End User / Browser Application
            </button>

            <div className="flex justify-center -my-4">
              <ArrowDown className="w-4 h-4 text-foreground-muted" />
            </div>

            <button
              onClick={() => setSelectedNode(legacyNodes[1])}
              className="p-6 rounded-xl bg-[#1e1518] border border-red-500/30 hover:border-red-500/60 text-center flex flex-col items-center gap-1 transition-all"
            >
              <span className="text-[11px] font-mono text-red-400">CENTRAL MONOLITH</span>
              <span className="text-sm font-semibold text-foreground">
                SAP Commerce / Hybris Monolithic Core
              </span>
              <span className="text-xs text-foreground-muted mt-1 max-w-xs">
                Tight coupling of order, catalog, pricing, user state, and integration logic in a single codebase.
              </span>
            </button>

            <div className="flex justify-center -my-4">
              <ArrowDown className="w-4 h-4 text-foreground-muted" />
            </div>

            <button
              onClick={() => setSelectedNode(legacyNodes[2])}
              className="p-4 rounded-lg bg-[#14161a] border border-white/[0.12] text-center text-xs font-mono text-foreground hover:border-white/[0.3] transition-colors flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4 text-foreground-secondary" />
              <span>Centralized Monolithic Database (Shared Schema)</span>
            </button>
          </div>
        )}

        {/* Selected Node Details Tray */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
          {selectedNode ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 bg-white/[0.03] p-3 rounded-lg border border-accent-cyan/30">
              <div>
                <span className="text-accent-cyan font-semibold">{selectedNode.name}</span>
                <span className="text-foreground-muted mx-2">•</span>
                <span className="text-foreground-secondary">{selectedNode.description}</span>
              </div>
              <span className="text-[10px] text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded self-start sm:self-center shrink-0">
                {selectedNode.protocol}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-foreground-muted text-[11px]">
              <Info className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Click on any architectural node to inspect domain role, isolation semantics, and protocols.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
