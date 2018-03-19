const micro = require('micro')
const {parse} = require('url')
const {join} = require('path')
const next = require('next')
const raven = require('./lib/raven')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const {matchSearchRoute, matchProductRoute, queryFromUrlParam} = require('./utils/misc')

const handleErrors = fn => async (req, res) => {
  try {
    return await fn(req, res)
  } catch (err) {
    raven.captureException(err, {req})
    return micro.send(
      res,
      500,
      'On snap! This Gluten Project robot has suffered a heart attack! The founders have been notified and will investigate ASAP.'
    )
  }
}

const server = micro(
  handleErrors(async (req, res) => {
    // WARNING WARNING WARNING WARNING WARNING WARNING WARNING
    // This prevents search engines from indexing anything except for the production instance
    if (req.headers.host !== 'tgp-front.now.sh') {
      res.setHeader('x-robots-tag', 'noindex, nofollow')
    }
    // WARNING WARNING WARNING WARNING WARNING WARNING WARNING

    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl

    if (pathname === '/product') {
      res.setHeader('Location', '/')
      return micro.send(res, 301)
    }

    const searchRoute = matchSearchRoute(pathname)
    if (searchRoute) {
      query.ssr = true
      query.q = queryFromUrlParam(searchRoute.searchParam)
      return app.render(req, res, '/search', query)
    }

    const productRoute = matchProductRoute(pathname)
    if (productRoute) {
      query.ssr = true
      query.slug = productRoute.slug
      return app.render(req, res, '/product', query)
    }

    // TODO TODO TODO TODO TODO - prevent '/product' page from loading

    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
    if (rootStaticFiles.indexOf(pathname) > -1) {
      const path = join(__dirname, 'static', pathname)
      return app.serveStatic(req, res, path)
    }

    return handle(req, res, parsedUrl)
  })
)

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port}`)
  })
})
