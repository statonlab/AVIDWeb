(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"9yqQ":function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),r=a.n(s),n=a("m/BY"),i=a("TTxJ"),o=a("yJCx");function l(e,t,a,s,r,n,i){try{var o=e[n](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(s,r)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(s,r){var n=e.apply(t,a);function i(e){l(n,s,r,i,o,"next",e)}function o(e){l(n,s,r,i,o,"throw",e)}i(void 0)}))}}var u={name:"User",components:{InlineSpinner:i.a,Avatar:n.a,Pager:o.a},data:function(){return{user:null,userRole:"",sites:[],roles:[],loading:!0,search:"",page:1,lastPage:1}},mounted:function(){this.loadUser(),this.loadSites(),this.loadRoles(),this.loading=!1},watch:{search:function(){this.loadSites()}},methods:{loadUser:function(){var e=this;return c(r.a.mark((function t(){var a,s,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$route.params.id,t.next=4,axios.get("/web/users/".concat(a));case 4:s=t.sent,n=s.data,e.user=n,e.userRole="".concat(e.user.role_id),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},loadSites:function(){var e=this;return c(r.a.mark((function t(){var a,s,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$route.params.id,t.next=4,axios.get("/web/user/".concat(a,"/sites"),{params:{search:e.search,page:e.page}});case 4:s=t.sent,n=s.data,e.sites=n.data,e.page=n.current_page,e.lastPage=n.last_page,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},loadRoles:function(){var e=this;return c(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/roles");case 3:a=t.sent,s=a.data,e.roles=s,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},setRole:function(){var e=this;return c(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$route.params.id,t.next=4,axios.patch("/web/user/".concat(a,"/role"),{role:e.userRole});case 4:e.$notify({text:"Role updated successfully.",type:"success"}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),e.$notify({text:"Unable to process this request. Please try refreshing the page.",type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},goTo:function(e){this.loading=!0,this.page=e,this.loadSites(),this.loading=!1}}},d=a("KHd+"),p=Object(d.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("inline-spinner"):e._e(),e._v(" "),!e.loading&&e.user?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4 col-md-5"},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-body d-flex align-items-center"},[a("avatar",{staticClass:"flex-shrink-0",attrs:{user:e.user,tooltip:!1}}),e._v(" "),a("div",{staticClass:"ml-3"},[a("strong",[e._v(e._s(e.user.name))]),e._v(" "),a("p",{staticClass:"mb-0 text-muted"},[e._v(e._s("Member since "+e.user.member_since))]),e._v(" "),a("a",{attrs:{href:"mailto:"+e.user.email}},[e._v("\n                            "+e._s(e.user.email)+"\n                        ")])])],1)]),e._v(" "),a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-body rounded"},[a("p",{staticClass:"font-weight-bold text-dark text-sm mb-1"},[e._v("Roles")]),e._v(" "),e._l(e.roles,(function(t,s){return a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userRole,expression:"userRole"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"role-"+s,name:"role-select"},domProps:{value:""+t.id,checked:e._q(e.userRole,""+t.id)},on:{change:[function(a){e.userRole=""+t.id},e.setRole]}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"role-"+s}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])])])}))],2)])]),e._v(" "),a("div",{staticClass:"col-xl-8 col-md-7"},[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"page-title mb-3"},[e._v("Sites")]),e._v(" "),a("div",{staticClass:"ml-auto text-muted"},[e._v("\n                    Page "+e._s(e.page)+" of "+e._s(e.lastPage)+"\n                ")])]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex p-2"},[a("div",{staticClass:"flex-grow-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),e.loading?a("p",{staticClass:"mb-0 p-4"},[a("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),e.loading||0!==e.sites.length?e._e():a("p",{staticClass:"mb-0 p-4 text-muted"},[e._v("\n                    User does not have any sites.\n                ")]),e._v(" "),!e.loading&&e.sites.length>0?a("table",{staticClass:"table mb-0 table-middle table-hover"},[e._m(0),e._v(" "),a("tbody",e._l(e.sites,(function(t){return a("tr",{staticClass:"on-hover"},[a("td",[a("router-link",{attrs:{to:"/app/sites/"+t.id}},[a("strong",[e._v(e._s(t.name))])]),e._v(" "),a("div",{staticClass:"text-muted"},[e._v("\n                                    "+e._s(t.county.name)+", "+e._s(t.state.code)+"\n                                ")])],1),e._v(" "),a("td",{staticClass:"text-right"},[e._v(e._s(t.plots_count))]),e._v(" "),a("td",{staticClass:"text-right"},[e._v(e._s(t.plants_count))])])})),0)]):e._e()]),e._v(" "),a("pager",{attrs:{"last-page":e.lastPage,page:e.page},on:{change:function(t){return e.goTo(t)}}})],1)]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{staticStyle:{width:"100%"}},[this._v("Name")]),this._v(" "),t("th",[this._v("Plots")]),this._v(" "),t("th",[this._v("Plants")]),this._v(" "),t("th")])])}],!1,null,"34204a09",null);t.default=p.exports},yJCx:function(e,t,a){"use strict";var s={name:"Pager",props:{lastPage:{required:!0,type:Number},page:{required:!0,type:Number}},methods:{previous:function(){1!==this.page&&this.$emit("change",this.page-1)},next:function(){this.lastPage!==this.page&&this.$emit("change",this.page+1)},change:function(e){this.page!==e&&this.$emit("change",e)}}},r=a("KHd+"),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lastPage>1?a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center mb-0"},[a("li",{class:["page-item",{disabled:1===e.page}]},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":1===e.page?"true":"false"},on:{click:function(t){return t.preventDefault(),e.previous()}}},[e._v("Previous")])]),e._v(" "),e._l(e.lastPage,(function(t){return a("li",{class:["page-item",{active:e.page===t}]},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.change(t)}}},[e._v(e._s(t))])])})),e._v(" "),a("li",{class:["page-item",{disabled:e.lastPage===e.page}]},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":e.lastPage===e.page?"true":"false"},on:{click:function(t){return t.preventDefault(),e.next()}}},[e._v("Next")])])],2)]):e._e()}),[],!1,null,"d369b0ee",null);t.a=n.exports}}]);
//# sourceMappingURL=user.js.map?id=aa104f73b169424b0af5