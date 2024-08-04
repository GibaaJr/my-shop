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
      },
      dropShadow: {
        'myshop-shadow': '0 0 5px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.parent >*': {
          '@apply flex-1 basis-72': {}
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}