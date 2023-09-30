/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#191717",
        white: "#F1EFEF",
        red: "#C70039",
      },
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"]
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}