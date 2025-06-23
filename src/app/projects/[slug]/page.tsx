// 📁 app/projects/[slug]/page.tsx
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { projects } from "@/lib/data/projectsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// generateMetadata tetap di halaman ini karena digunakan untuk SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

// Komponen utama dipecah agar bersih dan modular
export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
