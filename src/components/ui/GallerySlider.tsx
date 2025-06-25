"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageZoomModal from "./ImageZoomModal";

interface GallerySliderProps {
  images: string[];
  type: "mobile" | "desktop";
}

export default function GallerySlider({ images, type }: GallerySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomSrc, setZoomSrc] = useState("");

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const clientWidth = sliderRef.current.clientWidth;
        setMaxWidth(scrollWidth - clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [images]);

  const scrollBy = 300;
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollBy, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {type === "desktop" ? "Desktop" : "Mobile"} Gallery
      </h3>

      <div className="flex items-center gap-2">
        <button
          onClick={scrollLeft}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <motion.div
          ref={sliderRef}
          className="overflow-x-auto flex-1"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -maxWidth, right: 0 }}
            className="flex space-x-4"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 cursor-zoom-in rounded-lg overflow-hidden shadow-md ${
                  type === "mobile"
                    ? "w-40 sm:w-52 md:w-60 aspect-[9/16]"
                    : "w-60 sm:w-72 md:w-96 aspect-[16/9]"
                }`}
              >
                <Image
                  onClick={() => {
                    setZoomSrc(src);
                    setZoomOpen(true);
                  }}
                  src={src}
                  alt={`Gambar ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <button
          onClick={scrollRight}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <ImageZoomModal
          isOpen={zoomOpen}
          onClose={() => setZoomOpen(false)}
          src={zoomSrc}
        />
      </div>
    </div>
  );
}
