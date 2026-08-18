// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { projects } from '@/lib/data/projects-data';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: Pick<PageProps, 'params'>,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.thumbnailImage, alt: project.title }],
    },
  };
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
