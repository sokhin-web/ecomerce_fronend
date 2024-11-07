/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" }, // Applies up to 640px
        tablet: { max: "847px" }, // Applies up to
        laptop: { max: "1024px" }, // Applies up to 1024px
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        left: "translateX(-10px)",
      },
    },
  },
  plugins: [],
};
