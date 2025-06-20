// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Penting: Tambahkan import React

interface ProjectCardProps {
  title: string;
  description: string;
  image: string; // path ke gambar thumbnail
  slug: string; // untuk link detail proyek
  tags: string[]; // teknologi yang digunakan
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  slug,
  tags,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full dark:bg-indigo-700 dark:text-indigo-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${slug}`}
          className="mt-auto inline-block px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 text-center text-sm"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
