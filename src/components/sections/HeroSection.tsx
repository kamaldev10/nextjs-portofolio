// components/sections/HeroSection.tsx
import Link from "next/link";
import { Button } from "../ui/Button";
import { Github } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] text-center px-5"
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
            href={""}
            className="p-2 rounded-full dark:bg-gray-800 bg-accent hover:bg-emerald-500 hover:dark:bg-gray-900 hover:scale-105"
          >
            <Github className="w-5 h-5 text-gray-800 dark:text-slate-100" />
          </Link>
          <Link
            href={""}
            className="p-2 rounded-full dark:bg-gray-800 bg-accent hover:bg-emerald-500 hover:dark:bg-gray-900 hover:scale-105"
          >
            <FaLinkedinIn className="w-5 h-5 text-gray-800 dark:text-slate-100" />
          </Link>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <Button className="py-2 md:py-3">
            <Link
              href="/projects"
              className="text-sm text-gray-800 dark:text-slate-100 hover:dark:text-slate-300"
            >
              View My Work
            </Link>
          </Button>
          <Button variant="secondary" className="py-2 md:py-3">
            <Link
              href="/contact"
              className="text-sm text-accent dark:text-accent-foreground hover:dark:text-gray-800"
            >
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
