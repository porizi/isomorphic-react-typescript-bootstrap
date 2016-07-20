var make = require('./make');

module.exports = make({
  entry: './src/client.tsx',
  target: 'web'
});
