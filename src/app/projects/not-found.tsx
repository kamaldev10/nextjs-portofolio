import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        404 - Proyek Tidak Ditemukan
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Proyek yang Anda cari tidak tersedia atau telah dihapus.
      </p>
      <Link
        href="/projects"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        <IoCaretBack /> Kembali ke Daftar Proyek
      </Link>
    </div>
  );
}
