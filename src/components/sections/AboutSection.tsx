// components/sections/AboutMeSection.tsx
import React from "react";
import ProfileCard from "../profile-card/ProfileCard";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] text-center py-16 bg-slate-400 dark:bg-gray-900"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-4 md:mb-8">
        About Me
      </h2>
      <div className=" flex flex-col md:flex-row items-center justify-center ">
        <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
          <div className="max-w-sm sm:max-w-2xl mx-5 sm:mx-auto text-xs sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4 ">
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
              Currently, I am participating in the Dicoding Camp by DBS
              Foundation program in the front end and back end fields for 6
              months. My main responsibilities include building Fullstack with
              the MERN stack. An achievement that I am proud of is successfully
              building a portfolio on github that shows my abilities in the
              field of web development. In the future, I want to continue to
              develop in the field of web development and contribute to the
              development of applications/products that your company produces. I
              am interested in this position because it is in line with my
              career vision, and I am sure I can provide added value to your
              team. Thank you.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 order-1 md:order-2 md: flex justify-center items-center ">
          {/* <Image
            src="/images/profile.webp"
            alt="Ali Musthafa Kamal"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-full"
            priority
          /> */}

          <ProfileCard
            imageSrc="/images/profile.webp"
            altText="Ali Musthafa Kamal Photo"
            captionText="Ali Musthafa Kamal"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">Ali Musthafa Kamal</p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
