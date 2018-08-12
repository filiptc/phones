const { Config } = require('webpack-config');
const { ModuleConcatenationPlugin } = require('webpack').optimize;
const path = require('path');

function getLibraryTarget(serverOnly) {
  const output = {};
  if (!serverOnly) {
    output.libraryTarget = 'umd';
  }
  return output;
}

module.exports = ({ clientOnly = false, serverOnly = false } = {}) =>
  new Config().extend('buildconfig/webpack/webpack.base.config.js').merge({
    output: {
      path: path.resolve(__dirname, '../../bin'),
      filename: '[name].js',
      ...getLibraryTarget(serverOnly)
    },
    mode: 'production',
    plugins: [new ModuleConcatenationPlugin()]
  });
