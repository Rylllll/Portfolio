/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',

    },

    height:{
      'custom': '450px',
    },
    width:{
      'custom': '300px',
    },

    

    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'del': ['DELIRIUM NCV', 'sans-serif'],
      'script': ['Dancing Script', 'cursive'],
      'bai': ['Bai Jamjuree', 'sans-serif'],

  },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

