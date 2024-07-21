/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rocaone: ["Rocaone", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        moontime: ["Moontime", "sans-serif"],
      },
      colors: {
        royalBlue: {
          50: "#e0e0ff",
          100: "#b3b3ff",
          200: "#8080ff",
          300: "#4d4dff",
          400: "#2626ff",
          500: "#312DE6", // Base color
          600: "#1f1fb3",
          700: "#191980",
          800: "#12124d",
          900: "#0b0b26",
        },
        tangerine: "#FF5722",
      },
    },
  },
  plugins: [],
};
