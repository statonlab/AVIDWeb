(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/data_entry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-calendar/lib/components/date-picker.umd */ "./node_modules/v-calendar/lib/components/date-picker.umd.js");
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InlineMeasurementForm',
  components: {
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_3__["default"],
    DatePicker: v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    plant: {
      required: true
    },
    defaultDate: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      date: null,
      focusedCell: null,
      loading: false,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        date: '',
        is_alive: '',
        is_located: '',
        height: ''
      }),
      ready: true,
      unsavedChanges: false
    };
  },
  watch: {
    date: function date(_date) {
      this.form.date = this.getDate(_date);

      if (this.ready) {
        this.$emit('date', _date);
      }
    },
    'form.is_alive': {
      handler: function handler() {
        this.emitChanges();
      }
    },
    'form.is_located': {
      handler: function handler() {
        this.emitChanges();
      }
    },
    'form.height': {
      handler: function handler() {
        this.emitChanges();
      }
    },
    defaultDate: {
      immediate: true,
      handler: function handler(date) {
        var _this = this;

        // Prevent infinite loop
        this.ready = false;
        this.date = date;
        this.$nextTick(function () {
          _this.ready = true;
        });
      }
    }
  },
  methods: {
    save: function save() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this2$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this2.form.post("/web/plants/".concat(_this2.plant.id, "/measurements"));

              case 4:
                _yield$_this2$form$po = _context.sent;
                data = _yield$_this2$form$po.data;

                _this2.$emit('create', data);

                _this2.$notify({
                  type: 'success',
                  text: 'Measurement created successfully'
                });

                _this2.form.reset();

                _this2.form.date = _this2.getDate(_this2.date);
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);

                if (_context.t0.response && _context.t0.response.status === 422) {
                  _this2.$alert({
                    title: 'Please Review The Following',
                    text: _this2.form.errors.toArray().join(' ')
                  });
                } else {
                  _this2.$alert('Unable to create measurement. Please try refreshing the page or report the error to us!');
                }

                console.error(_context.t0);

              case 16:
                _this2.loading = false;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }))();
    },
    getDate: function getDate(date) {
      return date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('YYYY-MM-DD') : '';
    },
    isFormEmpty: function isFormEmpty() {
      return this.form.is_alive === '' && this.form.is_located === '' && this.form.height === '';
    },
    emitChanges: function emitChanges() {
      var isEmpty = this.isFormEmpty();

      if (this.unsavedChanges && isEmpty) {
        this.$emit('unset');
      } else if (!this.unsavedChanges && !isEmpty) {
        this.$emit('set');
      }

      this.unsavedChanges = !isEmpty;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./resources/js/components/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MeasurementEntryButton',
  components: {
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    measurement: {
      required: true
    }
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icon */ "./resources/js/components/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PlantEntryButton',
  components: {
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    plant: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icon */ "./resources/js/components/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PlotEntryButton',
  components: {
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    plot: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/DataEntry.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/DataEntry.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Data_InlineMeasurementForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Data/InlineMeasurementForm */ "./resources/js/components/Data/InlineMeasurementForm.vue");
/* harmony import */ var _components_Data_PlotEntryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Data/PlotEntryButton */ "./resources/js/components/Data/PlotEntryButton.vue");
/* harmony import */ var _components_Data_PlantEntryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Data/PlantEntryButton */ "./resources/js/components/Data/PlantEntryButton.vue");
/* harmony import */ var _components_Data_MeasurementEntryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Data/MeasurementEntryButton */ "./resources/js/components/Data/MeasurementEntryButton.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _forms_PlantForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/PlantForm */ "./resources/js/forms/PlantForm.vue");
/* harmony import */ var _forms_SiteForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/SiteForm */ "./resources/js/forms/SiteForm.vue");
/* harmony import */ var _forms_PlotForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forms/PlotForm */ "./resources/js/forms/PlotForm.vue");
/* harmony import */ var _forms_MeasurementForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forms/MeasurementForm */ "./resources/js/forms/MeasurementForm.vue");


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












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DataEntry',
  components: {
    PlotForm: _forms_PlotForm__WEBPACK_IMPORTED_MODULE_11__["default"],
    SiteForm: _forms_SiteForm__WEBPACK_IMPORTED_MODULE_10__["default"],
    PlantForm: _forms_PlantForm__WEBPACK_IMPORTED_MODULE_9__["default"],
    MeasurementForm: _forms_MeasurementForm__WEBPACK_IMPORTED_MODULE_12__["default"],
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_7__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"],
    PlotEntryButton: _components_Data_PlotEntryButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    PlantEntryButton: _components_Data_PlantEntryButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    MeasurementEntryButton: _components_Data_MeasurementEntryButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    InlineMeasurementForm: _components_Data_InlineMeasurementForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a,
      sites: [],
      site: '',
      allPlots: [],
      plots: [],
      loadingSites: true,
      loadingPlots: true,
      limit: '',
      sortOrder: 'tag_asc',
      plotFilter: '',
      search: '',
      showMeasurementForm: false,
      showPlantForm: false,
      showSiteForm: false,
      showPlotForm: false,
      measurement: null,
      plot: null,
      plant: null,
      plantPlot: null,
      plotSite: null,
      _request: null,
      defaultDate: null,
      deleting: null,
      formsSet: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loadSites();

    window.onbeforeunload = function () {
      return _this.formsSet > 0 ? true : null;
    };
  },
  watch: {
    site: function site(_site) {
      this.plotFilter = '';
      this.search = '';
      var sites = this.sites.filter(function (s) {
        return s.id === _site;
      });

      if (sites.length > 0) {
        this.plotSite = sites[0];
        this.allPlots = sites[0].plots;
      }

      this.loadPlots();
    },
    limit: function limit() {
      this.loadPlots();
    },
    plotFilter: function plotFilter() {
      this.loadPlots();
    },
    search: function search() {
      this.loadPlots();
    },
    sortOrder: function sortOrder() {
      this.loadPlots();
    }
  },
  methods: {
    loadSites: function loadSites() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loadingSites = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get("/web/data-entry/sites");

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this2.sites = data;

                if (_this2.site === '' && data.length > 0) {
                  _this2.site = _this2.sites[0].id;
                }

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                _this2.$alert('Unable to load sites. Please try refreshing the page or contact us.');

                console.error(_context.t0);

              case 14:
                _this2.loadingSites = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    loadPlots: function loadPlots() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this3._request) {
                  _this3._request();
                }

                _context2.prev = 1;
                _context2.next = 4;
                return axios.get("/web/data-entry/sites/".concat(_this3.site, "/plots"), {
                  params: {
                    limit: _this3.limit,
                    plot: _this3.plotFilter,
                    search: _this3.search,
                    sort_order: _this3.sortOrder
                  },
                  cancelToken: new axios.CancelToken(function (fn) {
                    return _this3._request = fn;
                  })
                });

              case 4:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this3.plots = data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                if (!axios.isCancel(_context2.t0)) {
                  _this3.$alert('Unable to load plots. Please try refreshing the page or contact us.');

                  console.error(_context2.t0);
                }

              case 12:
                _this3.loadingPlots = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }))();
    },
    addPlant: function addPlant(plot) {
      this.plantPlot = plot;
      this.showPlantForm = true;
    },
    editPlant: function editPlant(plant) {
      this.plant = plant;
      this.showPlantForm = true;
    },
    editPlot: function editPlot(plot) {
      this.plot = plot;
      this.showPlotForm = true;
    },
    deletePlot: function deletePlot(plot) {
      var _this4 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: "Are you sure you want to delete Plot #".concat(plot.number, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _this4.deleting = plot.id;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return axios["delete"]("/web/plots/".concat(plot.id));

                  case 4:
                    _this4.loadPlots();

                    _context3.next = 10;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);

                    _this4.$notify({
                      text: 'Unable to delete plot. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 10:
                    _this4.deleting = null;

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[1, 7]]);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    deletePlant: function deletePlant(plant) {
      var _this5 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: "Are you sure you want to delete Plant #".concat(plant.tag, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _this5.deleting = plant.id;
                    _context4.prev = 1;
                    _context4.next = 4;
                    return axios["delete"]("/web/plants/".concat(plant.id));

                  case 4:
                    _this5.loadPlots();

                    _context4.next = 11;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](1);

                    _this5.$notify({
                      text: 'Unable to delete plant. Please try refreshing the page.',
                      type: 'error'
                    });

                    console.error(_context4.t0);

                  case 11:
                    _this5.deleting = null;

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[1, 7]]);
          }));

          function onConfirm() {
            return _onConfirm2.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    deleteMeasurement: function deleteMeasurement(measurement) {
      var _this6 = this;

      if (this.deleting !== null) {
        return;
      }

      this.$confirm({
        title: 'Are you sure you want to delete measurement collected on ' + moment__WEBPACK_IMPORTED_MODULE_1___default()(measurement.date).format('MMM Do, YYYY') + '?',
        text: 'This action is permanent.',
        onConfirm: function () {
          var _onConfirm3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _this6.deleting = measurement.id;
                    _context5.prev = 1;
                    _context5.next = 4;
                    return axios["delete"]("/web/measurements/".concat(measurement.id));

                  case 4:
                    _this6.loadPlots();

                    _context5.next = 11;
                    break;

                  case 7:
                    _context5.prev = 7;
                    _context5.t0 = _context5["catch"](1);
                    console.error(_context5.t0);

                    _this6.$notify({
                      text: 'Unable to delete measurement. Please try refreshing the page.'
                    });

                  case 11:
                    _this6.deleting = null;

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[1, 7]]);
          }));

          function onConfirm() {
            return _onConfirm3.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    editMeasurement: function editMeasurement(plant, measurement) {
      this.plant = plant;
      this.measurement = measurement;
      this.showMeasurementForm = true;
    },
    plotUpdated: function plotUpdated(plot) {
      this.showPlotForm = false;
      this.plots = this.plots.map(function (p) {
        return p.id === plot.id ? plot : p;
      });
    },
    measurementUpdated: function measurementUpdated(measurement) {
      this.showMeasurementForm = false;
      var plot = this.plots.find(function (p) {
        return p.id === measurement.plot_id;
      });
      var plant = plot.plants.find(function (p) {
        return p.id === measurement.plant_id;
      });
      plant.measurements = plant.measurements.map(function (m) {
        return m.id === measurement.id ? measurement : m;
      });
      plot.plants = plot.plants.map(function (p) {
        return p.id === plant.id ? plant : p;
      });
      this.plots = this.plots.map(function (p) {
        return p.id === plot.id ? plot : p;
      });
    },
    plantUpdated: function plantUpdated(plant) {
      this.hidePlantForm();
      var plot = this.plots.find(function (p) {
        return p.id === plant.plot_id;
      });
      plot.plants = plot.plants.map(function (p) {
        return p.id === plant.id ? plant : p;
      });
      this.plots = this.plots.map(function (p) {
        return p.id === plot.id ? plot : p;
      });
      this.$notify({
        type: 'success',
        text: 'Plant updated successfully'
      });
    },
    hidePlantForm: function hidePlantForm() {
      this.showPlantForm = false;
      this.plantPlot = null;
      this.plant = null;
    },
    plantCreated: function plantCreated() {
      this.loadPlots();
      this.hidePlantForm();
      this.$notify({
        type: 'success',
        text: 'Plant created successfully'
      });
    },
    measurementCreated: function measurementCreated() {
      this.loadPlots();
    },
    siteCreated: function siteCreated(site) {
      site.plots = [];
      this.sites.push(site);
      this.site = site.id;
      this.showSiteForm = false;
    },
    plotCreated: function plotCreated() {
      this.loadPlots();
      this.showPlotForm = false;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.formsSet > 0) {
      this.$confirm({
        title: 'Unsaved Changes!',
        text: 'Do you really want to leave? You have unsaved changes!',
        onConfirm: next
      });
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "tr",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.save($event)
        }
      }
    },
    [
      _c("div", { staticClass: "td p-0 border-top-0" }),
      _vm._v(" "),
      _c("div", { staticClass: "td p-0 border-top-0" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "td p-0",
          class: { "outline-primary": _vm.focusedCell === "date" }
        },
        [
          _c("date-picker", {
            attrs: {
              color: "green",
              "max-date": new Date(),
              "input-props": {
                class: "form-control px-3 border-0 w-100 cell-h",
                placeholder: "mm/dd/yyyy"
              },
              popover: { visibility: "click" }
            },
            on: {
              popoverWillShow: function($event) {
                _vm.focusedCell = "date"
              },
              popoverWillHide: function($event) {
                _vm.focusedCell = null
              }
            },
            model: {
              value: _vm.date,
              callback: function($$v) {
                _vm.date = $$v
              },
              expression: "date"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "td p-0",
          class: { "outline-primary": _vm.focusedCell === "located" }
        },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.is_located,
                  expression: "form.is_located"
                }
              ],
              staticClass: "form-control border-0 py-0 cell-h",
              attrs: { title: "Has the plant been located?" },
              on: {
                focusin: function($event) {
                  _vm.focusedCell = "located"
                },
                focusout: function($event) {
                  _vm.focusedCell = null
                },
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.form,
                    "is_located",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Located?")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Yes")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "0" } }, [_vm._v("No")])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "td p-0",
          class: { "outline-primary": _vm.focusedCell === "alive" }
        },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.is_alive,
                  expression: "form.is_alive"
                }
              ],
              staticClass: "form-control border-0 py-0 cell-h focus-outlined",
              attrs: { title: "Is the plant alive?" },
              on: {
                focusin: function($event) {
                  _vm.focusedCell = "alive"
                },
                focusout: function($event) {
                  _vm.focusedCell = null
                },
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.form,
                    "is_alive",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Alive?")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Yes")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "0" } }, [_vm._v("No")])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "td p-0",
          class: { "outline-primary": _vm.focusedCell === "height" }
        },
        [
          _c("div", { staticClass: "d-flex" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.height,
                  expression: "form.height"
                }
              ],
              staticClass:
                "form-control px-3 border-0 w-100 cell-h focus-outlined flex-grow-1",
              attrs: {
                type: "number",
                step: "any",
                min: "0",
                title: "Height",
                placeholder: "Height"
              },
              domProps: { value: _vm.form.height },
              on: {
                focusin: function($event) {
                  _vm.focusedCell = "height"
                },
                focusout: function($event) {
                  _vm.focusedCell = null
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "height", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "cell-h btn btn-primary rounded-0",
                class: { "text-transparent": _vm.loading },
                attrs: { type: "submit", disabled: _vm.loading }
              },
              [
                _vm.loading
                  ? _c("inline-spinner", {
                      staticClass: "position-absolute text-white ml-2"
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", [_vm._v("Save")])
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "dropdown" }, [
      _c(
        "a",
        {
          staticClass:
            "d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap",
          attrs: { href: "#", tabindex: "-1", "data-toggle": "dropdown" }
        },
        [
          _c("span", [
            _vm._v(
              _vm._s(_vm.moment(_vm.measurement.date).format("MMM Do, YYYY"))
            )
          ]),
          _vm._v(" "),
          _c("icon", { attrs: { name: "caret-down" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-menu" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-item pl-2 d-flex align-items-center",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.$emit("editMeasurement")
              }
            }
          },
          [
            _c("icon", { attrs: { name: "create" } }),
            _vm._v(" "),
            _c("span", [_vm._v("Edit Measurement")])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "dropdown-item pl-2 d-flex align-items-center",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.$emit("deleteMeasurement")
              }
            }
          },
          [
            _c("icon", { attrs: { name: "trash" } }),
            _vm._v(" "),
            _c("span", [_vm._v("Delete Measurement")])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "dropdown" }, [
      _c(
        "a",
        {
          staticClass:
            "d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap",
          attrs: { href: "#", tabindex: "-1", "data-toggle": "dropdown" }
        },
        [
          _c("span", [_vm._v("Plant #" + _vm._s(_vm.plant.tag))]),
          _vm._v(" "),
          _c("icon", { attrs: { name: "caret-down" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu" },
        [
          _c(
            "router-link",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { to: "/app/plants/" + _vm.plant.id }
            },
            [
              _c("icon", { attrs: { name: "eye" } }),
              _vm._v(" "),
              _c("span", [_vm._v("View Plant")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("editPlant")
                }
              }
            },
            [
              _c("icon", { attrs: { name: "create" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Edit Plant")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("deletePlant")
                }
              }
            },
            [
              _c("icon", { attrs: { name: "trash" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete Plant")])
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "dropdown" }, [
      _c(
        "a",
        {
          staticClass:
            "d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap",
          attrs: { href: "#", tabindex: "-1", "data-toggle": "dropdown" }
        },
        [
          _c("span", [_vm._v("Plot #" + _vm._s(_vm.plot.number))]),
          _vm._v(" "),
          _c("icon", { attrs: { name: "caret-down" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu" },
        [
          _c(
            "a",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("addPlant")
                }
              }
            },
            [
              _c("icon", { attrs: { name: "add" } }),
              _vm._v(" "),
              _c("span", [_vm._v("New Plant")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { to: "/app/plots/" + _vm.plot.id }
            },
            [
              _c("icon", { attrs: { name: "eye" } }),
              _vm._v(" "),
              _c("span", [_vm._v("View Plot")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("editPlot")
                }
              }
            },
            [
              _c("icon", { attrs: { name: "create" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Edit Plot")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item pl-2 d-flex align-items-center",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("deletePlot")
                }
              }
            },
            [
              _c("icon", { attrs: { name: "trash" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete Plot")])
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true& ***!
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
  return _c(
    "div",
    [
      !_vm.loadingSites
        ? _c("div", { staticClass: "mb-3 d-flex" }, [
            _c(
              "div",
              { staticClass: "flex-grow-1 d-flex" },
              [
                _c(
                  "dropdown",
                  {
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
                  },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "dropdown-item d-flex align-items-center pl-2",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.showSiteForm = true
                            }
                          }
                        },
                        [
                          _c("icon", { attrs: { name: "add" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("New Site")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-shrink-0" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingSites
        ? _c(
            "div",
            { staticClass: "d-flex justify-content-center align-items-center" },
            [_c("inline-spinner", { staticClass: "text-primary" })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingSites
        ? _c("div", { staticClass: "card mb-3 position-static" }, [
            _c("div", { staticClass: "card-header d-flex px-2" }, [
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
                  attrs: {
                    type: "search",
                    placeholder: "Search by plant tag",
                    title: "Search"
                  },
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
              _c(
                "div",
                { staticClass: "flex-shrink-0 d-flex align-items-center" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sortOrder,
                          expression: "sortOrder"
                        }
                      ],
                      staticClass: "ml-1 custom-select",
                      attrs: {
                        title: "Sort Quadrant",
                        name: "quadrant_filter",
                        id: "quadrant-filter"
                      },
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
                          _vm.sortOrder = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "tag_asc" } }, [
                        _vm._v("Sort by plant tag, ascending")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "tag_desc" } }, [
                        _vm._v("Sort by plant tag, descending")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "quadrant_asc" } }, [
                        _vm._v("Sort by quadrant, ascending")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "quadrant_desc" } }, [
                        _vm._v("Sort by quadrant, descending")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.limit,
                          expression: "limit"
                        }
                      ],
                      staticClass: "ml-1 custom-select",
                      attrs: {
                        title: "Limit Measurements",
                        name: "measurement_filter",
                        id: "measurement-filter"
                      },
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
                          _vm.limit = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Show all measurements")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Show last measurement")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Show last 2 measurements")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("Show last 3 measurements")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "4" } }, [
                        _vm._v("Show last 4 measurements")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.plotFilter,
                          expression: "plotFilter"
                        }
                      ],
                      staticClass: "custom-select ml-1",
                      attrs: {
                        name: "plot_filter",
                        id: "plot-filter",
                        title: "Filter by plot"
                      },
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
                          _vm.plotFilter = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("All Plots")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.allPlots, function(plot) {
                        return _c("option", { domProps: { value: plot.id } }, [
                          _vm._v(
                            "\n            Plot #" +
                              _vm._s(plot.number) +
                              "\n          "
                          )
                        ])
                      })
                    ],
                    2
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.loadingPlots
              ? _c(
                  "div",
                  {
                    staticClass:
                      "p-3 d-flex align-items-center justify-content-center"
                  },
                  [_c("inline-spinner", { staticClass: "text-primary" })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loadingPlots && _vm.plots.length === 0
              ? _c("div", { staticClass: "p-3 text-muted" }, [
                  _vm._v(
                    '\n      No plots found. Please use the "+ PLOT" button above to create a new one.\n    '
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.loadingPlots && _vm.plots.length > 0
              ? _c(
                  "div",
                  { staticClass: "table table-bordered mb-0" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.plots, function(plot) {
                      return [
                        plot.plants.length > 0
                          ? [
                              _vm._l(plot.plants, function(plant, plant_index) {
                                return [
                                  plant.measurements.length > 0
                                    ? [
                                        _vm._l(plant.measurements, function(
                                          measurement,
                                          measurement_index
                                        ) {
                                          return _c(
                                            "div",
                                            { staticClass: "tr" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "th",
                                                  class: {
                                                    "border-top-0":
                                                      plant_index > 0 ||
                                                      measurement_index > 0
                                                  }
                                                },
                                                [
                                                  plant_index === 0 &&
                                                  measurement_index === 0
                                                    ? _c("plot-entry-button", {
                                                        attrs: { plot: plot },
                                                        on: {
                                                          addPlant: function(
                                                            $event
                                                          ) {
                                                            return _vm.addPlant(
                                                              plot
                                                            )
                                                          },
                                                          editPlot: function(
                                                            $event
                                                          ) {
                                                            return _vm.editPlot(
                                                              plot
                                                            )
                                                          },
                                                          deletePlot: function(
                                                            $event
                                                          ) {
                                                            return _vm.deletePlot(
                                                              plot
                                                            )
                                                          }
                                                        }
                                                      })
                                                    : _vm._e()
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "th",
                                                  class: {
                                                    "border-top-0":
                                                      measurement_index > 0
                                                  }
                                                },
                                                [
                                                  measurement_index === 0
                                                    ? _c(
                                                        "div",
                                                        [
                                                          _c(
                                                            "plant-entry-button",
                                                            {
                                                              attrs: {
                                                                plant: plant
                                                              },
                                                              on: {
                                                                editPlant: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.editPlant(
                                                                    plant
                                                                  )
                                                                },
                                                                deletePlant: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.deletePlant(
                                                                    plant
                                                                  )
                                                                }
                                                              }
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0 text-muted"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  plant.species
                                                                    .name
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0 text-muted"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  plant.quadrant
                                                                ) + " Quadrant"
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "td" },
                                                [
                                                  _c(
                                                    "measurement-entry-button",
                                                    {
                                                      attrs: {
                                                        measurement: measurement
                                                      },
                                                      on: {
                                                        editMeasurement: function(
                                                          $event
                                                        ) {
                                                          return _vm.editMeasurement(
                                                            plant,
                                                            measurement
                                                          )
                                                        },
                                                        deleteMeasurement: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteMeasurement(
                                                            measurement
                                                          )
                                                        }
                                                      }
                                                    }
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("div", { staticClass: "td" }, [
                                                _vm._v(
                                                  _vm._s(
                                                    measurement.is_located
                                                      ? "Yes"
                                                      : "No"
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("div", { staticClass: "td" }, [
                                                _vm._v(
                                                  _vm._s(
                                                    measurement.is_alive
                                                      ? "Yes"
                                                      : "No"
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("div", { staticClass: "td" }, [
                                                measurement.height !== null
                                                  ? _c("span", [
                                                      _vm._v(
                                                        "\n                    " +
                                                          _vm._s(
                                                            Number(
                                                              measurement.height
                                                            ).toFixed(2)
                                                          ) +
                                                          " in.\n                  "
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _c("inline-measurement-form", {
                                          attrs: {
                                            plant: plant,
                                            "default-date": _vm.defaultDate
                                          },
                                          on: {
                                            create: _vm.measurementCreated,
                                            set: function($event) {
                                              _vm.formsSet++
                                            },
                                            unset: function($event) {
                                              _vm.formsSet--
                                            },
                                            date: function($event) {
                                              _vm.defaultDate = $event
                                            }
                                          }
                                        })
                                      ]
                                    : [
                                        _c("div", { staticClass: "tr" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "th",
                                              class: {
                                                "border-top-0": plant_index > 0
                                              }
                                            },
                                            [
                                              plant_index === 0
                                                ? _c("plot-entry-button", {
                                                    attrs: { plot: plot },
                                                    on: {
                                                      addPlant: function(
                                                        $event
                                                      ) {
                                                        return _vm.addPlant(
                                                          plot
                                                        )
                                                      },
                                                      editPlot: function(
                                                        $event
                                                      ) {
                                                        return _vm.editPlot(
                                                          plot
                                                        )
                                                      },
                                                      deletePlot: function(
                                                        $event
                                                      ) {
                                                        return _vm.deletePlot(
                                                          plot
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "th" },
                                            [
                                              _c("plant-entry-button", {
                                                attrs: { plant: plant },
                                                on: {
                                                  editPlant: function($event) {
                                                    return _vm.editPlant(plant)
                                                  },
                                                  deletePlant: function(
                                                    $event
                                                  ) {
                                                    return _vm.deletePlant(
                                                      plant
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "mb-0 text-muted"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(plant.species.name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "mb-0 text-muted"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(plant.quadrant) +
                                                      " Quadrant"
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._m(1, true),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "td border-right-0"
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "td border-right-0"
                                          }),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "td" })
                                        ]),
                                        _vm._v(" "),
                                        _c("inline-measurement-form", {
                                          attrs: {
                                            plant: plant,
                                            "default-date": _vm.defaultDate
                                          },
                                          on: {
                                            create: _vm.measurementCreated,
                                            set: function($event) {
                                              _vm.formsSet++
                                            },
                                            unset: function($event) {
                                              _vm.formsSet--
                                            },
                                            date: function($event) {
                                              _vm.defaultDate = $event
                                            }
                                          }
                                        })
                                      ]
                                ]
                              })
                            ]
                          : _c(
                              "div",
                              { staticClass: "tr" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "th" },
                                  [
                                    _c("plot-entry-button", {
                                      attrs: { plot: plot },
                                      on: {
                                        addPlant: function($event) {
                                          return _vm.addPlant(plot)
                                        },
                                        editPlot: function($event) {
                                          return _vm.editPlot(plot)
                                        },
                                        deletePlot: function($event) {
                                          return _vm.deletePlot(plot)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "td text-muted border-right-0"
                                  },
                                  [_vm._v("No Plants Found")]
                                ),
                                _vm._v(" "),
                                _vm._l(3, function(i) {
                                  return _c("div", {
                                    staticClass: "td border-right-0"
                                  })
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "td" })
                              ],
                              2
                            )
                      ]
                    })
                  ],
                  2
                )
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showPlantForm
        ? _c("plant-form", {
            attrs: { plot: _vm.plantPlot, plant: _vm.plant },
            on: {
              close: _vm.hidePlantForm,
              create: _vm.plantCreated,
              update: function($event) {
                return _vm.plantUpdated($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showPlotForm
        ? _c("plot-form", {
            attrs: { site: _vm.plotSite, plot: _vm.plot },
            on: {
              close: function($event) {
                _vm.showPlotForm = false
              },
              create: _vm.plotCreated,
              update: function($event) {
                return _vm.plotUpdated($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showSiteForm
        ? _c("site-form", {
            on: {
              close: function($event) {
                _vm.showSiteForm = false
              },
              create: _vm.siteCreated
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showMeasurementForm
        ? _c("measurement-form", {
            attrs: { plant: _vm.plant, measurement: _vm.measurement },
            on: {
              close: function($event) {
                _vm.showMeasurementForm = false
              },
              update: function($event) {
                return _vm.measurementUpdated($event)
              }
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
    return _c("div", { staticClass: "tr" }, [
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Plot")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Plant")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Measurement Date")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Located")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Alive")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th text-muted border-bottom" }, [
        _vm._v("Height")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "td border-right-0" }, [
      _c("span", { staticClass: "text-muted" }, [
        _vm._v("No Measurements Found")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Data/InlineMeasurementForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Data/InlineMeasurementForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true& */ "./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true&");
/* harmony import */ var _InlineMeasurementForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineMeasurementForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InlineMeasurementForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79d4ebad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/InlineMeasurementForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineMeasurementForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InlineMeasurementForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineMeasurementForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/InlineMeasurementForm.vue?vue&type=template&id=79d4ebad&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineMeasurementForm_vue_vue_type_template_id_79d4ebad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Data/MeasurementEntryButton.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Data/MeasurementEntryButton.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true& */ "./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true&");
/* harmony import */ var _MeasurementEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeasurementEntryButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MeasurementEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "92e7a11c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/MeasurementEntryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeasurementEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MeasurementEntryButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeasurementEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/MeasurementEntryButton.vue?vue&type=template&id=92e7a11c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeasurementEntryButton_vue_vue_type_template_id_92e7a11c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Data/PlantEntryButton.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Data/PlantEntryButton.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true& */ "./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true&");
/* harmony import */ var _PlantEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlantEntryButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlantEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f410b3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/PlantEntryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlantEntryButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlantEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlantEntryButton.vue?vue&type=template&id=4f410b3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantEntryButton_vue_vue_type_template_id_4f410b3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Data/PlotEntryButton.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Data/PlotEntryButton.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true& */ "./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true&");
/* harmony import */ var _PlotEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlotEntryButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlotEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c137409",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/PlotEntryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlotEntryButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotEntryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotEntryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/PlotEntryButton.vue?vue&type=template&id=5c137409&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotEntryButton_vue_vue_type_template_id_5c137409_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/screens/DataEntry.vue":
/*!********************************************!*\
  !*** ./resources/js/screens/DataEntry.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true& */ "./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true&");
/* harmony import */ var _DataEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataEntry.vue?vue&type=script&lang=js& */ "./resources/js/screens/DataEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ac7a5b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/DataEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/DataEntry.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/screens/DataEntry.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/DataEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/DataEntry.vue?vue&type=template&id=7ac7a5b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataEntry_vue_vue_type_template_id_7ac7a5b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);