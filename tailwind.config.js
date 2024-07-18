/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: {
        bgcolor: {
          primary: "#1d1d1d",
          secondary: "#333333",
        },
        font: {
          primary: "#e4e2e3",
          secondary: "#818285",
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
      main: "#0645ff",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
