//@flow
import * as React from 'react'

export default () => (
  <React.Fragment>
    <script
      dangerouslySetInnerHTML={{
        __html: `
					if (window.localStorage && window.localStorage._tk_cache) {
						document.documentElement.classList.add('wf-active');
						var script = document.createElement('script');
						script.innerHTML = localStorage._tk_cache + ";(function () {var timeout = setTimeout(function () {document.documentElement.classList.remove('wf-active');}, 300); Typekit.load({ async: false, active: function () { clearTimeout(timeout); }});})();";
						document.head.appendChild(script);
					}
					window._tk_onload = function () {
						setTimeout(function () {
							//Trigger new request so response can be saved to local storage
							var req = new XMLHttpRequest();
							req.addEventListener("load", function () {
								window.localStorage._tk_cache = this.responseText;
							});
							req.open("GET", "https://use.typekit.net/eom3pqo.js");
							req.send();
						}, 3000)
					};
				`,
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
					if (window.localStorage && window.localStorage._tk_cache) {
            // Already have the loader script, so just update the cache copy
            window._tk_onload();
					} else {
						(function(d) {
							var config = {
								kitId: 'eom3pqo',
								scriptTimeout: 3000,
								async: true,
                loading: window._tk_onload
							},
							h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
						})(document);


					}
				`,
      }}
    />
  </React.Fragment>
)
