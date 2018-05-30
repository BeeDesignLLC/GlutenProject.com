//@flow
import * as React from 'react'

const GoogleAnalyticsScript = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107144503-2" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
					setTimeout(function() {
						window.dataLayer = window.dataLayer || [];
						window.gtag = function (){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-107144503-2');
					}, 0);
				`,
      }}
    />
  </>
)

const IntercomScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/s97lyn5h';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
    }}
  />
)

type Props = {
  production: boolean,
}

const TrackingScripts = ({production}: Props) =>
  production ? (
    <>
      <IntercomScript />
      <GoogleAnalyticsScript />
    </>
  ) : null

export default TrackingScripts
