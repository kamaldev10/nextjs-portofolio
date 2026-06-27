'use client';

// components/projects/ProjectDetailPage.tsx
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Briefcase,
  Tag,
} from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GallerySlider from '@/components/GallerySlider';
import type { Project } from '@/lib/data/projects-data';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';

const hasImages = (arr?: string[]) => arr && arr.length > 0 && arr[0] !== '';

export default function ProjectDetailPage({ project }: { project: Project }) {
  const showGallery =
    hasImages(project.mobileImages) || hasImages(project.desktopImages);

  return (
    <div className='min-h-screen pt-10 pb-10'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* ── Back link ──────────────────────────────────────────── */}
        <Link
          href='/projects'
          className={cn(
            typography.button,
            'inline-flex items-center gap-2 mb-10',
            'text-muted-foreground hover:text-foreground',
            'transition-colors duration-200 group',
          )}
        >
          <ArrowLeft className='w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1' />
          All Projects
        </Link>

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start'>
          {/* ── Main column ──────────────────────────────────────── */}
          <div className='min-w-0'>
            {/* Title + short description */}
            <div className='mb-8 pb-8 border-b border-border'>
              <p className={cn(typography.overline, 'mb-3 text-primary')}>
                {project.year ?? 'Project'}
              </p>
              <h1 className={cn(typography.h1, 'text-foreground mb-4')}>
                {project.title}
              </h1>
              <p className={cn(typography.bodyLg, 'text-muted-foreground')}>
                {project.description}
              </p>
            </div>

            {/* Gallery */}
            {showGallery && (
              <div className='mb-10'>
                <Tabs
                  defaultValue={
                    hasImages(project.desktopImages) ? 'desktop' : 'mobile'
                  }
                >
                  <TabsList className='mb-5 bg-muted/60 border border-border'>
                    {hasImages(project.desktopImages) && (
                      <TabsTrigger value='desktop' className='gap-1.5'>
                        <span className='text-base leading-none'>🖥️</span>
                        Desktop
                      </TabsTrigger>
                    )}
                    {hasImages(project.mobileImages) && (
                      <TabsTrigger value='mobile' className='gap-1.5'>
                        <span className='text-base leading-none'>📱</span>
                        Mobile
                      </TabsTrigger>
                    )}
                  </TabsList>

                  {hasImages(project.desktopImages) && (
                    <TabsContent value='desktop'>
                      <GallerySlider
                        images={project.desktopImages}
                        type='desktop'
                      />
                    </TabsContent>
                  )}
                  {hasImages(project.mobileImages) && (
                    <TabsContent value='mobile'>
                      <GallerySlider
                        images={project.mobileImages}
                        type='mobile'
                      />
                    </TabsContent>
                  )}
                </Tabs>
              </div>
            )}

            {/* Long description */}
            <div>
              <h2 className={cn(typography.h2, 'text-foreground mb-6')}>
                About this project
              </h2>
              <div className='space-y-5'>
                {project.longDescription.map((para, i) => (
                  <p key={i} className={cn(typography.body)}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sticky sidebar ───────────────────────────────────── */}
          <aside className='lg:sticky lg:top-28 self-start space-y-4'>
            {/* Details card */}
            <div className='rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-5'>
              <h3 className={cn(typography.h4, 'text-foreground')}>
                Project Details
              </h3>

              <div className='h-px bg-border' />

              {/* Role */}
              {project.role && (
                <div className='flex items-start gap-3'>
                  <Briefcase className='w-4 h-4 mt-0.5 text-primary flex-shrink-0' />
                  <div>
                    <p className={cn(typography.caption, 'mb-0.5')}>Role</p>
                    <p className='text-sm text-foreground font-medium'>
                      {project.role}
                    </p>
                  </div>
                </div>
              )}

              {/* Year */}
              {project.year && (
                <div className='flex items-start gap-3'>
                  <Calendar className='w-4 h-4 mt-0.5 text-primary flex-shrink-0' />
                  <div>
                    <p className={cn(typography.caption, 'mb-0.5')}>Year</p>
                    <p className='text-sm text-foreground font-medium'>
                      {project.year}
                    </p>
                  </div>
                </div>
              )}

              {/* Tech tags */}
              {project.tags?.length > 0 && (
                <div className='flex items-start gap-3'>
                  <Tag className='w-4 h-4 mt-0.5 text-primary flex-shrink-0' />
                  <div className='min-w-0'>
                    <p className={cn(typography.caption, 'mb-2')}>Tech Stack</p>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={cn(
                            typography.badge,
                            'px-2.5 py-1 rounded-md',
                            'bg-primary/10 text-primary border border-primary/20',
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className='space-y-2.5'>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    typography.button,
                    'flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md',
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                    'transition-colors duration-200',
                  )}
                >
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    typography.button,
                    'flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md',
                    'border border-border text-foreground',
                    'hover:bg-muted/50 hover:border-primary/40',
                    'transition-all duration-200',
                  )}
                >
                  <Github className='w-4 h-4' />
                  GitHub Repo
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
