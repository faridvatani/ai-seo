import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      keyframes: {
        moveBg: {
          "0%": { backgroundPosition: "100% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
      },
      animation: {
        moveBg: "moveBg 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
