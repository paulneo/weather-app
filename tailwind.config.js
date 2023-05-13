/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: '#366396',
        DEFAULT: '#366396',
        dark: '#09113d',
      },
      primary2:{
        light: '#8cbced',
        DEFAULT: '#8cbced',
        dark: '#6f9cde',
      },
      primary3:{
        light: '#c2e1fe',
        DEFAULT: '#c2e1fe',
        dark: '#6f9cde',
      },
      secondary: {
        light: '#ffc93a',
        DEFAULT: '#ffc93a',
        dark: '#ffc938',
      },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '70': '70%',
    },
    
  },
  plugins: [],
}

