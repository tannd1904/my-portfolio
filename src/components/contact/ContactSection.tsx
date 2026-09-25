'use client';

import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, FileText, ArrowUpRight, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/icons';
import Avatar from '@/components/ui/Avatar';
import { profileData } from '@/data/portfolio';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.08] relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/[0.02] blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-[#0d0e12] border border-white/[0.08] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
          {/* Headline & Description with Profile Signature */}
          <div className="max-w-xl flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-accent-cyan tracking-wider">06 // CONNECT</span>
              <span className="h-px w-8 bg-accent-cyan/30" />
            </div>

            <div className="flex items-center gap-3.5 my-1">
              <Avatar
                src={profileData.avatarUrl}
                alt={profileData.name}
                size="md"
                showStatus={true}
                enableZoom={true}
              />
              <div>
                <div className="text-sm font-semibold text-foreground">{profileData.name}</div>
                <div className="text-xs font-mono text-foreground-muted">{profileData.role}</div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent-emerald mt-0.5">
                  <MapPin className="w-3 h-3 text-accent-emerald shrink-0" />
                  <span>Living in {profileData.location}</span>
                </div>
              </div>
            </div>

            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Systems That Scale.
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              Whether you are architecting a high-throughput microservices platform, migrating a legacy core, or engineering mission-critical e-commerce infrastructure—reach out directly for work inquiries.
            </p>
          </div>

          {/* Action Hub */}
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            {/* Copy Email Button with State Tooltip */}
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl bg-accent-cyan hover:bg-[#1cf2ff] text-black font-semibold text-xs font-mono tracking-wide transition-all shadow-[0_0_25px_-5px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                aria-label="Copy email address to clipboard"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-black" />
                  <span>{profileData.email}</span>
                </div>
                {copiedEmail ? (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-black/10 px-2 py-0.5 rounded">
                    <Check className="w-3.5 h-3.5 text-black stroke-[3]" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-black/70" />
                )}
              </button>
            </div>

            {/* Phone Number Call / Copy Button */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${profileData.phoneRaw}`}
                className="flex-1 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-emerald/40 text-xs font-mono text-foreground transition-all"
                title="Call phone number"
              >
                <Phone className="w-3.5 h-3.5 text-accent-emerald" />
                <span>{profileData.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-foreground-secondary hover:text-accent-cyan transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-accent-emerald stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Social Links & CV */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-foreground transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-accent-cyan" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-foreground-muted ml-auto" />
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-foreground transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-foreground-secondary" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-foreground-muted ml-auto" />
              </a>
            </div>

            {/* Download CV */}
            <a
              href={profileData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-xs font-mono text-accent-emerald hover:border-accent-emerald/40 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-accent-emerald" />
              <span>Download Verified CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
