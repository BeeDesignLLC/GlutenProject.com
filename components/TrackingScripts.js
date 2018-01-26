//@flow
import * as React from 'react'

const TrackJsScript = () => (
  <React.Fragment>
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window._trackJs = { token: '0c9abe494614451c9fa2161acfbbb8db' };`,
      }}
    />
    <script
      type="text/javascript"
      src="https://cdn.trackjs.com/releases/current/tracker.js"
    />
  </React.Fragment>
)

const GoogleAnalyticsScript = () => (
  <React.Fragment>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107144503-2" />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-107144503-2');
`,
      }}
    />
  </React.Fragment>
)

const IntercomScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/s97lyn5h';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
    }}
  />
)

const HotJarScript = () => (
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
)

type Props = {
  production: boolean,
}

const TrackingScripts = ({production}: Props) =>
  production ? (
    <React.Fragment>
      <TrackJsScript />
      <IntercomScript />
      <GoogleAnalyticsScript />
      <HotJarScript />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <IntercomScript />
    </React.Fragment>
  )

export default TrackingScripts
