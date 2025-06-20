// app/contact/page.tsx
"use client"; // --- PENTING: Tandai sebagai Client Component ---

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  XCircle,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react"; // Impor ikon dari Lucide

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(""); // Reset error message

    // --- GANTI 'YOUR_FORMSPREE_ID' dengan Form ID yang kamu dapatkan dari Formspree ---
    const formUrl = "https://formspree.io/f/xvgrbppq";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Bersihkan form
      } else {
        const data = await response.json();
        setErrorMessage(
          data.errors
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.errors.map((err: any) => err.message).join(", ")
            : "Terjadi kesalahan."
        );
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Kesalahan jaringan. Silakan coba lagi.");
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:py-0">
      {" "}
      {/* Hapus py-16 di sini karena sudah ada di layout */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Bagian Kiri: Informasi Kontak */}
          <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Ayo Berkolaborasi!
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Apakah Anda memiliki proyek dalam pikiran, pertanyaan, atau
                hanya ingin menyapa? Saya akan senang mendengarnya. Jangan ragu
                untuk menggunakan formulir atau menghubungi saya melalui saluran
                di bawah ini.
              </p>

              <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 flex-shrink-0" />
                  <a
                    href="mailto:alimusthafakamal@gmail.com"
                    className="hover:underline"
                  >
                    alimusthafakamal@gmail.com
                  </a>{" "}
                  {/* Ganti email Anda */}
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 flex-shrink-0" />
                  <a href="tel:+6285161789060" className="hover:underline">
                    +62 851 6178 9060
                  </a>{" "}
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 flex-shrink-0" />
                  <span>Pekanbaru, Riau, Indonesia</span>{" "}
                  {/* Ganti lokasi Anda */}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Temukan Saya di</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/kamaldev10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/alimusthafakamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                {/* Tambahkan ikon social media lain di sini jika ada */}
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Formulir Kontak */}
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
              Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-y transition-colors duration-200"
                  placeholder="Hai Ali, saya ingin mendiskusikan sebuah proyek..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-5 w-5" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Pesan Anda berhasil terkirim!</span>
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 rounded-lg flex items-center space-x-2">
                  <XCircle className="h-5 w-5" />
                  <span>
                    Error:{" "}
                    {errorMessage || "Gagal mengirim pesan. Silakan coba lagi."}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
