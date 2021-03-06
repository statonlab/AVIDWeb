(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/species"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modal/ModalCard */ "./resources/js/components/Modal/ModalCard.vue");
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal/Modal */ "./resources/js/components/Modal/Modal.vue");
/* harmony import */ var _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal/ModalHeader */ "./resources/js/components/Modal/ModalHeader.vue");
/* harmony import */ var _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal/ModalTitle */ "./resources/js/components/Modal/ModalTitle.vue");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal/ModalBody */ "./resources/js/components/Modal/ModalBody.vue");
/* harmony import */ var _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/ModalFooter */ "./resources/js/components/Modal/ModalFooter.vue");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");


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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpeciesForm',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_6__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    species: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      loading: false,
      types: null,
      loadingTypes: false,
      form: new _Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        name: '',
        plant_type_id: null
      })
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
              if (_this.species) {
                _this.form.setDefault(_this.species);
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
    save: function save() {
      if (this.species) {
        this.update();
      } else {
        this.create();
      }
    },
    loadTypes: function loadTypes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loadingTypes = true;
                _context2.prev = 1;
                _context2.next = 4;
                return axios.get('/web/plant-types');

              case 4:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                _this2.types = data; // this.form.plant_type_id = data[0].id

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                _this2.$alert('Unable to load form. Please try refreshing the page.');

              case 12:
                _this2.loadingTypes = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }))();
    },
    create: function create() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$_this3$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.loading = true;
                _context3.prev = 1;
                _context3.next = 4;
                return _this3.form.post("/web/species");

              case 4:
                _yield$_this3$form$po = _context3.sent;
                data = _yield$_this3$form$po.data;

                _this3.$emit('create', data);

                _this3.form.reset();

                _this3.$refs.name.focus();

                _this3.$notify({
                  text: 'Species created successfully',
                  type: 'success'
                });

                _context3.next = 16;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);

                _this3.$notify({
                  text: 'Unable to create species. Please try refreshing the page.',
                  type: 'error'
                });

                console.error(_context3.t0);

              case 16:
                _this3.loading = false;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 12]]);
      }))();
    },
    update: function update() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$_this4$form$pu, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading = true;
                _context4.prev = 1;
                _context4.next = 4;
                return _this4.form.put("/web/species/".concat(_this4.species.id));

              case 4:
                _yield$_this4$form$pu = _context4.sent;
                data = _yield$_this4$form$pu.data;

                _this4.$emit('update', data);

                _this4.$notify({
                  text: 'Species updated successfully',
                  type: 'success'
                });

                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);

                _this4.$notify({
                  text: 'Unable to update species. Please try refreshing the page.',
                  type: 'error'
                });

                console.error(_context4.t0);

              case 14:
                _this4.loading = false;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _components_Required__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Required */ "./resources/js/components/Required.vue");


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











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpeciesMergeForm',
  props: {
    selected: {
      type: Array
    }
  },
  components: {
    Required: _components_Required__WEBPACK_IMPORTED_MODULE_11__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      species: [],
      plantTypes: [],
      saving: false,
      form: new _Form__WEBPACK_IMPORTED_MODULE_9__["default"]({
        type: '',
        species: []
      })
    };
  },
  mounted: function mounted() {
    this.loadOptions();
  },
  watch: {
    selected: {
      immediate: true,
      handler: function handler() {
        this.form.species = this.selected;
      },
      deep: true
    }
  },
  methods: {
    loadOptions: function loadOptions() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/web/species/merge-options", {
                  params: {
                    species: _this.selected
                  }
                });

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.plantTypes = data.types;
                _this.species = data.species;
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                if (_context.t0.response && _context.t0.response.status === 422) {
                  errors = new _Errors__WEBPACK_IMPORTED_MODULE_10__["default"](_context.t0.response.data);

                  _this.$alert(errors.toArray().join(' '));
                } else if (_context.t0.response && _context.t0.response.status === 403) {
                  _this.$alert('You are not authorized to complete this action.');
                } else {
                  _this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.');
                }

                _this.$emit('close');

                console.error(_context.t0);

              case 14:
                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    merge: function merge() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var errors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.saving) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.saving = true;
                _context2.prev = 3;
                _context2.next = 6;
                return _this2.form.post("/web/species/merge-species");

              case 6:
                _this2.$notify({
                  type: 'success',
                  text: 'Species merged successfully.'
                });

                _this2.$emit('merged');

                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);

                if (_context2.t0.response && _context2.t0.response.status === 422) {
                  errors = new _Errors__WEBPACK_IMPORTED_MODULE_10__["default"](_context2.t0.response.data);

                  _this2.$alert(errors.toArray().join(' '));
                } else if (_context2.t0.response && _context2.t0.response.status === 403) {
                  _this2.$alert('You are not authorized to complete this action.');
                } else {
                  _this2.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.');
                }

                console.error(_context2.t0);

              case 14:
                _this2.saving = false;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Species.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _forms_SpeciesForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/SpeciesForm */ "./resources/js/forms/SpeciesForm.vue");
