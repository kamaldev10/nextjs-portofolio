"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold text-red-600">Terjadi kesalahan</h2>
      <p className="text-gray-600 mt-2">{error.message}</p>
      <p className="mt-4 text-sm text-gray-400">
        Silakan coba muat ulang halaman atau periksa kembali koneksi Anda.
      </p>
    </div>
  );
}
