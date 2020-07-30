(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin_measurements~js/admin_plots~js/admin_sites~js/events~js/group~js/group_measurements~js/grou~0c771944"],{

/***/ "./resources/js/forms/Errors.js":
/*!**************************************!*\
  !*** ./resources/js/forms/Errors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors(data) {
    _classCallCheck(this, Errors);

    this.errors = {};

    if (typeof data !== 'undefined') {
      this.set(data);
    }
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        if (typeof this.errors[field] === 'string') {
          return this.errors[field];
        }

        return this.errors[field][0];
      }
    }
  }, {
    key: "first",
    value: function first(field) {
      return this.get(field);
    }
  }, {
    key: "set",
    value: function set(errors) {
      this.errors = errors.errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.errors = {};
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _this = this;

      var errors = [];
      Object.keys(this.errors).forEach(function (key) {
        _this.errors[key].forEach(function (error) {
          return errors.push(error);
        });
      });
      return errors;
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/forms/Form.js":
/*!************************************!*\
  !*** ./resources/js/forms/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form = /*#__PURE__*/function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.originalData = data;
    this._multipart = false;
    this.fileFields = [];

    this.onProgressCallback = function (e) {};

    for (var field in data) {
      if (data.hasOwnProperty(field)) {
        this[field] = data[field];
      }
    }
  }
  /**
   * Set the form to response to multipart data.
   *
   * @param multipart
   */


  _createClass(Form, [{
    key: "multipart",
    value: function multipart(_multipart) {
      this._multipart = typeof _multipart !== 'undefined' ? _multipart : true;
    }
    /**
     * Clear error of modified element.
     *
     * @param event
     */

  }, {
    key: "keydown",
    value: function keydown(event) {
      var name = event.target.name;

      if (typeof name !== 'undefined' && typeof this[name] !== 'undefined') {
        this.errors.clear(name);
      }
    }
  }, {
    key: "onProgressChange",
    value: function onProgressChange(callback) {
      if (typeof callback !== 'function') {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]('The function onProgressChange only accepts a function as a parameters');
      }

      this.onProgressCallback = callback;
    }
    /**
     * Get the data for the form.
     *
     * @param {{Object}} override
     */

  }, {
    key: "data",
    value: function data(override) {
      var data = {};

      for (var field in this.originalData) {
        if (this.originalData.hasOwnProperty(field)) {
          data[field] = this[field];
        }
      }

      if (override) {
        for (var _field in override) {
          if (this.originalData.hasOwnProperty(_field)) {
            data[_field] = override[_field];
          }
        }
      }

      if (this._multipart) {
        var form = new FormData();

        for (var _field2 in data) {
          if (data.hasOwnProperty(_field2)) {
            if (this.isFileField(_field2)) {
              if (FileList && data[_field2] instanceof FileList) {
                form.append(_field2, data[_field2][0] === null ? '' : data[_field2][0]);
              } else {
                form.append(_field2, data[_field2] === null ? '' : data[_field2]);
              }
            } else {
              form.append(_field2, data[_field2] === null ? '' : data[_field2]);
            }
          }
        }

        return form;
      }

      return data;
    }
    /**
     * check if the field is a file field.
     *
     * @private
     * @param field
     * @return {boolean}
     */

  }, {
    key: "isFileField",
    value: function isFileField(field) {
      return this.fileFields.indexOf(field) > -1;
    }
    /**
     * Resent form data.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        if (this.originalData.hasOwnProperty(field)) {
          this[field] = this.originalData[field];
        }
      }

      this.errors.clearAll();
    }
    /**
     * Send a POST request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "post",
    value: function post(url, override) {
      return this.submit('post', url, override);
    }
    /**
     * Send a PUT request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "put",
    value: function put(url, override) {
      return this.submit('put', url, override);
    }
    /**
     * Send a GET request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "get",
    value: function get(url, override) {
      return this.submit('get', url, override);
    }
    /**
     * Send a DELETE request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "delete",
    value: function _delete(url, override) {
      return this.submit('delete', url, override);
    }
    /**
     * Send a PATCH request.
     *
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "patch",
    value: function patch(url, override) {
      return this.submit('patch', url, override);
    }
    /**
     * Get headers object.
     *
     * @private
     */

  }, {
    key: "headers",
    value: function headers() {
      var data = {};

      if (this._multipart) {
        data['Content-Type'] = 'multipart/form-data';
      }

      return data;
    }
    /**
     * Let the form know that we have a file field.
     *
     * @param field
     */

  }, {
    key: "setAsFile",
    value: function setAsFile(field) {
      if (!this.isFileField(field)) {
        this.multipart(true);
        this.fileFields.push(field);
      }
    }
  }, {
    key: "setAsNotFile",
    value: function setAsNotFile(field) {
      this.fileFields = this.fileFields.filter(function (f) {
        return f !== field;
      });

      if (this.fileFields.length === 0) {
        this.multipart(false);
      }
    }
    /**
     * @private
     * @return {Object}
     */

  }, {
    key: "config",
    value: function config() {
      return {
        onUploadProgress: this.onProgressCallback
      };
    }
    /**
     * @private
     * @param requestType
     * @param url
     * @param override
     * @return {Promise<any>}
     */

  }, {
    key: "submit",
    value: function submit(requestType, url, override) {
      var _this = this;

      if (url.length === 0) {
        throw new Error('Please provide a valid URL');
      }

      if (this._multipart && requestType !== 'post') {
        throw new Error("Form is set to be multipart but request method is ".concat(requestType, ". Method should be changed to post."));
      }

      var headers = this.headers();
      var config = this.config();
      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data(override), _objectSpread(_objectSpread({}, config), {}, {
          headers: headers
        })).then(function (response) {
          resolve(response);
        })["catch"](function (errors) {
          _this.onFail(errors);

          reject(errors);
        });
      });
    }
    /**
     * Handle errors.
     * @param errors
     * @private
     */

  }, {
    key: "onFail",
    value: function onFail(errors) {
      if (errors.response && errors.response.status === 422) {
        this.errors.set(errors.response.data);
      }
    }
    /**
     * Set default data.
     *
     * @param data
     */

  }, {
    key: "setDefault",
    value: function setDefault(data) {
      for (var field in this.originalData) {
        if (!this.originalData.hasOwnProperty(field)) {
          return;
        }

        if (data[field] === null) {
          this[field] = this.originalData[field] !== null ? this.originalData[field] : null;
          continue;
        }

        if (data[field] !== 'undefined') {
          this[field] = data[field];
        }
      }
    }
  }]);

  return Form;
}();



/***/ })

}]);