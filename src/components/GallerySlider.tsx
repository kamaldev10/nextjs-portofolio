'use client';

// components/ui/GallerySlider.tsx
import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GallerySliderProps {
  images: string[];
  type: 'mobile' | 'desktop';
}

export default function GallerySlider({ images, type }: GallerySliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  // ── Scroll state sync ─────────────────────────────────────────────────
  const syncScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncScroll();
    el.addEventListener('scroll', syncScroll, { passive: true });
    window.addEventListener('resize', syncScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', syncScroll);
      window.removeEventListener('resize', syncScroll);
    };
  }, [syncScroll, images]);

  // ── Scroll controls ───────────────────────────────────────────────────
  const SCROLL_PX = type === 'mobile' ? 220 : 360;
  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_PX, behavior: 'smooth' });
  };

  // ── Keyboard close lightbox ───────────────────────────────────────────
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  if (!images?.length) return null;

  // ── Image card dimensions ─────────────────────────────────────────────
  const cardClass =
    type === 'mobile'
      ? 'w-40 sm:w-48 md:w-52 aspect-[9/16]'
      : 'w-64 sm:w-80 md:w-96 aspect-[16/9]';

  return (
    <>
      {/* ── Slider ────────────────────────────────────────────────────── */}
      <div className='relative select-none'>
        {/* Fade edges */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10',
            'bg-gradient-to-r from-background to-transparent',
            'transition-opacity duration-200',
            !canScrollLeft && 'opacity-0',
          )}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10',
            'bg-gradient-to-l from-background to-transparent',
            'transition-opacity duration-200',
            !canScrollRight && 'opacity-0',
          )}
        />

        {/* Scroll track */}
        <div
          ref={trackRef}
          className={cn(
            'flex gap-3 overflow-x-auto scroll-smooth',
            'pb-3', // room for scrollbar on Windows
            // Hide scrollbar visually but keep functionality
            'scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
            // Snap
            'snap-x snap-mandatory',
          )}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={cn(
                'relative flex-shrink-0 snap-start rounded-xl overflow-hidden cursor-zoom-in',
                'ring-1 ring-border/50 hover:ring-primary/50 transition-all duration-300',
                'group',
                cardClass,
              )}
              onClick={() => setLightbox(src)}
              role='button'
              tabIndex={0}
              aria-label={`View image ${i + 1}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                sizes={
                  type === 'mobile'
                    ? '208px'
                    : '(max-width: 768px) 320px, 384px'
                }
              />

              {/* Zoom hint on hover */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center'>
                <ZoomIn className='w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg' />
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          aria-label='Scroll left'
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2 z-20',
            '-translate-x-1/2',
            'p-2 rounded-full',
            'bg-card border border-border text-foreground shadow-lg',
            'hover:bg-muted hover:border-primary/50 hover:text-primary',
            'disabled:opacity-0 disabled:pointer-events-none',
            'transition-all duration-200',
          )}
        >
          <ChevronLeft className='w-4 h-4' />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          aria-label='Scroll right'
          className={cn(
            'absolute right-0 top-1/2 -translate-y-1/2 z-20',
            'translate-x-1/2',
            'p-2 rounded-full',
            'bg-card border border-border text-foreground shadow-lg',
            'hover:bg-muted hover:border-primary/50 hover:text-primary',
            'disabled:opacity-0 disabled:pointer-events-none',
            'transition-all duration-200',
          )}
        >
          <ChevronRight className='w-4 h-4' />
        </button>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4'
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label='Close lightbox'
            className='absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200'
          >
            <X className='w-5 h-5' />
          </button>

          {/* Image wrapper — click stops propagation so only backdrop closes */}
          <div
            className={cn(
              'relative max-h-[90vh] max-w-[90vw]',
              type === 'mobile' ? 'w-auto h-[85vh]' : 'w-full h-auto',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt='Enlarged view'
              className={cn(
                'rounded-xl shadow-2xl object-contain',
                type === 'mobile'
                  ? 'h-full w-auto'
                  : 'w-full h-auto max-h-[85vh]',
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}
