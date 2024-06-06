const collections = require('./src/config/collections.js')

module.exports = function (config) {
  Object.keys(collections).forEach(collectionType => {
    config.addCollection(collectionType, collections[collectionType])
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
      layouts: 'templates',
      includes: 'components'
    },
    templateFormats: ['md', 'html', 'njk']
  }
}