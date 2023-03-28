/*! For license information please see groups.a7b1beb3590f45c0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[287],{1660:(t,e,r)=>{function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.d(e,{Z:()=>o});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={},void 0!==e&&this.set(e)}var e,r,o;return e=t,(r=[{key:"get",value:function(t){if(this.errors[t])return"string"==typeof this.errors[t]?this.errors[t]:this.errors[t][0]}},{key:"first",value:function(t){return this.get(t)}},{key:"set",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){this.errors[t]&&delete this.errors[t]}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"clearAll",value:function(){this.errors={}}},{key:"toArray",value:function(){var t=this,e=[];return Object.keys(this.errors).forEach((function(r){t.errors[r].forEach((function(t){return e.push(t)}))})),e}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1817:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(1660);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e){for(var r in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new n.Z,this.originalData=e,this._multipart=!1,this.fileFields=[],this.onProgressCallback=function(t){},e)e.hasOwnProperty(r)&&(this[r]=e[r])}var e,r,o;return e=t,(r=[{key:"multipart",value:function(t){this._multipart=void 0===t||t}},{key:"keydown",value:function(t){var e=t.target.name;void 0!==e&&void 0!==this[e]&&this.errors.clear(e)}},{key:"onProgressChange",value:function(t){if("function"!=typeof t)throw new n.Z("The function onProgressChange only accepts a function as a parameters");this.onProgressCallback=t}},{key:"data",value:function(t){var e={};for(var r in this.originalData)this.originalData.hasOwnProperty(r)&&(e[r]=this[r]);if(t)for(var n in t)this.originalData.hasOwnProperty(n)&&(e[n]=t[n]);if(this._multipart){var o=new FormData;for(var a in e)e.hasOwnProperty(a)&&(this.isFileField(a)&&FileList&&e[a]instanceof FileList?o.append(a,null===e[a][0]?"":e[a][0]):o.append(a,null===e[a]?"":e[a]));return o}return e}},{key:"isFileField",value:function(t){return this.fileFields.indexOf(t)>-1}},{key:"reset",value:function(){for(var t in this.originalData)this.originalData.hasOwnProperty(t)&&(this[t]=this.originalData[t]);this.errors.clearAll()}},{key:"post",value:function(t,e){return this.submit("post",t,e)}},{key:"put",value:function(t,e){return this.submit("put",t,e)}},{key:"get",value:function(t,e){return this.submit("get",t,e)}},{key:"delete",value:function(t,e){return this.submit("delete",t,e)}},{key:"patch",value:function(t,e){return this.submit("patch",t,e)}},{key:"headers",value:function(){var t={};return this._multipart&&(t["Content-Type"]="multipart/form-data"),t}},{key:"setAsFile",value:function(t){this.isFileField(t)||(this.multipart(!0),this.fileFields.push(t))}},{key:"setAsNotFile",value:function(t){this.fileFields=this.fileFields.filter((function(e){return e!==t})),0===this.fileFields.length&&this.multipart(!1)}},{key:"config",value:function(){return{onUploadProgress:this.onProgressCallback}}},{key:"submit",value:function(t,e,r){var n=this;if(0===e.length)throw new Error("Please provide a valid URL");if(this._multipart&&"post"!==t)throw new Error("Form is set to be multipart but request method is ".concat(t,". Method should be changed to post."));var o=this.headers(),i=this.config();return new Promise((function(s,c){axios[t](e,n.data(r),a(a({},i),{},{headers:o})).then((function(t){s(t)})).catch((function(t){n.onFail(t),c(t)}))}))}},{key:"onFail",value:function(t){t.response&&422===t.response.status&&this.errors.set(t.response.data)}},{key:"setDefault",value:function(t){for(var e in this.originalData)this.originalData.hasOwnProperty(e)&&t.hasOwnProperty(e)&&(null!==t[e]?"undefined"!==t[e]&&(this[e]=t[e]):this[e]=null!==this.originalData[e]?this.originalData[e]:null)}}])&&s(e.prototype,r),o&&s(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1651:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(4015),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([t.id,".close[data-v-7a28cdfc]{margin-top:-25px;right:20px;top:50%}","",{version:3,sources:["webpack://./resources/js/components/Modal/Close.vue"],names:[],mappings:"AAiBA,wBAGA,gBAAA,CAFA,UAAA,CACA,OAEA",sourcesContent:['<template>\n    <button type="button"\n            class="btn btn-close btn-sm ml-auto text-muted position-absolute close"\n            @click="$emit(\'click\', $event)">\n        <icon name="close"/>\n    </button>\n</template>\n\n<script>\n  import Icon from \'../Icon\'\n  export default {\n    name: \'Close\',\n    components: {Icon},\n  }\n<\/script>\n\n<style scoped>\n.close {\n    right: 20px;\n    top: 50%;\n    margin-top: -25px;\n}\n</style>\n'],sourceRoot:""}]);const s=i},4998:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(4015),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([t.id,".max-vh[data-v-65ec0403]{max-height:93vh}.bg-transparent-dark[data-v-65ec0403]{background-color:rgba(0,0,0,.7)}","",{version:3,sources:["webpack://./resources/js/components/Modal/Modal.vue"],names:[],mappings:"AA0CA,yBACA,eACA,CAEA,sCACA,+BACA",sourcesContent:['<template>\n    <transition name="fade">\n        <div class="modal show vh-100 d-block" tabindex="-1" role="dialog">\n            <button class="modal-backdrop border-0 bg-transparent-dark cursor-default" type="button" @click.prevent="$emit(\'close\')"></button>\n            <div class="modal-dialog"\n                 style="z-index: 1060"\n                 :class="{\'modal-lg\': large, \'modal-md\': medium}"\n                 role="document"\n                 ref="modal">\n                <slot></slot>\n            </div>\n        </div>\n    </transition>\n</template>\n\n<script>\n  export default {\n    name: \'Modal\',\n\n    props: {\n      large : {type: Boolean, required: false, default: false},\n      medium: {type: Boolean, required: false, default: false},\n    },\n\n    data() {\n      return {\n        mounted: false,\n      }\n    },\n  }\n<\/script>\n\n<style scoped>\n    .max-vh {\n        max-height: 93vh;\n    }\n\n    .bg-transparent-dark {\n        background-color: rgba(0, 0, 0, .7);\n    }\n</style>\n'],sourceRoot:""}]);const s=i},9371:(t,e,r)=>{r.d(e,{Z:()=>c});const n={name:"Close",components:{Icon:r(4856).Z}};var o=r(3379),a=r.n(o),i=r(1651),s={insert:"head",singleton:!1};a()(i.Z,s);i.Z.locals;const c=(0,r(1900).Z)(n,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"btn btn-close btn-sm ml-auto text-muted position-absolute close",attrs:{type:"button"},on:{click:function(e){return t.$emit("click",e)}}},[e("icon",{attrs:{name:"close"}})],1)}),[],!1,null,"7a28cdfc",null).exports},61:(t,e,r)=>{r.d(e,{Z:()=>c});const n={name:"Modal",props:{large:{type:Boolean,required:!1,default:!1},medium:{type:Boolean,required:!1,default:!1}},data:function(){return{mounted:!1}}};var o=r(3379),a=r.n(o),i=r(4998),s={insert:"head",singleton:!1};a()(i.Z,s);i.Z.locals;const c=(0,r(1900).Z)(n,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"modal show vh-100 d-block",attrs:{tabindex:"-1",role:"dialog"}},[e("button",{staticClass:"modal-backdrop border-0 bg-transparent-dark cursor-default",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}}),t._v(" "),e("div",{ref:"modal",staticClass:"modal-dialog",class:{"modal-lg":t.large,"modal-md":t.medium},staticStyle:{"z-index":"1060"},attrs:{role:"document"}},[t._t("default")],2)])])}),[],!1,null,"65ec0403",null).exports},6973:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ModalBody"};const o=(0,r(1900).Z)(n,(function(){return(0,this._self._c)("div",{staticClass:"modal-body"},[this._t("default")],2)}),[],!1,null,"21f39381",null).exports},6451:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ModalCard"};const o=(0,r(1900).Z)(n,(function(){return(0,this._self._c)("div",{staticClass:"modal-content shadow-lg border-0"},[this._t("default")],2)}),[],!1,null,"bf90aa66",null).exports},8136:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ModalFooter"};const o=(0,r(1900).Z)(n,(function(){return(0,this._self._c)("div",{staticClass:"modal-footer justify-content-start border-top-0 bg-light"},[this._t("default")],2)}),[],!1,null,"2efdf4a2",null).exports},9294:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ModalHeader"};const o=(0,r(1900).Z)(n,(function(){return(0,this._self._c)("div",{staticClass:"modal-header position-relative"},[this._t("default")],2)}),[],!1,null,"2075d2dc",null).exports},1797:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ModalTitle"};const o=(0,r(1900).Z)(n,(function(){return(0,this._self._c)("h3",{staticClass:"modal-title m-0"},[this._t("default")],2)}),[],!1,null,"1e97cd5f",null).exports},9080:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(61),o=r(6451),a=r(9294),i=r(1797),s=r(9371),c=r(6973),u=r(8136),l=r(1817);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function p(){}function d(){}function v(){}var m={};s(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=v.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=v,s(b,"constructor",v),s(v,"constructor",d),d.displayName=s(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),s(b,i,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function p(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,s,"next",t)}function s(t){p(a,n,o,i,s,"throw",t)}i(void 0)}))}}const v={name:"GroupForm",components:{ModalFooter:u.Z,ModalBody:c.Z,Close:s.Z,ModalTitle:i.Z,ModalHeader:a.Z,ModalCard:o.Z,Modal:n.Z},props:{group:{required:!1}},data:function(){return{form:new l.Z({name:""}),loading:!1}},mounted:function(){this.group&&(this.form.name=this.group.name)},methods:{save:function(){this.group?this.update():this.create()},create:function(){var t=this;return d(h().mark((function e(){var r,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.post("/web/groups");case 3:r=e.sent,n=r.data,t.$notify({type:"success",text:"Group created successfully."}),t.$emit("create",n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},update:function(){var t=this;return d(h().mark((function e(){var r,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.put("/web/groups/".concat(t.group.id));case 3:r=e.sent,n=r.data,t.$emit("update",n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}};const m=(0,r(1900).Z)(v,(function(){var t=this,e=t._self._c;return e("modal",{on:{close:function(e){return t.$emit("close")}}},[e("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[e("modal-card",[e("modal-header",[t.group?t._e():e("modal-title",[t._v("\n                    Create a Group\n                ")]),t._v(" "),t.group?e("modal-title",[t._v("\n                    Update "+t._s(t.group.name)+"\n                ")]):t._e(),t._v(" "),e("close",{on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$emit("close")}}})],1),t._v(" "),e("modal-body",[e("div",{staticClass:"form-group mb-0"},[e("label",[t._v("Group Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Group Name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.form.errors.has("name")?e("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.form.errors.first("name"))+"\n                    ")]):t._e()])]),t._v(" "),e("modal-footer",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                    Save\n                ")]),t._v(" "),e("button",{staticClass:"btn btn-light ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"021db1ba",null).exports},7501:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(4856),o=r(9080),a=r(4226);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=v.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,a,s,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=v,u(b,"constructor",v),u(v,"constructor",d),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,c,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function c(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))}}const l={name:"Groups",components:{GroupForm:o.Z,Icon:n.Z},data:function(){return{User:a.Z,showForm:!1,loading:!0,deleting:null,groups:[],page:1,lastPage:1,group:null}},mounted:function(){this.loadGroups()},methods:{loadGroups:function(){var t=this;return u(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/web/groups");case 3:r=e.sent,n=r.data,t.groups=n.data,t.lastPage=n.last_page,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.$alert("Unable to load group. Please try refreshing the page."),console.error(e.t0);case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},created:function(t){this.closeForm(),this.$router.push({path:"/app/groups/".concat(t.id)})},updated:function(t){this.closeForm(),this.groups=this.groups.map((function(e){return e.id===t.id?t:e}))},closeForm:function(){this.group=null,this.showForm=!1},edit:function(t){this.group=t,this.showForm=!0},destroy:function(t){var e,r=this;this.$confirm({title:"Are you sure you want to delete ".concat(t.name,"?"),text:"This action is permanent!",onConfirm:(e=u(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.deleting=t.id,e.prev=1,e.next=4,axios.delete("/web/groups/".concat(t.id));case 4:return e.next=6,r.loadGroups();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r.$notify({text:"Unable to delete group. Please try refreshing the page.",type:"error"});case 11:r.deleting=null;case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(){return e.apply(this,arguments)})})}}};const f=(0,r(1900).Z)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("h1",{staticClass:"page-title mb-3"},[t._v("User Groups")]),t._v(" "),t.loading||0!==t.groups.length?t._e():e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-body d-flex align-items-center justify-content-center flex-column text-center"},[e("div",{staticClass:"d-flex align-items-center justify-content-center icon-circle"},[e("icon",{attrs:{name:"people-outline"}})],1),t._v(" "),e("p",{staticClass:"font-weight-bold mt-4"},[t._v("Welcome to User Groups")]),t._v(" "),e("p",{staticClass:"text-muted max-w-700"},[t._v("\n                    Groups provide an easy and secure way to share your data with other members.\n                    You can get started by creating a new group. To join an existing group, a user\n                    must send you an invitation to join the group.\n                ")]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[e("icon",{attrs:{name:"add"}}),t._v(" "),e("span",[t._v("\n                        New Group\n                    ")])],1)])]),t._v(" "),!t.loading&&t.groups.length>0?e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"d-flex card-header p-2"},[t._m(0),t._v(" "),e("div",{staticClass:"flex-shrink-0"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[e("icon",{attrs:{name:"add"}}),t._v(" "),e("span",[t._v("New Group")])],1)])]),t._v(" "),e("div",{staticClass:"card-body table-responsive p-0"},[e("table",{staticClass:"table mb-0"},[t._m(1),t._v(" "),e("tbody",t._l(t.groups,(function(r){return e("tr",[e("td",[e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/app/groups/".concat(r.id)}},[t._v("\n                                "+t._s(r.name)+"\n                            ")])],1),t._v(" "),e("td",[t._v("\n                            "+t._s(r.owner.name)+"\n                        ")]),t._v(" "),e("td",[t._v(t._s(r.users_count))]),t._v(" "),e("td",[t.User.owns(r)||t.User.can(["update groups","delete groups"])?e("div",{staticClass:"d-flex justify-content-end"},[t.User.can("update groups")?e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Edit Group",expression:"'Edit Group'"}],staticClass:"btn btn-link mr-1",on:{click:function(e){return e.preventDefault(),t.edit(r)}}},[e("icon",{attrs:{name:"create"}})],1):t._e(),t._v(" "),t.User.can("delete groups")?e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Delete Group",expression:"'Delete Group'"}],staticClass:"btn btn-link",on:{click:function(e){return e.preventDefault(),t.destroy(r)}}},[e("icon",{attrs:{name:"trash"}})],1):t._e()]):t._e()])])})),0)])])]):t._e()]),t._v(" "),t.showForm?e("group-form",{attrs:{group:t.group},on:{create:function(e){return t.created(e)},update:function(e){return t.updated(e)},close:t.closeForm}}):t._e()],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex-grow-1"},[t("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Search Groups"}})])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Group Name")]),t._v(" "),e("th",[t._v("Owner")]),t._v(" "),e("th",[t._v("Members")]),t._v(" "),e("th")])])}],!1,null,"0987db7a",null).exports}}]);
//# sourceMappingURL=groups.a7b1beb3590f45c0.js.map