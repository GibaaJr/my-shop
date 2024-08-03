/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#f7f7f7'
      },
      fontFamily: {
        poppins: ['Poppins'],
        'poppins-light': ['Poppins-ligh'],
        'poppins-medium': ['Poppins-medium'],
        'poppins-semiBold': ['Poppins-semiBold'],
        'poppins-bold': ['Poppins-bold'],
      }
    },
  },
  plugins: [],
}