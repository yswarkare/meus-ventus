const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "postcss-loader"],
			},
			{
				test: /\.js?$/,
				use: ["babel-loader", "astroturf/loader"],
			},
		],
	},
	plugins: [
		require("postcss-import"),
		require('autoprefixer'),
		require("tailwindcss"),
		...(process.env.NODE_ENV === "production" ? [purgecss] : [""]),
	],
};
