import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { site } from '@/config/site';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  icons: {
    icon: site.favicon,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: site.seo.twitterCard,
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="chat2pay" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}