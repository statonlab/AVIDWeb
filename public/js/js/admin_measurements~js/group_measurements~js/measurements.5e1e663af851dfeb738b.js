(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"C+gu":function(e,t,a){"use strict";var n=a("o0o1"),r=a.n(n),s=a("ke3Z"),o=a("MEn4"),i=a("klO2"),l=a("JUFj"),c=a("wXy6"),u=a("1MU1"),d=a("mS+z"),p=a("vQtE"),m=a("yoRh"),v=a("mXro"),f=a("TTxJ"),_=a("cv7c"),h=a("QEud"),g=a.n(h),b=a("wd/R"),y=a.n(b);function w(e,t,a,n,r,s,o){try{var i=e[s](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,r)}function x(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function o(e){w(s,n,r,o,i,"next",e)}function i(e){w(s,n,r,o,i,"throw",e)}o(void 0)}))}}var C={name:"PlantForm",components:{DatePicker:g.a,InlineSpinner:f.a,Dropdown:v.a,Close:m.a,ModalTitle:p.a,ModalFooter:d.a,ModalBody:u.a,ModalHeader:c.a,ModalCard:l.a,Modal:i.a,Required:o.a,Icon:_.a},props:{plot:{required:!1,type:Object},plant:{required:!1,type:Object}},watch:{speciesSearch:function(){this.loadSpecies()},date:function(e){this.form.date=e?y()(e).format("YYYY-MM-DD"):null},"form.species_id":{handler:function(){this.form.errors.clear("species_id")}},"form.plant_type_id":{handler:function(){this.loadSpecies()}}},data:function(){var e=window.avid.last_entry;return{plants:[],saving:!1,date:e?y()(e).toDate():null,form:new s.a({new_measurement:!1,date:window.avid.last_entry,height:"",new_species:!1,new_species_name:"",plant_type_id:"",tag:"",species_id:"",quadrant:"",total:""}),loadingPlants:!1,loadingSpecies:!1,species:[],speciesSearch:""}},mounted:function(){var e=this;return x(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadTypes();case 2:e.plant&&e.form.setDefault(e.plant);case 3:case"end":return t.stop()}}),t)})))()},methods:{loadTypes:function(){var e=this;return x(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingPlants=!0,t.prev=1,t.next=4,axios.get("/web/plant-types");case 4:return a=t.sent,n=a.data,e.plants=n,e.form.plant_type_id=n[0].id,t.next=10,e.loadSpecies();case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e.$alert("Unable to load form. Please try refreshing the page.");case 15:e.loadingPlants=!1;case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()},loadSpecies:function(){var e=this;return x(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/species",{params:{search:e.speciesSearch,plant_type_id:e.form.plant_type_id}});case 3:a=t.sent,n=a.data,e.total=n.total,e.species=n.data.map((function(e){return{label:e.name,value:e.id}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},save:function(){this.plant?this.update():this.create()},create:function(){var e=this;return x(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.form.post("/web/plots/".concat(e.plot.id,"/plants"));case 4:a=t.sent,n=a.data,e.$emit("create",n),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.response&&422===t.t0.response.status||e.$notify({text:"Unable to create plant. Please try refreshing the page.",type:"error"}),console.error(t.t0);case 13:e.saving=!1;case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},update:function(){var e=this;return x(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.form.put("/web/plants/".concat(e.plant.id));case 4:a=t.sent,n=a.data,e.$emit("update",n),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.response&&422===t.t0.response.status||e.$notify({text:"Unable to create plant. Please try refreshing the page.",type:"error"}),console.error(t.t0);case 13:e.saving=!1;case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},k=a("KHd+"),M=Object(k.a)(C,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{on:{close:function(t){return e.$emit("close")}}},[a("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("modal-card",[a("modal-header",[e.plant?e._e():a("modal-title",[e._v("Add A Plant")]),e._v(" "),e.plant?a("modal-title",[e._v("Update Plant #"+e._s(e.plant.tag))]):e._e(),e._v(" "),a("close",{on:{click:function(t){return t.preventDefault(),e.$emit("close")}}})],1),e._v(" "),e.loadingPlants||e.loadingSpecies?a("modal-body",{staticClass:"d-flex justify-content-center align-items-center"},[a("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),e.loadingSpecies||e.loadingPlants?e._e():a("modal-body",{staticClass:"position-static"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"plant"}},[e._v("\n                        Plant Type\n                        "),a("required")],1),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.plant_type_id,expression:"form.plant_type_id"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("plant_type_id")},attrs:{id:"plant",name:"plant_type_id",disabled:e.loadingPlants},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"plant_type_id",t.target.multiple?a:a[0])}}},e._l(e.plants,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),e._v(" "),e.form.errors.has("plant_type_id")?a("small",{staticClass:"form-text text-danger"},[e._v("\n                        "+e._s(e.form.errors.first("plant_type_id"))+"\n                    ")]):e._e()]),e._v(" "),a("div",{staticClass:"row position-static"},[a("div",{staticClass:"form-group col-6"},[a("label",{attrs:{for:"tag-num"}},[e._v("\n                            Tag Number\n                            "),a("required")],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tag,expression:"form.tag"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("tag")},attrs:{type:"text",id:"tag-num",name:"plant_type_id",placeholder:"Tag #"},domProps:{value:e.form.tag},on:{input:function(t){t.target.composing||e.$set(e.form,"tag",t.target.value)}}}),e._v(" "),e.form.errors.has("tag")?a("small",{staticClass:"form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("tag"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-6 position-static"},[a("label",{attrs:{for:"quadrant"}},[e._v("\n                            Quadrant\n                            "),a("required")],1),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.quadrant,expression:"form.quadrant"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("quadrant")},attrs:{name:"quadrant",id:"quadrant"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"quadrant",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("Select a Quadrant")]),e._v(" "),a("option",{attrs:{value:"Northeast"}},[e._v("Northeast")]),e._v(" "),a("option",{attrs:{value:"Northwest"}},[e._v("Northwest")]),e._v(" "),a("option",{attrs:{value:"Southeast"}},[e._v("Southeast")]),e._v(" "),a("option",{attrs:{value:"Southwest"}},[e._v("Southwest")])]),e._v(" "),e.form.errors.has("quadrant")?a("small",{staticClass:"form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("quadrant"))+"\n                        ")]):e._e()]),e._v(" "),e.form.new_species?e._e():a("div",{staticClass:"form-group col-6 position-static"},[a("label",{attrs:{for:"species"}},[e._v("\n                            Species\n                            "),a("required")],1),e._v(" "),a("dropdown",{staticClass:"mb-1",attrs:{id:"species",autocomplete:!0,lodaing:e.loadingSpecies,options:e.species,error:e.form.errors.has("species_id"),total:e.total},on:{search:function(t){e.speciesSearch=t}},model:{value:e.form.species_id,callback:function(t){e.$set(e.form,"species_id",t)},expression:"form.species_id"}}),e._v(" "),e.form.errors.has("species_id")?a("small",{staticClass:"form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("species_id"))+"\n                        ")]):e._e()],1),e._v(" "),e.form.new_species?a("div",{staticClass:"form-group col-6 flex-column"},[a("label",{attrs:{for:"new-species"}},[e._v("\n                            Species\n                            "),a("required")],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.new_species_name,expression:"form.new_species_name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("new_species_name")},attrs:{type:"text",id:"new-species",name:"new-species",placeholder:"Species Name"},domProps:{value:e.form.new_species_name},on:{input:function(t){t.target.composing||e.$set(e.form,"new_species_name",t.target.value)}}}),e._v(" "),e.form.errors.has("new_species_name")?a("small",{staticClass:"form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("new_species_name"))+"\n                        ")]):e._e()]):e._e(),e._v(" "),e.form.new_species?a("button",{staticClass:"btn btn-link mt-auto mb-3 ml-3",on:{click:function(t){t.preventDefault(),e.form.new_species=!1}}},[a("span",[e._v("\n                                Cancel Species Creation\n                            ")])]):e._e()]),e._v(" "),e.form.new_species?e._e():a("p",{staticClass:"text-muted"},[e._v("\n                    If you cannot find the species from the dropdown,\n                    "),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.form.new_species=!0}}},[e._v(" you can click here to create a new one.")])]),e._v(" "),this.plant||e.form.new_measurement?e._e():a("button",{staticClass:"btn btn-link",on:{click:function(t){t.preventDefault(),e.form.new_measurement=!0}}},[a("icon",{attrs:{name:"add"}}),e._v(" "),a("span",[e._v("Add a Measurement")])],1),e._v(" "),!this.plant&&e.form.new_measurement?a("div",{staticClass:"row position-static"},[a("div",{staticClass:"form-group col-lg-6 position-static"},[a("label",[e._v("\n                            Date\n                            "),a("required")],1),e._v(" "),a("date-picker",{attrs:{color:"green","max-date":new Date,"input-props":{class:"form-control"+(e.form.errors.has("date")?" is-invalid":""),placeholder:"Collection Date"}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),e.form.errors.has("date")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("date"))+"\n                        ")]):e._e()],1),e._v(" "),a("div",{staticClass:"form-group col-lg-6"},[a("label",{attrs:{for:"height"}},[e._v("\n                            Height (inches)\n                            "),a("required")],1),e._v(" "),a("div",{staticClass:"input-group input-appended"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.height,expression:"form.height"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("height")},attrs:{id:"height",type:"text",placeholder:"Height"},domProps:{value:e.form.height},on:{input:function(t){t.target.composing||e.$set(e.form,"height",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v("in.")])])]),e._v(" "),e.form.errors.has("height")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("height"))+"\n                        ")]):e._e()])]):e._e(),e._v(" "),e.form.new_measurement?a("button",{staticClass:"btn btn-link",on:{click:function(t){t.preventDefault(),e.form.new_measurement=!1}}},[a("span",[e._v("Cancel Measurement Creation")])]):e._e()]),e._v(" "),a("modal-footer",{staticClass:"d-flex justify-content-between"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.saving}},[e.saving?a("inline-spinner"):e._e(),e._v("\n                    Save\n                ")],1),e._v(" "),a("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$emit("close")}}},[e._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"0c4f83b3",null);t.a=M.exports},RQW6:function(e,t,a){"use strict";var n=a("o0o1"),r=a.n(n),s=a("klO2"),o=a("JUFj"),i=a("wXy6"),l=a("1MU1"),c=a("mS+z"),u=a("vQtE"),d=a("yoRh"),p=a("MEn4"),m=a("ke3Z"),v=a("QEud"),f=a.n(v),_=a("TTxJ"),h=a("wd/R"),g=a.n(h);function b(e,t,a,n,r,s,o){try{var i=e[s](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,r)}function y(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function o(e){b(s,n,r,o,i,"next",e)}function i(e){b(s,n,r,o,i,"throw",e)}o(void 0)}))}}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k={name:"MeasurementForm",components:{InlineSpinner:_.a,Required:p.a,Close:d.a,ModalTitle:u.a,ModalFooter:c.a,ModalBody:l.a,ModalHeader:i.a,ModalCard:o.a,Modal:s.a,DatePicker:f.a},props:{plant:{required:!0,type:Object},measurement:{required:!1,type:Object}},beforeMount:function(){this.measurement&&(this.form.setDefault(x(x({},this.measurement),{},{is_located:this.measurement.is_located?"1":"0",is_alive:null===this.measurement.is_alive?"":this.measurement.is_alive?"1":"0",date:this.measurement.date?g()(this.measurement.date).format("YYYY-MM-DD"):null})),this.date=this.measurement.date?g()(this.measurement.date).toDate():null)},data:function(){var e=window.avid.last_entry;return{saving:!1,date:e?g()(e).toDate():null,form:new m.a({is_located:"0",is_alive:"",date:window.avid.last_entry,height:""})}},watch:{date:function(e){this.form.date=e?g()(e).format("YYYY-MM-DD"):null}},methods:{save:function(){this.measurement?this.update():this.create()},create:function(){var e=this;return y(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.errors.clearAll(),e.saving=!0,t.prev=2,t.next=5,e.form.post("/web/plants/".concat(e.plant.id,"/measurements"));case 5:a=t.sent,n=a.data,window.avid.last_entry=n.date?g()(n.date).format("YYYY-MM-DD"):null,e.$emit("create",n),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),t.t0.response&&422!==t.t0.response.status&&e.$notify({text:"Unable to save data. Please try refreshing the page.",type:"error"}),console.error(t.t0);case 15:e.saving=!1;case 16:case"end":return t.stop()}}),t,null,[[2,11]])})))()},update:function(){var e=this;return y(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.errors.clearAll(),e.saving=!0,t.prev=2,t.next=5,e.form.put("/web/measurements/".concat(e.measurement.id));case 5:a=t.sent,n=a.data,e.$emit("update",n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),t.t0.response&&422!==t.t0.response.status&&e.$notify({text:"Unable to save data. Please try refreshing the page.",type:"error"}),console.error(t.t0);case 14:e.saving=!1;case 15:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}},M=a("KHd+"),P=Object(M.a)(k,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{on:{close:function(t){return e.$emit("close")}}},[a("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.save(t)},keydown:function(t){return e.form.errors.clear(t.target.name)}}},[a("modal-card",[a("modal-header",[a("modal-title",[e._v("New Measurement")]),e._v(" "),a("close",{on:{click:function(t){return t.preventDefault(),e.$emit("close")}}})],1),e._v(" "),a("modal-body",{staticClass:"position-static"},[a("div",{staticClass:"row position-static"},[a("div",{staticClass:"form-group col-lg-6 position-static"},[a("label",[e._v("\n                            Date\n                            "),a("required")],1),e._v(" "),a("date-picker",{attrs:{color:"green","max-date":new Date,"input-props":{class:"form-control"+(e.form.errors.has("date")?" is-invalid":""),placeholder:"Collection Date"}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),e.form.errors.has("date")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("date"))+"\n                        ")]):e._e()],1),e._v(" "),a("div",{staticClass:"form-group col-lg-6"},[a("label",{attrs:{for:"located"}},[e._v("\n                            Was Plant Located?\n                            "),a("required")],1),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.is_located,expression:"form.is_located"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("is_located")},attrs:{name:"is_located",id:"located"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"is_located",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[e._v("No")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("Yes")])]),e._v(" "),e.form.errors.has("is_located")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("is_located"))+"\n                        ")]):e._e()]),e._v(" "),"1"===e.form.is_located?a("div",{staticClass:"form-group col-lg-6"},[a("label",{attrs:{for:"alive"}},[e._v("\n                            Was Plant Alive?\n                            "),a("required")],1),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.is_alive,expression:"form.is_alive"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("is_located")},attrs:{name:"is_alive",id:"alive"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"is_alive",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),a("option",{attrs:{value:"0"}},[e._v("No")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("Yes")])]),e._v(" "),e.form.errors.has("is_alive")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("is_alive"))+"\n                        ")]):e._e()]):e._e(),e._v(" "),"1"===e.form.is_located?a("div",{staticClass:"form-group col-lg-6"},[a("label",{attrs:{for:"height"}},[e._v("\n                            Height (inches)\n                            "),a("required")],1),e._v(" "),a("div",{staticClass:"input-group input-appended"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.height,expression:"form.height"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("height")},attrs:{id:"height",type:"text"},domProps:{value:e.form.height},on:{input:function(t){t.target.composing||e.$set(e.form,"height",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v("in.")])])]),e._v(" "),e.form.errors.has("height")?a("p",{staticClass:"mb-0 form-text text-danger"},[e._v("\n                            "+e._s(e.form.errors.first("height"))+"\n                        ")]):e._e()]):e._e()])]),e._v(" "),a("modal-footer",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.saving}},[e.saving?a("inline-spinner"):e._e(),e._v(" "),a("span",[e._v("Save")])],1),e._v(" "),a("button",{staticClass:"ml-auto btn btn-light",attrs:{type:"button",disabled:e.saving},on:{click:function(t){return t.preventDefault(),e.$emit("close")}}},[e._v("\n                    Cancel\n                ")])])],1)],1)])}),[],!1,null,"e960c790",null);t.a=P.exports},a1YM:function(e,t,a){"use strict";var n=a("o0o1"),r=a.n(n),s=a("TTxJ"),o=a("cv7c"),i=a("RQW6"),l=a("wd/R"),c=a.n(l),u=a("C+gu"),d=a("+Gql");function p(e,t,a,n,r,s,o){try{var i=e[s](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,r)}function m(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function o(e){p(s,n,r,o,i,"next",e)}function i(e){p(s,n,r,o,i,"throw",e)}o(void 0)}))}}var v={name:"MeasurementsDataView",components:{PlantForm:u.a,MeasurementForm:i.a,Icon:o.a,InlineSpinner:s.a},props:{unauthorizedMessage:{required:!1,type:String,default:"You do not have permission to view plots."},backUrlPrefix:{required:!1,type:String,default:"/app/sites"},disableCreate:{required:!1,type:Boolean,default:!1},editable:{required:!1,type:Boolean,default:!1},backToSites:{required:!1,type:Boolean,default:!1}},data:function(){return{User:d.a,moment:c.a,loading:!0,editingPlant:!1,loadingMeasurements:!0,plant:null,showForm:!1,measurements:[],total:0,page:1,lastPage:1,measurement:null,deleting:null,orderBy:"date",orderDir:"desc",unauthorized:!1,sharedEdit:!1}},mounted:function(){var e=this;return m(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadMeasurements(),t.next=3,e.loadPlant();case 3:e.User.owns(e.plant.site)||e.loadUserSite();case 4:case"end":return t.stop()}}),t)})))()},watch:{"$route.params.id":{handler:function(){this.loadPlant(),this.loadMeasurements()}}},methods:{loadPlant:function(){var e=this;return m(r.a.mark((function t(){var a,n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,a=e.$route.params.id,t.next=5,axios.get("/web/plants/".concat(a));case 5:n=t.sent,s=n.data,e.plant=s,t.next=18;break;case 10:if(t.prev=10,t.t0=t.catch(1),!t.t0.response||403!==t.t0.response.status){t.next=16;break}return e.unauthorized=!0,e.loading=!1,t.abrupt("return");case 16:console.error(t.t0),e.$notify({text:"Unable to load plant. Please try refreshing the page.",type:"error"});case 18:e.loading=!1;case 19:case"end":return t.stop()}}),t,null,[[1,10]])})))()},loadMeasurements:function(){var e=this;return m(r.a.mark((function t(){var a,n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$route.params.id,t.next=4,axios.get("/web/plants/".concat(a,"/measurements"),{params:{order_by:e.orderBy,order_dir:e.orderDir,page:e.page}});case 4:n=t.sent,s=n.data,e.measurements=s.data,e.lastPage=s.last_page,e.total=s.total,t.next=19;break;case 11:if(t.prev=11,t.t0=t.catch(0),!t.t0.response||403!==t.t0.response.status){t.next=17;break}return e.unauthorized=!0,e.loadingMeasurements=!1,t.abrupt("return");case 17:console.error(t.t0),e.$notify({text:"Unable to load measurements. Please try refreshing the page.",type:"error"});case 19:e.loadingMeasurements=!1;case 20:case"end":return t.stop()}}),t,null,[[0,11]])})))()},loadUserSite:function(){var e=this;return m(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/user-sites/site/".concat(e.plant.site.id));case 3:a=t.sent,n=a.data,e.sharedEdit=n.editable,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&500===t.t0.response.status&&(e.$notify({text:"Unable to load site information. Please try refreshing the page.",type:"error"}),console.error(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},add:function(){this.measurement=null,this.showForm=!0},edit:function(e){this.measurement=e,this.showForm=!0},closeForm:function(){this.measurement=null,this.showForm=!1},updated:function(e){this.closeForm(),this.measurements=this.measurements.map((function(t){return t.id===e.id?e:t})),this.$notify({text:"Measurement updated successfully",type:"success"})},created:function(e){this.closeForm(),this.loadMeasurements(),this.$notify({text:"Measurement created successfully",type:"success"})},destroy:function(e){var t,a=this;null===this.deleting&&this.$confirm({title:"Are you sure you want to delete measurement collected on "+c()(e.date).format("MMM Do, YYYY")+"?",text:"This action is permanent.",onConfirm:(t=m(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.deleting=e.id,t.prev=1,t.next=4,axios.delete("/web/measurements/".concat(e.id));case 4:a.loadMeasurements(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0),a.$notify({text:"Unable to delete measurement. Please try refreshing the page.",type:"error"});case 11:a.deleting=null;case 12:case"end":return t.stop()}}),t,null,[[1,7]])}))),function(){return t.apply(this,arguments)})})},plantUpdated:function(e){this.plant=e,this.editingPlant=!1},sort:function(e){e===this.orderBy?this.orderDir="asc"===this.orderDir?"desc":"asc":(this.orderBy=e,this.orderDir="asc"),this.loadMeasurements()},sortIcon:function(e){return e!==this.orderBy?"swap-vertical":"asc"===this.orderDir?"arrow-up":"arrow-down"}}},f=a("KHd+"),_=Object(f.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("div",{staticClass:"d-flex align-items-center justify-content-center"},[a("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),!e.loading&&e.plant?a("div",[a("div",{staticClass:"d-flex mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"flex-shrink-0"},[a("router-link",{staticClass:"btn btn-link-dark px-1 ml-n1",attrs:{to:e.backUrlPrefix+"/"+e.plant.plot.site_id}},[a("icon",{attrs:{name:"arrow-back"}})],1)],1),e._v(" "),a("div",{staticClass:"ml-1"},[a("h1",{staticClass:"page-title"},[e._v("Plant #"+e._s(e.plant.tag))]),e._v(" "),a("p",{staticClass:"mb-0 text-muted"},[e._v(e._s(e.plant.type.name)+" ("+e._s(e.plant.species.name)+")")])])]),e._v(" "),a("div",{staticClass:"ml-auto"},[e.sharedEdit||e.editable||e.User.owns(e.plant)||e.User.owns(e.plant.site)||e.User.can("update sites")?a("button",{staticClass:"btn btn-link",on:{click:function(t){t.preventDefault(),e.editingPlant=!0}}},[a("icon",{attrs:{name:"create"}}),e._v(" "),a("span",[e._v("Edit Plant")])],1):e._e()])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"card"},[e.sharedEdit||e.editable||e.User.owns(e.plant)||e.User.owns(e.plant.site)||e.User.can("update sites")?a("div",{staticClass:"card-header d-flex p-2"},[a("div",{staticClass:"ml-auto flex-shrink-0 pl-1"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:e.disableCreate},on:{click:function(t){return t.preventDefault(),e.add(t)}}},[a("icon",{attrs:{name:"add"}}),e._v(" "),a("span",[e._v("Add Measurement")])],1)])]):e._e(),e._v(" "),a("div",{staticClass:"card-body p-0"},[e.loadingMeasurements?a("div",{staticClass:"p-4 d-flex align-items-center justify-content-center"},[a("inline-spinner",{staticClass:"text-primary"})],1):e._e(),e._v(" "),e.unauthorized||e.loadingMeasurements||0!==e.measurements.length?e._e():a("div",{staticClass:"p-4"},[a("p",{staticClass:"mb-0 text-muted"},[e._v("No measurements recorded yet. Use the add measurement button above to add one.")])]),e._v(" "),!e.unauthorized&&!e.loadingMeasurements&&e.measurements.length>0?a("table",{staticClass:"table mb-0"},[a("thead",[a("tr",[a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("date")}}},[a("span",{staticClass:"mr-1"},[e._v("Date")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("date")}})],1)]),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("is_located")}}},[a("span",{staticClass:"mr-1"},[e._v("Located")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("is_located")}})],1)]),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("is_alive")}}},[a("span",{staticClass:"mr-1"},[e._v("Alive")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("is_alive")}})],1)]),e._v(" "),a("th",[a("a",{staticClass:"d-flex align-items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.sort("height")}}},[a("span",{staticClass:"mr-1"},[e._v("Height")]),e._v(" "),a("icon",{attrs:{name:e.sortIcon("height")}})],1)]),e._v(" "),a("th")])]),e._v(" "),a("tbody",e._l(e.measurements,(function(t){return a("tr",[a("td",[e._v(e._s(e.moment(t.date).format("MMM Do, YYYY")))]),e._v(" "),a("td",[e._v(e._s(t.is_located?"Yes":"No"))]),e._v(" "),a("td",[null!==t.is_alive?a("span",[e._v("\n                                        "+e._s(t.is_alive?"Yes":"No")+"\n                                    ")]):e._e()]),e._v(" "),a("td",[null!==t.height?a("span",[e._v("\n                                        "+e._s(t.height)+" in.\n                                    ")]):e._e()]),e._v(" "),a("td",[a("div",{staticClass:"d-flex justify-content-end"},[e.sharedEdit||e.editable||e.User.owns(t)||e.User.owns(e.plant.site)||e.User.can("update sites")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Edit",expression:"'Edit'"}],staticClass:"btn btn-link btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),e.edit(t)}}},[a("icon",{attrs:{name:"create"}})],1):e._e(),e._v(" "),e.User.owns(t)||e.User.owns(e.plant.site)||e.User.can("delete sites")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Delete",expression:"'Delete'"}],staticClass:"btn btn-sm",class:e.deleting!==t.id?"btn-link":"btn-danger",attrs:{type:"button",disabled:e.deleting===t.id},on:{click:function(a){return a.preventDefault(),e.destroy(t)}}},[t.id!==e.deleting?a("icon",{attrs:{name:"trash"}}):a("inline-spinner")],1):e._e()])])])})),0)]):e._e()])])]),e._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-title font-weight-bold"},[e._v("\n                            Plant Information\n                        ")]),e._v(" "),a("dl",[a("dt",[e._v("Species")]),e._v(" "),a("dd",[e._v(e._s(e.plant.type.name)),a("br"),e._v(e._s(e.plant.species.name))]),e._v(" "),a("dt",[e._v("Tag")]),e._v(" "),a("dd",[e._v("#"+e._s(e.plant.tag))]),e._v(" "),a("dt",[e._v("Quadrant")]),e._v(" "),a("dd",[e._v(e._s(e.plant.quadrant))]),e._v(" "),a("dt",[e._v("Plot")]),e._v(" "),a("dd",[e._v("#"+e._s(e.plant.plot.number))]),e._v(" "),a("dt",[e._v("Site")]),e._v(" "),a("dd",[e._v(e._s(e.plant.plot.site.name))])])])])])])]):e._e(),e._v(" "),e.unauthorized?a("div",{staticClass:"card p-4"},[e._v("\n        "+e._s(e.unauthorizedMessage)+"\n    ")]):e._e(),e._v(" "),e.unauthorized||e.loading||e.plant?e._e():a("div",{staticClass:"card p-4"},[e._v("\n        Plant not found. Please try refreshing the page or contact us.\n    ")]),e._v(" "),e.showForm?a("measurement-form",{attrs:{measurement:e.measurement,plant:e.plant},on:{close:function(t){e.showForm=!1},update:function(t){return e.updated(t)},create:function(t){return e.created(t)}}}):e._e(),e._v(" "),e.editingPlant?a("plant-form",{attrs:{plant:e.plant},on:{close:function(t){e.editingPlant=!1},update:function(t){return e.plantUpdated(t)}}}):e._e()],1)}),[],!1,null,"37adf31a",null);t.a=_.exports},mXro:function(e,t,a){"use strict";var n=a("cv7c"),r={name:"Dropdown",components:{InlineSpinner:a("TTxJ").a,Icon:n.a},props:{options:{required:!0,type:Array},value:{required:!1,default:null},placeholder:{required:!1,type:String,default:"Select"},emptyMessage:{required:!1,type:String,default:"No results found. Try adjusting your search terms."},endMessage:{required:!1,type:String,default:""},disabled:{required:!1,type:Boolean,default:!1},autocomplete:{required:!1,type:Boolean,default:!1},loading:{required:!1,type:Boolean,default:!1},error:{required:!1,type:Boolean,default:!1},maxWidth:{required:!1,type:Number,default:230},btnClass:{required:!1,type:String,default:"btn-select"},total:{required:!1,type:Number,default:0},lengthToSearch:{required:!1,type:Number,default:0},searchMessage:{required:!1,type:String,default:""}},data:function(){return{index:null}},computed:{selected:function(){return null===this.index||0===this.options.length?this.placeholder:this.options[this.index]?this.options[this.index].label:this.placeholder}},mounted:function(){this.setIndex()},watch:{options:{handler:function(){this.setIndex()},deep:!0},value:function(){this.setIndex()}},methods:{setIndex:function(){if(null!==this.value)for(var e=this.options,t=0;t<e.length;t++)if(this.value===e[t].value)return void(this.index=t)},select:function(e,t){this.$emit("input",e.value),this.index=t},focus:function(){var e=this;this.autocomplete&&setTimeout((function(){e.$refs.search.focus(),e.$refs.search.select()}),100)},clear:function(){this.$emit("input",null),this.index=null},down:function(){var e=$(this.$refs.menu).find(".dropdown-item").first();e.length&&e.focus()},up:function(e){this.autocomplete&&0===e&&this.focus()}}},s=a("KHd+"),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropdown autocomplete"},[a("button",{ref:"btn",staticClass:"font-weight-normal",class:["btn","d-flex",e.btnClass,{"btn-placeholder-effect":null===e.value,"btn-select-active":null!==e.value,"border-danger":e.error}],attrs:{"data-toggle":"dropdown","data-boundary":"window",disabled:e.disabled,"data-flip":"false"},on:{click:function(t){return e.focus()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.focus()}}},[a("span",{staticClass:"text-case-normal"},[e._v("\n      "+e._s(e.selected)+"\n    ")]),e._v(" "),e.loading?a("inline-spinner",{staticClass:"ml-auto text-primary"}):a("icon",{staticClass:"ml-auto btn-dropdown-icon",attrs:{name:"caret-down"}})],1),e._v(" "),a("div",{ref:"menu",staticClass:"dropdown-menu w-100",style:"max-width: "+e.maxWidth+"px;"},[e.autocomplete?a("div",{staticClass:"pb-2 px-3"},[a("input",{ref:"search",staticClass:"form-control form-control-sm",attrs:{type:"search",placeholder:"Search...",title:"Search"},on:{keyup:function(t){return e.$emit("search",t.target.value)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.options.length>0&&e.select(e.options[0],0)}]}})]):e._e(),e._v(" "),e._t("header"),e._v(" "),e._l(e.options,(function(t,n){return a("a",{class:["dropdown-item",{active:t.value===e.value}],attrs:{href:"#"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up(n)},click:function(a){return a.preventDefault(),e.select(t,n)}}},[e._v("\n      "+e._s(t.label)+"\n    ")])})),e._v(" "),e._t("default"),e._v(" "),0===e.options.length&&e.value<e.lengthToSearch&&e.searchMessage?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[e._v("\n      "+e._s(e.searchMessage)+"\n    ")]):e.options.length<e.total?a("p",{staticClass:"text-muted text-center p-2 mb-0"},[e._v("\n      "+e._s("Showing "+e.options.length+" of "+e.total+". Please search to see more")+"\n    ")]):0===e.options.length&&e.emptyMessage.length?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[e._v(e._s(e.emptyMessage))]):e.endMessage.length?a("p",{staticClass:"text-center text-muted p-2 mb-0"},[a("small",[e._v(e._s(e.endMessage))])]):e._e(),e._v(" "),e._t("footer")],2)])}),[],!1,null,"e075cf5c",null);t.a=o.exports}}]);