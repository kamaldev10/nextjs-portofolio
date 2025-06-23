// 📁 app/projects/[slug]/page.tsx
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { projects } from "@/lib/data/projectsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// // SEO Metadata
// export function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Metadata {
//   const project = projects.find((p) => p.slug === params.slug);
//   if (!project) {
//     return { title: "Project Not Found" };
//   }
//   return {
//     title: project.title,
//     description: project.description,
//   };
// }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
