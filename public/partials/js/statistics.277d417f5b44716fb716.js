(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/statistics"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TokensField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TokensField',
  props: {
    options: {
      required: true,
      type: Array
    },
    id: {
      required: false,
      type: String
    },
    value: {
      required: false,
      type: Array
    },
    tags: {
      required: false,
      type: Boolean,
      "default": false
    },
    disabled: {
      required: false,
      type: Boolean,
      "default": false
    },
    placeholder: {
      required: false,
      type: String,
      "default": 'Search...'
    }
  },
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selects: []
    };
  },
  computed: {
    ajax: function ajax() {
      return {
        url: 'https://api.github.com/search/repositories',
        data: function data(params) {
          var query = {
            search: params.term,
            page: params.page || 1
          }; // Query parameters will be ?search=[term]&page=[page]

          return query;
        }
      };
    }
  },
  watch: {
    value: function value() {
      this.selects = this.value;
    }
  },
  methods: {
    onChange: function onChange(e) {
      this.$emit('input', e);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Statistics.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Statistics.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TokensField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TokensField */ "./resources/js/components/TokensField.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/User */ "./resources/js/helpers/User.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_Options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/Options */ "./resources/js/helpers/Options.js");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Statistics',
  components: {
    ApexChart: vue_apexcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    TokensField: _components_TokensField__WEBPACK_IMPORTED_MODULE_1__["default"],
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    this.setChartDefault();
    this.loadSites();
    this.loadPlots();
    this.loadTypes();
    this.loadSpecies();
    this.loadStates();
    this.loadChart();
    this.loadGroups();
  },
  watch: {
    sites: function sites() {
      this.loadChart();
      this.loadPlots();
    },
    plots: function plots() {
      this.loadChart();
    },
    types: function types() {
      this.loadChart();
      this.loadSpecies();
    },
    species: function species() {
      this.loadChart();
    },
    state: function state() {
      this.loadChart();
    },
    stateSearch: function stateSearch() {
      this.loadStates();
    },
    county: function county() {
      this.loadChart();
    },
    countySearch: function countySearch() {
      this.loadCounties();
    },
    protection: function protection() {
      this.loadChart();
    },
    dataType: function dataType() {
      this.sites = [];
      this.plots = [];
      this.loadChart();
      this.loadSites();
      this.loadPlots();
    },
    group: function group() {
      this.loadChart();
    },
    groupSearch: function groupSearch() {
      this.loadGroups();
    },
    wmu: function wmu() {
      this.loadChart();
    },
    yearsFilter: function yearsFilter() {
      this.loadChart();
    }
  },
  data: function data() {
    return {
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_5__["default"],
      chart: null,
      loading: false,
      siteOptions: [],
      plotOptions: [],
      typeOptions: [],
      speciesOptions: [],
      stateOptions: [],
      countyOptions: [],
      groups: [],
      sites: [],
      plots: [],
      types: [],
      species: [],
      years: [],
      yearsFilter: [],
      stateSearch: '',
      countySearch: '',
      groupSearch: '',
      protection: '',
      dataType: 'owned',
      wmu: '',
      state: null,
      county: null,
      group: null,
      _request: null,
      options: _helpers_Options__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  },
  methods: {
    loadGroups: function loadGroups() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/web/groups", {
                  params: {
                    search: _this.groupSearch
                  }
                });

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.groups = data.data.map(function (g) {
                  return {
                    label: g.name,
                    value: g.id
                  };
                });
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                _this.$alert('Unable to load groups. Please try refreshing the page or contact us.');

                console.error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    loadTypes: function loadTypes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get('/web/plant-types');

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.typeOptions = data.map(function (_ref) {
                  var id = _ref.id,
                      name = _ref.name;
                  return {
                    id: id,
                    text: name
                  };
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                _this2.$alert('Unable to load plants. Please try refreshing the page.');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    loadSpecies: function loadSpecies() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.species = [];
                _context3.prev = 1;
                _context3.next = 4;
                return axios.get('/web/statistics/species', {
                  params: {
                    types: _this3.types
                  }
                });

              case 4:
                _yield$axios$get3 = _context3.sent;
                data = _yield$axios$get3.data;
                _this3.speciesOptions = data.map(function (_ref2) {
                  var id = _ref2.id,
                      name = _ref2.name;
                  return {
                    id: id,
                    text: name
                  };
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

                _this3.$alert('Unable to load species. Please try refreshing the page.');

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }))();
    },
    loadSites: function loadSites() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$axios$get4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios.get("/web/statistics/sites", {
                  params: {
                    data_type: _this4.dataType
                  }
                });

              case 3:
                _yield$axios$get4 = _context4.sent;
                data = _yield$axios$get4.data;
                _this4.siteOptions = data.map(function (_ref3) {
                  var id = _ref3.id,
                      name = _ref3.name;
                  return {
                    id: id,
                    text: name
                  };
                });
                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

                _this4.$alert('Unable to load sites. Please try refreshing the page or contact us.');

                console.error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    loadStates: function loadStates() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$axios$get5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios.get("/web/states", {
                  params: {
                    search: _this5.stateSearch
                  }
                });

              case 3:
                _yield$axios$get5 = _context5.sent;
                data = _yield$axios$get5.data;
                _this5.stateOptions = data.data.map(function (s) {
                  return {
                    label: "".concat(s.name, " (").concat(s.code, ")"),
                    value: s.id,
                    search: s.name
                  };
                });

                if (_this5.state) {
                  _this5.loadCounties();
                }

                _context5.next = 13;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);

                _this5.$alert('Unable to load states. Please try refreshing the page or contact us.');

                console.error(_context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    loadCounties: function loadCounties() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$axios$get6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return axios.get('/web/counties', {
                  params: {
                    state_id: _this6.state,
                    search: _this6.countySearch
                  }
                });

              case 3:
                _yield$axios$get6 = _context6.sent;
                data = _yield$axios$get6.data;
                _this6.countyOptions = data.data.map(function (c) {
                  return {
                    label: c.name,
                    value: c.id
                  };
                });
                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);

                _this6.$alert('Unable to load counties. Please try refreshing the page or contact us.');

                console.error(_context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }))();
    },
    loadPlots: function loadPlots() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$axios$get7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.plots = [];
                _context7.prev = 1;
                _context7.next = 4;
                return axios.get('/web/statistics/plots', {
                  params: {
                    data_type: _this7.dataType,
                    sites: _this7.sites
                  }
                });

              case 4:
                _yield$axios$get7 = _context7.sent;
                data = _yield$axios$get7.data;
                _this7.plotOptions = data.map(function (_ref4) {
                  var id = _ref4.id,
                      name = _ref4.name;
                  return {
                    id: id,
                    text: name
                  };
                });
                _context7.next = 13;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);

                _this7.$alert('Unable to load plots. Please try refreshing the page or contact us.');

                console.error(_context7.t0);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    },
    loadChart: function loadChart() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$axios$get8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (_this8._request) {
                  _this8._request();
                }

                _this8.loading = true;
                _context8.prev = 2;
                _context8.next = 5;
                return axios.get("/web/statistics/chart", {
                  params: {
                    sites: _this8.sites,
                    plots: _this8.plots,
                    types: _this8.types,
                    species: _this8.species,
                    state: _this8.state,
                    county: _this8.county,
                    data_type: _this8.dataType,
                    group: _this8.group,
                    wmu: _this8.wmu,
                    protection: _this8.protection,
                    years_filter: _this8.yearsFilter
                  }
                });

              case 5:
                _yield$axios$get8 = _context8.sent;
                data = _yield$axios$get8.data;
                data.length !== 0 ? _this8.setChart(data) : _this8.setChartDefault();
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);

                if (!axios.isCancel()) {
                  _this8.$alert('Unable to load sites. Please try refreshing the page or contact us.');

                  console.error(_context8.t0);
                }

              case 13:
                _this8.loading = false;

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[2, 10]]);
      }))();
    },
    setChartDefault: function setChartDefault() {
      this.chart = {
        options: {
          chart: {
            id: 'sites-chart',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            labels: {
              show: false
            }
          },
          yaxis: {
            title: {
              text: 'Annual Height (inches)',
              style: {
                fontSize: 14
              }
            }
          },
          // title : {text: 'Annual Height'},
          noData: {
            text: 'No measurements found.'
          }
        },
        series: [{
          name: 'protected',
          data: []
        }, {
          name: 'unprotected',
          data: []
        }]
      };
    },
    setChart: function setChart(data) {
      var series = [];

      if (data.data[0].unprotected === undefined) {
        series.push({
          name: 'protected',
          data: data.data[0]["protected"]
        });
      } else {
        series.push({
          name: 'unprotected',
          data: data.data[0].unprotected
        });
      }

      if (data.data.length === 2) {
        series.push({
          name: 'unprotected',
          data: data.data[1].unprotected
        });
      }

      this.years = data.years;
      this.chart = {
        options: {
          chart: {
            id: 'sites-chart',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            labels: {
              show: true
            },
            categories: data.xaxis
          },
          yaxis: {
            title: {
              text: 'Annual Height (inches)',
              style: {
                fontSize: 14
              }
            }
          },
          colors: ['#54A7FB', '#14CA7E'],
          dataLabels: {
            formatter: function formatter(val, _ref5) {
              var seriesIndex = _ref5.seriesIndex,
                  dataPointIndex = _ref5.dataPointIndex;
              return [val, "N=".concat(data.data[seriesIndex].count[dataPointIndex])];
            },
            style: {
              colors: ['#2D3748']
            }
          },
          // title : {text: 'Annual Height'},
          noData: {
            text: 'No measurements found.'
          }
        },
        series: series
      };
    },
    selectState: function selectState() {
      if (this.state) {
        this.loadCounties();
      }

      this.$refs.county.clear();
    },
    clearState: function clearState() {
      this.$refs.county.clear();
      this.$refs.state.clear();
    },
    filterYear: function filterYear(year) {
      if (this.yearsFilter.includes(year)) {
        this.yearsFilter = this.yearsFilter.filter(function (y) {
          return y !== year;
        });
      } else {
        this.yearsFilter.push(year);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.height-auto[data-v-75ac5336] {\n    height: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c("Select2", {
          attrs: {
            id: _vm.id + "_select",
            options: _vm.options,
            placeholder: _vm.placeholder,
            disabled: _vm.disabled,
            settings: { multiple: "true", tags: _vm.tags, theme: "bootstrap4" }
          },
          on: {
            change: function($event) {
              return _vm.onChange($event)
            }
          },
          model: {
            value: _vm.selects,
            callback: function($$v) {
              _vm.selects = $$v
            },
            expression: "selects"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                Data Type\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dataType,
                        expression: "dataType"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "data-type", id: "data-type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.dataType = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "owned" } }, [
                      _vm._v("My Sites Only")
                    ]),
                    _vm._v(" "),
                    _vm.User.can("view sites")
                      ? _c("option", { attrs: { value: "admin" } }, [
                          _vm._v("All Sites")
                        ])
                      : _vm._e()
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                Group\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    _c("dropdown", {
                      ref: "group",
                      staticClass: "flex-grow-1",
                      attrs: {
                        autocomplete: "",
                        options: _vm.groups,
                        placeholder: "Select a group"
                      },
                      on: {
                        search: function($event) {
                          _vm.groupSearch = $event
                        }
                      },
                      model: {
                        value: _vm.group,
                        callback: function($$v) {
                          _vm.group = $$v
                        },
                        expression: "group"
                      }
                    }),
                    _vm._v(" "),
                    _vm.group !== null
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-link p-1 ml-2",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$refs.group.clear()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Clear\n                                "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [
                    _vm._v(
                      "\n                                Sites\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("tokens-field", {
                    attrs: {
                      id: "sites",
                      options: _vm.siteOptions,
                      placeholder: "Showing all sites"
                    },
                    model: {
                      value: _vm.sites,
                      callback: function($$v) {
                        _vm.sites = $$v
                      },
                      expression: "sites"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [
                    _vm._v(
                      "\n                                Plots\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("tokens-field", {
                    attrs: {
                      id: "plots",
                      options: _vm.plotOptions,
                      placeholder: "Showing all plots"
                    },
                    model: {
                      value: _vm.plots,
                      callback: function($$v) {
                        _vm.plots = $$v
                      },
                      expression: "plots"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                Site Protection\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.protection,
                        expression: "protection"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "protection", id: "protection" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.protection = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("All sites")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "both" } }, [
                      _vm._v("Sites with protected and unprotected plots")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "unprotected" } }, [
                      _vm._v("Sites with unprotected plots only")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [
                    _vm._v(
                      "\n                                Plant Types\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("tokens-field", {
                    attrs: {
                      id: "types",
                      options: _vm.typeOptions,
                      placeholder: "Showing all types"
                    },
                    model: {
                      value: _vm.types,
                      callback: function($$v) {
                        _vm.types = $$v
                      },
                      expression: "types"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [
                    _vm._v(
                      "\n                                Species\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("tokens-field", {
                    attrs: {
                      id: "species",
                      options: _vm.speciesOptions,
                      placeholder: "Showing all species"
                    },
                    model: {
                      value: _vm.species,
                      callback: function($$v) {
                        _vm.species = $$v
                      },
                      expression: "species"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                State\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    _c("dropdown", {
                      ref: "state",
                      staticClass: "flex-grow-1",
                      attrs: {
                        autocomplete: "",
                        options: _vm.stateOptions,
                        placeholder: "Select a state"
                      },
                      on: {
                        input: function($event) {
                          return _vm.selectState($event)
                        },
                        search: function($event) {
                          _vm.stateSearch = $event
                        }
                      },
                      model: {
                        value: _vm.state,
                        callback: function($$v) {
                          _vm.state = $$v
                        },
                        expression: "state"
                      }
                    }),
                    _vm._v(" "),
                    _vm.state !== null
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-link p-1 ml-2",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.clearState()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Clear\n                                "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                County\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    _c("dropdown", {
                      ref: "county",
                      staticClass: "flex-grow-1",
                      attrs: {
                        autocomplete: "",
                        placeholder:
                          _vm.state === null
                            ? "Select a state first"
                            : "Select a County",
                        options: _vm.countyOptions,
                        disabled: _vm.state === null
                      },
                      on: {
                        search: function($event) {
                          _vm.countySearch = $event
                        }
                      },
                      model: {
                        value: _vm.county,
                        callback: function($$v) {
                          _vm.county = $$v
                        },
                        expression: "county"
                      }
                    }),
                    _vm._v(" "),
                    _vm.county !== null
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-link p-1 ml-2",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.$refs.county.clear()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Clear\n                                "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(
                    "\n                                Wildlife Management Unit\n                            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.wmu,
                        expression: "wmu"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "wmu", id: "wmu" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.wmu = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Show all units")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.options.wmus, function(wmu) {
                      return _c("option", { domProps: { value: wmu } }, [
                        _vm._v(_vm._s(wmu))
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header d-flex" },
              [
                _c("h1", { staticClass: "mr-2 page-title" }, [
                  _vm._v("Annual Heights")
                ]),
                _vm._v(" "),
                _vm.loading ? _c("inline-spinner") : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.chart
              ? _c(
                  "div",
                  { staticClass: "mr-4 card-body" },
                  [
                    _c("apex-chart", {
                      ref: "chart",
                      attrs: {
                        type: "bar",
                        options: _vm.chart.options,
                        series: _vm.chart.series
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v("Unchecked years will be excluded from the chart")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-wrap" },
                _vm._l(_vm.years, function(year, index) {
                  return _c("div", { staticClass: "align-items-center" }, [
                    _c(
                      "div",
                      {
                        staticClass: "mb-2 mr-3 custom-control custom-checkbox"
                      },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            id: "year-" + index,
                            name: "role-select"
                          },
                          domProps: {
                            value: year,
                            checked: !_vm.yearsFilter.includes(year)
                          },
                          on: {
                            change: function($event) {
                              return _vm.filterYear(year)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "year-" + index }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(year) +
                                "\n                          "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h1", { staticClass: "page-title" }, [_vm._v("Filters")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("Filter by Year")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TokensField.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TokensField.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokensField.vue?vue&type=template&id=75ac5336&scoped=true& */ "./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true&");
/* harmony import */ var _TokensField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokensField.vue?vue&type=script&lang=js& */ "./resources/js/components/TokensField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& */ "./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TokensField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75ac5336",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TokensField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TokensField.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TokensField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TokensField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=style&index=0&id=75ac5336&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_style_index_0_id_75ac5336_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TokensField.vue?vue&type=template&id=75ac5336&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TokensField.vue?vue&type=template&id=75ac5336&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensField_vue_vue_type_template_id_75ac5336_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/Options.js":
/*!*****************************************!*\
  !*** ./resources/js/helpers/Options.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  seasons: ['0', '1 to 2', 'Greater than or equal to 3'],
  percentages: ['0-9%', '10-19%', '20-29%', '30-39%', '40-49%', '50-59%', '60-69%', '70-79%', '80-89%', '90-100%'],
  hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
  timezones: ['EST', 'CST', 'MST', 'PST'],
  wmus: ['1A', '1C', '2A', '3A', '3C', '3F', '3G', '3H', '3J', '3K', '3M', '3N', '3P', '3R', '3S', '4A', '4B', '4C', '4F', '4G', '4H', '4J', '4K', '4L', '4O', '4P', '4R', '4S', '4T', '4U', '4W', '4Y', '4Z', '5A', '5C', '5F', '5G', '5H', '5J', '5R', '5S', '5T', '6A', '6C', '6F', '6G', '6H', '6J', '6K', '6N', '6P', '6R', '6S', '7A', '7F', '7H', '7J', '7M', '7P', '7R', '7S', '8A', '8C', '8F', '8G', '8H', '8J', '8M', '8N', '8P', '8R', '8S', '8T', '8W', '8X', '8Y', '9A', '9C', '9F', '9G', '9H', '9J', '9K', '9M', '9N', '9P', '9R', ' 9S', '9T', '9W', '9X', '9Y']
});

/***/ }),

/***/ "./resources/js/screens/Statistics.vue":
/*!*********************************************!*\
  !*** ./resources/js/screens/Statistics.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistics.vue?vue&type=template&id=eb3b476e&scoped=true& */ "./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true&");
/* harmony import */ var _Statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistics.vue?vue&type=script&lang=js& */ "./resources/js/screens/Statistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eb3b476e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Statistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Statistics.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/screens/Statistics.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Statistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistics.vue?vue&type=template&id=eb3b476e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Statistics.vue?vue&type=template&id=eb3b476e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_eb3b476e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);