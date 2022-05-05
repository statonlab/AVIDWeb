"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[733],{414:(e,t,s)=>{s.d(t,{Z:()=>r});const a={name:"Pager",props:{lastPage:{required:!0,type:Number},page:{required:!0,type:Number},hideIfEmpty:{required:!1,type:Boolean,default:!0}},data:function(){return{currentPage:1}},mounted:function(){this.currentPage=this.page},watch:{page:function(e){this.currentPage=e},currentPage:function(e){this.change(e)}},methods:{previous:function(){1!==this.page&&this.$emit("change",this.page-1)},next:function(){this.lastPage!==this.page&&this.$emit("change",this.page+1)},change:function(e){this.page!==e&&this.$emit("change",e)}}};const r=(0,s(1900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return!e.hideIfEmpty||e.lastPage>1?s("nav",{staticClass:"d-flex w-100 justify-content-between align-items-center",attrs:{"aria-label":"Page navigation"}},[s("button",{staticClass:"btn btn-white",attrs:{disabled:1===e.page,type:"button"},on:{click:function(t){return t.preventDefault(),e.previous()}}},[e._v("\n    Previous\n  ")]),e._v(" "),s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPage,expression:"currentPage"}],staticClass:"custom-select w-auto",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.currentPage=t.target.multiple?s:s[0]}}},e._l(e.lastPage,(function(t){return s("option",{domProps:{value:t}},[e._v("\n        Page "+e._s(t)+"\n      ")])})),0)]),e._v(" "),s("button",{staticClass:"btn btn-white",attrs:{disabled:e.page===e.lastPage,type:"button"},on:{click:function(t){return t.preventDefault(),e.next()}}},[e._v("\n    Next\n  ")])]):e._e()}),[],!1,null,"645860e9",null).exports},6813:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(7757),r=s.n(a),n=s(1808),i=s(393),o=s(414);function c(e,t,s,a,r,n,i){try{var o=e[n](i),c=o.value}catch(e){return void s(e)}o.done?t(c):Promise.resolve(c).then(a,r)}function l(e){return function(){var t=this,s=arguments;return new Promise((function(a,r){var n=e.apply(t,s);function i(e){c(n,a,r,i,o,"next",e)}function o(e){c(n,a,r,i,o,"throw",e)}i(void 0)}))}}const u={name:"User",components:{InlineSpinner:i.Z,Avatar:n.Z,Pager:o.Z},data:function(){return{user:null,userRole:"",sites:[],roles:[],loading:!0,search:"",page:1,lastPage:1}},mounted:function(){this.loadUser(),this.loadSites(),this.loadRoles(),this.loading=!1},watch:{search:function(){this.loadSites()}},methods:{loadUser:function(){var e=this;return l(r().mark((function t(){var s,a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.$route.params.id,t.next=4,axios.get("/web/users/".concat(s));case 4:a=t.sent,n=a.data,e.user=n,e.userRole="".concat(e.user.role_id),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},loadSites:function(){var e=this;return l(r().mark((function t(){var s,a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.$route.params.id,t.next=4,axios.get("/web/user/".concat(s,"/sites"),{params:{search:e.search,page:e.page}});case 4:a=t.sent,n=a.data,e.sites=n.data,e.page=n.current_page,e.lastPage=n.last_page,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},loadRoles:function(){var e=this;return l(r().mark((function t(){var s,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/roles");case 3:s=t.sent,a=s.data,e.roles=a,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},setRole:function(){var e=this;return l(r().mark((function t(){var s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.$route.params.id,t.next=4,axios.patch("/web/user/".concat(s,"/role"),{role:e.userRole});case 4:e.$notify({text:"Role updated successfully.",type:"success"}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},goTo:function(e){this.loading=!0,this.page=e,this.loadSites(),this.loading=!1}}};const d=(0,s(1900).Z)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.loading?s("inline-spinner"):e._e(),e._v(" "),!e.loading&&e.user?s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-4 col-md-5"},[s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body d-flex align-items-center"},[s("avatar",{staticClass:"flex-shrink-0",attrs:{user:e.user,tooltip:!1}}),e._v(" "),s("div",{staticClass:"ml-3"},[s("strong",[e._v(e._s(e.user.name))]),e._v(" "),s("p",{staticClass:"mb-0 text-muted"},[e._v(e._s("Member since "+e.user.member_since))]),e._v(" "),s("a",{attrs:{href:"mailto:"+e.user.email}},[e._v("\n                            "+e._s(e.user.email)+"\n                        ")])])],1)]),e._v(" "),s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-body rounded"},[s("p",{staticClass:"font-weight-bold text-dark text-sm mb-1"},[e._v("Roles")]),e._v(" "),e._l(e.roles,(function(t,a){return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userRole,expression:"userRole"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"role-"+a,name:"role-select"},domProps:{value:""+t.id,checked:e._q(e.userRole,""+t.id)},on:{change:[function(s){e.userRole=""+t.id},e.setRole]}}),e._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"role-"+a}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])])])}))],2)])]),e._v(" "),s("div",{staticClass:"col-xl-8 col-md-7"},[s("div",{staticClass:"d-flex"},[s("h1",{staticClass:"page-title mb-3"},[e._v("Sites")]),e._v(" "),s("div",{staticClass:"ml-auto text-muted"},[e._v("\n                    Page "+e._s(e.page)+" of "+e._s(e.lastPage)+"\n                ")])]),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex p-2"},[s("div",{staticClass:"flex-grow-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),e.loading?s("p",{staticClass:"mb-0 p-4"},[s("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),e.loading||0!==e.sites.length?e._e():s("p",{staticClass:"mb-0 p-4 text-muted"},[e._v("\n                    User does not have any sites.\n                ")]),e._v(" "),!e.loading&&e.sites.length>0?s("table",{staticClass:"table mb-0 table-middle table-hover"},[e._m(0),e._v(" "),s("tbody",e._l(e.sites,(function(t){return s("tr",{staticClass:"on-hover"},[s("td",[s("router-link",{attrs:{to:"/app/sites/"+t.id}},[s("strong",[e._v(e._s(t.name))])]),e._v(" "),s("div",{staticClass:"text-muted"},[e._v("\n                                    "+e._s(t.county.name)+", "+e._s(t.state.code)+"\n                                ")])],1),e._v(" "),s("td",{staticClass:"text-right"},[e._v(e._s(t.plots_count))]),e._v(" "),s("td",{staticClass:"text-right"},[e._v(e._s(t.plants_count))])])})),0)]):e._e()]),e._v(" "),s("pager",{attrs:{"last-page":e.lastPage,page:e.page},on:{change:function(t){return e.goTo(t)}}})],1)]):e._e()],1)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{staticStyle:{width:"100%"}},[e._v("Name")]),e._v(" "),s("th",[e._v("Plots")]),e._v(" "),s("th",[e._v("Plants")]),e._v(" "),s("th")])])}],!1,null,"34204a09",null).exports}}]);
//# sourceMappingURL=user.dae5b20849ba5aab.js.map