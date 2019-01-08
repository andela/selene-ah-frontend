const merge = require('webpack-merge'); // Merge our base and dev config files.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base');

// SCSS test regex 
const scssTest = /\.scss$/;

const uglifyJS = new UglifyWebpackPlugin({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  cache: true,
  parallel: true,
});

// Webapck exports 
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: scssTest,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [uglifyJS],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: scssTest,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  ],
});
