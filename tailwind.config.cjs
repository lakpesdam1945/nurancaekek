/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      dekstop: "1440px",
    },
    maxWidth: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      dekstop: "1440px",
    },
    fontFamily: {
      display: ["'Leckerli One'"],
      body: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#0E453C",
        dark: "#0F172A",
        neutral: "#F8FAFC",
      },
      fontFamily: {
        display: ["'Leckerli One'"],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
