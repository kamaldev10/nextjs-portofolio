// components/sections/AboutMeSection.tsx
import React from "react";
import ProfileCard from "../profile-card/ProfileCard";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] text-center py-16 bg-slate-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-8 md:mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="md:w-3/5 order-2 md:order-1">
          <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6">
            <p>
              I am a <strong>Full-Stack Developer</strong> and Information
              Systems student at
              <strong>Riau University</strong>, driven by a passion for building
              scalable, user-centric digital solutions. My journey is defined by
              a continuous loop of learning and implementing modern technologies
              to solve real-world problems.
            </p>

            <p>
              With an extensive background in intensive bootcamps—most recently
              completing the{" "}
              <strong>Dicoding Full-Stack Developer (2026)</strong>,{" "}
              <strong>Dicoding Full-Stack Developer (2025)</strong> and{" "}
              <strong>Binar Academy Frontend Developer (2023)</strong>. I have
              mastered the <strong>MERN Stack</strong> and{" "}
              <strong>Next.js</strong>. I specialize in creating robust
              applications that aren&apos;t just functional, but also
              maintainable through{" "}
              <strong>Automated Testing (Cypress/Cucumber/Vitest)</strong> and
              clean architecture.
            </p>

            <p>
              Beyond coding, my leadership as the member of an environmental
              Organizations{" "}
              <strong>
                (KPA EMC<sup>2</sup>)
              </strong>{" "}
              and my active involvement in student organizations like{" "}
              <strong>Himalkom FMIPA UNRI</strong> and{" "}
              <strong>FORMADIKSI UNRI</strong> have honed my ability to
              collaborate in fast-paced team environments. I bridge the gap
              between complex backend logic and intuitive UI/UX design, ensuring
              every product I touch provides maximum value.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Core Tech
                </h4>
                <ul className="list-disc list-inside text-sm opacity-80">
                  <li>MERN Stack & Next.js</li>
                  <li>Automated Testing (BDD)</li>
                  <li>RESTful API Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Extended Skills
                </h4>
                <ul className="list-disc list-inside text-sm opacity-80">
                  <li>Social Media Design (Canva)</li>
                  <li>UI/UX Design (Figma)</li>
                  <li>Cloud Deployment (Docker)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card / Image */}
        <div className="md:w-2/5 order-1 md:order-2 flex justify-center items-center">
          <ProfileCard
            imageSrc="/images/profile.webp"
            altText="Ali Musthafa Kamal Photo"
            captionText="Ali Musthafa Kamal"
            containerHeight="420px"
            containerWidth="320px"
            imageHeight="420px"
            imageWidth="320px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text font-bold text-white">
                Full-Stack Developer
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
