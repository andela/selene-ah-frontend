const merge = require('webpack-merge'); // Merge our common and dev config files.
const common = require('./webpack.base');


//SCSS test regex 
const scssTest = /\.scss$/;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: scssTest,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
