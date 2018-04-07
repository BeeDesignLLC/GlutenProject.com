// @flow
import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'
import t from '../theme'
import TrackingScripts from '../components/TrackingScripts'
import Typekit from '../components/Typekit'

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

  html.wf-active {
    font-family: prenton, sans-serif;
  }
  html:not(.wf-active) {
    font-family: Trebuchet MS, sans-serif;
  }

  * {
    appearance: none;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    vertical-align: baseline;
    font-variant-numeric: proportional-nums;
    font-feature-settings: "pnum";
  }

  a {
    color: inherit;
    text-decoration-skip: edges;
    text-decoration-color: ${t.colors.grays[3]};
	}

  a:hover {
    text-decoration-color: currentColor;
  }

  [tabindex], a, area, button, input, label, select, summary, textarea {
    touch-action: manipulation;
  }
	input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
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
    text-decoration:underline;
  }

  .fullscreen {
    min-height: 100vh;
    overflow: hidden;
  }

  @media (max-width: ${t.breakpoints[0]}) {
    .mobile-hide {
			display: none !important;
		}
	}
  @media (min-width: ${t.breakpoints[0]}) {
    .mobile-show {
			display: none !important;
		}
	}
`

export default class MyDocument extends Document {
  static getInitialProps({
    req,
    renderPage,
    asPath,
  }: {
    req: Object,
    renderPage: any => any,
    asPath: string,
  }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    const production = req ? req.headers.host === 'glutenproject.com' : false
    return {...page, styleTags, production, asPath}
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            itemProp="image"
            content="https://glutenproject.com/static/og-image.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content={'https://glutenproject.com' + this.props.asPath}
          />
          <meta property="og:type" content="website" />
          {/* og:title is set in Layout */}
          <meta
            property="og:image"
            content="https://glutenproject.com/static/og-image.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* twitter:title is set in Layout */}
          <meta
            name="twitter:image"
            content="https://glutenproject.com/static/og-image.png"
          />
          <meta name="twitter:site" content="@glutenprojecthq" />

          {this.props.styleTags}

          <Typekit />
        </Head>
        <body>
          <Main />
          <NextScript />
          <TrackingScripts production={process.env.NODE_ENV === 'production'} />
        </body>
      </html>
    )
  }
}