/* harmony import */ var _components_Pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pager */ "./resources/js/components/Pager.vue");
/* harmony import */ var _forms_Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _forms_SpeciesMergeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms/SpeciesMergeForm */ "./resources/js/forms/SpeciesMergeForm.vue");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Species',
  components: {
    SpeciesMergeForm: _forms_SpeciesMergeForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    Pager: _components_Pager__WEBPACK_IMPORTED_MODULE_4__["default"],
    SpeciesForm: _forms_SpeciesForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      search: '',
      species: [],
      page: 1,
      lastPage: 1,
      total: 0,
      editing: null,
      showForm: false,
      request: null,
      limit: '20',
      destroying: [],
      selected: [],
      showMergeForm: false
    };
  },
  mounted: function mounted() {
    this.loadSpecies();
  },
  watch: {
    search: function search() {
      this.loadSpecies();
    },
    limit: function limit() {
      this.page = 1;
      this.loadSpecies();
    }
  },
  methods: {
    loadSpecies: function loadSpecies() {
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
                return axios.get("/web/species", {
                  params: {
                    page: _this.page,
                    search: _this.search,
                    limit: _this.limit
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this.request = c;
                  })
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.species = data.data;
                _this.page = data.current_page;
                _this.lastPage = data.last_page;
                _this.total = data.total;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);

                if (!axios.isCancel(_context.t0)) {
                  console.error(_context.t0);

                  _this.$notify({
                    type: 'error',
                    text: 'Unable to load species. Please try refreshing the page.'
                  });
                }

              case 15:
                _this.loading = false;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }))();
    },
    created: function created(species) {
      this.loadSpecies();
      this.editing = null;
    },
    updated: function updated(species) {
      this.editing = null;
      this.species = this.species.map(function (s) {
        return s.id === species.id ? species : s;
      });
      this.showForm = false;
    },
    destroy: function destroy(species) {
      var _this2 = this;

      this.$confirm({
        title: "Delete ".concat(species.name, "?"),
        text: 'This action is permanent',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            var errors;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.destroying.push(species.id);

                    _context2.prev = 1;
                    _context2.next = 4;
                    return axios["delete"]("/web/species/".concat(species.id));

                  case 4:
                    _this2.species = _this2.species.filter(function (s) {
                      return s.id !== species.id;
                    });

                    _this2.$notify({
                      type: 'success',
                      text: 'Species deleted successfully'
                    });

                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](1);

                    if (_context2.t0.response && _context2.t0.response.status === 422) {
                      errors = new _forms_Errors__WEBPACK_IMPORTED_MODULE_5__["default"](_context2.t0.response.data);

                      if (errors.has('species')) {
                        _this2.$alert(errors.first('species'));
                      }
                    } else {
                      _this2.$alert({
                        title: 'Error',
                        text: 'Unable to delete species. Please try refreshing the page.'
                      });
                    }

                  case 11:
                    _this2.destroying = _this2.destroying.filter(function (id) {
                      return id !== species.id;
                    });

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 8]]);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    edit: function edit(species) {
      this.editing = species;
      this.showForm = true;
    },
    closeForm: function closeForm() {
      this.editing = null;
      this.showForm = false;
    },
    goTo: function goTo(page) {
      this.loading = true;
      this.page = page;
      this.loadSpecies();
    },
    merge: function merge() {
      this.showMergeForm = true;
    },
    select: function select(species, event) {
      if (this.selected.indexOf(species.id) > -1) {
        event.target.checked = false;
        this.selected = this.selected.filter(function (id) {
          return id !== species.id;
        });
      } else {
        event.target.checked = true;
        this.selected.push(species.id);
      }
    },
    merged: function merged() {
      this.showMergeForm = false;
      this.loading = true;
      this.page = 1;
      this.selected = [];
      this.loadSpecies();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.floating-button[data-v-da1ac2f4] {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true& ***!
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
            keydown: function($event) {
              return _vm.form.errors.clear($event.target.name)
            },
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
                  _vm.species
                    ? _c("modal-title", [
                        _vm._v(
                          "\n                    Update " +
                            _vm._s(_vm.species.name) +
                            "\n                "
                        )
                      ])
                    : _c("modal-title", [_vm._v("Create Species")]),
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
              _c("modal-body", [
                _vm.species
                  ? _c("div", { staticClass: "alert alert-warning" }, [
                      _c("p", { staticClass: "mb-0" }, [
                        _c("strong", [_vm._v("Warning")])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          "Changing the name of this species will affect any resources that are attached to it such as plants and sites."
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    ref: "name",
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("name") },
                    attrs: {
                      type: "text",
                      autofocus: "",
                      placeholder: "Species Name",
                      name: "name",
                      id: "name"
                    },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("name")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("name")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "plant" } }, [
                    _vm._v(
                      "\n                        Plant Type\n                    "
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
                        disabled: _vm.loadingTypes
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
                    [
                      _c("option", { domProps: { value: null } }, [
                        _vm._v("None")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.types, function(type) {
                        return _c("option", { domProps: { value: type.id } }, [
                          _vm._v(_vm._s(type.name))
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.form.errors.has("plant_type_id")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("plant_type_id")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("modal-footer", { staticClass: "d-flex" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit", disabled: _vm.loading }
                  },
                  [
                    _vm.loading ? _c("inline-spinner") : _vm._e(),
                    _vm._v(" "),
                    _c("span", [_vm._v("Save")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light ml-auto",
                    attrs: { type: "button", disabled: _vm.loading },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v("\n                    Cancel\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true& ***!
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
              return _vm.merge($event)
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
                  _c("modal-title", [_vm._v("Merge Species")]),
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
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-center"
                      },
                      [_c("inline-spinner", { staticClass: "text-primary" })],
                      1
                    )
                  : _c("div", [
                      _c("p", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          "\n            Merging the following species\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.species, function(item) {
                          return _c("li", [
                            _c("strong", [_vm._v(_vm._s(item.name))]),
                            _vm._v(" "),
                            item.type
                              ? _c("div", [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v(_vm._s(item.type.name))
                                  ])
                                ])
                              : _vm._e()
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "type" } },
                          [
                            _vm._v("Select Plant Type\n              "),
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
                                value: _vm.form.type,
                                expression: "form.type"
                              }
                            ],
                            staticClass: "custom-select",
                            attrs: { name: "type", id: "type" },
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
                                  "type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Plant Type")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.plantTypes, function(type) {
                              return _c(
                                "option",
                                { domProps: { value: type.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(type.name) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ])
              ]),
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
                      _vm._v(" "),
                      _c("span", [_vm._v("Merge Species")])
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
                    [_vm._v("\n          Cancel\n        ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true& ***!
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
    "div",
    [
      _c("div", { staticClass: "d-flex mb-3 align-items-center" }, [
        _c("h1", { staticClass: "page-title" }, [_vm._v("Species")]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-auto text-muted" }, [
          _vm._v(
            "\n      Page " +
              _vm._s(_vm.page) +
              " of " +
              _vm._s(_vm.lastPage) +
              ".\n      Show "
          ),
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
              staticClass: "custom-select d-inline-block w-auto",
              attrs: { name: "limit", id: "limit", title: "per page" },
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
              _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "40" } }, [_vm._v("40")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "60" } }, [_vm._v("60")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "80" } }, [_vm._v("80")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
            ]
          ),
          _vm._v(" per page.\n    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c(
          "div",
          { staticClass: "card-header d-flex p-2 align-items-center" },
          [
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
                  placeholder: "Search...",
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
            _c("div", { staticClass: "ml-auto" }, [
              _vm.selected.length > 1
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-info",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.merge()
                        }
                      }
                    },
                    [
                      _c("icon", { attrs: { name: "git-merge" } }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "Merge " + _vm._s(_vm.selected.length) + " Species"
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
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
                  _c("span", [_vm._v("Species")])
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-0" }, [
          _vm.loading
            ? _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-center p-3"
                },
                [_c("inline-spinner", { staticClass: "text-primary" })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.species.length === 0 && !_vm.loading
            ? _c("p", { staticClass: "text-muted mb-0 p-3" }, [
                _vm._v(
                  '\n        There are no species found. Please user the "+ species" button above to add one.\n      '
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.species.length > 0
            ? _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-middle mb-0" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.species, function(item) {
                        return _c(
                          "tr",
                          { staticClass: "hover-visible-container" },
                          [
                            _c("td", { staticStyle: { width: "30px" } }, [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  title: "Select species"
                                },
                                domProps: {
                                  checked: _vm.selected.indexOf(item.id) > -1
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.select(item, $event)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _vm.destroying.indexOf(item.id) > -1
                                  ? _c("inline-spinner", {
                                      staticClass: "text-primary"
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("strong", [_vm._v(_vm._s(item.name))])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.type ? item.type.name : null) +
                                  "\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.plants_count))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.sites_count))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.shrubs_count))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-content-end hover-visible"
                                },
                                [
                                  _c(
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
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.edit(item)
                                        }
                                      }
                                    },
                                    [_c("icon", { attrs: { name: "create" } })],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
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
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.destroy(item)
                                        }
                                      }
                                    },
                                    [_c("icon", { attrs: { name: "trash" } })],
                                    1
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("pager", {
        attrs: { "last-page": _vm.lastPage, page: _vm.page },
        on: {
          change: function($event) {
            return _vm.goTo($event)
          }
        }
      }),
      _vm._v(" "),
      _vm.showForm
        ? _c("species-form", {
            attrs: { species: _vm.editing },
            on: {
              close: _vm.closeForm,
              create: function($event) {
                return _vm.created($event)
              },
              update: function($event) {
                return _vm.updated($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showMergeForm
        ? _c("species-merge-form", {
            attrs: { selected: _vm.selected },
            on: {
              close: function($event) {
                _vm.showMergeForm = false
              },
              merged: _vm.merged
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.selected.length > 1
        ? _c("div", { staticClass: "floating-button rounded shadow" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.merge()
                  }
                }
              },
              [
                _c("icon", { attrs: { name: "git-merge" } }),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Merge " + _vm._s(_vm.selected.length) + " Species")
                ])
              ],
              1
            )
          ])
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
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Plants")]),
        _vm._v(" "),
        _c("th", [_vm._v("Overstory")]),
        _vm._v(" "),
        _c("th", [_vm._v("Seedling/Shrubs")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/forms/SpeciesForm.vue":
/*!********************************************!*\
  !*** ./resources/js/forms/SpeciesForm.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true& */ "./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true&");
/* harmony import */ var _SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74fda392",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/SpeciesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesForm.vue?vue&type=template&id=74fda392&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_74fda392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/forms/SpeciesMergeForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/forms/SpeciesMergeForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true& */ "./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true&");
/* harmony import */ var _SpeciesMergeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesMergeForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesMergeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0308cd84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/SpeciesMergeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesMergeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesMergeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesMergeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesMergeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SpeciesMergeForm.vue?vue&type=template&id=0308cd84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesMergeForm_vue_vue_type_template_id_0308cd84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/screens/Species.vue":
/*!******************************************!*\
  !*** ./resources/js/screens/Species.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Species.vue?vue&type=template&id=da1ac2f4&scoped=true& */ "./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true&");
/* harmony import */ var _Species_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Species.vue?vue&type=script&lang=js& */ "./resources/js/screens/Species.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& */ "./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Species_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "da1ac2f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Species.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Species.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/screens/Species.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Species.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=style&index=0&id=da1ac2f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_style_index_0_id_da1ac2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Species.vue?vue&type=template&id=da1ac2f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Species.vue?vue&type=template&id=da1ac2f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Species_vue_vue_type_template_id_da1ac2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);