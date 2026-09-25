'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/icons';
import { profileData } from '@/data/portfolio';

const navLinks = [
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Experience', href: '#experience' },
  { name: 'Principles', href: '#principles' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded-md"
        >
          <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-accent-cyan transition-colors">
            {profileData.name}
          </span>
          <span className="text-xs text-foreground-muted font-mono tracking-wider">
            {profileData.role}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground-secondary hover:text-foreground hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action icons / Socials */}
        <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/[0.08]">
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-foreground-muted hover:text-accent-cyan transition-colors p-1"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-foreground-muted hover:text-accent-cyan transition-colors p-1"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-foreground hover:border-accent-cyan/40 hover:text-accent-cyan transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded text-foreground-secondary hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1012] border-b border-white/[0.08] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-mono" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground-secondary hover:text-accent-cyan py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/[0.08]">
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-foreground-secondary hover:text-accent-cyan"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-foreground-secondary hover:text-accent-cyan"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-accent-cyan ml-auto"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
