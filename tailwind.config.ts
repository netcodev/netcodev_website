import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        darker: "#000000",
        light: "#f5f5f5",
        lighter: "#ffffff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
