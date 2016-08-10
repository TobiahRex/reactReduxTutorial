import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

// pass it the compiled webpack.config dev file.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// because we only have a singlepage app, we'll send index.html for all requests.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${PORT}`);
  }
});
