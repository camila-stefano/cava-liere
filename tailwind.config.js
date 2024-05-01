/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

let containerScreens = Object.assign({}, defaultTheme.screens);

// Delete the 2xl breakpoint from the object
delete containerScreens["2xl"];

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: containerScreens,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        light: "#F2F2F2",
        primary: "#000000",
        secondary: "#DF9A2D",
        terciary: "#c96838",
        black: "#000000",
        red: "#e22120",
      },
      fontSize: {
        sm: ["14px", "1.25em"],
        base: ["16px", "1.25em"],
        lg: ["20px", "1.25em"],
        xl: ["24px", "1.25em"],
        "2xl": ["24px", "1.25em"],
        "3xl": ["30px", "1.25em"],
        header: ["36px", "1.25em"],
      },
    },
  },
  plugins: [],
};
