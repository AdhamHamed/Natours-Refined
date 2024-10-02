const path = require("path");
module.exports = {
	entry: {
		login: [
			"./public/javascripts/login.js",
			"./public/javascripts/alert.js",
			"./public/javascripts/updateSettings.js",
			"./public/javascripts/stripe.js",
		],
	},
	mode: "none",
	output: {
		path: path.resolve(__dirname, "public/javascripts"),
		filename: "bundle.js",
	},
	externals: ["axios"],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
