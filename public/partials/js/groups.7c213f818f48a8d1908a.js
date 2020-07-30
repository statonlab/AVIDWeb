(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/groups"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Groups.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Groups.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _forms_GroupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/GroupForm */ "./resources/js/forms/GroupForm.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/User */ "./resources/js/helpers/User.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Groups',
  components: {
    GroupForm: _forms_GroupForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_3__["default"],
      showForm: false,
      loading: true,
      deleting: null,
      groups: [],
      page: 1,
      lastPage: 1,
      group: null
    };
  },
  mounted: function mounted() {
    this.loadGroups();
  },
  methods: {
    loadGroups: function loadGroups() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/web/groups');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.groups = data.data;
                _this.lastPage = data.last_page;
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.$alert('Unable to load group. Please try refreshing the page.');

                console.error(_context.t0);

              case 13:
                _this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    created: function created(group) {
      this.closeForm();
      this.$router.push({
        path: "/app/groups/".concat(group.id)
      });
    },
    updated: function updated(group) {
      this.closeForm();
      this.groups = this.groups.map(function (g) {
        return g.id === group.id ? group : g;
      });
    },
    closeForm: function closeForm() {
      this.group = null;
      this.showForm = false;
    },
    edit: function edit(group) {
      this.group = group;
      this.showForm = true;
    },
    destroy: function destroy(group) {
      var _this2 = this;

      this.$confirm({
        title: "Are you sure you want to delete ".concat(group.name, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.deleting = group.id;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return axios["delete"]("/web/groups/".concat(group.id));

                  case 4:
                    _context2.next = 6;
                    return _this2.loadGroups();

                  case 6:
                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](1);

                    _this2.$notify({
                      text: 'Unable to delete group. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 11:
                    _this2.deleting = null;

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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true& ***!
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
    "div",
    [
      _c("div", [
        _c("h1", { staticClass: "page-title mb-3" }, [_vm._v("User Groups")]),
        _vm._v(" "),
        !_vm.loading && _vm.groups.length === 0
          ? _c("div", { staticClass: "card mb-3" }, [
              _c(
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
                    [_c("icon", { attrs: { name: "people-outline" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold mt-4" }, [
                    _vm._v("Welcome to User Groups")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted max-w-700" }, [
                    _vm._v(
                      "\n                    Groups provide an easy and secure way to share your data with other members.\n                    You can get started by creating a new group. To join an existing group, a user\n                    must send you an invitation to join the group.\n                "
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
                          _vm.showForm = true
                        }
                      }
                    },
                    [
                      _c("icon", { attrs: { name: "add" } }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "\n                        New Group\n                    "
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && _vm.groups.length > 0
          ? _c("div", { staticClass: "card mb-3" }, [
              _c("div", { staticClass: "d-flex card-header p-2" }, [
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
                          _vm.showForm = true
                        }
                      }
                    },
                    [
                      _c("icon", { attrs: { name: "add" } }),
                      _vm._v(" "),
                      _c("span", [_vm._v("New Group")])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body table-responsive p-0" }, [
                _c("table", { staticClass: "table mb-0" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.groups, function(group) {
                      return _c(
                        "tr",
                        { staticClass: "hover-visible-container" },
                        [
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { to: "/app/groups/" + group.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(group.name) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(group.owner.name) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(group.users_count))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm.User.owns(group) ||
                            _vm.User.can(["update groups", "delete groups"])
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-end hover-visible"
                                  },
                                  [
                                    _vm.User.can("update groups")
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: "Edit Group",
                                                expression: "'Edit Group'"
                                              }
                                            ],
                                            staticClass: "btn btn-link mr-1",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.edit(group)
                                              }
                                            }
                                          },
                                          [
                                            _c("icon", {
                                              attrs: { name: "create" }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.User.can("delete groups")
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: "Delete Group",
                                                expression: "'Delete Group'"
                                              }
                                            ],
                                            staticClass: "btn btn-link",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.destroy(group)
                                              }
                                            }
                                          },
                                          [
                                            _c("icon", {
                                              attrs: { name: "trash" }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.showForm
        ? _c("group-form", {
            attrs: { group: _vm.group },
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
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "search", placeholder: "Search Groups" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Group Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner")]),
        _vm._v(" "),
        _c("th", [_vm._v("Members")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/screens/Groups.vue":
/*!*****************************************!*\
  !*** ./resources/js/screens/Groups.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Groups.vue?vue&type=template&id=19ccfb7a&scoped=true& */ "./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true&");
/* harmony import */ var _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups.vue?vue&type=script&lang=js& */ "./resources/js/screens/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19ccfb7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Groups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Groups.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/screens/Groups.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=template&id=19ccfb7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Groups.vue?vue&type=template&id=19ccfb7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_19ccfb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);