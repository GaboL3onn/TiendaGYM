module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,json,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};