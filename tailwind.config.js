/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gris': '#F6F5F4',
      'azul': '#0069ff',
      'gris-oscuro': '#d1d5db',
      'hover-button' : '#292929',
    },
    fontFamily: {
      'body': ['"Montserrat"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

