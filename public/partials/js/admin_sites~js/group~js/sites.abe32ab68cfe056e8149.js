(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_sites~js/group~js/sites"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pager */ "./resources/js/components/Pager.vue");
/* harmony import */ var _InlineSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _forms_SiteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/SiteForm */ "./resources/js/forms/SiteForm.vue");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/User */ "./resources/js/helpers/User.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SitesDataView',
  components: {
    Pager: _Pager__WEBPACK_IMPORTED_MODULE_1__["default"],
    InlineSpinner: _InlineSpinner__WEBPACK_IMPORTED_MODULE_2__["default"],
    SiteForm: _forms_SiteForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    url: {
      required: false,
      type: String,
      "default": '/web/sites'
    },
    showSiteType: {
      required: false,
      type: Boolean,
      "default": false
    },
    editable: {
      required: false,
      type: Boolean,
      "default": false
    },
    showOwner: {
      required: false,
      type: Boolean,
      "default": false
    },
    showInvitations: {
      required: false,
      type: Boolean,
      "default": false
    },
    siteUrlPrefix: {
      required: false,
      type: String,
      "default": '/app/sites'
    },
    unauthorizedMessage: {
      required: false,
      type: String,
      "default": 'You do not have permission to view sites.'
    }
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_6___default.a,
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_5__["default"],
      showSiteForm: false,
      siteType: this.showSiteType ? 'all' : null,
      sites: [],
      invitations: [],
      loading: false,
      page: 1,
      lastPage: 1,
      total: 0,
      site: null,
      deleting: null,
      search: '',
      _request: null,
      orderBy: 'last_measured_at',
      orderDir: 'desc',
      unauthorized: false
    };
  },
  mounted: function mounted() {
    this.loading = true;
    this.loadSites();
    this.loadInvitations();
  },
  watch: {
    search: function search() {
      this.page = 1;
      this.loadSites();
    },
    siteType: function siteType() {
      this.page = 1;
      this.loadSites();
    }
  },
  methods: {
    loadSites: function loadSites() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this._request) {
                  _this._request();
                }

                _context.prev = 1;
                _context.next = 4;
                return axios.get(_this.url, {
                  params: {
                    search: _this.search,
                    page: _this.page,
                    order_by: _this.orderBy,
                    order_dir: _this.orderDir,
                    site_type: _this.siteType
                  },
                  cancelToken: new axios.CancelToken(function (c) {
                    return _this._request = c;
                  })
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.total = data.total;
                _this.sites = data.data;
                _this.lastPage = data.last_page;
                _this.loading = false;

                _this.$emit('load', data);

                _context.next = 21;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                if (axios.isCancel(_context.t0)) {
                  _context.next = 21;
                  break;
                }

                _this.loading = false;

                if (!(_context.t0.response && _context.t0.response.status === 403)) {
                  _context.next = 20;
                  break;
                }

                _this.unauthorized = true;
                return _context.abrupt("return");

              case 20:
                console.error(_context.t0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }))();
    },
    loadInvitations: function loadInvitations() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/web/site-invitations");

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.invitations = data.filter(function (i) {
                  return !i.expired;
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
                _this2.loading = false;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    siteCreated: function siteCreated() {
      this.loadSites();
      this.closeForm();
    },
    siteUpdated: function siteUpdated(site) {
      this.sites = this.sites.map(function (s) {
        return s.id === site.id ? site : s;
      });
      this.closeForm();
    },
    closeForm: function closeForm() {
      this.site = null;
      this.showSiteForm = false;
    },
    edit: function edit(site) {
      this.site = site;
      this.showSiteForm = true;
    },
    destroy: function destroy(site) {
      var _this3 = this;

      this.$confirm({
        title: "Are you sure you want to delete ".concat(site.name, "?"),
        text: 'This action is permanent!',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _this3.deleting = site.id;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return axios["delete"]("/web/sites/".concat(site.id));

                  case 4:
                    _context3.next = 6;
                    return _this3.loadSites();

                  case 6:
                    _context3.next = 11;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](1);

                    _this3.$notify({
                      text: 'Unable to delete site. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 11:
                    _this3.deleting = null;

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[1, 8]]);
          }));

          function onConfirm() {
            return _onConfirm.apply(this, arguments);
          }

          return onConfirm;
        }()
      });
    },
    goTo: function goTo(page) {
      this.page = page;
      this.loadSites();
    },
    sort: function sort(column) {
      if (column === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.orderBy = column;
        this.orderDir = 'asc';
      }

      this.loadSites();
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
    acceptInvitation: function acceptInvitation(invitation) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios.get("/web/site-invitations/".concat(invitation.id, "/accept"));

              case 3:
                _this4.$notify({
                  text: 'Invitation accepted successfully',
                  type: 'success'
                });

                _this4.invitations = _this4.invitations.filter(function (i) {
                  return i.id !== invitation.id;
                });

                _this4.loadSites();

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

                if (_context4.t0.response && _context4.t0.response.status === 422 && _context4.t0.response.data.errors.invitation) {
                  _this4.$notify({
                    text: _context4.t0.response.data.errors.invitation[0],
                    type: 'error'
                  });
                } else {
                  _this4.$notify({
                    text: 'Unable to accept invitation. Please try refreshing the page.',
                    type: 'error'
                  });
                }

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    rejectInvitation: function rejectInvitation(invitation) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios.get("/web/site-invitations/".concat(invitation.id, "/reject"));

              case 3:
                _this5.$notify({
                  text: 'Invitation rejected successfully',
                  type: 'success'
                });

                _this5.invitations = _this5.invitations.filter(function (i) {
                  return i.id !== invitation.id;
                });

                _this5.loadSites();

                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);

                if (_context5.t0.response && _context5.t0.response.status === 422 && _context5.t0.response.data.errors.invitation) {
                  _this5.$notify({
                    text: _context5.t0.response.data.errors.invitation[0],
                    type: 'error'
                  });
                } else {
                  _this5.$notify({
                    text: 'Unable to reject invitation. Please try refreshing the page.',
                    type: 'error'
                  });
                }

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm.showInvitations && _vm.invitations.length !== 0
        ? _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("p", { staticClass: "page-title mb-0" }, [
                _vm._v("Pending Invitations")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v("You have been invited to view the following sites")
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table mb-0 table-middle table-hover table-nowrap"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.invitations, function(invitation) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(invitation.site.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(invitation.user.name))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right no-wrap" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-primary",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.acceptInvitation(invitation)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Accept\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-danger",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.rejectInvitation(invitation)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Reject\n                        "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
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
                  expression: "search"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "search", placeholder: "Search..." },
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
          _c("div", { staticClass: "pl-1 d-flex align-items-center" }, [
            _c("div", { staticClass: "flex-shrink-0" }, [
              _vm.showSiteType
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.siteType,
                          expression: "siteType"
                        }
                      ],
                      staticClass: "custom-select",
                      attrs: { name: "site_type", id: "site-type" },
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
                          _vm.siteType = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "all" } }, [
                        _vm._v("All sites")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "shared" } }, [
                        _vm._v("Owned by others")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "owned" } }, [
                        _vm._v("Owned by me")
                      ])
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-shrink-0" }, [
              _c(
                "button",
                {
                  staticClass: "ml-2 btn btn-primary",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showSiteForm = true
                    }
                  }
                },
                [
                  _c("icon", { attrs: { name: "add" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("New Site")])
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-0 table-responsive" }, [
          _vm.loading
            ? _c(
                "p",
                { staticClass: "mb-0 p-4" },
                [_c("inline-spinner", { staticClass: "text-primary" })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.unauthorized
            ? _c("p", { staticClass: "mb-0 p-4 text-muted" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.unauthorizedMessage) +
                    "\n            "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.sites.length === 0 && !_vm.unauthorized
            ? _c("p", { staticClass: "mb-0 p-4 text-muted" }, [
                _vm._v(
                  '\n                No results found. Use the "New Site" button above to create a new one.\n            '
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.sites.length > 0 && !_vm.unauthorized
            ? _c(
                "table",
                {
                  staticClass:
                    "table mb-0 table-middle table-hover table-nowrap"
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sort("name")
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("name") }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm.showOwner
                        ? _c("th", [
                            _vm._v(
                              "\n                        Created By\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sort("plots_count")
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Plots")
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("plots_count") }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sort("plants_count")
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Plants")
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("plants_count") }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _c(
                          "a",
                          {
                            staticClass: "d-flex align-items-center",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sort("last_measured_at")
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v("Last Measured")
                            ]),
                            _vm._v(" "),
                            _c("icon", {
                              attrs: { name: _vm.sortIcon("last_measured_at") }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.sites, function(site) {
                      return _c("tr", [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: { to: _vm.siteUrlPrefix + "/" + site.id }
                              },
                              [_c("strong", [_vm._v(_vm._s(site.name))])]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-muted" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(site.county.name) +
                                  ", " +
                                  _vm._s(site.state.code) +
                                  "\n                        "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.showOwner
                          ? _c("td", [_vm._v(_vm._s(site.user.name))])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("plural")(
                                site.plots_count,
                                "Plot",
                                "Plots"
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("plural")(
                                site.plants_count,
                                "Plant",
                                "Plants"
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          site.last_measured_at
                            ? _c("span", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm
                                        .moment(site.last_measured_at)
                                        .format("MMM Do, YYYY")
                                    ) +
                                    "\n                        "
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-right no-wrap" },
                          [
                            _c(
                              "router-link",
                              {
                                directives: [
                                  {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: "View Plots",
                                    expression: "'View Plots'"
                                  }
                                ],
                                staticClass: "btn btn-link btn-sm",
                                attrs: { to: _vm.siteUrlPrefix + "/" + site.id }
                              },
                              [_c("icon", { attrs: { name: "eye" } })],
                              1
                            ),
                            _vm._v(" "),
                            _vm.editable ||
                            _vm.User.owns(site) ||
                            _vm.User.can("delete sites")
                              ? _c(
                                  "button",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Edit Site",
                                        expression: "'Edit Site'"
                                      }
                                    ],
                                    staticClass: "btn btn-link btn-sm mr-1",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(site)
                                      }
                                    }
                                  },
                                  [_c("icon", { attrs: { name: "create" } })],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.User.owns(site) || _vm.User.can("delete sites")
                              ? _c(
                                  "button",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Delete Site",
                                        expression: "'Delete Site'"
                                      }
                                    ],
                                    staticClass: "btn btn-link btn-sm",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.destroy(site)
                                      }
                                    }
                                  },
                                  [
                                    _vm.deleting !== site.id
                                      ? _c("icon", { attrs: { name: "trash" } })
                                      : _c("inline-spinner", {
                                          staticClass: "text-primary"
                                        })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ]
              )
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
      _vm.showSiteForm
        ? _c("site-form", {
            attrs: { site: _vm.site, groupURL: "" },
            on: {
              close: _vm.closeForm,
              create: function($event) {
                return _vm.siteCreated($event)
              },
              update: function($event) {
                return _vm.siteUpdated($event)
              }
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Site Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("From")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/components/Data/SitesDataView.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Data/SitesDataView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true& */ "./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true&");
/* harmony import */ var _SitesDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitesDataView.vue?vue&type=script&lang=js& */ "./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SitesDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1fd8dc81",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Data/SitesDataView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SitesDataView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/SitesDataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesDataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Data/SitesDataView.vue?vue&type=template&id=1fd8dc81&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesDataView_vue_vue_type_template_id_1fd8dc81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);