const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR  = require('./filePaths').buildDir;
const APP_URL = require('./filePaths').appUrl;

// Files to clean
const filesToClean = [
  'dist',
];

// Our application vendor files
const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-router-dom',
];

// Webpack exports 
module.exports = {
  entry: {
    bundle: `${APP_URL}/index.js`,
    vendor: VENDOR_LIBS,
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_URL}/index.html`,
      filename: `${BUILD_DIR}/index.html`,
    }),
    new CleanWebpackPlugin(filesToClean),
  ],
  devServer: {
    compress: true,
    contentBase: BUILD_DIR,
    historyApiFallback: true
  },
};
