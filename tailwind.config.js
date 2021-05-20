const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: '#D77E5E',
				secondary: '#E0BFBB',
				offWhite: '#EAEAEA',
			},
		},
		minWidth: {
			'1/4': '25%',
			'7r': '7rem',
			'10r': '10rem',
		},
		backgroundImage: theme => ({
			'hero-home': "url('/images/flipped-hero-image.jpg')",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
