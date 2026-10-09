import { AuthProvider } from '@/context/AuthContext';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: 'Kratos Fitness - Power Your Potential',
  description:
    'High-performance gym and fitness club landing experience with custom responsive organic layout, specialty programs, and seamless mobile and tablet consistency.',
    
  openGraph: {
    title: 'Kratos Fitness - Power Your Potential',
    description:
      'High-performance gym and fitness club landing experience with custom responsive organic layout, specialty programs, and seamless mobile and tablet consistency.',
    type: 'website',
    images: [
      {
        url: '/images/hero-bodybuilders.jpg',
        width: 1920,
        height: 1080,
        alt: 'Kratos Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratos Fitness - Power Your Potential',
    description:
      'High-performance gym and fitness club landing experience with custom responsive organic layout, specialty programs, and seamless mobile and tablet consistency.',
    images: [
      {
        url: '/images/hero-bodybuilders.jpg',
        width: 1920,
        height: 1080,
        alt: 'Kratos Fitness',
      },
    ],
  },
  icons: {
    icon: '/images/logo.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,600,500,400,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#ffffff] text-slate-900 antialiased selection:bg-[#71AC16] selection:text-white font-sans">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
