(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{454:function(t,e,a){"use strict";a.r(e);var r=a(6),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"error-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),a("p",[t._v("Sometimes, things go wrong. The resource the client requested does not exist, we didn't receive the data we expected, or something unexpected happens. In short: an exception is raised.")]),t._v(" "),a("p",[t._v("Bocadillo makes it easy to catch specific exceptions and return appropriate HTTP error responses.")]),t._v(" "),a("h2",{attrs:{id:"what-is-an-error-handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-error-handler","aria-hidden":"true"}},[t._v("#")]),t._v(" What is an error handler?")]),t._v(" "),a("p",[t._v("An "),a("strong",[t._v("error handler")]),t._v(" is an asynchronous function that gets executed when an exception occurs.")]),t._v(" "),a("p",[t._v("It should have the following signature: "),a("code",[t._v("(req, res, exc) -> None")]),t._v(", where "),a("code",[t._v("exc")]),t._v(" is the exception that was raised.")]),t._v(" "),a("p",[t._v("The response "),a("code",[t._v("res")]),t._v(" can be mutated just like in views in order to achieve their desired behavior (e.g. set the status code).")]),t._v(" "),a("p",[t._v("An error handler can also re-raise an exception to defer processing to another error handler.")]),t._v(" "),a("p",[t._v("For example, here is a no-op error handler which re-raises the exception it is given:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("noop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" exc\n")])])]),a("p",[t._v("And one that silences the exception (note: probably a bad idea!):")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("silence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),a("p",[t._v("Lastly, every error handler is associated to an exception class, which Bocadillo uses this to know which error handler to call when an exception is raised (see next section).")]),t._v(" "),a("h2",{attrs:{id:"what-happens-when-an-error-is-raised"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-an-error-is-raised","aria-hidden":"true"}},[t._v("#")]),t._v(" What happens when an error is raised?")]),t._v(" "),a("p",[t._v("When an exception is raised within an HTTP view or middleware, the following algorithm is used:")]),t._v(" "),a("ol",[a("li",[t._v("We iterate over the registered exception classes until we find the one that was raised, or one that it is a subclass of (in this order).")]),t._v(" "),a("li",[t._v("The error handler found is called, and the (perhaps mutated) response is returned. If the error handler itself raises an exception, we go back to 1.")]),t._v(" "),a("li",[t._v("If no error handler was found:\n"),a("ul",[a("li",[t._v("The response is converted to an "),a("code",[t._v("500 Internal Server Error")]),t._v(" response.")]),t._v(" "),a("li",[t._v("It is sent to the client and the exception is re-raised to allow server-side logging.")])])])]),t._v(" "),a("h2",{attrs:{id:"registering-error-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registering-error-handlers","aria-hidden":"true"}},[t._v("#")]),t._v(" Registering error handlers")]),t._v(" "),a("p",[t._v("To register an error handler, use the "),a("code",[t._v("@app.error_handler()")]),t._v(" decorator:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error_handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AttributeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_attribute_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute_not_found"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Note that this error handler can be simplified by re-raising an "),a("code",[t._v("HTTPError")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error_handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AttributeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_attribute_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" HTTPError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute_not_found"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("For convenience, a non-decorator syntax is also available:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" somelib "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" on_key_error\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_error_handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KeyError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_key_error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"how-httperror-is-handled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-httperror-is-handled","aria-hidden":"true"}},[t._v("#")]),t._v(" How "),a("code",[t._v("HTTPError")]),t._v(" is handled")]),t._v(" "),a("p",[t._v("The "),a("router-link",{attrs:{to:"/api/errors.html"}},[a("code",[t._v("HTTPError")])]),t._v(" exception is used to return HTTP error responses within views.")],1),t._v(" "),a("p",[t._v("Every Bocadillo application comes with an "),a("code",[t._v("HTTPError")]),t._v(" error handler. The default handler returns a JSON error response.")]),t._v(" "),a("p",[t._v("You can register your own error handler for "),a("code",[t._v("HTTPError")]),t._v(" just like for any other exception. The following handlers are available in the "),a("code",[t._v("bocadillo.error_handlers")]),t._v(" module:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("error_to_json()")]),t._v(": converts an exception to a JSON response (this is the default).")]),t._v(" "),a("li",[a("code",[t._v("error_to_text()")]),t._v(": converts an exception to plain text.")]),t._v(" "),a("li",[a("code",[t._v("error_to_html()")]),t._v(": converts an exception to an HTML response.")])])])},[],!1,null,null,null);e.default=s.exports}}]);