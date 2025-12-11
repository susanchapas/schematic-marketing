import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://schematicmarketing.com'),
  title: {
    default: 'Schematic Marketing — The Architecture of Influence',
    template: '%s | Schematic Marketing',
  },
  description:
    'We engineer engagement: modular marketing services blending strategy, design, and accessible tech. Social management, web development, graphic design, event planning, and SEO.',
  keywords: [
    'marketing agency',
    'web development',
    'social media management',
    'graphic design',
    'SEO',
    'branding',
    'digital marketing',
  ],
  authors: [{ name: 'Schematic Marketing' }],
  creator: 'Schematic Marketing',
  publisher: 'Schematic Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://schematicmarketing.com',
    siteName: 'Schematic Marketing',
    title: 'Schematic Marketing — The Architecture of Influence',
    description:
      'We engineer engagement: modular marketing services blending strategy, design, and accessible tech.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Schematic Marketing - The Architecture of Influence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schematic Marketing — The Architecture of Influence',
    description:
      'We engineer engagement: modular marketing services blending strategy, design, and accessible tech.',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b4688',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
