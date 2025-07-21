// components/sections/SkillsSection.tsx
import Image from "next/image";
import React from "react";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

const skills: { name: string; icon: string; level: SkillLevel }[] = [
  { name: "HTML5", icon: "/images/skills/html5.svg", level: "Advanced" },
  { name: "CSS3", icon: "/images/skills/css3.svg", level: "Advanced" },
  {
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    icon: "/images/skills/typescript.svg",
    level: "Intermediate",
  },
  { name: "React.js", icon: "/images/skills/react.svg", level: "Advanced" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg", level: "Intermediate" },
  {
    name: "Express.js",
    icon: "/images/skills/express.svg",
    level: "Intermediate",
  },
  { name: "Node.js", icon: "/images/skills/nodejs.svg", level: "Intermediate" },
  {
    name: "Tailwind CSS",
    icon: "/images/skills/tailwindcss.svg",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    icon: "/images/skills/bootstrap.svg",
    level: "Advanced",
  },
  { name: "Git", icon: "/images/skills/git.svg", level: "Advanced" },
  { name: "GitHub", icon: "/images/skills/github.svg", level: "Advanced" },
  { name: "Prisma", icon: "/images/skills/prisma.svg", level: "Beginner" },
  {
    name: "PostgreSQL",
    icon: "/images/skills/postgresql.svg",
    level: "Beginner",
  },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg", level: "Beginner" },
];

const levelStyles = {
  Beginner: {
    borderColor: "border-slate-300 dark:border-slate-600",
    hoverBorderColor: "hover:border-slate-400",
    dotColor: "bg-slate-400",
    shadow: "shadow-slate-300/30",
  },
  Intermediate: {
    borderColor: "border-blue-400/50",
    hoverBorderColor: "hover:border-blue-400",
    dotColor: "bg-blue-400",
    shadow: "shadow-blue-500/20",
  },
  Advanced: {
    borderColor: "border-indigo-500/50",
    hoverBorderColor: "hover:border-indigo-500",
    dotColor: "bg-indigo-500",
    shadow: "shadow-indigo-500/30",
  },
  Expert: {
    borderColor: "border-amber-400/50",
    hoverBorderColor: "hover:border-amber-400",
    dotColor: "bg-amber-400",
    shadow: "shadow-amber-500/40",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white font-extrabold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
          {skills.map((skill) => {
            const styles = levelStyles[skill.level];
            return (
              <div
                key={skill.name}
                className={`group relative flex flex-col items-center justify-center p-4 w-full h-32 
                           bg-white/50 dark:bg-gray-800/50 rounded-xl border transition-all duration-300
                           transform hover:-translate-y-1 cursor-pointer
                           ${styles.borderColor} ${styles.hoverBorderColor} hover:shadow-lg ${styles.shadow}`}
              >
                <span
                  className={`absolute top-2 right-2 h-3 w-3 rounded-full ${styles.dotColor}`}
                  title={`Level: ${skill.level}`}
                />

                <div className="flex-grow flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center mt-2 truncate w-full">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
