/**
 * Created by shun on 12/31/15.
 */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')


module.exports = {
  devtool: 'inline-source-map',
  entry: './src/test',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  plugins: [
	  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
	new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]

}

