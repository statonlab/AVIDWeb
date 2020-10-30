(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_measurements~js/admin_plots~js/data_entry~js/group_measurements~js/group_plots~js/measureme~6834f868"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Required.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Required.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Required'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlantForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/PlantForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_Required__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Required */ "./resources/js/components/Required.vue");
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal/Modal */ "./resources/js/components/Modal/Modal.vue");
/* harmony import */ var _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal/ModalCard */ "./resources/js/components/Modal/ModalCard.vue");
/* harmony import */ var _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal/ModalHeader */ "./resources/js/components/Modal/ModalHeader.vue");
/* harmony import */ var _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal/ModalBody */ "./resources/js/components/Modal/ModalBody.vue");
/* harmony import */ var _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/ModalFooter */ "./resources/js/components/Modal/ModalFooter.vue");
/* harmony import */ var _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal/ModalTitle */ "./resources/js/components/Modal/ModalTitle.vue");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! v-calendar/lib/components/date-picker.umd */ "./node_modules/v-calendar/lib/components/date-picker.umd.js");
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);


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














/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PlantForm',
  components: {
    DatePicker: v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_13___default.a,
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_11__["default"],
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_9__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_8__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    Required: _components_Required__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    plot: {
      required: false,
      type: Object
    },
    plant: {
      required: false,
      type: Object
    }
  },
  watch: {
    speciesSearch: function speciesSearch() {
      this.loadSpecies();
    },
    date: function date(_date) {
      this.form.date = _date ? moment__WEBPACK_IMPORTED_MODULE_14___default()(_date).format('YYYY-MM-DD') : null;
    },
    'form.species_id': {
      handler: function handler() {
        this.form.errors.clear('species_id');
      }
    },
    'form.plant_type_id': {
      handler: function handler() {
        this.loadSpecies();
      }
    }
  },
  data: function data() {
    var date = window.avid.last_entry;
    return {
      plants: [],
      saving: false,
      date: date ? moment__WEBPACK_IMPORTED_MODULE_14___default()(date).toDate() : null,
      form: new _Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        new_measurement: false,
        date: window.avid.last_entry,
        height: '',
        new_species: false,
        new_species_name: '',
        plant_type_id: '',
        tag: '',
        species_id: '',
        quadrant: '',
        total: ''
      }),
      loadingPlants: false,
      loadingSpecies: false,
      species: [],
      speciesSearch: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadTypes();

            case 2:
              if (_this.plant) {
                _this.form.setDefault(_this.plant);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadTypes: function loadTypes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loadingPlants = true;
                _context2.prev = 1;
                _context2.next = 4;
                return axios.get('/web/plant-types');

              case 4:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                _this2.plants = data;
                _this2.form.plant_type_id = data[0].id;
                _context2.next = 10;
                return _this2.loadSpecies();

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);

                _this2.$alert('Unable to load form. Please try refreshing the page.');

              case 15:
                _this2.loadingPlants = false;

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 12]]);
      }))();
    },
    loadSpecies: function loadSpecies() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get("/web/species", {
                  params: {
                    search: _this3.speciesSearch,
                    plant_type_id: _this3.form.plant_type_id
                  }
                });

              case 3:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;
                _this3.total = data.total;
                _this3.species = data.data.map(function (species) {
                  return {
                    label: species.name,
                    value: species.id
                  };
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    save: function save() {
      if (this.plant) {
        this.update();
      } else {
        this.create();
      }
    },
    create: function create() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$_this4$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.saving = true;
                _context4.prev = 1;
                _context4.next = 4;
                return _this4.form.post("/web/plots/".concat(_this4.plot.id, "/plants"));

              case 4:
                _yield$_this4$form$po = _context4.sent;
                data = _yield$_this4$form$po.data;

                _this4.$emit('create', data);

                _context4.next = 13;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);

                if (!_context4.t0.response || _context4.t0.response.status !== 422) {
                  _this4.$notify({
                    text: 'Unable to create plant. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context4.t0);

              case 13:
                _this4.saving = false;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9]]);
      }))();
    },
    update: function update() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$_this5$form$pu, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.saving = true;
                _context5.prev = 1;
                _context5.next = 4;
                return _this5.form.put("/web/plants/".concat(_this5.plant.id));

              case 4:
                _yield$_this5$form$pu = _context5.sent;
                data = _yield$_this5$form$pu.data;

                _this5.$emit('update', data);

                _context5.next = 13;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](1);

                if (!_context5.t0.response || _context5.t0.response.status !== 422) {
                  _this5.$notify({
                    text: 'Unable to create plant. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context5.t0);

              case 13:
                _this5.saving = false;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("sup", { staticClass: "text-danger" }, [_vm._v("*")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          attrs: { action: "#" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
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
                  !_vm.plant
                    ? _c("modal-title", [_vm._v("Add A Plant")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.plant
                    ? _c("modal-title", [
                        _vm._v("Update Plant #" + _vm._s(_vm.plant.tag))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("close", {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$emit("close")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.loadingPlants || _vm.loadingSpecies
                ? _c(
                    "modal-body",
                    {
                      staticClass:
                        "d-flex justify-content-center align-items-center"
                    },
                    [_c("inline-spinner", { staticClass: "text-primary" })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingSpecies && !_vm.loadingPlants
                ? _c("modal-body", { staticClass: "position-static" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "plant" } },
                        [
                          _vm._v(
                            "\n                        Plant Type\n                        "
                          ),
                          _c("required")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.plant_type_id,
                              expression: "form.plant_type_id"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("plant_type_id")
                          },
                          attrs: {
                            id: "plant",
                            name: "plant_type_id",
                            disabled: _vm.loadingPlants
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
                              _vm.$set(
                                _vm.form,
                                "plant_type_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.plants, function(plant) {
                          return _c(
                            "option",
                            { domProps: { value: plant.id } },
                            [_vm._v(_vm._s(plant.name))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _vm.form.errors.has("plant_type_id")
                        ? _c(
                            "small",
                            { staticClass: "form-text text-danger" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.form.errors.first("plant_type_id")
                                  ) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row position-static" }, [
                      _c("div", { staticClass: "form-group col-6" }, [
                        _c(
                          "label",
                          { attrs: { for: "tag-num" } },
                          [
                            _vm._v(
                              "\n                            Tag Number\n                            "
                            ),
                            _c("required")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.tag,
                              expression: "form.tag"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("tag") },
                          attrs: {
                            type: "text",
                            id: "tag-num",
                            name: "plant_type_id",
                            placeholder: "Tag #"
                          },
                          domProps: { value: _vm.form.tag },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "tag", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("tag")
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("tag")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-6 position-static" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "quadrant" } },
                            [
                              _vm._v(
                                "\n                            Quadrant\n                            "
                              ),
                              _c("required")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.quadrant,
                                  expression: "form.quadrant"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("quadrant")
                              },
                              attrs: { name: "quadrant", id: "quadrant" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "quadrant",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select a Quadrant")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Northeast" } }, [
                                _vm._v("Northeast")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Northwest" } }, [
                                _vm._v("Northwest")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Southeast" } }, [
                                _vm._v("Southeast")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Southwest" } }, [
                                _vm._v("Southwest")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.errors.has("quadrant")
                            ? _c(
                                "small",
                                { staticClass: "form-text text-danger" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.form.errors.first("quadrant")
                                      ) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.form.new_species
                        ? _c(
                            "div",
                            { staticClass: "form-group col-6 position-static" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "species" } },
                                [
                                  _vm._v(
                                    "\n                            Species\n                            "
                                  ),
                                  _c("required")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("dropdown", {
                                staticClass: "mb-1",
                                attrs: {
                                  id: "species",
                                  autocomplete: true,
                                  lodaing: _vm.loadingSpecies,
                                  options: _vm.species,
                                  error: _vm.form.errors.has("species_id"),
                                  total: _vm.total
                                },
                                on: {
                                  search: function($event) {
                                    _vm.speciesSearch = $event
                                  }
                                },
                                model: {
                                  value: _vm.form.species_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "species_id", $$v)
                                  },
                                  expression: "form.species_id"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("species_id")
                                ? _c(
                                    "small",
                                    { staticClass: "form-text text-danger" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.form.errors.first("species_id")
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.new_species
                        ? _c(
                            "div",
                            { staticClass: "form-group col-6 flex-column" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "new-species" } },
                                [
                                  _vm._v(
                                    "\n                            Species\n                            "
                                  ),
                                  _c("required")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.new_species_name,
                                    expression: "form.new_species_name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "new_species_name"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  id: "new-species",
                                  name: "new-species",
                                  placeholder: "Species Name"
                                },
                                domProps: { value: _vm.form.new_species_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "new_species_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("new_species_name")
                                ? _c(
                                    "small",
                                    { staticClass: "form-text text-danger" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.form.errors.first(
                                              "new_species_name"
                                            )
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.new_species
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-link mt-auto mb-3 ml-3",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.form.new_species = false
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  "\n                                Cancel Species Creation\n                            "
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    !_vm.form.new_species
                      ? _c("p", { staticClass: "text-muted" }, [
                          _vm._v(
                            "\n                    If you cannot find the species from the dropdown,\n                    "
                          ),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.form.new_species = true
                                }
                              }
                            },
                            [_vm._v(" you can click here to create a new one.")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !this.plant && !_vm.form.new_measurement
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.form.new_measurement = true
                              }
                            }
                          },
                          [
                            _c("icon", { attrs: { name: "add" } }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Add a Measurement")])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !this.plant && _vm.form.new_measurement
                      ? _c("div", { staticClass: "row position-static" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group col-lg-6 position-static"
                            },
                            [
                              _c(
                                "label",
                                [
                                  _vm._v(
                                    "\n                            Date\n                            "
                                  ),
                                  _c("required")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("date-picker", {
                                attrs: {
                                  color: "green",
                                  "max-date": new Date(),
                                  "input-props": {
                                    class:
                                      "form-control" +
                                      (_vm.form.errors.has("date")
                                        ? " is-invalid"
                                        : ""),
                                    placeholder: "Collection Date"
                                  }
                                },
                                model: {
                                  value: _vm.date,
                                  callback: function($$v) {
                                    _vm.date = $$v
                                  },
                                  expression: "date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("date")
                                ? _c(
                                    "p",
                                    {
                                      staticClass: "mb-0 form-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.form.errors.first("date")
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-lg-6" }, [
                            _c(
                              "label",
                              { attrs: { for: "height" } },
                              [
                                _vm._v(
                                  "\n                            Height (inches)\n                            "
                                ),
                                _c("required")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group input-appended" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.height,
                                      expression: "form.height"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("height")
                                  },
                                  attrs: {
                                    id: "height",
                                    type: "text",
                                    placeholder: "Height"
                                  },
                                  domProps: { value: _vm.form.height },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "height",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "input-group-text" },
                                      [_vm._v("in.")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.form.errors.has("height")
                              ? _c(
                                  "p",
                                  { staticClass: "mb-0 form-text text-danger" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.form.errors.first("height")
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.new_measurement
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.form.new_measurement = false
                              }
                            }
                          },
                          [_c("span", [_vm._v("Cancel Measurement Creation")])]
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "modal-footer",
                { staticClass: "d-flex justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.saving }
                    },
                    [
                      _vm.saving ? _c("inline-spinner") : _vm._e(),
                      _vm._v("\n                    Save\n                ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  )
                ]
              )
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

/***/ "./resources/js/components/Required.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Required.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Required.vue?vue&type=template&id=8dc94cec&scoped=true& */ "./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true&");
/* harmony import */ var _Required_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Required.vue?vue&type=script&lang=js& */ "./resources/js/components/Required.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Required_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8dc94cec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Required.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Required.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Required.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Required_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Required.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Required.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Required_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Required.vue?vue&type=template&id=8dc94cec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Required.vue?vue&type=template&id=8dc94cec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Required_vue_vue_type_template_id_8dc94cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/forms/PlantForm.vue":
/*!******************************************!*\
  !*** ./resources/js/forms/PlantForm.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlantForm.vue?vue&type=template&id=6d360c41&scoped=true& */ "./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true&");
/* harmony import */ var _PlantForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlantForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/PlantForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlantForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d360c41",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/PlantForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/PlantForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/forms/PlantForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlantForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlantForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PlantForm.vue?vue&type=template&id=6d360c41&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlantForm.vue?vue&type=template&id=6d360c41&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlantForm_vue_vue_type_template_id_6d360c41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);