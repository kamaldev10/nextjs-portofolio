// components/ThemeToggle.tsx
"use client"; // Ini adalah client component

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // Impor ikon bulan dan matahari

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect hanya berjalan di client setelah mount, untuk menghindari mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Atau render skeleton loader
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6" /> // Ikon matahari untuk light mode
      ) : (
        <Moon className="h-6 w-6" /> // Ikon bulan untuk dark mode
      )}
    </button>
  );
};

export default ThemeToggle;
