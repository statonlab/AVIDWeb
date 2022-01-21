"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/roles"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Roles',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      toggling: false,
      roles: [],
      permissions: [],
      matrix: {}
    };
  },
  mounted: function mounted() {
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
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
                return axios.get('/web/permissions');

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.roles = data.roles;
                _this.permissions = data.permissions;
                _this.matrix = data.matrix;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                _this.$alert('Unable to load page. Please try refreshing the page.');

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
    toggle: function toggle(permission, role) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$patch, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(role.name === 'Admin')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.toggling = true;
                _context2.prev = 3;
                _context2.next = 6;
                return axios.patch("/web/permissions/".concat(permission.id, "/roles/").concat(role.id));

              case 6:
                _yield$axios$patch = _context2.sent;
                data = _yield$axios$patch.data;
                // Update the matrix to reflect the new change
                _this2.matrix[role.id][permission.id] = data.attached;

                _this2.$notify({
                  type: 'success',
                  text: 'Role updated successfully'
                });

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);

                _this2.$notify({
                  text: 'Unable to update role. Please try refreshing the page.',
                  type: 'error'
                });

                console.error(_context2.t0);

              case 16:
                _this2.toggling = false;

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/screens/Roles.vue":
/*!****************************************!*\
  !*** ./resources/js/screens/Roles.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=4d25c807&scoped=true& */ "./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/screens/Roles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d25c807",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Roles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/screens/Roles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_4d25c807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Roles.vue?vue&type=template&id=4d25c807&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/Roles.vue?vue&type=template&id=4d25c807&scoped=true& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm.loading
      ? _c(
          "div",
          { staticClass: "d-flex align-items-center justify-content-center" },
          [_c("inline-spinner", { staticClass: "text-primary" })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading && _vm.roles.length > 0
      ? _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body table-responsive overflow-hidden p-0" },
            [
              _c(
                "table",
                { staticClass: "table table-hover table-middle mb-0" },
                [
                  _c("thead", [
                    _c(
                      "tr",
                      [
                        _c("th", { staticClass: "w-100 border-top-0" }, [
                          _vm._v("Permission"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.roles, function (role) {
                          return _c(
                            "th",
                            {
                              staticClass: "border-top-0",
                              staticStyle: { width: "0" },
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(role.name) +
                                  "\n                    "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.permissions, function (permission) {
                      return _c(
                        "tr",
                        [
                          _c("td", [
                            _c("p", { staticClass: "mb-0" }, [
                              _c("strong", [_vm._v(_vm._s(permission.title))]),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 text-muted" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(permission.description) +
                                  "\n                        "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.roles, function (role) {
                            return _c("td", { staticClass: "text-center" }, [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  disabled:
                                    role.name === "Admin" || _vm.toggling,
                                  title:
                                    role.name === "Admin"
                                      ? "Admin role can't be changed"
                                      : null,
                                },
                                domProps: {
                                  checked: _vm.matrix[role.id][permission.id],
                                },
                                on: {
                                  change: function ($event) {
                                    $event.preventDefault()
                                    return _vm.toggle(permission, role)
                                  },
                                },
                              }),
                            ])
                          }),
                        ],
                        2
                      )
                    }),
                    0
                  ),
                ]
              ),
            ]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c("h1", { staticClass: "page-title" }, [_vm._v("Roles & Permissions")]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-0 text-muted" }, [
        _vm._v("Manage permissions for each role."),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);