const micro = require('micro')
const {parse} = require('url')
const {join} = require('path')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const {matchSearchRoute, queryFromUrlParam} = require('./utils/misc')

const server = micro(async (req, res) => {
  // WARNING WARNING WARNING WARNING WARNING WARNING WARNING
  // This prevents search engines from indexing anything except for the production instance
  if (req.headers.host !== 'glutenproject.com') {
    res.setHeader('x-robots-tag', 'noindex, nofollow')
  }
  // WARNING WARNING WARNING WARNING WARNING WARNING WARNING

  const parsedUrl = parse(req.url, true)
  const {pathname, query} = parsedUrl

  const searchRoute = matchSearchRoute(pathname)
  if (searchRoute) {
    query.ssr = true
    query.q = queryFromUrlParam(searchRoute.searchParam)
    return app.render(req, res, '/search', query)
  }

  const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
  if (rootStaticFiles.indexOf(pathname) > -1) {
    const path = join(__dirname, 'static', pathname)
    return app.serveStatic(req, res, path)
  }

  return handle(req, res, parsedUrl)
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port}`)
  })
})
