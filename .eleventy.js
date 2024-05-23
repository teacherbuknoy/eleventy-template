module.exports = function (config) {
  config.addCollection('blogs', collections => {
    return collections.getFilteredByGlob([
      'src/blogs/*.md'
    ])
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
      layouts: 'templates'
    },
    templateFormats: ['md', 'html', 'njk']
  }
}