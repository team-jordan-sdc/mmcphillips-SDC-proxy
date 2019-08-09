var path = require('path');

//var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  //entry: `${SRC_DIR}/index.jsx`,
  entry: {
    vendor: ['styled-components'],
    // featured: '../FeaturedFilm/client/src/index.jsx'
    // cast: '../cast-and-crew/client/src/index.js',
    // review: '../reviews/client/src/index.jsx',
  },
  output: {
    filename: '[name]bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        }
      }
    }
  },
  resolve: {
    alias: {
       'styled-components': path.resolve('./node_modules/styled-components')
    }
  }
};