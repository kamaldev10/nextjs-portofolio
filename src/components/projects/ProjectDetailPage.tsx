// 📁 components/project/ProjectDetailPage.tsx
"use client";

import { ExternalLink, Github } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GallerySlider from "@/components/ui/GallerySlider";
import type { Project } from "@/lib/data/projectsData";
import ImageZoomModal from "@/components/ui/ImageZoomModal";
import { useState } from "react";

export default function ProjectDetailPage({ project }: { project: Project }) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomSrc, setZoomSrc] = useState("");
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-12">
      <Link
        href="/projects"
        className="inline-flex items-center  dark:text-indigo-400 hover:underline mb-6"
      >
        <FaArrowLeft className="me-2 sm:me-3" /> Back
      </Link>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        {project.title}
      </h1>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">
        {project.description}
      </p>

      {(project.mobileImage || project.desktopImage) && (
        <Tabs
          defaultValue={project.mobileImage ? "mobile" : "desktop"}
          className="mb-10"
        >
          <TabsList className="flex space-x-2">
            {project.mobileImage && (
              <TabsTrigger value="mobile">📱 Mobile View</TabsTrigger>
            )}
            {project.desktopImage && (
              <TabsTrigger value="desktop">🖥️ Desktop View</TabsTrigger>
            )}
          </TabsList>

          {project.mobileImage && (
            <TabsContent value="mobile">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden my-4">
                <Image
                  onClick={() => {
                    setZoomSrc(project.mobileImage!);
                    setZoomOpen(true);
                  }}
                  src={project.mobileImage}
                  alt={`${project.title} - Mobile`}
                  fill
                  className="object-contain cursor-zoom-in"
                />
              </div>
            </TabsContent>
          )}

          {project.desktopImage && (
            <TabsContent value="desktop">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden my-4">
                <Image
                  onClick={() => {
                    setZoomSrc(project.desktopImage!);
                    setZoomOpen(true);
                  }}
                  src={project.desktopImage}
                  alt={`${project.title} - Desktop`}
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
          )}
        </Tabs>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Description
          </h2>
          <div className="text-sm md:text-lg text-gray-700 dark:text-gray-300 space-y-4 text-justify">
            {project.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {project.role && (
              <li>
                <strong>Role :</strong> {project.role}
              </li>
            )}
            {project.year && (
              <li>
                <strong>Year :</strong> {project.year}
              </li>
            )}
            {project.tags && (
              <li>
                <strong>Tech :</strong>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-gray-800 text-xs rounded-md dark:bg-blue-800 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            )}
          </ul>

          <div className="mt-6 space-y-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                See Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                className="flex items-center justify-center px-4 py-2 border border-gray-400 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Galeri Slider */}
      {(project.mobileImages?.length || project.desktopImages?.length) && (
        <Tabs
          defaultValue={project.mobileImages?.length ? "desktop" : "mobile"}
          className="mt-12"
        >
          <TabsList className="mb-4">
            {project.desktopImages?.length > 0 &&
              project.desktopImages[0] !== "" && (
                <TabsTrigger value="desktop">🖥️ Desktop Gallery</TabsTrigger>
              )}
            {project.mobileImages?.length > 0 &&
              project.mobileImages[0] !== "" && (
                <TabsTrigger value="mobile">📱 Mobile Gallery</TabsTrigger>
              )}
          </TabsList>

          {project.mobileImages?.length > 0 &&
            project.mobileImages[0] !== "" && (
              <TabsContent value="mobile">
                <GallerySlider images={project.mobileImages} type="mobile" />
              </TabsContent>
            )}

          {project.desktopImages?.length > 0 &&
            project.desktopImages[0] !== "" && (
              <TabsContent value="desktop">
                <GallerySlider images={project.desktopImages} type="desktop" />
              </TabsContent>
            )}
        </Tabs>
      )}

      <ImageZoomModal
        isOpen={zoomOpen}
        onClose={() => setZoomOpen(false)}
        src={zoomSrc}
      />
    </div>
  );
}
