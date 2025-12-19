import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://schematicmarketing.com'),
  title: {
    default: 'Schematic Marketing — Strategy With Architectural Precision',
    template: '%s | Schematic Marketing',
  },
  description:
    'We engineer marketing systems built on clarity, research, and structural thinking. Strategy, design, and technology with precision.',
  keywords: [
    'marketing agency',
    'strategic marketing',
    'web development',
    'brand strategy',
    'digital marketing',
    'SEO',
    'design systems',
  ],
  authors: [{ name: 'Schematic Marketing' }],
  creator: 'Schematic Marketing',
  publisher: 'Schematic Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://schematicmarketing.com',
    siteName: 'Schematic Marketing',
    title: 'Schematic Marketing — Strategy With Architectural Precision',
    description:
      'We engineer marketing systems built on clarity, research, and structural thinking.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Schematic Marketing - Strategy With Architectural Precision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schematic Marketing — Strategy With Architectural Precision',
    description:
      'We engineer marketing systems built on clarity, research, and structural thinking.',
    images: ['/og-image.jpg'],
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
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b4688',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/logo.webp" type="image/webp" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
      </head>
      <body suppressHydrationWarning>
        <SkipToContent />
        <div className="app-layout">
          <Sidebar />
          <div className="main-wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
