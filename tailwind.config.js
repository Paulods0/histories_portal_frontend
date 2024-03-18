/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        PlayFair: ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        colorGray: {
          light: "#AAAAAA",
          medium: "#272626",
          dark: "#333333",
        },
        colorBlack: {
          light: "#111111",
          dark: "#000000",
        },
        goldenColor: "#C7A770",
      },
    },
  },
  plugins: [],
}
