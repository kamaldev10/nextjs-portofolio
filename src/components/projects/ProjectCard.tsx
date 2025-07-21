"use client";

// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    // Wrapper utama:
    // Mobile: Tampilan card vertikal biasa dengan flex-col.
    // Desktop (sm): Kembali ke block, relative dengan tinggi tetap untuk efek hover.
    <div
      className="group flex flex-col w-full rounded-xl shadow-lg overflow-hidden
                 bg-white dark:bg-slate-800
                 sm:block sm:relative sm:h-64" // sm:h-48 atau sm:h-64 sesuai selera
    >
      {/* Wrapper Gambar */}
      {/* Mobile: Tinggi tetap, posisi normal di atas. */}
      {/* Desktop (sm): Posisi absolute untuk mengisi seluruh card. */}
      <div className="relative h-48 w-full sm:absolute sm:inset-0 sm:h-full">
        <Image
          src={thumbnailImage}
          alt={title}
          fill
          className="absolute inset-0 h-full w-full object-cover 
                     sm:transition-all sm:duration-700 sm:ease-in-out sm:group-hover:scale-110 sm:group-hover:blur-xs"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Wrapper Konten (Overlay di desktop) */}
      {/* Mobile: Tampilan blok biasa dengan padding. */}
      {/* Desktop (sm): Menjadi overlay absolut yang hanya muncul saat hover. */}
      <div
        className="p-6 
                   sm:absolute sm:inset-0 sm:flex sm:flex-col sm:items-center sm:justify-end sm:p-6 sm:text-center 
                   sm:bg-gradient-to-t sm:from-black/80 sm:via-black/50 sm:to-transparent
                   sm:opacity-0 sm:transition-opacity sm:duration-500 sm:ease-in-out sm:group-hover:opacity-100"
      >
        {/* Konten Teks yang beranimasi */}
        <div
          className="w-full text-slate-900 dark:text-slate-100
                     sm:text-white sm:transform sm:transition-transform sm:duration-500 sm:ease-in-out 
                     sm:translate-y-8 sm:group-hover:translate-y-0"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
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
