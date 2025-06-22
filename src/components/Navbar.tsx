// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
// Import ikon yang dibutuhkan dari lucide-react
import { Home, Folder, Mail, LetterTextIcon } from "lucide-react"; // Perhatikan 'lucide-react'
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", icon: Home, href: "/" }, // Menggunakan Home dari lucide-react
    { name: "Projects", icon: Folder, href: "/projects" }, // Menggunakan Folder
    { name: "Certificates", icon: LetterTextIcon, href: "/certificates" },
    { name: "Contact", icon: Mail, href: "/contact" }, // Menggunakan Mail
  ];

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Nama */}
          <div className=" flex items-center">
            <ThemeToggle />
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {" "}
            {navLinks.map((link) => {
              const IconComponent = link.icon; // Ambil komponen ikon dari object link
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    flex items-center space-x-2 // Tambahkan flexbox dan jarak antar item
                    text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200
                    ${
                      pathname === link.href
                        ? "border-b-2 border-indigo-600 dark:border-indigo-400 font-semibold"
                        : ""
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            {" "}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const IconComponent = link.icon; // Ambil komponen ikon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex px-3 py-2 rounded-md text-base font-medium
                    items-center space-x-2 
                    text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700
                    ${
                      pathname === link.href
                        ? "bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400"
                        : ""
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
