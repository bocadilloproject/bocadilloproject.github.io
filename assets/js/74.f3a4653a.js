(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{493:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),e("Badge",{attrs:{type:"warn",text:"Experimental"}}),t._v(" "),e("p",[t._v("Bocadillo middleware is a lightweight system to plug into the processing of requests and responses.")]),t._v(" "),e("p",[t._v("It comes in two flavors:")]),t._v(" "),e("ul",[e("li",[t._v("HTTP middleware: higher-level, but specific to HTTP endpoints.")]),t._v(" "),e("li",[t._v("ASGI middleware: lower-level, but applied to both HTTP and Websocket endpoints.")])]),t._v(" "),e("h2",{attrs:{id:"the-middleware-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-middleware-stack","aria-hidden":"true"}},[t._v("#")]),t._v(" The middleware stack")]),t._v(" "),e("p",[t._v("When a middleware class is registered, it "),e("strong",[t._v("wraps")]),t._v(" the already registered middleware.")]),t._v(" "),e("p",[t._v("Because of this, it is convenient to think of middleware as being organized in "),e("strong",[t._v("layers")]),t._v(". Each middleware has an "),e("strong",[t._v("outer middleware")]),t._v(" and an "),e("strong",[t._v("inner middleware")]),t._v(".")]),t._v(" "),e("p",[t._v("What this means is that middleware classes effectively chain the responsibility of dispatching the request down to the router of the application.")]),t._v(" "),e("h2",{attrs:{id:"using-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Using middleware")]),t._v(" "),e("p",[t._v("When given a middleware class, and regardless of its type (HTTP or ASGI), you can register it on an application using "),e("code",[t._v("app.add_middleware()")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SomeMiddleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("All keyword arguments passed to "),e("code",[t._v(".add_middleware()")]),t._v(" get passed to the middleware constructor.")]),t._v(" "),e("h2",{attrs:{id:"default-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Default middleware")]),t._v(" "),e("p",[t._v("The default middleware classes registered on every application are documented in the "),e("router-link",{attrs:{to:"/api/middleware.html"}},[t._v("middleware API reference")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"writing-http-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-http-middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing HTTP middleware")]),t._v(" "),e("p",[t._v("HTTP middleware should inherit from "),e("router-link",{attrs:{to:"/api/middleware.html#middleware"}},[e("code",[t._v("Middleware")])]),t._v(", a base class which provides two hooks:")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v(".before_dispatch()")]),t._v(": called before the request is dispatched (i.e. processed by the inner middleware).")]),t._v(" "),e("li",[e("code",[t._v(".after_dispatch()")]),t._v(": called after the request has been dispatched.")])]),t._v(" "),e("p",[t._v("Each hook is given the current "),e("code",[t._v("Request")]),t._v(" and "),e("code",[t._v("Response")]),t._v(" objects, and can alter them as necessary to achieve the desired behavior.")]),t._v(" "),e("p",[t._v('A "do nothing" HTTP middleware looks like this:')]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Middleware\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoOpMiddleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),e("p",[t._v("If the "),e("code",[t._v(".before_dispatch()")]),t._v(" hook returns the "),e("code",[t._v("Response")]),t._v(" object, no further\nprocessing is performed.")]),t._v(" "),e("p",[t._v("For example, this middleware will result in a "),e("code",[t._v("202 Accepted")]),t._v(" response being\nreturned for any request made to the application:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Middleware\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Always202Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])]),e("p",[t._v("If you need the middleware to have some kind of state or configuration, you can override "),e("code",[t._v(".__init__()")]),t._v(" and accept extra parameters:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Middleware\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageMiddleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Don't forget to call `super()`!")]),t._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MESSAGE:"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Example usage:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MessageMiddleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, middleware!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"writing-asgi-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-asgi-middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing ASGI middleware")]),t._v(" "),e("p",[t._v("If you need global behavior that does not only apply to HTTP, you can go bare-metal and use ASGI middleware classes. They are lower-level middleware classes that implement the "),e("a",{attrs:{href:"https://asgi.readthedocs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASGI"),e("OutboundLink")],1),t._v(" protocol directly.")]),t._v(" "),e("p",[t._v("Just like HTTP middleware, an ASGI middleware's "),e("code",[t._v(".__init__()")]),t._v(" method can extra parameters for configuration purposes.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("CHANGED IN 0.15")]),t._v(" "),e("p",[t._v("There is no "),e("code",[t._v("ASGIMiddleware")]),t._v(" base class anymore.")])]),t._v(" "),e("p",[t._v("For example, here is the ASGI equivalent of the HTTP "),e("code",[t._v("MessageMiddleware")]),t._v(" from the previous section:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ASGIMessageMiddleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" send"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MESSAGE:"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" send"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("Here, "),e("code",[t._v("app")]),t._v(" represents the "),e("strong",[t._v("inner ASGI application")]),t._v(" (which is very likely to be another middleware). It does not represent a Bocadillo "),e("code",[t._v("App")]),t._v(" instance.")])]),t._v(" "),e("p",[t._v("Example usage:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ASGIMessageMiddleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, middleware!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),e("p",[t._v("Exceptions raised in middleware (be it HTTP or ASGI middleware) are handled exactly as described in "),e("a",{attrs:{href:"https://bocadilloproject.github.io/guide/errors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Error handling (Essentials)"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("In particular, this means you can raise exceptions such as "),e("code",[t._v("HTTPError")]),t._v(" in the "),e("code",[t._v(".before_dispatch()")]),t._v(" or "),e("code",[t._v(".after_dispatch()")]),t._v(" methods or an HTTP middleware, or in the "),e("code",[t._v(".__call__()")]),t._v(" method or an ASGI middleware.")])],1)},[],!1,null,null,null);a.default=n.exports}}]);