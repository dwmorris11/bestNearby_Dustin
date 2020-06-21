const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/ || /\.js?$/,
        exclude: [
          path.resolve(__dirname, './node_modules'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env", "@babel/preset-react'],
        },
      },
    ],
  },
};
