import React from 'react';
import { profileData } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080a] py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left identity & core stack */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {profileData.name}
            </span>
            <span className="text-xs text-foreground-muted font-mono">•</span>
            <span className="text-xs font-mono text-foreground-muted">
              {profileData.role}
            </span>
          </div>
          <p className="text-xs font-mono text-foreground-muted">
            Java 17 • Spring Boot 3 • Microservices Architecture • Enterprise E-Commerce
          </p>
        </div>

        {/* Right links & copyright */}
        <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-foreground-muted">
          <div className="flex items-center gap-5">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              GitHub
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="hover:text-accent-cyan transition-colors"
            >
              Email
            </a>
          </div>
          <span className="text-foreground-muted/70 text-[11px]">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
