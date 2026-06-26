// components/ui/Loader.tsx
"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center py-20">
      <motion.div
        className="w-12 h-12 border-4 border-t-4 border-gray-200 dark:border-gray-700 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
}
