(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_plots~js/group_plots~js/plots"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/User */ "./resources/js/helpers/User.js");
/* harmony import */ var _forms_PlantForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/PlantForm */ "./resources/js/forms/PlantForm.vue");
/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pager */ "./resources/js/components/Pager.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BetaPlantsView',
  components: {
    Pager: _Pager__WEBPACK_IMPORTED_MODULE_5__["default"],
    PlantForm: _forms_PlantForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    plot: {
      required: true
    },
    editable: {
      required: false,
      type: Boolean,
      "default": true
    },
    siteUrlPrefix: {
      required: false,
      type: String,
      "default": '/app/plants'
    }
  },
  watch: {
    'plot.id': {
      handler: function handler() {
        this.loading = true;
        this.loadPlants();
      }
    },
    search: function search() {
      this.loadPlants();
    }
  },
  data: function data() {
    return {
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_3__["default"],
      plants: [],
      plant: null,
      showForm: false,
      lastPage: 1,
      page: 1,
      orderBy: 'tag',
      orderDir: 'asc',
      request: null,
      total: 0,
      deleting: null,
      loading: true,
      search: ''
    };
  },
  mounted: function mounted() {
    this.loadPlants();
  },
  methods: {
    loadPlants: function loadPlants() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.request) {
                  _this.request();
                }

                _context.prev = 1;
                _context.next = 4;
                return axios.get("/web/plots/".concat(_this.plot.id, "/plants"), {
                  params: {
                    search: _this.search,
                    page: _this.page,
                    order_by: _this.orderBy,
                    order_dir: _this.orderDir
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this.request = c;
                  })
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.plants = data.data;
                _this.lastPage = data.last_page;
                _this.total = data.total;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                if (!axios.isCancel(_context.t0)) {
                  console.error(_context.t0);

                  _this.$notify({
                    text: 'Unable to load plot. Please try refreshing the page.',
                    type: 'error'
                  });
                }

              case 14:
                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }))();
    },
    goTo: function goTo(page) {
      this.page = page;
      this.loadPlants();
    },
    created: function created(plant) {
      this.closeForm();
      this.loadPlants();
      this.$notify({
        text: 'Plant created successfully',
        type: 'success'
      });
    },
    updated: function updated(plant) {
      this.closeForm();
      this.plants = this.plants.map(function (p) {
        return p.id === plant.id ? plant : p;
      });
      this.$notify({
        text: 'Plant updated successfully',
        type: 'success'
      });
    },
    closeForm: function closeForm() {
      this.plant = null;
      this.showForm = false;
    },
    edit: function edit(plant) {
      this.plant = plant;
      this.showForm = true;
    },
    destroy: function destroy(plant) {
      var _this2 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: "Are you sure you want to delete Plant #".concat(plant.tag, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.deleting = plant.id;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return axios["delete"]("/web/plants/".concat(plant.id));

                  case 4:
                    _this2.loadPlants();

                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);

                    _this2.$notify({
                      text: 'Unable to delete plant. Please try refreshing the page.',
                      type: 'error'
                    });

                    console.error(_context2.t0);

                  case 11:
                    _this2.deleting = null;

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 7]]);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    plotUpdated: function plotUpdated(plot) {
      this.plot = plot;
      this.editingPlot = false;
    },
    sort: function sort(column) {
      if (column === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.orderBy = column;
        this.orderDir = 'asc';
      }

      this.loadPlants();
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _BetaPlantsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BetaPlantsView */ "./resources/js/components/BetaPlantsView.vue");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _forms_PlotForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms/PlotForm */ "./resources/js/forms/PlotForm.vue");
/* harmony import */ var _forms_ImportForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms/ImportForm */ "./resources/js/forms/ImportForm.vue");
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/User */ "./resources/js/helpers/User.js");


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
//
//
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
  name: 'BetaPlotsView',
  components: {
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_8__["default"],
    PlotForm: _forms_PlotForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    ImportForm: _forms_ImportForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    Dropdown: _Dropdown__WEBPACK_IMPORTED_MODULE_5__["default"],
    BetaPlantsView: _BetaPlantsView__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tab: _Tab__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tabs: _Tabs__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    site: {
      required: true
    },
    siteUrlPrefix: {
      required: false,
      type: String,
      "default": '/app/plants'
    },
    editable: {
      required: false,
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_9__["default"],
      loading: true,
      plots: [],
      plot: null,
      plotId: null,
      page: 1,
      lastPage: 1,
      search: '',
      orderBy: 'number',
      orderDir: 'asc',
      request: null,
      plotOptions: [],
      showPlotForm: false,
      editing: null,
      deleting: null,
      importing: false
    };
  },
  watch: {
    'site.id': {
      handler: function handler() {
        this.loadPlots();
      }
    },
    plotId: function plotId(id) {
      var plots = this.plots.filter(function (p) {
        return p.id === id;
      });

      if (plots.length > 0) {
        this.plot = plots[0];
      }
    },
    search: function search() {
      this.loadPlots();
    }
  },
  mounted: function mounted() {
    this.loadPlots();
  },
  methods: {
    loadPlots: function loadPlots() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.request !== null) {
                  _this.request();
                }

                _context.prev = 1;
                _context.next = 4;
                return axios.get("/web/sites/".concat(_this.site.id, "/plots"), {
                  params: {
                    page: _this.page,
                    search: _this.search,
                    order_by: _this.orderBy,
                    order_dir: _this.orderDir
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this.request = c;
                  })
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.plots = data.data;
                _this.lastPage = data.last_page;
                _this.loading = false;
                _this.request = null;

                if ((_this.plotId === null || _this.plot === null) && _this.plots.length > 0) {
                  _this.plotId = _this.plots[0].id;
                  _this.plot = _this.plots[0];
                }

                _this.setOptions();

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);

                if (!axios.isCancel(_context.t0)) {
                  _this.loading = false;
                  _this.request = null;
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14]]);
      }))();
    },
    created: function created(plot) {
      this.plots.push(plot);
      this.plot = plot;
      this.plotId = plot.id;
      this.setOptions();
      this.closeForm();
    },
    updated: function updated(plot) {
      this.plot = plot;
      this.plots = this.plots.map(function (p) {
        return p.id === plot.id ? plot : p;
      });
      this.setOptions();
      this.closeForm();
    },
    setOptions: function setOptions() {
      this.plotOptions = this.plots.map(function (p) {
        return {
          value: p.id,
          label: "Plot #".concat(p.number)
        };
      });
    },
    closeForm: function closeForm() {
      this.showPlotForm = false;
      this.editing = null;
    },
    edit: function edit() {
      this.editing = this.plot;
      this.showPlotForm = true;
    },
    deletePlot: function deletePlot() {
      var _this2 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: "Are you sure you want to delete Plot #".concat(this.plot.number, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.deleting = _this2.plot.id;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return axios["delete"]("/web/plots/".concat(_this2.plot.id));

                  case 4:
                    _this2.plot = null;

                    _this2.loadPlots();

                    _this2.$notify({
                      text: 'Plot deleted successfully.',
                      type: 'success'
                    });

                    _context2.next = 12;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](1);

                    _this2.$notify({
                      text: 'Unable to delete plot. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 12:
                    _this2.deleting = null;

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 9]]);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    deleteSite: function deleteSite() {
      var _this3 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: "Are you sure you want to delete ".concat(this.site.name, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _this3.deleting = _this3.site.id;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return axios["delete"]("/web/sites/".concat(_this3.site.id));

                  case 4:
                    _this3.$notify({
                      text: 'Site deleted successfully',
                      type: 'error'
                    });

                    _this3.$router.replace({
                      path: '/app/sites',
                      query: {}
                    })["catch"](function (e) {});

                    _context3.next = 11;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](1);

                    _this3.$notify({
                      text: 'Unable to delete site. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 11:
                    _this3.deleting = null;

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[1, 8]]);
          }));

          function onConfirm() {
            return _onConfirm2.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    optional: function optional(value, field) {
      if (value) {
        if (Array.isArray(value) && value.length !== 0) {
          return value.map(function (v) {
            return v.name;
          }).join(', ');
        }

        return value;
      }

      if (typeof field !== 'undefined') {
        return "".concat(field, " is not provided");
      }

      return 'Not provided';
    },
    measurementsCreated: function measurementsCreated() {
      this.closeImportForm();
    },
    closeImportForm: function closeImportForm() {
      this.importing = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _BetaPlotsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BetaPlotsView */ "./resources/js/components/BetaPlotsView.vue");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _forms_SiteForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/SiteForm */ "./resources/js/forms/SiteForm.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BetaSite',
  components: {
    SiteForm: _forms_SiteForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    BetaPlotsView: _BetaPlotsView__WEBPACK_IMPORTED_MODULE_2__["default"],
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    siteUrlPrefix: {
      required: false,
      type: String,
      "default": '/app/plants'
    },
    editable: {
      required: false,
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      loadingSite: true,
      site: null,
      plots: [],
      loadingPlots: false,
      plotSearch: '',
      plants: [],
      loadingPlants: false,
      showForm: false
    };
  },
  mounted: function mounted() {
    this.loadSite();
  },
  methods: {
    loadSite: function loadSite() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loadingSite = true;
                _context.prev = 1;
                id = _this.$route.params.id;
                _context.next = 5;
                return axios.get("/web/sites/".concat(id));

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.site = data;
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

                _this.$alert('Unable to load site information. Please try refreshing the page.');

              case 14:
                _this.loadingSite = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    edit: function edit() {
      this.showForm = true;
    },
    updated: function updated(site) {
      this.site = site;
      this.showForm = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Pager',
  props: {
    lastPage: {
      required: true,
      type: Number
    },
    page: {
      required: true,
      type: Number
    }
  },
  methods: {
    previous: function previous() {
      if (this.page === 1) {
        return;
      }

      this.$emit('change', this.page - 1);
    },
    next: function next() {
      if (this.lastPage === this.page) {
        return;
      }

      this.$emit('change', this.page + 1);
    },
    change: function change(page) {
      if (this.page === page) {
        return;
      }

      this.$emit('change', page);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Tab',
  props: {
    name: {
      required: true,
      type: String
    },
    selected: {
      "default": false,
      type: Boolean
    },
    icon: {
      required: false,
      type: String,
      "default": null
    }
  },
  watch: {
    isActive: function isActive(_isActive) {
      if (_isActive) {
        this.$emit('mount');
      }
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  },
  computed: {
    href: function href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-').replace(/#/g, '');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./resources/js/components/Icon.vue");
//
//
//
//
//
//
//
//
//
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
  name: 'Tabs',
  components: {
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    history: {
      required: false,
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      tabs: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.tabs = this.$children.filter(function (child) {
      return child.$options._componentTag === 'tab';
    }).map(function (child) {
      return child;
    });

    if (this.history) {
      this.tabs.forEach(function (tab) {
        if (_this.$route.hash === tab.href) {
          _this.selectTab(tab);
        }
      });
    }
  },
  methods: {
    selectTab: function selectTab(e, selectedTab) {
      if (e && !this.history) {
        e.preventDefault();
      }

      this.tabs.forEach(function (tab) {
        if (!tab || !selectedTab) {
          return;
        }

        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/ImportForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/ImportForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modal/Modal */ "./resources/js/components/Modal/Modal.vue");
/* harmony import */ var _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal/ModalCard */ "./resources/js/components/Modal/ModalCard.vue");
/* harmony import */ var _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal/ModalHeader */ "./resources/js/components/Modal/ModalHeader.vue");
/* harmony import */ var _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal/ModalTitle */ "./resources/js/components/Modal/ModalTitle.vue");
/* harmony import */ var _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal/ModalBody */ "./resources/js/components/Modal/ModalBody.vue");
/* harmony import */ var _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal/ModalFooter */ "./resources/js/components/Modal/ModalFooter.vue");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_Required__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Required */ "./resources/js/components/Required.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");


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










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SiteForm',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_10__["default"],
    Required: _components_Required__WEBPACK_IMPORTED_MODULE_9__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    site: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      form: new _Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        file: null
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this$form$pos, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.form.file) {
                  _this.form.setAsFile('file');
                }

                _context.prev = 1;
                _context.next = 4;
                return _this.form.post("/web/sites/".concat(_this.site.id, "/import"));

              case 4:
                _yield$_this$form$pos = _context.sent;
                data = _yield$_this$form$pos.data;

                _this.$notify({
                  type: 'success',
                  text: 'Measurements imported successfully.'
                });

                _this.$emit('create', data);

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                if (_context.t0.response && _context.t0.response.status !== 422) {
                  _this.$notify({
                    text: 'Unable to save site. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    fileChanged: function fileChanged(event) {
      this.form.file = event.target.files[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "card-header d-flex align-items-center p-2" }, [
        _c("div", { staticClass: "flex-grow-1" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "search", placeholder: "Search by tag or species" },
            domProps: { value: _vm.search },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-shrink-0 text-muted" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showForm = true
                }
              }
            },
            [
              _c("icon", { attrs: { name: "add" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Plant")])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body p-0 table-responsive" }, [
        _vm.loading
          ? _c(
              "div",
              {
                staticClass: "d-flex align-items-center justify-content-center"
              },
              [_c("inline-spinner", { staticClass: "text-primary" })],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && _vm.plants.length === 0
          ? _c("div", { staticClass: "p-3 text-muted border-top" }, [
              _vm._v(
                '\n            No plants found. Please try adjusting your filters or create a new plant using the "+ Plant" button above.\n        '
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && _vm.plants.length > 0
          ? _c("table", { staticClass: "table mb-0" }, [
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
                            return _vm.sort("tag")
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-1" }, [_vm._v("Tag")]),
                        _vm._v(" "),
                        _c("icon", { attrs: { name: _vm.sortIcon("tag") } })
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
                            return _vm.sort("name")
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-1" }, [
                          _vm._v("Species")
                        ]),
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
                            return _vm.sort("quadrant")
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-1" }, [
                          _vm._v("Quadrant")
                        ]),
                        _vm._v(" "),
                        _c("icon", {
                          attrs: { name: _vm.sortIcon("quadrant") }
                        })
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
                            return _vm.sort("measurements_count")
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-1" }, [
                          _vm._v("Measurements")
                        ]),
                        _vm._v(" "),
                        _c("icon", {
                          attrs: { name: _vm.sortIcon("measurements_count") }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("th")
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.plants, function(plant) {
                  return _c(
                    "tr",
                    {
                      class: {
                        "hover-visible-container": _vm.deleting !== plant.id
                      }
                    },
                    [
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: { to: _vm.siteUrlPrefix + "/" + plant.id }
                            },
                            [
                              _vm._v(
                                _vm._s(plant.type.name) +
                                  " #" +
                                  _vm._s(plant.tag)
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(plant.species_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(plant.quadrant))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(plant.measurements_count))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-end hover-visible"
                          },
                          [
                            _vm.editable ||
                            _vm.User.owns(plant) ||
                            _vm.User.can("update sites")
                              ? _c(
                                  "button",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Edit",
                                        expression: "'Edit'"
                                      }
                                    ],
                                    staticClass: "btn btn-sm btn-link",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(plant)
                                      }
                                    }
                                  },
                                  [_c("icon", { attrs: { name: "create" } })],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.User.owns(plant) || _vm.User.can("delete sites")
                              ? _c(
                                  "button",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Delete",
                                        expression: "'Delete'"
                                      }
                                    ],
                                    staticClass: "btn btn-sm",
                                    class:
                                      _vm.deleting === plant.id
                                        ? "btn-danger"
                                        : "btn-link",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.destroy(plant)
                                      }
                                    }
                                  },
                                  [
                                    _vm.deleting !== plant.id
                                      ? _c("icon", { attrs: { name: "trash" } })
                                      : _c("inline-spinner")
                                  ],
                                  1
                                )
                              : _vm._e()
                          ]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.lastPage > 1
          ? _c(
              "div",
              { staticClass: "py-2" },
              [
                _c("pager", {
                  attrs: { page: _vm.page, "last-page": _vm.lastPage },
                  on: {
                    change: function($event) {
                      return _vm.goTo($event)
                    }
                  }
                })
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.showForm
        ? _c("plant-form", {
            attrs: { plot: _vm.plot, plant: _vm.plant },
            on: {
              close: _vm.closeForm,
              create: _vm.created,
              update: _vm.updated
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-lg-3" }, [
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-header d-flex border-bottom" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "flex-shrink-0" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showPlotForm = true
                      }
                    }
                  },
                  [
                    _c("icon", { attrs: { name: "add" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Plot")])
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("dropdown", {
                  attrs: {
                    autocomplete: "",
                    loading: _vm.loading,
                    options: _vm.plotOptions
                  },
                  on: {
                    search: function($event) {
                      _vm.search = $event
                    }
                  },
                  model: {
                    value: _vm.plotId,
                    callback: function($$v) {
                      _vm.plotId = $$v
                    },
                    expression: "plotId"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "d-flex align-items-center",
                  attrs: {
                    href: "/web/sites/" + _vm.site.id + "/export",
                    target: "_blank"
                  }
                },
                [
                  _c("icon", { attrs: { name: "cloud-download-outline" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v("Download Spreadsheet")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "mt-3 d-flex align-items-center",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.importing = true
                    }
                  }
                },
                [
                  _c("icon", { attrs: { name: "cloud-upload-outline" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v("Import Spreadsheet")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(3)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8 col-lg-9" }, [
          _c(
            "div",
            { staticClass: "card mb-3" },
            [
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass:
                        "p-3 d-flex align-items center justify-content-center"
                    },
                    [_c("inline-spinner", { staticClass: "text-primary" })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loading && _vm.plots.length === 0
                ? _c(
                    "div",
                    {
                      staticClass:
                        "card-body d-flex align-items-center justify-content-center flex-column text-center"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-center icon-circle"
                        },
                        [
                          _c("icon", {
                            attrs: { name: "document-text-outline" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-weight-bold mt-4" }, [
                        _vm._v("Welcome to Your Site")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted max-w-700" }, [
                        _vm._v(
                          "\n                        In this page, you will be able to create and manage plots for your site.\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted max-w-700" }, [
                        _vm._v(
                          "\n                        Get started by creating a new plot using the button below.\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mt-4",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.showPlotForm = true
                            }
                          }
                        },
                        [
                          _c("icon", { attrs: { name: "add" } }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                            New Plot\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loading && _vm.plots.length > 0
                ? _c(
                    "tabs",
                    [
                      _c(
                        "tab",
                        { attrs: { name: "Plants", selected: "" } },
                        [
                          _vm.plot
                            ? _c("beta-plants-view", {
                                attrs: {
                                  "site-url-prefix": _vm.siteUrlPrefix,
                                  editable: _vm.editable,
                                  plot: _vm.plot
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("tab", { attrs: { name: "Plot Info" } }, [
                        _c(
                          "div",
                          { staticClass: "card-header border-bottom d-flex" },
                          [
                            _c("div", { staticClass: "flex-grow-1" }, [
                              _c("strong", [_vm._v("Plot Information")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-shrink-0" }, [
                              _vm.editable ||
                              _vm.User.owns(_vm.plot) ||
                              _vm.User.can("update sites")
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.edit($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("icon", { attrs: { name: "create" } }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Edit Plot")])
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.User.owns(_vm.plot) ||
                              _vm.User.can("delete sites")
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.deletePlot($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm.deleting !== _vm.plot.id
                                        ? _c("icon", {
                                            attrs: { name: "trash" }
                                          })
                                        : _c("inline-spinner"),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Delete Plot")])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _vm.plot
                            ? _c("dl", { staticClass: "mb-0" }, [
                                _c("dt", [_vm._v("Basal Area")]),
                                _vm._v(" "),
                                _vm.plot.basal_area !== null
                                  ? _c("dd", [
                                      _vm._v(_vm._s(_vm.plot.basal_area))
                                    ])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Enclosed or Protected")]),
                                _vm._v(" "),
                                _vm.plot.is_protected
                                  ? _c("dd", [_vm._v("Yes")])
                                  : _c("dd", [_vm._v("No")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Protection Period")]),
                                _vm._v(" "),
                                _vm.plot.protection_seasons !== null
                                  ? _c("dd", [
                                      _vm._v(
                                        _vm._s(_vm.plot.protection_seasons)
                                      )
                                    ])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Ground and Shrub Cover")]),
                                _vm._v(" "),
                                _vm.plot.ground_cover !== null
                                  ? _c("dd", [
                                      _vm._v(_vm._s(_vm.plot.ground_cover))
                                    ])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Canopy")]),
                                _vm._v(" "),
                                _vm.plot.canopy !== null
                                  ? _c("dd", [_vm._v(_vm._s(_vm.plot.canopy))])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Subcanopy")]),
                                _vm._v(" "),
                                _vm.plot.subcanopy !== null
                                  ? _c("dd", [
                                      _vm._v(_vm._s(_vm.plot.subcanopy))
                                    ])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Recorders")]),
                                _vm._v(" "),
                                _vm.plot.recorders !== null
                                  ? _c("dd", [
                                      _vm._v(_vm._s(_vm.plot.recorders))
                                    ])
                                  : _c("dd", [_vm._v("Not Provided")]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Wildlife Management Unit")]),
                                _vm._v(" "),
                                _vm.plot.wmu
                                  ? _c("dd", [_vm._v(_vm._s(_vm.plot.wmu))])
                                  : _c("dd", [_vm._v("Not Provided")])
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tab", { attrs: { name: "Site Info" } }, [
                        _c(
                          "div",
                          { staticClass: "card-header border-bottom d-flex" },
                          [
                            _c("div", { staticClass: "flex-grow-1" }, [
                              _c("strong", [_vm._v("Site Information")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-shrink-0" }, [
                              _vm.editable ||
                              _vm.User.owns(_vm.site) ||
                              _vm.User.can("update sites")
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.$emit("edit-site-request")
                                        }
                                      }
                                    },
                                    [
                                      _c("icon", { attrs: { name: "create" } }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Edit Site")])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-shrink-0" }, [
                              _vm.User.owns(_vm.site) ||
                              _vm.User.can("delete sites")
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.deleteSite($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm.deleting !== _vm.site.id
                                        ? _c("icon", {
                                            attrs: { name: "trash" }
                                          })
                                        : _c("inline-spinner"),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Delete Site")])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("dl", { staticClass: "mb-0" }, [
                            _c("dt", [_vm._v("Owner")]),
                            _vm._v(" "),
                            _c("dd", { staticClass: "text-muted" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.optional(
                                    _vm.site.owner_name,
                                    "Owner name"
                                  )
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("dt", [_vm._v("Contact Info")]),
                            _vm._v(" "),
                            _c("dd", { staticClass: "text-muted" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.optional(
                                      _vm.site.owner_contact,
                                      "Owner contact info"
                                    )
                                  ) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("dt", [_vm._v("Overstory Species")]),
                            _vm._v(" "),
                            _vm.site.species.length !== 0
                              ? _c("dd", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.site.species
                                          .map(function(v) {
                                            return v.name
                                          })
                                          .join(", ")
                                      ) +
                                      "\n                                "
                                  )
                                ])
                              : _c("dd", { staticClass: "text-muted" }, [
                                  _vm._v("Not provided")
                                ]),
                            _vm._v(" "),
                            _c("dt", [_vm._v("Seedling or Shrub Species")]),
                            _vm._v(" "),
                            _vm.site.shrubs.length !== 0
                              ? _c("dd", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.site.shrubs
                                          .map(function(v) {
                                            return v.name
                                          })
                                          .join(", ")
                                      ) +
                                      "\n                                "
                                  )
                                ])
                              : _c("dd", { staticClass: "text-muted" }, [
                                  _vm._v("Not provided")
                                ]),
                            _vm._v(" "),
                            _c("dt", [_vm._v("Basal Area")]),
                            _vm._v(" "),
                            _c("dd", { staticClass: "text-muted" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.optional(_vm.site.basal_area)) +
                                  "\n                                    "
                              ),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.site.basal_area,
                                      expression: "site.basal_area"
                                    }
                                  ]
                                },
                                [
                                  _vm._v("ft"),
                                  _c("sup", [_vm._v("2")]),
                                  _vm._v("/ac")
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("dt", [
                              _vm._v("Average Overstory Tree Diameter")
                            ]),
                            _vm._v(" "),
                            _c("dd", { staticClass: "text-muted" }, [
                              _vm._v(
                                _vm._s(_vm.optional(_vm.site.diameter)) + " "
                              ),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.site.diameter,
                                      expression: "site.diameter"
                                    }
                                  ]
                                },
                                [_vm._v("in")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.importing
        ? _c("import-form", {
            attrs: { site: _vm.site },
            on: {
              close: _vm.closeImportForm,
              create: function($event) {
                return _vm.measurementsCreated()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showPlotForm
        ? _c("plot-form", {
            attrs: { site: _vm.site, plot: _vm.editing },
            on: {
              create: function($event) {
                return _vm.created($event)
              },
              update: function($event) {
                return _vm.updated($event)
              },
              close: _vm.closeForm
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-grow-1" }, [
      _c("strong", [_vm._v("Plots")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pb-2" }, [
      _c("strong", [_vm._v("Actions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c("small", { staticClass: "text-muted" }, [
        _vm._v(
          "The produced spreadsheet can be filled and imported into the site"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c("small", { staticClass: "text-muted" }, [
        _vm._v("Import data recorded in spreadsheet format")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.loadingSite
        ? _c(
            "div",
            { staticClass: "d-flex align-items-center justify-content-center" },
            [_c("inline-spinner", { staticClass: "text-primary" })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.site && !_vm.loadingSite
        ? _c("div", { staticClass: "mb-3 d-flex" }, [
            _c("div", { staticClass: "flex-grow-1" }, [
              _c("h1", { staticClass: "page-title" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.site.name) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0 text-muted" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.site.city ? _vm.site.city + ", " : "") +
                    _vm._s(_vm.site.county.name) +
                    ", " +
                    _vm._s(_vm.site.state.name) +
                    "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-shrink-0" })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.site
        ? _c("beta-plots-view", {
            attrs: {
              site: _vm.site,
              "site-url-prefix": _vm.siteUrlPrefix,
              editable: _vm.editable
            },
            on: { "edit-site-request": _vm.edit }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showForm
        ? _c("site-form", {
            attrs: { site: _vm.site },
            on: {
              close: function($event) {
                _vm.showForm = false
              },
              update: _vm.updated
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.lastPage > 1
    ? _c("nav", { attrs: { "aria-label": "Page navigation" } }, [
        _c(
          "ul",
          { staticClass: "pagination justify-content-center mb-0" },
          [
            _c("li", { class: ["page-item", { disabled: _vm.page === 1 }] }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: {
                    href: "#",
                    tabindex: "-1",
                    "aria-disabled": _vm.page === 1 ? "true" : "false"
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.previous()
                    }
                  }
                },
                [_vm._v("Previous")]
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.lastPage, function(i) {
              return _c(
                "li",
                { class: ["page-item", { active: _vm.page === i }] },
                [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.change(i)
                        }
                      }
                    },
                    [_vm._v(_vm._s(i))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "li",
              { class: ["page-item", { disabled: _vm.lastPage === _vm.page }] },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-disabled":
                        _vm.lastPage === _vm.page ? "true" : "false"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.next()
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              ]
            )
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _vm.isActive ? _c("div", [_vm._t("default")], 2) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "nav nav-custom-tabs align-items-center" },
        [
          _vm._l(_vm.tabs, function(tab) {
            return _c(
              "a",
              {
                class: ["nav-link", { active: tab.isActive }],
                attrs: { href: tab.href },
                on: {
                  click: function($event) {
                    return _vm.selectTab($event, tab)
                  }
                }
              },
              [
                tab.icon ? _c("icon", { attrs: { name: tab.icon } }) : _vm._e(),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(tab.name))])
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm._t("right")
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "modal",
    {
      attrs: { medium: "" },
      on: {
        close: function($event) {
          return _vm.$emit("close")
        }
      }
    },
    [
      _c(
        "form",
        {
          attrs: { action: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit()
            }
          }
        },
        [
          _c(
            "modal-card",
            [
              _c(
                "modal-header",
                [
                  _c("modal-title", [_vm._v("Import")]),
                  _vm._v(" "),
                  _c("close", {
                    on: {
                      click: function($event) {
                        return _vm.$emit("close")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("modal-body", [
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v(
                    "If you have filled out an exported data sheet, you can upload it here to automatically generate new measurements."
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [
                      _vm._v(
                        "\n                        File Upload\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c("div", { staticClass: "custom-file" }, [
                        _c("input", {
                          staticClass: "custom-file-input",
                          attrs: {
                            type: "file",
                            id: "fileUpload",
                            accept: ".xlsx"
                          },
                          on: {
                            change: function($event) {
                              return _vm.fileChanged($event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-file-label",
                            attrs: { for: "fileUpload" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.form.file
                                    ? _vm.form.file.name
                                    : "Choose file"
                                ) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.form.errors.errors, function(error) {
                      return _c(
                        "span",
                        { staticClass: "form-text text-danger" },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(error[0]) +
                              "\n                    "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("modal-footer", { staticClass: "d-flex" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_c("span", [_vm._v("Import")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light ml-auto",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v("\n                    Close\n                ")]
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BetaPlantsView.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/BetaPlantsView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true& */ "./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true&");
/* harmony import */ var _BetaPlantsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BetaPlantsView.vue?vue&type=script&lang=js& */ "./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BetaPlantsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c0a78e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BetaPlantsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlantsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaPlantsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlantsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlantsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlantsView.vue?vue&type=template&id=2c0a78e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlantsView_vue_vue_type_template_id_2c0a78e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/BetaPlotsView.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/BetaPlotsView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true& */ "./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true&");
/* harmony import */ var _BetaPlotsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BetaPlotsView.vue?vue&type=script&lang=js& */ "./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BetaPlotsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ae75d8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BetaPlotsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlotsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaPlotsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlotsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlotsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BetaPlotsView.vue?vue&type=template&id=0ae75d8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaPlotsView_vue_vue_type_template_id_0ae75d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Data/PlotsDataView.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Data/PlotsDataView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true& */ "./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true&");
/* harmony import */ var _PlotsDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlotsDataView.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlotsDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d469927",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/PlotsDataView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotsDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlotsDataView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotsDataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotsDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotsDataView.vue?vue&type=template&id=4d469927&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotsDataView_vue_vue_type_template_id_4d469927_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pager.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Pager.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pager.vue?vue&type=template&id=0802cee8&scoped=true& */ "./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&");
/* harmony import */ var _Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pager.vue?vue&type=script&lang=js& */ "./resources/js/components/Pager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0802cee8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pager.vue?vue&type=template&id=0802cee8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tab.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Tab.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=8dbef60c& */ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=8dbef60c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tabs.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tabs.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/forms/ImportForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/forms/ImportForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true& */ "./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true&");
/* harmony import */ var _ImportForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/ImportForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "edbe3ff2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/ImportForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/ImportForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/forms/ImportForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/ImportForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/ImportForm.vue?vue&type=template&id=edbe3ff2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportForm_vue_vue_type_template_id_edbe3ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);