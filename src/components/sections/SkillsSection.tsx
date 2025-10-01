// components/sections/SkillsSection.tsx
import React from "react";
import LogoLoop, { LogoItem } from "../LogoLoop";

const skills: LogoItem[] = [
  { alt: "HTML5", src: "/images/skills/html5.svg", width: 50, height: 50 },
  { alt: "CSS3", src: "/images/skills/css3.svg", width: 50, height: 50 },
  {
    alt: "JavaScript",
    src: "/images/skills/javascript.svg",
    width: 50,
    height: 50,
  },
  {
    alt: "TypeScript",
    src: "/images/skills/typescript.svg",
    width: 50,
    height: 50,
  },
  { alt: "React.js", src: "/images/skills/react.svg", width: 50, height: 50 },
  { alt: "Next.js", src: "/images/skills/nextjs.svg", width: 50, height: 50 },
  {
    alt: "Express.js",
    src: "/images/skills/express.svg",
    width: 50,
    height: 50,
  },
  { alt: "Node.js", src: "/images/skills/nodejs.svg", width: 50, height: 50 },
  {
    alt: "Tailwind CSS",
    src: "/images/skills/tailwindcss.svg",
    width: 50,
    height: 50,
  },
  {
    alt: "Bootstrap",
    src: "/images/skills/bootstrap.svg",
    width: 50,
    height: 50,
  },
  { alt: "GitHub", src: "/images/skills/github.svg", width: 50, height: 50 },
  { alt: "Prisma", src: "/images/skills/prisma.svg", width: 50, height: 50 },
  {
    alt: "PostgreSQL",
    src: "/images/skills/postgresql.svg",
    width: 50,
    height: 50,
  },
  { alt: "MongoDB", src: "/images/skills/mongodb.svg", width: 50, height: 50 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className=" bg-slate-400 dark:bg-gray-900 ">
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="shadow-2xl inset-shadow-slate-400"
      >
        <LogoLoop
          logos={skills}
          speed={120}
          direction="left"
          logoHeight={102}
          gap={62}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#1e293b"
          ariaLabel="Skill Logo"
          className="py-16 sm:py-20 "
        />
      </div>
    </section>
  );
};

export default SkillsSection;
