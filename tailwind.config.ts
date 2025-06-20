import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- Pastikan baris ini ada

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Untuk App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Untuk Pages Router (jika pakai)
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Kamu bisa menambahkan konfigurasi tema kustom di sini
      // Contoh:
      // colors: {
      //   'primary-blue': '#243c5a',
      // },
    },
  },
  plugins: [],
};
export default config;
