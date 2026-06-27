'use client';

// components/projects/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnailImage: string;
  slug: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnailImage,
  slug,
  tags,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`View project: ${title}`}
      className={cn(
        'group relative block w-full rounded-xl overflow-hidden',
        // Height: fixed on desktop for consistent grid, natural on mobile
        'h-auto md:h-72',
        // Border — indigo left-rule that grows on hover
        'border border-border hover:border-primary/40',
        'transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        'bg-card',
      )}
    >
      {/* ── Thumbnail ─────────────────────────────────────────────── */}
      <div className='relative w-full h-48 md:absolute md:inset-0 md:h-full overflow-hidden'>
        <Image
          src={thumbnailImage}
          alt={title}
          fill
          className={cn(
            'object-cover select-none',
            'md:transition-all md:duration-500 md:ease-out',
            'md:group-hover:scale-105 md:group-hover:blur-[2px] md:group-hover:brightness-75',
          )}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          draggable={false}
        />

        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent'
        />
      </div>

      {/* ── Indigo accent line (desktop hover) ────────────────────── */}
      <div
        aria-hidden
        className={cn(
          'hidden md:block absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl',
          'bg-primary',
          'scale-y-0 group-hover:scale-y-100',
          'transition-transform duration-300 ease-out origin-bottom',
        )}
      />

      {/* ── Info panel ────────────────────────────────────────────── */}
      {/*
        Mobile  → always visible below thumbnail (natural flow)
        Desktop → slide-up overlay from bottom on hover
      */}
      <div
        className={cn(
          'relative px-4 py-4 bg-card',
          'md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:px-5 md:pb-5 md:pt-10',
          'md:bg-gradient-to-t md:from-black/90 md:via-black/60 md:to-transparent',
          'md:translate-y-3 md:opacity-0',
          'md:group-hover:translate-y-0 md:group-hover:opacity-100',
          'md:transition-all md:duration-350 md:ease-out',
        )}
      >
        <div
          className={cn(
            'md:transform md:translate-y-2 md:group-hover:translate-y-0 md:transition-transform md:duration-350 md:ease-out md:delay-75',
          )}
        >
          <h3
            className={cn(typography.h3, 'text-foreground md:text-white mb-1')}
          >
            {title}
          </h3>

          <p
            className={cn(
              typography.bodySm,
              'line-clamp-2 mb-3 md:text-white/80',
            )}
          >
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 mb-3'>
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    typography.badge,
                    'px-2 py-0.5 rounded-md',
                    'bg-muted text-muted-foreground md:bg-white/10 md:text-white/90 md:border md:border-white/20',
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <span
            className={cn(
              typography.button,
              'inline-flex items-center gap-1.5',
              'text-primary md:text-white/90 md:group-hover:text-white',
              'transition-colors duration-200',
            )}
          >
            View project
            <ArrowUpRight className='w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
