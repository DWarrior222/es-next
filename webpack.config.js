const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    'app': ['./src/main.js', 'webpack-hot-middleware/client?reload=true'],
  },
  output: {
    filename: '[name].[contenthash].bundle.js'
  },
  devtool: 'eval-source-map',
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin(),

    // 热重载
    new webpack.HotModuleReplacementPlugin(),
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
  }
}