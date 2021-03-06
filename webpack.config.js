const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');



module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap": null,
  entry: "./src/index.js",
  // module: {
  //   // loaders: [
  //   //   {
  //   //     test: /\.js?$/,
  //   //     exclude: /(node_modules|bower_components)/,
  //   //     loader: 'babel-loader',
  //   //     query: {
  //   //       presets: ['react', 'es2015', 'stage-0'],
  //   //       plugins:['react=html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
  //   //     }
  //   //   }
  //   // ]
  // },
  output: {
    path: __dirname + "scr/js/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugIn(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
};
