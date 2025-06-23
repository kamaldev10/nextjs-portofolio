import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { featuredCertificates } from "@/lib/data/certificatesData";
import MotionCarousel from "../ui/MotionCarousel";
import FeaturedCertificateCard from "../certificates/FeaturedCertificateCard";

const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="py-8 md:py-12 bg-slate-400 dark:bg-gray-900 overflow-hidden"
    >
      <div className=" mx-auto px-10">
        {/* Header Section tidak berubah */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Featured Certifications
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              A glimpse into my verified professional qualifications.
            </p>
          </div>
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group flex-shrink-0"
          >
            View all certificates
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Gunakan MotionCarousel di sini */}
      <div className="w-full">
        <MotionCarousel
          className="container mx-auto px-4"
          itemClassName="flex-shrink-0 w-80 md:w-96"
        >
          {featuredCertificates.map((cert) => (
            <FeaturedCertificateCard key={cert.title} certificate={cert} />
          ))}
        </MotionCarousel>
      </div>
    </section>
  );
};

export default CertificatesSection;
