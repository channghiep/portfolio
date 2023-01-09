/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background1: "#0A192F",
        background2: "#e0e0e0",
        textcolor: "#58E3C4",
        textcolor2: "#CCD6F6",
        textcolor3: "#8892B0"
      }
    },
    fontFamily:{
      'sans': ["Calibre","Inter","San Francisco","SF Pro Text"],
      'mono': ["SF Mono","Fira Code","Fira Mono","Roboto Mono", "monospace"]
    },
    boxShadow: {
      'neumor1': ["14px 14px 0px #58E3C4",
      "-14px -14px 0px #CCD6F6"]
    }
  },
  plugins: [],
}