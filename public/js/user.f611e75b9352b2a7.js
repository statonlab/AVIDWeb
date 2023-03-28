"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/user"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Avatar */ "./resources/js/components/Avatar.vue");
/* harmony import */ var _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InlineSpinner */ "./resources/js/components/InlineSpinner.vue");
/* harmony import */ var _components_Pager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pager */ "./resources/js/components/Pager.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'User',
  components: {
    InlineSpinner: _components_InlineSpinner__WEBPACK_IMPORTED_MODULE_1__["default"],
    Avatar: _components_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pager: _components_Pager__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user: null,
      userRole: '',
      sites: [],
      roles: [],
      loading: true,
      search: '',
      page: 1,
      lastPage: 1
    };
  },
  mounted: function mounted() {
    this.loadUser();
    this.loadSites();
    this.loadRoles();
    this.loading = false;
  },
  watch: {
    search: function search() {
      this.loadSites();
    }
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var id, _yield$axios$get, data;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                id = _this.$route.params.id;
                _context.next = 4;
                return axios.get("/web/users/".concat(id));

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.user = data;
                _this.userRole = "".concat(_this.user.role_id);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

                _this.$notify({
                  text: 'Unable to process this request. Please try refreshing the page.',
                  type: 'error'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    loadSites: function loadSites() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var id, _yield$axios$get2, data;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = _this2.$route.params.id;
                _context2.next = 4;
                return axios.get("/web/user/".concat(id, "/sites"), {
                  params: {
                    search: _this2.search,
                    page: _this2.page
                  }
                });

              case 4:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.sites = data.data;
                _this2.page = data.current_page;
                _this2.lastPage = data.last_page;
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

                _this2.$notify({
                  text: 'Unable to process this request. Please try refreshing the page.',
                  type: 'error'
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    loadRoles: function loadRoles() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get3, data;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get("/web/roles");

              case 3:
                _yield$axios$get3 = _context3.sent;
                data = _yield$axios$get3.data;
                _this3.roles = data;
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

                _this3.$notify({
                  text: 'Unable to process this request. Please try refreshing the page.',
                  type: 'error'
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    setRole: function setRole() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var id;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = _this4.$route.params.id;
                _context4.next = 4;
                return axios.patch("/web/user/".concat(id, "/role"), {
                  role: _this4.userRole
                });

              case 4:
                _this4.$notify({
                  text: 'Role updated successfully.',
                  type: 'success'
                });

                _context4.next = 11;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

                _this4.$notify({
                  text: 'Unable to process this request. Please try refreshing the page.',
                  type: 'error'
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    goTo: function goTo(page) {
      this.loading = true;
      this.page = page;
      this.loadSites();
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return (_vm.hideIfEmpty ? _vm.lastPage > 1 : true) ? _c("nav", {
    staticClass: "d-flex w-100 justify-content-between align-items-center",
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c("button", {
    staticClass: "btn btn-white",
    attrs: {
      disabled: _vm.page === 1,
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.previous();
      }
    }
  }, [_vm._v("\n    Previous\n  ")]), _vm._v(" "), _c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentPage,
      expression: "currentPage"
    }],
    staticClass: "custom-select w-auto",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.currentPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.lastPage, function (i) {
    return _c("option", {
      domProps: {
        value: i
      }
    }, [_vm._v("\n        Page " + _vm._s(i) + "\n      ")]);
  }), 0)]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-white",
    attrs: {
      disabled: _vm.page === _vm.lastPage,
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.next();
      }
    }
  }, [_vm._v("\n    Next\n  ")])]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.loading ? _c("inline-spinner") : _vm._e(), _vm._v(" "), !_vm.loading && _vm.user ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-4 col-md-5"
  }, [_c("div", {
    staticClass: "card mb-4"
  }, [_c("div", {
    staticClass: "card-body d-flex align-items-center"
  }, [_c("avatar", {
    staticClass: "flex-shrink-0",
    attrs: {
      user: _vm.user,
      tooltip: false
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "ml-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted"
  }, [_vm._v(_vm._s("Member since ".concat(_vm.user.member_since)))]), _vm._v(" "), _c("a", {
    attrs: {
      href: "mailto:".concat(_vm.user.email)
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.user.email) + "\n                        ")])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body rounded"
  }, [_c("p", {
    staticClass: "font-weight-bold text-dark text-sm mb-1"
  }, [_vm._v("Roles")]), _vm._v(" "), _vm._l(_vm.roles, function (role, index) {
    return _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "custom-control custom-radio"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.userRole,
        expression: "userRole"
      }],
      staticClass: "custom-control-input",
      attrs: {
        type: "radio",
        id: "role-".concat(index),
        name: "role-select"
      },
      domProps: {
        value: "".concat(role.id),
        checked: _vm._q(_vm.userRole, "".concat(role.id))
      },
      on: {
        change: [function ($event) {
          _vm.userRole = "".concat(role.id);
        }, _vm.setRole]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "custom-control-label",
      attrs: {
        "for": "role-".concat(index)
      }
    }, [_vm._v("\n                                " + _vm._s(role.name) + "\n                            ")])])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-8 col-md-7"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("h1", {
    staticClass: "page-title mb-3"
  }, [_vm._v("Sites")]), _vm._v(" "), _c("div", {
    staticClass: "ml-auto text-muted"
  }, [_vm._v("\n                    Page " + _vm._s(_vm.page) + " of " + _vm._s(_vm.lastPage) + "\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header d-flex p-2"
  }, [_c("div", {
    staticClass: "flex-grow-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      type: "search",
      placeholder: "Search..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm.loading ? _c("p", {
    staticClass: "mb-0 p-4"
  }, [_c("inline-spinner", {
    staticClass: "text-primary"
  })], 1) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.sites.length === 0 ? _c("p", {
    staticClass: "mb-0 p-4 text-muted"
  }, [_vm._v("\n                    User does not have any sites.\n                ")]) : _vm._e(), _vm._v(" "), !_vm.loading && _vm.sites.length > 0 ? _c("table", {
    staticClass: "table mb-0 table-middle table-hover"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.sites, function (site) {
    return _c("tr", {
      staticClass: "on-hover"
    }, [_c("td", [_c("router-link", {
      attrs: {
        to: "/app/sites/".concat(site.id)
      }
    }, [_c("strong", [_vm._v(_vm._s(site.name))])]), _vm._v(" "), _c("div", {
      staticClass: "text-muted"
    }, [_vm._v("\n                                    " + _vm._s(site.county.name) + ", " + _vm._s(site.state.code) + "\n                                ")])], 1), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(site.plots_count))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(site.plants_count))])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("pager", {
    attrs: {
      "last-page": _vm.lastPage,
      page: _vm.page
    },
    on: {
      change: function change($event) {
        return _vm.goTo($event);
      }
    }
  })], 1)]) : _vm._e()], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "100%"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Plots")]), _vm._v(" "), _c("th", [_vm._v("Plants")]), _vm._v(" "), _c("th")])]);
}];
render._withStripped = true;


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

/***/ "./resources/js/screens/User.vue":
/*!***************************************!*\
  !*** ./resources/js/screens/User.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=54f52571&scoped=true& */ "./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/screens/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54f52571",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/User.vue"
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/User.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/screens/User.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_template_id_0802cee8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pager.vue?vue&type=template&id=0802cee8&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pager.vue?vue&type=template&id=0802cee8&scoped=true&");


/***/ }),

/***/ "./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_54f52571_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=54f52571&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/screens/User.vue?vue&type=template&id=54f52571&scoped=true&");


/***/ })

}]);