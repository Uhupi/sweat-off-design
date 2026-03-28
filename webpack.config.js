const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = (_, argv) => {
  const isDev = argv.mode === 'development';
  return {
    devtool: isDev ? 'source-map' : false,
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
          use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false, sourceMap: isDev } }, { loader: 'sass-loader', options: { sourceMap: isDev } }],
        },
      ],
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
  };
};
