// components/sections/ProjectsSection.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data"; // Import data proyek
import Link from "next/link"; // Untuk tombol "View All Projects"
import React from "react"; // Penting: Tambahkan import React

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          Proyek Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
        <div className="mt-12">
          <Link
            href="/projects"
            className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Lihat Semua Proyek
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
