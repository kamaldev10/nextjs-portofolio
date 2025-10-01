import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

import Footer from "@/components/Footer";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Ali Musthafa Kamal Website !!!",
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
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Musthafa Kamal Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalNavbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
