// components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 dark:bg-gray-900 py-4">
      <div className="text-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900 dark:text-gray-300">
        <p>&copy; {currentYear} Ali Musthafa Kamal. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-2">
          <Link
            href="https://github.com/kamaldev10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-indigo-400 transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/alimusthafakamal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-indigo-400 transition-colors"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://instagram.com/alimusthafa10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-indigo-400 transition-colors"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
