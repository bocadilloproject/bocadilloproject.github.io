(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{463:function(e,t,a){"use strict";a.r(t);var o=a(6),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontend-frameworks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontend-frameworks","aria-hidden":"true"}},[e._v("#")]),e._v(" Frontend frameworks")]),e._v(" "),a("p",[e._v("Modern web applications typically consist of a "),a("em",[e._v("backend")]),e._v(" and a "),a("em",[e._v("frontend")]),e._v(". Bocadillo is a backend framework, but it's dead simple to integrate with modern frontend JavaScript frameworks.")]),e._v(" "),a("h2",{attrs:{id:"guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines","aria-hidden":"true"}},[e._v("#")]),e._v(" Guidelines")]),e._v(" "),a("p",[e._v("Frontend frameworks generally have their own development tooling, including command line tools, hot reload, etc. Based on this assumption, here are some recommendations:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("In development")]),e._v(": run 2 separate servers — one for Bocadillo, one for the frontend.")]),e._v(" "),a("li",[a("strong",[e._v("In production")]),e._v(", either:\n"),a("ul",[a("li",[e._v("Serve the frontend build with Bocadillo. This may be enough for smaller-scale setups, and as shown in the "),a("a",{attrs:{href:"https://github.com/bocadilloproject/react-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-example"),a("OutboundLink")],1),e._v(" repo, this can be achieved by:\n"),a("ol",[a("li",[e._v("Mounting the build directory as an "),a("router-link",{attrs:{to:"/guide/static-files.html#extra-static-files-directories"}},[e._v("extra static files directory")]),e._v(".")],1),e._v(" "),a("li",[e._v("Serving the main "),a("code",[e._v("index.html")]),e._v(" using "),a("router-link",{attrs:{to:"/guide/templates.html"}},[e._v("templates")]),e._v(".")],1)])]),e._v(" "),a("li",[a("strong",[e._v("(Recommended)")]),e._v(" Deploy Bocadillo and the frontend on two separate hosts. See also "),a("router-link",{attrs:{to:"/discussions/deployment.html"}},[e._v("Deployment")]),e._v(" for general hints on deploying Bocadillo applications. For the frontend, please refer to your framework's instructions.")],1)])])]),e._v(" "),a("h2",{attrs:{id:"example-repos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-repos","aria-hidden":"true"}},[e._v("#")]),e._v(" Example repos")]),e._v(" "),a("p",[e._v("The following example repos show how to get a "),a("strong",[e._v("development setup")]),e._v(" ready for your Bocadillo and frontend apps. Feel free to check them out, fork them, and hack them away! 🚀")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Frontend framework")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Repository")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("React")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/bocadilloproject/react-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-example"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Hello world example, with GraphQL setup.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Vue.js")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/bocadilloproject/vue-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-example"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("URL Shortener web app, with database setup.")])])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("CONTRIBUTING")]),e._v(" "),a("p",[e._v("Missing your favorite framework? Discuss it with us by "),a("open-issue",{attrs:{text:"opening an issue"}}),e._v(". We'd be glad to setup and work together on additional official example repos.")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);