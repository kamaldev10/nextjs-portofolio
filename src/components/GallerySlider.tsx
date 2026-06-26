'use client';

// components/ui/GallerySlider.tsx
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';

interface GallerySliderProps {
  images: string[];
  type: 'mobile' | 'desktop';
}

export default function GallerySlider({ images, type }: GallerySliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  // Track scroll state for arrow visibility
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);

    // Compute active index from scroll
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;
    const itemW = children[0].offsetWidth + 12; // width + gap
    setActiveIndex(Math.round(el.scrollLeft / itemW));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const itemW = children[0]?.offsetWidth ?? 280;
    el.scrollBy({
      left: dir === 'left' ? -(itemW + 12) : itemW + 12,
      behavior: 'smooth',
    });
  };

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen]);

  if (!images?.length) return null;

  const isMobile = type === 'mobile';

  return (
    <div className='relative'>
      {/* ── Track ────────────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className={cn(
          'flex gap-3 overflow-x-auto',
          // Hide scrollbar cross-browser
          'scrollbar-hide',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          // Snap
          'scroll-smooth snap-x snap-mandatory',
          'pb-2', // breathing room for shadow
        )}
      >
        {images.map((src, i) => (
          <button
            key={i}
            type='button'
            aria-label={`View image ${i + 1}`}
            onClick={() => openLightbox(src)}
            className={cn(
              'group relative flex-shrink-0 snap-start overflow-hidden rounded-xl',
              'border border-border hover:border-primary/50',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              isMobile
                ? 'w-36 sm:w-44 md:w-52 aspect-[9/16]'
                : 'w-64 sm:w-80 md:w-[380px] aspect-[16/9]',
              // Active indicator
              i === activeIndex && 'border-primary/70 ring-1 ring-primary/40',
            )}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              sizes={isMobile ? '208px' : '380px'}
            />

            {/* Hover zoom hint */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center'>
              <ZoomIn className='w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* Index badge */}
            <span
              className={cn(
                typography.caption,
                'absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/50 text-white/80',
              )}
            >
              {i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* ── Floating pill nav ─────────────────────────────────────────── */}
      {images.length > 1 && (
        <div className='absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1.5 rounded-full bg-card border border-border shadow-lg'>
          <button
            type='button'
            aria-label='Scroll left'
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'p-1 rounded-full transition-colors duration-200',
              canScrollLeft
                ? 'text-foreground hover:bg-muted/60'
                : 'text-muted-foreground/30 cursor-not-allowed',
            )}
          >
            <ChevronLeft className='w-4 h-4' />
          </button>

          {/* Dot indicators */}
          <div className='flex items-center gap-1 px-1'>
            {images.map((_, i) => (
              <button
                key={i}
                type='button'
                aria-label={`Go to image ${i + 1}`}
                onClick={() => {
                  const el = trackRef.current;
                  const children = Array.from(
                    el?.children ?? [],
                  ) as HTMLElement[];
                  const itemW = children[0]?.offsetWidth ?? 280;
                  el?.scrollTo({ left: i * (itemW + 12), behavior: 'smooth' });
                }}
                className={cn(
                  'rounded-full transition-all duration-300',
                  i === activeIndex
                    ? 'w-4 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60',
                )}
              />
            ))}
          </div>

          <button
            type='button'
            aria-label='Scroll right'
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'p-1 rounded-full transition-colors duration-200',
              canScrollRight
                ? 'text-foreground hover:bg-muted/60'
                : 'text-muted-foreground/30 cursor-not-allowed',
            )}
          >
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label='Image preview'
          className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4'
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type='button'
            aria-label='Close preview'
            className='absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200'
            onClick={() => setLightboxOpen(false)}
          >
            <X className='w-5 h-5' />
          </button>

          <div
            className={cn(
              'relative max-h-[90vh] rounded-xl overflow-hidden shadow-2xl',
              isMobile ? 'w-[min(360px,90vw)]' : 'w-[min(900px,95vw)]',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt='Preview'
              className='w-full h-auto object-contain block max-h-[90vh]'
            />
          </div>
        </div>
      )}
    </div>
  );
}
