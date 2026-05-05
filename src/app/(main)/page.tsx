"use client";

import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificateSection";
import HeroSection from "@/components/sections/HeroSection";
import RollingGallery from "@/components/RollingGallery";

export default function HomePage() {
  return (
    <div className=" w-full mx-auto">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  );
}
