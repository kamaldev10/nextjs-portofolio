import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Certificate } from "@/lib/data/certificatesData";

interface FeaturedCardProps {
  certificate: Certificate;
}

const FeaturedCertificateCard: React.FC<FeaturedCardProps> = ({
  certificate,
}) => {
  return (
    <Link href="/certificates" className="block group">
      <div className="flex flex-col h-56 sm:h-72 w-full overflow-hidden bg-slate-400/30 dark:bg-gray-800/50 border border-slate-500 dark:border-gray-700 rounded-xl shadow-sm transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Image container */}
        <div className="relative w-full aspect-video overflow-hidden">
          <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm z-0">
            <Image
              src={certificate.image}
              alt={`${certificate.issuedBy} logo`}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full p-4">
            <Image
              src={certificate.image}
              alt={`${certificate.issuedBy} logo`}
              width={200}
              height={200}
              className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="p-4 z-10">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {certificate.issuedBy}
          </p>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
            {certificate.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCertificateCard;
