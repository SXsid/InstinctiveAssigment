/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "greybg":"#EEEEEE",
        "greytext":" #6F767E",
        "customBlue":"#05162E",
        "greySelect":'#3F526E',
        "selectBG":"#E9EDF1",
        "greyDivide":"EAEAEA",
        "greyCourse":"#F6f8FA",

        "customBlack":"#0A0A0A"

    },},
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

