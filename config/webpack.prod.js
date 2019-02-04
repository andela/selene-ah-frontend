const merge = require('webpack-merge'); // Merge our base and dev config files.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    }),
    new OptimizeCssAssetsPlugin({}),
    uglifyJS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.SERVER_API': JSON.stringify('https://selene-ah-staging.herokuapp.com/api/v1'),
      'process.env.GOOGLE_URL':JSON.stringify('https://selene-ah-staging.herokuapp.com/api/v1/auth/google'),
      'process.env.FACEBOOK_URL': JSON.stringify('https://selene-ah-staging.herokuapp.com/api/v1/auth/facebook'),
      'process.env.TWITTER_URL':JSON.stringify('https://selene-ah-staging.herokuapp.com/api/v1/auth/twitter'),
      'process.env.BASE_URL': JSON.stringify('https://selene-ah-staging.herokuapp.com/api/v1/auth/'),
      'process.env.CLOUDINARY_API_BASE_URL': JSON.stringify('https://api.cloudinary.com/v1_1/dsozu5ads/upload'),
      'process.env.CLOUDINARY_UPLOAD_PRESET': JSON.stringify('zklk2cjx'),
      'process.env.FRONTEND_API': JSON.stringify('https://selene-front-production.herokuapp.com')
    }),
  ],
});
