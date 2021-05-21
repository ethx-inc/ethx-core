module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'google', 'prettier'],
	rules: {
		quotes: [2, 'single', { avoidEscape: true }],
	},
};
