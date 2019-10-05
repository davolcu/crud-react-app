const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Main entrypoint
  entry: './src/index',

  // Main output into /build as main.js
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'main.js'
  },

  // It adds the typescript extensions to help on the transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
        // Babel loader to transpile the new JS versions
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // Scss extractor and conversor to CSS
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  // Dynamic HTML webpack generator and CSS extractor
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCSSExtractPlugin({
      fileName: 'styles.css'
    })
  ]
};
