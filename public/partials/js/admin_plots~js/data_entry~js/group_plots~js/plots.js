(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_plots~js/data_entry~js/group_plots~js/plots"],{

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