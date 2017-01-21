var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: [/node_modules/,/dist/], loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader" }

		]
	},
	plugins: [HtmlWebpackPluginConfig],
	devtool: 'source-map'
};