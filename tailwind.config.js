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
      'pic': '520px',
      'custom': '600px',
      'customs': '550px',
      'bg': '1000px',
      'about': '400px',
  
    },
    width:{
      'custom': '300px',
      'customs': '400px',
    },
    spacing:{
      '18': '5.5rem',
      '17': '5.2rem',
     
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

