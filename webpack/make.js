var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function make(options) {

  var isClient = (options.target === 'web');

  // Init entry point with babel (always)
  var entry = ['babel-polyfill'];

  // Init plugins with provide, define and no errors
  var plugins = [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      __CLIENT__: (options.target === 'web'),
    }),
    new webpack.NoErrorsPlugin(),
  ];

  // For client
  if (isClient) {

    // Add hot middleware
    entry.push('webpack-hot-middleware/client');

    // Add HMRE plugin
    plugins.push(new webpack.HotModuleReplacementPlugin());

  }

  // Add source maps and extract styles
  plugins.push(
    new ExtractTextPlugin('styles.css')
  );

  // Set entry point
  entry.push(options.entry);

  // Styles loader
  var loader = {
    css: 'css-loader?modules&importLoaders=1&localIdentName=[local]',
    babel: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0' + (isClient ? '&presets[]=react-hmre' : ''),
  };

  var config = {
    context: path.join(__dirname, '../'),
    debug: options.debug || true,
    devtool: options.devtool || (isClient ? 'cheap-module-eval-source-map' : 'eval-source-map'),
    target: options.target || 'web',
    entry: entry,
    plugins: plugins,

    output: {
      path: path.join(__dirname, '..', 'build'),
      filename: path.basename(options.entry),
      publicPath: '/',
      libraryTarget: (isClient ? 'var' : 'commonjs2'),
    },

    resolve: {
      modulesDirectories: ['./node_modules', './src/components'],
      extensions: ['', '.js', '.ts', '.tsx', '.css']
    },

    module: {
      loaders:
      [
        {
          test: /\.js/,
          loader: loader.babel,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
          test: /\.tsx?$/,
          loader: `${loader.babel}!ts-loader?silent=true`,
          exclude: /node_modules/
        },
        {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
        }
      ]
    }
  };

  if (!isClient) {
    // Don't import node binary packages
    config.externals = /^[a-z\-0-9]+$/;
  }

  return config;
};
