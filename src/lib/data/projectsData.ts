// lib/data.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string[]; // Bisa lebih dari satu paragraf
  thumbnailImage: string;
  mobileImage?: string;
  desktopImage?: string;
  mobileImages: string[];
  desktopImages: string[];
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
    thumbnailImage: "/images/projects/judi-guard/judiguard-thumbnail.webp",
    mobileImage: "/images/projects/judi-guard/mobile-view/2.webp",
    desktopImage: "/images/projects/judi-guard/desktop-view/4.webp",
    mobileImages: [
      "/images/projects/judi-guard/mobile-view/1.webp",
      "/images/projects/judi-guard/mobile-view/2.webp",
      "/images/projects/judi-guard/mobile-view/3.webp",
      "/images/projects/judi-guard/mobile-view/4.webp",
      "/images/projects/judi-guard/mobile-view/5.webp",
      "/images/projects/judi-guard/mobile-view/6.webp",
      "/images/projects/judi-guard/mobile-view/7.webp",
      "/images/projects/judi-guard/mobile-view/8.webp",
    ],
    desktopImages: [
      "/images/projects/judi-guard/desktop-view/1.webp",
      "/images/projects/judi-guard/desktop-view/2.webp",
      "/images/projects/judi-guard/desktop-view/3.webp",
      "/images/projects/judi-guard/desktop-view/4.webp",
      "/images/projects/judi-guard/desktop-view/5.webp",
      "/images/projects/judi-guard/desktop-view/6.webp",
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
    slug: "to-talky-app",
    title: "To Talky App",
    description:
      " aplikasi berbasis web yang dikembangkan menggunakan React + Vite dengan pendekatan mobile-first. Aplikasi ini dirancang untuk membantu anak dengan berkebutuhan khusus untuk belajar melalui suara dan gambar.",
    longDescription: [
      "Aplikasi manajemen tugas ini dirancang untuk tim kecil, memungkinkan pengguna untuk membuat, menetapkan, dan melacak tugas secara efisien. Fitur utama meliputi pembaruan tugas real-time menggunakan WebSockets, notifikasi, dan antarmuka drag-and-drop untuk pengorganisasian tugas.",
      "Pengembangan backend menggunakan Node.js dan Express.js, dengan MongoDB sebagai database, memastikan skalabilitas dan performa. Frontend dibangun dengan React untuk pengalaman pengguna yang dinamis.",
    ],
    thumbnailImage: "/images/projects/to-talky/desktop-view/1.webp",
    mobileImage: "/images/projects/to-talky/mobile-view/3.webp",
    desktopImage: "/images/projects/to-talky/desktop-view/1.webp",
    mobileImages: [
      "/images/projects/to-talky/mobile-view/1.webp",
      "/images/projects/to-talky/mobile-view/2.webp",
      "/images/projects/to-talky/mobile-view/3.webp",
      "/images/projects/to-talky/mobile-view/4.webp",
      "/images/projects/to-talky/mobile-view/5.webp",
      "/images/projects/to-talky/mobile-view/6.webp",
      "/images/projects/to-talky/mobile-view/7.webp",
      "/images/projects/to-talky/mobile-view/8.webp",
      "/images/projects/to-talky/mobile-view/9.webp",
      "/images/projects/to-talky/mobile-view/10.webp",
    ],
    desktopImages: [
      "/images/projects/to-talky/desktop-view/1.webp",
      "/images/projects/to-talky/desktop-view/2.webp",
      "/images/projects/to-talky/desktop-view/3.webp",
    ],
    tags: ["React", "Vite", "Tailwind Css", "Mobile-first"],
    repoUrl: "https://github.com/kamaldev10/Talky-app.git",
    liveUrl: "https://totalky.vercel.app",
    role: "Frontend Developer",
    year: 2025,
  },
  {
    id: "3",
    slug: "biteback",
    title: "Biteback",
    description:
      "Biteback adalah aplikasi inovatif yang menghubungkan restoran, hotel, dan tempat makan lainnya dengan konsumen untuk menjual makanan berlebih yang masih layak konsumsi dengan harga yang lebih terjangkau.",
    longDescription: [
      "Aplikasi ini dirancang untuk mengurangi limbah makanan, memberikan kesempatan kepada konsumen untuk menikmati makanan berkualitas tinggi, sekaligus mendukung keberlanjutan lingkungan.",
      "Kami hanya bekerja sama dengan mitra yang telah melalui proses seleksi ketat dan memiliki standar kualitas tinggi. Kualitas makanan yang dijual melalui Biteback sepenuhnya menjadi tanggung jawab mitra kami, sehingga konsumen dapat merasa aman dan nyaman saat membeli. Melalui Biteback, pelanggan bisa mendapatkan makanan mewah dari restoran dan hotel bintang lima dengan harga yang jauh lebih murah, menciptakan pengalaman kuliner eksklusif yang dapat diakses oleh lebih banyak orang.",
      `Dengan tagline "Save World, Save Money, and Safe Food" Biteback memberikan solusi bagi masalah limbah makanan, menawarkan nilai lebih bagi restoran dan hotel, serta memberikan peluang investasi di sektor teknologi berkelanjutan yang menjanjikan.`,
    ],
    thumbnailImage: "/images/projects/biteback/desktop-view/2.webp",
    mobileImage: "",
    desktopImage: "/images/projects/biteback/desktop-view/2.webp",
    mobileImages: [""],
    desktopImages: [
      "/images/projects/biteback/desktop-view/1.webp",
      "/images/projects/biteback/desktop-view/2.webp",
      "/images/projects/biteback/desktop-view/3.webp",
      "/images/projects/biteback/desktop-view/4.webp",
      "/images/projects/biteback/desktop-view/5.webp",
      "/images/projects/biteback/desktop-view/6.webp",
    ],

    tags: ["React", "Vite", "Tailwind CSS", "SEO"],
    repoUrl: "https://github.com/kamaldev10/biteback-frontend",
    liveUrl: "https://biteback-frontend.vercel.app",
    role: "Front End Developer",
    year: 2024,
  },
  {
    id: "4",
    slug: "binar-belajar",
    title: "MOOC - Binar Belajar",
    description:
      "product MOOC (Massive Open Online Course) bernama Binar Belajar. MOOC adalah platform yang menyediakan konten pembelajaran online berupa video.",
    longDescription: [
      "Platform ini akan menyediakan konten pembelajaran yang dapat diakses secara gratis atau berlangganan. Flow/alur platform telah ditentukan, namun masing-masing kelompok dibebaskan untuk membuat flow sendiri sesuai kesepakatan kelompok. Terdapat dua peran User yaitu berperan sebagai admin dan login sebagai user. Admin dapat menentukan course apa saja yang akan disediakan.",
      "User dapat mengakses video pembelajaran setelah melakukan pembayaran. Yang berangkat dari permasalahan para pelajar yang susah mencari tutor dan para guru atau pengajar yang kesulitan mencari siswa untuk dibimbing. Pengembangan Binar Belajar dilakukan dengan metode Scrum dan dilakukan dengan kolaborasi dengan tim backend Java dari tahap awal riset hingga product siap dikembangkan.",
    ],
    thumbnailImage: "/images/projects/binar-belajar/desktop-view/1.webp",
    mobileImage: "",
    desktopImage: "/images/projects/binar-belajar/desktop-view/1.webp",
    mobileImages: [""],
    desktopImages: [
      "/images/projects/binar-belajar/desktop-view/1.webp",
      "/images/projects/binar-belajar/desktop-view/2.webp",
      "/images/projects/binar-belajar/desktop-view/3.webp",
      "/images/projects/binar-belajar/desktop-view/4.webp",
      "/images/projects/binar-belajar/desktop-view/5.webp",
      "/images/projects/binar-belajar/desktop-view/6.webp",
      "/images/projects/binar-belajar/desktop-view/7.webp",
    ],
    tags: ["React", "Vite", "Bootstrap", "MOOC"],
    repoUrl: "https://github.com/kamaldev10/Final-Project-Course",
    liveUrl: "https://final-project-course.vercel.app",
    role: "Front End Developer",
    year: 2023,
  },
  {
    id: "5",
    slug: "dicoding-story-app",
    title: "Dicoding Story App",
    description:
      "Dicoding Story App adalah sebuah aplikasi yang memanfaatkan API dari dicoding yang berfungsi untuk berbagi cerita seperti fitur sosial media.",
    longDescription: [
      "Aplikasi ini merupakan aplikasi yang berfungsi untuk menampilkan, menambahkan, bahkan menyimpan/mengarsipkan cerita. Anda dapat menambahkan cerita dengan memberikan deskripsi, foto atau gambar dan lokasi anda. ",
      "Aplikasi ini memanfaatkan beberapa teknologi webpack, leaflet, tailwind CSS dan javascript. ",
    ],
    thumbnailImage: "/images/projects/dicoding-story/desktop-view/2.webp",
    mobileImage: "",
    desktopImage: "/images/projects/dicoding-story/desktop-view/2.webp",
    mobileImages: [""],
    desktopImages: [
      "/images/projects/dicoding-story/desktop-view/1.webp",
      "/images/projects/dicoding-story/desktop-view/2.webp",
      "/images/projects/dicoding-story/desktop-view/3.webp",
      "/images/projects/dicoding-story/desktop-view/4.webp",
      "/images/projects/dicoding-story/desktop-view/5.webp",
      "/images/projects/dicoding-story/desktop-view/6.webp",
    ],
    tags: ["Webpack", "Leaflet", "Tailwind CSS"],
    repoUrl: "https://github.com/kamaldev10/dicoding-story-app-final",
    liveUrl: "https://dicodingstory-app.netlify.app",
    role: "Front End Developer",
    year: 2025,
  },
  {
    id: "6",
    slug: "movie-list",
    title: "Movie List",
    description:
      "Movie List adalah sebuah aplikasi yang menampilkan film-film dengan memanfaatkan API movie yang diberikan oleh Binar Academy.",
    longDescription: [
      "Aolikasi ini adalah aplikasi yang dikembangkan menggunakan React + Vite sebagai media pembelajaran dalam Binar Academy pada MBKM Wave 5 ",
    ],
    thumbnailImage: "/images/projects/movie-list/desktop-view/1.webp",
    mobileImage: "",
    desktopImage: "/images/projects/movie-list/desktop-view/1.webp",
    mobileImages: [""],
    desktopImages: [
      "/images/projects/movie-list/desktop-view/1.webp",
      "/images/projects/movie-list/desktop-view/2.webp",
      "/images/projects/movie-list/desktop-view/3.webp",
    ],
    tags: ["Webpack", "Leaflet", "Tailwind CSS"],
    repoUrl: "https://github.com/kamaldev10/challenge-05.git",
    liveUrl: "https://movie-list-tan-phi.vercel.app",
    role: "Front End Developer",
    year: 2023,
  },
  // Tambahkan lebih banyak proyek sesuai kebutuhan Anda
];
