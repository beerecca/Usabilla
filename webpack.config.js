"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HOST = process.env.HOST || "127.0.0.1";
var PORT = process.env.PORT || "8888";

//Not including ExtractTextPlugin in dev config to allow for hot module reloading of styles
loaders.push({
	test: /[\/\\]src[\/\\].*\.scss/,
	loaders: [
		'style?sourceMap',
		'css',
		'sass'
	]
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://' + HOST + ':' + PORT,
		'webpack/hot/only-dev-server',
		'./src/app.js' //Appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: [
					'node_modules',
					'bower_components'
				],
				loader: 'eslint-loader'
			}
		],
		loaders: loaders
	},
	devServer: {
		contentBase: "./dist",
		//Do not print bundle build stats to console
		noInfo: true,
		//Enable hot module reloading
		hot: true,
		//Embed the webpack-dev-server runtime into the bundle
		inline: true,
		//Serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
