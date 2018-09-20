let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    background: path.join(__dirname, 'src', 'js', 'background.js'),
    content: path.join(__dirname, 'src', 'js', 'content.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
};
