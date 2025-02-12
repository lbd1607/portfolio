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
      },
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      colors: {
        coolwhite: "#DFE4F2",
        primary: {
          dark: "#080808",
          medium: "#1A1A1A",
          light: "#252526",
        },
        accent: "#00B1BD",
        accentdark: "#01757d",
      },
    },
  },
  plugins: [],
};
