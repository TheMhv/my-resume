/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      success: "var(--color-success)",
      danger: "var(--color-danger)",
      warning: "var(--color-warning)",
      info: "var(--color-info)",
      light: "var(--color-light)",
      dark: "var(--color-dark)",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
