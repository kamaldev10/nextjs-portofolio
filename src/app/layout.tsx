import { ThemeProvider } from '@/components/ThemeProvider';
import ConditionalNavbar from '@/components/layout/ConditionalNavbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://amkamal.web.id'),
  alternates: {
    canonical: '/',
  },
  title: 'Ali Musthafa Kamal | Software Engineer',
  description:
    'Portfolio of Ali Musthafa Kamal - Translating complex ideas to high-performance and scalable software applications.',
  keywords: [
    'Ali Musthafa Kamal',
    'software engineer',
    'portfolio',
    'software development',
    'fullstack developer',
  ],
  authors: [{ name: 'Ali Musthafa Kamal' }],
  creator: 'Ali Musthafa Kamal',
  openGraph: {
    title: 'Ali Musthafa Kamal | Software Engineer',
    description:
      'Showcasing projects and skills in software development using React, Next.js, Node.js, Express, Golang, Laravel, etc.',
    url: 'https://amkamal.web.id',
    siteName: 'Ali Musthafa Kamal Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio of Ali Musthafa Kamal',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Musthafa Kamal | Fullstack Web Developer',
    description:
      'Portfolio of Ali Musthafa Kamal – showcasing frontend and backend web development projects.',
    creator: '@alimusthafakamal', // replace with your Twitter
    images: ['/images/og-image.png'],
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
    <html
      lang='id'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
      className='scroll-smooth'
    >
      <body className=' antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalNavbar />
          <main className='min-h-screen' role='main'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
