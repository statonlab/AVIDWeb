"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Pager',
  props: {
    lastPage: {
      required: true,
      type: Number
    },
    page: {
      required: true,
      type: Number
    },
    hideIfEmpty: {
      required: false,
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      currentPage: 1
    };
  },
  mounted: function mounted() {
    this.currentPage = this.page;
  },
  watch: {
    page: function page(_page) {
      this.currentPage = _page;
    },
    currentPage: function currentPage(page) {
      this.change(page);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Pager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pager */ "./resources/js/components/Pager.vue");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Avatar */ "./resources/js/components/Avatar.vue");


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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Users',
  components: {
    Avatar: _components_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"],
    Pager: _components_Pager__WEBPACK_IMPORTED_MODULE_3__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      users: [],
      search: '',
      page: 1,
      lastPage: 1,
      total: 0,
      orderBy: 'name',
      orderDir: 'asc'
    };
  },
  mounted: function mounted() {
    this.loadUsers();
  },
  watch: {
    search: function search() {
      this.loadUsers();
    }
  },
  methods: {
    loadUsers: function loadUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/web/users", {
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

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.users = data.data;
                _this.page = data.current_page;
                _this.lastPage = data.last_page;
                _this.total = data.total;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

                if (!axios.isCancel(_context.t0)) {
                  _this.$notify({
                    type: 'error',
                    text: 'Unable to load species. Please try refreshing the page.'
                  });

                  console.error(_context.t0);
                }

              case 14:
                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    goTo: function goTo(page) {
      this.loading = true;
      this.page = page;
      this.loadUsers();
    },
    sort: function sort(column) {
      if (column === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.orderBy = column;
        this.orderDir = 'asc';
      }

      this.loadUsers();
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

/***/ "./resources/js/components/Pager.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Pager.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pager.vue?vue&type=template&id=0802cee8&scoped=true& */ "./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&");
/* harmony import */ var _Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pager.vue?vue&type=script&lang=js& */ "./resources/js/components/Pager.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0802cee8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Users.vue":
/*!****************************************!*\
  !*** ./resources/js/screens/Users.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=4d5b29d2&scoped=true& */ "./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/screens/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d5b29d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/screens/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pager.vue?vue&type=template&id=0802cee8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&");


/***/ }),

/***/ "./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=4d5b29d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return (_vm.hideIfEmpty ? _vm.lastPage > 1 : true)
    ? _c(
        "nav",
        {
          staticClass:
            "d-flex w-100 justify-content-between align-items-center",
          attrs: { "aria-label": "Page navigation" },
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { disabled: _vm.page === 1, type: "button" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.previous()
                },
              },
            },
            [_vm._v("\n    Previous\n  ")]
          ),
          _vm._v(" "),
          _c("div", [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.currentPage,
                    expression: "currentPage",
                  },
                ],
                staticClass: "custom-select w-auto",
                on: {
                  change: function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.currentPage = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                },
              },
              _vm._l(_vm.lastPage, function (i) {
                return _c("option", { domProps: { value: i } }, [
                  _vm._v("\n        Page " + _vm._s(i) + "\n      "),
                ])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { disabled: _vm.page === _vm.lastPage, type: "button" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.next()
                },
              },
            },
            [_vm._v("\n    Next\n  ")]
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "d-flex mb-3" }, [
        _c("div", [
          _c("h1", { staticClass: "page-title mb-0" }, [
            _vm._v("Manage Users"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 text-muted" }, [
            _vm._v(_vm._s(_vm.total) + " users found"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-auto text-muted" }, [
          _vm._v(
            "\n            Page " +
              _vm._s(_vm.page) +
              " of " +
              _vm._s(_vm.lastPage) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex p-2" }, [
          _c("div", { staticClass: "flex-grow-1" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "search",
                placeholder: "Search...",
                title: "Search",
              },
              domProps: { value: _vm.search },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-0" }, [
          _vm.loading
            ? _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-center p-3",
                },
                [_c("inline-spinner", { staticClass: "text-primary" })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.users.length === 0 && !_vm.loading
            ? _c("p", { staticClass: "text-muted mb-0 p-3" }, [
                _vm._v(
                  "\n                There are no users found.\n            "
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.users.length > 0 && !_vm.loading
            ? _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-middle mb-0" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticStyle: { width: "55px" } }),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.sort("name")
                              },
                            },
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Name"),
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("name") },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.sort("sites_count")
                              },
                            },
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Sites"),
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("sites_count") },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.sort("created_at")
                              },
                            },
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Member Since"),
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("created_at") },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Role")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.users, function (user) {
                      return _c(
                        "tr",
                        { staticClass: "hover-visible-container" },
                        [
                          _c(
                            "td",
                            { staticStyle: { width: "55px" } },
                            [
                              _c("avatar", {
                                attrs: { user: user, tooltip: false },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/app/users/" + user.id } },
                                [_c("div", [_vm._v(_vm._s(user.name))])]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-muted",
                                    attrs: { href: "mailto:" + user.email },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(user.email) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(user.sites_count) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", [_vm._v(_vm._s(user.member_since))]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", [_vm._v(_vm._s(user.role.name))]),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                ]),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("pager", {
        attrs: { "last-page": _vm.lastPage, page: _vm.page },
        on: {
          change: function ($event) {
            return _vm.goTo($event)
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);