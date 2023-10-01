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
        wheat: "#EAD7BB"
      },
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"]
      },
      display: ["group-hover"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}