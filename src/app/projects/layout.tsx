// app/projects/layout.tsx
import React from "react";
import type { Metadata } from "next";

// --- Metadata untuk Halaman Proyek ---
export const metadata: Metadata = {
  title: "Proyek-Proyek Saya | Ali Musthafa Kamal Portfolio",
  description:
    "Jelajahi koleksi proyek pengembangan web dan desain saya, menunjukkan keahlian dan passion saya.",
};

// --- Komponen Layout Proyek ---
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opsional: Header khusus untuk halaman proyek */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Portofolio Proyek
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Kumpulan karya-karya terbaru dan proyek pribadi saya.
          </p>
        </header>

        {/* children akan merender app/projects/page.tsx atau app/projects/[slug]/page.tsx */}
        {children}
      </div>
    </div>
  );
}
