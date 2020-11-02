(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_plots~js/data_entry~js/group_plots~js/plots"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Autocomplete.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Autocomplete.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableContent */ "./resources/js/components/EditableContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Autocomplete',
  components: {
    EditableContent: _EditableContent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    right: {
      required: false,
      "default": false,
      type: Boolean
    },
    value: {
      required: false
    },
    options: {
      required: true,
      type: Array
    },
    searchValue: {
      required: true,
      type: String
    },
    emptyMessage: {
      required: false,
      type: String,
      "default": 'No results found. Try adjusting your search terms.'
    },
    endMessage: {
      required: false,
      type: String,
      "default": ''
    },
    placeholder: {
      required: false,
      type: String,
      "default": 'Search'
    },
    disabled: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      autocomplete: Math.random() % 1000000,
      search: ''
    };
  },
  mounted: function mounted() {
    this.search = this.searchValue;
  },
  watch: {
    search: function search(_search) {
      this.$emit('search', _search);
    }
  },
  methods: {
    select: function select(option) {
      this.$emit('input', option);
      this.search = option.search || option.label;
    },
    clear: function clear() {
      this.search = '';
      this.$emit('input', null);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClickableMap.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClickableMap.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_Maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Maps */ "./resources/js/helpers/Maps.js");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ClickableMap',
  props: {
    value: {
      required: false,
      type: Object,
      "default": function _default() {
        return {
          latitude: 40.354388,
          longitude: -95.998237
        };
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var start_pos = {
      latitude: 40.354388,
      longitude: -95.998237
    };

    if (this.value.latitude && this.value.longitude) {
      start_pos = this.value;
    }

    _helpers_Maps__WEBPACK_IMPORTED_MODULE_0__["default"].load(function () {
      var pos = new google.maps.LatLng(start_pos.latitude, start_pos.longitude);
      _this.map = new google.maps.Map(_this.$refs.map, {
        zoom: 4,
        center: pos
      });
      _this.updateTimeout = null;

      _this.map.addListener('click', function (e) {
        _this.updateTimeout = setTimeout(function () {
          return _this.selectLocation(e);
        }, 200);
      });

      _this.map.addListener('dblclick', function () {
        clearTimeout(_this.updateTimeout);
      });
    });

    if (this.value.latitude && this.value.longitude) {
      this.marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(start_pos.latitude, start_pos.longitude)
      });
    }
  },
  data: function data() {
    return {
      pos: {
        latitude: 40.354388,
        longitude: -95.998237
      },
      map: null,
      marker: null,
      updateTimeout: null
    };
  },
  watch: {
    'value.latitude': {
      handler: function handler() {
        this.setMarkerPosition();
        this.panTo();
      }
    },
    'value.longitude': {
      handler: function handler() {
        this.setMarkerPosition();
        this.panTo();
      }
    }
  },
  methods: {
    selectLocation: function selectLocation(e) {
      var pos = e.latLng;
      this.$emit('input', {
        latitude: pos.lat(),
        longitude: pos.lng()
      });
    },
    setMarkerPosition: function setMarkerPosition() {
      var v = this.value;
      var pos = this.marker && this.marker.getPosition();

      if (pos) {
        var lat = pos.lng(),
            lng = pos.lng();

        if (v.latitude !== lat || v.longitude !== lng) {
          this.marker.setPosition(new google.maps.LatLng(v.latitude, v.longitude));
        }
      } else {
        this.marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(v.latitude, v.longitude)
        });
      }
    },
    panTo: function panTo() {
      var v = this.value;

      if (v.latitude && v.longitude) {
        this.map.panTo(new google.maps.LatLng(v.latitude, v.longitude));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditableContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Required */ "./resources/js/components/Required.vue");
//
//
//
//
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
  name: 'EditableContent',
  components: {
    Required: _Required__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    value: {
      type: String
    },
    required: {
      type: Boolean
    },
    allowNewline: {
      type: Boolean,
      "default": true
    },
    bordered: {
      type: Boolean,
      "default": true
    }
  },
  mounted: function mounted() {
    this.$refs.input.innerText = this.value;
  },
  watch: {
    value: function value() {
      if (!this.focused) {
        this.$refs.input.innerText = this.value;
      }
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  methods: {
    change: function change(e) {
      this.$emit('input', e.target.innerText);
    },
    blur: function blur() {
      this.focused = false;
      this.$emit('blur');
    },
    preventNewline: function preventNewline(e) {
      if (this.allowNewline) {
        return true;
      }

      if (e && e.preventDefault) {
        e.preventDefault();
        this.$refs.content.blur();
        return false;
      }
    },
    focus: function focus() {
      this.$refs.content.focus();
      this.$refs.content.select();
    }
  }
});

/***/ }),

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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TokensField',
  props: {
    selections: {
      required: false,
      type: Array
    },
    url: {
      required: false,
      type: String
    },
    id: {
      required: false,
      type: String
    },
    options: {
      required: false,
      type: Array
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
  mounted: function mounted() {
    if (this.selections) {
      this.defaults = this.selections.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name;
        return {
          id: id,
          text: name
        };
      });
      this.selects = this.selections.map(function (_ref2) {
        var id = _ref2.id;
        return id;
      });
    }
  },
  data: function data() {
    return {
      defaults: [],
      selects: []
    };
  },
  computed: {
    ajax: function ajax() {
      if (!this.url) {
        return null;
      }

      return {
        url: this.url,
        data: function data(params) {
          return {
            search: params.term,
            page: params.page || 1,
            selections: this.selections ? this.selections.map(function (_ref3) {
              var id = _ref3.id;
              return id;
            }) : null
          };
        },
        processResults: function processResults(data, params) {
          params.page = params.page || 1;
          return {
            results: data.data.map(function (_ref4) {
              var id = _ref4.id,
                  name = _ref4.name;
              return {
                id: id,
                text: name
              };
            }),
            pagination: {
              more: data.current_page < data.last_page
            }
          };
        }
      };
    },
    settings: function settings() {
      return {
        multiple: 'true',
        tags: this.tags,
        theme: 'bootstrap4',
        ajax: this.url ? this.ajax : null
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlotForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/PlotForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modal/Modal */ "./resources/js/components/Modal/Modal.vue");
/* harmony import */ var _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal/ModalCard */ "./resources/js/components/Modal/ModalCard.vue");
/* harmony import */ var _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal/ModalHeader */ "./resources/js/components/Modal/ModalHeader.vue");
/* harmony import */ var _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal/ModalBody */ "./resources/js/components/Modal/ModalBody.vue");
/* harmony import */ var _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal/ModalFooter */ "./resources/js/components/Modal/ModalFooter.vue");
/* harmony import */ var _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal/ModalTitle */ "./resources/js/components/Modal/ModalTitle.vue");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_Required__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Required */ "./resources/js/components/Required.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _helpers_Options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/Options */ "./resources/js/helpers/Options.js");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_ClickableMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ClickableMap */ "./resources/js/components/ClickableMap.vue");


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
//
//
//
//
//
//
//
//
//
//
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
  name: 'PlotForm',
  components: {
    ClickableMap: _components_ClickableMap__WEBPACK_IMPORTED_MODULE_13__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_12__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"],
    Required: _components_Required__WEBPACK_IMPORTED_MODULE_9__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    site: {
      required: false
    },
    plot: {
      required: false,
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      loading: false,
      form: new _Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        number: '',
        latitude: null,
        longitude: null,
        basal_area: '',
        ground_cover: '',
        subcanopy: '',
        canopy: '',
        is_protected: '',
        protection_seasons: '',
        recorders: ''
      }),
      options: _helpers_Options__WEBPACK_IMPORTED_MODULE_11__["default"],
      showMap: false
    };
  },
  mounted: function mounted() {
    if (this.plot) {
      this.form.setDefault(this.plot);
    }
  },
  methods: {
    submit: function submit() {
      if (this.plot) {
        this.update();
      } else {
        this.create();
      }
    },
    create: function create() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this$form$pos, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.form.post("/web/sites/".concat(_this.site.id, "/plots"));

              case 4:
                _yield$_this$form$pos = _context.sent;
                data = _yield$_this$form$pos.data;

                _this.$notify({
                  type: 'success',
                  text: 'Plot created successfully'
                });

                _this.$emit('create', data);

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                if (!_context.t0.response || _context.t0.response.status !== 422) {
                  _this.$notify({
                    type: 'error',
                    text: 'Unable to process the request. Please try refreshing the page.'
                  });

                  console.error(_context.t0);
                }

              case 13:
                _this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    update: function update() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$_this2$form$pu, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.prev = 1;
                _context2.next = 4;
                return _this2.form.put("/web/plots/".concat(_this2.plot.id));

              case 4:
                _yield$_this2$form$pu = _context2.sent;
                data = _yield$_this2$form$pu.data;

                _this2.$notify({
                  type: 'success',
                  text: 'Plot updated successfully'
                });

                _this2.$emit('update', data);

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                if (!_context2.t0.response || _context2.t0.response.status !== 422) {
                  _this2.$notify({
                    type: 'error',
                    text: 'Unable to process the request. Please try refreshing the page.'
                  });

                  console.error(_context2.t0);
                }

              case 13:
                _this2.loading = false;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }))();
    },
    setGpsFromMap: function setGpsFromMap(pos) {
      this.form.latitude = pos.latitude;
      this.form.longitude = pos.longitude;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SiteForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SiteForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
/* harmony import */ var _components_Autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Autocomplete */ "./resources/js/components/Autocomplete.vue");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_TokensField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TokensField */ "./resources/js/components/TokensField.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_12__["default"],
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"],
    Autocomplete: _components_Autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"],
    Required: _components_Required__WEBPACK_IMPORTED_MODULE_9__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
    TokensField: _components_TokensField__WEBPACK_IMPORTED_MODULE_13__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  props: {
    site: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      saving: false,
      states: [],
      stateSearch: '',
      counties: [],
      countySearch: '',
      species: [],
      speciesOptions: [],
      types: [],
      form: new _Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        state_id: null,
        county_id: null,
        city: '',
        name: '',
        diameter: '',
        basal_area: '',
        owner_name: '',
        owner_contact: '',
        species: [],
        shrubs: []
      }),
      speciesForm: new _Form__WEBPACK_IMPORTED_MODULE_8__["default"]({
        name: '',
        plant_type_id: null
      }),
      stateRequest: null,
      countyRequest: null,
      loadingStates: false,
      loadingCounties: false,
      createSpecies: false
    };
  },
  mounted: function mounted() {
    if (this.site) {
      this.form.setDefault(_objectSpread(_objectSpread({}, this.site), {}, {
        species: this.site.species.map(function (_ref) {
          var id = _ref.id;
          return "".concat(id);
        }),
        shrubs: this.site.shrubs.map(function (_ref2) {
          var id = _ref2.id;
          return "".concat(id);
        })
      }));
    }

    this.loadStates(); // this.loadSpecies()
  },
  watch: {
    stateSearch: function stateSearch() {
      this.loadStates();
    },
    countySearch: function countySearch() {
      this.loadCounties();
    },
    createSpecies: function createSpecies() {
      if (this.types.length === 0) {
        this.loadTypes();
      }
    }
  },
  methods: {
    loadStates: function loadStates() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loadingStates = true;

                if (_this.stateRequest !== null) {
                  _this.stateRequest();
                }

                _context.prev = 2;
                _context.next = 5;
                return axios.get('/web/states', {
                  params: {
                    search: _this.stateSearch
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this.stateRequest = c;
                  })
                });

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.states = data.data.map(function (s) {
                  return {
                    label: "".concat(s.name, " (").concat(s.code, ")"),
                    value: s.id,
                    search: s.name
                  };
                });
                _this.loadingStates = false;

                if (_this.form.state_id) {
                  _this.loadCounties();
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                if (!axios.isCancel(_context.t0)) {
                  _this.loadingStates = false;
                  console.error(_context.t0);
                }

              case 15:
                _this.stateRequest = null;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }))();
    },
    loadCounties: function loadCounties() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loadingCounties = true;

                if (_this2.countyRequest !== null) {
                  _this2.countyRequest();
                }

                _context2.prev = 2;
                _context2.next = 5;
                return axios.get('/web/counties', {
                  params: {
                    state_id: _this2.form.state_id,
                    search: _this2.countySearch
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this2.countyRequest = c;
                  })
                });

              case 5:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.counties = data.data.map(function (c) {
                  return {
                    label: c.name,
                    value: c.id
                  };
                });
                _this2.loadingCounties = false;
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);

                if (!axios.isCancel(_context2.t0)) {
                  _this2.loadingCounties = false;
                  console.error(_context2.t0);
                }

              case 14:
                _this2.countyRequest = null;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11]]);
      }))();
    },
    loadSpecies: function loadSpecies() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.request) {
                  _this3.request();
                }

                axios.get('/web/species', {
                  params: {
                    cancelToken: new axios.CancelToken(function (fn) {
                      return _this3.request = fn;
                    }),
                    limit: 20
                  }
                }).then(function (response) {
                  _this3.speciesOptions = response.data.data.map(function (_ref3) {
                    var id = _ref3.id,
                        name = _ref3.name;
                    return {
                      id: id,
                      text: name
                    };
                  });
                })["catch"](function (e) {
                  console.error(e);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    loadTypes: function loadTypes() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loadingTypes = true;
                _context4.prev = 1;
                _context4.next = 4;
                return axios.get('/web/plant-types');

              case 4:
                _yield$axios$get3 = _context4.sent;
                data = _yield$axios$get3.data;
                _this4.types = data;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);

                _this4.$alert('Unable to load form. Please try refreshing the page.');

              case 12:
                _this4.loadingTypes = false;

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9]]);
      }))();
    },
    onChange: function onChange(e) {
      this.$emit('input', e);
    },
    selectState: function selectState(value) {
      this.loadCounties();
      this.$refs.county.clear();
    },
    save: function save() {
      if (this.site) {
        this.update();
      } else {
        this.submit();
      }
    },
    saveSpecies: function saveSpecies() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$_this5$species, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.saving = true;
                _context5.prev = 1;
                _context5.next = 4;
                return _this5.speciesForm.post("/web/species");

              case 4:
                _yield$_this5$species = _context5.sent;
                data = _yield$_this5$species.data;
                _this5.createSpecies = false;

                _this5.loadSpecies();

                _this5.$notify({
                  text: 'Species created successfully',
                  type: 'success'
                });

                _context5.next = 15;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](1);

                if (_context5.t0.response && _context5.t0.response.status !== 422) {
                  _this5.$notify({
                    text: 'Unable to save species. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context5.t0);

              case 15:
                _this5.saving = false;

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 11]]);
      }))();
    },
    update: function update() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$_this6$form$pu, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.saving = true;
                _context6.prev = 1;
                _context6.next = 4;
                return _this6.form.put("/web/sites/".concat(_this6.site.id));

              case 4:
                _yield$_this6$form$pu = _context6.sent;
                data = _yield$_this6$form$pu.data;

                _this6.$emit('update', data);

                _context6.next = 13;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);

                if (!_context6.t0.response || _context6.t0.response.status !== 422) {
                  _this6.$notify({
                    text: 'Unable to save site. Please try refreshing the page.',
                    type: 'error'
                  });
                } else {
                  _this6.$notify({
                    text: 'One or more fields need your attention. Please review the form.',
                    type: 'error'
                  });
                }

                console.error(_context6.t0);

              case 13:
                _this6.saving = false;

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 9]]);
      }))();
    },
    submit: function submit() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$_this7$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.saving = true;
                _context7.prev = 1;
                _context7.next = 4;
                return _this7.form.post("/web/sites");

              case 4:
                _yield$_this7$form$po = _context7.sent;
                data = _yield$_this7$form$po.data;

                _this7.$emit('create', data);

                _context7.next = 13;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);

                if (_context7.t0.response && _context7.t0.response.status !== 422) {
                  _this7.$notify({
                    text: 'Unable to save site. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context7.t0);

              case 13:
                _this7.saving = false;

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editable[data-v-600cef5a]:focus {\n  outline: none;\n}\n.editable.editable-focused[data-v-600cef5a] {\n  border-bottom-color: #2EB07A !important;\n}", ""]);

// exports


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
exports.push([module.i, "\n.height-auto[data-v-75ac5336] {\n  height: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dropdown autocomplete" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      class: ["form-control", { disabled: _vm.disabled }],
      attrs: {
        type: "text",
        name: "search",
        placehoder: _vm.placeholder,
        "aria-haspopup": "true",
        "aria-expanded": "false",
        disabled: _vm.disabled,
        "data-flip": "false",
        "aria-autocomplete": "none",
        autocomplete: _vm.autocomplete,
        "data-toggle": "dropdown"
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
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        class: ["dropdown-menu", "w-100", { "dropdown-menu-right": _vm.right }]
      },
      [
        _vm._l(_vm.options, function(option) {
          return _c(
            "a",
            {
              class: ["dropdown-item", { active: option.value === _vm.value }],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.select(option)
                }
              }
            },
            [_vm._v("\n            " + _vm._s(option.label) + "\n        ")]
          )
        }),
        _vm._v(" "),
        _vm.options.length === 0 && _vm.emptyMessage.length
          ? _c("p", { staticClass: "text-center text-muted p-2 mb-0" }, [
              _vm._v(_vm._s(_vm.emptyMessage))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.endMessage.length
          ? _c("p", { staticClass: "text-center text-muted p-2 mb-0" }, [
              _c("small", [_vm._v(_vm._s(_vm.endMessage))])
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "map", staticStyle: { height: "100px" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    {
      ref: "content",
      class: ["form-control", "editable", { "editable-focused": _vm.focused }],
      attrs: { contenteditable: "true" },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.preventNewline($event)
        },
        focus: function($event) {
          _vm.focused = true
        },
        blur: function($event) {
          return _vm.blur()
        },
        input: function($event) {
          return _vm.change($event)
        }
      }
    },
    [
      _c("span", { ref: "input" }),
      _vm._v(" "),
      !_vm.focused && _vm.required ? _c("required") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
            placeholder: _vm.placeholder,
            options: _vm.selections ? _vm.defaults : _vm.options,
            disabled: _vm.disabled,
            settings: _vm.settings
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit()
            },
            keydown: function($event) {
              $event.target && _vm.form.errors.clear($event.target.name)
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
                  !_vm.plot
                    ? _c("modal-title", [_vm._v("New Plot")])
                    : _c("modal-title", [
                        _vm._v('Edit "Plot ' + _vm._s(_vm.plot.number) + '"')
                      ]),
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
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "number" } },
                    [
                      _vm._v(
                        "\n                        Plot Number\n                        "
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
                        value: _vm.form.number,
                        expression: "form.number"
                      }
                    ],
                    class: [
                      "form-control",
                      { "is-invalid": _vm.form.errors.has("number") }
                    ],
                    attrs: {
                      type: "text",
                      name: "number",
                      id: "number",
                      placeholder: "E,g. 36"
                    },
                    domProps: { value: _vm.form.number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "number", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("number")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("number")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-5" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-1" },
                      [
                        _c("div", [
                          _c("p", { staticClass: "mb-0" }, [
                            _c("strong", [_vm._v("GPS Location")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-0" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v(
                                "You may use the map to visually select the location."
                              )
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2 form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "latitude" } },
                        [
                          _vm._v(
                            "\n                                Latitude\n                                "
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
                            value: _vm.form.latitude,
                            expression: "form.latitude"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("latitude") }
                        ],
                        attrs: {
                          type: "text",
                          name: "latitude",
                          id: "latitude",
                          placeholder: "E,g. -36.898723"
                        },
                        domProps: { value: _vm.form.latitude },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "latitude", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("latitude")
                        ? _c(
                            "small",
                            { staticClass: "form-text text-danger" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.form.errors.first("latitude")) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-0 form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "longitude" } },
                        [
                          _vm._v(
                            "\n                                Longitude\n                                "
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
                            value: _vm.form.longitude,
                            expression: "form.longitude"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("longitude") }
                        ],
                        attrs: {
                          type: "text",
                          name: "longitude",
                          id: "longitude",
                          placeholder: "E,g. -36.898723"
                        },
                        domProps: { value: _vm.form.longitude },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "longitude", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("longitude")
                        ? _c(
                            "small",
                            { staticClass: "form-text text-danger" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.form.errors.first("longitude")) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(
                          "When entering coordinates manually, please verify the location on the map"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-7" },
                    [
                      _c("clickable-map", {
                        staticClass: "map-height map-mini mb-3",
                        attrs: {
                          value: {
                            latitude: _vm.form.latitude,
                            longitude: _vm.form.longitude
                          }
                        },
                        on: {
                          input: function($event) {
                            return _vm.setGpsFromMap($event)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "ground_cover" } },
                    [
                      _vm._v(
                        "\n                        Ground and Shrub Cover\n                        "
                      ),
                      _c("required")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.ground_cover,
                            expression: "form.ground_cover"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("ground_cover") }
                        ],
                        attrs: {
                          type: "text",
                          name: "ground_cover",
                          id: "ground_cover"
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
                              "ground_cover",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select an Option")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.options.percentages, function(option) {
                          return _c("option", { domProps: { value: option } }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(option) +
                                "\n                            "
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("ground_cover")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("ground_cover")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "subcanopy" } },
                    [
                      _vm._v(
                        "\n                        Subcanopy\n                        "
                      ),
                      _c("required")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.subcanopy,
                            expression: "form.subcanopy"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("subcanopy") }
                        ],
                        attrs: {
                          type: "text",
                          name: "subcanopy",
                          id: "subcanopy"
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
                              "subcanopy",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select an Option")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.options.percentages, function(option) {
                          return _c("option", { domProps: { value: option } }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(option) +
                                "\n                            "
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("subcanopy")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("subcanopy")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "canopy" } },
                    [
                      _vm._v(
                        "\n                        Canopy\n                        "
                      ),
                      _c("required")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.canopy,
                            expression: "form.canopy"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("canopy") }
                        ],
                        attrs: { type: "text", name: "canopy", id: "canopy" },
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
                              "canopy",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select an Option")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.options.percentages, function(option) {
                          return _c("option", { domProps: { value: option } }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(option) +
                                "\n                            "
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("canopy")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("canopy")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "is_protected" } },
                    [
                      _vm._v(
                        "\n                        Is plot enclosed or protected from deer?\n                        "
                      ),
                      _c("required")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.is_protected,
                            expression: "form.is_protected"
                          }
                        ],
                        class: [
                          "form-control",
                          { "is-invalid": _vm.form.errors.has("is_protected") }
                        ],
                        attrs: {
                          type: "text",
                          name: "is_protected",
                          id: "is_protected"
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
                              "is_protected",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select an Option")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Yes")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [_vm._v("No")])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("is_protected")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("is_protected")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "protection_seasons" } },
                    [
                      _vm._v(
                        "\n                        If yes, for how many growing seasons?\n                        "
                      ),
                      _c("required")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.protection_seasons,
                            expression: "form.protection_seasons"
                          }
                        ],
                        class: [
                          "form-control",
                          {
                            "is-invalid": _vm.form.errors.has(
                              "protection_seasons"
                            )
                          }
                        ],
                        attrs: {
                          type: "text",
                          name: "protection_seasons",
                          id: "protection_seasons"
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
                              "protection_seasons",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select an Option")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.options.seasons, function(option) {
                          return _c("option", { domProps: { value: option } }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(option) +
                                "\n                            "
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("protection_seasons")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.form.errors.first("protection_seasons")
                            ) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "recorders" } }, [
                    _vm._v("Recorders")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.recorders,
                        expression: "form.recorders"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "recorders",
                      id: "recorders",
                      placeholder: "Type recorders"
                    },
                    domProps: { value: _vm.form.recorders },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "recorders", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("owner_contact")
                    ? _c("span", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("owner_contact")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "basal_area" } }, [
                    _vm._v(
                      "\n                        Basal Area\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.basal_area,
                          expression: "form.basal_area"
                        }
                      ],
                      class: [
                        "form-control",
                        { "is-invalid": _vm.form.errors.has("basal_area") }
                      ],
                      attrs: {
                        type: "text",
                        name: "basal_area",
                        id: "basal_area",
                        placeholder: "E,g. 36"
                      },
                      domProps: { value: _vm.form.basal_area },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "basal_area", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c("span", { staticClass: "input-group-text" }, [
                        _vm._v("\n                                ft"),
                        _c("sup", [_vm._v("2")]),
                        _vm._v("/ac\n                            ")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("basal_area")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("basal_area")) +
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
                    _vm._v("\n                    Save\n                ")
                  ],
                  1
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
                  [_vm._v("Close")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              _vm.createSpecies ? _vm.saveSpecies() : _vm.save()
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
                  _vm.createSpecies
                    ? _c("modal-title", [_vm._v("Create Species")])
                    : !_vm.site
                    ? _c("modal-title", [_vm._v("Add a New Site")])
                    : _vm.site
                    ? _c("modal-title", [
                        _vm._v("Update " + _vm._s(_vm.site.name))
                      ])
                    : _vm._e(),
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
                !_vm.createSpecies
                  ? _c("div", [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "name" } },
                          [
                            _vm._v(
                              "\n                            Site Name\n                            "
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
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            autocomplete: "site-name",
                            id: "name",
                            name: "name",
                            placeholder: "Site Name",
                            autofocus: ""
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
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("name")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                [
                                  _vm._v(
                                    "\n                                    State\n                                    "
                                  ),
                                  _c("required")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("dropdown", {
                                attrs: {
                                  autocomplete: "",
                                  loading: _vm.loadingStates,
                                  options: _vm.states,
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
                                  value: _vm.form.state_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "state_id", $$v)
                                  },
                                  expression: "form.state_id"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("state")
                                ? _c(
                                    "span",
                                    { staticClass: "form-text text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.form.errors.first("state")
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                [
                                  _vm._v(
                                    "\n                                    County\n                                    "
                                  ),
                                  _c("required")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("dropdown", {
                                ref: "county",
                                attrs: {
                                  autocomplete: "",
                                  loading: _vm.loadingCounties,
                                  placeholder: "Select a County",
                                  options: _vm.counties,
                                  disabled: _vm.form.state_id === null
                                },
                                on: {
                                  search: function($event) {
                                    _vm.countySearch = $event
                                  }
                                },
                                model: {
                                  value: _vm.form.county_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "county_id", $$v)
                                  },
                                  expression: "form.county_id"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("county")
                                ? _c(
                                    "span",
                                    { staticClass: "form-text text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.form.errors.first("county")
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "city" } },
                          [
                            _vm._v(
                              "\n                            Town\n                            "
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
                              value: _vm.form.city,
                              expression: "form.city"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "city",
                            id: "city",
                            placeholder: "Type a city name"
                          },
                          domProps: { value: _vm.form.city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "city", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("city")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("city")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "owner" } }, [
                          _vm._v("Owner's Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.owner_name,
                              expression: "form.owner_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "owner",
                            id: "owner",
                            placeholder: "Type a name"
                          },
                          domProps: { value: _vm.form.owner_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "owner_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("owner_name")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.form.errors.first("owner_name")
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "contact" } }, [
                          _vm._v("Contact Info")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.owner_contact,
                              expression: "form.owner_contact"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "contact",
                            id: "contact",
                            placeholder: "Type contact info"
                          },
                          domProps: { value: _vm.form.owner_contact },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "owner_contact",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("owner_contact")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.form.errors.first("owner_contact")
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-0 form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "species" } },
                          [
                            _vm._v(
                              "\n                            Overstory Species\n                            "
                            ),
                            _c("required")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("tokens-field", {
                              staticClass: "flex-grow-1",
                              attrs: {
                                id: "species",
                                selections: _vm.site ? _vm.site.species : null,
                                url: "/web/species"
                              },
                              model: {
                                value: _vm.form.species,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "species", $$v)
                                },
                                expression: "form.species"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "mb-2 ml-2 btn btn-link flex-shrink-0",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.createSpecies = true
                                  }
                                }
                              },
                              [
                                _c("icon", { attrs: { name: "add" } }),
                                _vm._v(" "),
                                _c("span", [_vm._v("New Species")])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.form.errors.has("species")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("species")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-0 form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "shrubs" } },
                          [
                            _vm._v(
                              "\n                            Seedling or Shrub Species\n                            "
                            ),
                            _c("required")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mb-0 d-flex align-items-center" },
                          [
                            _c("tokens-field", {
                              staticClass: "flex-grow-1",
                              attrs: {
                                id: "shrubs",
                                selections: _vm.site ? _vm.site.shrubs : null,
                                url: "/web/species"
                              },
                              model: {
                                value: _vm.form.shrubs,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "shrubs", $$v)
                                },
                                expression: "form.shrubs"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "mb-2 ml-2 btn btn-link flex-shrink-0",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.createSpecies = true
                                  }
                                }
                              },
                              [
                                _c("icon", { attrs: { name: "add" } }),
                                _vm._v(" "),
                                _c("span", [_vm._v("New Species")])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.form.errors.has("shrubs")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("shrubs")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "basal-area" } }, [
                          _vm._v(
                            "\n                            Approximate Basal Area\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group is-appended" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.basal_area,
                                expression: "form.basal_area"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "basal_area",
                              id: "basal-area",
                              placeholder: "Type a number"
                            },
                            domProps: { value: _vm.form.basal_area },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "basal_area",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c("span", { staticClass: "input-group-text" }, [
                              _vm._v("ft"),
                              _c("sup", [_vm._v("2")]),
                              _vm._v("/ac")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.form.errors.has("basal_area")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.form.errors.first("basal_area")
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "diameter" } }, [
                          _vm._v(
                            "\n                            Average Overstory Tree Diameter\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group is-appended" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.diameter,
                                expression: "form.diameter"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "diameter",
                              id: "diameter",
                              placeholder: "Type a number"
                            },
                            domProps: { value: _vm.form.diameter },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "diameter",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c("span", { staticClass: "input-group-text" }, [
                              _vm._v("in")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.form.errors.has("diameter")
                          ? _c(
                              "span",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("diameter")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  : _c("div", [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "species-name" } },
                          [
                            _vm._v(
                              "\n                            Name\n                            "
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
                              value: _vm.speciesForm.name,
                              expression: "speciesForm.name"
                            }
                          ],
                          ref: "species-name",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("species_name")
                          },
                          attrs: {
                            type: "text",
                            autofocus: "",
                            placeholder: "Species Name",
                            name: "species-name",
                            id: "species-name"
                          },
                          domProps: { value: _vm.speciesForm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.speciesForm,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("species_name")
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.errors.first("name")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "plant" } },
                          [
                            _vm._v(
                              "\n                            Plant Type\n                            "
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
                                value: _vm.speciesForm.plant_type_id,
                                expression: "speciesForm.plant_type_id"
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
                                  _vm.speciesForm,
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
                              return _c(
                                "option",
                                { domProps: { value: type.id } },
                                [_vm._v(_vm._s(type.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.form.errors.has("plant_type_id")
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.form.errors.first("plant_type_id")
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "mt-2 mb-0 btn btn-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.createSpecies = false
                              }
                            }
                          },
                          [_vm._v("Cancel Species Creation")]
                        )
                      ])
                    ])
              ]),
              _vm._v(" "),
              _c("modal-footer", { staticClass: "d-flex" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit", disabled: _vm.saving }
                  },
                  [
                    _vm.saving ? _c("inline-spinner") : _vm._e(),
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

/***/ "./resources/js/components/Autocomplete.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Autocomplete.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true& */ "./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true&");
/* harmony import */ var _Autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=script&lang=js& */ "./resources/js/components/Autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c191a05a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Autocomplete.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Autocomplete.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Autocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Autocomplete.vue?vue&type=template&id=c191a05a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_c191a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ClickableMap.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ClickableMap.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true& */ "./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true&");
/* harmony import */ var _ClickableMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClickableMap.vue?vue&type=script&lang=js& */ "./resources/js/components/ClickableMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClickableMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9989abf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ClickableMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ClickableMap.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ClickableMap.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClickableMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ClickableMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClickableMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClickableMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ClickableMap.vue?vue&type=template&id=9989abf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClickableMap_vue_vue_type_template_id_9989abf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditableContent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/EditableContent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableContent.vue?vue&type=template&id=600cef5a&scoped=true& */ "./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true&");
/* harmony import */ var _EditableContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableContent.vue?vue&type=script&lang=js& */ "./resources/js/components/EditableContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& */ "./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditableContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "600cef5a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditableContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditableContent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/EditableContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditableContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=style&index=0&id=600cef5a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_style_index_0_id_600cef5a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditableContent.vue?vue&type=template&id=600cef5a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditableContent.vue?vue&type=template&id=600cef5a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableContent_vue_vue_type_template_id_600cef5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/forms/PlotForm.vue":
/*!*****************************************!*\
  !*** ./resources/js/forms/PlotForm.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotForm.vue?vue&type=template&id=40efbec3&scoped=true& */ "./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true&");
/* harmony import */ var _PlotForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlotForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/PlotForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlotForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40efbec3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/PlotForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/PlotForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/forms/PlotForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlotForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlotForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PlotForm.vue?vue&type=template&id=40efbec3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/PlotForm.vue?vue&type=template&id=40efbec3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlotForm_vue_vue_type_template_id_40efbec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/forms/SiteForm.vue":
/*!*****************************************!*\
  !*** ./resources/js/forms/SiteForm.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteForm.vue?vue&type=template&id=a27969ae&scoped=true& */ "./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true&");
/* harmony import */ var _SiteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/SiteForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SiteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a27969ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/SiteForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/SiteForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/forms/SiteForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SiteForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteForm.vue?vue&type=template&id=a27969ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/SiteForm.vue?vue&type=template&id=a27969ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteForm_vue_vue_type_template_id_a27969ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/Maps.js":
/*!**************************************!*\
  !*** ./resources/js/helpers/Maps.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maps; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

/***/ })

}]);