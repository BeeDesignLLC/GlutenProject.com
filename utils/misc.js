const route = require('path-match')()
const matchSearchRoute = route('/certified-gluten-free-:searchParam')

const urlForQuery = query => {
  const normalizedQuery = query
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-')

  return `/certified-gluten-free-${normalizedQuery}`
}

const queryFromUrlParam = q => q && q.split('-').join(' ')

const queryFromUrl = url => {
  const params = matchSearchRoute(url)
  if (params) {
    return queryFromUrlParam(params.searchParam)
  } else {
    return ''
  }
}

module.exports = {
  matchSearchRoute,
  urlForQuery,
  queryFromUrlParam,
  queryFromUrl,
}
