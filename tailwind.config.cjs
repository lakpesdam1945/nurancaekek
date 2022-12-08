/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
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
        dark: "#111827",
        light: "#F9FAFB",
        accent: "#FCD34D",
      },
      fontFamily: {
        display: ["'Leckerli One'"],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.emerald.900")} ${theme(
            "colors.emerald.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "2px",
          width: "2px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.emerald.900"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.slate.400"),
        },
      });
    }),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
