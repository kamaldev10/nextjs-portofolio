// components/sections/SkillsSection.tsx
import Image from "next/image";
import React from "react";

// Data untuk skills, sekarang dengan path gambar
const skills = [
  { name: "HTML5", icon: "/images/skills/html5.svg" },
  { name: "CSS3", icon: "/images/skills/css3.svg" },
  { name: "JavaScript", icon: "/images/skills/javascript.svg" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg" },
  { name: "React.js", icon: "/images/skills/react.svg" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg" },
  { name: "Node.js", icon: "/images/skills/nodejs.svg" },
  { name: "Express.js", icon: "/images/skills/express.svg" },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.svg" },
  { name: "Git", icon: "/images/skills/git.svg" },
  { name: "GitHub", icon: "/images/skills/github.svg" },
  { name: "Figma", icon: "/images/skills/figma.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 mt-16">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 justify-center-safe">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md
                         hover:scale-105 transition-transform duration-300 transform cursor-pointer
                         border border-gray-200 dark:border-gray-600 w-32 h-32 justify-center"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-3 object-contain"
              />
              <span className="text-md font-semibold text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
