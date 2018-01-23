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
          <meta
            name="description"
            content="The Gluten Project is the first and only place to search through the entire list of certified gluten free products."
          />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

          <link rel="stylesheet" href="https://use.typekit.net/eom3pqo.css" />
          {this.props.styleTags}

          {/* START INTERCOM SCRIPT */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/s97lyn5h';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
            }}
          />
          {/* END INTERCOM SCRIPT */}

          {/* START Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-107144503-2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-107144503-2');
`,
            }}
          />
          {/* END Global site tag (gtag.js) - Google Analytics */}

          {/* START Hotjar Tracking Code for glutenproject.com */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:756025,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
            }}
          />
          {/* END Hotjar Tracking Code for glutenproject.com */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
