const webpack = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const entry = [
  './app/index.js'
];

if (isDevelopment) {
  entry.unshift('webpack-hot-middleware/client?reload=true');
}

const config = {
  entry,
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

module.exports = config;
