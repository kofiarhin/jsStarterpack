const path = require("path");

const htmlPlugin = require("html-webpack-plugin");

const miniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {


	entry:['babel-polyfill', './src/js/index.js' ],

	output: {

		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'

	},


	devServer: {

		contentBase: "./dist"
	},

	plugins: [

		new htmlPlugin({

			filename: 'index.html',
			template: './src/index.html'

		}),

		new miniCssExtractPlugin({

			filename: "[name].css",
			chunkFilename: "[id].css"
		})


	],

	module: {


		rules: [


			{

				test: /\.js$/,
				exclude: /node_modules/,
				use: {

					loader: "babel-loader"
				}
			},
			{
				test: /\.sass$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},

		]


	}
}
