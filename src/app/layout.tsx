import type { Metadata, Viewport } from 'next';
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import { StructuredData } from '../components/common/StructuredData';
import { SmoothScroll } from '../components/common/SmoothScroll';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.diyachanda.tech';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#121110' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    template: '%s | Diya Chanda',
  },
  description:
    'Diya Chanda is an AI researcher & engineer specializing in explainable deep learning, computer vision, and RAG web systems. Published IEEE & Springer author.',
  keywords: [
    'Diya Chanda',
    'AI Researcher',
    'AI Engineer',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'Explainable AI',
    'XAI',
    'RAG',
    'Retrieval-Augmented Generation',
    'IEEE ICRITO',
    'Springer LNNS',
    'The Neotia University',
    'FruitQ-GradeX',
    'CampusSphere',
    'JalDrishti',
    'Next.js Portfolio',
    'PyTorch',
    'FastAPI',
  ],
  authors: [{ name: 'Diya Chanda', url: 'https://github.com/chandadiya2004' }],
  creator: 'Diya Chanda',
  publisher: 'Diya Chanda',
  alternates: {
    canonical: '/',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    description:
      'Diya Chanda is an AI researcher & engineer specializing in explainable deep learning, computer vision, and RAG web systems.',
    siteName: 'Diya Chanda',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
    description:
      'Diya Chanda is an AI researcher & engineer specializing in explainable deep learning, computer vision, and RAG web systems.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
      },
    ],
    creator: '@chandadiya2004',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/icon-48x48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png?v=2', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  verification: {
    google:
      process.env.GOOGLE_VERIFICATION ||
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ||
      'DgWUYbYjs7ksUTmBAM02lYUhcDVcuZre7V3cTYHIlj4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-terracotta/20 selection:text-terracotta"
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
