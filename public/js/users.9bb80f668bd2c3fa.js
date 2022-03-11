"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[571],{8455:(e,t,a)=>{a.d(t,{Z:()=>r});const s={name:"Pager",props:{lastPage:{required:!0,type:Number},page:{required:!0,type:Number}},methods:{previous:function(){1!==this.page&&this.$emit("change",this.page-1)},next:function(){this.lastPage!==this.page&&this.$emit("change",this.page+1)},change:function(e){this.page!==e&&this.$emit("change",e)}}};const r=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lastPage>1?a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center mb-0"},[a("li",{class:["page-item",{disabled:1===e.page}]},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":1===e.page?"true":"false"},on:{click:function(t){return t.preventDefault(),e.previous()}}},[e._v("Previous")])]),e._v(" "),e._l(e.lastPage,(function(t){return a("li",{class:["page-item",{active:e.page===t}]},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.change(t)}}},[e._v(e._s(t))])])})),e._v(" "),a("li",{class:["page-item",{disabled:e.lastPage===e.page}]},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":e.lastPage===e.page?"true":"false"},on:{click:function(t){return t.preventDefault(),e.next()}}},[e._v("Next")])])],2)]):e._e()}),[],!1,null,"d369b0ee",null).exports},8721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(7757),r=a.n(s),n=a(4090),i=a(393),c=a(8455);function o(e,t,a,s,r,n,i){try{var c=e[n](i),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(s,r)}const l={name:"Users",components:{Avatar:a(1808).Z,Pager:c.Z,InlineSpinner:i.Z,Icon:n.Z},data:function(){return{loading:!0,users:[],search:"",page:1,lastPage:1,total:0,orderBy:"name",orderDir:"asc"}},mounted:function(){this.loadUsers()},watch:{search:function(){this.loadUsers()}},methods:{loadUsers:function(){var e,t=this;return(e=r().mark((function e(){var a,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/web/users",{params:{search:t.search,page:t.page,order_by:t.orderBy,order_dir:t.orderDir},cancelToken:new axios.CancelToken((function(e){return t.request=e}))});case 3:a=e.sent,s=a.data,t.users=s.data,t.page=s.current_page,t.lastPage=s.last_page,t.total=s.total,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),axios.isCancel(e.t0)||(t.$notify({type:"error",text:"Unable to load species. Please try refreshing the page."}),console.error(e.t0));case 14:t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var t=this,a=arguments;return new Promise((function(s,r){var n=e.apply(t,a);function i(e){o(n,s,r,i,c,"next",e)}function c(e){o(n,s,r,i,c,"throw",e)}i(void 0)}))})()},goTo:function(e){this.loading=!0,this.page=e,this.loadUsers()},sort:function(e){e===this.orderBy?this.orderDir="asc"===this.orderDir?"desc":"asc":(this.orderBy=e,this.orderDir="asc"),this.loadUsers()},sortIcon:function(e){return e!==this.orderBy?"swap-vertical":"asc"===this.orderDir?"arrow-up":"arrow-down"}}};const u=(0,a(1900).Z)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"page-title mb-3"},[e._v("Users")]),e._v(" "),a("div",{staticClass:"ml-auto text-muted"},[e._v("\n            Page "+e._s(e.page)+" of "+e._s(e.lastPage)+"\n        ")])]),e._v(" "),a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-header d-flex p-2"},[a("div",{staticClass:"flex-grow-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search...",title:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"card-body p-0"},[e.loading?a("div",{staticClass:"d-flex align-items-center justify-content-center p-3"},[a("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),0!==e.users.length||e.loading?e._e():a("p",{staticClass:"text-muted mb-0 p-3"},[e._v("\n                There are no users found.\n            ")]),e._v(" "),e.users.length>0&&!e.loading?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-middle mb-0"},[a("thead",[a("tr",[a("th",{staticStyle:{width:"55px"}}),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("name")}}},[a("span",{staticClass:"mr-1"},[e._v("Name")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("name")}})],1)]),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("sites_count")}}},[a("span",{staticClass:"mr-1"},[e._v("Sites")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("sites_count")}})],1)]),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("created_at")}}},[a("span",{staticClass:"mr-1"},[e._v("Member Since")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("created_at")}})],1)]),e._v(" "),a("th",[e._v("Role")])])]),e._v(" "),a("tbody",e._l(e.users,(function(t){return a("tr",{staticClass:"hover-visible-container"},[a("td",{staticStyle:{width:"55px"}},[a("avatar",{attrs:{user:t,tooltip:!1}})],1),e._v(" "),a("td",[a("router-link",{attrs:{to:"/app/users/"+t.id}},[a("div",[e._v(e._s(t.name))])]),e._v(" "),a("div",[a("a",{staticClass:"text-muted",attrs:{href:"mailto:"+t.email}},[e._v("\n                                    "+e._s(t.email)+"\n                                ")])])],1),e._v(" "),a("td",[e._v("\n                            "+e._s(t.sites_count)+"\n                        ")]),e._v(" "),a("td",[a("div",[e._v(e._s(t.member_since))])]),e._v(" "),a("td",[a("div",[e._v(e._s(t.role.name))])])])})),0)])]):e._e()])]),e._v(" "),a("pager",{attrs:{"last-page":e.lastPage,page:e.page},on:{change:function(t){return e.goTo(t)}}})],1)}),[],!1,null,"7d6a55f4",null).exports}}]);
//# sourceMappingURL=users.9bb80f668bd2c3fa.js.map