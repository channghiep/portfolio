/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // background1: "#0A192F",
        background1: "#0D0D4f",
        background2: "#e0e0e0",
        background3: "#0D0D5A",
        // textcolor: "#58E3C4",
        textcolor: "#FFD400",
        // textcolor2: "#CCD6F6",
        textcolor2: "#FCFFFC",
        textcolor3: "#8892B0",
        // textcolor3: "#858786"
      }
    },
    fontFamily:{
      'sans': ["Calibre","Montserrat","San Francisco","SF Pro Text"],
      'mono': ["SF Mono","Fira Code","Fira Mono","Roboto Mono", "monospace"]
    },
    boxShadow: {
      'neumor1': ["20px 20px 35px #8892B0",
      "-20px -20px 35px #CCD6F6"]
    },
    backgroundImage: {
      'profile-pic': "url('../src/assets/profile.jpg')"
    }
  },
  plugins: [],
}
