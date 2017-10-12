// var path = require('path')
// var webpack = require('webpack')
//
// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: 'build.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
// }
//
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

//new
//var path = require('path')
////var utils = require('./utils')
//var webpack = require('webpack')
//////var vueLoaderConfig =require('./vue-loader.conf');
///* require("babel-polyfill");*/
//
//module.exports = {
//  /*entry: './src/main.js',*/
//  entry: ["babel-polyfill",  './src/main.js'],
//  output: {
//    path: path.resolve(__dirname, './dist'),
//    publicPath: '/dist/',
//    filename: 'build.js'
//  },
//
//  module: {
//    rules: [
//      {
//        test: /\.vue$/,
//        loader: 'vue-loader',
//        options: {
//          loaders: {
//
//          },
//
//        }
//      },
//      {
//        test: /\.js$/,
//        loader: 'babel-loader',
//        exclude: /node_modules/,
//       // include:[resolve('src'), resolve('test')]
//      },
////        {
////          test: /\.mp4$/,
////            loader: 'file',
////        },
//      {
//        test: /\.(png|jpg|gif|svg)$/,
//        loader: 'file-loader',
//        options: {
//          name: '[name].[ext]?[hash]'
//        }
//      }
//    ]
//  },
//  resolve: {
//    alias: {
//      'vue$': 'vue/dist/vue.esm.js'
//    }
//  },
//  devServer: {
//    historyApiFallback: true,
//    noInfo: true
//  },
//  performance: {
//    hints: false
//  },
//  devtool: '#eval-source-map',
//      plugins: [
//    new webpack.optimize.UglifyJsPlugin({
//      sourceMap: false,
//      mangle: false
//    })
//  ]
//
//}
//
////if (process.env.NODE_ENV === 'production') {
////  module.exports.devtool = '#source-map'
////  // http://vue-loader.vuejs.org/en/workflow/production.html
////  module.exports.plugins = (module.exports.plugins || []).concat([
////    new webpack.DefinePlugin({
////      'process.env': {
////        NODE_ENV: '"production"'
////      }
////    }),
////    new webpack.optimize.UglifyJsPlugin({
////      sourceMap: true,
////      compress: {
////        warnings: false
////      }
////    }),
////    new webpack.LoaderOptionsPlugin({
////      minimize: true
////    })
////  ])
////}
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: [{
               test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
          }]
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
       },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
//  module.exports.plugins = (module.exports.plugins || []).concat([
//    new webpack.DefinePlugin({
//      'process.env': {
//        NODE_ENV: '"production"'
//      }
//    }),
//    new webpack.optimize.UglifyJsPlugin({
//      sourceMap: true,
//      compress: {
//        warnings: false
//      }
//    }),
//    new webpack.LoaderOptionsPlugin({
//      minimize: true
//    })
//  ])
        new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    // Webpack 1 only - optimize module ids by occurrence count
    new webpack.optimize.OccurrenceOrderPlugin()
}
