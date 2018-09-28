(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{652:function(t,s,e){"use strict";e.r(s);var r=e(0),n=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"serversettings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serversettings","aria-hidden":"true"}},[t._v("#")]),t._v(" ServerSettings "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{pre:!0},[t._m(4),t._v(" "),e("p",[t._v("The default configuration is as follow:")]),t._v(" "),t._m(5),e("p",[t._v("You can customize your configuration as follow:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),e("ul",[t._m(8),t._v(" "),t._m(9),t._v(" "),e("li",[e("code",[t._v("port")]),t._v(" <string | number>: Port number for the "),e("a",{attrs:{href:"https://nodejs.org/api/http.html#http_class_http_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP.Server"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("httpsPort")]),t._v(" <string | number>: Port number for the "),e("a",{attrs:{href:"https://nodejs.org/api/https.html#https_class_https_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPs.Server"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("httpsOptions")]),t._v(" <"),e("a",{attrs:{href:"https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener",target:"_blank",rel:"noopener noreferrer"}},[t._v("Https.ServerOptions"),e("OutboundLink")],1),t._v(")>:\n"),e("ul",[e("li",[e("code",[t._v("key")]),t._v(" <string> | <string[]> | "),e("a",{attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),e("OutboundLink")],1),t._v(" | <Object[]>: The private key of the server in PEM format. To support multiple keys using different algorithms an array can be provided either as a plain array of key strings or an array of objects in the format "),e("code",[t._v("{pem: key, passphrase: passphrase}")]),t._v(". This option is required for ciphers that make use of private keys.")]),t._v(" "),t._m(10),t._v(" "),e("li",[e("code",[t._v("cert")]),t._v(" <string> | <string[]> | "),e("a",{attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer[]>"),e("OutboundLink")],1),t._v(": A string, Buffer, array of strings, or array of Buffers containing the certificate key of the server in PEM format. (Required)")]),t._v(" "),e("li",[e("code",[t._v("ca")]),t._v(" <string> | <string[]> | "),e("a",{attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer[]>"),e("OutboundLink")],1),t._v(': A string, Buffer, array of strings, or array of Buffers of trusted certificates in PEM format. If this is omitted several well known "root" CAs (like VeriSign) will be used. These are used to authorize connections.')])])]),t._v(" "),e("li",[e("code",[t._v("uploadDir")]),t._v(" <string&gt: The temporary directory to upload the documents. See more on "),e("router-link",{attrs:{to:"/tutorials/multer.html"}},[t._v("Upload file with Multer")]),t._v(".")],1),t._v(" "),e("li",[e("code",[t._v("mount")]),t._v(" <"),e("router-link",{attrs:{to:"/api/common/config/interfaces/IServerMountDirectories.html"}},[t._v("IServerMountDirectories")]),t._v(">: Mount all controllers under a directories to an endpoint.")],1),t._v(" "),e("li",[e("code",[t._v("componentsScan")]),t._v(" <string[]>: List of directories to scan "),e("router-link",{attrs:{to:"/docs/services.html"}},[t._v("Services")]),t._v(", "),e("router-link",{attrs:{to:"/docs/middlewares.html"}},[t._v("Middlewares")]),t._v(" or "),e("router-link",{attrs:{to:"/docs/converters.html"}},[t._v("Converters")]),t._v(".")],1),t._v(" "),e("li",[e("code",[t._v("serveStatic")]),t._v(" <"),e("router-link",{attrs:{to:"/api/common/config/interfaces/IServerMountDirectories.html"}},[t._v("IServerMountDirectories")]),t._v(">: Objet to mount all directories under to his endpoints. See more on "),e("router-link",{attrs:{to:"/tutorials/serve-static-files.html"}},[t._v("Serve Static")]),t._v(".")],1),t._v(" "),e("li",[e("code",[t._v("routers")]),t._v(" <object>: Global configuration for the Express.Router. See express "),e("a",{attrs:{href:"http://expressjs.com/en/api.html#express.router",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(11)])])])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { ServerSettings } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.31.13/packages/common/src/server/decorators/serverSettings.ts#L0-L0"}},[t._v("/packages/common/src/server/decorators/serverSettings.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"typescript-lang "},[t._v("function "),e("span",{staticClass:"token function"},[t._v("ServerSettings")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("settings"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("a",{attrs:{href:"/api/swagger/interfaces/IServerSettings.html"}},[e("span",{staticClass:"token"},[t._v("IServerSettings")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),e("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@ServerSettings")]),this._v(" let you to configure quickly your server via decorator. This decorator take your configuration and merge it with the default server configuration.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{class:"language-json extra-class"}},[e("pre",{attrs:{"v-pre":"",class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"rootDir"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"path/to/root/project"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"env"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"development"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"port"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("8080")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"httpsPort"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("8000")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"uploadDir"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/uploads"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"mount"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"/rest"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/**/*.js"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{attrs:{class:"token property"}},[t._v('"componentsScan"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/middlewares/**/*.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/services/**/*.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/converters/**/*.js"')]),t._v("\n "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{class:"language-typescript extra-class"}},[e("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ServerLoader"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ServerSettings"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"@tsed/common"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Path "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"path"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),e("span",{attrs:{class:"token function"}},[t._v("ServerSettings")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rootDir"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Path"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("resolve")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mount"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token string"}},[t._v('"/rest"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/current/**/*.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{attrs:{class:"token string"}},[t._v('"/rest/v1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/v1/users/*.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/v1/groups/*.js"')]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Server")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("ServerLoader")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Initialize "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise"),e("span",{attrs:{class:"token operator"}},[t._v("<")]),e("span",{attrs:{class:"token builtin"}},[t._v("any")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Server")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("start")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nServer"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("Initialize")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"options"}},[s("a",{attrs:{class:"header-anchor",href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("rootDir")]),this._v(" <string>: The root directory where you build run project.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("env")]),this._v(" <Env>: The environment profile. By default the environment profile is equals to "),s("code",[this._v("NODE_ENV")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("passphrase")]),this._v(" <string> A string containing the passphrase for the private key or pfx.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("validationModelStrict")]),this._v(" <boolean>: Use a strict validation when a model is used by the converter. When a property is unknow, it throw a BadRequest. By default true.")])}],!1,null,null,null);n.options.__file="ServerSettings.md";s.default=n.exports}}]);