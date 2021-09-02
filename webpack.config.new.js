const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const isProp = process.env.NODE_ENV === 'production';
const config = {
  entry: {
    'app': ['./src/main.js'],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  devServer: {
    port: 8070,
    hot: true,
    client: {
      overlay: true,
    },
    open: true
  },
  target: 'web',
  // target: ['web', 'es5'],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),

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

if (!isProp) {
  config.devtool = 'eval-source-map'
}
module.exports = config