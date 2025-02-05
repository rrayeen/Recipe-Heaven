import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        p1: "linear-gradient(to right,rgba(0, 0, 0,0.9),rgba(0,0,0, 0.6)),url('img/p1.jpg')",
        p2: "linear-gradient(to bottom,rgba(0, 0, 0,0.6),rgba(0,0,0, 0.6)),url('img/p2.jpg')",
      },
      colors: {
        primary: "#ff9754",
        secondary: "#FFBF78",
        third: "#FFEEA9",
        fourth: "#FEFFD2",
      },
      boxShadow: {
        innershadow : 'rgba(50, 50, 93,0.4) 0px 30px 90px 30px inset, rgba(0, 0, 0, 0.3) 0px 18px 30px -30px inset'
      }
    },
  },
  plugins: [],
};
export default config;
