module.exports = {
  webpack: config => {
    // Had to add when using algolia SSR
    if (config.resolve.alias) {
      delete config.resolve.alias.react
      delete config.resolve.alias['react-dom']
    }

    return config
  },
}
