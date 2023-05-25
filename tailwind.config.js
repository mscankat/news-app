/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "10px",
        xxs: "8px",
      },
      spacing: {
        1024: "1024px",
        508: "508px",
        800: "800px",
      },
      colors: {
        // transparent: "transparent",
        // current: "currentColor",
        "side-light": "#15171a",
        "side-light-second": "#232629",
        "side-light-text": "#e4e4e4",
        "side-text-color": "#505256",
        "side-dark": "#0c0f12",
        "side-hover-text": "#989898",
        light: "#eeeff0",
        dark: "#12161b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
