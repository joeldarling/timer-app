const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ], //source
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname, //rootpath
    filename: './public/bundle.js' //output filename
  },
  resolve:{
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Nav: 'app/components/nav.jsx'
    },
    extensions: ['', '.js', '.jsx'] //list of file exts webpack should process
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
