"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[287],{9119:(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,{Z:()=>o});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={},void 0!==e&&this.set(e)}var e,n,o;return e=t,(n=[{key:"get",value:function(t){if(this.errors[t])return"string"==typeof this.errors[t]?this.errors[t]:this.errors[t][0]}},{key:"first",value:function(t){return this.get(t)}},{key:"set",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){this.errors[t]&&delete this.errors[t]}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"clearAll",value:function(){this.errors={}}},{key:"toArray",value:function(){var t=this,e=[];return Object.keys(this.errors).forEach((function(n){t.errors[n].forEach((function(t){return e.push(t)}))})),e}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4207:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(9119);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new r.Z,this.originalData=e,this._multipart=!1,this.fileFields=[],this.onProgressCallback=function(t){},e)e.hasOwnProperty(n)&&(this[n]=e[n])}var e,n,o;return e=t,(n=[{key:"multipart",value:function(t){this._multipart=void 0===t||t}},{key:"keydown",value:function(t){var e=t.target.name;void 0!==e&&void 0!==this[e]&&this.errors.clear(e)}},{key:"onProgressChange",value:function(t){if("function"!=typeof t)throw new r.Z("The function onProgressChange only accepts a function as a parameters");this.onProgressCallback=t}},{key:"data",value:function(t){var e={};for(var n in this.originalData)this.originalData.hasOwnProperty(n)&&(e[n]=this[n]);if(t)for(var r in t)this.originalData.hasOwnProperty(r)&&(e[r]=t[r]);if(this._multipart){var o=new FormData;for(var a in e)e.hasOwnProperty(a)&&(this.isFileField(a)&&FileList&&e[a]instanceof FileList?o.append(a,null===e[a][0]?"":e[a][0]):o.append(a,null===e[a]?"":e[a]));return o}return e}},{key:"isFileField",value:function(t){return this.fileFields.indexOf(t)>-1}},{key:"reset",value:function(){for(var t in this.originalData)this.originalData.hasOwnProperty(t)&&(this[t]=this.originalData[t]);this.errors.clearAll()}},{key:"post",value:function(t,e){return this.submit("post",t,e)}},{key:"put",value:function(t,e){return this.submit("put",t,e)}},{key:"get",value:function(t,e){return this.submit("get",t,e)}},{key:"delete",value:function(t,e){return this.submit("delete",t,e)}},{key:"patch",value:function(t,e){return this.submit("patch",t,e)}},{key:"headers",value:function(){var t={};return this._multipart&&(t["Content-Type"]="multipart/form-data"),t}},{key:"setAsFile",value:function(t){this.isFileField(t)||(this.multipart(!0),this.fileFields.push(t))}},{key:"setAsNotFile",value:function(t){this.fileFields=this.fileFields.filter((function(e){return e!==t})),0===this.fileFields.length&&this.multipart(!1)}},{key:"config",value:function(){return{onUploadProgress:this.onProgressCallback}}},{key:"submit",value:function(t,e,n){var r=this;if(0===e.length)throw new Error("Please provide a valid URL");if(this._multipart&&"post"!==t)throw new Error("Form is set to be multipart but request method is ".concat(t,". Method should be changed to post."));var o=this.headers(),s=this.config();return new Promise((function(i,l){axios[t](e,r.data(n),a(a({},s),{},{headers:o})).then((function(t){i(t)})).catch((function(t){r.onFail(t),l(t)}))}))}},{key:"onFail",value:function(t){t.response&&422===t.response.status&&this.errors.set(t.response.data)}},{key:"setDefault",value:function(t){for(var e in this.originalData){if(!this.originalData.hasOwnProperty(e))return;null!==t[e]?"undefined"!==t[e]&&(this[e]=t[e]):this[e]=null!==this.originalData[e]?this.originalData[e]:null}}}])&&i(e.prototype,n),o&&i(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2813:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(4015),o=n.n(r),a=n(3645),s=n.n(a)()(o());s.push([t.id,".close[data-v-7a28cdfc]{margin-top:-25px;right:20px;top:50%}","",{version:3,sources:["webpack://./resources/js/components/Modal/Close.vue"],names:[],mappings:"AAiBA,wBAGA,gBAAA,CAFA,UAAA,CACA,OAEA",sourcesContent:['<template>\n    <button type="button"\n            class="btn btn-close btn-sm ml-auto text-muted position-absolute close"\n            @click="$emit(\'click\', $event)">\n        <icon name="close"/>\n    </button>\n</template>\n\n<script>\n  import Icon from \'../Icon\'\n  export default {\n    name: \'Close\',\n    components: {Icon},\n  }\n<\/script>\n\n<style scoped>\n.close {\n    right: 20px;\n    top: 50%;\n    margin-top: -25px;\n}\n</style>\n'],sourceRoot:""}]);const i=s},724:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(4015),o=n.n(r),a=n(3645),s=n.n(a)()(o());s.push([t.id,".max-vh[data-v-65ec0403]{max-height:93vh}.bg-transparent-dark[data-v-65ec0403]{background-color:rgba(0,0,0,.7)}","",{version:3,sources:["webpack://./resources/js/components/Modal/Modal.vue"],names:[],mappings:"AAiCA,yBACA,eACA,CAEA,sCACA,+BACA",sourcesContent:['<template>\n    <transition name="fade">\n        <div class="modal show vh-100 d-block" tabindex="-1" role="dialog">\n            <button class="modal-backdrop border-0 bg-transparent-dark cursor-default" type="button" @click.prevent="$emit(\'close\')"></button>\n            <div class="modal-dialog"\n                 style="z-index: 1060"\n                 :class="{\'modal-lg\': large, \'modal-md\': medium}"\n                 role="document"\n                 ref="modal">\n                <slot></slot>\n            </div>\n        </div>\n    </transition>\n</template>\n\n<script>\n  export default {\n    name: \'Modal\',\n\n    props: {\n      large : {type: Boolean, required: false, default: false},\n      medium: {type: Boolean, required: false, default: false},\n    },\n\n    data() {\n      return {\n        mounted: false,\n      }\n    },\n  }\n<\/script>\n\n<style scoped>\n    .max-vh {\n        max-height: 93vh;\n    }\n\n    .bg-transparent-dark {\n        background-color: rgba(0, 0, 0, .7);\n    }\n</style>\n'],sourceRoot:""}]);const i=s},304:(t,e,n)=>{n.d(e,{Z:()=>l});const r={name:"Close",components:{Icon:n(4090).Z}};var o=n(3379),a=n.n(o),s=n(2813),i={insert:"head",singleton:!1};a()(s.Z,i);s.Z.locals;const l=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-close btn-sm ml-auto text-muted position-absolute close",attrs:{type:"button"},on:{click:function(e){return t.$emit("click",e)}}},[n("icon",{attrs:{name:"close"}})],1)}),[],!1,null,"7a28cdfc",null).exports},6853:(t,e,n)=>{n.d(e,{Z:()=>l});const r={name:"Modal",props:{large:{type:Boolean,required:!1,default:!1},medium:{type:Boolean,required:!1,default:!1}},data:function(){return{mounted:!1}}};var o=n(3379),a=n.n(o),s=n(724),i={insert:"head",singleton:!1};a()(s.Z,i);s.Z.locals;const l=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"modal show vh-100 d-block",attrs:{tabindex:"-1",role:"dialog"}},[n("button",{staticClass:"modal-backdrop border-0 bg-transparent-dark cursor-default",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}}),t._v(" "),n("div",{ref:"modal",staticClass:"modal-dialog",class:{"modal-lg":t.large,"modal-md":t.medium},staticStyle:{"z-index":"1060"},attrs:{role:"document"}},[t._t("default")],2)])])}),[],!1,null,"65ec0403",null).exports},2172:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"ModalBody"};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"modal-body"},[t._t("default")],2)}),[],!1,null,"21f39381",null).exports},1326:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"ModalCard"};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"modal-content shadow-lg border-0"},[t._t("default")],2)}),[],!1,null,"bf90aa66",null).exports},9560:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"ModalFooter"};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"modal-footer justify-content-start border-top-0 bg-light"},[t._t("default")],2)}),[],!1,null,"2efdf4a2",null).exports},420:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"ModalHeader"};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"modal-header position-relative"},[t._t("default")],2)}),[],!1,null,"2075d2dc",null).exports},4217:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"ModalTitle"};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"modal-title m-0"},[t._t("default")],2)}),[],!1,null,"1e97cd5f",null).exports},3332:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(7757),o=n.n(r),a=n(6853),s=n(1326),i=n(420),l=n(4217),u=n(304),c=n(2172),d=n(9560),p=n(4207);function f(t,e,n,r,o,a,s){try{var i=t[a](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){f(a,r,o,s,i,"next",t)}function i(t){f(a,r,o,s,i,"throw",t)}s(void 0)}))}}const h={name:"GroupForm",components:{ModalFooter:d.Z,ModalBody:c.Z,Close:u.Z,ModalTitle:l.Z,ModalHeader:i.Z,ModalCard:s.Z,Modal:a.Z},props:{group:{required:!1}},data:function(){return{form:new p.Z({name:""}),loading:!1}},mounted:function(){this.group&&(this.form.name=this.group.name)},methods:{save:function(){this.group?this.update():this.create()},create:function(){var t=this;return m(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.post("/web/groups");case 3:n=e.sent,r=n.data,t.$notify({type:"success",text:"Group created successfully."}),t.$emit("create",r),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},update:function(){var t=this;return m(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.form.put("/web/groups/".concat(t.group.id));case 3:n=e.sent,r=n.data,t.$emit("update",r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&422===e.t0.response.status||t.$alert("Unable to create group. Please try refreshing the page."),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}};const v=(0,n(1900).Z)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{on:{close:function(e){return t.$emit("close")}}},[n("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[n("modal-card",[n("modal-header",[t.group?t._e():n("modal-title",[t._v("\n                    Create a Group\n                ")]),t._v(" "),t.group?n("modal-title",[t._v("\n                    Update "+t._s(t.group.name)+"\n                ")]):t._e(),t._v(" "),n("close",{on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$emit("close")}}})],1),t._v(" "),n("modal-body",[n("div",{staticClass:"form-group mb-0"},[n("label",[t._v("Group Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Group Name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.form.errors.has("name")?n("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.form.errors.first("name"))+"\n                    ")]):t._e()])]),t._v(" "),n("modal-footer",{staticClass:"d-flex"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                    Save\n                ")]),t._v(" "),n("button",{staticClass:"btn btn-light ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"021db1ba",null).exports},8385:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var r=n(7757),o=n.n(r),a=n(4090),s=n(3332),i=n(8254);function l(t,e,n,r,o,a,s){try{var i=t[a](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){l(a,r,o,s,i,"next",t)}function i(t){l(a,r,o,s,i,"throw",t)}s(void 0)}))}}const c={name:"Groups",components:{GroupForm:s.Z,Icon:a.Z},data:function(){return{User:i.Z,showForm:!1,loading:!0,deleting:null,groups:[],page:1,lastPage:1,group:null}},mounted:function(){this.loadGroups()},methods:{loadGroups:function(){var t=this;return u(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/web/groups");case 3:n=e.sent,r=n.data,t.groups=r.data,t.lastPage=r.last_page,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.$alert("Unable to load group. Please try refreshing the page."),console.error(e.t0);case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},created:function(t){this.closeForm(),this.$router.push({path:"/app/groups/".concat(t.id)})},updated:function(t){this.closeForm(),this.groups=this.groups.map((function(e){return e.id===t.id?t:e}))},closeForm:function(){this.group=null,this.showForm=!1},edit:function(t){this.group=t,this.showForm=!0},destroy:function(t){var e,n=this;this.$confirm({title:"Are you sure you want to delete ".concat(t.name,"?"),text:"This action is permanent!",onConfirm:(e=u(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.deleting=t.id,e.prev=1,e.next=4,axios.delete("/web/groups/".concat(t.id));case 4:return e.next=6,n.loadGroups();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.$notify({text:"Unable to delete group. Please try refreshing the page.",type:"error"});case 11:n.deleting=null;case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(){return e.apply(this,arguments)})})}}};const d=(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",{staticClass:"page-title mb-3"},[t._v("User Groups")]),t._v(" "),t.loading||0!==t.groups.length?t._e():n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"card-body d-flex align-items-center justify-content-center flex-column text-center"},[n("div",{staticClass:"d-flex align-items-center justify-content-center icon-circle"},[n("icon",{attrs:{name:"people-outline"}})],1),t._v(" "),n("p",{staticClass:"font-weight-bold mt-4"},[t._v("Welcome to User Groups")]),t._v(" "),n("p",{staticClass:"text-muted max-w-700"},[t._v("\n                    Groups provide an easy and secure way to share your data with other members.\n                    You can get started by creating a new group. To join an existing group, a user\n                    must send you an invitation to join the group.\n                ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[n("icon",{attrs:{name:"add"}}),t._v(" "),n("span",[t._v("\n                        New Group\n                    ")])],1)])]),t._v(" "),!t.loading&&t.groups.length>0?n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"d-flex card-header p-2"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-shrink-0"},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.showForm=!0}}},[n("icon",{attrs:{name:"add"}}),t._v(" "),n("span",[t._v("New Group")])],1)])]),t._v(" "),n("div",{staticClass:"card-body table-responsive p-0"},[n("table",{staticClass:"table mb-0"},[t._m(1),t._v(" "),n("tbody",t._l(t.groups,(function(e){return n("tr",[n("td",[n("router-link",{staticClass:"font-weight-bold",attrs:{to:"/app/groups/"+e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])],1),t._v(" "),n("td",[t._v("\n                            "+t._s(e.owner.name)+"\n                        ")]),t._v(" "),n("td",[t._v(t._s(e.users_count))]),t._v(" "),n("td",[t.User.owns(e)||t.User.can(["update groups","delete groups"])?n("div",{staticClass:"d-flex justify-content-end"},[t.User.can("update groups")?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Edit Group",expression:"'Edit Group'"}],staticClass:"btn btn-link mr-1",on:{click:function(n){return n.preventDefault(),t.edit(e)}}},[n("icon",{attrs:{name:"create"}})],1):t._e(),t._v(" "),t.User.can("delete groups")?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Delete Group",expression:"'Delete Group'"}],staticClass:"btn btn-link",on:{click:function(n){return n.preventDefault(),t.destroy(e)}}},[n("icon",{attrs:{name:"trash"}})],1):t._e()]):t._e()])])})),0)])])]):t._e()]),t._v(" "),t.showForm?n("group-form",{attrs:{group:t.group},on:{create:function(e){return t.created(e)},update:function(e){return t.updated(e)},close:t.closeForm}}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow-1"},[e("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Search Groups"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Group Name")]),t._v(" "),n("th",[t._v("Owner")]),t._v(" "),n("th",[t._v("Members")]),t._v(" "),n("th")])])}],!1,null,"0987db7a",null).exports}}]);
//# sourceMappingURL=groups.8b89b96067653999.js.map