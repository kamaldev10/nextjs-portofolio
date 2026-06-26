'use client';

// components/layout/HomeNav.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Certificates', href: '/#certificates' },
];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent',
      )}
    >
      <div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
        {/* Logo / wordmark */}
        <Link
          href='/'
          className={cn(
            typography.code,
            'text-foreground font-bold text-base tracking-widest hover:text-primary transition-colors duration-200',
          )}
        >
          AMK<span className='text-primary'>.</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className='hidden md:flex items-center gap-1'
          aria-label='Main navigation'
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                typography.nav,
                'px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            href='/#contact'
            className={cn(
              typography.button,
              'px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200',
            )}
          >
            Hire me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className='md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-md hover:bg-muted/50 transition-colors duration-200'
        >
          <span
            className={cn(
              'block h-0.5 w-5 bg-foreground transition-all duration-300 origin-center',
              mobileOpen && 'rotate-45 translate-y-2',
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-5 bg-foreground transition-all duration-300',
              mobileOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-5 bg-foreground transition-all duration-300 origin-center',
              mobileOpen && '-rotate-45 -translate-y-2',
            )}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className='px-6 pb-6 pt-2 flex flex-col gap-1 bg-background/95 backdrop-blur-xl border-b border-border/60'
          aria-label='Mobile navigation'
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                typography.nav,
                'px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            onClick={() => setMobileOpen(false)}
            className={cn(
              typography.button,
              'mt-2 px-4 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-center transition-colors duration-200',
            )}
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
