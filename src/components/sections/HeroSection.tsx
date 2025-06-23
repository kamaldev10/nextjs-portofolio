// components/sections/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] text-center md:text-left"
    >
      <div className="order-2 md:order-1 mt-8 md:mt-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          I&apos;m{" "}
          <span className="text-accent dark:text-accent-foreground">
            Ali Musthafa Kamal
          </span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          A passionate{" "}
          <span className="font-semibold text-accent dark:text-accent-foreground">
            Full-stack Developer
          </span>
          <br />
          building intuitive and efficient web experiences.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <Button className="py-2 md:py-3">
            <Link
              href="/projects"
              className="text-gray-800 dark:text-slate-100"
            >
              View My Work
            </Link>
          </Button>
          <Button variant="secondary" className="py-2 md:py-3">
            <Link
              href="/contact"
              className="text-accent dark:text-accent-foreground hover:dark:text-gray-800"
            >
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center p-4">
        <Image
          src="/images/profile.webp"
          alt="Ali Musthafa Kamal"
          width={400}
          height={400}
          className="rounded-full shadow-lg border-4 border-accent dark:border-accent-foreground object-cover w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
