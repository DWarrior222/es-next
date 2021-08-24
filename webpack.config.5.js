const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    'app': ['./src/index.js'],
  },
  output: {
    filename: '[name].[contenthash].bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8070,
    hot: true,
    client: {
      overlay: true,
    },
    open: true
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),

    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: { 
          loader: 'babel-loader',
        } 
      }
    ]
  },
  mode: 'development'
}