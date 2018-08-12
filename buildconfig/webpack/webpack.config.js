const config = require('webpack-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const { merge } = require('lodash');

config.environment.setAll({ env: () => process.env.NODE_ENV });


function getSpecificConfig(clientOnly, serverOnly) {
  const config = { entry: {} };
  if (!clientOnly) {
    config.entry.server = './server/index.ts';
    config.target = 'node';
    config.externals = [nodeExternals()];
  }
  if (!serverOnly) {
    config.entry.client = './client/index.tsx';
    config.target = 'web';
    config.plugins = [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../../src/client/index.html'),
        inject: 'body',
        hash: true,
      }),
    ];
    config.node = {
      net: 'empty',
      tls: 'empty',
      fs: 'empty'
    };
  }
  return config;
}

module.exports = ({ clientOnly = false, serverOnly = false } = {}) => new config.Config()
  .extend('buildconfig/webpack/webpack.[env].config.js')
  .merge(getSpecificConfig(clientOnly, serverOnly));
