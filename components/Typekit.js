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
					var req = new XMLHttpRequest()
					req.addEventListener("load", function () {
						window.localStorage._tk_cache = this.responseText;
					});
					req.open("GET", "https://use.typekit.net/eom3pqo.js");
					req.send();
				};
			`,
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
					var ts = document.createElement('script');
					ts.src = "https://use.typekit.net/eom3pqo.js";
          ts.async = true;
					ts.onload = function() { Typekit.load({ async: true, loading: window._tk_onload }); };
					document.head.appendChild(ts);
				`,
      }}
    />
  </React.Fragment>
)
