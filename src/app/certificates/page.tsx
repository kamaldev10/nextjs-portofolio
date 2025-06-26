import React from "react";
import { Metadata } from "next";
import { categorizedCertificates } from "@/lib/data/certificatesData";
import CertificateCard from "@/components/certificates/CertificateCard";

// SEO Metadata in English
export const metadata: Metadata = {
  title: "Certifications | Ali Musthafa Kamal Portofolio",
  description:
    "A comprehensive list of my professional certifications and qualifications.",
};

const CertificatesPage = () => {
  const categories = Object.keys(categorizedCertificates);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
      {/* Page Header */}
      <header className="text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Certifications & Qualifications
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
          Below is a list of my professional certifications. Each one can be
          verified via the provided link.
        </p>
      </header>

      {/* Grouped Certificates List */}
      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-emerald-700 pb-2">
              Issued by{" "}
              <span className="text-foreground dark:text-indigo-400">
                {category}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorizedCertificates[category].map((cert) => (
                <CertificateCard key={cert.title} certificate={cert} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default CertificatesPage;
