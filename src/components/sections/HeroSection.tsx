// components/sections/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-16 text-center md:text-left"
    >
      <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 ms-0 md:ms-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Ali Musthafa Kamal
          </span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          A passionate{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Full-stack Developer
          </span>
          <br />
          building intuitive and efficient web experiences.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-lg"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-700 transition duration-300 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center p-4">
        {/* Pastikan kamu punya gambar profil di public/images/profile.webp */}
        <Image
          src="/images/profile.webp"
          alt="Ali Musthafa Kamal"
          width={400}
          height={400}
          className="rounded-full shadow-lg border-4 border-indigo-200 dark:border-indigo-600 object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
