(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/group"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");


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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvitationForm',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    group: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      form: new _Form__WEBPACK_IMPORTED_MODULE_7__["default"]({
        name: '',
        email: ''
      })
    };
  },
  methods: {
    send: function send() {
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
                return _this.form.post("/web/groups/".concat(_this.group.id, "/invitations"));

              case 4:
                _yield$_this$form$pos = _context.sent;
                data = _yield$_this$form$pos.data;

                _this.$notify({
                  text: 'Invitation sent successfully',
                  type: 'success'
                });

                _this.$emit('create', data);

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                if (!_context.t0.response || _context.t0.response.status !== 422) {
                  _this.$alert('Unable to send invitation. Please try refreshing the page.');

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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/UserForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/UserForm.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal/Close */ "./resources/js/components/Modal/Close.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");


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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserForm',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_9__["default"],
    Close: _components_Modal_Close__WEBPACK_IMPORTED_MODULE_8__["default"],
    ModalFooter: _components_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModalBody: _components_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalTitle: _components_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalHeader: _components_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalCard: _components_Modal_ModalCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user: {
      required: true,
      type: Object
    },
    group: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      permission: '',
      form: new _Form__WEBPACK_IMPORTED_MODULE_7__["default"]({
        user_id: '',
        can_view: '',
        can_edit: ''
      })
    };
  },
  mounted: function mounted() {
    this.form.setDefault({
      user_id: this.user.id,
      can_view: this.user.pivot.can_view,
      can_edit: this.user.pivot.can_edit
    });
    this.setPermission();
  },
  methods: {
    send: function send() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this$form$put, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.form.put("/web/groups/".concat(_this.group.id, "/permissions"));

              case 4:
                _yield$_this$form$put = _context.sent;
                data = _yield$_this$form$put.data;

                _this.$notify({
                  text: 'Member updated successfully.',
                  type: 'success'
                });

                _this.$emit('update', data);

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                if (!_context.t0.response || _context.t0.response.status !== 422) {
                  _this.$alert('Unable to update member. Please try refreshing the page.');

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
    setPermission: function setPermission() {
      if (this.form.can_view && this.form.can_edit) {
        this.permission = 'view_edit';
      } else if (this.form.can_view) {
        this.permission = 'view_only';
      } else {
        this.permission = 'no_permissions';
      }
    },
    updatePermissions: function updatePermissions() {
      switch (this.permission) {
        case 'no_permissions':
          this.form.can_view = 0;
          this.form.can_edit = 0;
          break;

        case 'view_only':
          this.form.can_view = 1;
          this.form.can_edit = 0;
          break;

        case 'view_edit':
          this.form.can_view = 1;
          this.form.can_edit = 1;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Group.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Group.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Avatar */ "./resources/js/components/Avatar.vue");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icon */ "./resources/js/components/Icon.vue");
/* harmony import */ var _forms_InvitationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/InvitationForm */ "./resources/js/forms/InvitationForm.vue");
/* harmony import */ var _helpers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/User */ "./resources/js/helpers/User.js");
/* harmony import */ var _forms_GroupForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms/GroupForm */ "./resources/js/forms/GroupForm.vue");
/* harmony import */ var _forms_UserForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms/UserForm */ "./resources/js/forms/UserForm.vue");
/* harmony import */ var _components_Data_SitesDataView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Data/SitesDataView */ "./resources/js/components/Data/SitesDataView.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Group',
  components: {
    SitesDataView: _components_Data_SitesDataView__WEBPACK_IMPORTED_MODULE_8__["default"],
    GroupForm: _forms_GroupForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserForm: _forms_UserForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    InvitationForm: _forms_InvitationForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    Icon: _components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    Avatar: _components_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"],
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      User: _helpers_User__WEBPACK_IMPORTED_MODULE_5__["default"],
      group: null,
      member: null,
      loading: true,
      permissions: null,
      showInviteForm: false,
      showGroupForm: false,
      showUserForm: false,
      accepted: false,
      page: 1,
      lastPage: 1,
      total: 0
    };
  },
  mounted: function mounted() {
    this.loadGroup();
    this.loadPermissions();

    if (typeof this.$route.query.accepted !== 'undefined') {
      this.accepted = true;
      this.$router.replace({
        query: {}
      });
    }
  },
  methods: {
    loadGroup: function loadGroup() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                id = _this.$route.params.id;
                _context.prev = 2;
                _context.next = 5;
                return axios.get("/web/groups/".concat(id));

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.group = data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 13:
                _this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    },
    loadPermissions: function loadPermissions() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                id = _this2.$route.params.id;
                _context2.prev = 2;
                _context2.next = 5;
                return axios.get("/web/groups/".concat(id, "/permissions"));

              case 5:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.permissions = data;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                console.error(_context2.t0);

              case 13:
                _this2.loading = false;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }))();
    },
    invitationCreated: function invitationCreated(invitation) {
      this.showInviteForm = false;
      this.group = _objectSpread(_objectSpread({}, this.group), {}, {
        invitations: this.group.invitations.concat([invitation])
      });
    },
    edit: function edit(member) {
      this.member = member;
      this.showUserForm = true;
    },
    updated: function updated(group) {
      this.closeForm();
      this.group = _objectSpread(_objectSpread({}, this.group), group);
    },
    memberUpdated: function memberUpdated(member) {
      this.closeUserForm();
      this.group.users = this.group.users.map(function (u) {
        return u.id === member.id ? member : u;
      });
    },
    closeUserForm: function closeUserForm() {
      this.showUserForm = false;
    },
    closeForm: function closeForm() {
      this.showGroupForm = false;
    },
    sitesLoaded: function sitesLoaded(data) {
      this.page = data.current_page;
      this.total = data.total;
      this.lastPage = data.last_page;
    },
    deleteInvite: function deleteInvite(invitation) {
      var _this3 = this;

      this.$confirm({
        title: "Delete ".concat(invitation.name, "'s Invitation"),
        text: 'This action is permanent.',
        onConfirm: function () {
          var _onConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return axios["delete"]("/web/invitations/".concat(invitation.id));

                  case 3:
                    _this3.group.invitations = _this3.group.invitations.filter(function (i) {
                      return i.id !== invitation.id;
                    });

                    _this3.$notify({
                      type: 'success',
                      text: 'Invitation deleted successfully'
                    });

                    _context3.next = 11;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0);

                    _this3.$notify({
                      text: 'Unable to delete invitation. Please try refreshing the page.',
                      type: 'error'
                    });

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 7]]);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          attrs: { action: "#", method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.send($event)
            },
            keydown: function($event) {
              return _vm.form.errors.clear($event.target.name)
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
                  _c("modal-title", [
                    _vm._v("\n                    Invitation\n                ")
                  ]),
                  _vm._v(" "),
                  _c("close", {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        $event.stopPropagation()
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
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
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
                    class: { "is-invalid": _vm.form.errors.has("name") },
                    attrs: {
                      type: "text",
                      id: "name",
                      name: "name",
                      placeholder: "E,g. Jane Doe",
                      required: ""
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
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("name")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-0" }, [
                  _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("email") },
                    attrs: {
                      type: "email",
                      name: "email",
                      id: "email",
                      placeholder: "E,g. jane@example.com",
                      required: ""
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("email")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.errors.first("email")) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c(
                "modal-footer",
                { staticClass: "d-flex justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.loading }
                    },
                    [
                      _vm.loading ? _c("inline-spinner") : _vm._e(),
                      _vm._v(" "),
                      _c("span", [_vm._v("Send Invitation")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light",
                      attrs: { type: "button", disabled: _vm.loading },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  )
                ]
              )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true& ***!
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
          attrs: { action: "#", method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.send($event)
            },
            keydown: function($event) {
              return _vm.form.errors.clear($event.target.name)
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
                  _c("modal-title", [
                    _vm._v(
                      "\n                    " +
                        _vm._s("Editing permissions for " + _vm.user.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("close", {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        $event.stopPropagation()
                        return _vm.$emit("close")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("modal-body", [
                _c("div", { staticClass: "custom-control custom-radio" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission,
                        expression: "permission"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: {
                      type: "radio",
                      id: "radio-no-permissions",
                      name: "no-permissions"
                    },
                    domProps: {
                      value: "no_permissions",
                      checked: _vm._q(_vm.permission, "no_permissions")
                    },
                    on: {
                      change: [
                        function($event) {
                          _vm.permission = "no_permissions"
                        },
                        _vm.updatePermissions
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-control-label",
                      attrs: { for: "radio-no-permissions" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s("User can neither view nor edit") +
                          "\n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-control custom-radio" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission,
                        expression: "permission"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: {
                      type: "radio",
                      id: "radio-view-only",
                      name: "view-only"
                    },
                    domProps: {
                      value: "view_only",
                      checked: _vm._q(_vm.permission, "view_only")
                    },
                    on: {
                      change: [
                        function($event) {
                          _vm.permission = "view_only"
                        },
                        _vm.updatePermissions
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-control-label",
                      attrs: { for: "radio-view-only" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s("User can view only") +
                          "\n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-control custom-radio" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission,
                        expression: "permission"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: {
                      type: "radio",
                      id: "radio-view-edit",
                      name: "view-edit"
                    },
                    domProps: {
                      value: "view_edit",
                      checked: _vm._q(_vm.permission, "view_edit")
                    },
                    on: {
                      change: [
                        function($event) {
                          _vm.permission = "view_edit"
                        },
                        _vm.updatePermissions
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-control-label",
                      attrs: { for: "radio-view-edit" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s("User can view and edit") +
                          "\n                    "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "modal-footer",
                { staticClass: "d-flex justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.loading }
                    },
                    [
                      _vm.loading ? _c("inline-spinner") : _vm._e(),
                      _vm._v(" "),
                      _c("span", [_vm._v("Update Member")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light",
                      attrs: { type: "button", disabled: _vm.loading },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  )
                ]
              )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _vm.loading
        ? _c(
            "div",
            {
              staticClass:
                "d-flex align-items-center justify-content-center py-5"
            },
            [_c("inline-spinner", { staticClass: "text-primary" })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.group
        ? _c("div", [
            _c("div", { staticClass: "d-flex mb-3 align-items-center" }, [
              _c("div", { staticClass: "flex-grow-1" }, [
                _c("h1", { staticClass: "page-title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.group.name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex-shrink-0 ml-auto" }, [
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v(
                    "\n                    Page " +
                      _vm._s(_vm.page) +
                      " of " +
                      _vm._s(_vm.lastPage) +
                      ". " +
                      _vm._s(_vm.total) +
                      " sites found.\n                "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.accepted
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-success d-flex align-items-center"
                  },
                  [
                    _c("div", [
                      _vm._v(
                        "\n                Invitation accepted successfully.\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-auto pl-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.accepted = false
                            }
                          }
                        },
                        [_c("icon", { attrs: { name: "close" } })],
                        1
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "card mb-3" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("strong", [_vm._v("Members")]),
                      _vm._v(" "),
                      _vm.User.owns(_vm.group)
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.showInviteForm = true
                                }
                              }
                            },
                            [
                              _c("icon", { attrs: { name: "add" } }),
                              _vm._v(" "),
                              _c("span", [_vm._v("Invite")])
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body px-0 pt-0" },
                    _vm._l(_vm.group.users, function(user, i) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-items-center hover-visible-container hover-highlight px-4 py-2",
                          class: { "mt-3": i !== 0 }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex-shrink-0" },
                            [
                              _c("avatar", { attrs: { user: user, small: "" } })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-grow-1 px-2" }, [
                            _c("div", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(user.name))
                            ]),
                            _vm._v(" "),
                            _vm.group.owner.id === user.id
                              ? _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                                    Group Owner\n                                "
                                  )
                                ])
                              : _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                                    Group Member\n                                "
                                  )
                                ])
                          ]),
                          _vm._v(" "),
                          _vm.User.owns(_vm.group)
                            ? _c(
                                "div",
                                { staticClass: "flex-shrink-0 hover-visible" },
                                [
                                  _vm.group.owner.id !== user.id
                                    ? _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: "Edit Member",
                                              expression: "'Edit Member'"
                                            }
                                          ],
                                          staticClass:
                                            "btn btn-link btn-sm mr-0",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.edit(user)
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
                                  _vm.group.owner.id !== user.id
                                    ? _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: "Remove Member",
                                              expression: "`Remove Member`"
                                            }
                                          ],
                                          staticClass: "btn btn-link"
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
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                typeof _vm.group.invitations !== "undefined" &&
                _vm.group.invitations.length > 0
                  ? _c("div", { staticClass: "card mb-3" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-body px-0 pt-0" },
                        _vm._l(_vm.group.invitations, function(invitation) {
                          return _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center hover-visible-container hover-highlight px-4 py-2"
                            },
                            [
                              _c("div", { staticClass: "flex-grow-1 pr-2" }, [
                                _c("div", { staticClass: "font-weight-bold" }, [
                                  _vm._v(_vm._s(invitation.name))
                                ]),
                                _vm._v(" "),
                                !invitation.expired &&
                                invitation.status === "pending"
                                  ? _c("div", { staticClass: "text-muted" }, [
                                      _vm._v(
                                        "\n                                    Pending\n                                "
                                      )
                                    ])
                                  : invitation.expired &&
                                    invitation.status === "pending"
                                  ? _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        "\n                                    Expired\n                                "
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex-shrink-0 hover-visible" },
                                [
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "Delete Invitation",
                                          expression: "`Delete Invitation`"
                                        }
                                      ],
                                      staticClass: "btn btn-link",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.deleteInvite(invitation)
                                        }
                                      }
                                    },
                                    [_c("icon", { attrs: { name: "trash" } })],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8" },
                [
                  _c("sites-data-view", {
                    attrs: {
                      editable: _vm.permissions
                        ? Boolean(_vm.permissions.can_edit)
                        : false,
                      url: "/web/groups/" + _vm.group.id + "/sites",
                      "site-url-prefix":
                        "/app/groups/" + _vm.group.id + "/sites",
                      "show-owner": true,
                      "unauthorized-message":
                        "You do not have permission to view sites for this group."
                    },
                    on: {
                      load: function($event) {
                        return _vm.sitesLoaded($event)
                      }
                    }
                  })
                ],
                1
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && !_vm.group ? _c("div", [_vm._m(1)]) : _vm._e(),
      _vm._v(" "),
      _vm.showInviteForm
        ? _c("invitation-form", {
            attrs: { group: _vm.group },
            on: {
              close: function($event) {
                _vm.showInviteForm = false
              },
              create: function($event) {
                return _vm.invitationCreated($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showGroupForm
        ? _c("group-form", {
            attrs: { group: _vm.group },
            on: {
              update: function($event) {
                return _vm.updated($event)
              },
              close: _vm.closeForm
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showUserForm
        ? _c("user-form", {
            attrs: { group: _vm.group, user: _vm.member },
            on: {
              update: function($event) {
                return _vm.memberUpdated($event)
              },
              close: _vm.closeUserForm
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
    return _c(
      "div",
      {
        staticClass:
          "card-header d-flex justify-content-between align-items-center"
      },
      [_c("strong", [_vm._v("Invitations")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-danger" }, [
      _vm._v(
        "\n            Group not found. Please try refreshing the page or "
      ),
      _c("a", { attrs: { href: "/" } }, [_vm._v("contact us")]),
      _vm._v(".\n        ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/forms/InvitationForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/forms/InvitationForm.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvitationForm.vue?vue&type=template&id=8191660a&scoped=true& */ "./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true&");
/* harmony import */ var _InvitationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvitationForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvitationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8191660a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/InvitationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InvitationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/InvitationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./InvitationForm.vue?vue&type=template&id=8191660a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/InvitationForm.vue?vue&type=template&id=8191660a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitationForm_vue_vue_type_template_id_8191660a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/forms/UserForm.vue":
/*!*****************************************!*\
  !*** ./resources/js/forms/UserForm.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=737cd8a6&scoped=true& */ "./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/forms/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "737cd8a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/forms/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/forms/UserForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/forms/UserForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=737cd8a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/forms/UserForm.vue?vue&type=template&id=737cd8a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_737cd8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/screens/Group.vue":
/*!****************************************!*\
  !*** ./resources/js/screens/Group.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group.vue?vue&type=template&id=40a3026e&scoped=true& */ "./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true&");
/* harmony import */ var _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue?vue&type=script&lang=js& */ "./resources/js/screens/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40a3026e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/Group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/Group.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/screens/Group.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=template&id=40a3026e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/Group.vue?vue&type=template&id=40a3026e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_40a3026e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);