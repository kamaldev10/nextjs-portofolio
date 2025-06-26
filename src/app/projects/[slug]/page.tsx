import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { projects } from "@/lib/data/projectsData";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 🧠 SEO metadata generator (asynchronous, modern)
export async function generateMetadata(
  props: Pick<PageProps, "params">
): Promise<Metadata> {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.thumbnailImage,
          alt: project.title,
        },
      ],
    },
  };
}

// 🧩 Halaman detail project
export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
