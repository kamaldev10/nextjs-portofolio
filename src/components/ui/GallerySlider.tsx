// components/ui/GallerySlider.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface GallerySliderProps {
  images: string[];
  type: "mobile" | "desktop";
}

export default function GallerySlider({ images, type }: GallerySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

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

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
        Galeri {type === "mobile" ? "Mobile" : "Desktop"}
      </h3>

      <motion.div
        ref={sliderRef}
        className="cursor-grab overflow-hidden"
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
              className="relative w-44 sm:w-60 h-80 sm:h-96 rounded-lg overflow-hidden flex-shrink-0 shadow-md"
            >
              <Image
                src={src}
                alt={`Gambar ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
