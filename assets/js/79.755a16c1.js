(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{447:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responses","aria-hidden":"true"}},[t._v("#")]),t._v(" Responses")]),t._v(" "),a("p",[t._v("Bocadillo passes the request and the response objects to each HTTP view. This means that the idiomatic way of sending a response is to mutate the "),a("code",[t._v("res")]),t._v(" object directly. To learn more about this design decision, see the "),a("router-link",{attrs:{to:"/faq.html#why-pass-the-request-and-response-around-everywhere"}},[t._v("FAQ")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"sending-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-content","aria-hidden":"true"}},[t._v("#")]),t._v(" Sending content")]),t._v(" "),a("p",[t._v("Bocadillo has built-in support for common types of responses:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My awesome post"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# application/json")]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My awesome post"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# text/plain")]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<h1>My awesome post</h1>"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# text/html")]),t._v("\n")])])]),a("p",[t._v("Setting one of the above attributes automatically sets the\nappropriate "),a("code",[t._v("Content-Type")]),t._v(" header (as shown in comments above).")]),t._v(" "),a("p",[t._v("If you need to send another content type, use "),a("code",[t._v(".content")]),t._v(" and set\nthe "),a("code",[t._v("Content-Type")]),t._v(" header yourself:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1 { color; gold; }"')]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/css"')]),t._v("\n")])])]),a("h2",{attrs:{id:"status-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Status codes")]),t._v(" "),a("p",[t._v("You can set the HTTP status code of the response using "),a("code",[t._v("res.status_code")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/jobs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Bocadillo does not provide an enum of HTTP status codes. If you prefer to\nuse one, you can use "),a("a",{attrs:{href:"https://github.com/encode/starlette/blob/master/starlette/status.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starlette's "),a("code",[t._v("status")]),t._v(" module"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" starlette "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" status\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTP_201_CREATED\n")])])])]),t._v(" "),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("p",[t._v("You can access and modify the headers of a response using "),a("code",[t._v("res.headers")]),t._v(". It is\na standard (but case-insensitive) Python dictionary object:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cache-control"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),t._v("\n")])])]),a("h2",{attrs:{id:"streaming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streaming","aria-hidden":"true"}},[t._v("#")]),t._v(" Streaming")]),t._v(" "),a("p",[t._v("Similar to "),a("router-link",{attrs:{to:"/guide/requests.html#streaming"}},[t._v("request streaming")]),t._v(", response content can be streamed to prevent loading the full (and potentially large) response body into memory. An example use case may be streaming the results of a massive database query over the wire.")],1),t._v(" "),a("p",[t._v("A stream response can be defined by decorating a no-argument "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0525/#asynchronous-generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("asynchronous generator function"),a("OutboundLink")],1),t._v(" with "),a("code",[t._v("@res.stream")]),t._v(". The generator returned by that function will be used to compose the full response. It should only yield "),a("strong",[t._v("strings or bytes")]),t._v(".")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_numers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" num\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This sleep can represent a db query")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or network call.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/range/{n}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("number_range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    @res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("large_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" get_numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("A stream response is not chunk-encoded by default, which means that clients will still receive the response in one piece. To send the response in chunks, see "),a("a",{attrs:{href:"#chunked-responses"}},[t._v("Chunked responses")]),t._v(".")])]),t._v(" "),a("p",[t._v("If the client disconnects and we "),a("code",[t._v("yield")]),t._v(" another chunk, then the stream is stopped and no further action is taken.")]),t._v(" "),a("p",[t._v("If you need to react to client disconnections (e.g. to perform extra cleanup), you can pass "),a("code",[t._v("raise_on_disconnect=True")]),t._v(" to "),a("code",[t._v("@res.stream")]),t._v(" and handle the "),a("code",[t._v("ClientDisconnect")]),t._v(" exception:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bocadillo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ClientDisconnect\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/range/{n}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("number_range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    @res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raise_on_disconnect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("large_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" get_numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ClientDisconnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cleaning up numbers…"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"chunked-responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunked-responses","aria-hidden":"true"}},[t._v("#")]),t._v(" Chunked responses")]),t._v(" "),a("p",[t._v("The HTTP/1.1 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transfer-Encoding"),a("OutboundLink")],1),t._v(" header allows to send an HTTP response in chunks.")]),t._v(" "),a("p",[t._v("This is useful to send large responses, or when the response's total size cannot be known until processing is finished. Plus, it allows the client to process the results as soon as possible.")]),t._v(" "),a("p",[t._v("This is typically combined with "),a("a",{attrs:{href:"#streaming"}},[t._v("response streaming")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chunked "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# equivalent to:")]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transfer-encoding"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chunked"')]),t._v("\n")])])]),a("h2",{attrs:{id:"attachments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attachments","aria-hidden":"true"}},[t._v("#")]),t._v(" Attachments")]),t._v(" "),a("p",[t._v("If you want to tell the client's browser that the response should be downloaded to a file, set "),a("code",[t._v("res.attachment")]),t._v(" and the "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Disposition"),a("OutboundLink")],1),t._v(" header will be set for you.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send_hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, there!"')]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello.txt"')]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[a("code",[t._v("res.attachment")]),t._v(" does "),a("strong",[t._v("not")]),t._v(" read any files — see "),a("a",{attrs:{href:"#file-responses"}},[t._v("File responses")]),t._v(" for this purpose.")]),t._v(" "),a("p",[t._v("All it does is set the "),a("code",[t._v("Content-Disposition")]),t._v(" header, e.g. "),a("code",[t._v("attachment; filename='hello.txt'")]),t._v(" for the example above.")])]),t._v(" "),a("h2",{attrs:{id:"file-responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-responses","aria-hidden":"true"}},[t._v("#")]),t._v(" File responses")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENTS")]),t._v(" "),a("p",[t._v("This feature requires that you install Bocadillo with the "),a("code",[t._v("files")]),t._v(" extra, e.g.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bocadillo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("Sometimes, the response should be populated from a file that is not a "),a("router-link",{attrs:{to:"/guide/static-files.html"}},[t._v("static file")]),t._v(". For example, it may have been generated or uploaded to the server.")],1),t._v(" "),a("p",[t._v("This can be done with "),a("code",[t._v("res.file()")]),t._v(", a performant helper that will read and send a file "),a("em",[t._v("asynchronously")]),t._v(" in small chunks.")]),t._v(" "),a("p",[t._v("As an example, let's create a sample CSV file containing random data:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csv\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    writer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DictWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fieldnames"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeheader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Here's how we could populate the response with "),a("code",[t._v("random.csv")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/random.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send_csv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Most of the time, files sent like this are meant to be downloaded. For this reason, "),a("code",[t._v("res.file()")]),t._v(" sends the file as an "),a("a",{attrs:{href:"#attachments"}},[t._v("attachment")]),t._v(" by default.")]),t._v(" "),a("p",[t._v("To disable this, pass "),a("code",[t._v("attach=False")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/random.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send_csv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# The file will be sent "inline", i.e. displayed in the browser')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# instead of triggering a download.")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attach"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);