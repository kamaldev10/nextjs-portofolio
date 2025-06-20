// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {currentYear} Ali Musthafa Kamal. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Contoh Social Media Links */}
          <Link
            href="https://github.com/kamaldev10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/alimusthafakamal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </Link>
          {/* Tambahkan link social media lain jika ada */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
