/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      scale: {
        25: "0.25",
        60: "0.6",
      },
      colors: {
        midnight: {
          main: "#0C0C0E",
          dark: "#242426",
          light: "#3D3D3D",
        },
        sea: {
          main: "#38A2DE",
        },
        sun: {
          dark: "#382222",
        },
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
