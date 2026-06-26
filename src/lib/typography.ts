/**
 * typography.ts
 * Reusable type scale for portfolio.
 * Usage: import { typography } from '@/lib/typography'
 *        <h1 className={typography.h1}>...</h1>
 *
 * Composable with cn():
 *        <p className={cn(typography.body, 'mt-4')}>...</p>
 */

export const typography = {
  // ── Display ─────────────────────────────────────────────────────────────
  hero: 'font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none',

  display:
    'font-mono text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight',

  // ── Headings ─────────────────────────────────────────────────────────────
  h1: 'text-4xl sm:text-5xl font-bold tracking-tight leading-tight',

  h2: 'text-2xl sm:text-3xl font-bold tracking-tight',

  h3: 'text-xl font-semibold tracking-tight',

  h4: 'text-base font-semibold',

  // ── Body ─────────────────────────────────────────────────────────────────
  body: 'text-base leading-7 text-muted-foreground',

  bodyLg: 'text-lg leading-8 text-muted-foreground',

  bodySm: 'text-sm leading-6 text-muted-foreground',

  // ── Utility ─────────────────────────────────────────────────────────────
  /** Eyebrow / overline label above a heading */
  overline:
    'text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground',

  /** Caption — timestamps, metadata, footnotes */
  caption: 'text-xs text-muted-foreground',

  /** Lead — hero sub-copy, larger intro sentences */
  lead: 'text-base sm:text-xl leading-8 text-muted-foreground',

  // ── Interactive ──────────────────────────────────────────────────────────
  nav: 'text-sm font-medium tracking-wide',

  button: 'text-sm font-semibold tracking-wide',

  badge: 'text-xs font-semibold tracking-wide',

  // ── Code ────────────────────────────────────────────────────────────────
  code: 'font-mono text-sm',
} as const;

export type TypographyKey = keyof typeof typography;
