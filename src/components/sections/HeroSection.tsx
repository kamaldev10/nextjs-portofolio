'use client';

import Link from 'next/link';
import { Github, ArrowRight, Mail } from 'lucide-react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import SideRays from '@/components/SideRays';
import { IoFingerPrint } from 'react-icons/io5';
import { GiArtificialIntelligence } from 'react-icons/gi';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kamaldev10',
    icon: Github,
  },
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
      className='relative flex flex-col items-center justify-center min-h-dvh text-center sm:pt-10 px-6 overflow-hidden'
    >
      {/* ── Background ambient glow ── */}
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
        {/* Thin grid overlay */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className='relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto'>
        {/* Overline */}
        <span
          className={cn(
            typography.overline,
            'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary',
          )}
        >
          <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
          Full Stack Web Developer
        </span>

        {/* Headline */}
        <h1 className={cn(typography.hero, 'text-foreground')}>
          The Future of
          <br />
          <span>Development is</span>
          <br />
          <span className='flex gap-5 text-primary'>
            <IoFingerPrint /> Human
            <span className='mx-2'>+</span>
            <GiArtificialIntelligence /> AI
          </span>
        </h1>

        {/* Sub-copy */}
        <p className={cn(typography.lead, 'max-w-xl')}>
          Translating complex ideas to high-performance and scalable web
          applications.
        </p>

        {/* CTA row */}
        <div className='flex flex-wrap items-center justify-center gap-3 mt-1'>
          <Link
            href='/projects'
            className={cn(
              typography.button,
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 glow-indigo',
            )}
          >
            View Projects
            <ArrowRight className='w-4 h-4' />
          </Link>
          <Link
            href='/#contact'
            className={cn(
              typography.button,
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground hover:bg-muted/50 transition-colors duration-200',
            )}
          >
            <Mail className='w-4 h-4' />
            Get in touch
          </Link>
        </div>

        {/* Social links */}
        <div className='flex items-center gap-3 mt-2'>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className='p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-muted/40 transition-all duration-200'
            >
              <Icon className='w-4 h-4' />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
