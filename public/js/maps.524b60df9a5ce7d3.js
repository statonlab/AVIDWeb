/*! For license information please see maps.524b60df9a5ce7d3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[710],{2594:(t,n,e)=>{function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,{Z:()=>o});var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,o;return n=t,o=[{key:"load",value:function(n){return(new t).loadMap(n)}}],(e=[{key:"loadMap",value:function(t){if(window.google&&window.google.maps)t();else{var n=document.createElement("script"),e=window.avid.keys.maps;n.async=!0,n.defer=!0,n.type="text/javascript",n.onload=t,n.src="https://maps.googleapis.com/maps/api/js?key=".concat(e),document.head.appendChild(n)}}}])&&r(n.prototype,e),o&&r(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}()},7775:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(4015),o=e.n(r),a=e(3645),i=e.n(a)()(o());i.push([t.id,".sites-map[data-v-d4917e98]{height:calc(95vh - 145px)}","",{version:3,sources:["webpack://./resources/js/components/SitesMap.vue"],names:[],mappings:"AAiPA,4BACA,yBACA",sourcesContent:["<template>\n  <div class=\"card border shadow-sm\">\n    <div class=\"card-header shadow-none bg-light rounded\">\n      <strong>All Sites</strong>\n    </div>\n    <div class=\"card-body\">\n      <div ref=\"map\" class=\"sites-map\"></div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Maps from '../helpers/Maps'\n\nexport default {\n  name: 'SitesMap',\n\n  mounted() {\n    this.loadMap()\n  },\n\n  data() {\n    return {\n      plots          : [],\n      map            : null,\n      markers        : [],\n      infoWindow     : null,\n      selectedFeature: null,\n    }\n  },\n\n  methods: {\n    loadMap() {\n      Maps.load(async () => {\n        await this.loadPlots()\n        this.createMap()\n        this.setMapMarkers()\n        await this.loadLayers()\n      })\n    },\n\n    async loadPlots() {\n      try {\n        const {data} = await axios.get(`/web/sites-map`)\n        this.plots   = data\n      } catch (e) {\n        console.error(e)\n      }\n    },\n\n    async loadLayers() {\n      try {\n        const {data} = await axios.get('/web/sites-map/layers')\n        this.map.data.addGeoJson(data)\n        this.map.data.setMap(this.map)\n        this.map.data.addListener('click', (event) => {\n          this.showWmu(event)\n        })\n        this.map.data.setStyle(f => {\n          return {\n            strokeWeight: 1,\n            fillColor   : '#000000',\n          }\n        })\n      } catch (e) {\n        console.error(e)\n      }\n    },\n\n    setMapMarkers() {\n      this.markers.forEach(marker => {\n        marker.setMap(null)\n      })\n      this.markers = []\n      this.plots.forEach(plot => {\n        const marker = new google.maps.Marker({\n          map     : this.map,\n          position: this.getCoords(plot),\n        })\n\n        marker.addListener('click', () => {\n          this.openWindow(marker, plot)\n        })\n\n        this.markers.push(marker)\n      })\n    },\n\n    createMap() {\n      let position = {\n        lat: -35,\n        lng: 85,\n      }\n\n      if (this.plots.length) {\n        const plot = this.plots[0]\n        position   = this.getCoords(plot)\n      }\n\n      this.map = new google.maps.Map(this.$refs.map, {\n        zoom  : 6,\n        center: position,\n      })\n\n      this.map.addListener('click', () => {\n        this.map.data.setStyle(() => {\n          return {\n            color       : '#000000',\n            strokeWeight: 1,\n          }\n        })\n\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n      })\n    },\n\n    getCoords(plot) {\n      return {lat: plot[1], lng: plot[2]}\n    },\n\n    async showWmu(event) {\n      const feature   = event.feature\n      const aggregate = feature.getProperty('Aggregate')\n\n      if (this.selectedFeature && this.selectedFeature.getProperty('Aggregate') === aggregate) {\n        this.selectedFeature = null\n        this.map.data.setStyle(() => {\n          return {\n            color       : '#000000',\n            strokeWeight: 1,\n          }\n        })\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n\n        return\n      }\n\n      let content = `\n      <table class=\"table mb-0\">\n        <tr>\n          <th>WMU</th>\n          <td>${aggregate}</td>\n        </tr>\n      </table>\n      `\n      if (!this.infoWindow) {\n        this.infoWindow = new google.maps.InfoWindow({\n          content,\n        })\n      } else {\n        this.infoWindow.close()\n        this.infoWindow.setContent(content)\n      }\n\n      this.map.data.setStyle(f => {\n        let color = '#000000'\n\n        if (f.getProperty('Aggregate') === aggregate) {\n          color = '#ff0000'\n        }\n\n        return {\n          strokeWeight: 1,\n          fillColor   : color,\n        }\n      })\n\n      this.infoWindow.open({\n        anchor  : null,\n        position: event.latLng,\n        map     : this.map,\n      })\n      this.infoWindow.setPosition(event.latLng)\n      this.selectedFeature = feature\n    },\n\n    async openWindow(marker, plot) {\n      if (this.loading) {\n        return\n      }\n\n      this.loading = true\n      try {\n        const id = plot[0]\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n\n        const loadingState = `\n        <span class=\"spinner-grow spinner-grow-sm text-primary\" role=\"status\" aria-hidden=\"true\"></span>\n        <span>Loading...</span>\n        `\n        if (!this.infoWindow) {\n          this.infoWindow = new google.maps.InfoWindow({\n            content: loadingState,\n          })\n        } else {\n          this.infoWindow.setContent(loadingState)\n        }\n\n        this.infoWindow.open({\n          anchor: marker,\n          map   : this.map,\n        })\n\n        const {data} = await axios.get(`/web/sites-map/site/${id}`)\n\n        this.infoWindow.setContent(`\n        <div>\n          <table class=\"table mb-0 table-sm\">\n          <tr>\n              <th>Site Name</th>\n              <td>${data.name}</td>\n            </tr>\n            <tr>\n              <th>Created By</th>\n              <td>${data.user.name}</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">\n                <a href=\"${data.url}\">Visit site page</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        `)\n      } catch (e) {\n        console.error(e)\n      }\n\n      this.loading = false\n    },\n  },\n}\n<\/script>\n\n<style scoped lang=\"css\">\n.sites-map {\n  height: calc(95vh - 145px);\n}\n</style>\n"],sourceRoot:""}]);const s=i},4615:(t,n,e)=>{e.r(n),e.d(n,{default:()=>w});var r=e(5087),o=e(4856),a=e(2594);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(){s=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=W(i,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=h(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function d(){}function f(){}function m(){}var g={};l(g,o,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(S([])));w&&w!==n&&e.call(w,o)&&(g=w);var y=m.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==i(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):n.resolve(p).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;this._invoke=function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}}function W(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,W(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=h(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=m,l(y,"constructor",m),l(m,"constructor",f),f.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(k.prototype),l(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new k(u(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,n,e,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}}const u={name:"SitesMap",mounted:function(){this.loadMap()},data:function(){return{plots:[],map:null,markers:[],infoWindow:null,selectedFeature:null}},methods:{loadMap:function(){var t=this;a.Z.load(l(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.loadPlots();case 2:return t.createMap(),t.setMapMarkers(),n.next=6,t.loadLayers();case 6:case"end":return n.stop()}}),n)}))))},loadPlots:function(){var t=this;return l(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.get("/web/sites-map");case 3:e=n.sent,r=e.data,t.plots=r,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},loadLayers:function(){var t=this;return l(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.get("/web/sites-map/layers");case 3:e=n.sent,r=e.data,t.map.data.addGeoJson(r),t.map.data.setMap(t.map),t.map.data.addListener("click",(function(n){t.showWmu(n)})),t.map.data.setStyle((function(t){return{strokeWeight:1,fillColor:"#000000"}})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},setMapMarkers:function(){var t=this;this.markers.forEach((function(t){t.setMap(null)})),this.markers=[],this.plots.forEach((function(n){var e=new google.maps.Marker({map:t.map,position:t.getCoords(n)});e.addListener("click",(function(){t.openWindow(e,n)})),t.markers.push(e)}))},createMap:function(){var t=this,n={lat:-35,lng:85};if(this.plots.length){var e=this.plots[0];n=this.getCoords(e)}this.map=new google.maps.Map(this.$refs.map,{zoom:6,center:n}),this.map.addListener("click",(function(){t.map.data.setStyle((function(){return{color:"#000000",strokeWeight:1}})),t.infoWindow&&t.infoWindow.close()}))},getCoords:function(t){return{lat:t[1],lng:t[2]}},showWmu:function(t){var n=this;return l(s().mark((function e(){var r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,o=r.getProperty("Aggregate"),!n.selectedFeature||n.selectedFeature.getProperty("Aggregate")!==o){e.next=7;break}return n.selectedFeature=null,n.map.data.setStyle((function(){return{color:"#000000",strokeWeight:1}})),n.infoWindow&&n.infoWindow.close(),e.abrupt("return");case 7:a='\n      <table class="table mb-0">\n        <tr>\n          <th>WMU</th>\n          <td>'.concat(o,"</td>\n        </tr>\n      </table>\n      "),n.infoWindow?(n.infoWindow.close(),n.infoWindow.setContent(a)):n.infoWindow=new google.maps.InfoWindow({content:a}),n.map.data.setStyle((function(t){var n="#000000";return t.getProperty("Aggregate")===o&&(n="#ff0000"),{strokeWeight:1,fillColor:n}})),n.infoWindow.open({anchor:null,position:t.latLng,map:n.map}),n.infoWindow.setPosition(t.latLng),n.selectedFeature=r;case 13:case"end":return e.stop()}}),e)})))()},openWindow:function(t,n){var e=this;return l(s().mark((function r(){var o,a,i,c;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.loading){r.next=2;break}return r.abrupt("return");case 2:return e.loading=!0,r.prev=3,o=n[0],e.infoWindow&&e.infoWindow.close(),a='\n        <span class="spinner-grow spinner-grow-sm text-primary" role="status" aria-hidden="true"></span>\n        <span>Loading...</span>\n        ',e.infoWindow?e.infoWindow.setContent(a):e.infoWindow=new google.maps.InfoWindow({content:a}),e.infoWindow.open({anchor:t,map:e.map}),r.next=11,axios.get("/web/sites-map/site/".concat(o));case 11:i=r.sent,c=i.data,e.infoWindow.setContent('\n        <div>\n          <table class="table mb-0 table-sm">\n          <tr>\n              <th>Site Name</th>\n              <td>'.concat(c.name,"</td>\n            </tr>\n            <tr>\n              <th>Created By</th>\n              <td>").concat(c.user.name,'</td>\n            </tr>\n            <tr>\n              <td colspan="2">\n                <a href="').concat(c.url,'">Visit site page</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        ')),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(3),console.error(r.t0);case 19:e.loading=!1;case 20:case"end":return r.stop()}}),r,null,[[3,16]])})))()}}};var h=e(3379),p=e.n(h),d=e(7775),f={insert:"head",singleton:!1};p()(d.Z,f);d.Z.locals;var m=e(1900);const g=(0,m.Z)(u,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"card border shadow-sm"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{ref:"map",staticClass:"sites-map"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header shadow-none bg-light rounded"},[t("strong",[this._v("All Sites")])])}],!1,null,"d4917e98",null).exports,v={name:"Maps",components:{InlineSpinner:r.Z,Icon:o.Z,SitesMap:g},mounted:function(){this.selectTabFromHash()},data:function(){return{_request:null,tab:"one",tabs:["one","two"]}},methods:{makeHash:function(t){return t.replace(/ /g,"-")},selectTabFromHash:function(){this.$route.hash&&this.$route.hash.length>0&&this.selectTab(this.$route.hash.replace(/-/g," ").substring(1))},selectTab:function(t){-1!==this.tabs.indexOf(t)&&(this.tab=t,this.$router.push({hash:this.makeHash(t)}).catch((function(t){})))}}};const w=(0,m.Z)(v,(function(){var t=this._self._c;return t("div",[t("sites-map")],1)}),[],!1,null,"98f3d6ba",null).exports}}]);
//# sourceMappingURL=maps.524b60df9a5ce7d3.js.map