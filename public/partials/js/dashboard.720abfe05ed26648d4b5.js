(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardSitesCard',
  components: {
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.loadSites();
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_3___default.a,
      loading: true,
      sites: null,
      orderBy: 'last_measured_at',
      orderDir: 'asc'
    };
  },
  methods: {
    loadSites: function loadSites() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/web/sites", {
                  params: {
                    order_by: _this.orderBy,
                    order_dir: _this.orderDir,
                    limit: 10
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this._request = c;
                  })
                });

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.sites = data.data;
                _this.loading = false;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                if (!axios.isCancel(_context.t0)) {
                  _this.loading = false;
                  console.error(_context.t0);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    sort: function sort(column) {
      if (column === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.orderBy = column;
        this.orderDir = 'asc';
      }

      this.loadSites();
    },
    sortIcon: function sortIcon(column) {
      if (column !== this.orderBy) {
        return 'swap-vertical';
      }

      if (this.orderDir === 'asc') {
        return 'arrow-up';
      }

      return 'arrow-down';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'StatisticsCard',
  components: {
    ApexChart: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.setChartDefault();
    this.loadSites();
    this.loadTypes();
  },
  data: function data() {
    return {
      site: '',
      chart: null,
      sites: [],
      type: '',
      plants: [],
      loadingSites: false,
      _request: null
    };
  },
  watch: {
    site: function site() {
      this.loadChart();
    },
    type: function type() {
      this.loadChart();
    }
  },
  computed: {
    plantOptions: function plantOptions() {
      return [{
        label: 'All Plants',
        value: ''
      }].concat(this.plants.map(function (p) {
        return {
          label: p.name,
          value: p.id
        };
      }));
    }
  },
  methods: {
    loadTypes: function loadTypes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/web/plant-types');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.plants = data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                _this.$alert('Unable to load plants. Please try refreshing the page.');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    loadSites: function loadSites() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loadingSites = true;
                _context2.prev = 1;
                _context2.next = 4;
                return axios.get("/web/statistics/sites");

              case 4:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.sites = data;

                if (_this2.site === '' && data.length > 0) {
                  _this2.site = _this2.sites[0].id;
                }

                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                _this2.$alert('Unable to load sites. Please try refreshing the page or contact us.');

                console.error(_context2.t0);

              case 14:
                _this2.loadingSites = false;

                _this2.loadChart();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }))();
    },
    loadChart: function loadChart() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3._request) {
                  _this3._request();
                }

                _context3.prev = 1;

                if (!_this3.site) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 5;
                return axios.get("/web/statistics/".concat(_this3.site, "/chart"), {
                  params: {
                    plant_type_id: _this3.type
                  }
                });

              case 5:
                _yield$axios$get3 = _context3.sent;
                data = _yield$axios$get3.data;
                data.length !== 0 ? _this3.setChart(data) : _this3.setChartDefault();

              case 8:
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);

                if (!axios.isCancel()) {
                  _this3.$alert('Unable to load sites. Please try refreshing the page or contact us.');

                  console.error(_context3.t0);
                }

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 10]]);
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
          colors: ['#2E93FA', '#2EB07A'],
          dataLabels: {
            formatter: function formatter(val, _ref) {
              var seriesIndex = _ref.seriesIndex,
                  dataPointIndex = _ref.dataPointIndex;
              return val + " (N=".concat(data.data[seriesIndex].count[dataPointIndex], ")");
            }
          },
          // title : {text: 'Annual Height'},
          noData: {
            text: 'No measurements found.'
          }
        },
        series: [{
          name: 'protected',
          data: data.data[0]["protected"]
        }, {
          name: 'unprotected',
          data: data.data[1].unprotected
        }]
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_StatisticsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StatisticsCard */ "./resources/js/components/StatisticsCard.vue");
/* harmony import */ var _components_DashboardSitesCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DashboardSitesCard */ "./resources/js/components/DashboardSitesCard.vue");
/* harmony import */ var _components_RemindersCalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RemindersCalendar */ "./resources/js/components/RemindersCalendar.vue");
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
  name: 'Dashboard',
  components: {
    RemindersCalendar: _components_RemindersCalendar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardSitesCard: _components_DashboardSitesCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    StatisticsCard: _components_StatisticsCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body p-0 table-responsive" }, [
      _vm.loading
        ? _c(
            "p",
            { staticClass: "mb-0 p-4" },
            [_c("inline-spinner", { staticClass: "text-primary" })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.sites.length === 0
        ? _c("p", { staticClass: "mb-0 p-4 text-muted" }, [
            _vm._v(
              '\n            No sites found. Visit the "My Data" page to get started.\n        '
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.sites.length > 0
        ? _c("table", { staticClass: "table mb-0 table-middle table-hover" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [
                  _c(
                    "a",
                    {
                      staticClass: "d-flex align-items-center",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.sort("name")
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "mr-1" }, [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("icon", { attrs: { name: _vm.sortIcon("name") } })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _c(
                    "a",
                    {
                      staticClass: "d-flex align-items-center",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.sort("last_measured_at")
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v("Last Measured")
                      ]),
                      _vm._v(" "),
                      _c("icon", {
                        attrs: { name: _vm.sortIcon("last_measured_at") }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.sites, function(site) {
                return _c("tr", [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "app/sites/" + site.id } },
                        [_c("strong", [_vm._v(_vm._s(site.name))])]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(site.county.name) +
                            ", " +
                            _vm._s(site.state.code) +
                            "\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    site.last_measured_at
                      ? _c("span", [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                _vm
                                  .moment(site.last_measured_at)
                                  .format("MMM Do, YYYY")
                              ) +
                              "\n                    "
                          )
                        ])
                      : _vm._e()
                  ])
                ])
              }),
              0
            )
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("strong", [_vm._v("Sites")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header d-flex" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex-shrink-0 d-flex" },
        [
          _c("dropdown", {
            staticClass: "bg-white",
            attrs: {
              options: _vm.sites.map(function(s) {
                return { label: s.name, value: s.id }
              })
            },
            model: {
              value: _vm.site,
              callback: function($$v) {
                _vm.site = $$v
              },
              expression: "site"
            }
          }),
          _vm._v(" "),
          _c("dropdown", {
            staticClass: "bg-white ml-2",
            attrs: { options: _vm.plantOptions },
            model: {
              value: _vm.type,
              callback: function($$v) {
                _vm.type = $$v
              },
              expression: "type"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body p-2" }, [
      _vm.chart
        ? _c(
            "div",
            { staticClass: "mr-4" },
            [
              _c("apex-chart", {
                attrs: {
                  type: "bar",
                  options: _vm.chart.options,
                  series: _vm.chart.series
                }
              })
            ],
            1
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer border-top text-right" }, [
      _c(
        "a",
        { staticClass: "btn btn-link", attrs: { href: "/app/statistics" } },
        [
          _c("span", { staticClass: "mr-2" }, [
            _vm._v("Visit Statistics Page")
          ]),
          _vm._v(" "),
          _c("icon", { attrs: { name: "chevron-forward-outline" } })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-grow-1" }, [
      _c("strong", [_vm._v("Annual Height Chart")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6" }, [
        _c(
          "div",
          { staticClass: "card mb-3 p-2" },
          [_c("reminders-calendar")],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [_c("statistics-card", { staticClass: "mb-3" })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [_c("dashboard-sites-card", { staticClass: "mb-3" })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DashboardSitesCard.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/DashboardSitesCard.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardSitesCard.vue?vue&type=template&id=5f6314b3& */ "./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3&");
/* harmony import */ var _DashboardSitesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardSitesCard.vue?vue&type=script&lang=js& */ "./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardSitesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DashboardSitesCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSitesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardSitesCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashboardSitesCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSitesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardSitesCard.vue?vue&type=template&id=5f6314b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashboardSitesCard.vue?vue&type=template&id=5f6314b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSitesCard_vue_vue_type_template_id_5f6314b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/StatisticsCard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/StatisticsCard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCard.vue?vue&type=template&id=c317bf04& */ "./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04&");
/* harmony import */ var _StatisticsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCard.vue?vue&type=script&lang=js& */ "./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StatisticsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatisticsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCard.vue?vue&type=template&id=c317bf04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatisticsCard.vue?vue&type=template&id=c317bf04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCard_vue_vue_type_template_id_c317bf04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/screens/Dashboard.vue":
/*!********************************************!*\
  !*** ./resources/js/screens/Dashboard.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true& */ "./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/screens/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d6f1144",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/screens/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Dashboard.vue?vue&type=template&id=4d6f1144&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4d6f1144_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);