// 📁 app/projects/[slug]/page.tsx
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { projects } from "@/lib/data/projectsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectPageParams = {
  params: { slug: string };
};

// SEO Metadata
export async function generateMetadata({
  params,
}: ProjectPageParams): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
