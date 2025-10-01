"use client";
// components/sections/HeroSection.tsx
import Link from "next/link";
import { Github } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Particles from "../ParticlesBackground";
import SplitText from "../SplitText";
import TextType from "../TextType";
import HeroButton from "../ui/HeroButton";
import { FaInstagram } from "react-icons/fa";
import CardNav from "../CardNav";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigateProject = () => {
    router.push("/projects");
  };

  const handleNavigateContact = () => {
    router.push("/contact");
  };

  const items = [
    {
      label: "Projects",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        // { label: "Featured", ariaLabel: "Featured Projects" },
        {
          label: "portofolio",
          ariaLabel: "Project Case Studies",
          href: "/projects",
        },
      ],
    },
    {
      label: "Certificates",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Certification",
          ariaLabel: "Certification ",
          href: "/certificates",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [{ label: "Email me", ariaLabel: "Email me", href: "/contact" }],
    },
  ];

  // const handleAnimationComplete = () => {
  //   console.log("All letters have animated!");
  // };

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-dvh text-center px-5 overflow-hidden"
      >
        {/* Particles jadi background */}
        <div className="absolute inset-0">
          <Particles
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="text-white dark:text-blue-100"
          />
        </div>

        <CardNav
          // logo={logo}
          // logoAlt="Company Logo"
          items={items}
          menuColor="#0f172a"
          baseColor="#f1f5f9"
          buttonBgColor="#0f172a"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        <div className="relative z-10 flex space-y-5 flex-col">
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
            <Link
              href="https://instagram.com/alimusthafa10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <FaInstagram className="w-5 h-5 text-gray-800 group-hover:text-gray-800/90 dark:text-slate-100 group-hover:dark:text-slate-100/90  transition-colors duration-300" />
              </div>
            </Link>
          </div>

          <SplitText
            text="Welcome, Dude!"
            className="text-6xl sm:text-7xl font-extrabold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
          />

          <TextType
            text={[
              "I'm a Fullstack Developer",
              "building intuitive and efficient web experiences",
              "Happy coding!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            hideCursorWhileTyping={true}
            className="mt-4 text-base sm:text-2xl text-gray-700 dark:text-gray-300"
          />

          <div className="flex mt-4 justify-center gap-5">
            <HeroButton
              label="Explore"
              svgPath="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              onClick={handleNavigateProject}
            />
            <HeroButton
              label="Contact"
              svgPath="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              onClick={handleNavigateContact}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
