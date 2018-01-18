// @flow
import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

injectGlobal`
  body {
    background: #F9F9F9;
    margin: 0;
    font-family: prenton, sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  mark {
    background: none;
    color: black;
    font-weight: 500;
    letter-spacing: -0.05ex;
  }

  .fullscreen, .ais-InstantSearch__root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  div {
    box-sizing: border-box;
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
