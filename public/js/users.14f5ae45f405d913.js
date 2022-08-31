(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orderDir: 'asc',
      verified: ''
    };
  },
  mounted: function mounted() {
    this.loadUsers();
  },
  watch: {
    search: function search() {
      this.loadUsers();
    },
    verified: function verified() {
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
                    order_dir: _this.orderDir,
                    verified: _this.verified,
                    "export": false
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
    },
    downloadUsers: function downloadUsers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('downloading users');
                _context2.next = 3;
                return axios.get("/web/users", {
                  params: {
                    search: _this2.search,
                    page: _this2.page,
                    order_by: _this2.orderBy,
                    order_dir: _this2.orderDir,
                    verified: _this2.verified,
                    "export": true
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this2.request = c;
                  })
                });

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _context2.next = 7;
                return _this2.loadUsers();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Pager.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Pager.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4d5b29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=4d5b29d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Users.vue?vue&type=template&id=4d5b29d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
              staticClass: "btn btn-white",
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
              staticClass: "btn btn-white",
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:1279)\n    at Parser.pp$4.raise (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2757:13)\n    at Parser.pp.unexpected (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:647:8)\n    at Parser.pp$3.parseIdent (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2712:10)\n    at Parser.pp$3.parsePropertyName (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2496:105)\n    at Parser.pp$3.parseProperty (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2426:8)\n    at Parser.pp$3.parseObj (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2179:17)\n    at Parser.<anonymous> (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:6003:24)\n    at Parser.parseExprAtom (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2443:87)\n    at Parser.pp$3.parseProperty (/Users/noahcaldwell/Sites/AVIDWeb/node_modules/vue-template-es2015-compiler/buble.js:2434:8)");

/***/ })

}]);