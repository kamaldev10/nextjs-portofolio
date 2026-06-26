// components/sections/ProjectsSection.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import MotionCarousel from '../MotionCarousel';
import { projects } from '@/lib/data/projects-data';
import ProjectCard from '../projects/ProjectCard';

export default function ProjectsSection() {
  // mapping hanya 8 projects yang ditampilkan di halaman utama
  const featuredProjects = projects.slice(0, 8);
  return (
    <section
      id='projects'
      className='py-24 md:py-32 bg-card/30 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14'>
          <div>
            <p className={cn(typography.overline, 'mb-3 text-primary')}>Work</p>
            <h2 className={cn(typography.h1, 'text-foreground')}>
              Featured Projects
            </h2>
            <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
            <p className={cn(typography.body, 'mt-4 max-w-md')}>
              A selection of work — scalable, well-tested, and production-ready.
            </p>
          </div>
          <Link
            href='/projects'
            className={cn(
              typography.button,
              'inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 flex-shrink-0 group',
            )}
          >
            All projects
            <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className='w-full'>
        <MotionCarousel
          className='max-w-6xl mx-auto px-6'
          itemClassName='flex-shrink-0 w-72 md:w-80'
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnailImage={project.thumbnailImage}
              slug={project.slug}
            />
          ))}
        </MotionCarousel>
      </div>
    </section>
  );
}
