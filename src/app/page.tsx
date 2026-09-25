import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import MetricStrip from '@/components/metrics/MetricStrip';
import BentoGrid from '@/components/arsenal/BentoGrid';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';
import CareerTimeline from '@/components/experience/CareerTimeline';
import PrinciplesSection from '@/components/principles/PrinciplesSection';
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tan Nguyen Duy',
    jobTitle: 'Senior Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'Vietnam',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Posts and Telecommunications Institute of Technology',
    },
    knowsAbout: [
      'Distributed Systems',
      'Microservices Architecture',
      'Java 17',
      'Spring Boot 3',
      'Enterprise E-Commerce',
      'SAP Commerce Cloud',
      'PostgreSQL',
      'Monolith Modernization',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'SAI Digital',
    },
  };

  return (
    <>
      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen bg-background text-foreground flex flex-col">
        {/* Sticky Minimal Navigation */}
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* Key Numbers Strip */}
          <MetricStrip />

          {/* Bento Grid: Tech Arsenal */}
          <BentoGrid />

          {/* Selected Engineering Case Studies & Interactive Architecture */}
          <CaseStudiesSection />

          {/* Career Journey Vertical Timeline */}
          <CareerTimeline />

          {/* Engineering Principles */}
          <PrinciplesSection />

          {/* Interactive Shell Terminal */}
          <InteractiveTerminal />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Minimal Engineering Footer */}
        <Footer />
      </div>
    </>
  );
}
