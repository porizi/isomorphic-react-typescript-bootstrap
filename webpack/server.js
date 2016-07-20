var make = require('./make');

module.exports = make({
  entry: './src/server.tsx',
  target: 'node',
  devtool: 'source-map'
});
