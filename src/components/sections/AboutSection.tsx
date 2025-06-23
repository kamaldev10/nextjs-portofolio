// components/sections/AboutMeSection.tsx
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 mt-16 bg-slate-400 dark:bg-gray-900">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4">
          <p>
            I am an Information Systems student from the University of Riau.
            During college, I was active in the Himalkom organization, Mapala
            and participated in the Merdeka Belajar Kampus Merdeka program at
            Binar Academy with a front-end javascript field that honed my Web
            Development and Soft Skills skills. In the program, I studied tech
            stacks related to web development and developed my skills by
            collaborating with the backend and building SPA applications using
            React + vite.
          </p>
          <p>
            Currently, I am participating in the Dicoding Camp by DBS Foundation
            program in the front end and back end fields for 6 months. My main
            responsibilities include building Fullstack with the MERN stack. An
            achievement that I am proud of is successfully building a portfolio
            on github that shows my abilities in the field of web development.
            In the future, I want to continue to develop in the field of web
            development and contribute to the development of
            applications/products that your company produces. I am interested in
            this position because it is in line with my career vision, and I am
            sure I can provide added value to your team. Thank you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
