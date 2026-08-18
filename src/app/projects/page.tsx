import type { Metadata } from 'next';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/data/projects-data';

export const metadata: Metadata = {
  title: 'All Projects | Ali Musthafa Kamal',
  description:
    'A collection of my work — ranging from production apps to experimental builds.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsListPage() {
  return (
    <section className='container mx-auto max-w-7xl px-4 py-12 md:py-16'>
      <header className='text-center mb-8 md:mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 md:mb-4'>
          All of My Projects
        </h1>
        <p className='text-base md:text-xl text-gray-700 dark:text-gray-300'>
          A collection of my work — ranging from production apps to experimental
          builds.
        </p>
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            thumbnailImage={project.thumbnailImage}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}
