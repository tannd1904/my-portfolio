import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tannd.online'),
  title: 'Tan Nguyen Duy — Senior Software Engineer | Distributed Systems & Enterprise E-Commerce',
  description:
    'Senior Software Engineer with 5+ years of experience architecting resilient backends, migrating legacy monoliths to microservices, and delivering mission-critical platforms for global leaders like Toyota, Bosch, and Softbank.',
  keywords: [
    'Tan Nguyen Duy',
    'Senior Software Engineer',
    'Distributed Systems',
    'Microservices',
    'Java 17',
    'Spring Boot 3',
    'Enterprise E-Commerce',
    'SAP Commerce Cloud',
    'Toyota Motor Philippines',
    'Bosch Global Software Technologies',
    'Softbank Payment Service',
  ],
  authors: [{ name: 'Tan Nguyen Duy' }],
  creator: 'Tan Nguyen Duy',
  themeColor: '#0a0a0c',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tannd.online',
    title: 'Tan Nguyen Duy — Senior Software Engineer | Distributed Systems & Enterprise E-Commerce',
    description:
      'Architecting resilient backends, migrating monoliths to microservices, and delivering mission-critical enterprise platforms.',
    siteName: 'Tan Nguyen Duy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tan Nguyen Duy — Senior Software Engineer',
    description:
      'Specializing in Java, Spring Boot 3, Microservices, Distributed Systems, and Enterprise E-Commerce.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-accent-cyan/20 selection:text-accent-cyan min-h-screen">
        {children}
      </body>
    </html>
  );
}
