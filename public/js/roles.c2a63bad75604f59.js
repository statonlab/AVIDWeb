/*! For license information please see roles.c2a63bad75604f59.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63],{5728:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};u(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(C([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}const c={name:"Roles",components:{InlineSpinner:r(5087).Z},data:function(){return{loading:!0,toggling:!1,roles:[],permissions:[],matrix:{}}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;return a(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,axios.get("/web/permissions");case 4:r=e.sent,n=r.data,t.roles=n.roles,t.permissions=n.permissions,t.matrix=n.matrix,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.$alert("Unable to load page. Please try refreshing the page.");case 14:t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()},toggle:function(t,e){var r=this;return a(o().mark((function n(){var i,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Admin"!==e.name){n.next=2;break}return n.abrupt("return");case 2:return r.toggling=!0,n.prev=3,n.next=6,axios.patch("/web/permissions/".concat(t.id,"/roles/").concat(e.id));case 6:i=n.sent,a=i.data,r.matrix[e.id][t.id]=a.attached,r.$notify({type:"success",text:"Role updated successfully"}),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(3),r.$notify({text:"Unable to update role. Please try refreshing the page.",type:"error"}),console.error(n.t0);case 16:r.toggling=!1;case 17:case"end":return n.stop()}}),n,null,[[3,12]])})))()}}};const s=(0,r(1900).Z)(c,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),t.loading?e("div",{staticClass:"d-flex align-items-center justify-content-center"},[e("inline-spinner",{staticClass:"text-primary"})],1):t._e(),t._v(" "),!t.loading&&t.roles.length>0?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body table-responsive overflow-hidden p-0"},[e("table",{staticClass:"table table-hover table-middle mb-0"},[e("thead",[e("tr",[e("th",{staticClass:"w-100 border-top-0"},[t._v("Permission")]),t._v(" "),t._l(t.roles,(function(r){return e("th",{staticClass:"border-top-0",staticStyle:{width:"0"}},[t._v("\n                        "+t._s(r.name)+"\n                    ")])}))],2)]),t._v(" "),e("tbody",t._l(t.permissions,(function(r){return e("tr",[e("td",[e("p",{staticClass:"mb-0"},[e("strong",[t._v(t._s(r.title))])]),t._v(" "),e("p",{staticClass:"mb-0 text-muted"},[t._v("\n                            "+t._s(r.description)+"\n                        ")])]),t._v(" "),t._l(t.roles,(function(n){return e("td",{staticClass:"text-center"},[e("input",{attrs:{type:"checkbox",disabled:"Admin"===n.name||t.toggling,title:"Admin"===n.name?"Admin role can't be changed":null},domProps:{checked:t.matrix[n.id][r.id]},on:{change:function(e){return e.preventDefault(),t.toggle(r,n)}}})])}))],2)})),0)])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",{staticClass:"page-title"},[t._v("Roles & Permissions")]),t._v(" "),e("p",{staticClass:"mb-0 text-muted"},[t._v("Manage permissions for each role.")])])}],!1,null,"17a9d2f7",null).exports}}]);
//# sourceMappingURL=roles.c2a63bad75604f59.js.map