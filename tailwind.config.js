/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1920px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-width": {
          width: "calc(100% - 60px)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
