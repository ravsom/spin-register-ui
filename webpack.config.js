module.exports = {
	entry: './src/public/index.js',

	output: {
		filename: './src/public/dist/bundle.js',
		publicPath: ''
	},

	devtool: 'source-map',

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
		]
	}
};
