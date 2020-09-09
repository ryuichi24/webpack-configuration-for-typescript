const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: path.resolve('.env') });

module.exports = {
  entry: path.resolve('src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve('src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
};
