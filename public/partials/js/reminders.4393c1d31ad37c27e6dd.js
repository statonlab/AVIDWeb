(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2+zd":function(e,t,n){(t=e.exports=n("I1BE")(!1)).i(n("hMIB"),""),t.i(n("Q3Jf"),""),t.i(n("YB49"),""),t.push([e.i,"",""])},SCm9:function(e,t,n){var r=n("2+zd");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(e.exports=r.locals)},iOyG:function(e,t,n){"use strict";var r=n("SCm9");n.n(r).a},pPER:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),s=n("cv7c"),i=n("klO2"),o=n("JUFj"),l=n("wXy6"),c=n("vQtE"),d=n("1MU1"),u=n("mS+z"),m=n("yoRh"),v=n("ke3Z"),f=n("TTxJ");function p(e,t,n,r,a,s,i){try{var o=e[s](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){p(s,r,a,i,o,"next",e)}function o(e){p(s,r,a,i,o,"throw",e)}i(void 0)}))}}var _={name:"ReminderForm",components:{Required:n("MEn4").a,InlineSpinner:f.a,Close:m.a,ModalFooter:u.a,ModalBody:d.a,ModalTitle:c.a,ModalHeader:l.a,ModalCard:o.a,Modal:i.a},props:{reminder:{required:!1}},data:function(){return{loading:!1,form:new v.a({days:"",site_id:""}),sites:[]}},mounted:function(){this.reminder&&this.form.setDefault(this.reminder),this.loadSites()},methods:{loadSites:function(){var e=this;return h(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,axios.get("/web/sites",{params:{limit:1e3}});case 4:n=t.sent,r=n.data,e.sites=r.data,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},save:function(){this.reminder?this.update():this.create()},create:function(){var e=this;return h(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.form.post("/web/reminders");case 4:n=t.sent,r=n.data,e.$notify({type:"success",text:"Reminder created successfully."}),e.$emit("create",r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&422===t.t0.response.status||(e.$alert("Unable to create reminder. Please try refreshing the page."),console.error(t.t0));case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},update:function(){var e=this;return h(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.form.put("/web/reminders/".concat(e.reminder.id));case 4:n=t.sent,r=n.data,e.$notify({type:"success",text:"Reminder update successfully."}),e.$emit("update",r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&422===t.t0.response.status||(e.$alert("Unable to update reminder. Please try refreshing the page."),console.error(t.t0));case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}},b=n("KHd+"),y=Object(b.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{on:{close:function(t){return e.$emit("close")}}},[n("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.save(t)},keydown:function(t){return e.form.errors.clear(t.target.name)}}},[n("modal-card",[n("modal-header",[e.reminder?e._e():n("modal-title",[e._v("Create a Reminder")]),e._v(" "),e.reminder?n("modal-title",[e._v("Update Reminder")]):e._e(),e._v(" "),n("close",{on:{click:function(t){return e.$emit("close")}}})],1),e._v(" "),n("modal-body",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"days"}},[e._v("Specify how many days must pass after a measurement has been recorded.")]),e._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.days,expression:"form.days"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("days")},staticStyle:{width:"80px"},attrs:{name:"days",id:"days",placeholder:"Days",title:"Number of days",autofocus:""},domProps:{value:e.form.days},on:{input:function(t){t.target.composing||e.$set(e.form,"days",t.target.value)}}}),e._v(" "),n("span",{staticClass:"ml-1"},[e._v("days after last measurement.")])]),e._v(" "),e.form.errors.has("days")?n("small",{staticClass:"form-text text-danger"},[e._v("\n                        "+e._s(e.form.errors.first("days"))+"\n                    ")]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"site"}},[e._v("\n                        Site\n                        "),n("required")],1),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.site_id,expression:"form.site_id"}],staticClass:"custom-select",attrs:{name:"site",id:"site"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"site_id",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("Select a Site")]),e._v(" "),e._l(e.sites,(function(t){return n("option",{domProps:{value:t.id}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}))],2)]),e._v(" "),n("div",[n("small",[n("strong",[e._v("Note")]),e._v(" that you will receive no more than 3 emails a week for each reminder.")])])]),e._v(" "),n("modal-footer",{staticClass:"d-flex"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.loading}},[e.loading?n("inline-spinner"):e._e(),e._v(" "),n("span",[e._v("Save")])],1),e._v(" "),n("button",{staticClass:"btn btn-light ml-auto",attrs:{disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.$emit("close")}}},[e._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"bbe66a06",null).exports,g=n("tzoz"),w=n("wd/R"),x=n.n(w);function C(e,t,n,r,a,s,i){try{var o=e[s](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){C(s,r,a,i,o,"next",e)}function o(e){C(s,r,a,i,o,"throw",e)}i(void 0)}))}}var R={name:"Reminders",components:{RemindersCalendar:g.a,ReminderForm:y,Icon:s.a},data:function(){return{moment:x.a,reminders:[],showForm:!1,reminder:null,loading:!0}},mounted:function(){this.loadReminders()},methods:{loadReminders:function(){var e=this;return k(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,axios.get("/web/reminders");case 4:n=t.sent,r=n.data,e.reminders=r,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0),e.$alert("Unable to load reminders. Please try refreshing the page.");case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},created:function(e){this.reminders.push(e),this.closeForm()},updated:function(e){this.reminders=this.reminders.map((function(t){return t.id===e.id?e:t})),this.closeForm()},closeForm:function(){this.showForm=!1,this.reminder=null},edit:function(e){this.reminder=e,this.showForm=!0},destroy:function(e){var t,n=this;this.$confirm({title:"Delete Reminder?",text:'"'.concat(e.days,' days after last measurement." will be permanently removed.'),onConfirm:(t=k(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.delete("/web/reminders/".concat(e.id));case 3:n.reminders=n.reminders.filter((function(t){return t.id!==e.id})),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0),n.$alert("Unable to delete reminder. Please try refreshing the page.");case 10:case"end":return t.stop()}}),t,null,[[0,6]])}))),function(){return t.apply(this,arguments)})})}}},$=Object(b.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"d-flex card-header align-items-center"},[e._m(1),e._v(" "),n("div",{staticClass:"flex-shrink-0"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.showForm=!0}}},[n("icon",{attrs:{name:"add"}}),e._v(" "),n("span",[e._v("New Reminder")])],1)])]),e._v(" "),n("div",{staticClass:"card-body p-0 table-responsive"},[e.loading||0!==e.reminders.length?e._e():n("div",{staticClass:"p-3 d-flex align-items-center justify-content-center flex-column text-center"},[n("div",{staticClass:"d-flex align-items-center justify-content-center icon-circle"},[n("icon",{attrs:{name:"notifications"}})],1),e._v(" "),n("div",{staticClass:"mt-3 mb-3  mx-auto max-w-700"},[e._m(2),e._v(" "),n("p",{staticClass:"text-muted"},[e._v("\n                        Here you will be able to setup reminders to help you plan\n                        your next measurement trips. Reminders will be emailed to\n                        you depending on the settings you select for each reminder.\n                    ")]),e._v(" "),n("p",{staticClass:"text-muted"},[e._v("\n                        Get started by creating a new reminder using the button below.\n                    ")]),e._v(" "),n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.showForm=!0}}},[n("icon",{attrs:{name:"add"}}),e._v(" "),n("span",[e._v("New Reminder")])],1)])]),e._v(" "),!e.loading&&e.reminders.length>0?n("table",{staticClass:"table mb-0 table-middle table-nowrap table-hover"},[e._m(3),e._v(" "),n("tbody",e._l(e.reminders,(function(t){return n("tr",{staticClass:"hover-visible-container"},[n("td",[n("router-link",{attrs:{to:"/app/sites/"+t.site.id}},[n("strong",[e._v(e._s(t.site.name))])]),e._v(" "),n("div",[n("strong",[e._v(e._s(t.days)+" days")]),e._v(" "),n("span",{staticClass:"text-muted"},[e._v("after last measurement")])])],1),e._v(" "),n("td",[t.site.last_measured_at?n("span",[e._v(e._s(e.moment(t.site.last_measured_at).format("MMM Do, YYYY")))]):e._e()]),e._v(" "),n("td",[n("div",{staticClass:"d-flex justify-content-end hover-visible"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Edit Reminder",expression:"'Edit Reminder'",modifiers:{left:!0}}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),e.edit(t)}}},[n("icon",{attrs:{name:"create"}})],1),e._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:"Delete Reminder",expression:"'Delete Reminder'",modifiers:{right:!0}}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),e.destroy(t)}}},[n("icon",{attrs:{name:"trash"}})],1)])])])})),0)]):e._e()])]),e._v(" "),e.showForm?n("reminder-form",{attrs:{reminder:e.reminder},on:{close:e.closeForm,create:e.created,update:e.updated}}):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex mb-3"},[t("div",{staticClass:"flex-grow-1"},[t("h1",{staticClass:"page-title"},[this._v("My Reminders")]),this._v(" "),t("p",{staticClass:"mb-0 text-muted"},[this._v("Schedule & manage reminders")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-grow-1"},[t("strong",[this._v("Reminders")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Welcome to Reminders")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Reminder")]),this._v(" "),t("th",[this._v("Last Measured At")]),this._v(" "),t("th")])])}],!1,null,"40452302",null);t.default=$.exports},tzoz:function(e,t,n){"use strict";var r=n("3Am6"),a=n("iOEq"),s=n("+Izv"),i=n("Gbwi"),o={name:"Calendar",components:{FullCalendar:r.a},props:{events:{required:!0}},data:function(){return{calendarPlugins:[a.a,s.a,i.a]}}},l=(n("iOyG"),n("KHd+")),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("full-calendar",{attrs:{defaultView:"dayGridMonth",plugins:e.calendarPlugins,"event-sources":e.events,header:{center:"title",left:"listWeek,dayGridMonth",right:"prev,next today"}},on:{dateClick:function(t){return e.$emit("dateClick",t)},eventClick:function(t){return e.$emit("eventClick",t)}}})],1)}),[],!1,null,"6a3e857a",null);t.a=c.exports}}]);