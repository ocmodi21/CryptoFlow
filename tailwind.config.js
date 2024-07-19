/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: {
        bgcolor: {
          primary: "#1e1d47",
          secondary: "#0f0e20",
        },
        font: {
          primary: "#e4e2e3",
          secondary: "#b0b2be",
        },
      },
      light: {
        bgcolor: {
          primary: "#fff",
          secondary: "#f6f6f6",
        },
        font: {
          primary: "#16171a",
          secondary: "#0151c8",
        },
      },
      main: "#504adf",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
