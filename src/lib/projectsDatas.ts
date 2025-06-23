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
    slug: "judi-guard",
    title: "Judi Guard",
    description:
      "aplikasi web berbasis AI yang dirancang untuk mendeteksi dan menganalisis komentar yang mengandung unsur judi online pada platform seperti YouTube.",
    longDescription: [
      "Judi Guard adalah aplikasi web berbasis AI yang dirancang untuk mendeteksi dan menganalisis komentar yang mengandung unsur judi online pada platform seperti YouTube. Dengan teknologi cerdas, Judi Guard memberikan solusi cepat, akurat, dan efisien untuk membantu kreator konten dan manajer komunitas menjaga ruang interaksi mereka tetap bersih dan aman dari konten berbahaya.",
      "Dengan fitur utama yaitu analisis komentar berbasis AI, integrasi Youtube API, Otentikasi pengguna yang aman, dashboard yang interaktif dan penangannan eror yang tangguh. Dengan fitur utama yang disajikan, menjadikan User Experience yang interaktif dan menarik",
      "Aplikasi ini merupakan perwujudan implementasi dari keresahan kami dari Capstone Team CC25-CF219 pada program Coding Camp 2025 Powered By DBS Foundation yang diselenggarakan oleh Dicoding Indonesia. Tim kami beranggotakan saya, Ferdian, Salwa, Rafinanda, Solihun dan Rina",
    ],
    image: "/images/projects/judi-guard/judiguard-thumbnail.webp",
    images: [
      "/images/projects/judi-guard/judiguard-detail-1.webp",
      "/images/projects/judi-guard/judiguard-detail-2.webp",
      "/images/projects/judi-guard/judiguard-detail-3.webp",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Youtube Data API v3",
      "Figma",
      "Python",
      "Flask",
      "Tensor Flow",
      "Hugging Face Transformers",
    ],
    repoUrl: "https://github.com/kamaldev10/judi-guard-app",
    liveUrl: "https://judiguard.id",
    role: "Full-stack Developer",
    year: 2025,
  },
  {
    id: "2",
    slug: "to talky-app",
    title: "To Talky App",
    description:
      " aplikasi berbasis web yang dikembangkan menggunakan React + Vite dengan pendekatan mobile-first. Aplikasi ini dirancang untuk membantu anak dengan berkebutuhan khusus untuk belajar melalui suara dan gambar.",
    longDescription: [
      "Aplikasi manajemen tugas ini dirancang untuk tim kecil, memungkinkan pengguna untuk membuat, menetapkan, dan melacak tugas secara efisien. Fitur utama meliputi pembaruan tugas real-time menggunakan WebSockets, notifikasi, dan antarmuka drag-and-drop untuk pengorganisasian tugas.",
      "Pengembangan backend menggunakan Node.js dan Express.js, dengan MongoDB sebagai database, memastikan skalabilitas dan performa. Frontend dibangun dengan React untuk pengalaman pengguna yang dinamis.",
    ],
    image: "/images/to-talky/to-talky-thumbnail.webp",
    images: [
      "/images/to-talky/to-talky-detail-1.webp",
      "/images/to-talky/to-talky-detail-2.webp",
    ],
    tags: ["React", "Vite", "Tailwind Css"],
    repoUrl: "https://github.com/kamaldev10/Talky-app.git",
    liveUrl: "https://totalky.vercel.app",
    role: "Frontend Developer",
    year: 2025,
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
