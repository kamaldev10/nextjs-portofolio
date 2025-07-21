"use client";
// components/sections/HeroSection.tsx
import Link from "next/link";
import { Github } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigateProject = () => {
    router.push("/projects");
  };

  const handleNavigateContact = () => {
    router.push("/contact");
  };

  return (
    <section
      id="home"
      className=" flex flex-col md:flex-row items-center justify-center min-h-[calc(100dvh-7rem)] text-center px-5"
    >
      <div className="">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
          <span className="text-accent dark:text-accent-foreground">
            Ali Musthafa Kamal
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-2xl text-gray-700 dark:text-gray-300">
          A passionate{" "}
          <span className="font-semibold text-accent dark:text-accent-foreground">
            Full-stack Developer
          </span>
          <br />
          building intuitive and efficient web experiences.
        </p>
        <div className="inline-flex justify-center aling-middle mt-4 gap-3 sm:gap-5">
          <Link
            href="https://github.com/kamaldev10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <Github className="w-5 h-5 text-gray-800 group-hover:text-gray-800/90 dark:text-slate-100 group-hover:dark:text-slate-100/90  transition-colors duration-300" />
            </div>
          </Link>
          <Link
            href="https://linkedin.com/in/alimusthafakamal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <FaLinkedinIn className="w-5 h-5 text-gray-800 group-hover:text-gray-800/90 dark:text-slate-100 group-hover:dark:text-slate-100/90  transition-colors duration-300" />
            </div>
          </Link>
        </div>

        <div className="mt-4 justify-center space-x-4">
          <button
            onClick={handleNavigateProject}
            className="cursor-pointer bg-gradient-to-b dark:from-indigo-500 from-accent dark:to-indigo-600 to-accent-foreground/90 dark:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] shadow-[0px_4px_32px_0_rgba(22,163,74)] px-6 py-3 rounded-xl text-slate-100 font-medium group"
          >
            <div className="relative overflow-hidden text-sm sm:text-base">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                View My Work
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                View My Work
              </p>
            </div>
          </button>

          <button
            onClick={handleNavigateContact}
            className="cursor-pointer bg-gradient-to-b dark:from-indigo-500 from-accent dark:to-indigo-600 to-accent-foreground/90 dark:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] shadow-[0px_4px_32px_0_rgba(22,163,74)] px-6 py-3 rounded-xl text-slate-100 font-medium group"
          >
            <div className="relative overflow-hidden text-sm sm:text-base">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Get In Touch
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Get In Touch
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
