// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data"; // Import data proyek

// Halaman ini adalah Server Component secara default.
// Metadata sudah didefinisikan di app/projects/layout.tsx

export default function ProjectsListPage() {
  return (
    <section>
      {/* Grid untuk menampilkan ProjectCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
