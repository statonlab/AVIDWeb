"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/profile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Avatar */ "./resources/js/components/Avatar.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/Form */ "./resources/js/forms/Form.js");


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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Profile',
  components: {
    Tab: _components_Tab__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tabs: _components_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    Avatar: _components_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      user: null,
      loading: false,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_5__["default"]({
        name: '',
        email: ''
      }),
      passForm: new _forms_Form__WEBPACK_IMPORTED_MODULE_5__["default"]({
        password: '',
        new_password: '',
        new_password_confirmation: ''
      })
    };
  },
  mounted: function mounted() {
    this.loadUser();
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get("/web/profile");

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.user = data;

                _this.form.setDefault(data);

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

                _this.$notify({
                  text: 'Unable to process this request. Please try refreshing the page.',
                  type: 'error'
                });

              case 14:
                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    updateInfo: function updateInfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$_this2$form$pu, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.form.put("/web/profile");

              case 3:
                _yield$_this2$form$pu = _context2.sent;
                data = _yield$_this2$form$pu.data;
                _this2.user = data;

                _this2.$notify({
                  text: 'Information updated successfully',
                  type: 'success'
                });

                _this2.form.errors.clearAll();

                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

                if (_context2.t0.response && _context2.t0.response.status !== 422) {
                  _this2.$notify({
                    text: 'Unable to update password. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    updatePassword: function updatePassword() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$_this3$passFor, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.passForm.put("/web/profile/password");

              case 3:
                _yield$_this3$passFor = _context3.sent;
                data = _yield$_this3$passFor.data;
                _this3.user = data;

                _this3.$notify({
                  text: 'Password updated successfully',
                  type: 'success'
                });

                _this3.passForm.reset();

                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);

                if (_context3.t0.response && _context3.t0.response.status !== 422) {
                  _this3.$notify({
                    text: 'Unable to update password. Please try refreshing the page.',
                    type: 'error'
                  });
                }

                console.error(_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/forms/Errors.js":
/*!**************************************!*\
  !*** ./resources/js/forms/Errors.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Errors)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors(data) {
    _classCallCheck(this, Errors);

    this.errors = {};

    if (typeof data !== 'undefined') {
      this.set(data);
    }
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        if (typeof this.errors[field] === 'string') {
          return this.errors[field];
        }

        return this.errors[field][0];
      }
    }
  }, {
    key: "first",
    value: function first(field) {
      return this.get(field);
    }
  }, {
    key: "set",
    value: function set(errors) {
      this.errors = errors.errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.errors = {};
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _this = this;

      var errors = [];
      Object.keys(this.errors).forEach(function (key) {
        _this.errors[key].forEach(function (error) {
          return errors.push(error);
        });
      });
      return errors;
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/forms/Form.js":
/*!************************************!*\
  !*** ./resources/js/forms/Form.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Form = /*#__PURE__*/function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.originalData = data;
    this._multipart = false;
    this.fileFields = [];

    this.onProgressCallback = function (e) {};

    for (var field in data) {
      if (data.hasOwnProperty(field)) {
        this[field] = data[field];
      }
    }
  }
  /**
   * Set the form to response to multipart data.
   *
   * @param multipart
   */


  _createClass(Form, [{
    key: "multipart",
    value: function multipart(_multipart) {
      this._multipart = typeof _multipart !== 'undefined' ? _multipart : true;
    }
    /**
     * Clear error of modified element.
     *
     * @param event
     */

  }, {
    key: "keydown",
    value: function keydown(event) {
      var name = event.target.name;

      if (typeof name !== 'undefined' && typeof this[name] !== 'undefined') {
        this.errors.clear(name);
      }
    }
  }, {
    key: "onProgressChange",
    value: function onProgressChange(callback) {
      if (typeof callback !== 'function') {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]('The function onProgressChange only accepts a function as a parameters');
      }

      this.onProgressCallback = callback;
    }
    /**
     * Get the data for the form.
     *
     * @param {{Object}} override
     */

  }, {
    key: "data",
    value: function data(override) {
      var data = {};

      for (var field in this.originalData) {
        if (this.originalData.hasOwnProperty(field)) {
          data[field] = this[field];
        }
      }

      if (override) {
        for (var _field in override) {
          if (this.originalData.hasOwnProperty(_field)) {
            data[_field] = override[_field];
          }
        }
      }

      if (this._multipart) {
        var form = new FormData();

        for (var _field2 in data) {
          if (data.hasOwnProperty(_field2)) {
            if (this.isFileField(_field2)) {
              if (FileList && data[_field2] instanceof FileList) {
                form.append(_field2, data[_field2][0] === null ? '' : data[_field2][0]);
              } else {
                form.append(_field2, data[_field2] === null ? '' : data[_field2]);
              }
            } else {
              form.append(_field2, data[_field2] === null ? '' : data[_field2]);
            }
          }
        }

        return form;
      }

      return data;
    }
    /**
     * check if the field is a file field.
     *
     * @private
     * @param field
     * @return {boolean}
     */

  }, {
    key: "isFileField",
    value: function isFileField(field) {
      return this.fileFields.indexOf(field) > -1;
    }
    /**
     * Resent form data.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        if (this.originalData.hasOwnProperty(field)) {
          this[field] = this.originalData[field];
        }
      }

      this.errors.clearAll();
    }
    /**
     * Send a POST request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "post",
    value: function post(url, override) {
      return this.submit('post', url, override);
    }
    /**
     * Send a PUT request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "put",
    value: function put(url, override) {
      return this.submit('put', url, override);
    }
    /**
     * Send a GET request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "get",
    value: function get(url, override) {
      return this.submit('get', url, override);
    }
    /**
     * Send a DELETE request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "delete",
    value: function _delete(url, override) {
      return this.submit('delete', url, override);
    }
    /**
     * Send a PATCH request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "patch",
    value: function patch(url, override) {
      return this.submit('patch', url, override);
    }
    /**
     * Get headers object.
     *
     * @private
     */

  }, {
    key: "headers",
    value: function headers() {
      var data = {};

      if (this._multipart) {
        data['Content-Type'] = 'multipart/form-data';
      }

      return data;
    }
    /**
     * Let the form know that we have a file field.
     *
     * @param field
     */

  }, {
    key: "setAsFile",
    value: function setAsFile(field) {
      if (!this.isFileField(field)) {
        this.multipart(true);
        this.fileFields.push(field);
      }
    }
  }, {
    key: "setAsNotFile",
    value: function setAsNotFile(field) {
      this.fileFields = this.fileFields.filter(function (f) {
        return f !== field;
      });

      if (this.fileFields.length === 0) {
        this.multipart(false);
      }
    }
    /**
     * @private
     * @return {Object}
     */

  }, {
    key: "config",
    value: function config() {
      return {
        onUploadProgress: this.onProgressCallback
      };
    }
    /**
     * @private
     * @param requestType
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "submit",
    value: function submit(requestType, url, override) {
      var _this = this;

      if (url.length === 0) {
        throw new Error('Please provide a valid URL');
      }

      if (this._multipart && requestType !== 'post') {
        throw new Error("Form is set to be multipart but request method is ".concat(requestType, ". Method should be changed to post."));
      }

      var headers = this.headers();
      var config = this.config();
      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data(override), _objectSpread(_objectSpread({}, config), {}, {
          headers: headers
        })).then(function (response) {
          resolve(response);
        })["catch"](function (errors) {
          _this.onFail(errors);

          reject(errors);
        });
      });
    }
    /**
     * Handle errors.
     * @param errors
     * @private
     */

  }, {
    key: "onFail",
    value: function onFail(errors) {
      if (errors.response && errors.response.status === 422) {
        this.errors.set(errors.response.data);
      }
    }
    /**
     * Set default data.
     *
     * @param data
     */

  }, {
    key: "setDefault",
    value: function setDefault(data) {
      for (var field in this.originalData) {
        if (!this.originalData.hasOwnProperty(field)) {
          return;
        }

        if (data[field] === null) {
          this[field] = this.originalData[field] !== null ? this.originalData[field] : null;
          continue;
        }

        if (data[field] !== 'undefined') {
          this[field] = data[field];
        }
      }
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/components/Tab.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Tab.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=8dbef60c& */ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/components/Tab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tabs.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tabs.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tabs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Profile.vue":
/*!******************************************!*\
  !*** ./resources/js/screens/Profile.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=6b582f1a&scoped=true& */ "./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/screens/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6b582f1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/screens/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tab.vue?vue&type=template&id=8dbef60c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");


/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");


/***/ }),

/***/ "./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6b582f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=6b582f1a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _vm.isActive ? _c("div", [_vm._t("default")], 2) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "nav nav-custom-tabs align-items-center" },
        [
          _vm._l(_vm.tabs, function (tab) {
            return _c(
              "a",
              {
                class: ["nav-link", { active: tab.isActive }],
                attrs: { href: tab.href },
                on: {
                  click: function ($event) {
                    return _vm.selectTab($event, tab)
                  },
                },
              },
              [
                tab.icon ? _c("icon", { attrs: { name: tab.icon } }) : _vm._e(),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(tab.name))]),
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm._t("right"),
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Profile.vue?vue&type=template&id=6b582f1a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.loading ? _c("inline-spinner") : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.user
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xl-3 col-lg-4" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body d-flex align-items-center" },
                  [
                    _c("avatar", { attrs: { user: _vm.user, tooltip: false } }),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-3" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.user.name))]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0 text-muted" }, [
                        _vm._v(_vm._s(_vm.user.member_since)),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-9 col-lg-8" }, [
              _c(
                "div",
                { staticClass: "card" },
                [
                  _c(
                    "tabs",
                    [
                      _c(
                        "tab",
                        {
                          attrs: {
                            name: "Personal Info",
                            selected: "",
                            icon: "person",
                          },
                        },
                        [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return _vm.updateInfo()
                                },
                              },
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Name")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.name,
                                        expression: "form.name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.form.name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.form.errors.has("name")
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.form.errors.first("name")
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group mb-0" }, [
                                  _c("label", [_vm._v("Email Address")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.email,
                                        expression: "form.email",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.form.email },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "email",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.form.errors.has("email")
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.form.errors.first("email")
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-footer bg-light" },
                                [
                                  _c(
                                    "button",
                                    { staticClass: "btn btn-primary" },
                                    [_vm._v("Save")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab",
                        { attrs: { name: "Password", icon: "lock-closed" } },
                        [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return _vm.updatePassword()
                                },
                              },
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Current Password")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.passForm.password,
                                        expression: "passForm.password",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "password" },
                                    domProps: { value: _vm.passForm.password },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.passForm,
                                          "password",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.passForm.errors.has("password")
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.passForm.errors.first(
                                                  "password"
                                                )
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("New Password")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.passForm.new_password,
                                        expression: "passForm.new_password",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "password" },
                                    domProps: {
                                      value: _vm.passForm.new_password,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.passForm,
                                          "new_password",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.passForm.errors.has("new_password")
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.passForm.errors.first(
                                                  "new_password"
                                                )
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group mb-0" }, [
                                  _c("label", [_vm._v("Repeat Password")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.passForm
                                            .new_password_confirmation,
                                        expression:
                                          "passForm.new_password_confirmation",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "password" },
                                    domProps: {
                                      value:
                                        _vm.passForm.new_password_confirmation,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.passForm,
                                          "new_password_confirmation",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-footer bg-light" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "submit" },
                                    },
                                    [_vm._v("Save")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);