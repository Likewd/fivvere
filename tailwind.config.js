/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "bg1": "linear-gradient(180deg, #032545 0%, #006466 100%)"
      },
      colors: {
        white: "#FFF",
        text1: "#747474",
        text2: "#032545",
 
      },
      fontFamily: {
        poppine: "'Poppins', sans-serif",
      }
      ,
    },
  },
  plugins: [],
}