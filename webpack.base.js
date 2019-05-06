const slsw = require('serverless-webpack');
const webpack = require('webpack');

module.exports = dirPath => ({
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
  output: {
    libraryTarget: 'commonjs',
    path: dirPath,
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
});
