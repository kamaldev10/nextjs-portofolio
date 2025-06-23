import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Untuk App Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
export default config;
