(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0xdh":function(t,e,a){"use strict";a.r(e);var s=a("cv7c"),n=a("o0o1"),r=a.n(n),i=a("mXro"),o=a("EyHm");function l(t,e,a,s,n,r,i){try{var o=t[r](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,n)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var r=t.apply(e,a);function i(t){l(r,s,n,i,o,"next",t)}function o(t){l(r,s,n,i,o,"throw",t)}i(void 0)}))}}var d={name:"StatisticsCard",components:{ApexChart:a.n(o).a,Dropdown:i.a,Icon:s.a},mounted:function(){this.setChartDefault(),this.loadSites(),this.loadTypes()},data:function(){return{site:"",chart:null,sites:[],type:"",plants:[],loadingSites:!1,_request:null}},watch:{site:function(){this.loadChart()},type:function(){this.loadChart()}},computed:{plantOptions:function(){return[{label:"All Plants",value:""}].concat(this.plants.map((function(t){return{label:t.name,value:t.id}})))}},methods:{loadTypes:function(){var t=this;return c(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/web/plant-types");case 3:a=e.sent,s=a.data,t.plants=s,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$alert("Unable to load plants. Please try refreshing the page.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loadSites:function(){var t=this;return c(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingSites=!0,e.prev=1,e.next=4,axios.get("/web/statistics/sites");case 4:a=e.sent,s=a.data,t.sites=s,""===t.site&&s.length>0&&(t.site=t.sites[0].id),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.$alert("Unable to load sites. Please try refreshing the page or contact us."),console.error(e.t0);case 14:t.loadingSites=!1,t.loadChart();case 16:case"end":return e.stop()}}),e,null,[[1,10]])})))()},loadChart:function(){var t=this;return c(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._request&&t._request(),e.prev=1,!t.site){e.next=8;break}return e.next=5,axios.get("/web/statistics/".concat(t.site,"/chart"),{params:{plant_type_id:t.type}});case 5:a=e.sent,0!==(s=a.data).length?t.setChart(s):t.setChartDefault();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),axios.isCancel()||(t.$alert("Unable to load sites. Please try refreshing the page or contact us."),console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},setChartDefault:function(){this.chart={options:{chart:{id:"sites-chart",toolbar:{show:!1}},xaxis:{labels:{show:!1}},yaxis:{title:{text:"Annual Height (inches)",style:{fontSize:14}}},noData:{text:"No measurements found."}},series:[{name:"protected",data:[]},{name:"unprotected",data:[]}]}},setChart:function(t){this.chart={options:{chart:{id:"sites-chart",toolbar:{show:!1}},xaxis:{labels:{show:!0},categories:t.xaxis},yaxis:{title:{text:"Annual Height (inches)",style:{fontSize:14}}},colors:["#2E93FA","#2EB07A"],dataLabels:{formatter:function(e,a){var s=a.seriesIndex,n=a.dataPointIndex;return e+" (N=".concat(t.data[s].count[n],")")}},noData:{text:"No measurements found."}},series:[{name:"protected",data:t.data[0].protected},{name:"unprotected",data:t.data[1].unprotected}]}}}},u=a("KHd+"),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex"},[t._m(0),t._v(" "),a("div",{staticClass:"flex-shrink-0 d-flex"},[a("dropdown",{staticClass:"bg-white",attrs:{options:t.sites.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.site,callback:function(e){t.site=e},expression:"site"}}),t._v(" "),a("dropdown",{staticClass:"bg-white ml-2",attrs:{options:t.plantOptions},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]),t._v(" "),a("div",{staticClass:"card-body p-2"},[t.chart?a("div",{staticClass:"mr-4"},[a("apex-chart",{attrs:{type:"bar",options:t.chart.options,series:t.chart.series}})],1):t._e()]),t._v(" "),a("div",{staticClass:"card-footer border-top text-right"},[a("a",{staticClass:"btn btn-link",attrs:{href:"/app/statistics"}},[a("span",{staticClass:"mr-2"},[t._v("Visit Statistics Page")]),t._v(" "),a("icon",{attrs:{name:"chevron-forward-outline"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow-1"},[e("strong",[this._v("Annual Height Chart")])])}],!1,null,null,null).exports,h=a("TTxJ"),f=a("wd/R"),v=a.n(f);function m(t,e,a,s,n,r,i){try{var o=t[r](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,n)}var _={name:"DashboardSitesCard",components:{Icon:s.a,InlineSpinner:h.a},mounted:function(){this.loadSites()},data:function(){return{moment:v.a,loading:!0,sites:null,orderBy:"last_measured_at",orderDir:"asc"}},methods:{loadSites:function(){var t,e=this;return(t=r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/sites",{params:{order_by:e.orderBy,order_dir:e.orderDir,limit:10},cancelToken:new axios.CancelToken((function(t){return e._request=t}))});case 3:a=t.sent,s=a.data,e.sites=s.data,e.loading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),axios.isCancel(t.t0)||(e.loading=!1,console.error(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})),function(){var e=this,a=arguments;return new Promise((function(s,n){var r=t.apply(e,a);function i(t){m(r,s,n,i,o,"next",t)}function o(t){m(r,s,n,i,o,"throw",t)}i(void 0)}))})()},sort:function(t){t===this.orderBy?this.orderDir="asc"===this.orderDir?"desc":"asc":(this.orderBy=t,this.orderDir="asc"),this.loadSites()},sortIcon:function(t){return t!==this.orderBy?"swap-vertical":"asc"===this.orderDir?"arrow-up":"arrow-down"}}},x=Object(u.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body p-0 table-responsive"},[t.loading?a("p",{staticClass:"mb-0 p-4"},[a("inline-spinner",{staticClass:"text-primary"})],1):t._e(),t._v(" "),t.loading||0!==t.sites.length?t._e():a("p",{staticClass:"mb-0 p-4 text-muted"},[t._v('\n            No sites found. Visit the "My Data" page to get started.\n        ')]),t._v(" "),!t.loading&&t.sites.length>0?a("table",{staticClass:"table mb-0 table-middle table-hover"},[a("thead",[a("tr",[a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sort("name")}}},[a("span",{staticClass:"mr-1"},[t._v("Name")]),t._v(" "),a("icon",{attrs:{name:t.sortIcon("name")}})],1)]),t._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sort("last_measured_at")}}},[a("span",{staticClass:"mr-1"},[t._v("Last Measured")]),t._v(" "),a("icon",{attrs:{name:t.sortIcon("last_measured_at")}})],1)])])]),t._v(" "),a("tbody",t._l(t.sites,(function(e){return a("tr",[a("td",[a("router-link",{attrs:{to:"app/sites/"+e.id}},[a("strong",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"text-muted"},[t._v("\n                        "+t._s(e.county.name)+", "+t._s(e.state.code)+"\n                    ")])],1),t._v(" "),a("td",[e.last_measured_at?a("span",[t._v("\n                        "+t._s(t.moment(e.last_measured_at).format("MMM Do, YYYY"))+"\n                    ")]):t._e()])])})),0)]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("strong",[this._v("Sites")])])}],!1,null,null,null).exports,b={name:"Dashboard",components:{RemindersCalendar:a("odEN").a,Icon:s.a,DashboardSitesCard:x,StatisticsCard:p}},y=Object(u.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card mb-3 p-2"},[e("reminders-calendar")],1)]),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("statistics-card",{staticClass:"mb-3"})],1),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("dashboard-sites-card",{staticClass:"mb-3"})],1)])])}),[],!1,null,"207e264b",null);e.default=y.exports},mXro:function(t,e,a){"use strict";var s=a("cv7c"),n={name:"Dropdown",components:{InlineSpinner:a("TTxJ").a,Icon:s.a},props:{options:{required:!0,type:Array},value:{required:!1,default:null},placeholder:{required:!1,type:String,default:"Select"},emptyMessage:{required:!1,type:String,default:"No results found. Try adjusting your search terms."},endMessage:{required:!1,type:String,default:""},disabled:{required:!1,type:Boolean,default:!1},autocomplete:{required:!1,type:Boolean,default:!1},loading:{required:!1,type:Boolean,default:!1},error:{required:!1,type:Boolean,default:!1},maxWidth:{required:!1,type:Number,default:230},btnClass:{required:!1,type:String,default:"btn-select"},total:{required:!1,type:Number,default:0},lengthToSearch:{required:!1,type:Number,default:0},searchMessage:{required:!1,type:String,default:""},noBorder:{required:!1,type:Boolean,default:!1}},data:function(){return{index:null}},computed:{selected:function(){return null===this.index||0===this.options.length?this.placeholder:this.options[this.index]?this.options[this.index].label:this.placeholder}},mounted:function(){this.setIndex()},watch:{options:{handler:function(){this.setIndex()},deep:!0},value:function(){this.setIndex()}},methods:{setIndex:function(){if(null!==this.value)for(var t=this.options,e=0;e<t.length;e++)if(this.value===t[e].value)return void(this.index=e)},select:function(t,e){this.$emit("input",t.value),this.index=e},focus:function(){var t=this;this.autocomplete&&setTimeout((function(){t.$refs.search.focus(),t.$refs.search.select()}),100)},clear:function(){this.$emit("input",null),this.index=null},down:function(){var t=$(this.$refs.menu).find(".dropdown-item").first();t.length&&t.focus()},up:function(t){this.autocomplete&&0===t&&this.focus()}}},r=a("KHd+"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown autocomplete"},[a("button",{ref:"btn",staticClass:"font-weight-normal",class:["btn","d-flex",t.btnClass,{"btn-placeholder-effect":null===t.value,"btn-select-active":null!==t.value,"border-danger":t.error,"border-0":t.noBorder}],attrs:{"data-toggle":"dropdown","data-boundary":"window",disabled:t.disabled,"data-flip":"false"},on:{click:function(e){return t.focus()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focus()}}},[a("span",{staticClass:"text-case-normal"},[t._v("\n      "+t._s(t.selected)+"\n    ")]),t._v(" "),t.loading?a("inline-spinner",{staticClass:"ml-auto text-primary"}):a("icon",{staticClass:"ml-auto btn-dropdown-icon",attrs:{name:"caret-down"}})],1),t._v(" "),a("div",{ref:"menu",staticClass:"dropdown-menu w-100",style:"max-width: "+t.maxWidth+"px;"},[t.autocomplete?a("div",{staticClass:"pb-2 px-3"},[a("input",{ref:"search",staticClass:"form-control form-control-sm",attrs:{type:"search",placeholder:"Search...",title:"Search"},on:{keyup:function(e){return t.$emit("search",e.target.value)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down()},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.options.length>0&&t.select(t.options[0],0)}]}})]):t._e(),t._v(" "),t._t("header"),t._v(" "),t._l(t.options,(function(e,s){return a("a",{class:["dropdown-item",{active:e.value===t.value}],attrs:{href:"#"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(s)},click:function(a){return a.preventDefault(),t.select(e,s)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),t._v(" "),t._t("default"),t._v(" "),0===t.options.length&&t.value<t.lengthToSearch&&t.searchMessage?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[t._v("\n      "+t._s(t.searchMessage)+"\n    ")]):t.options.length<t.total?a("p",{staticClass:"text-muted text-center p-2 mb-0"},[t._v("\n      "+t._s("Showing "+t.options.length+" of "+t.total+". Please search to see more")+"\n    ")]):0===t.options.length&&t.emptyMessage.length?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[t._v(t._s(t.emptyMessage))]):t.endMessage.length?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[a("small",[t._v(t._s(t.endMessage))])]):t._e(),t._v(" "),t._t("footer")],2)])}),[],!1,null,"ead72f32",null);e.a=i.exports}}]);
//# sourceMappingURL=dashboard.js.map?id=979c3431721c1411c3e2