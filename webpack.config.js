var webpack = require ('webpack');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery:'jQuery'
  },
  plugins:{
    '$': 'jquery',
    'jQuery': 'jquery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Timer:'app/components/Timer.js',
      Countdown:'app/components/Countdown.js',
      CountdownForm:'app/components/CountdownForm.js',
      Clock:'app/components/Clock.js',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx', '.css']
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
  devtool:'cheap-module-eval-source-map'
};
