/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        text: "0px 0px 5px rgba(0, 0, 0, 0.5)", // Custom text shadow
      },
    },
  },
  plugins: [],
};
