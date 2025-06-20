// app/projects/[slug]/page.tsx
import { projects, Project } from "@/lib/data"; // Impor data dan tipe proyek
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"; // Impor ikon untuk tautan eksternal

// --- Fungsi untuk menghasilkan metadata dinamis ---
// Metadata ini akan unik untuk setiap halaman detail proyek
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan | Portfolio",
      description: "Halaman proyek yang Anda cari tidak ada.",
    };
  }

  return {
    title: `${project.title} | Proyek Saya`,
    description: project.description,
    keywords: project.tags.join(", "),
    openGraph: {
      title: `${project.title} | Proyek Saya`,
      description: project.description,
      images: [project.image], // Gunakan thumbnail proyek sebagai og:image
    },
  };
}

// --- Fungsi untuk menghasilkan jalur statis (Static Site Generation - SSG) ---
export async function generateStaticParams() {
  // Ambil semua slug dari data proyek
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- Komponen Halaman Detail Proyek ---
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    // Handle case where project is not found (shouldn't happen with generateStaticParams unless invalid slug is accessed)
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 - Proyek Tidak Ditemukan
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Maaf, proyek yang Anda cari tidak ada.
        </p>
        <Link
          href="/projects"
          className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Kembali ke Daftar Proyek
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
      >
        &larr; Kembali ke Proyek
      </Link>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        {project.title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        {project.description}
      </p>

      {/* Gambar utama proyek */}
      <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority // Memuat gambar utama lebih awal
        />
      </div>

      {/* Detail Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Gambaran Umum Proyek
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            {project.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Detail
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {project.role && (
              <li>
                <span className="font-semibold">Peran:</span> {project.role}
              </li>
            )}
            {project.year && (
              <li>
                <span className="font-semibold">Tahun:</span> {project.year}
              </li>
            )}
            <li>
              <span className="font-semibold">Teknologi:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-800 dark:text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          <div className="mt-8 space-y-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
              >
                <ExternalLink className="h-5 w-5 mr-2" /> Lihat Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 shadow-md"
              >
                <Github className="h-5 w-5 mr-2" /> GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Galeri Gambar (Opsional) */}
      {project.images && project.images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Galeri Proyek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {project.images.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} - Gambar ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
