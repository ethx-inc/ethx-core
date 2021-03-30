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
        '1/4' : '25%'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }