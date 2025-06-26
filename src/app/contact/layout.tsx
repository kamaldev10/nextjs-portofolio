// app/contact/layout.tsx
import React from "react";
import type { Metadata } from "next"; // Penting: Impor Metadata

// --- Metadata untuk Halaman Kontak ---
// Ini akan diproses di server untuk SEO.
export const metadata: Metadata = {
  title: "Contact Me | Ali Musthafa Kamal", // Sesuaikan judul
  description:
    "Feel free to contact Ali Musthafa Kamal for collaborations, questions, or just to say hello!", // Sesuaikan deskripsi
  keywords: [
    "kontak",
    "Ali Musthafa Kamal",
    "pengembang web",
    "email",
    "telepon",
  ],
  // Anda bisa menambahkan og:image atau canonical URL jika diperlukan
};

// --- Komponen Layout Kontak ---
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen py-16">{children}</section>;
}
