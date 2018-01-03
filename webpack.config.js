var path = require("path");
var webpack = require('webpack');
var InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./frontend/frequency2.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  plugins: [new InlineEnvironmentVariablesPlugin()],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"],
    alias: {
      webworkify$: 'webworkify-webpack'
    }
  }
};

new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
});
