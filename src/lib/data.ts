// lib/data.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string[]; // Bisa lebih dari satu paragraf
  image: string; // Thumbnail utama
  images: string[]; // Gambar-gambar detail proyek
  tags: string[]; // Teknologi yang digunakan
  repoUrl?: string; // Link ke GitHub repo (opsional)
  liveUrl?: string; // Link ke live demo (opsional)
  role?: string; // Peran Anda dalam proyek
  year?: number; // Tahun proyek selesai
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "e-commerce-redesign",
    title: "E-commerce Redesign Modern",
    description:
      "Redesain modern dan responsif untuk toko fashion online, berfokus pada pengalaman pengguna dan tingkat konversi.",
    longDescription: [
      "Proyek ini melibatkan perombakan total UI/UX dari platform e-commerce yang sudah ada. Tujuan utamanya adalah untuk meningkatkan keterlibatan pengguna, menyederhanakan alur pembelian, dan memperbarui estetika visual agar sesuai dengan tren desain modern.",
      "Kami menerapkan pendekatan mobile-first, memastikan pengalaman belanja yang lancar di semua perangkat. Pengujian pengguna yang ekstensif dilakukan untuk mengidentifikasi titik-titik nyeri dan mengoptimalkan navigasi situs.",
    ],
    image: "/images/project-1-thumbnail.webp",
    images: [
      "/images/project-1-detail-1.webp",
      "/images/project-1-detail-2.webp",
    ], // Contoh gambar detail
    tags: ["Next.js", "Tailwind CSS", "Stripe API", "Figma", "UI/UX"],
    repoUrl: "https://github.com/yourusername/ecommerce-redesign-repo",
    liveUrl: "https://ecommerce-redesign.yourportfolio.com",
    role: "Full-stack Developer, UI/UX Designer",
    year: 2023,
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Aplikasi Manajemen Tugas Real-time",
    description:
      "Aplikasi web tangguh untuk mengelola tugas, dibangun dengan pembaruan real-time dan fitur kolaborasi.",
    longDescription: [
      "Aplikasi manajemen tugas ini dirancang untuk tim kecil, memungkinkan pengguna untuk membuat, menetapkan, dan melacak tugas secara efisien. Fitur utama meliputi pembaruan tugas real-time menggunakan WebSockets, notifikasi, dan antarmuka drag-and-drop untuk pengorganisasian tugas.",
      "Pengembangan backend menggunakan Node.js dan Express.js, dengan MongoDB sebagai database, memastikan skalabilitas dan performa. Frontend dibangun dengan React untuk pengalaman pengguna yang dinamis.",
    ],
    image: "/images/project-2-thumbnail.webp",
    images: [
      "/images/project-2-detail-1.webp",
      "/images/project-2-detail-2.webp",
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets",
      "REST API",
    ],
    repoUrl: "https://github.com/yourusername/task-app-repo",
    liveUrl: "https://task-app.yourportfolio.com",
    role: "Backend & Frontend Developer",
    year: 2024,
  },
  {
    id: "3",
    slug: "personal-blog-platform",
    title: "Platform Blog Pribadi",
    description:
      "Platform blog pribadi yang cepat dan ramah SEO untuk berbagi artikel dan pemikiran.",
    longDescription: [
      "Platform blog ini dibuat untuk menyediakan cara yang cepat dan efisien bagi penulis untuk mempublikasikan konten. Menggunakan Next.js untuk Server-Side Rendering dan Static Site Generation untuk performa dan SEO yang optimal.",
      "Konten ditulis dalam Markdown (atau MDX) dan diproses pada waktu build, menghasilkan blog yang sangat cepat dimuat. Fitur termasuk tag, kategori, pencarian, dan desain responsif.",
    ],
    image: "/images/project-3-thumbnail.webp",
    images: [
      "/images/project-3-detail-1.webp",
      "/images/project-3-detail-2.webp",
    ],
    tags: ["Next.js", "MDX", "Tailwind CSS", "SEO", "Markdown"],
    repoUrl: "https://github.com/yourusername/personal-blog-repo",
    liveUrl: "https://blog.yourportfolio.com",
    role: "Solo Developer",
    year: 2023,
  },
  // Tambahkan lebih banyak proyek sesuai kebutuhan Anda
];
