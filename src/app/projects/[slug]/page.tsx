// app/projects/[slug]/page.tsx
import { projects } from "@/lib/projectsDatas"; // Impor data dan tipe proyek
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"; // Impor ikon untuk tautan eksternal
import { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa";

// =======================================================================
// 1. TIPE PROPS UNTUK generateMetadata
// Benar: `params` adalah objek biasa (sinkron).
// =======================================================================
type GenerateMetadataProps = {
  params: { slug: string };
};

/**
 * Fungsi ini menghasilkan metadata dinamis untuk halaman (SEO).
 */
export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found", // Menggunakan judul dari kode asli Anda
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// =======================================================================
// 2. TIPE PROPS UNTUK KOMPONEN HALAMAN (PAGE)
// Benar: `params` adalah sebuah Promise.
// =======================================================================
type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
  // searchParams juga Promise jika Anda perlu menggunakannya
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * Komponen utama untuk menampilkan halaman detail proyek.
 * Dibuat `async` untuk menangani props Promise.
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  // --- PERBAIKAN LOGIKA ---
  // Menggunakan `await` untuk mendapatkan `slug` dari Promise `params`.
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  // --- AKHIR PERBAIKAN LOGIKA ---

  // Penanganan jika proyek tidak ditemukan.
  // JSX ini diambil dari kode asli Anda dan tidak diubah.
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Project Not Found</h1>
        <p className="text-lg mb-8">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects" className="text-blue-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Project Not Found</h1>
        <p className="text-lg mb-8">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects" className="text-blue-500 hover:underline">
          Back to Projects
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
        <FaArrowLeft className="me-2 sm:me-3" /> Kembali ke Proyek
      </Link>
      <div className="flex">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {project.title}
        </h1>
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-justify">
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
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-justify">
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
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-lg dark:bg-blue-800 dark:text-blue-100"
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

      {/* Galeri Gambar  */}
      {project.images && project.images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Galeri Proyek
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {project.images.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full h-28 sm:h-52 rounded-lg overflow-hidden shadow-md"
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
