// 📁 components/ui/SectionWrapper.tsx
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  theme?: "blue" | "green" | "pink";
}

export default function SectionWrapper({
  children,
  theme = "blue",
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8 transition-colors",
        `theme-${theme}`,
        "bg-[--section-bg] text-[--section-fg]"
      )}
    >
      {children}
    </section>
  );
}
