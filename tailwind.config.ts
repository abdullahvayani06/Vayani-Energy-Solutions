import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B5972",
          light: "#2E7E8F",
          dark: "#0B2733",
        },
        green: {
          DEFAULT: "#5FA33F",
          dark: "#4C8530",
          light: "#EAF3E4",
        },
        "off-white": "#F7F9F7",
        muted: "#7C8FA0",
        "border-brand": "rgba(27, 89, 114, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
