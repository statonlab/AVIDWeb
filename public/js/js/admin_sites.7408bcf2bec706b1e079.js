(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_sites"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Data_SitesDataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Data/SitesDataView */ "./resources/js/components/Data/SitesDataView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AdminData',
  components: {
    SitesDataView: _components_Data_SitesDataView__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      page: 1,
      lastPage: 1,
      total: 0
    };
  },
  methods: {
    setMeta: function setMeta(data) {
      this.page = data.current_page;
      this.lastPage = data.last_page;
      this.total = data.total;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "flex-shrink-0" }, [
          _c("div", { staticClass: "text-muted" }, [
            _vm._v(
              "\n                Page " +
                _vm._s(_vm.page) +
                " of " +
                _vm._s(_vm.lastPage) +
                ". " +
                _vm._s(_vm.total) +
                " sites found.\n            "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("sites-data-view", {
        attrs: {
          url: "/web/admin/sites",
          "show-owner": "",
          "site-url-prefix": "/app/admin/sites"
        },
        on: {
          load: function($event) {
            return _vm.setMeta($event)
          }
        }
      })
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
      _c("h1", { staticClass: "page-title" }, [_vm._v("Admin Data")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/screens/admin/AdminSites.vue":
/*!***************************************************!*\
  !*** ./resources/js/screens/admin/AdminSites.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminSites.vue?vue&type=template&id=341b6a63&scoped=true& */ "./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true&");
/* harmony import */ var _AdminSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminSites.vue?vue&type=script&lang=js& */ "./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "341b6a63",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/admin/AdminSites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminSites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/admin/AdminSites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminSites.vue?vue&type=template&id=341b6a63&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/admin/AdminSites.vue?vue&type=template&id=341b6a63&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSites_vue_vue_type_template_id_341b6a63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);