// @flow
// DISCUSSION: https://github.com/zeit/next.js/issues/1852
// Isomorphic import due to 'browser' key in package.json
const Raven = require('raven')

const SENTRY_DSN_PUBLIC = 'https://8168f950f037468daca345037049b424@sentry.io/300737'

const ignoreOptions = {
  ignoreErrors: [
    // Random plugins/extensions
    'top.GLOBALS',
    // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
    'originalCreateNotification',
    'canvas.contentDocument',
    'MyApp_RemoveAllHighlights',
    'http://tt.epicplay.com',
    "Can't find variable: ZiteReader",
    'jigsaw is not defined',
    'ComboSearch is not defined',
    'http://loading.retry.widdit.com/',
    'atomicFindClose',
    // Facebook borked
    'fb_xd_fragment',
    // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to reduce this. (thanks @acdha)
    // See http://stackoverflow.com/questions/4113268/how-to-stop-javascript-injection-from-vodafone-proxy
    'bmi_SafeAddOnload',
    'EBCallBackMessageReceived',
    // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
    'conduitPage',
  ],
  ignoreUrls: [
    // Facebook flakiness
    /graph\.facebook\.com/i,
    // Facebook blocked
    /connect\.facebook\.net\/en_US\/all\.js/i,
    // Woopra flakiness
    /eatdifferent\.com\.woopra-ns\.com/i,
    /static\.woopra\.com\/js\/woopra\.js/i,
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Other plugins
    /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
    /webappstoolbarba\.texthelp\.com\//i,
    /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
  ],
}

let options
let sentryDsn
const baseOptions = {}

if (process.browser === true) {
  sentryDsn = SENTRY_DSN_PUBLIC
  options = {
    ...baseOptions,
    ...ignoreOptions,
    logger: 'client',
  }
} else {
  sentryDsn = process.env.SENTRY_DSN
  options = {
    ...baseOptions,
    logger: 'server',
    name: process.env.NOW_URL,
  }
}

Raven.config(sentryDsn, options).install()

// if (process.env.NODE_ENV === 'production') {
// }

module.exports = Raven
