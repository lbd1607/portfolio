/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/hero.jpg)",
        heromobile: "url(/heromobile.jpg)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      colors: {
        bonewhite: "#E4E4E4",
        primary: {
          dark: "#101010",
          medium: "#1B1A1A",
          light: "#252526",
        },
        accent: "#43ADE9",
      },
    },
  },
  plugins: [],
};
