"use client";

// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Menambahkan ikon untuk tombol

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnailImage: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnailImage,
  slug,
}) => {
  return (
    <div className="group relative block h-48 w-full rounded-xl shadow-lg overflow-hidden">
      <Image
        src={thumbnailImage}
        alt={title}
        fill
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-xs"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white 
                   bg-gradient-to-t from-black/80 via-black/50 to-transparent
                   opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      >
        <div className="transform transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0 w-full text-slate-100">
          <h3 className="text-2xl font-bold mb-2 ">{title}</h3>
          <p className="mb-4 text-sm opacity-90 line-clamp-2">{description}</p>
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 px-6 py-2 bg-accent dark:bg-indigo-600 text-white font-semibold rounded-full shadow-md
                       hover:bg-accent-foreground hover:dark:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            Lihat Detail <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
