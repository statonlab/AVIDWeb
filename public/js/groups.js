(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1MU1":function(t,e,r){"use strict";var n={name:"ModalBody"},a=r("KHd+"),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-body"},[this._t("default")],2)}),[],!1,null,"21f39381",null);e.a=o.exports},"5Rol":function(t,e,r){"use strict";r("mKMH")},EGv3:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.d(e,"a",(function(){return a}));var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={},void 0!==e&&this.set(e)}var e,r,a;return e=t,(r=[{key:"get",value:function(t){if(this.errors[t])return"string"==typeof this.errors[t]?this.errors[t]:this.errors[t][0]}},{key:"first",value:function(t){return this.get(t)}},{key:"set",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){this.errors[t]&&delete this.errors[t]}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"clearAll",value:function(){this.errors={}}},{key:"toArray",value:function(){var t=this,e=[];return Object.keys(this.errors).forEach((function(r){t.errors[r].forEach((function(t){return e.push(t)}))})),e}}])&&n(e.prototype,r),a&&n(e,a),t}()},Igho:function(t,e,r){var n=r("gcIj");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(t.exports=n.locals)},J17W:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".max-vh[data-v-65ec0403]{max-height:93vh}.bg-transparent-dark[data-v-65ec0403]{background-color:rgba(0,0,0,.7)}",""])},JUFj:function(t,e,r){"use strict";var n={name:"ModalCard"},a=r("KHd+"),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-content shadow-lg border-0"},[this._t("default")],2)}),[],!1,null,"bf90aa66",null);e.a=o.exports},KBkZ:function(t,e,r){"use strict";r("Igho")},U82G:function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),a=r.n(n),o=r("cv7c"),s=r("t1vV"),i=r("+Gql");function u(t,e,r,n,a,o,s){try{var i=t[o](s),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){u(o,n,a,s,i,"next",t)}function i(t){u(o,n,a,s,i,"throw",t)}s(void 0)}))}}var c={name:"Groups",components:{GroupForm:s.a,Icon:o.a},data:function(){return{User:i.a,showForm:!1,loading:!0,deleting:null,groups:[],page:1,lastPage:1,group:null}},mounted:function(){this.loadGroups()},methods:{loadGroups:function(){var t=this;return l(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/web/groups");case 3:r=e.sent,n=r.data,t.groups=n.data,t.lastPage=n.last_page,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.$alert("Unable to load group. Please try refreshing the page."),console.error(e.t0);case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},created:function(t){this.closeForm(),this.$router.push({path:"/app/groups/".concat(t.id)})},updated:function(t){this.closeForm(),this.groups=this.groups.map((function(e){return e.id===t.id?t:e}))},closeForm:function(){this.group=null,this.showForm=!1},edit:function(t){this.group=t,this.showForm=!0},destroy:function(t){var e,r=this;this.$confirm({title:"Are you sure you want to delete ".concat(t.name,"?"),text:"This action is permanent!",onConfirm:(e=l(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.deleting=t.id,e.prev=1,e.next=4,axios.delete("/web/groups/".concat(t.id));case 4:return e.next=6,r.loadGroups();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r.$notify({text:"Unable to delete group. Please try refreshing the page.",type:"error"});case 11:r.deleting=null;case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(){return e.apply(this,arguments)})})}}},f=r("KHd+"),d=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",{staticClass:"page-title mb-3"},[t._v("User Groups")]),t._v(" "),t.loading||0!==t.groups.length?t._e():r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"card-body d-flex align-items-center justify-content-center flex-column text-center"},[r("div",{staticClass:"d-flex align-items-center justify-content-center icon-circle"},[r("icon",{attrs:{name:"people-outline"}})],1),t._v(" "),r("p",{staticClass:"font-weight-bold mt-4"},[t._v("Welcome to User Groups")]),t._v(" "),r("p",{staticClass:"text-muted max-w-700"},[t._v("\n                    Groups provide an easy and secure way to share your data with other members.\n                    You can get started by creating a new group. To join an existing group, a user\n                    must send you an invitation to join the group.\n                ")]),t._v(" "),r("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[r("icon",{attrs:{name:"add"}}),t._v(" "),r("span",[t._v("\n                        New Group\n                    ")])],1)])]),t._v(" "),!t.loading&&t.groups.length>0?r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"d-flex card-header p-2"},[t._m(0),t._v(" "),r("div",{staticClass:"flex-shrink-0"},[r("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[r("icon",{attrs:{name:"add"}}),t._v(" "),r("span",[t._v("New Group")])],1)])]),t._v(" "),r("div",{staticClass:"card-body table-responsive p-0"},[r("table",{staticClass:"table mb-0"},[t._m(1),t._v(" "),r("tbody",t._l(t.groups,(function(e){return r("tr",[r("td",[r("router-link",{staticClass:"font-weight-bold",attrs:{to:"/app/groups/"+e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])],1),t._v(" "),r("td",[t._v("\n                            "+t._s(e.owner.name)+"\n                        ")]),t._v(" "),r("td",[t._v(t._s(e.users_count))]),t._v(" "),r("td",[t.User.owns(e)||t.User.can(["update groups","delete groups"])?r("div",{staticClass:"d-flex justify-content-end"},[t.User.can("update groups")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Edit Group",expression:"'Edit Group'"}],staticClass:"btn btn-link mr-1",on:{click:function(r){return r.preventDefault(),t.edit(e)}}},[r("icon",{attrs:{name:"create"}})],1):t._e(),t._v(" "),t.User.can("delete groups")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Delete Group",expression:"'Delete Group'"}],staticClass:"btn btn-link",on:{click:function(r){return r.preventDefault(),t.destroy(e)}}},[r("icon",{attrs:{name:"trash"}})],1):t._e()]):t._e()])])})),0)])])]):t._e()]),t._v(" "),t.showForm?r("group-form",{attrs:{group:t.group},on:{create:function(e){return t.created(e)},update:function(e){return t.updated(e)},close:t.closeForm}}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow-1"},[e("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Search Groups"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Group Name")]),this._v(" "),e("th",[this._v("Owner")]),this._v(" "),e("th",[this._v("Members")]),this._v(" "),e("th")])])}],!1,null,"0987db7a",null);e.default=d.exports},gcIj:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".close[data-v-7a28cdfc]{right:20px;top:50%;margin-top:-25px}",""])},ke3Z:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("EGv3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){for(var r in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new n.a,this.originalData=e,this._multipart=!1,this.fileFields=[],this.onProgressCallback=function(t){},e)e.hasOwnProperty(r)&&(this[r]=e[r])}var e,r,a;return e=t,(r=[{key:"multipart",value:function(t){this._multipart=void 0===t||t}},{key:"keydown",value:function(t){var e=t.target.name;void 0!==e&&void 0!==this[e]&&this.errors.clear(e)}},{key:"onProgressChange",value:function(t){if("function"!=typeof t)throw new n.a("The function onProgressChange only accepts a function as a parameters");this.onProgressCallback=t}},{key:"data",value:function(t){var e={};for(var r in this.originalData)this.originalData.hasOwnProperty(r)&&(e[r]=this[r]);if(t)for(var n in t)this.originalData.hasOwnProperty(n)&&(e[n]=t[n]);if(this._multipart){var a=new FormData;for(var o in e)e.hasOwnProperty(o)&&(this.isFileField(o)&&FileList&&e[o]instanceof FileList?a.append(o,null===e[o][0]?"":e[o][0]):a.append(o,null===e[o]?"":e[o]));return a}return e}},{key:"isFileField",value:function(t){return this.fileFields.indexOf(t)>-1}},{key:"reset",value:function(){for(var t in this.originalData)this.originalData.hasOwnProperty(t)&&(this[t]=this.originalData[t]);this.errors.clearAll()}},{key:"post",value:function(t,e){return this.submit("post",t,e)}},{key:"put",value:function(t,e){return this.submit("put",t,e)}},{key:"get",value:function(t,e){return this.submit("get",t,e)}},{key:"delete",value:function(t,e){return this.submit("delete",t,e)}},{key:"patch",value:function(t,e){return this.submit("patch",t,e)}},{key:"headers",value:function(){var t={};return this._multipart&&(t["Content-Type"]="multipart/form-data"),t}},{key:"setAsFile",value:function(t){this.isFileField(t)||(this.multipart(!0),this.fileFields.push(t))}},{key:"setAsNotFile",value:function(t){this.fileFields=this.fileFields.filter((function(e){return e!==t})),0===this.fileFields.length&&this.multipart(!1)}},{key:"config",value:function(){return{onUploadProgress:this.onProgressCallback}}},{key:"submit",value:function(t,e,r){var n=this;if(0===e.length)throw new Error("Please provide a valid URL");if(this._multipart&&"post"!==t)throw new Error("Form is set to be multipart but request method is ".concat(t,". Method should be changed to post."));var a=this.headers(),s=this.config();return new Promise((function(i,u){axios[t](e,n.data(r),o(o({},s),{},{headers:a})).then((function(t){i(t)})).catch((function(t){n.onFail(t),u(t)}))}))}},{key:"onFail",value:function(t){t.response&&422===t.response.status&&this.errors.set(t.response.data)}},{key:"setDefault",value:function(t){for(var e in this.originalData){if(!this.originalData.hasOwnProperty(e))return;null!==t[e]?"undefined"!==t[e]&&(this[e]=t[e]):this[e]=null!==this.originalData[e]?this.originalData[e]:null}}}])&&i(e.prototype,r),a&&i(e,a),t}()},klO2:function(t,e,r){"use strict";var n={name:"Modal",props:{large:{type:Boolean,required:!1,default:!1},medium:{type:Boolean,required:!1,default:!1}},data:function(){return{mounted:!1}}},a=(r("5Rol"),r("KHd+")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"modal show vh-100 d-block",attrs:{tabindex:"-1",role:"dialog"}},[r("button",{staticClass:"modal-backdrop border-0 bg-transparent-dark cursor-default",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}}),t._v(" "),r("div",{ref:"modal",staticClass:"modal-dialog",class:{"modal-lg":t.large,"modal-md":t.medium},staticStyle:{"z-index":"1060"},attrs:{role:"document"}},[t._t("default")],2)])])}),[],!1,null,"65ec0403",null);e.a=o.exports},mKMH:function(t,e,r){var n=r("J17W");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(t.exports=n.locals)},"mS+z":function(t,e,r){"use strict";var n={name:"ModalFooter"},a=r("KHd+"),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-footer justify-content-start border-top-0 bg-light"},[this._t("default")],2)}),[],!1,null,"2efdf4a2",null);e.a=o.exports},t1vV:function(t,e,r){"use strict";var n=r("o0o1"),a=r.n(n),o=r("klO2"),s=r("JUFj"),i=r("wXy6"),u=r("vQtE"),l=r("yoRh"),c=r("1MU1"),f=r("mS+z"),d=r("ke3Z");function p(t,e,r,n,a,o,s){try{var i=t[o](s),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,a)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){p(o,n,a,s,i,"next",t)}function i(t){p(o,n,a,s,i,"throw",t)}s(void 0)}))}}var v={name:"GroupForm",components:{ModalFooter:f.a,ModalBody:c.a,Close:l.a,ModalTitle:u.a,ModalHeader:i.a,ModalCard:s.a,Modal:o.a},props:{group:{required:!1}},data:function(){return{form:new d.a({name:""}),loading:!1}},mounted:function(){this.group&&(this.form.name=this.group.name)},methods:{save:function(){this.group?this.update():this.create()},create:function(){var t=this;return h(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.post("/web/groups");case 3:r=e.sent,n=r.data,t.$notify({type:"success",text:"Group created successfully."}),t.$emit("create",n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},update:function(){var t=this;return h(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.put("/web/groups/".concat(t.group.id));case 3:r=e.sent,n=r.data,t.$emit("update",n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},m=r("KHd+"),g=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal",{on:{close:function(e){return t.$emit("close")}}},[r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[r("modal-card",[r("modal-header",[t.group?t._e():r("modal-title",[t._v("\n                    Create a Group\n                ")]),t._v(" "),t.group?r("modal-title",[t._v("\n                    Update "+t._s(t.group.name)+"\n                ")]):t._e(),t._v(" "),r("close",{on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$emit("close")}}})],1),t._v(" "),r("modal-body",[r("div",{staticClass:"form-group mb-0"},[r("label",[t._v("Group Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Group Name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.form.errors.has("name")?r("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.form.errors.first("name"))+"\n                    ")]):t._e()])]),t._v(" "),r("modal-footer",{staticClass:"d-flex"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                    Save\n                ")]),t._v(" "),r("button",{staticClass:"btn btn-light ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"021db1ba",null);e.a=g.exports},vQtE:function(t,e,r){"use strict";var n={name:"ModalTitle"},a=r("KHd+"),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("h3",{staticClass:"modal-title m-0"},[this._t("default")],2)}),[],!1,null,"1e97cd5f",null);e.a=o.exports},wXy6:function(t,e,r){"use strict";var n={name:"ModalHeader"},a=r("KHd+"),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-header position-relative"},[this._t("default")],2)}),[],!1,null,"2075d2dc",null);e.a=o.exports},yoRh:function(t,e,r){"use strict";var n={name:"Close",components:{Icon:r("cv7c").a}},a=(r("KBkZ"),r("KHd+")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-close btn-sm ml-auto text-muted position-absolute close",attrs:{type:"button"},on:{click:function(e){return t.$emit("click",e)}}},[r("icon",{attrs:{name:"close"}})],1)}),[],!1,null,"7a28cdfc",null);e.a=o.exports}}]);
//# sourceMappingURL=groups.js.map?id=02d6a7f57eb9cfe6c9a1