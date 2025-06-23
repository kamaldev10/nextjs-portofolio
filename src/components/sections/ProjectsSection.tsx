// components/sections/ProjectsSection.tsx
import Link from "next/link"; // Untuk tombol "View All Projects"
import React from "react"; // Penting: Tambahkan import React
import { FaArrowRight } from "react-icons/fa";
import MotionCarousel from "../ui/MotionCarousel";
import { projects } from "@/lib/data/projectsData";
import ProjectCard from "../projects/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16  overflow-hidden">
      <div className=" mx-auto px-10">
        {/* Header Section tidak berubah */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              A glimpse into my verified professional qualifications.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group flex-shrink-0"
          >
            View all projects
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Gunakan MotionCarousel di sini */}
      <div className="w-full">
        <MotionCarousel
          className="container mx-auto px-4"
          itemClassName="flex-shrink-0 w-80 md:w-96"
        >
          {projects.map((project) => (
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
};

export default ProjectsSection;
