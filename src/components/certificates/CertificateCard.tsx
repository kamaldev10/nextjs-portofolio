import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { Certificate } from "@/lib/data/certificatesData"; // Impor tipe data

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-b-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden">
      {/* Bagian atas: Logo/Gambar */}
      <div className="w-full bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center ">
        <div className="relative w-full h-52 border-b-1 border-b-gray-800/50 ">
          <Image
            src={certificate.image}
            alt={`${certificate.issuedBy} certificate`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bagian bawah: Detail Konten */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <FaAward className="mr-1.5" /> published by {""}
            {certificate.issuedBy}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">
            {certificate.issueDate}
          </p>
        </div>

        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
          {certificate.title}
        </h3>

        {/* Tombol Aksi (CTA) */}
        <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <Link
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold  dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            Lihat Kredensial <FaExternalLinkAlt size={12} />
          </Link>
          {certificate.credentialId && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              ID: {certificate.credentialId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
