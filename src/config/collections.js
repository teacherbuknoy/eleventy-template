module.exports = {
  blogs: collections => {
    return collections.getFilteredByGlob(['src/blogs/*.md'])
  }
}