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
          primary: "#D77E5E"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }