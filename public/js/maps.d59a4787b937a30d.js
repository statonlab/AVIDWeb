"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/maps"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Maps */ "./resources/js/helpers/Maps.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SitesMap',
  mounted: function mounted() {
    this.loadMap();
  },
  data: function data() {
    return {
      plots: [],
      map: null,
      markers: [],
      infoWindow: null,
      selectedFeature: null
    };
  },
  methods: {
    loadMap: function loadMap() {
      var _this = this;

      _helpers_Maps__WEBPACK_IMPORTED_MODULE_1__["default"].load( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.loadPlots();

              case 2:
                _this.createMap();

                _this.setMapMarkers();

                _context.next = 6;
                return _this.loadLayers();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    },
    loadPlots: function loadPlots() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/web/sites-map");

              case 3:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                _this2.plots = data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    loadLayers: function loadLayers() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get('/web/sites-map/layers');

              case 3:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;

                _this3.map.data.addGeoJson(data);

                _this3.map.data.setMap(_this3.map);

                _this3.map.data.addListener('click', function (event) {
                  _this3.showWmu(event);
                });

                _this3.map.data.setStyle(function (f) {
                  return {
                    strokeWeight: 1,
                    fillColor: '#000000'
                  };
                });

                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    setMapMarkers: function setMapMarkers() {
      var _this4 = this;

      this.markers.forEach(function (marker) {
        marker.setMap(null);
      });
      this.markers = [];
      this.plots.forEach(function (plot) {
        var marker = new google.maps.Marker({
          map: _this4.map,
          position: _this4.getCoords(plot)
        });
        marker.addListener('click', function () {
          _this4.openWindow(marker, plot);
        });

        _this4.markers.push(marker);
      });
    },
    createMap: function createMap() {
      var _this5 = this;

      var position = {
        lat: -35,
        lng: 85
      };

      if (this.plots.length) {
        var plot = this.plots[0];
        position = this.getCoords(plot);
      }

      this.map = new google.maps.Map(this.$refs.map, {
        zoom: 6,
        center: position
      });
      this.map.addListener('click', function () {
        _this5.map.data.setStyle(function () {
          return {
            color: '#000000',
            strokeWeight: 1
          };
        });

        if (_this5.infoWindow) {
          _this5.infoWindow.close();
        }
      });
    },
    getCoords: function getCoords(plot) {
      return {
        lat: plot[1],
        lng: plot[2]
      };
    },
    showWmu: function showWmu(event) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var feature, aggregate, content;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                feature = event.feature;
                aggregate = feature.getProperty('Aggregate');

                if (!(_this6.selectedFeature && _this6.selectedFeature.getProperty('Aggregate') === aggregate)) {
                  _context4.next = 7;
                  break;
                }

                _this6.selectedFeature = null;

                _this6.map.data.setStyle(function () {
                  return {
                    color: '#000000',
                    strokeWeight: 1
                  };
                });

                if (_this6.infoWindow) {
                  _this6.infoWindow.close();
                }

                return _context4.abrupt("return");

              case 7:
                content = "\n      <table class=\"table mb-0\">\n        <tr>\n          <th>WMU</th>\n          <td>".concat(aggregate, "</td>\n        </tr>\n      </table>\n      ");

                if (!_this6.infoWindow) {
                  _this6.infoWindow = new google.maps.InfoWindow({
                    content: content
                  });
                } else {
                  _this6.infoWindow.close();

                  _this6.infoWindow.setContent(content);
                }

                _this6.map.data.setStyle(function (f) {
                  var color = '#000000';

                  if (f.getProperty('Aggregate') === aggregate) {
                    color = '#ff0000';
                  }

                  return {
                    strokeWeight: 1,
                    fillColor: color
                  };
                });

                _this6.infoWindow.open({
                  anchor: null,
                  position: event.latLng,
                  map: _this6.map
                });

                _this6.infoWindow.setPosition(event.latLng);

                _this6.selectedFeature = feature;

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    openWindow: function openWindow(marker, plot) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var id, loadingState, _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this7.loading) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _this7.loading = true;
                _context5.prev = 3;
                id = plot[0];

                if (_this7.infoWindow) {
                  _this7.infoWindow.close();
                }

                loadingState = "\n        <span class=\"spinner-grow spinner-grow-sm text-primary\" role=\"status\" aria-hidden=\"true\"></span>\n        <span>Loading...</span>\n        ";

                if (!_this7.infoWindow) {
                  _this7.infoWindow = new google.maps.InfoWindow({
                    content: loadingState
                  });
                } else {
                  _this7.infoWindow.setContent(loadingState);
                }

                _this7.infoWindow.open({
                  anchor: marker,
                  map: _this7.map
                });

                _context5.next = 11;
                return axios.get("/web/sites-map/site/".concat(id));

              case 11:
                _yield$axios$get3 = _context5.sent;
                data = _yield$axios$get3.data;

                _this7.infoWindow.setContent("\n        <div>\n          <table class=\"table mb-0 table-sm\">\n          <tr>\n              <th>Site Name</th>\n              <td>".concat(data.name, "</td>\n            </tr>\n            <tr>\n              <th>Created By</th>\n              <td>").concat(data.user.name, "</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">\n                <a href=\"").concat(data.url, "\">Visit site page</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        "));

                _context5.next = 19;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](3);
                console.error(_context5.t0);

              case 19:
                _this7.loading = false;

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[3, 16]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_SitesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SitesMap */ "./resources/js/components/SitesMap.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Maps',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_0__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"],
    SitesMap: _components_SitesMap__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.selectTabFromHash();
  },
  data: function data() {
    return {
      _request: null,
      tab: 'one',
      tabs: ['one', 'two']
    };
  },
  methods: {
    makeHash: function makeHash(tab) {
      return tab.replace(/ /g, '-');
    },
    selectTabFromHash: function selectTabFromHash() {
      if (this.$route.hash && this.$route.hash.length > 0) {
        this.selectTab(this.$route.hash.replace(/-/g, ' ').substring(1));
      }
    },
    selectTab: function selectTab(tab) {
      if (this.tabs.indexOf(tab) === -1) {
        return;
      }

      this.tab = tab;
      this.$router.push({
        hash: this.makeHash(tab)
      })["catch"](function (e) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/Maps.js":
/*!**************************************!*\
  !*** ./resources/js/helpers/Maps.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Maps)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Maps = /*#__PURE__*/function () {
  function Maps() {
    _classCallCheck(this, Maps);
  }

  _createClass(Maps, [{
    key: "loadMap",
    value: function loadMap(onLoad) {
      if (window.google && window.google.maps) {
        onLoad();
        return;
      }

      var script = document.createElement('script');
      var key = window.avid.keys.maps;
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      script.onload = onLoad;
      script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(key);
      document.head.appendChild(script);
    }
  }], [{
    key: "load",
    value: function load(onLoad) {
      return new Maps().loadMap(onLoad);
    }
  }]);

  return Maps;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sites-map[data-v-1050151b] {\n  height: calc(100vh - 145px);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_style_index_0_id_1050151b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_style_index_0_id_1050151b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_style_index_0_id_1050151b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SitesMap.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/SitesMap.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SitesMap.vue?vue&type=template&id=1050151b&scoped=true& */ "./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true&");
/* harmony import */ var _SitesMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitesMap.vue?vue&type=script&lang=js& */ "./resources/js/components/SitesMap.vue?vue&type=script&lang=js&");
/* harmony import */ var _SitesMap_vue_vue_type_style_index_0_id_1050151b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& */ "./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SitesMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1050151b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SitesMap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Maps.vue":
/*!***************************************!*\
  !*** ./resources/js/screens/Maps.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps.vue?vue&type=template&id=708efa3d&scoped=true& */ "./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true&");
/* harmony import */ var _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps.vue?vue&type=script&lang=js& */ "./resources/js/screens/Maps.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "708efa3d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Maps.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SitesMap.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/SitesMap.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SitesMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Maps.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/screens/Maps.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Maps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_style_index_0_id_1050151b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=style&index=0&id=1050151b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesMap_vue_vue_type_template_id_1050151b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SitesMap.vue?vue&type=template&id=1050151b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true&");


/***/ }),

/***/ "./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_708efa3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Maps.vue?vue&type=template&id=708efa3d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SitesMap.vue?vue&type=template&id=1050151b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card border shadow-sm" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { ref: "map", staticClass: "sites-map" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header shadow-none bg-light rounded" },
      [_c("strong", [_vm._v("All Sites")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Maps.vue?vue&type=template&id=708efa3d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("sites-map")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);