import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projectsData";

export default function ProjectsListPage() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
