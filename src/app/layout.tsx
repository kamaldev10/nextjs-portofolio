// app/layout.tsx
import "./globals.css"; // Pastikan ini ada dan diimpor
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Musthafa Kamal - Portfolio",
  description: "FullStack Developer, Front End Developer, Back end Developer",
  keywords: [
    "portfolio",
    "web developer",
    "fullstack developer",
    "Next.js",
    "React",
    "Tailwind css",
  ],
  authors: [{ name: "Ali Musthafa Kamal" }],
  openGraph: {
    title: "Ali Musthafa Kamal - Portfolio",
    description: "A showcase of my work and skills.",
    url: "https://yourportfolio.com",
    siteName: "Ali Musthafa Kamal - Portfolio",
    images: [
      {
        url: "/images/og-image.png", // Gambar untuk social media preview (buat di public/images)
        width: 1200,
        height: 630,
        alt: "Ali Musthafa Kamal Portfolio",
      },
    ],
    locale: "Riau_Ind",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth " suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased 
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
