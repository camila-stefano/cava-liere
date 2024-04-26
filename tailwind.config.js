/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        light: "#F2F2F2",
        primary: "#5B1F30",
        secondary: "#DF9A2D",
        terciary: "#c96838",
        black: "#000000",
        red: "#e22120",
      },
      fontFamily: {
        maison: ["Maison Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
