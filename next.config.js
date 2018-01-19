// Fix uglify solution from https://github.com/zeit/next.js/pull/3150#issuecomment-346755136
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  webpack: config => {
    for (let index = 0; index < config.plugins.length; index += 1) {
      if (config.plugins[index].constructor.name === 'UglifyJsPlugin') {
        // Delete the UglifyJS plugin
        // And add uglify-es plugin (https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
        config.plugins.splice(
          index,
          1,
          new UglifyJSPlugin({
            sourceMap: false,
            parallel: true,
          })
        )
        break
      }
    }
    return config
  },
}

// module.exports = {
//   webpack: (config, {buildId, dev}) => {
//     // Perform customizations to webpack config
//
//     // Important: return the modified config
//     return config
//   },
//   webpackDevMiddleware: config => {
//     // Perform customizations to webpack dev middleware config
//
//     // Important: return the modified config
//     return config
//   },
// }
