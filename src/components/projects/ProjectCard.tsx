"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <Link
      href={`/projects/${slug}`}
      className="group block w-full rounded-xl shadow-lg overflow-hidden
                 bg-white dark:bg-slate-800
                 transition-transform duration-300
                 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent
                 sm:relative sm:h-64 active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative h-48 w-full sm:absolute sm:inset-0 sm:h-full">
        <Image
          src={thumbnailImage}
          alt={title}
          fill
          className="absolute inset-0 h-full w-full object-cover 
                     sm:transition-all sm:duration-700 sm:ease-in-out 
                     sm:group-hover:scale-110 sm:group-hover:blur-xs"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div
        className="p-6 flex flex-col justify-end
                   
                   // Mobile: langsung tampil
                   bg-white dark:bg-slate-800
                   
                   // Desktop: overlay hover
                   sm:absolute sm:inset-0 sm:flex sm:flex-col sm:items-center sm:justify-end sm:p-6 sm:text-center 
                   sm:bg-gradient-to-t sm:from-black/80 sm:via-black/50 sm:to-transparent
                   sm:opacity-0 sm:transition-opacity sm:duration-500 sm:ease-in-out sm:group-hover:opacity-100"
      >
        <div
          className="w-full text-slate-900 dark:text-slate-100
                     
                     sm:text-white sm:transform sm:transition-transform sm:duration-500 sm:ease-in-out 
                     sm:translate-y-8 sm:group-hover:translate-y-0"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-4 text-sm opacity-90 line-clamp-2">{description}</p>

          {/* Button jadi visual saja (bukan link lagi) */}
          <div
            className="inline-flex items-center gap-2 px-6 py-2 
                       text-white shadow-md
                       transition-all duration-300"
          >
            Lihat Selengkapnya ...
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
