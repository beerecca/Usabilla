var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [ExtractTextPlugin.extract('style'), 'css']
});

loaders.push({
	test: /[\/\\]src[\/\\].*\.scss/,
	loaders: [ExtractTextPlugin.extract('style'), 'css', 'sass']
});

module.exports = {
	entry: [
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('app.css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
