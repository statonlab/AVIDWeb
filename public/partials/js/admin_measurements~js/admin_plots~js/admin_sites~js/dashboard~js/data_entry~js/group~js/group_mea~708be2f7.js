(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_measurements~js/admin_plots~js/admin_sites~js/dashboard~js/data_entry~js/group~js/group_mea~708be2f7"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
//
>>>>>>> master
>>>>>>> master


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dropdown',
  components: {
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    options: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      "default": null
    },
    placeholder: {
      required: false,
      type: String,
      "default": 'Select'
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
    disabled: {
      required: false,
      type: Boolean,
      "default": false
    },
    autocomplete: {
      required: false,
      type: Boolean,
      "default": false
    },
    loading: {
      required: false,
      type: Boolean,
      "default": false
    },
    error: {
      required: false,
      type: Boolean,
      "default": false
    },
    maxWidth: {
      required: false,
      type: Number,
      "default": 230
    },
    btnClass: {
      required: false,
      type: String,
      "default": 'btn-select'
    },
    total: {
      required: false,
      type: Number,
      "default": 0
    },
    lengthToSearch: {
      required: false,
      type: Number,
      "default": 0
    },
    searchMessage: {
      required: false,
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      index: null
    };
  },
  computed: {
    selected: function selected() {
      if (this.index === null || this.options.length === 0) {
        return this.placeholder;
      }

      return this.options[this.index] ? this.options[this.index].label : this.placeholder;
    }
  },
  mounted: function mounted() {
    this.setIndex();
  },
  watch: {
    options: {
      handler: function handler() {
        this.setIndex();
      },
      deep: true
    },
    value: function value() {
      this.setIndex();
    }
  },
  methods: {
    setIndex: function setIndex() {
      if (this.value !== null) {
        var options = this.options;

        for (var i = 0; i < options.length; i++) {
          if (this.value === options[i].value) {
            this.index = i;
            return;
          }
        }
      }
    },
    select: function select(option, index) {
      this.$emit('input', option.value);
      this.index = index;
    },
    focus: function focus() {
      var _this = this;

      if (this.autocomplete) {
        setTimeout(function () {
          _this.$refs.search.focus();

          _this.$refs.search.select();
        }, 100);
      }
    },
    clear: function clear() {
      this.$emit('input', null);
      this.index = null;
    },
    down: function down() {
      var first = $(this.$refs.menu).find('.dropdown-item').first();

      if (first.length) {
        first.focus();
      }
    },
    up: function up(index) {
      if (this.autocomplete && index === 0) {
        this.focus();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& ***!
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
  return _c("div", { staticClass: "dropdown autocomplete" }, [
    _c(
      "button",
      {
        ref: "btn",
        staticClass: "font-weight-normal",
        class: [
          "btn",
          "d-flex",
          _vm.btnClass,
          {
            "btn-placeholder-effect": _vm.value === null,
            "btn-select-active": _vm.value !== null,
            "border-danger": _vm.error
          }
        ],
        attrs: {
          "data-toggle": "dropdown",
          "data-boundary": "window",
          disabled: _vm.disabled,
          "data-flip": "false"
        },
        on: {
          click: function($event) {
            return _vm.focus()
          },
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return _vm.focus()
          }
        }
      },
      [
        _c("span", { staticClass: "text-case-normal" }, [
<<<<<<< HEAD
          _vm._v("\n            " + _vm._s(_vm.selected) + "\n        ")
=======
<<<<<<< HEAD
          _vm._v("\n            " + _vm._s(_vm.selected) + "\n        ")
=======
          _vm._v("\n      " + _vm._s(_vm.selected) + "\n    ")
>>>>>>> master
>>>>>>> master
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c("inline-spinner", { staticClass: "ml-auto text-primary" })
          : _c("icon", {
              staticClass: "ml-auto btn-dropdown-icon",
              attrs: { name: "caret-down" }
            })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "menu",
        staticClass: "dropdown-menu w-100",
        style: "max-width: " + _vm.maxWidth + "px;"
      },
      [
        _vm.autocomplete
          ? _c("div", { staticClass: "pb-2 px-3" }, [
              _c("input", {
                ref: "search",
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "search",
                  placeholder: "Search...",
                  title: "Search"
                },
                on: {
                  keyup: function($event) {
                    return _vm.$emit("search", $event.target.value)
                  },
                  keydown: [
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "down", 40, $event.key, [
                          "Down",
                          "ArrowDown"
                        ])
                      ) {
                        return null
                      }
                      return _vm.down()
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      _vm.options.length > 0 && _vm.select(_vm.options[0], 0)
                    }
                  ]
                }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._t("header"),
        _vm._v(" "),
        _vm._l(_vm.options, function(option, index) {
          return _c(
            "a",
            {
              class: ["dropdown-item", { active: option.value === _vm.value }],
              attrs: { href: "#" },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  return _vm.up(index)
                },
                click: function($event) {
                  $event.preventDefault()
                  return _vm.select(option, index)
                }
              }
            },
<<<<<<< HEAD
            [_vm._v("\n            " + _vm._s(option.label) + "\n        ")]
=======
<<<<<<< HEAD
            [_vm._v("\n            " + _vm._s(option.label) + "\n        ")]
=======
            [_vm._v("\n      " + _vm._s(option.label) + "\n    ")]
>>>>>>> master
>>>>>>> master
          )
        }),
        _vm._v(" "),
        _vm._t("default"),
        _vm._v(" "),
        _vm.options.length === 0 &&
        _vm.value < _vm.lengthToSearch &&
        _vm.searchMessage
          ? _c("p", { staticClass: "text-center text-muted p-2 mb-0" }, [
<<<<<<< HEAD
              _vm._v(
                "\n            " + _vm._s(_vm.searchMessage) + "\n        "
              )
=======
<<<<<<< HEAD
              _vm._v(
                "\n            " + _vm._s(_vm.searchMessage) + "\n        "
              )
=======
              _vm._v("\n      " + _vm._s(_vm.searchMessage) + "\n    ")
>>>>>>> master
>>>>>>> master
            ])
          : _vm.options.length < _vm.total
          ? _c("p", { staticClass: "text-muted text-center p-2 mb-0" }, [
              _vm._v(
<<<<<<< HEAD
                "\n            " +
=======
<<<<<<< HEAD
                "\n            " +
=======
                "\n      " +
>>>>>>> master
>>>>>>> master
                  _vm._s(
                    "Showing " +
                      _vm.options.length +
                      " of " +
                      _vm.total +
                      ". Please search to see more"
                  ) +
<<<<<<< HEAD
                  "\n        "
=======
<<<<<<< HEAD
                  "\n        "
=======
                  "\n    "
>>>>>>> master
>>>>>>> master
              )
            ])
          : _vm.options.length === 0 && _vm.emptyMessage.length
          ? _c("p", { staticClass: "text-center text-muted p-2 mb-0" }, [
              _vm._v(_vm._s(_vm.emptyMessage))
            ])
          : _vm.endMessage.length
          ? _c("p", { staticClass: "text-center text-muted p-2 mb-0" }, [
              _c("small", [_vm._v(_vm._s(_vm.endMessage))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._t("footer")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Dropdown.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& */ "./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef782e08",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);