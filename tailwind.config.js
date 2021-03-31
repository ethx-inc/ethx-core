const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    darkMode: false,
    theme: {
      extend: {
        colors: {
          primary: "#D77E5E",
          secondary: "#E0BFBB"
        }
      },
      minWidth: {
        '1/4' : '25%',
        '7r' : '7rem',
        '10r' : '10rem'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }