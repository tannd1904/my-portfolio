'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles } from 'lucide-react';
import { profileData } from '@/data/portfolio';

interface CommandLog {
  id: string;
  command: string;
  output: string | string[];
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'tan.getCurrentFocus()',
      output: [
        'Microservices Architecture & Monolith Decoupling',
        'Enterprise E-Commerce (SAP Commerce Cloud / Hybris)',
        'Resilient Java 17 & Spring Boot 3 Services',
        'High-Throughput Distributed Data Pipelines',
      ],
    },
    {
      id: 'init-2',
      command: 'tan.contact()',
      output: [
        `Email: ${profileData.email}`,
        `Phone: ${profileData.phone}`,
        `Location: ${profileData.location}`,
        `LinkedIn: ${profileData.linkedinUrl}`,
        `GitHub: ${profileData.githubUrl}`,
      ],
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleExecute = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let output: string | string[] = [];

    switch (trimmed.toLowerCase()) {
      case 'tan.getcurrentfocus()':
      case 'focus':
        output = [
          'Microservices Architecture & Monolith Decoupling',
          'Enterprise E-Commerce (SAP Commerce Cloud / Hybris)',
          'Resilient Java 17 & Spring Boot 3 Services',
          'High-Throughput Distributed Data Pipelines',
        ];
        break;
      case 'tan.contact()':
      case 'contact':
        output = [
          `Email: ${profileData.email}`,
          `Phone: ${profileData.phone}`,
          `Location: ${profileData.location}`,
          `LinkedIn: ${profileData.linkedinUrl}`,
          `GitHub: ${profileData.githubUrl}`,
        ];
        break;
      case 'tan.getstack()':
      case 'stack':
        output = [
          'Backend: Java (11 / 17 / 21 / 23), Spring Boot 3, Spring Security 6, REST APIs',
          'Enterprise: SAP Commerce Cloud, Hybris, Headless Commerce',
          'Data: PostgreSQL, MSSQL, Oracle, Redis, Liquibase, Flyway',
          'DevOps: Docker, Jenkins CI/CD, SonarQube, JUnit, Mockito',
        ];
        break;
      case 'tan.getexperience()':
      case 'experience':
        output = [
          '08/2024 – Present: Senior Software Engineer @ SAI Digital (Toyota Project)',
          '02/2023 – 2024: Software Engineer @ Bosch Global Software Technologies',
          '10/2020 – 01/2023: Software Engineer @ IT Services Japan Group (Softbank Payment)',
          '2017 – 2021: Engineer\'s Degree IT @ PTIT',
        ];
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      case 'help':
        output = [
          'Available Commands:',
          '  tan.getCurrentFocus()   - Active architectural priorities',
          '  tan.contact()            - Contact information & social handles',
          '  tan.getStack()           - Core backend & enterprise technology stack',
          '  tan.getExperience()      - Career chronology',
          '  clear                    - Clear terminal output',
        ];
        break;
      default:
        output = `Command not recognized: '${trimmed}'. Type 'help' for supported commands.`;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output,
      },
    ]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecute(inputVal);
  };

  return (
    <section id="terminal" className="py-24 max-w-6xl mx-auto px-6" aria-labelledby="terminal-heading">
      {/* Section Header */}
      <div className="flex flex-col gap-2.5 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-accent-cyan tracking-wider">05 // REPL RUNTIME</span>
          <span className="h-px w-8 bg-accent-cyan/30" />
        </div>
        <h2 id="terminal-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Interactive Shell
        </h2>
        <p className="text-sm text-foreground-secondary max-w-xl">
          Execute inspection commands directly against the engineer profile context.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="rounded-xl bg-[#090a0d] border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111216] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[11px] text-foreground-muted ml-2">bash — tan@systems-core:~</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-accent-cyan/80">
            <Terminal className="w-3.5 h-3.5" />
            <span>SESSION_ACTIVE</span>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-5 py-2.5 bg-white/[0.01] border-b border-white/[0.04] flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-foreground-muted uppercase tracking-wider mr-1">Quick Run:</span>
          {['tan.getCurrentFocus()', 'tan.getStack()', 'tan.contact()', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleExecute(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/[0.07] transition-all text-[11px]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Log Area */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-accent-cyan">
                <span className="text-foreground-muted">$</span>
                <span className="font-semibold">{log.command}</span>
              </div>
              <div className="pl-4 text-foreground-secondary space-y-0.5 border-l border-white/[0.06]">
                {Array.isArray(log.output) ? (
                  log.output.map((line, idx) => (
                    <div key={idx} className="leading-relaxed">
                      <span className="text-accent-emerald/80 mr-2">&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-red-400">
                    <span className="text-red-400 mr-2">&gt;</span>
                    {log.output}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-foreground-muted">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. tan.getStack(), help) and press Enter..."
              className="flex-1 bg-transparent text-foreground focus:outline-none placeholder:text-foreground-muted/50 text-xs"
            />
            <button
              type="submit"
              className="text-foreground-muted hover:text-accent-cyan transition-colors"
              aria-label="Execute command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
}
