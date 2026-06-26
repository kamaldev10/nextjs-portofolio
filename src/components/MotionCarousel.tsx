"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionCarouselProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}

const MotionCarousel: React.FC<MotionCarouselProps> = ({
  children,
  className = "",
  itemClassName = "",
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateDragWidth = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        setDragWidth(scrollWidth - clientWidth);
      }
    };
    updateDragWidth();
    window.addEventListener("resize", updateDragWidth);
    return () => window.removeEventListener("resize", updateDragWidth);
  }, [children]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={carouselRef}
        className="flex gap-2 px-4 cursor-grab"
        drag="x"
        dragConstraints={{ left: -dragWidth, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {React.Children.toArray(children).map((child, index) => (
          <motion.div
            key={index}
            className={`min-w-[250px] md:min-w-[300px]  p-4 transition-transform duration-300 hover:scale-105 ${itemClassName}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionCarousel;
