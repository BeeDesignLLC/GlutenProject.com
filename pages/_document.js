// @flow
import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'
import theme from '../theme'
import TrackingScripts from '../components/TrackingScripts'

// THIS IS FOR PREVENT SCROLL ON TAP
// html,body{
// 	-webkit-overflow-scrolling : touch !important;
// 	overflow: auto !important;
// 	height: 100% !important;
// }

injectGlobal`
  body {
    background: #F9F9F9;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    font-family: prenton, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    vertical-align: baseline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  [tabindex], a, area, button, input, label, select, summary, textarea {
    touch-action: manipulation;
  }

  .screen-reader-text {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  mark {
    background: none;
    color: black;
    font-weight: 500;
    letter-spacing: -0.05ex;
  }

  [role="button"], button {
    cursor: pointer;
  }

  .fullscreen {
    min-height: 100vh;
    overflow: hidden;
  }


  @media (max-width: ${theme.breakpoints[0]}) {
    .mobile-hide {
			display: none;
		}
	}
`

export default class MyDocument extends Document {
  static getInitialProps({req, renderPage}: {req: Object, renderPage: any => any}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    const production = req ? req.headers.host === 'glutenproject.com' : false
    return {...page, styleTags, production}
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="The Gluten Project is the first and only place to search through the entire list of certified gluten free products."
          />
          <meta
            itemProp="image"
            content="https://glutenproject.com/static/og-image.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://glutenproject.com" />
          <meta property="og:type" content="website" />
          {/* og:title is set in Layout */}
          <meta
            property="og:description"
            content="The Gluten Project is the first and only place to search through the entire list of certified gluten free products."
          />
          <meta
            property="og:image"
            content="https://glutenproject.com/static/og-image.png"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* twitter:title is set in Layout */}
          <meta
            name="twitter:description"
            content="The Gluten Project is the first and only place to search through the entire list of certified gluten free products."
          />
          <meta
            name="twitter:image"
            content="https://glutenproject.com/static/og-image.png"
          />

          <link rel="stylesheet" href="https://use.typekit.net/eom3pqo.css" />
          {this.props.styleTags}

          <TrackingScripts production={this.props.production} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
