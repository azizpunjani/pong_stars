const express = require('express');
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');
const app = express();

if (isDevelopment) {
  const config = require('./webpack.config.js');
  const webpack = require('webpack');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function(req, res) {
    res.sendFile(`${publicPath}/index.html`);
  });
} else {
  app.use(express.static('public'));
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
