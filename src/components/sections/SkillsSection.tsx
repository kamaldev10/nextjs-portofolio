// components/sections/SkillsSection.tsx
import React from "react";
import LogoLoop from "../LogoLoop";

const skills: { name: string; src: string }[] = [
  { name: "HTML5", src: "/images/skills/html5.svg" },
  { name: "CSS3", src: "/images/skills/css3.svg" },
  {
    name: "JavaScript",
    src: "/images/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    src: "/images/skills/typescript.svg",
  },
  { name: "React.js", src: "/images/skills/react.svg" },
  { name: "Next.js", src: "/images/skills/nextjs.svg" },
  {
    name: "Express.js",
    src: "/images/skills/express.svg",
  },
  { name: "Node.js", src: "/images/skills/nodejs.svg" },
  {
    name: "Tailwind CSS",
    src: "/images/skills/tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    src: "/images/skills/bootstrap.svg",
  },
  { name: "GitHub", src: "/images/skills/github.svg" },
  { name: "Prisma", src: "/images/skills/prisma.svg" },
  {
    name: "PostgreSQL",
    src: "/images/skills/postgresql.svg",
  },
  { name: "MongoDB", src: "/images/skills/mongodb.svg" },
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
