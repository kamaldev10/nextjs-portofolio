// components/sections/AboutMeSection.tsx
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4">
          <p>
            Hello! I&apos;m Ali Musthafa Kamal a passionate Full-stack Developer
            with 1 year of experience in building user-friendly and robust web
            applications. My journey in tech began with a curiosity for how
            things work, and it quickly evolved into a love for crafting
            beautiful and functional digital experiences.
          </p>
          <p>
            I specialize in React, Express, Next.js, Node.js, TypeScript, and
            Tailwind CSS and truly enjoy the challenge of solving complex
            problems. When I&apos;m not coding, you can find me hiking, reading,
            and playing guitar I&apos;m always eager to learn new technologies
            and collaborate on exciting projects. Let&apos;s connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
