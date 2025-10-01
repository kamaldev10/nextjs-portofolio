import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ali Musthafa Kamal | Fullstack Web Developer",
  description:
    "Portfolio of Ali Musthafa Kamal – Fullstack Web Developer specializing in Next.js, React, and Tailwind CSS.",
  keywords: [
    "Ali Musthafa Kamal",
    "portfolio",
    "web developer",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ali Musthafa Kamal" }],
  creator: "Ali Musthafa Kamal",
  openGraph: {
    title: "Ali Musthafa Kamal | Fullstack Web Developer",
    description:
      "Showcasing projects and skills in frontend and backend web development using Next.js, React, and Tailwind CSS.",
    url: "https://devkamal.vercel.app",
    siteName: "Ali Musthafa Kamal Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Ali Musthafa Kamal",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Musthafa Kamal | Fullstack Web Developer",
    description:
      "Portfolio of Ali Musthafa Kamal – showcasing frontend and backend web development projects.",
    creator: "@alimusthafakamal", // replace with your Twitter
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalNavbar />
          <main className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
