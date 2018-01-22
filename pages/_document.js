// @flow
import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

injectGlobal`
  body {
    background: #F9F9F9;
    -webkit-text-size-adjust: 100%;
  }

  * {
    font-family: prenton, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  mark {
    background: none;
    color: black;
    font-weight: 500;
    letter-spacing: -0.05ex;
  }

  .fullscreen {
    min-height: 100vh;
    overflow: hidden;
  }

  @media (min-width: 800px) and (min-height: 800px) {
    .fullscreen {
      height: 100vh;
    }
  }
`

export default class MyDocument extends Document {
  static getInitialProps({renderPage}: {renderPage: any => any}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="https://use.typekit.net/eom3pqo.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
