/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617;",
        secondary: "#0F172A",
        text1: "#F8FAFC",
        text2: "#94a3b8",
        border: "#334155",
        blue: "#2563eb",
        hover: "#172554",
      },
      screens: {
        "max-xxxl": { max: "1300px" },
        "max-xxl": { max: "900px" },
        "max-xl": { max: "800px" },
        "max-l": { max: "700px" },
        "max-sd": { max: "700px" },
      },
    },
  },
  plugins: [],
};
