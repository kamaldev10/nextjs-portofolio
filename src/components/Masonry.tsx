'use client';

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';

// ── SSR-safe useLayoutEffect ───────────────────────────────────────────────
// useLayoutEffect throws a warning on the server; use useEffect there instead
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// ── Hooks ──────────────────────────────────────────────────────────────────

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number,
): number => {
  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    const get = () =>
      values[queries.findIndex((q) => window.matchMedia(q).matches)] ??
      defaultValue;

    setValue(get());

    // Listen for breakpoint changes
    const handlers = queries.map((q) => {
      const mql = window.matchMedia(q);
      const handler = () => setValue(get());
      mql.addEventListener('change', handler);
      return { mql, handler };
    });

    return () => {
      handlers.forEach(({ mql, handler }) =>
        mql.removeEventListener('change', handler),
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

// ── Types ──────────────────────────────────────────────────────────────────

export interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  /** Intrinsic image width in px — used to compute aspect ratio */
  intrinsicWidth: number;
  /** Intrinsic image height in px — used to compute aspect ratio */
  intrinsicHeight: number;
  caption?: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  gap?: number;
}

// ── Component ──────────────────────────────────────────────────────────────

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  gap = 12,
}) => {
  const columns = useMedia(
    [
      '(min-width:1280px)',
      '(min-width:1024px)',
      '(min-width:768px)',
      '(min-width:480px)',
    ],
    [4, 3, 3, 2],
    2,
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // ── Grid calculation ───────────────────────────────────────────────────
  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];

    const totalGaps = (columns - 1) * gap;
    const columnWidth = Math.floor((width - totalGaps) / columns);
    const colHeights = new Array<number>(columns).fill(0);

    return items.map((child) => {
      const aspectRatio = child.intrinsicWidth / child.intrinsicHeight;
      const itemHeight = Math.round(columnWidth / aspectRatio);

      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const y = colHeights[col];

      colHeights[col] += itemHeight + gap;

      return { ...child, x, y, w: columnWidth, h: itemHeight };
    });
  }, [columns, items, width, gap]);

  const containerHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map((item) => item.y + item.h));
  }, [grid]);

  // ── Entrance animation ─────────────────────────────────────────────────
  const getInitialPosition = (item: GridItem) => {
    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'] as const;
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }
    switch (direction) {
      case 'top':
        return { x: item.x, y: -300 };
      case 'bottom':
        return { x: item.x, y: (containerHeight || 400) + 300 };
      case 'left':
        return { x: -300, y: item.y };
      case 'right':
        return { x: (width || 600) + 300, y: item.y };
      case 'center':
        return { x: (width - item.w) / 2, y: (containerHeight - item.h) / 2 };
      default:
        return { x: item.x, y: item.y + 80 };
    }
  };

  const hasMounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (!imagesReady || !grid.length) return;

    grid.forEach((item, index) => {
      const selector = `[data-masonry-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(8px)' }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.75,
            ease: 'power3.out',
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, { ...animProps, duration, ease, overwrite: 'auto' });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady]);

  // ── Hover handlers ─────────────────────────────────────────────────────
  const handleMouseEnter = (id: string, el: HTMLElement) => {
    if (scaleOnHover)
      gsap.to(`[data-masonry-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out',
      });
    if (colorShiftOnHover) {
      const overlay = el.querySelector('.color-overlay') as HTMLElement | null;
      if (overlay) gsap.to(overlay, { opacity: 0.35, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, el: HTMLElement) => {
    if (scaleOnHover)
      gsap.to(`[data-masonry-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    if (colorShiftOnHover) {
      const overlay = el.querySelector('.color-overlay') as HTMLElement | null;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className='relative w-full'
      style={{
        height: containerHeight || 'auto',
        minHeight: containerHeight || 200,
      }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-masonry-key={item.id}
          className='absolute overflow-hidden rounded-xl cursor-pointer'
          style={{
            willChange: 'transform, width, height, opacity',
            left: 0,
            top: 0,
          }}
          onClick={() =>
            item.url
              ? window.open(item.url, '_blank', 'noopener,noreferrer')
              : undefined
          }
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <img
            src={item.img}
            alt={item.caption ?? `Gallery item ${item.id}`}
            className='w-full h-full object-cover block select-none'
            draggable={false}
          />
          {item.caption && (
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3 pointer-events-none'>
              <p className='text-white text-xs font-medium truncate'>
                {item.caption}
              </p>
            </div>
          )}
          {colorShiftOnHover && (
            <div className='color-overlay absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-sky-500/40 opacity-0 pointer-events-none' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
