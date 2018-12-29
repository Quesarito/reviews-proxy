module.exports = {
	entry: './client/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'app.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loaders: 'babel-loader',
				options: {
						presets: ['@babel/preset-react']
				}
			}
		]
	},
	watch: true
}