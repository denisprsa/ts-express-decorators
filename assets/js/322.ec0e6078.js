(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{536:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[t._v("#")]),t._v(" Model "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Model } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/mongoose"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.31.13/packages/mongoose/src/decorators/model.ts#L0-L0"}},[t._v("/packages/mongoose/src/decorators/model.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("Model")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("options?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/mongoose/interfaces/MongooseModelOptions.html"}},[a("span",{staticClass:"token"},[t._v("MongooseModelOptions")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("target"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("any")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" =>"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("void")]),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Define a class a Mongoose Model. The model can be injected to the Service, Controller, Middleware, Converters or Filter with\n"),a("code",[t._v("@Inject")]),t._v(" annotation.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventModel")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Property")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  field"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Then inject the model into a service:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyService")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("Inject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EventModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" eventModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MongooseModel"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("EventModel"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       eventModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exec")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"options"}},[a("a",{attrs:{class:"header-anchor",href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("schemaOptions")]),t._v(" (mongoose.SchemaOptions): Option to configure the schema behavior.")]),t._v(" "),a("li",[a("code",[t._v("name")]),t._v(" (String): model name.")]),t._v(" "),a("li",[a("code",[t._v("collection")]),t._v(" (String): collection (optional, induced from model name).")]),t._v(" "),a("li",[a("code",[t._v("skipInit")]),t._v(" (Boolean): skipInit whether to skip initialization (defaults to false).")])])])}],!1,null,null,null);e.options.__file="Model.md";s.default=e.exports}}]);