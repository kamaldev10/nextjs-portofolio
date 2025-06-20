// app/contact/layout.tsx
import React from "react";
import type { Metadata } from "next"; // Penting: Impor Metadata

// --- Metadata untuk Halaman Kontak ---
// Ini akan diproses di server untuk SEO.
export const metadata: Metadata = {
  title: "Hubungi Saya | Ali Musthafa Kamal", // Sesuaikan judul
  description:
    "Jangan ragu untuk menghubungi Ali Musthafa Kamal untuk kolaborasi, pertanyaan, atau sekadar menyapa!", // Sesuaikan deskripsi
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
  return (
    // Anda bisa menambahkan styling atau struktur tambahan di sini
    // yang hanya berlaku untuk halaman di bawah /contact.
    // Misalnya, sebuah banner atau header khusus.
    <section className="min-h-screen py-16">
      {/* children di sini akan merender app/contact/page.tsx */}
      {children}
    </section>
  );
}
