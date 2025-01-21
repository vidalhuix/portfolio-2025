/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      primary: {
        DEFAULT: "#001b5e", // Root color
        light: "#d6d3d1",   // Equivalent to stone-400
        dark: "#1f2937",    // Equivalent to gray-800
        darkRed: "#9f1239", // Dark red
      },
      textShadow: {
        text: "0px 0px 5px rgba(0, 0, 0, 0.5)", // Custom text shadow
      },
    },
  },
  plugins: [],
};
