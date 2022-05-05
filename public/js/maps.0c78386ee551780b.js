"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[710],{4963:(n,t,e)=>{function a(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}e.d(t,{Z:()=>o});var o=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,o;return t=n,o=[{key:"load",value:function(t){return(new n).loadMap(t)}}],(e=[{key:"loadMap",value:function(n){if(window.google&&window.google.maps)n();else{var t=document.createElement("script"),e=window.avid.keys.maps;t.async=!0,t.defer=!0,t.type="text/javascript",t.onload=n,t.src="https://maps.googleapis.com/maps/api/js?key=".concat(e),document.head.appendChild(t)}}}])&&a(t.prototype,e),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),n}()},4178:(n,t,e)=>{e.d(t,{Z:()=>i});var a=e(4015),o=e.n(a),s=e(3645),r=e.n(s)()(o());r.push([n.id,".sites-map[data-v-d4917e98]{height:calc(95vh - 145px)}","",{version:3,sources:["webpack://./resources/js/components/SitesMap.vue"],names:[],mappings:"AAiPA,4BACA,yBACA",sourcesContent:["<template>\n  <div class=\"card border shadow-sm\">\n    <div class=\"card-header shadow-none bg-light rounded\">\n      <strong>All Sites</strong>\n    </div>\n    <div class=\"card-body\">\n      <div ref=\"map\" class=\"sites-map\"></div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Maps from '../helpers/Maps'\n\nexport default {\n  name: 'SitesMap',\n\n  mounted() {\n    this.loadMap()\n  },\n\n  data() {\n    return {\n      plots          : [],\n      map            : null,\n      markers        : [],\n      infoWindow     : null,\n      selectedFeature: null,\n    }\n  },\n\n  methods: {\n    loadMap() {\n      Maps.load(async () => {\n        await this.loadPlots()\n        this.createMap()\n        this.setMapMarkers()\n        await this.loadLayers()\n      })\n    },\n\n    async loadPlots() {\n      try {\n        const {data} = await axios.get(`/web/sites-map`)\n        this.plots   = data\n      } catch (e) {\n        console.error(e)\n      }\n    },\n\n    async loadLayers() {\n      try {\n        const {data} = await axios.get('/web/sites-map/layers')\n        this.map.data.addGeoJson(data)\n        this.map.data.setMap(this.map)\n        this.map.data.addListener('click', (event) => {\n          this.showWmu(event)\n        })\n        this.map.data.setStyle(f => {\n          return {\n            strokeWeight: 1,\n            fillColor   : '#000000',\n          }\n        })\n      } catch (e) {\n        console.error(e)\n      }\n    },\n\n    setMapMarkers() {\n      this.markers.forEach(marker => {\n        marker.setMap(null)\n      })\n      this.markers = []\n      this.plots.forEach(plot => {\n        const marker = new google.maps.Marker({\n          map     : this.map,\n          position: this.getCoords(plot),\n        })\n\n        marker.addListener('click', () => {\n          this.openWindow(marker, plot)\n        })\n\n        this.markers.push(marker)\n      })\n    },\n\n    createMap() {\n      let position = {\n        lat: -35,\n        lng: 85,\n      }\n\n      if (this.plots.length) {\n        const plot = this.plots[0]\n        position   = this.getCoords(plot)\n      }\n\n      this.map = new google.maps.Map(this.$refs.map, {\n        zoom  : 6,\n        center: position,\n      })\n\n      this.map.addListener('click', () => {\n        this.map.data.setStyle(() => {\n          return {\n            color       : '#000000',\n            strokeWeight: 1,\n          }\n        })\n\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n      })\n    },\n\n    getCoords(plot) {\n      return {lat: plot[1], lng: plot[2]}\n    },\n\n    async showWmu(event) {\n      const feature   = event.feature\n      const aggregate = feature.getProperty('Aggregate')\n\n      if (this.selectedFeature && this.selectedFeature.getProperty('Aggregate') === aggregate) {\n        this.selectedFeature = null\n        this.map.data.setStyle(() => {\n          return {\n            color       : '#000000',\n            strokeWeight: 1,\n          }\n        })\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n\n        return\n      }\n\n      let content = `\n      <table class=\"table mb-0\">\n        <tr>\n          <th>WMU</th>\n          <td>${aggregate}</td>\n        </tr>\n      </table>\n      `\n      if (!this.infoWindow) {\n        this.infoWindow = new google.maps.InfoWindow({\n          content,\n        })\n      } else {\n        this.infoWindow.close()\n        this.infoWindow.setContent(content)\n      }\n\n      this.map.data.setStyle(f => {\n        let color = '#000000'\n\n        if (f.getProperty('Aggregate') === aggregate) {\n          color = '#ff0000'\n        }\n\n        return {\n          strokeWeight: 1,\n          fillColor   : color,\n        }\n      })\n\n      this.infoWindow.open({\n        anchor  : null,\n        position: event.latLng,\n        map     : this.map,\n      })\n      this.infoWindow.setPosition(event.latLng)\n      this.selectedFeature = feature\n    },\n\n    async openWindow(marker, plot) {\n      if (this.loading) {\n        return\n      }\n\n      this.loading = true\n      try {\n        const id = plot[0]\n        if (this.infoWindow) {\n          this.infoWindow.close()\n        }\n\n        const loadingState = `\n        <span class=\"spinner-grow spinner-grow-sm text-primary\" role=\"status\" aria-hidden=\"true\"></span>\n        <span>Loading...</span>\n        `\n        if (!this.infoWindow) {\n          this.infoWindow = new google.maps.InfoWindow({\n            content: loadingState,\n          })\n        } else {\n          this.infoWindow.setContent(loadingState)\n        }\n\n        this.infoWindow.open({\n          anchor: marker,\n          map   : this.map,\n        })\n\n        const {data} = await axios.get(`/web/sites-map/site/${id}`)\n\n        this.infoWindow.setContent(`\n        <div>\n          <table class=\"table mb-0 table-sm\">\n          <tr>\n              <th>Site Name</th>\n              <td>${data.name}</td>\n            </tr>\n            <tr>\n              <th>Created By</th>\n              <td>${data.user.name}</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">\n                <a href=\"${data.url}\">Visit site page</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        `)\n      } catch (e) {\n        console.error(e)\n      }\n\n      this.loading = false\n    },\n  },\n}\n<\/script>\n\n<style scoped lang=\"css\">\n.sites-map {\n  height: calc(95vh - 145px);\n}\n</style>\n"],sourceRoot:""}]);const i=r},1023:(n,t,e)=>{e.r(t),e.d(t,{default:()=>v});var a=e(393),o=e(4090),s=e(7757),r=e.n(s),i=e(4963);function l(n,t,e,a,o,s,r){try{var i=n[s](r),l=i.value}catch(n){return void e(n)}i.done?t(l):Promise.resolve(l).then(a,o)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(a,o){var s=n.apply(t,e);function r(n){l(s,a,o,r,i,"next",n)}function i(n){l(s,a,o,r,i,"throw",n)}r(void 0)}))}}const d={name:"SitesMap",mounted:function(){this.loadMap()},data:function(){return{plots:[],map:null,markers:[],infoWindow:null,selectedFeature:null}},methods:{loadMap:function(){var n=this;i.Z.load(c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.loadPlots();case 2:return n.createMap(),n.setMapMarkers(),t.next=6,n.loadLayers();case 6:case"end":return t.stop()}}),t)}))))},loadPlots:function(){var n=this;return c(r().mark((function t(){var e,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/sites-map");case 3:e=t.sent,a=e.data,n.plots=a,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},loadLayers:function(){var n=this;return c(r().mark((function t(){var e,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/web/sites-map/layers");case 3:e=t.sent,a=e.data,n.map.data.addGeoJson(a),n.map.data.setMap(n.map),n.map.data.addListener("click",(function(t){n.showWmu(t)})),n.map.data.setStyle((function(n){return{strokeWeight:1,fillColor:"#000000"}})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},setMapMarkers:function(){var n=this;this.markers.forEach((function(n){n.setMap(null)})),this.markers=[],this.plots.forEach((function(t){var e=new google.maps.Marker({map:n.map,position:n.getCoords(t)});e.addListener("click",(function(){n.openWindow(e,t)})),n.markers.push(e)}))},createMap:function(){var n=this,t={lat:-35,lng:85};if(this.plots.length){var e=this.plots[0];t=this.getCoords(e)}this.map=new google.maps.Map(this.$refs.map,{zoom:6,center:t}),this.map.addListener("click",(function(){n.map.data.setStyle((function(){return{color:"#000000",strokeWeight:1}})),n.infoWindow&&n.infoWindow.close()}))},getCoords:function(n){return{lat:n[1],lng:n[2]}},showWmu:function(n){var t=this;return c(r().mark((function e(){var a,o,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.feature,o=a.getProperty("Aggregate"),!t.selectedFeature||t.selectedFeature.getProperty("Aggregate")!==o){e.next=7;break}return t.selectedFeature=null,t.map.data.setStyle((function(){return{color:"#000000",strokeWeight:1}})),t.infoWindow&&t.infoWindow.close(),e.abrupt("return");case 7:s='\n      <table class="table mb-0">\n        <tr>\n          <th>WMU</th>\n          <td>'.concat(o,"</td>\n        </tr>\n      </table>\n      "),t.infoWindow?(t.infoWindow.close(),t.infoWindow.setContent(s)):t.infoWindow=new google.maps.InfoWindow({content:s}),t.map.data.setStyle((function(n){var t="#000000";return n.getProperty("Aggregate")===o&&(t="#ff0000"),{strokeWeight:1,fillColor:t}})),t.infoWindow.open({anchor:null,position:n.latLng,map:t.map}),t.infoWindow.setPosition(n.latLng),t.selectedFeature=a;case 13:case"end":return e.stop()}}),e)})))()},openWindow:function(n,t){var e=this;return c(r().mark((function a(){var o,s,i,l;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.loading){a.next=2;break}return a.abrupt("return");case 2:return e.loading=!0,a.prev=3,o=t[0],e.infoWindow&&e.infoWindow.close(),s='\n        <span class="spinner-grow spinner-grow-sm text-primary" role="status" aria-hidden="true"></span>\n        <span>Loading...</span>\n        ',e.infoWindow?e.infoWindow.setContent(s):e.infoWindow=new google.maps.InfoWindow({content:s}),e.infoWindow.open({anchor:n,map:e.map}),a.next=11,axios.get("/web/sites-map/site/".concat(o));case 11:i=a.sent,l=i.data,e.infoWindow.setContent('\n        <div>\n          <table class="table mb-0 table-sm">\n          <tr>\n              <th>Site Name</th>\n              <td>'.concat(l.name,"</td>\n            </tr>\n            <tr>\n              <th>Created By</th>\n              <td>").concat(l.user.name,'</td>\n            </tr>\n            <tr>\n              <td colspan="2">\n                <a href="').concat(l.url,'">Visit site page</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        ')),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(3),console.error(a.t0);case 19:e.loading=!1;case 20:case"end":return a.stop()}}),a,null,[[3,16]])})))()}}};var p=e(3379),h=e.n(p),u=e(4178),f={insert:"head",singleton:!1};h()(u.Z,f);u.Z.locals;var m=e(1900);const g=(0,m.Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card border shadow-sm"},[n._m(0),n._v(" "),e("div",{staticClass:"card-body"},[e("div",{ref:"map",staticClass:"sites-map"})])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card-header shadow-none bg-light rounded"},[e("strong",[n._v("All Sites")])])}],!1,null,"d4917e98",null).exports,w={name:"Maps",components:{InlineSpinner:a.Z,Icon:o.Z,SitesMap:g},mounted:function(){this.selectTabFromHash()},data:function(){return{_request:null,tab:"one",tabs:["one","two"]}},methods:{makeHash:function(n){return n.replace(/ /g,"-")},selectTabFromHash:function(){this.$route.hash&&this.$route.hash.length>0&&this.selectTab(this.$route.hash.replace(/-/g," ").substring(1))},selectTab:function(n){-1!==this.tabs.indexOf(n)&&(this.tab=n,this.$router.push({hash:this.makeHash(n)}).catch((function(n){})))}}};const v=(0,m.Z)(w,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("sites-map")],1)}),[],!1,null,"98f3d6ba",null).exports}}]);
//# sourceMappingURL=maps.0c78386ee551780b.js.map