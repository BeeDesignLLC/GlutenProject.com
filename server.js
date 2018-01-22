const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
const pathMatch = require('path-match')
const titleize = require('titleize')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/certified-gluten-free-:ssrSearchQuery')

app.prepare().then(() => {
  createServer((req, res) => {
    // WARNING WARNING WARNING WARNING WARNING WARNING WARNING
    // This prevents search engines from indexing anything except for the production instance
    if (req.headers.host !== 'glutenproject.com') {
      res.setHeader('x-robots-tag', 'noindex, nofollow')
    }
    // WARNING WARNING WARNING WARNING WARNING WARNING WARNING

    const {pathname, query} = parse(req.url, true)
    const params = match(pathname)

    if (params === false) {
      handle(req, res)
      return
    }
    if (params.ssrSearchQuery) {
      params.ssrSearchQuery = titleize(params.ssrSearchQuery.split('-').join(' '))
    }
    app.render(req, res, '/', Object.assign(params, query))
  }).listen(port, err => {
    if (err) throw err
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port}`)
  })
})
