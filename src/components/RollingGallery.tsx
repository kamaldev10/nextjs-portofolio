"use client";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import Image from "next/image";

const DEFAULT_IMAGES = [
  "/images/gallery/1.png",
  "/images/gallery/2.jpeg",
  "/images/gallery/5.png",
  "/images/gallery/7.png",
  "/images/gallery/8.png",
  "/images/gallery/9.png",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : DEFAULT_IMAGES;
  const [isSm, setIsSm] = useState<boolean>(false);

  // 🔹 Responsive handler — run once + listener cleanup
  useEffect(() => {
    const updateScreen = () => setIsSm(window.innerWidth <= 640);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // 🔹 Precompute geometric values (memoized)
  const { cylinderWidth, faceCount, faceWidth, radius } = useMemo(() => {
    const width = isSm ? 1100 : 1800;
    const count = galleryImages.length;
    const faceW = (width / count) * 1.5;
    const r = width / (2 * Math.PI);
    return {
      cylinderWidth: width,
      faceCount: count,
      faceWidth: faceW,
      radius: r,
    };
  }, [isSm, galleryImages.length]);

  // 🔹 Motion setup
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`,
  );
  const DRAG_FACTOR = 0.05;

  // 🔹 Infinite spin function (memoized)
  const startInfiniteSpin = useCallback(
    (startAngle: number) => {
      controls.start({
        rotateY: [startAngle, startAngle - 360],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    },
    [controls],
  );

  // 🔹 Autoplay toggle
  useEffect(() => {
    if (autoplay) {
      startInfiniteSpin(rotation.get());
    } else {
      controls.stop();
    }
  }, [autoplay, startInfiniteSpin, controls, rotation]);

  // 🔹 Drag handlers (memoized)
  type DragInfo = {
    offset: { x: number; y: number };
    velocity: { x: number; y: number };
  };

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      controls.stop();
      rotation.set(rotation.get() + info.offset.x * DRAG_FACTOR);
    },
    [controls, rotation],
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      const finalAngle = rotation.get() + info.velocity.x * DRAG_FACTOR;
      rotation.set(finalAngle);
      if (autoplay) startInfiniteSpin(finalAngle);
    },
    [autoplay, rotation, startInfiniteSpin],
  );

  const handleHover = useCallback(
    (isEnter: boolean) => {
      if (autoplay && pauseOnHover) {
        if (isEnter) controls.stop();
        else startInfiniteSpin(rotation.get());
      }
    },
    [autoplay, pauseOnHover, controls, startInfiniteSpin, rotation],
  );

  return (
    <div className="relative h-[500px] py-16 w-full overflow-hidden">
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-[48px] z-10 bg-gradient-to-l from-transparent to-[#060010]" />
      <div className="absolute inset-y-0 right-0 w-[48px] z-10 bg-gradient-to-r from-transparent to-[#060010]" />

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center">
        Gallery Showcase
      </h2>
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          animate={controls}
          onUpdate={(latest) =>
            typeof latest.rotateY === "number" && rotation.set(latest.rotateY)
          }
          style={{
            transform,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex items-center justify-center p-[6%] [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={url}
                alt={`gallery-${i}`}
                width={300}
                height={120}
                className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-2 border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[100px] sm:w-[220px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
