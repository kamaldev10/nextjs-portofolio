// components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 dark:bg-slate-800 py-4">
      <div className="text-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900 dark:text-gray-300">
        <p>&copy; {currentYear} Ali Musthafa Kamal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
