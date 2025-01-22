import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita o modo escuro com base na classe
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#121212",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          text: "#000000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
