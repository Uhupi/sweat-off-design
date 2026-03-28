const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './src/main.js',
    styles: './src/styles.scss',
    'styles.mobile': './src/styles.mobile.scss',
    'styles.desktop': './src/styles.desktop.scss',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false, sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }],
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
};
