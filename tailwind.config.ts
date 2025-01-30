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
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },

      colors: {
        dark: {
          background: "#121212",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          text: "#000000",
        },

        //custom colors
        customPurple: "#260e50",
        customTeal: "#264e70",
      },
    },
  },
  plugins: [],
} satisfies Config;
