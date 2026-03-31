/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
      white: {
        DEFAULT: "#FFFFFF",
        100: "#fafafa",
        200: "FE8C00",
      },
      gray: {
        DEFAULT: "#808080",
        100: "#878787",
        200: "#878787",
      },
      dark: {
        100: "#181C2E"
      },
      error: "#F14141",
      success: "#4BB543",
     },
     fontFamily: {
      quicksand: ["Quicksand-Regular", "sans-serif"],
      "quicksandBold": ["Quicksand-Bold", "sans-serif"],
      "quicksandSemiBold": ["Quicksand-SemiBold", "sans-serif"],
      "quicksand-light": ["Quicksand-Light", "sans-serif"],
      "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
    },
  },
},
  plugins: [],
}

