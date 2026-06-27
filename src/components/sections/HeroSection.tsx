'use client';

// components/sections/HeroSection.tsx
import Link from 'next/link';
import { Github, ArrowRight, Mail } from 'lucide-react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import SideRays from '@/components/SideRays';
import { IoFingerPrint } from 'react-icons/io5';
import { GiArtificialIntelligence } from 'react-icons/gi';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kamaldev10', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/alimusthafakamal',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/alimusthafa10',
    icon: FaInstagram,
  },
];

export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative flex flex-col items-center justify-center min-h-dvh text-center px-5 overflow-hidden'
    >
      {/* ── Background ── */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 overflow-hidden'
      >
        <SideRays
          speed={2.5}
          rayColor1='#EAB308'
          rayColor2='#7462fd'
          intensity={2}
          spread={2}
          origin='top-right'
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
        <div
          aria-hidden
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className='relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl mx-auto'>
        {/* Overline badge */}
        <span
          className={cn(
            typography.overline,
            'inline-flex items-center gap-2 px-3 py-1 rounded-full',
            'border border-primary/30 bg-primary/5 text-primary',
          )}
        >
          <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0' />
          Full Stack Web Developer
        </span>

        {/* ── Headline ── */}
        {/*
          Mobile strategy:
          - Line 1 & 2: plain text, tight leading
          - Line 3 (Human + AI): icons beside each word, stays on one row
          - font size steps: 3xl → 5xl → 7xl → 8xl
          - avoid icon inside flex-row with long text — icons get their own span
        */}
        <h1
          className={cn(
            'font-mono font-black tracking-tight leading-none text-foreground',
            // Graduated size — safe at every breakpoint
            'text-[2.25rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
          )}
        >
          <span className='block'>The Future of</span>
          <span className='block'>Development is</span>
          <span className='flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-primary mt-1'>
            {/* Human */}
            <span className='inline-flex items-center gap-1.5 sm:gap-2'>
              <IoFingerPrint
                className='w-[0.85em] h-[0.85em] flex-shrink-0'
                aria-hidden
              />
              <span>Human</span>
            </span>

            {/* + separator */}
            <span className='text-foreground/40 font-light select-none'>+</span>

            {/* AI */}
            <span className='inline-flex items-center gap-1.5 sm:gap-2'>
              <GiArtificialIntelligence
                className='w-[0.85em] h-[0.85em] flex-shrink-0'
                aria-hidden
              />
              <span>AI</span>
            </span>
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className={cn(
            typography.lead,
            // Slightly tighter on mobile
            'text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-xl',
          )}
        >
          Translating complex ideas to high-performance and scalable web
          applications.
        </p>

        {/* CTA row */}
        <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto mt-1'>
          <Link
            href='/projects'
            className={cn(
              typography.button,
              'inline-flex items-center justify-center gap-2',
              'w-full sm:w-auto px-5 py-2.5 rounded-md',
              'bg-primary text-primary-foreground hover:bg-primary/90',
              'transition-colors duration-200 glow-indigo',
            )}
          >
            View Projects
            <ArrowRight className='w-4 h-4' />
          </Link>
          <Link
            href='/#contact'
            className={cn(
              typography.button,
              'inline-flex items-center justify-center gap-2',
              'w-full sm:w-auto px-5 py-2.5 rounded-md',
              'border border-border text-foreground',
              'hover:bg-muted/50 transition-colors duration-200',
            )}
          >
            <Mail className='w-4 h-4' />
            Get in touch
          </Link>
        </div>

        {/* Social links */}
        <div className='flex items-center gap-2.5 sm:gap-3 mt-1'>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className={cn(
                'p-2.5 rounded-md border border-border',
                'text-muted-foreground hover:text-foreground',
                'hover:border-primary/50 hover:bg-muted/40',
                'transition-all duration-200',
              )}
            >
              <Icon className='w-4 h-4' />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className='absolute sm:hidden bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30'>
        <span
          className={cn(
            typography.caption,
            'tracking-widest uppercase text-[10px]',
          )}
        >
          Scroll
        </span>
        <div className='w-px h-6 sm:h-8 bg-gradient-to-b from-muted-foreground to-transparent' />
      </div>
    </section>
  );
}
