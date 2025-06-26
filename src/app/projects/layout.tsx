import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects | Ali Musthafa Kamal Portfolio",
  description:
    "Explore my collection of web development and design projects, showcasing my skills and interests.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 md:mb-4">
            Project Portfolio
          </h1>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300">
            Collections of my latest works and personal projects.
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}
