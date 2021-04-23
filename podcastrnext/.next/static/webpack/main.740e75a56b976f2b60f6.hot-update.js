self["webpackHotUpdate_N_E"]("main",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = connect;

var DevOverlay = _interopRequireWildcard(__webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"));

var _stripAnsi = _interopRequireDefault(__webpack_require__(/*! next/dist/compiled/strip-ansi */ "./node_modules/next/dist/compiled/strip-ansi/index.js"));

var _eventsource = __webpack_require__(/*! ./eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _formatWebpackMessages = _interopRequireDefault(__webpack_require__(/*! ./format-webpack-messages */ "./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js"));
/**
* MIT License
*
* Copyright (c) 2013-present, Facebook, Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
// This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
// This alternative WebpackDevServer combines the functionality of:
// https://github.com/webpack/webpack-dev-server/blob/webpack-1/client/index.js
// https://github.com/webpack/webpack/blob/webpack-1/hot/dev-server.js
// It only supports their simplest configuration (hot updates on same server).
// It makes some opinionated choices on top, like adding a syntax error overlay
// that looks similar to our console output. The error overlay is inspired by:
// https://github.com/glenjamin/webpack-hot-middleware


var hadRuntimeError = false;
var customHmrEventHandler;

function connect() {
  DevOverlay.register();
  (0, _eventsource.addMessageListener)(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      processMessage(event);
    } catch (ex) {
      console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
    }
  });
  return {
    subscribeToHmrEvent: function subscribeToHmrEvent(handler) {
      customHmrEventHandler = handler;
    },
    onUnrecoverableError: function onUnrecoverableError() {
      hadRuntimeError = true;
    }
  };
} // Remember some state related to hot module replacement.


var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;

function clearOutdatedErrors() {
  // Clean up outdated compile errors, if any.
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    if (hasCompileErrors) {
      console.clear();
    }
  }
} // Successful compilation.


function handleSuccess() {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false; // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with warnings (e.g. ESLint).


function handleWarnings(warnings) {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false;

  function printWarnings() {
    // Print warnings to the console.
    var formatted = (0, _formatWebpackMessages["default"])({
      warnings: warnings,
      errors: []
    });

    if (typeof console !== 'undefined' && typeof console.warn === 'function') {
      for (var i = 0; i < formatted.warnings.length; i++) {
        if (i === 5) {
          console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
          break;
        }

        console.warn((0, _stripAnsi["default"])(formatted.warnings[i]));
      }
    }
  }

  printWarnings(); // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with errors (e.g. syntax error or missing modules).


function handleErrors(errors) {
  clearOutdatedErrors();
  isFirstCompilation = false;
  hasCompileErrors = true; // "Massage" webpack messages.

  var formatted = (0, _formatWebpackMessages["default"])({
    errors: errors,
    warnings: []
  }); // Only show the first error.

  DevOverlay.onBuildError(formatted.errors[0]); // Also log them to the console.

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    for (var i = 0; i < formatted.errors.length; i++) {
      console.error((0, _stripAnsi["default"])(formatted.errors[i]));
    }
  } // Do not attempt to reload now.
  // We will reload on next success instead.


  if (undefined) {
    if (self.__NEXT_HMR_CB) {
      self.__NEXT_HMR_CB(formatted.errors[0]);

      self.__NEXT_HMR_CB = null;
    }
  }
}

function onFastRefresh(hasUpdates) {
  DevOverlay.onBuildOk();

  if (hasUpdates) {
    DevOverlay.onRefresh();
  }

  console.log('[Fast Refresh] done');
} // There is a newer version of the code available.


function handleAvailableHash(hash) {
  // Update last known compilation hash.
  mostRecentCompilationHash = hash;
} // Handle messages from the server.


function processMessage(e) {
  var obj = JSON.parse(e.data);

  switch (obj.action) {
    case 'building':
      {
        console.log('[Fast Refresh] rebuilding');
        break;
      }

    case 'built':
    case 'sync':
      {
        if (obj.hash) {
          handleAvailableHash(obj.hash);
        }

        var errors = obj.errors,
            warnings = obj.warnings;
        var hasErrors = Boolean(errors && errors.length);

        if (hasErrors) {
          return handleErrors(errors);
        }

        var hasWarnings = Boolean(warnings && warnings.length);

        if (hasWarnings) {
          return handleWarnings(warnings);
        }

        return handleSuccess();
      }

    default:
      {
        if (customHmrEventHandler) {
          customHmrEventHandler(obj);
          break;
        }

        break;
      }
  }
} // Is there a newer version of this code available?


function isUpdateAvailable() {
  /* globals __webpack_hash__ */
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  return mostRecentCompilationHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function afterApplyUpdates(fn) {
  if (canApplyUpdates()) {
    fn();
  } else {
    var handler = function handler(status) {
      if (status === 'idle') {
        module.hot.removeStatusHandler(handler);
        fn();
      }
    };

    module.hot.addStatusHandler(handler);
  }
} // Attempt to update code on the fly, fall back to a hard reload.


function tryApplyUpdates(onHotUpdateSuccess) {
  if (false) {}

  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  function handleApplyUpdates(err, updatedModules) {
    if (err || hadRuntimeError || !updatedModules) {
      if (err) {
        console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
      } else if (hadRuntimeError) {
        console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
      }

      window.location.reload();
      return;
    }

    var hasUpdates = Boolean(updatedModules.length);

    if (typeof onHotUpdateSuccess === 'function') {
      // Maybe we want to do something.
      onHotUpdateSuccess(hasUpdates);
    }

    if (isUpdateAvailable()) {
      // While we were updating, there was a new update! Do it again.
      tryApplyUpdates(hasUpdates ? undefined : onHotUpdateSuccess);
    } else {
      if (undefined) {
        afterApplyUpdates(function () {
          if (self.__NEXT_HMR_CB) {
            self.__NEXT_HMR_CB();

            self.__NEXT_HMR_CB = null;
          }
        });
      }
    }
  } // https://webpack.js.org/api/hot-module-replacement/#check


  module.hot.check(
  /* autoApply */
  true).then(function (updatedModules) {
    handleApplyUpdates(null, updatedModules);
  }, function (err) {
    handleApplyUpdates(err, null);
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-client.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-client.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _default = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var assetPrefix;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assetPrefix = _ref.assetPrefix;

            _router["default"].ready(function () {
              _router["default"].events.on('routeChangeComplete', _onDemandEntriesUtils.setupPing.bind(void 0, assetPrefix, function () {
                return _router["default"].pathname;
              }));
            });

            (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
              return _router["default"].pathname;
            }, _onDemandEntriesUtils.currentPage); // prevent HMR connection from being closed when running tests

            if (!undefined) {
              document.addEventListener('visibilitychange', function (_event) {
                var state = document.visibilityState;

                if (state === 'visible') {
                  (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
                    return _router["default"].pathname;
                  }, true);
                } else {
                  (0, _onDemandEntriesUtils.closePing)();
                }
              });
              window.addEventListener('beforeunload', function () {
                (0, _onDemandEntriesUtils.closePing)();
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _default(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _hotDevClient = _interopRequireDefault(__webpack_require__(/*! ./error-overlay/hot-dev-client */ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js"));

var _default = function _default() {
  var devClient = (0, _hotDevClient["default"])();
  devClient.subscribeToHmrEvent(function (obj) {
    if (obj.action === 'reloadPage') {
      return window.location.reload();
    }

    if (obj.action === 'removedPage') {
      var _obj$data = _slicedToArray(obj.data, 1),
          page = _obj$data[0];

      if (page === window.next.router.pathname) {
        return window.location.reload();
      }

      return;
    }

    if (obj.action === 'addedPage') {
      var _obj$data2 = _slicedToArray(obj.data, 1),
          _page = _obj$data2[0];

      if (_page === window.next.router.pathname && typeof window.next.router.components[_page] === 'undefined') {
        return window.location.reload();
      }

      return;
    }

    throw new Error('Unexpected action ' + obj.action);
  });
  return devClient;
};

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports.default = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"));

__webpack_require__(/*! @next/polyfill-module */ "./node_modules/@next/polyfill-module/dist/polyfill-module.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var querystring = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _portal = __webpack_require__(/*! ./portal */ "./node_modules/next/dist/client/portal/index.js");

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(/*! ./performance-relayer */ "./node_modules/next/dist/client/performance-relayer.js"));

var _routeAnnouncer = __webpack_require__(/*! ./route-announcer */ "./node_modules/next/dist/client/route-announcer.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.1.4-canary.11";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locale = data.locale,
    locales = data.locales,
    domainLocales = data.domainLocales,
    isPreview = data.isPreview;
var defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

if (false) { var _require5, initScriptLoader; }

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])();
var appElement = document.getElementById('__next');

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && // We don't update for 404 requests as this can modify
      // the asPath unexpectedly e.g. adding basePath when
      // it wasn't originally present
      page !== '/404' && !(page === '/_error' && hydrateProps && hydrateProps.pageProps && hydrateProps.pageProps.statusCode === 404) && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search || false) || hydrateProps && hydrateProps.__N_SSG && (location.search || false))) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {} else {
        var _require6 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"),
            ReactDevOverlay = _require6.ReactDevOverlay;

        return /*#__PURE__*/_react["default"].createElement(ReactDevOverlay, null, this.props.children);
      }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;
var CachedComponent;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        initialErr,
        appEntrypoint,
        app,
        mod,
        pageEntrypoint,
        _require7,
        isValidElementType,
        _require8,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (true) {
              webpackHMR = opts.webpackHMR;
            }

            initialErr = hydrateErr;
            _context.prev = 3;
            _context.next = 6;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 6:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 9;
              break;
            }

            throw appEntrypoint.error;

          case 9:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            if (!( true && hydrateErr)) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (false) {}

            _require7 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require7.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](3);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (true) {
              _require8 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"), getNodeError = _require8.getNodeError; // Server-side runtime errors need to be re-thrown on the client-side so
              // that the overlay is rendered.

              if (initialErr) {
                if (initialErr === hydrateErr) {
                  setTimeout(function () {
                    var error;

                    try {
                      // Generate a new error object. We `throw` it because some browsers
                      // will set the `stack` when thrown, and we want to ensure ours is
                      // not overridden when we re-throw it below.
                      throw new Error(initialErr.message);
                    } catch (e) {
                      error = e;
                    }

                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    var node = getNodeError(error);
                    throw node;
                  });
                } // We replaced the server-side error with a client-side error, and should
                // no longer rewrite the stack trace to a Node error.
                else {
                    setTimeout(function () {
                      throw initialErr;
                    });
                  }
              }
            }

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale,
              domainLocales: domainLocales,
              isPreview: isPreview
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (true) {
              _context.next = 44;
              break;
            }

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 44:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 29]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (true) {
              // Ensure this error is displayed in the overlay in development
              setTimeout(function () {
                throw _context2.t0;
              });
            }

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (true) {
    // A Next.js rendering runtime error is always unrecoverable
    // FIXME: let's make this recoverable (error in GIP client-transition)
    webpackHMR.onUnrecoverableError(); // We need to render an empty <App> so that the `<ReactDevOverlay>` can
    // render itself.

    return doRender({
      App: function App() {
        return null;
      },
      props: {},
      Component: function Component() {
        return null;
      },
      styleSheets: []
    });
  }

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref5) {
    var ErrorComponent = _ref5.page,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null;
var shouldUseHydrate = typeof _reactDom["default"].hydrate === 'function';

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (shouldUseHydrate) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      shouldUseHydrate = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');
  if (!navStartEntries.length) return;
  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

_c = AppContainer;

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

var lastAppProps;

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    true) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) { var referenceNode, idx, currentHrefs, currentStyleTags, desiredHrefs; }

    if (input.scroll) {
      window.scrollTo(input.scroll.x, input.scroll.y);
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  var elem = /*#__PURE__*/_react["default"].createElement(Root, {
    callback: onRootCommit
  }, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps), /*#__PURE__*/_react["default"].createElement(_portal.Portal, {
    type: "next-route-announcer"
  }, /*#__PURE__*/_react["default"].createElement(_routeAnnouncer.RouteAnnouncer, null))));

  onStart(); // We catch runtime errors using componentDidCatch which will trigger renderError

  renderReactElement( false ? /*#__PURE__*/0 : elem, appElement);
  return renderPromise;
}

function Root(_ref9) {
  _s();

  var callback = _ref9.callback,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


_s(Root, "KDoBXdlwSU+O+uFsByO25XxhKDU=");

_c2 = Root;

function Head(_ref10) {
  _s2();

  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

_s2(Head, "n7/vCynhJvM+pLkyL2DMQUF0odM=");

_c3 = Head;

var _c, _c2, _c3;

$RefreshReg$(_c, "AppContainer");
$RefreshReg$(_c2, "Root");
$RefreshReg$(_c3, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/next-dev.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/next-dev.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var next = _interopRequireWildcard(__webpack_require__(/*! ./ */ "./node_modules/next/dist/client/index.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./dev/event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _onDemandEntriesClient = _interopRequireDefault(__webpack_require__(/*! ./dev/on-demand-entries-client */ "./node_modules/next/dist/client/dev/on-demand-entries-client.js"));

var _webpackHotMiddlewareClient = _interopRequireDefault(__webpack_require__(/*! ./dev/webpack-hot-middleware-client */ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js"));

var _devBuildWatcher = _interopRequireDefault(__webpack_require__(/*! ./dev/dev-build-watcher */ "./node_modules/next/dist/client/dev/dev-build-watcher.js"));

var _fouc = __webpack_require__(/*! ./dev/fouc */ "./node_modules/next/dist/client/dev/fouc.js");

var _eventsource = __webpack_require__(/*! ./dev/error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var querystring = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
/* globals import('./dev/noop'); */
// Temporary workaround for the issue described here:
// https://github.com/vercel/next.js/issues/3775#issuecomment-407438123
// The runtimeChunk doesn't have dynamic import handling code when there hasn't been a dynamic import
// The runtimeChunk can't hot reload itself currently to correct it when adding pages using on-demand-entries
// eslint-disable-next-line no-unused-expressions


__webpack_require__.e(/*! import() */ "node_modules_next_dist_client_dev_noop_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./dev/noop */ "./node_modules/next/dist/client/dev/noop.js", 23));
; // Support EventSource on Internet Explorer 11

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var _window = window,
    assetPrefix = _window.__NEXT_DATA__.assetPrefix;
var prefix = assetPrefix || '';
var webpackHMR = (0, _webpackHotMiddlewareClient["default"])();
window.next = next;
(0, next["default"])({
  webpackHMR: webpackHMR
}).then(function (_ref) {
  var renderCtx = _ref.renderCtx,
      render = _ref.render;
  (0, _onDemandEntriesClient["default"])({
    assetPrefix: prefix
  });

  var buildIndicatorHandler = function buildIndicatorHandler() {};

  function devPagesManifestListener(event) {
    if (event.data.indexOf('devPagesManifest') !== -1) {
      fetch("".concat(prefix, "/_next/static/development/_devPagesManifest.json")).then(function (res) {
        return res.json();
      }).then(function (manifest) {
        window.__DEV_PAGES_MANIFEST = manifest;
      })["catch"](function (err) {
        console.log("Failed to fetch devPagesManifest", err);
      });
    } else if (event.data.indexOf('serverOnlyChanges') !== -1) {
      var _JSON$parse = JSON.parse(event.data),
          pages = _JSON$parse.pages;

      var router = window.next.router;

      if (pages.includes(router.pathname)) {
        console.log('Refreshing page data due to server-side change');
        buildIndicatorHandler('building');

        var clearIndicator = function clearIndicator() {
          return buildIndicatorHandler('built');
        };

        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), router.asPath)["finally"](clearIndicator);
      }
    }
  }

  devPagesManifestListener.unfiltered = true;
  (0, _eventsource.addMessageListener)(devPagesManifestListener);

  if (true) {
    (0, _devBuildWatcher["default"])(function (handler) {
      buildIndicatorHandler = handler;
    });
  } // delay rendering until after styles have been applied in development


  (0, _fouc.displayContent)(function () {
    render(renderCtx);
  });
})["catch"](function (err) {
  console.error('Error was not caught', err);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/page-loader.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/page-loader.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ../next-server/lib/router/utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ./normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = _interopRequireWildcard(__webpack_require__(/*! ./route-loader */ "./node_modules/next/dist/client/route-loader.js"));

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = void 0;
    this.assetPrefix = void 0;
    this.promisedSsgManifest = void 0;
    this.promisedDevPagesManifest = void 0;
    this.routeLoader = void 0;
    this.routeLoader = (0, _routeLoader["default"])(assetPrefix);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    /** @type {Promise<Set<string>>} */

    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        ;

        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (false) {} else {
        if (window.__DEV_PAGES_MANIFEST) {
          return window.__DEV_PAGES_MANIFEST.pages;
        } else {
          if (!this.promisedDevPagesManifest) {
            this.promisedDevPagesManifest = fetch("".concat(this.assetPrefix, "/_next/static/development/_devPagesManifest.json")).then(function (res) {
              return res.json();
            }).then(function (manifest) {
              ;
              window.__DEV_PAGES_MANIFEST = manifest;
              return manifest.pages;
            })["catch"](function (err) {
              console.log("Failed to fetch devPagesManifest", err);
            });
          }

          return this.promisedDevPagesManifest;
        }
      }
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    * @returns {string}
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath, ssg, locale) {
      var _this = this;

      var _ref = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref.pathname,
          query = _ref.query,
          search = _ref.search;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _getAssetPathFromRoute["default"])((0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _router.addLocale)(path, locale)), '.json');
        return (0, _router.addBasePath)("/_next/data/".concat(_this.buildId).concat(dataRoute).concat(ssg ? '' : search));
      };

      var isDynamic = (0, _isDynamic.isDynamicRoute)(route);
      var interpolatedRoute = isDynamic ? (0, _router.interpolateAs)(hrefPathname, asPathname, query).result : '';
      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} route - the route (file-system path)
    */

  }, {
    key: "_isSsg",
    value: function _isSsg(route) {
      return this.promisedSsgManifest.then(function (s) {
        return s.has(route);
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.routeLoader.loadRoute(route).then(function (res) {
        if ('component' in res) {
          return {
            page: res.component,
            mod: res.exports,
            styleSheets: res.styles.map(function (o) {
              return {
                href: o.href,
                text: o.content
              };
            })
          };
        }

        throw res.error;
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch(route) {
      return this.routeLoader.prefetch(route);
    }
  }]);

  return PageLoader;
}();

exports.default = PageLoader;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/portal/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/portal/index.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.Portal = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var Portal = function Portal(_ref) {
  _s();

  var children = _ref.children,
      type = _ref.type;
  var portalNode = React.useRef(null);

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  React.useEffect(function () {
    portalNode.current = document.createElement(type);
    document.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current) {
        document.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? /*#__PURE__*/(0, _reactDom.createPortal)(children, portalNode.current) : null;
};

_s(Portal, "H9Jq/p5GRHpyHVgd55qLy9aYECA=");

_c = Portal;
exports.Portal = Portal;

var _c;

$RefreshReg$(_c, "Portal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/route-announcer.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/client/route-announcer.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.RouteAnnouncer = RouteAnnouncer;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function RouteAnnouncer() {
  var _ref = (0, _router.useRouter)(),
      asPath = _ref.asPath;

  var _ref2 = (0, _react.useState)(''),
      _ref3 = _slicedToArray(_ref2, 2),
      routeAnnouncement = _ref3[0],
      setRouteAnnouncement = _ref3[1]; // Only announce the path change, but not for the first load because screen reader will do that automatically.


  var initialPathLoaded = (0, _react.useRef)(false); // Every time the path changes, announce the route change. The announcement will be prioritized by h1, then title
  // (from metadata), and finally if those don't exist, then the pathName that is in the URL. This methodology is
  // inspired by Marcy Sutton's accessible client routing user testing. More information can be found here:
  // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/

  (0, _react.useEffect)(function () {
    if (!initialPathLoaded.current) {
      initialPathLoaded.current = true;
      return;
    }

    var newRouteAnnouncement;
    var pageHeader = document.querySelector('h1');

    if (pageHeader) {
      newRouteAnnouncement = pageHeader.innerText || pageHeader.textContent;
    }

    if (!newRouteAnnouncement) {
      if (document.title) {
        newRouteAnnouncement = document.title;
      } else {
        newRouteAnnouncement = asPath;
      }
    }

    setRouteAnnouncement(newRouteAnnouncement);
  }, // TODO: switch to pathname + query object of dynamic route requirements
  [asPath]);
  return /*#__PURE__*/_react["default"].createElement("p", {
    "aria-live": "assertive" // Make the announcement immediately.
    ,
    id: "__next-route-announcer__",
    role: "alert",
    style: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: 'nowrap',
      wordWrap: 'normal'
    }
  }, routeAnnouncement);
}

_c = RouteAnnouncer;
var _default = RouteAnnouncer;
exports.default = _default;

var _c;

$RefreshReg$(_c, "RouteAnnouncer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route) {
      var _this = this;

      return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getFilesForRoute(assetPrefix, route);

              case 3:
                _yield$getFilesForRou = _context.sent;
                scripts = _yield$getFilesForRou.scripts;
                css = _yield$getFilesForRou.css;
                _context.next = 8;
                return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                styles = _yield$Promise$all2[1];
                _context.next = 13;
                return resolvePromiseWithTimeout(_this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))));

              case 13:
                entrypoint = _context.sent;
                res = Object.assign({
                  styles: styles
                }, entrypoint);
                return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      })));
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route);
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2hvdC1kZXYtY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvZGV2L3dlYnBhY2staG90LW1pZGRsZXdhcmUtY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9uZXh0LWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9wYWdlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9wb3J0YWwvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L3JvdXRlLWFubm91bmNlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbImhhZFJ1bnRpbWVFcnJvciIsIkRldk92ZXJsYXkiLCJldmVudCIsInByb2Nlc3NNZXNzYWdlIiwiY29uc29sZSIsInN1YnNjcmliZVRvSG1yRXZlbnQiLCJjdXN0b21IbXJFdmVudEhhbmRsZXIiLCJvblVucmVjb3ZlcmFibGVFcnJvciIsImlzRmlyc3RDb21waWxhdGlvbiIsIm1vc3RSZWNlbnRDb21waWxhdGlvbkhhc2giLCJoYXNDb21waWxlRXJyb3JzIiwiY2xlYXJPdXRkYXRlZEVycm9ycyIsImlzSG90VXBkYXRlIiwidHJ5QXBwbHlVcGRhdGVzIiwib25GYXN0UmVmcmVzaCIsImZvcm1hdHRlZCIsIndhcm5pbmdzIiwiZXJyb3JzIiwiaSIsInByaW50V2FybmluZ3MiLCJwcm9jZXNzIiwic2VsZiIsIm9iaiIsIkpTT04iLCJlIiwiaGFuZGxlQXZhaWxhYmxlSGFzaCIsImhhc0Vycm9ycyIsIkJvb2xlYW4iLCJoYW5kbGVFcnJvcnMiLCJoYXNXYXJuaW5ncyIsImhhbmRsZVdhcm5pbmdzIiwiaGFuZGxlU3VjY2VzcyIsIm1vZHVsZSIsImNhbkFwcGx5VXBkYXRlcyIsImZuIiwic3RhdHVzIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJlcnIiLCJ3aW5kb3ciLCJoYXNVcGRhdGVzIiwidXBkYXRlZE1vZHVsZXMiLCJvbkhvdFVwZGF0ZVN1Y2Nlc3MiLCJhZnRlckFwcGx5VXBkYXRlcyIsImhhbmRsZUFwcGx5VXBkYXRlcyIsIlJvdXRlciIsInNldHVwUGluZyIsImN1cnJlbnRQYWdlIiwiZG9jdW1lbnQiLCJfZXZlbnQiLCJzdGF0ZSIsImRldkNsaWVudCIsInBhZ2UiLCJkYXRhIiwidmVyc2lvbiIsIl9fTkVYVF9WRVJTSU9OIiwibG9vc2VUb0FycmF5IiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZUVyciIsImlzRmFsbGJhY2siLCJkZWZhdWx0TG9jYWxlIiwicHJlZml4IiwiYXNzZXRQcmVmaXgiLCJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyIsImVudkNvbmZpZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwicnVudGltZUNvbmZpZyIsImFzUGF0aCIsInBhZ2VMb2FkZXIiLCJQYWdlTG9hZGVyIiwicmVnaXN0ZXIiLCJwIiwic2V0VGltZW91dCIsImhlYWRNYW5hZ2VyIiwiYXBwRWxlbWVudCIsImNvbXBvbmVudERpZE1vdW50Iiwicm91dGVyIiwibG9jYXRpb24iLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIl9oIiwic2hhbGxvdyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJlbCIsInJlbmRlciIsInJlcXVpcmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImVtaXR0ZXIiLCJvcHRzIiwid2VicGFja0hNUiIsImluaXRpYWxFcnIiLCJhcHBFbnRyeXBvaW50IiwiY29tcG9uZW50IiwiZXhwb3J0cyIsIkNhY2hlZEFwcCIsIm1vZCIsIm9uUGVyZkVudHJ5IiwidW5pcXVlSUQiLCJEYXRlIiwiTWF0aCIsImVudHJpZXMiLCJwZXJmU3RhcnRFbnRyeSIsImlkIiwibmFtZSIsInN0YXJ0VGltZSIsInZhbHVlIiwibGFiZWwiLCJlbnRyeVR5cGUiLCJlcnJvciIsInBhZ2VFbnRyeXBvaW50IiwiQ2FjaGVkQ29tcG9uZW50IiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwibm9kZSIsImdldE5vZGVFcnJvciIsImluaXRpYWxQcm9wcyIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJPYmplY3QiLCJzY3JvbGwiLCJsb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImlzUHJldmlldyIsInJlbmRlckN0eCIsImluaXRpYWwiLCJwcm9wcyIsInJlbmRlcmluZ1Byb3BzIiwicmVuZGVyRXJyb3IiLCJkb1JlbmRlciIsInJlbmRlckVyciIsInN0eWxlU2hlZXRzIiwiQXBwVHJlZSIsImFwcEN0eCIsImN0eCIsInBhdGhuYW1lIiwicXVlcnkiLCJQcm9taXNlIiwicmVuZGVyRXJyb3JQcm9wcyIsImluaXRQcm9wcyIsInJlYWN0Um9vdCIsInNob3VsZFVzZUh5ZHJhdGUiLCJSZWFjdERPTSIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhck1hcmtzIiwibmF2U3RhcnRFbnRyaWVzIiwibWVhc3VyZSIsIm1hcmsiLCJ3cmFwcGVkQXBwUHJvcHMiLCJhcHBQcm9wcyIsImlucHV0IiwibGFzdEFwcFByb3BzIiwiY2FuY2VsZWQiLCJyZW5kZXJQcm9taXNlIiwibGFzdFJlbmRlclJlamVjdCIsInJlc29sdmVQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImN1cnJlbnRTdHlsZVRhZ3MiLCJjdXJyZW50SHJlZnMiLCJ0YWciLCJub3NjcmlwdCIsIm5vbmNlIiwic3R5bGVUYWciLCJlbGVtIiwib25TdGFydCIsInJlbmRlclJlYWN0RWxlbWVudCIsImNhbGxiYWNrIiwiX19SRVBMQUNFX05PT1BfSU1QT1JUX18iLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSW5kaWNhdG9ySGFuZGxlciIsImZldGNoIiwicmVzIiwibWFuaWZlc3QiLCJwYWdlcyIsImNsZWFySW5kaWNhdG9yIiwiZGV2UGFnZXNNYW5pZmVzdExpc3RlbmVyIiwiaGFuZGxlciIsInJvdXRlIiwiY29uc3RydWN0b3IiLCJidWlsZElkIiwicHJvbWlzZWRTc2dNYW5pZmVzdCIsInByb21pc2VkRGV2UGFnZXNNYW5pZmVzdCIsInJvdXRlTG9hZGVyIiwiZ2V0UGFnZUxpc3QiLCJub3JtYWxpemVSb3V0ZSIsImdldEhyZWZGb3JTbHVnIiwicGF0aCIsImRhdGFSb3V0ZSIsInNzZyIsImlzRHluYW1pYyIsImludGVycG9sYXRlZFJvdXRlIiwicyIsImxvYWRQYWdlIiwibyIsImhyZWYiLCJ0ZXh0IiwicHJlZmV0Y2giLCJQb3J0YWwiLCJwb3J0YWxOb2RlIiwiZm9yY2VVcGRhdGUiLCJpbml0aWFsUGF0aExvYWRlZCIsInBhZ2VIZWFkZXIiLCJuZXdSb3V0ZUFubm91bmNlbWVudCIsInNldFJvdXRlQW5ub3VuY2VtZW50IiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm1hcmdpbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwid2lkdGgiLCJ3aGl0ZVNwYWNlIiwid29yZFdyYXAiLCJSb3V0ZUFubm91bmNlciIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJwcm9tIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJjYiIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDWHJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNMckUsdUJBQXVCLG1CQUFPLENBQUMs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LEVBQVA7QUFHRjs7QUFBQSxtQkFBaUIsQ0FBakIsa0JBQW9DWSxpQkFBaUIsQ0FBQ0MsZUFBdEQsQ0FDQTtBQURBO0FBRUVDLG1CQUFELG9CQUFDQSxHQUFpREYsaUJBQUQsQ0FBakQsbUJBQUNFOztBQUNGLFlBQTJDO0FBQ3pDLFFBQU1qTCxJQUFJLEdBQ1IrSyxpQkFBaUIsQ0FBakJBLGVBQWlDQSxpQkFBaUIsQ0FBbERBLFFBREY7QUFFQUUscUJBQWlCLENBQWpCQTtBQUdGOztBQUFBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd0dBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svbWFpbi43NDBlNzVhNTZiOTc2ZjJiNjBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG5cbi8vIFRoaXMgZmlsZSBpcyBhIG1vZGlmaWVkIHZlcnNpb24gb2YgdGhlIENyZWF0ZSBSZWFjdCBBcHAgSE1SIGRldiBjbGllbnQgdGhhdFxuLy8gY2FuIGJlIGZvdW5kIGhlcmU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9ibG9iL3YzLjQuMS9wYWNrYWdlcy9yZWFjdC1kZXYtdXRpbHMvd2VicGFja0hvdERldkNsaWVudC5qc1xuXG5pbXBvcnQgKiBhcyBEZXZPdmVybGF5IGZyb20gJ0BuZXh0L3JlYWN0LWRldi1vdmVybGF5L2xpYi9jbGllbnQnXG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9zdHJpcC1hbnNpJ1xuaW1wb3J0IHsgYWRkTWVzc2FnZUxpc3RlbmVyIH0gZnJvbSAnLi9ldmVudHNvdXJjZSdcbmltcG9ydCBmb3JtYXRXZWJwYWNrTWVzc2FnZXMgZnJvbSAnLi9mb3JtYXQtd2VicGFjay1tZXNzYWdlcydcblxuLy8gVGhpcyBhbHRlcm5hdGl2ZSBXZWJwYWNrRGV2U2VydmVyIGNvbWJpbmVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay1kZXYtc2VydmVyL2Jsb2Ivd2VicGFjay0xL2NsaWVudC9pbmRleC5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL3dlYnBhY2stMS9ob3QvZGV2LXNlcnZlci5qc1xuXG4vLyBJdCBvbmx5IHN1cHBvcnRzIHRoZWlyIHNpbXBsZXN0IGNvbmZpZ3VyYXRpb24gKGhvdCB1cGRhdGVzIG9uIHNhbWUgc2VydmVyKS5cbi8vIEl0IG1ha2VzIHNvbWUgb3BpbmlvbmF0ZWQgY2hvaWNlcyBvbiB0b3AsIGxpa2UgYWRkaW5nIGEgc3ludGF4IGVycm9yIG92ZXJsYXlcbi8vIHRoYXQgbG9va3Mgc2ltaWxhciB0byBvdXIgY29uc29sZSBvdXRwdXQuIFRoZSBlcnJvciBvdmVybGF5IGlzIGluc3BpcmVkIGJ5OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlXG5cbmxldCBoYWRSdW50aW1lRXJyb3IgPSBmYWxzZVxubGV0IGN1c3RvbUhtckV2ZW50SGFuZGxlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgRGV2T3ZlcmxheS5yZWdpc3RlcigpXG5cbiAgYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICAgIC8vIFRoaXMgaXMgdGhlIGhlYXJ0YmVhdCBldmVudFxuICAgIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKGV2ZW50KVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmVUb0htckV2ZW50KGhhbmRsZXIpIHtcbiAgICAgIGN1c3RvbUhtckV2ZW50SGFuZGxlciA9IGhhbmRsZXJcbiAgICB9LFxuICAgIG9uVW5yZWNvdmVyYWJsZUVycm9yKCkge1xuICAgICAgaGFkUnVudGltZUVycm9yID0gdHJ1ZVxuICAgIH0sXG4gIH1cbn1cblxuLy8gUmVtZW1iZXIgc29tZSBzdGF0ZSByZWxhdGVkIHRvIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQuXG52YXIgaXNGaXJzdENvbXBpbGF0aW9uID0gdHJ1ZVxudmFyIG1vc3RSZWNlbnRDb21waWxhdGlvbkhhc2ggPSBudWxsXG52YXIgaGFzQ29tcGlsZUVycm9ycyA9IGZhbHNlXG5cbmZ1bmN0aW9uIGNsZWFyT3V0ZGF0ZWRFcnJvcnMoKSB7XG4gIC8vIENsZWFuIHVwIG91dGRhdGVkIGNvbXBpbGUgZXJyb3JzLCBpZiBhbnkuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuY2xlYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoaGFzQ29tcGlsZUVycm9ycykge1xuICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgfVxuICB9XG59XG5cbi8vIFN1Y2Nlc3NmdWwgY29tcGlsYXRpb24uXG5mdW5jdGlvbiBoYW5kbGVTdWNjZXNzKCkge1xuICBjbGVhck91dGRhdGVkRXJyb3JzKClcblxuICBjb25zdCBpc0hvdFVwZGF0ZSA9ICFpc0ZpcnN0Q29tcGlsYXRpb25cbiAgaXNGaXJzdENvbXBpbGF0aW9uID0gZmFsc2VcbiAgaGFzQ29tcGlsZUVycm9ycyA9IGZhbHNlXG5cbiAgLy8gQXR0ZW1wdCB0byBhcHBseSBob3QgdXBkYXRlcyBvciByZWxvYWQuXG4gIGlmIChpc0hvdFVwZGF0ZSkge1xuICAgIHRyeUFwcGx5VXBkYXRlcyhmdW5jdGlvbiBvblN1Y2Nlc3NmdWxIb3RVcGRhdGUoaGFzVXBkYXRlcykge1xuICAgICAgLy8gT25seSBkaXNtaXNzIGl0IHdoZW4gd2UncmUgc3VyZSBpdCdzIGEgaG90IHVwZGF0ZS5cbiAgICAgIC8vIE90aGVyd2lzZSBpdCB3b3VsZCBmbGlja2VyIHJpZ2h0IGJlZm9yZSB0aGUgcmVsb2FkLlxuICAgICAgb25GYXN0UmVmcmVzaChoYXNVcGRhdGVzKVxuICAgIH0pXG4gIH1cbn1cblxuLy8gQ29tcGlsYXRpb24gd2l0aCB3YXJuaW5ncyAoZS5nLiBFU0xpbnQpLlxuZnVuY3Rpb24gaGFuZGxlV2FybmluZ3Mod2FybmluZ3MpIHtcbiAgY2xlYXJPdXRkYXRlZEVycm9ycygpXG5cbiAgY29uc3QgaXNIb3RVcGRhdGUgPSAhaXNGaXJzdENvbXBpbGF0aW9uXG4gIGlzRmlyc3RDb21waWxhdGlvbiA9IGZhbHNlXG4gIGhhc0NvbXBpbGVFcnJvcnMgPSBmYWxzZVxuXG4gIGZ1bmN0aW9uIHByaW50V2FybmluZ3MoKSB7XG4gICAgLy8gUHJpbnQgd2FybmluZ3MgdG8gdGhlIGNvbnNvbGUuXG4gICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0V2VicGFja01lc3NhZ2VzKHtcbiAgICAgIHdhcm5pbmdzOiB3YXJuaW5ncyxcbiAgICAgIGVycm9yczogW10sXG4gICAgfSlcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWQud2FybmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAnVGhlcmUgd2VyZSBtb3JlIHdhcm5pbmdzIGluIG90aGVyIGZpbGVzLlxcbicgK1xuICAgICAgICAgICAgICAnWW91IGNhbiBmaW5kIGEgY29tcGxldGUgbG9nIGluIHRoZSB0ZXJtaW5hbC4nXG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKHN0cmlwQW5zaShmb3JtYXR0ZWQud2FybmluZ3NbaV0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaW50V2FybmluZ3MoKVxuXG4gIC8vIEF0dGVtcHQgdG8gYXBwbHkgaG90IHVwZGF0ZXMgb3IgcmVsb2FkLlxuICBpZiAoaXNIb3RVcGRhdGUpIHtcbiAgICB0cnlBcHBseVVwZGF0ZXMoZnVuY3Rpb24gb25TdWNjZXNzZnVsSG90VXBkYXRlKGhhc1VwZGF0ZXMpIHtcbiAgICAgIC8vIE9ubHkgZGlzbWlzcyBpdCB3aGVuIHdlJ3JlIHN1cmUgaXQncyBhIGhvdCB1cGRhdGUuXG4gICAgICAvLyBPdGhlcndpc2UgaXQgd291bGQgZmxpY2tlciByaWdodCBiZWZvcmUgdGhlIHJlbG9hZC5cbiAgICAgIG9uRmFzdFJlZnJlc2goaGFzVXBkYXRlcylcbiAgICB9KVxuICB9XG59XG5cbi8vIENvbXBpbGF0aW9uIHdpdGggZXJyb3JzIChlLmcuIHN5bnRheCBlcnJvciBvciBtaXNzaW5nIG1vZHVsZXMpLlxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKGVycm9ycykge1xuICBjbGVhck91dGRhdGVkRXJyb3JzKClcblxuICBpc0ZpcnN0Q29tcGlsYXRpb24gPSBmYWxzZVxuICBoYXNDb21waWxlRXJyb3JzID0gdHJ1ZVxuXG4gIC8vIFwiTWFzc2FnZVwiIHdlYnBhY2sgbWVzc2FnZXMuXG4gIHZhciBmb3JtYXR0ZWQgPSBmb3JtYXRXZWJwYWNrTWVzc2FnZXMoe1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHdhcm5pbmdzOiBbXSxcbiAgfSlcblxuICAvLyBPbmx5IHNob3cgdGhlIGZpcnN0IGVycm9yLlxuICBEZXZPdmVybGF5Lm9uQnVpbGRFcnJvcihmb3JtYXR0ZWQuZXJyb3JzWzBdKVxuXG4gIC8vIEFsc28gbG9nIHRoZW0gdG8gdGhlIGNvbnNvbGUuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHRlZC5lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioc3RyaXBBbnNpKGZvcm1hdHRlZC5lcnJvcnNbaV0pKVxuICAgIH1cbiAgfVxuXG4gIC8vIERvIG5vdCBhdHRlbXB0IHRvIHJlbG9hZCBub3cuXG4gIC8vIFdlIHdpbGwgcmVsb2FkIG9uIG5leHQgc3VjY2VzcyBpbnN0ZWFkLlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1RFU1RfTU9ERSkge1xuICAgIGlmIChzZWxmLl9fTkVYVF9ITVJfQ0IpIHtcbiAgICAgIHNlbGYuX19ORVhUX0hNUl9DQihmb3JtYXR0ZWQuZXJyb3JzWzBdKVxuICAgICAgc2VsZi5fX05FWFRfSE1SX0NCID0gbnVsbFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvbkZhc3RSZWZyZXNoKGhhc1VwZGF0ZXMpIHtcbiAgRGV2T3ZlcmxheS5vbkJ1aWxkT2soKVxuICBpZiAoaGFzVXBkYXRlcykge1xuICAgIERldk92ZXJsYXkub25SZWZyZXNoKClcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbRmFzdCBSZWZyZXNoXSBkb25lJylcbn1cblxuLy8gVGhlcmUgaXMgYSBuZXdlciB2ZXJzaW9uIG9mIHRoZSBjb2RlIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGhhbmRsZUF2YWlsYWJsZUhhc2goaGFzaCkge1xuICAvLyBVcGRhdGUgbGFzdCBrbm93biBjb21waWxhdGlvbiBoYXNoLlxuICBtb3N0UmVjZW50Q29tcGlsYXRpb25IYXNoID0gaGFzaFxufVxuXG4vLyBIYW5kbGUgbWVzc2FnZXMgZnJvbSB0aGUgc2VydmVyLlxuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UoZSkge1xuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGUuZGF0YSlcbiAgc3dpdGNoIChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSAnYnVpbGRpbmcnOiB7XG4gICAgICBjb25zb2xlLmxvZygnW0Zhc3QgUmVmcmVzaF0gcmVidWlsZGluZycpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlICdidWlsdCc6XG4gICAgY2FzZSAnc3luYyc6IHtcbiAgICAgIGlmIChvYmouaGFzaCkge1xuICAgICAgICBoYW5kbGVBdmFpbGFibGVIYXNoKG9iai5oYXNoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVycm9ycywgd2FybmluZ3MgfSA9IG9ialxuICAgICAgY29uc3QgaGFzRXJyb3JzID0gQm9vbGVhbihlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aClcbiAgICAgIGlmIChoYXNFcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9ycyhlcnJvcnMpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhc1dhcm5pbmdzID0gQm9vbGVhbih3YXJuaW5ncyAmJiB3YXJuaW5ncy5sZW5ndGgpXG4gICAgICBpZiAoaGFzV2FybmluZ3MpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVdhcm5pbmdzKHdhcm5pbmdzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlU3VjY2VzcygpXG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGlmIChjdXN0b21IbXJFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgY3VzdG9tSG1yRXZlbnRIYW5kbGVyKG9iailcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5cbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gIC8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIHJldHVybiBtb3N0UmVjZW50Q29tcGlsYXRpb25IYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5mdW5jdGlvbiBhZnRlckFwcGx5VXBkYXRlcyhmbikge1xuICBpZiAoY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICBmbigpXG4gIH0gZWxzZSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdpZGxlJykge1xuICAgICAgICBtb2R1bGUuaG90LnJlbW92ZVN0YXR1c0hhbmRsZXIoaGFuZGxlcilcbiAgICAgICAgZm4oKVxuICAgICAgfVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoaGFuZGxlcilcbiAgfVxufVxuXG4vLyBBdHRlbXB0IHRvIHVwZGF0ZSBjb2RlIG9uIHRoZSBmbHksIGZhbGwgYmFjayB0byBhIGhhcmQgcmVsb2FkLlxuZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKG9uSG90VXBkYXRlU3VjY2Vzcykge1xuICBpZiAoIW1vZHVsZS5ob3QpIHtcbiAgICAvLyBIb3RNb2R1bGVSZXBsYWNlbWVudFBsdWdpbiBpcyBub3QgaW4gV2VicGFjayBjb25maWd1cmF0aW9uLlxuICAgIGNvbnNvbGUuZXJyb3IoJ0hvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIGlzIG5vdCBpbiBXZWJwYWNrIGNvbmZpZ3VyYXRpb24uJylcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcHBseVVwZGF0ZXMoZXJyLCB1cGRhdGVkTW9kdWxlcykge1xuICAgIGlmIChlcnIgfHwgaGFkUnVudGltZUVycm9yIHx8ICF1cGRhdGVkTW9kdWxlcykge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1tGYXN0IFJlZnJlc2hdIHBlcmZvcm1pbmcgZnVsbCByZWxvYWRcXG5cXG4nICtcbiAgICAgICAgICAgIFwiRmFzdCBSZWZyZXNoIHdpbGwgcGVyZm9ybSBhIGZ1bGwgcmVsb2FkIHdoZW4geW91IGVkaXQgYSBmaWxlIHRoYXQncyBpbXBvcnRlZCBieSBtb2R1bGVzIG91dHNpZGUgb2YgdGhlIFJlYWN0IHJlbmRlcmluZyB0cmVlLlxcblwiICtcbiAgICAgICAgICAgICdZb3UgbWlnaHQgaGF2ZSBhIGZpbGUgd2hpY2ggZXhwb3J0cyBhIFJlYWN0IGNvbXBvbmVudCBidXQgYWxzbyBleHBvcnRzIGEgdmFsdWUgdGhhdCBpcyBpbXBvcnRlZCBieSBhIG5vbi1SZWFjdCBjb21wb25lbnQgZmlsZS5cXG4nICtcbiAgICAgICAgICAgICdDb25zaWRlciBtaWdyYXRpbmcgdGhlIG5vbi1SZWFjdCBjb21wb25lbnQgZXhwb3J0IHRvIGEgc2VwYXJhdGUgZmlsZSBhbmQgaW1wb3J0aW5nIGl0IGludG8gYm90aCBmaWxlcy5cXG5cXG4nICtcbiAgICAgICAgICAgICdJdCBpcyBhbHNvIHBvc3NpYmxlIHRoZSBwYXJlbnQgY29tcG9uZW50IG9mIHRoZSBjb21wb25lbnQgeW91IGVkaXRlZCBpcyBhIGNsYXNzIGNvbXBvbmVudCwgd2hpY2ggZGlzYWJsZXMgRmFzdCBSZWZyZXNoLlxcbicgK1xuICAgICAgICAgICAgJ0Zhc3QgUmVmcmVzaCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgcGFyZW50IGZ1bmN0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0IHRyZWUuJ1xuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGhhZFJ1bnRpbWVFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1tGYXN0IFJlZnJlc2hdIHBlcmZvcm1pbmcgZnVsbCByZWxvYWQgYmVjYXVzZSB5b3VyIGFwcGxpY2F0aW9uIGhhZCBhbiB1bnJlY292ZXJhYmxlIGVycm9yJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhhc1VwZGF0ZXMgPSBCb29sZWFuKHVwZGF0ZWRNb2R1bGVzLmxlbmd0aClcbiAgICBpZiAodHlwZW9mIG9uSG90VXBkYXRlU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gTWF5YmUgd2Ugd2FudCB0byBkbyBzb21ldGhpbmcuXG4gICAgICBvbkhvdFVwZGF0ZVN1Y2Nlc3MoaGFzVXBkYXRlcylcbiAgICB9XG5cbiAgICBpZiAoaXNVcGRhdGVBdmFpbGFibGUoKSkge1xuICAgICAgLy8gV2hpbGUgd2Ugd2VyZSB1cGRhdGluZywgdGhlcmUgd2FzIGEgbmV3IHVwZGF0ZSEgRG8gaXQgYWdhaW4uXG4gICAgICB0cnlBcHBseVVwZGF0ZXMoaGFzVXBkYXRlcyA/IHVuZGVmaW5lZCA6IG9uSG90VXBkYXRlU3VjY2VzcylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9URVNUX01PREUpIHtcbiAgICAgICAgYWZ0ZXJBcHBseVVwZGF0ZXMoKCkgPT4ge1xuICAgICAgICAgIGlmIChzZWxmLl9fTkVYVF9ITVJfQ0IpIHtcbiAgICAgICAgICAgIHNlbGYuX19ORVhUX0hNUl9DQigpXG4gICAgICAgICAgICBzZWxmLl9fTkVYVF9ITVJfQ0IgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHBzOi8vd2VicGFjay5qcy5vcmcvYXBpL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnQvI2NoZWNrXG4gIG1vZHVsZS5ob3QuY2hlY2soLyogYXV0b0FwcGx5ICovIHRydWUpLnRoZW4oXG4gICAgKHVwZGF0ZWRNb2R1bGVzKSA9PiB7XG4gICAgICBoYW5kbGVBcHBseVVwZGF0ZXMobnVsbCwgdXBkYXRlZE1vZHVsZXMpXG4gICAgfSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBoYW5kbGVBcHBseVVwZGF0ZXMoZXJyLCBudWxsKVxuICAgIH1cbiAgKVxufVxuIiwiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHNldHVwUGluZywgY3VycmVudFBhZ2UsIGNsb3NlUGluZyB9IGZyb20gJy4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IGFzc2V0UHJlZml4IH0pID0+IHtcbiAgUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFxuICAgICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICAgc2V0dXBQaW5nLmJpbmQodGhpcywgYXNzZXRQcmVmaXgsICgpID0+IFJvdXRlci5wYXRobmFtZSlcbiAgICApXG4gIH0pXG5cbiAgc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBSb3V0ZXIucGF0aG5hbWUsIGN1cnJlbnRQYWdlKVxuXG4gIC8vIHByZXZlbnQgSE1SIGNvbm5lY3Rpb24gZnJvbSBiZWluZyBjbG9zZWQgd2hlbiBydW5uaW5nIHRlc3RzXG4gIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1RFU1RfTU9ERSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoX2V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgaWYgKHN0YXRlID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBSb3V0ZXIucGF0aG5hbWUsIHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZVBpbmcoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgY2xvc2VQaW5nKClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgY29ubmVjdCBmcm9tICcuL2Vycm9yLW92ZXJsYXkvaG90LWRldi1jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZGV2Q2xpZW50ID0gY29ubmVjdCgpXG5cbiAgZGV2Q2xpZW50LnN1YnNjcmliZVRvSG1yRXZlbnQoKG9iaikgPT4ge1xuICAgIGlmIChvYmouYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gICAgaWYgKG9iai5hY3Rpb24gPT09ICdyZW1vdmVkUGFnZScpIHtcbiAgICAgIGNvbnN0IFtwYWdlXSA9IG9iai5kYXRhXG4gICAgICBpZiAocGFnZSA9PT0gd2luZG93Lm5leHQucm91dGVyLnBhdGhuYW1lKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAob2JqLmFjdGlvbiA9PT0gJ2FkZGVkUGFnZScpIHtcbiAgICAgIGNvbnN0IFtwYWdlXSA9IG9iai5kYXRhXG4gICAgICBpZiAoXG4gICAgICAgIHBhZ2UgPT09IHdpbmRvdy5uZXh0LnJvdXRlci5wYXRobmFtZSAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93Lm5leHQucm91dGVyLmNvbXBvbmVudHNbcGFnZV0gPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBhY3Rpb24gJyArIG9iai5hY3Rpb24pXG4gIH0pXG5cbiAgcmV0dXJuIGRldkNsaWVudFxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5pbXBvcnQgJ0BuZXh0L3BvbHlmaWxsLW1vZHVsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9taXR0J1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcbmltcG9ydCBSb3V0ZXIsIHtcbiAgQXBwQ29tcG9uZW50LFxuICBBcHBQcm9wcyxcbiAgZGVsQmFzZVBhdGgsXG4gIGhhc0Jhc2VQYXRoLFxuICBQcml2YXRlUm91dGVJbmZvLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIGVudkNvbmZpZyBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcnXG5pbXBvcnQge1xuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5FWFRfREFUQSxcbiAgU1QsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4vcG9ydGFsJ1xuaW1wb3J0IGluaXRIZWFkTWFuYWdlciBmcm9tICcuL2hlYWQtbWFuYWdlcidcbmltcG9ydCBQYWdlTG9hZGVyLCB7IFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4vcGFnZS1sb2FkZXInXG5pbXBvcnQgbWVhc3VyZVdlYlZpdGFscyBmcm9tICcuL3BlcmZvcm1hbmNlLXJlbGF5ZXInXG5pbXBvcnQgeyBSb3V0ZUFubm91bmNlciB9IGZyb20gJy4vcm91dGUtYW5ub3VuY2VyJ1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBtYWtlUHVibGljUm91dGVySW5zdGFuY2UgfSBmcm9tICcuL3JvdXRlcidcblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyZWFjdC1kb20vZXhwZXJpbWVudGFsXCIgLz5cblxuZGVjbGFyZSBsZXQgX193ZWJwYWNrX3B1YmxpY19wYXRoX186IHN0cmluZ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHRlc3QgZm5zICovXG4gICAgX19ORVhUX0hZRFJBVEVEPzogYm9vbGVhblxuICAgIF9fTkVYVF9IWURSQVRFRF9DQj86ICgpID0+IHZvaWRcblxuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfUFJFTE9BRFJFQURZPzogKGlkcz86IHN0cmluZ1tdKSA9PiB2b2lkXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gICAgX19ORVhUX1A6IGFueVtdXG4gIH1cbn1cblxudHlwZSBSZW5kZXJSb3V0ZUluZm8gPSBQcml2YXRlUm91dGVJbmZvICYge1xuICBBcHA6IEFwcENvbXBvbmVudFxuICBzY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG59XG50eXBlIFJlbmRlckVycm9yUHJvcHMgPSBPbWl0PFJlbmRlclJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnc3R5bGVTaGVldHMnPlxuXG5jb25zdCBkYXRhOiB0eXBlb2Ygd2luZG93WydfX05FWFRfREFUQV9fJ10gPSBKU09OLnBhcnNlKFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpIS50ZXh0Q29udGVudCFcbilcbndpbmRvdy5fX05FWFRfREFUQV9fID0gZGF0YVxuXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9WRVJTSU9OXG5cbmNvbnN0IGxvb3NlVG9BcnJheSA9IDxUIGV4dGVuZHMge30+KGlucHV0OiBhbnkpOiBUW10gPT4gW10uc2xpY2UuY2FsbChpbnB1dClcblxuY29uc3Qge1xuICBwcm9wczogaHlkcmF0ZVByb3BzLFxuICBlcnI6IGh5ZHJhdGVFcnIsXG4gIHBhZ2UsXG4gIHF1ZXJ5LFxuICBidWlsZElkLFxuICBhc3NldFByZWZpeCxcbiAgcnVudGltZUNvbmZpZyxcbiAgZHluYW1pY0lkcyxcbiAgaXNGYWxsYmFjayxcbiAgbG9jYWxlLFxuICBsb2NhbGVzLFxuICBkb21haW5Mb2NhbGVzLFxuICBpc1ByZXZpZXcsXG59ID0gZGF0YVxuXG5sZXQgeyBkZWZhdWx0TG9jYWxlIH0gPSBkYXRhXG5cbmNvbnN0IHByZWZpeDogc3RyaW5nID0gYXNzZXRQcmVmaXggfHwgJydcblxuLy8gV2l0aCBkeW5hbWljIGFzc2V0UHJlZml4IGl0J3Mgbm8gbG9uZ2VyIHBvc3NpYmxlIHRvIHNldCBhc3NldFByZWZpeCBhdCB0aGUgYnVpbGQgdGltZVxuLy8gU28sIHRoaXMgaXMgaG93IHdlIGRvIGl0IGluIHRoZSBjbGllbnQgc2lkZSBhdCBydW50aW1lXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IGAke3ByZWZpeH0vX25leHQvYCAvL2VzbGludC1kaXNhYmxlLWxpbmVcbi8vIEluaXRpYWxpemUgbmV4dC9jb25maWcgd2l0aCB0aGUgZW52aXJvbm1lbnQgY29uZmlndXJhdGlvblxuZW52Q29uZmlnLnNldENvbmZpZyh7XG4gIHNlcnZlclJ1bnRpbWVDb25maWc6IHt9LFxuICBwdWJsaWNSdW50aW1lQ29uZmlnOiBydW50aW1lQ29uZmlnIHx8IHt9LFxufSlcblxubGV0IGFzUGF0aDogc3RyaW5nID0gZ2V0VVJMKClcblxuLy8gbWFrZSBzdXJlIG5vdCB0byBhdHRlbXB0IHN0cmlwcGluZyBiYXNlUGF0aCBmb3IgNDA0c1xuaWYgKGhhc0Jhc2VQYXRoKGFzUGF0aCkpIHtcbiAgYXNQYXRoID0gZGVsQmFzZVBhdGgoYXNQYXRoKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBjb25zdCB7XG4gICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgY29uc3Qge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuXG4gIGNvbnN0IHtcbiAgICBwYXJzZVJlbGF0aXZlVXJsLFxuICB9ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCcpXG5cbiAgY29uc3Qge1xuICAgIGZvcm1hdFVybCxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCcpXG5cbiAgaWYgKGxvY2FsZXMpIHtcbiAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCBsb2NhbGVzKVxuXG4gICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgYXNQYXRoID0gZm9ybWF0VXJsKHBhcnNlZEFzKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXJpdmUgdGhlIGRlZmF1bHQgbG9jYWxlIGlmIGl0IHdhc24ndCBkZXRlY3RlZCBpbiB0aGUgYXNQYXRoXG4gICAgICAvLyBzaW5jZSB3ZSBkb24ndCBwcmVyZW5kZXIgc3RhdGljIHBhZ2VzIHdpdGggYWxsIHBvc3NpYmxlIGRlZmF1bHRcbiAgICAgIC8vIGxvY2FsZXNcbiAgICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGVcbiAgICB9XG5cbiAgICAvLyBhdHRlbXB0IGRldGVjdGluZyBkZWZhdWx0IGxvY2FsZSBiYXNlZCBvbiBob3N0bmFtZVxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fRE9NQUlOUyBhcyBhbnksXG4gICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICApXG5cbiAgICAvLyBUT0RPOiBpbnZlc3RpZ2F0ZSBpZiBkZWZhdWx0TG9jYWxlIG5lZWRzIHRvIGJlIHBvcHVsYXRlZCBhZnRlclxuICAgIC8vIGh5ZHJhdGlvbiB0byBwcmV2ZW50IG1pc21hdGNoZWQgcmVuZGVyc1xuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICB9XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSICYmIGRhdGEuc2NyaXB0TG9hZGVyKSB7XG4gIGNvbnN0IHsgaW5pdFNjcmlwdExvYWRlciB9ID0gcmVxdWlyZSgnLi9leHBlcmltZW50YWwtc2NyaXB0JylcbiAgaW5pdFNjcmlwdExvYWRlcihkYXRhLnNjcmlwdExvYWRlcilcbn1cblxudHlwZSBSZWdpc3RlckZuID0gKGlucHV0OiBbc3RyaW5nLCAoKSA9PiB2b2lkXSkgPT4gdm9pZFxuXG5jb25zdCBwYWdlTG9hZGVyOiBQYWdlTG9hZGVyID0gbmV3IFBhZ2VMb2FkZXIoYnVpbGRJZCwgcHJlZml4KVxuY29uc3QgcmVnaXN0ZXI6IFJlZ2lzdGVyRm4gPSAoW3IsIGZdKSA9PlxuICBwYWdlTG9hZGVyLnJvdXRlTG9hZGVyLm9uRW50cnlwb2ludChyLCBmKVxuaWYgKHdpbmRvdy5fX05FWFRfUCkge1xuICAvLyBEZWZlciBwYWdlIHJlZ2lzdHJhdGlvbiBmb3IgYW5vdGhlciB0aWNrLiBUaGlzIHdpbGwgaW5jcmVhc2UgdGhlIG92ZXJhbGxcbiAgLy8gbGF0ZW5jeSBpbiBoeWRyYXRpbmcgdGhlIHBhZ2UsIGJ1dCByZWR1Y2UgdGhlIHRvdGFsIGJsb2NraW5nIHRpbWUuXG4gIHdpbmRvdy5fX05FWFRfUC5tYXAoKHApID0+IHNldFRpbWVvdXQoKCkgPT4gcmVnaXN0ZXIocCksIDApKVxufVxud2luZG93Ll9fTkVYVF9QID0gW11cbjsod2luZG93Ll9fTkVYVF9QIGFzIGFueSkucHVzaCA9IHJlZ2lzdGVyXG5cbmNvbnN0IGhlYWRNYW5hZ2VyOiB7XG4gIG1vdW50ZWRJbnN0YW5jZXM6IFNldDx1bmtub3duPlxuICB1cGRhdGVIZWFkOiAoaGVhZDogSlNYLkVsZW1lbnRbXSkgPT4gdm9pZFxufSA9IGluaXRIZWFkTWFuYWdlcigpXG5jb25zdCBhcHBFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JylcblxubGV0IGxhc3RSZW5kZXJSZWplY3Q6ICgoKSA9PiB2b2lkKSB8IG51bGxcbmxldCB3ZWJwYWNrSE1SOiBhbnlcbmV4cG9ydCBsZXQgcm91dGVyOiBSb3V0ZXJcbmxldCBDYWNoZWRBcHA6IEFwcENvbXBvbmVudCwgb25QZXJmRW50cnk6IChtZXRyaWM6IGFueSkgPT4gdm9pZFxuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xuICBmbjogKGVycjogRXJyb3IsIGluZm8/OiBhbnkpID0+IHZvaWRcbn0+IHtcbiAgY29tcG9uZW50RGlkQ2F0Y2goY29tcG9uZW50RXJyOiBFcnJvciwgaW5mbzogYW55KSB7XG4gICAgdGhpcy5wcm9wcy5mbihjb21wb25lbnRFcnIsIGluZm8pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvSGFzaCgpXG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHJvdXRlciBzdGF0ZSBpZjpcbiAgICAvLyAtIHRoZSBwYWdlIHdhcyAoYXV0bykgZXhwb3J0ZWQgYW5kIGhhcyBhIHF1ZXJ5IHN0cmluZyBvciBzZWFyY2ggKGhhc2gpXG4gICAgLy8gLSBpdCB3YXMgYXV0byBleHBvcnRlZCBhbmQgaXMgYSBkeW5hbWljIHJvdXRlICh0byBwcm92aWRlIHBhcmFtcylcbiAgICAvLyAtIGlmIGl0IGlzIGEgY2xpZW50LXNpZGUgc2tlbGV0b24gKGZhbGxiYWNrIHJlbmRlcilcbiAgICBpZiAoXG4gICAgICByb3V0ZXIuaXNTc3IgJiZcbiAgICAgIC8vIFdlIGRvbid0IHVwZGF0ZSBmb3IgNDA0IHJlcXVlc3RzIGFzIHRoaXMgY2FuIG1vZGlmeVxuICAgICAgLy8gdGhlIGFzUGF0aCB1bmV4cGVjdGVkbHkgZS5nLiBhZGRpbmcgYmFzZVBhdGggd2hlblxuICAgICAgLy8gaXQgd2Fzbid0IG9yaWdpbmFsbHkgcHJlc2VudFxuICAgICAgcGFnZSAhPT0gJy80MDQnICYmXG4gICAgICAhKFxuICAgICAgICBwYWdlID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgaHlkcmF0ZVByb3BzICYmXG4gICAgICAgIGh5ZHJhdGVQcm9wcy5wYWdlUHJvcHMgJiZcbiAgICAgICAgaHlkcmF0ZVByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID09PSA0MDRcbiAgICAgICkgJiZcbiAgICAgIChpc0ZhbGxiYWNrIHx8XG4gICAgICAgIChkYXRhLm5leHRFeHBvcnQgJiZcbiAgICAgICAgICAoaXNEeW5hbWljUm91dGUocm91dGVyLnBhdGhuYW1lKSB8fFxuICAgICAgICAgICAgbG9jYXRpb24uc2VhcmNoIHx8XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSkgfHxcbiAgICAgICAgKGh5ZHJhdGVQcm9wcyAmJlxuICAgICAgICAgIGh5ZHJhdGVQcm9wcy5fX05fU1NHICYmXG4gICAgICAgICAgKGxvY2F0aW9uLnNlYXJjaCB8fCBwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSkpXG4gICAgKSB7XG4gICAgICAvLyB1cGRhdGUgcXVlcnkgb24gbW91bnQgZm9yIGV4cG9ydGVkIHBhZ2VzXG4gICAgICByb3V0ZXIucmVwbGFjZShcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lICtcbiAgICAgICAgICAnPycgK1xuICAgICAgICAgIFN0cmluZyhcbiAgICAgICAgICAgIHF1ZXJ5c3RyaW5nLmFzc2lnbihcbiAgICAgICAgICAgICAgcXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhyb3V0ZXIucXVlcnkpLFxuICAgICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qc1xuICAgICAgICAgIC8vIGNsaWVudC1zaWRlIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuXG4gICAgICAgICAgLy8gSXQgbWF5IGNoYW5nZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICBfaDogMSxcbiAgICAgICAgICAvLyBGYWxsYmFjayBwYWdlcyBtdXN0IHRyaWdnZXIgdGhlIGRhdGEgZmV0Y2gsIHNvIHRoZSB0cmFuc2l0aW9uIGlzXG4gICAgICAgICAgLy8gbm90IHNoYWxsb3cuXG4gICAgICAgICAgLy8gT3RoZXIgcGFnZXMgKHN0cmljdGx5IHVwZGF0aW5nIHF1ZXJ5KSBoYXBwZW5zIHNoYWxsb3dseSwgYXMgZGF0YVxuICAgICAgICAgIC8vIHJlcXVpcmVtZW50cyB3b3VsZCBhbHJlYWR5IGJlIHByZXNlbnQuXG4gICAgICAgICAgc2hhbGxvdzogIWlzRmFsbGJhY2ssXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGxUb0hhc2goKVxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKCkge1xuICAgIGxldCB7IGhhc2ggfSA9IGxvY2F0aW9uXG4gICAgaGFzaCA9IGhhc2ggJiYgaGFzaC5zdWJzdHJpbmcoMSlcbiAgICBpZiAoIWhhc2gpIHJldHVyblxuXG4gICAgY29uc3QgZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKCFlbCkgcmV0dXJuXG5cbiAgICAvLyBJZiB3ZSBjYWxsIHNjcm9sbEludG9WaWV3KCkgaW4gaGVyZSB3aXRob3V0IGEgc2V0VGltZW91dFxuICAgIC8vIGl0IHdvbid0IHNjcm9sbCBwcm9wZXJseS5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsLnNjcm9sbEludG9WaWV3KCksIDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgUmVhY3REZXZPdmVybGF5IH0gPSByZXF1aXJlKCdAbmV4dC9yZWFjdC1kZXYtb3ZlcmxheS9saWIvY2xpZW50JylcbiAgICAgIHJldHVybiA8UmVhY3REZXZPdmVybGF5Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvUmVhY3REZXZPdmVybGF5PlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW1pdHRlcjogTWl0dEVtaXR0ZXIgPSBtaXR0KClcbmxldCBDYWNoZWRDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGVcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKG9wdHM6IHsgd2VicGFja0hNUj86IGFueSB9ID0ge30pID0+IHtcbiAgLy8gVGhpcyBtYWtlcyBzdXJlIHRoaXMgc3BlY2lmaWMgbGluZXMgYXJlIHJlbW92ZWQgaW4gcHJvZHVjdGlvblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB3ZWJwYWNrSE1SID0gb3B0cy53ZWJwYWNrSE1SXG4gIH1cblxuICBsZXQgaW5pdGlhbEVyciA9IGh5ZHJhdGVFcnJcblxuICB0cnkge1xuICAgIGNvbnN0IGFwcEVudHJ5cG9pbnQgPSBhd2FpdCBwYWdlTG9hZGVyLnJvdXRlTG9hZGVyLndoZW5FbnRyeXBvaW50KCcvX2FwcCcpXG4gICAgaWYgKCdlcnJvcicgaW4gYXBwRW50cnlwb2ludCkge1xuICAgICAgdGhyb3cgYXBwRW50cnlwb2ludC5lcnJvclxuICAgIH1cblxuICAgIGNvbnN0IHsgY29tcG9uZW50OiBhcHAsIGV4cG9ydHM6IG1vZCB9ID0gYXBwRW50cnlwb2ludFxuICAgIENhY2hlZEFwcCA9IGFwcCBhcyBBcHBDb21wb25lbnRcbiAgICBpZiAobW9kICYmIG1vZC5yZXBvcnRXZWJWaXRhbHMpIHtcbiAgICAgIG9uUGVyZkVudHJ5ID0gKHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlbnRyeVR5cGUsXG4gICAgICAgIGVudHJpZXMsXG4gICAgICB9KTogdm9pZCA9PiB7XG4gICAgICAgIC8vIENvbWJpbmVzIHRpbWVzdGFtcCB3aXRoIHJhbmRvbSBudW1iZXIgZm9yIHVuaXF1ZSBJRFxuICAgICAgICBjb25zdCB1bmlxdWVJRDogc3RyaW5nID0gYCR7RGF0ZS5ub3coKX0tJHtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOWUxMiAtIDEpKSArIDFlMTJcbiAgICAgICAgfWBcbiAgICAgICAgbGV0IHBlcmZTdGFydEVudHJ5OiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgICBpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHBlcmZTdGFydEVudHJ5ID0gZW50cmllc1swXS5zdGFydFRpbWVcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZC5yZXBvcnRXZWJWaXRhbHMoe1xuICAgICAgICAgIGlkOiBpZCB8fCB1bmlxdWVJRCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lIHx8IHBlcmZTdGFydEVudHJ5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSA9PSBudWxsID8gZHVyYXRpb24gOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgIGVudHJ5VHlwZSA9PT0gJ21hcmsnIHx8IGVudHJ5VHlwZSA9PT0gJ21lYXN1cmUnXG4gICAgICAgICAgICAgID8gJ2N1c3RvbSdcbiAgICAgICAgICAgICAgOiAnd2ViLXZpdGFsJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlRW50cnlwb2ludCA9XG4gICAgICAvLyBUaGUgZGV2IHNlcnZlciBmYWlscyB0byBzZXJ2ZSBzY3JpcHQgYXNzZXRzIHdoZW4gdGhlcmUncyBhIGh5ZHJhdGlvblxuICAgICAgLy8gZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2tpcCB3YWl0aW5nIGZvciB0aGUgZW50cnlwb2ludC5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIGh5ZHJhdGVFcnJcbiAgICAgICAgPyB7IGVycm9yOiBoeWRyYXRlRXJyIH1cbiAgICAgICAgOiBhd2FpdCBwYWdlTG9hZGVyLnJvdXRlTG9hZGVyLndoZW5FbnRyeXBvaW50KHBhZ2UpXG4gICAgaWYgKCdlcnJvcicgaW4gcGFnZUVudHJ5cG9pbnQpIHtcbiAgICAgIHRocm93IHBhZ2VFbnRyeXBvaW50LmVycm9yXG4gICAgfVxuICAgIENhY2hlZENvbXBvbmVudCA9IHBhZ2VFbnRyeXBvaW50LmNvbXBvbmVudFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDYWNoZWRDb21wb25lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGFnZX1cImBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBUaGlzIGNhdGNoZXMgZXJyb3JzIGxpa2UgdGhyb3dpbmcgaW4gdGhlIHRvcCBsZXZlbCBvZiBhIG1vZHVsZVxuICAgIGluaXRpYWxFcnIgPSBlcnJvclxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc3QgeyBnZXROb2RlRXJyb3IgfSA9IHJlcXVpcmUoJ0BuZXh0L3JlYWN0LWRldi1vdmVybGF5L2xpYi9jbGllbnQnKVxuICAgIC8vIFNlcnZlci1zaWRlIHJ1bnRpbWUgZXJyb3JzIG5lZWQgdG8gYmUgcmUtdGhyb3duIG9uIHRoZSBjbGllbnQtc2lkZSBzb1xuICAgIC8vIHRoYXQgdGhlIG92ZXJsYXkgaXMgcmVuZGVyZWQuXG4gICAgaWYgKGluaXRpYWxFcnIpIHtcbiAgICAgIGlmIChpbml0aWFsRXJyID09PSBoeWRyYXRlRXJyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBlcnJvclxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBlcnJvciBvYmplY3QuIFdlIGB0aHJvd2AgaXQgYmVjYXVzZSBzb21lIGJyb3dzZXJzXG4gICAgICAgICAgICAvLyB3aWxsIHNldCB0aGUgYHN0YWNrYCB3aGVuIHRocm93biwgYW5kIHdlIHdhbnQgdG8gZW5zdXJlIG91cnMgaXNcbiAgICAgICAgICAgIC8vIG5vdCBvdmVycmlkZGVuIHdoZW4gd2UgcmUtdGhyb3cgaXQgYmVsb3cuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoaW5pdGlhbEVyciEubWVzc2FnZSlcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvci5uYW1lID0gaW5pdGlhbEVyciEubmFtZVxuICAgICAgICAgIGVycm9yLnN0YWNrID0gaW5pdGlhbEVyciEuc3RhY2tcblxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBnZXROb2RlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgdGhyb3cgbm9kZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gV2UgcmVwbGFjZWQgdGhlIHNlcnZlci1zaWRlIGVycm9yIHdpdGggYSBjbGllbnQtc2lkZSBlcnJvciwgYW5kIHNob3VsZFxuICAgICAgLy8gbm8gbG9uZ2VyIHJld3JpdGUgdGhlIHN0YWNrIHRyYWNlIHRvIGEgTm9kZSBlcnJvci5cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aHJvdyBpbml0aWFsRXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHdpbmRvdy5fX05FWFRfUFJFTE9BRFJFQURZKSB7XG4gICAgYXdhaXQgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkoZHluYW1pY0lkcylcbiAgfVxuXG4gIHJvdXRlciA9IGNyZWF0ZVJvdXRlcihwYWdlLCBxdWVyeSwgYXNQYXRoLCB7XG4gICAgaW5pdGlhbFByb3BzOiBoeWRyYXRlUHJvcHMsXG4gICAgcGFnZUxvYWRlcixcbiAgICBBcHA6IENhY2hlZEFwcCxcbiAgICBDb21wb25lbnQ6IENhY2hlZENvbXBvbmVudCxcbiAgICB3cmFwQXBwLFxuICAgIGVycjogaW5pdGlhbEVycixcbiAgICBpc0ZhbGxiYWNrOiBCb29sZWFuKGlzRmFsbGJhY2spLFxuICAgIHN1YnNjcmlwdGlvbjogKGluZm8sIEFwcCwgc2Nyb2xsKSA9PlxuICAgICAgcmVuZGVyKFxuICAgICAgICBPYmplY3QuYXNzaWduPFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIE9taXQ8UmVuZGVyUm91dGVJbmZvLCAnQXBwJyB8ICdzY3JvbGwnPixcbiAgICAgICAgICBQaWNrPFJlbmRlclJvdXRlSW5mbywgJ0FwcCcgfCAnc2Nyb2xsJz5cbiAgICAgICAgPih7fSwgaW5mbywge1xuICAgICAgICAgIEFwcCxcbiAgICAgICAgICBzY3JvbGwsXG4gICAgICAgIH0pIGFzIFJlbmRlclJvdXRlSW5mb1xuICAgICAgKSxcbiAgICBsb2NhbGUsXG4gICAgbG9jYWxlcyxcbiAgICBkZWZhdWx0TG9jYWxlLFxuICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgaXNQcmV2aWV3LFxuICB9KVxuXG4gIC8vIGNhbGwgaW5pdC1jbGllbnQgbWlkZGxld2FyZVxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaW1wb3J0KCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1vbi1pbml0LWNsaWVudCEnKVxuICAgICAgLnRoZW4oKGluaXRDbGllbnRNb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGluaXRDbGllbnRNb2R1bGUuZGVmYXVsdCh7IHJvdXRlciB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoaW5pdENsaWVudEVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxsaW5nIGNsaWVudC1pbml0IGZvciBwbHVnaW5zJywgaW5pdENsaWVudEVycilcbiAgICAgIH0pXG4gIH1cblxuICBjb25zdCByZW5kZXJDdHg6IFJlbmRlclJvdXRlSW5mbyA9IHtcbiAgICBBcHA6IENhY2hlZEFwcCxcbiAgICBpbml0aWFsOiB0cnVlLFxuICAgIENvbXBvbmVudDogQ2FjaGVkQ29tcG9uZW50LFxuICAgIHByb3BzOiBoeWRyYXRlUHJvcHMsXG4gICAgZXJyOiBpbml0aWFsRXJyLFxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZW5kZXIocmVuZGVyQ3R4KVxuICAgIHJldHVybiBlbWl0dGVyXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgZW1pdHRlciwgcmVuZGVyLCByZW5kZXJDdHggfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXIocmVuZGVyaW5nUHJvcHM6IFJlbmRlclJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAocmVuZGVyaW5nUHJvcHMuZXJyKSB7XG4gICAgYXdhaXQgcmVuZGVyRXJyb3IocmVuZGVyaW5nUHJvcHMpXG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGRvUmVuZGVyKHJlbmRlcmluZ1Byb3BzKVxuICB9IGNhdGNoIChyZW5kZXJFcnIpIHtcbiAgICAvLyBidWJibGUgdXAgY2FuY2VsYXRpb24gZXJyb3JzXG4gICAgaWYgKHJlbmRlckVyci5jYW5jZWxsZWQpIHtcbiAgICAgIHRocm93IHJlbmRlckVyclxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gRW5zdXJlIHRoaXMgZXJyb3IgaXMgZGlzcGxheWVkIGluIHRoZSBvdmVybGF5IGluIGRldmVsb3BtZW50XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgcmVuZGVyRXJyXG4gICAgICB9KVxuICAgIH1cbiAgICBhd2FpdCByZW5kZXJFcnJvcih7IC4uLnJlbmRlcmluZ1Byb3BzLCBlcnI6IHJlbmRlckVyciB9KVxuICB9XG59XG5cbi8vIFRoaXMgbWV0aG9kIGhhbmRsZXMgYWxsIHJ1bnRpbWUgYW5kIGRlYnVnIGVycm9ycy5cbi8vIDQwNCBhbmQgNTAwIGVycm9ycyBhcmUgc3BlY2lhbCBraW5kIG9mIGVycm9yc1xuLy8gYW5kIHRoZXkgYXJlIHN0aWxsIGhhbmRsZSB2aWEgdGhlIG1haW4gcmVuZGVyIG1ldGhvZC5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFcnJvcihyZW5kZXJFcnJvclByb3BzOiBSZW5kZXJFcnJvclByb3BzKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgeyBBcHAsIGVyciB9ID0gcmVuZGVyRXJyb3JQcm9wc1xuXG4gIC8vIEluIGRldmVsb3BtZW50IHJ1bnRpbWUgZXJyb3JzIGFyZSBjYXVnaHQgYnkgb3VyIG92ZXJsYXlcbiAgLy8gSW4gcHJvZHVjdGlvbiB3ZSBjYXRjaCBydW50aW1lIGVycm9ycyB1c2luZyBjb21wb25lbnREaWRDYXRjaCB3aGljaCB3aWxsIHRyaWdnZXIgcmVuZGVyRXJyb3JcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBBIE5leHQuanMgcmVuZGVyaW5nIHJ1bnRpbWUgZXJyb3IgaXMgYWx3YXlzIHVucmVjb3ZlcmFibGVcbiAgICAvLyBGSVhNRTogbGV0J3MgbWFrZSB0aGlzIHJlY292ZXJhYmxlIChlcnJvciBpbiBHSVAgY2xpZW50LXRyYW5zaXRpb24pXG4gICAgd2VicGFja0hNUi5vblVucmVjb3ZlcmFibGVFcnJvcigpXG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSA8QXBwPiBzbyB0aGF0IHRoZSBgPFJlYWN0RGV2T3ZlcmxheT5gIGNhblxuICAgIC8vIHJlbmRlciBpdHNlbGYuXG4gICAgcmV0dXJuIGRvUmVuZGVyKHtcbiAgICAgIEFwcDogKCkgPT4gbnVsbCxcbiAgICAgIHByb3BzOiB7fSxcbiAgICAgIENvbXBvbmVudDogKCkgPT4gbnVsbCxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXSxcbiAgICB9KVxuICB9XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpbXBvcnQoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPW9uLWVycm9yLWNsaWVudCEnKVxuICAgICAgLnRoZW4oKG9uQ2xpZW50RXJyb3JNb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG9uQ2xpZW50RXJyb3JNb2R1bGUuZGVmYXVsdCh7IGVyciB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgob25DbGllbnRFcnJvckVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdlcnJvciBjYWxsaW5nIG9uLWVycm9yLWNsaWVudCBmb3IgcGx1Z2lucycsXG4gICAgICAgICAgb25DbGllbnRFcnJvckVyclxuICAgICAgICApXG4gICAgICB9KVxuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIGxvZyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUsIG90aGVyd2lzZSB1c2VycyBjYW4ndCB0cmFjayBkb3duIGlzc3Vlcy5cbiAgY29uc29sZS5lcnJvcihlcnIpXG4gIHJldHVybiBwYWdlTG9hZGVyXG4gICAgLmxvYWRQYWdlKCcvX2Vycm9yJylcbiAgICAudGhlbigoeyBwYWdlOiBFcnJvckNvbXBvbmVudCwgc3R5bGVTaGVldHMgfSkgPT4ge1xuICAgICAgLy8gSW4gcHJvZHVjdGlvbiB3ZSBkbyBhIG5vcm1hbCByZW5kZXIgd2l0aCB0aGUgYEVycm9yQ29tcG9uZW50YCBhcyBjb21wb25lbnQuXG4gICAgICAvLyBJZiB3ZSd2ZSBnb3R0ZW4gaGVyZSB1cG9uIGluaXRpYWwgcmVuZGVyLCB3ZSBjYW4gdXNlIHRoZSBwcm9wcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAvLyBPdGhlcndpc2UsIHdlIG5lZWQgdG8gY2FsbCBgZ2V0SW5pdGlhbFByb3BzYCBvbiBgQXBwYCBiZWZvcmUgbW91bnRpbmcuXG4gICAgICBjb25zdCBBcHBUcmVlID0gd3JhcEFwcChBcHApXG4gICAgICBjb25zdCBhcHBDdHggPSB7XG4gICAgICAgIENvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgIEFwcFRyZWUsXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgY3R4OiB7IGVyciwgcGF0aG5hbWU6IHBhZ2UsIHF1ZXJ5LCBhc1BhdGgsIEFwcFRyZWUgfSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgIHJlbmRlckVycm9yUHJvcHMucHJvcHNcbiAgICAgICAgICA/IHJlbmRlckVycm9yUHJvcHMucHJvcHNcbiAgICAgICAgICA6IGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBhcHBDdHgpXG4gICAgICApLnRoZW4oKGluaXRQcm9wcykgPT5cbiAgICAgICAgZG9SZW5kZXIoe1xuICAgICAgICAgIC4uLnJlbmRlckVycm9yUHJvcHMsXG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIENvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgcHJvcHM6IGluaXRQcm9wcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxufVxuXG5sZXQgcmVhY3RSb290OiBhbnkgPSBudWxsXG5sZXQgc2hvdWxkVXNlSHlkcmF0ZTogYm9vbGVhbiA9IHR5cGVvZiBSZWFjdERPTS5oeWRyYXRlID09PSAnZnVuY3Rpb24nXG5mdW5jdGlvbiByZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbDogSlNYLkVsZW1lbnQsIGRvbUVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX01PREUgIT09ICdsZWdhY3knKSB7XG4gICAgaWYgKCFyZWFjdFJvb3QpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB7IGh5ZHJhdGU6IHRydWUgfVxuICAgICAgcmVhY3RSb290ID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX01PREUgPT09ICdjb25jdXJyZW50J1xuICAgICAgICAgID8gKFJlYWN0RE9NIGFzIGFueSkudW5zdGFibGVfY3JlYXRlUm9vdChkb21FbCwgb3B0cylcbiAgICAgICAgICA6IChSZWFjdERPTSBhcyBhbnkpLnVuc3RhYmxlX2NyZWF0ZUJsb2NraW5nUm9vdChkb21FbCwgb3B0cylcbiAgICB9XG4gICAgcmVhY3RSb290LnJlbmRlcihyZWFjdEVsKVxuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgc3RhcnQgb2YgaHlkcmF0ZS9yZW5kZXJcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ2JlZm9yZVJlbmRlcicpXG4gICAgfVxuXG4gICAgLy8gVGhlIGNoZWNrIGZvciBgLmh5ZHJhdGVgIGlzIHRoZXJlIHRvIHN1cHBvcnQgUmVhY3QgYWx0ZXJuYXRpdmVzIGxpa2UgcHJlYWN0XG4gICAgaWYgKHNob3VsZFVzZUh5ZHJhdGUpIHtcbiAgICAgIFJlYWN0RE9NLmh5ZHJhdGUocmVhY3RFbCwgZG9tRWwsIG1hcmtIeWRyYXRlQ29tcGxldGUpXG4gICAgICBzaG91bGRVc2VIeWRyYXRlID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3RET00ucmVuZGVyKHJlYWN0RWwsIGRvbUVsLCBtYXJrUmVuZGVyQ29tcGxldGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtIeWRyYXRlQ29tcGxldGUoKTogdm9pZCB7XG4gIGlmICghU1QpIHJldHVyblxuXG4gIHBlcmZvcm1hbmNlLm1hcmsoJ2FmdGVySHlkcmF0ZScpIC8vIG1hcmsgZW5kIG9mIGh5ZHJhdGlvblxuXG4gIHBlcmZvcm1hbmNlLm1lYXN1cmUoXG4gICAgJ05leHQuanMtYmVmb3JlLWh5ZHJhdGlvbicsXG4gICAgJ25hdmlnYXRpb25TdGFydCcsXG4gICAgJ2JlZm9yZVJlbmRlcidcbiAgKVxuICBwZXJmb3JtYW5jZS5tZWFzdXJlKCdOZXh0LmpzLWh5ZHJhdGlvbicsICdiZWZvcmVSZW5kZXInLCAnYWZ0ZXJIeWRyYXRlJylcblxuICBpZiAob25QZXJmRW50cnkpIHtcbiAgICBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCdOZXh0LmpzLWh5ZHJhdGlvbicpLmZvckVhY2gob25QZXJmRW50cnkpXG4gIH1cbiAgY2xlYXJNYXJrcygpXG59XG5cbmZ1bmN0aW9uIG1hcmtSZW5kZXJDb21wbGV0ZSgpOiB2b2lkIHtcbiAgaWYgKCFTVCkgcmV0dXJuXG5cbiAgcGVyZm9ybWFuY2UubWFyaygnYWZ0ZXJSZW5kZXInKSAvLyBtYXJrIGVuZCBvZiByZW5kZXJcbiAgY29uc3QgbmF2U3RhcnRFbnRyaWVzOiBQZXJmb3JtYW5jZUVudHJ5TGlzdCA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoXG4gICAgJ3JvdXRlQ2hhbmdlJyxcbiAgICAnbWFyaydcbiAgKVxuXG4gIGlmICghbmF2U3RhcnRFbnRyaWVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgcGVyZm9ybWFuY2UubWVhc3VyZShcbiAgICAnTmV4dC5qcy1yb3V0ZS1jaGFuZ2UtdG8tcmVuZGVyJyxcbiAgICBuYXZTdGFydEVudHJpZXNbMF0ubmFtZSxcbiAgICAnYmVmb3JlUmVuZGVyJ1xuICApXG4gIHBlcmZvcm1hbmNlLm1lYXN1cmUoJ05leHQuanMtcmVuZGVyJywgJ2JlZm9yZVJlbmRlcicsICdhZnRlclJlbmRlcicpXG4gIGlmIChvblBlcmZFbnRyeSkge1xuICAgIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoJ05leHQuanMtcmVuZGVyJykuZm9yRWFjaChvblBlcmZFbnRyeSlcbiAgICBwZXJmb3JtYW5jZVxuICAgICAgLmdldEVudHJpZXNCeU5hbWUoJ05leHQuanMtcm91dGUtY2hhbmdlLXRvLXJlbmRlcicpXG4gICAgICAuZm9yRWFjaChvblBlcmZFbnRyeSlcbiAgfVxuICBjbGVhck1hcmtzKClcbiAgO1snTmV4dC5qcy1yb3V0ZS1jaGFuZ2UtdG8tcmVuZGVyJywgJ05leHQuanMtcmVuZGVyJ10uZm9yRWFjaCgobWVhc3VyZSkgPT5cbiAgICBwZXJmb3JtYW5jZS5jbGVhck1lYXN1cmVzKG1lYXN1cmUpXG4gIClcbn1cblxuZnVuY3Rpb24gY2xlYXJNYXJrcygpOiB2b2lkIHtcbiAgO1tcbiAgICAnYmVmb3JlUmVuZGVyJyxcbiAgICAnYWZ0ZXJIeWRyYXRlJyxcbiAgICAnYWZ0ZXJSZW5kZXInLFxuICAgICdyb3V0ZUNoYW5nZScsXG4gIF0uZm9yRWFjaCgobWFyaykgPT4gcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyhtYXJrKSlcbn1cblxuZnVuY3Rpb24gQXBwQ29udGFpbmVyKHtcbiAgY2hpbGRyZW4sXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIGZuPXsoZXJyb3IpID0+XG4gICAgICAgIHJlbmRlckVycm9yKHsgQXBwOiBDYWNoZWRBcHAsIGVycjogZXJyb3IgfSkuY2F0Y2goKGVycikgPT5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW5kZXJpbmcgcGFnZTogJywgZXJyKVxuICAgICAgICApXG4gICAgICB9XG4gICAgPlxuICAgICAgPFJvdXRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpfT5cbiAgICAgICAgPEhlYWRNYW5hZ2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aGVhZE1hbmFnZXJ9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9IZWFkTWFuYWdlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1JvdXRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3Qgd3JhcEFwcCA9IChBcHA6IEFwcENvbXBvbmVudCkgPT4gKFxuICB3cmFwcGVkQXBwUHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbik6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgYXBwUHJvcHM6IEFwcFByb3BzID0ge1xuICAgIC4uLndyYXBwZWRBcHBQcm9wcyxcbiAgICBDb21wb25lbnQ6IENhY2hlZENvbXBvbmVudCxcbiAgICBlcnI6IGh5ZHJhdGVFcnIsXG4gICAgcm91dGVyLFxuICB9XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxBcHAgey4uLmFwcFByb3BzfSAvPlxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApXG59XG5cbmxldCBsYXN0QXBwUHJvcHM6IEFwcFByb3BzXG5mdW5jdGlvbiBkb1JlbmRlcihpbnB1dDogUmVuZGVyUm91dGVJbmZvKTogUHJvbWlzZTxhbnk+IHtcbiAgbGV0IHsgQXBwLCBDb21wb25lbnQsIHByb3BzLCBlcnIgfTogUmVuZGVyUm91dGVJbmZvID0gaW5wdXRcbiAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXSB8IHVuZGVmaW5lZCA9XG4gICAgJ2luaXRpYWwnIGluIGlucHV0ID8gdW5kZWZpbmVkIDogaW5wdXQuc3R5bGVTaGVldHNcbiAgQ29tcG9uZW50ID0gQ29tcG9uZW50IHx8IGxhc3RBcHBQcm9wcy5Db21wb25lbnRcbiAgcHJvcHMgPSBwcm9wcyB8fCBsYXN0QXBwUHJvcHMucHJvcHNcblxuICBjb25zdCBhcHBQcm9wczogQXBwUHJvcHMgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgQ29tcG9uZW50LFxuICAgIGVycixcbiAgICByb3V0ZXIsXG4gIH1cbiAgLy8gbGFzdEFwcFByb3BzIGhhcyB0byBiZSBzZXQgYmVmb3JlIFJlYWN0RG9tLnJlbmRlciB0byBhY2NvdW50IGZvciBSZWFjdERvbSB0aHJvd2luZyBhbiBlcnJvci5cbiAgbGFzdEFwcFByb3BzID0gYXBwUHJvcHNcblxuICBsZXQgY2FuY2VsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBsZXQgcmVzb2x2ZVByb21pc2U6ICgpID0+IHZvaWRcbiAgY29uc3QgcmVuZGVyUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAobGFzdFJlbmRlclJlamVjdCkge1xuICAgICAgbGFzdFJlbmRlclJlamVjdCgpXG4gICAgfVxuICAgIHJlc29sdmVQcm9taXNlID0gKCkgPT4ge1xuICAgICAgbGFzdFJlbmRlclJlamVjdCA9IG51bGxcbiAgICAgIHJlc29sdmUoKVxuICAgIH1cbiAgICBsYXN0UmVuZGVyUmVqZWN0ID0gKCkgPT4ge1xuICAgICAgY2FuY2VsZWQgPSB0cnVlXG4gICAgICBsYXN0UmVuZGVyUmVqZWN0ID0gbnVsbFxuXG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKCdDYW5jZWwgcmVuZGVyaW5nIHJvdXRlJylcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlamVjdChlcnJvcilcbiAgICB9XG4gIH0pXG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBoYXMgYSByZXR1cm4gdHlwZSB0byBlbnN1cmUgaXQgZG9lc24ndCBzdGFydCByZXR1cm5pbmcgYVxuICAvLyBQcm9taXNlLiBJdCBzaG91bGQgcmVtYWluIHN5bmNocm9ub3VzLlxuICBmdW5jdGlvbiBvblN0YXJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICFzdHlsZVNoZWV0cyB8fFxuICAgICAgLy8gV2UgdXNlIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LCBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAvLyB1bmxlc3Mgd2UncmUgaW4gcHJvZHVjdGlvbjpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdHlsZVRhZ3M6IEhUTUxTdHlsZUVsZW1lbnRbXSA9IGxvb3NlVG9BcnJheTxIVE1MU3R5bGVFbGVtZW50PihcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlW2RhdGEtbi1ocmVmXScpXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRIcmVmczogU2V0PHN0cmluZyB8IG51bGw+ID0gbmV3IFNldChcbiAgICAgIGN1cnJlbnRTdHlsZVRhZ3MubWFwKCh0YWcpID0+IHRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbi1ocmVmJykpXG4gICAgKVxuXG4gICAgY29uc3Qgbm9zY3JpcHQ6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdub3NjcmlwdFtkYXRhLW4tY3NzXSdcbiAgICApXG4gICAgY29uc3Qgbm9uY2U6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBub3NjcmlwdD8uZ2V0QXR0cmlidXRlKFxuICAgICAgJ2RhdGEtbi1jc3MnXG4gICAgKVxuXG4gICAgc3R5bGVTaGVldHMuZm9yRWFjaCgoeyBocmVmLCB0ZXh0IH06IHsgaHJlZjogc3RyaW5nOyB0ZXh0OiBhbnkgfSkgPT4ge1xuICAgICAgaWYgKCFjdXJyZW50SHJlZnMuaGFzKGhyZWYpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbi1ocmVmJywgaHJlZilcbiAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKCdtZWRpYScsICd4JylcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKVxuICAgICAgICBzdHlsZVRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBvbkhlYWRDb21taXQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgLy8gV2UgdXNlIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LCBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAvLyB1bmxlc3Mgd2UncmUgaW4gcHJvZHVjdGlvbjpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIC8vIFdlIGNhbiBza2lwIHRoaXMgZHVyaW5nIGh5ZHJhdGlvbi4gUnVubmluZyBpdCB3b250IGNhdXNlIGFueSBoYXJtLCBidXRcbiAgICAgIC8vIHdlIG1heSBhcyB3ZWxsIHNhdmUgdGhlIENQVSBjeWNsZXM6XG4gICAgICBzdHlsZVNoZWV0cyAmJlxuICAgICAgLy8gRW5zdXJlIHRoaXMgcmVuZGVyIHdhcyBub3QgY2FuY2VsZWRcbiAgICAgICFjYW5jZWxlZFxuICAgICkge1xuICAgICAgY29uc3QgZGVzaXJlZEhyZWZzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoc3R5bGVTaGVldHMubWFwKChzKSA9PiBzLmhyZWYpKVxuICAgICAgY29uc3QgY3VycmVudFN0eWxlVGFnczogSFRNTFN0eWxlRWxlbWVudFtdID0gbG9vc2VUb0FycmF5PFxuICAgICAgICBIVE1MU3R5bGVFbGVtZW50XG4gICAgICA+KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlW2RhdGEtbi1ocmVmXScpKVxuICAgICAgY29uc3QgY3VycmVudEhyZWZzOiBzdHJpbmdbXSA9IGN1cnJlbnRTdHlsZVRhZ3MubWFwKFxuICAgICAgICAodGFnKSA9PiB0YWcuZ2V0QXR0cmlidXRlKCdkYXRhLW4taHJlZicpIVxuICAgICAgKVxuXG4gICAgICAvLyBUb2dnbGUgYDxzdHlsZT5gIHRhZ3Mgb24gb3Igb2ZmIGRlcGVuZGluZyBvbiBpZiB0aGV5J3JlIG5lZWRlZDpcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGN1cnJlbnRIcmVmcy5sZW5ndGg7ICsraWR4KSB7XG4gICAgICAgIGlmIChkZXNpcmVkSHJlZnMuaGFzKGN1cnJlbnRIcmVmc1tpZHhdKSkge1xuICAgICAgICAgIGN1cnJlbnRTdHlsZVRhZ3NbaWR4XS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVUYWdzW2lkeF0uc2V0QXR0cmlidXRlKCdtZWRpYScsICd4JylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW9yZGVyIHN0eWxlcyBpbnRvIGludGVuZGVkIG9yZGVyOlxuICAgICAgbGV0IHJlZmVyZW5jZU5vZGU6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ25vc2NyaXB0W2RhdGEtbi1jc3NdJ1xuICAgICAgKVxuICAgICAgaWYgKFxuICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSBhbiBpbnZhcmlhbnQ6XG4gICAgICAgIHJlZmVyZW5jZU5vZGVcbiAgICAgICkge1xuICAgICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKCh7IGhyZWYgfTogeyBocmVmOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldFRhZzogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYHN0eWxlW2RhdGEtbi1ocmVmPVwiJHtocmVmfVwiXWBcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgYW4gaW52YXJpYW50OlxuICAgICAgICAgICAgdGFyZ2V0VGFnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlIS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIHRhcmdldFRhZyxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSEubmV4dFNpYmxpbmdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSB0YXJnZXRUYWdcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmFsbHksIGNsZWFuIHVwIHNlcnZlciByZW5kZXJlZCBzdHlsZXNoZWV0czpcbiAgICAgIGxvb3NlVG9BcnJheTxIVE1MTGlua0VsZW1lbnQ+KFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW2RhdGEtbi1wXScpXG4gICAgICApLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKGVsKVxuICAgICAgfSlcblxuICAgICAgLy8gRm9yY2UgYnJvd3NlciB0byByZWNvbXB1dGUgbGF5b3V0LCB3aGljaCBzaG91bGQgcHJldmVudCBhIGZsYXNoIG9mXG4gICAgICAvLyB1bnN0eWxlZCBjb250ZW50OlxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCAnaGVpZ2h0JylcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQuc2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oaW5wdXQuc2Nyb2xsLngsIGlucHV0LnNjcm9sbC55KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUm9vdENvbW1pdCgpOiB2b2lkIHtcbiAgICByZXNvbHZlUHJvbWlzZSgpXG4gIH1cblxuICBjb25zdCBlbGVtOiBKU1guRWxlbWVudCA9IChcbiAgICA8Um9vdCBjYWxsYmFjaz17b25Sb290Q29tbWl0fT5cbiAgICAgIDxIZWFkIGNhbGxiYWNrPXtvbkhlYWRDb21taXR9IC8+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8QXBwIHsuLi5hcHBQcm9wc30gLz5cbiAgICAgICAgPFBvcnRhbCB0eXBlPVwibmV4dC1yb3V0ZS1hbm5vdW5jZXJcIj5cbiAgICAgICAgICA8Um91dGVBbm5vdW5jZXIgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8L1Jvb3Q+XG4gIClcblxuICBvblN0YXJ0KClcblxuICAvLyBXZSBjYXRjaCBydW50aW1lIGVycm9ycyB1c2luZyBjb21wb25lbnREaWRDYXRjaCB3aGljaCB3aWxsIHRyaWdnZXIgcmVuZGVyRXJyb3JcbiAgcmVuZGVyUmVhY3RFbGVtZW50KFxuICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9TVFJJQ1RfTU9ERSA/IChcbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPntlbGVtfTwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICApIDogKFxuICAgICAgZWxlbVxuICAgICksXG4gICAgYXBwRWxlbWVudCFcbiAgKVxuXG4gIHJldHVybiByZW5kZXJQcm9taXNlXG59XG5cbmZ1bmN0aW9uIFJvb3Qoe1xuICBjYWxsYmFjayxcbiAgY2hpbGRyZW4sXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkXG59Pik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIC8vIFdlIHVzZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBndWFyYW50ZWUgdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkXG4gIC8vIGFzIHNvb24gYXMgUmVhY3QgZmx1c2hlcyB0aGUgdXBkYXRlLlxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gY2FsbGJhY2soKSwgW2NhbGxiYWNrXSlcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9URVNUX01PREUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93Ll9fTkVYVF9IWURSQVRFRCA9IHRydWVcblxuICAgICAgaWYgKHdpbmRvdy5fX05FWFRfSFlEUkFURURfQ0IpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9IWURSQVRFRF9DQigpXG4gICAgICB9XG4gICAgfSwgW10pXG4gIH1cbiAgLy8gV2Ugc2hvdWxkIGFzayB0byBtZWFzdXJlIHRoZSBXZWIgVml0YWxzIGFmdGVyIHJlbmRlcmluZyBjb21wbGV0ZXMgc28gd2VcbiAgLy8gZG9uJ3QgY2F1c2UgYW55IGh5ZHJhdGlvbiBkZWxheTpcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZWFzdXJlV2ViVml0YWxzKG9uUGVyZkVudHJ5KVxuICB9LCBbXSlcbiAgcmV0dXJuIGNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG4vLyBEdW1teSBjb21wb25lbnQgdGhhdCB3ZSByZW5kZXIgYXMgYSBjaGlsZCBvZiBSb290IHNvIHRoYXQgd2UgY2FuXG4vLyB0b2dnbGUgdGhlIGNvcnJlY3Qgc3R5bGVzIGJlZm9yZSB0aGUgcGFnZSBpcyByZW5kZXJlZC5cbmZ1bmN0aW9uIEhlYWQoeyBjYWxsYmFjayB9OiB7IGNhbGxiYWNrOiAoKSA9PiB2b2lkIH0pOiBudWxsIHtcbiAgLy8gV2UgdXNlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGd1YXJhbnRlZSB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWRcbiAgLy8gYXMgc29vbiBhcyBSZWFjdCBmbHVzaGVzIHRoZSB1cGRhdGUuXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBjYWxsYmFjaygpLCBbY2FsbGJhY2tdKVxuICByZXR1cm4gbnVsbFxufVxuIiwiLyogZ2xvYmFscyBfX1JFUExBQ0VfTk9PUF9JTVBPUlRfXyAqL1xuaW1wb3J0IGluaXROZXh0LCAqIGFzIG5leHQgZnJvbSAnLi8nXG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tICcuL2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgaW5pdE9uRGVtYW5kRW50cmllcyBmcm9tICcuL2Rldi9vbi1kZW1hbmQtZW50cmllcy1jbGllbnQnXG5pbXBvcnQgaW5pdFdlYnBhY2tITVIgZnJvbSAnLi9kZXYvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQnXG5pbXBvcnQgaW5pdGlhbGl6ZUJ1aWxkV2F0Y2hlciBmcm9tICcuL2Rldi9kZXYtYnVpbGQtd2F0Y2hlcidcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9kZXYvZm91YydcbmltcG9ydCB7IGFkZE1lc3NhZ2VMaXN0ZW5lciB9IGZyb20gJy4vZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuXG4vLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgdGhlIGlzc3VlIGRlc2NyaWJlZCBoZXJlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy8zNzc1I2lzc3VlY29tbWVudC00MDc0MzgxMjNcbi8vIFRoZSBydW50aW1lQ2h1bmsgZG9lc24ndCBoYXZlIGR5bmFtaWMgaW1wb3J0IGhhbmRsaW5nIGNvZGUgd2hlbiB0aGVyZSBoYXNuJ3QgYmVlbiBhIGR5bmFtaWMgaW1wb3J0XG4vLyBUaGUgcnVudGltZUNodW5rIGNhbid0IGhvdCByZWxvYWQgaXRzZWxmIGN1cnJlbnRseSB0byBjb3JyZWN0IGl0IHdoZW4gYWRkaW5nIHBhZ2VzIHVzaW5nIG9uLWRlbWFuZC1lbnRyaWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5fX1JFUExBQ0VfTk9PUF9JTVBPUlRfX1xuXG4vLyBTdXBwb3J0IEV2ZW50U291cmNlIG9uIEludGVybmV0IEV4cGxvcmVyIDExXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IHtcbiAgX19ORVhUX0RBVEFfXzogeyBhc3NldFByZWZpeCB9LFxufSA9IHdpbmRvd1xuXG5jb25zdCBwcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xuY29uc3Qgd2VicGFja0hNUiA9IGluaXRXZWJwYWNrSE1SKClcblxud2luZG93Lm5leHQgPSBuZXh0XG5pbml0TmV4dCh7IHdlYnBhY2tITVIgfSlcbiAgLnRoZW4oKHsgcmVuZGVyQ3R4LCByZW5kZXIgfSkgPT4ge1xuICAgIGluaXRPbkRlbWFuZEVudHJpZXMoeyBhc3NldFByZWZpeDogcHJlZml4IH0pXG5cbiAgICBsZXQgYnVpbGRJbmRpY2F0b3JIYW5kbGVyID0gKCkgPT4ge31cblxuICAgIGZ1bmN0aW9uIGRldlBhZ2VzTWFuaWZlc3RMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZignZGV2UGFnZXNNYW5pZmVzdCcpICE9PSAtMSkge1xuICAgICAgICBmZXRjaChgJHtwcmVmaXh9L19uZXh0L3N0YXRpYy9kZXZlbG9wbWVudC9fZGV2UGFnZXNNYW5pZmVzdC5qc29uYClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Ll9fREVWX1BBR0VTX01BTklGRVNUID0gbWFuaWZlc3RcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIGZldGNoIGRldlBhZ2VzTWFuaWZlc3RgLCBlcnIpXG4gICAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCdzZXJ2ZXJPbmx5Q2hhbmdlcycpICE9PSAtMSkge1xuICAgICAgICBjb25zdCB7IHBhZ2VzIH0gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHdpbmRvdy5uZXh0LnJvdXRlclxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JlZnJlc2hpbmcgcGFnZSBkYXRhIGR1ZSB0byBzZXJ2ZXItc2lkZSBjaGFuZ2UnKVxuXG4gICAgICAgICAgYnVpbGRJbmRpY2F0b3JIYW5kbGVyKCdidWlsZGluZycpXG5cbiAgICAgICAgICBjb25zdCBjbGVhckluZGljYXRvciA9ICgpID0+IGJ1aWxkSW5kaWNhdG9ySGFuZGxlcignYnVpbHQnKVxuXG4gICAgICAgICAgcm91dGVyXG4gICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lICtcbiAgICAgICAgICAgICAgICAnPycgK1xuICAgICAgICAgICAgICAgIFN0cmluZyhcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5c3RyaW5nLmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhyb3V0ZXIucXVlcnkpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZmluYWxseShjbGVhckluZGljYXRvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkZXZQYWdlc01hbmlmZXN0TGlzdGVuZXIudW5maWx0ZXJlZCA9IHRydWVcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXIoZGV2UGFnZXNNYW5pZmVzdExpc3RlbmVyKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9CVUlMRF9JTkRJQ0FUT1IpIHtcbiAgICAgIGluaXRpYWxpemVCdWlsZFdhdGNoZXIoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgYnVpbGRJbmRpY2F0b3JIYW5kbGVyID0gaGFuZGxlclxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBkZWxheSByZW5kZXJpbmcgdW50aWwgYWZ0ZXIgc3R5bGVzIGhhdmUgYmVlbiBhcHBsaWVkIGluIGRldmVsb3BtZW50XG4gICAgZGlzcGxheUNvbnRlbnQoKCkgPT4ge1xuICAgICAgcmVuZGVyKHJlbmRlckN0eClcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdhcyBub3QgY2F1Z2h0JywgZXJyKVxuICB9KVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50U3NnTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGludGVycG9sYXRlQXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgY3JlYXRlUm91dGVMb2FkZXIsIHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgUm91dGVMb2FkZXIsXG59IGZyb20gJy4vcm91dGUtbG9hZGVyJ1xuXG5mdW5jdGlvbiBub3JtYWxpemVSb3V0ZShyb3V0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHJvdXRlWzBdICE9PSAnLycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlIG5hbWUgc2hvdWxkIHN0YXJ0IHdpdGggYSBcIi9cIiwgZ290IFwiJHtyb3V0ZX1cImApXG4gIH1cblxuICBpZiAocm91dGUgPT09ICcvJykgcmV0dXJuIHJvdXRlXG4gIHJldHVybiByb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpXG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlU2hlZXRUdXBsZSA9IHsgaHJlZjogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfVxuZXhwb3J0IHR5cGUgR29vZFBhZ2VDYWNoZSA9IHtcbiAgcGFnZTogQ29tcG9uZW50VHlwZVxuICBtb2Q6IGFueVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUxvYWRlciB7XG4gIHByaXZhdGUgYnVpbGRJZDogc3RyaW5nXG4gIHByaXZhdGUgYXNzZXRQcmVmaXg6IHN0cmluZ1xuXG4gIHByaXZhdGUgcHJvbWlzZWRTc2dNYW5pZmVzdD86IFByb21pc2U8Q2xpZW50U3NnTWFuaWZlc3Q+XG4gIHByaXZhdGUgcHJvbWlzZWREZXZQYWdlc01hbmlmZXN0PzogUHJvbWlzZTxhbnk+XG4gIHB1YmxpYyByb3V0ZUxvYWRlcjogUm91dGVMb2FkZXJcblxuICBjb25zdHJ1Y3RvcihidWlsZElkOiBzdHJpbmcsIGFzc2V0UHJlZml4OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpXG5cbiAgICB0aGlzLmJ1aWxkSWQgPSBidWlsZElkXG4gICAgdGhpcy5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4XG5cbiAgICAvKiogQHR5cGUge1Byb21pc2U8U2V0PHN0cmluZz4+fSAqL1xuICAgIHRoaXMucHJvbWlzZWRTc2dNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLl9fU1NHX01BTklGRVNUKSB7XG4gICAgICAgIHJlc29sdmUoKHdpbmRvdyBhcyBhbnkpLl9fU1NHX01BTklGRVNUKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5fX1NTR19NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCh3aW5kb3cgYXMgYW55KS5fX1NTR19NQU5JRkVTVClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRQYWdlTGlzdCgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4gbWFuaWZlc3Quc29ydGVkUGFnZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgod2luZG93IGFzIGFueSkuX19ERVZfUEFHRVNfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX0RFVl9QQUdFU19NQU5JRkVTVC5wYWdlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb21pc2VkRGV2UGFnZXNNYW5pZmVzdCkge1xuICAgICAgICAgIHRoaXMucHJvbWlzZWREZXZQYWdlc01hbmlmZXN0ID0gZmV0Y2goXG4gICAgICAgICAgICBgJHt0aGlzLmFzc2V0UHJlZml4fS9fbmV4dC9zdGF0aWMvZGV2ZWxvcG1lbnQvX2RldlBhZ2VzTWFuaWZlc3QuanNvbmBcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkuX19ERVZfUEFHRVNfTUFOSUZFU1QgPSBtYW5pZmVzdFxuICAgICAgICAgICAgICByZXR1cm4gbWFuaWZlc3QucGFnZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIGZldGNoIGRldlBhZ2VzTWFuaWZlc3RgLCBlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VkRGV2UGFnZXNNYW5pZmVzdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHJlZiB0aGUgcm91dGUgaHJlZiAoZmlsZS1zeXN0ZW0gcGF0aClcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFzUGF0aCB0aGUgVVJMIGFzIHNob3duIGluIGJyb3dzZXIgKHZpcnR1YWwgcGF0aCk7IHVzZWQgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXRhSHJlZihcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcsXG4gICAgc3NnOiBib29sZWFuLFxuICAgIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBwYXRobmFtZTogaHJlZlBhdGhuYW1lLCBxdWVyeSwgc2VhcmNoIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGhyZWYpXG4gICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgY29uc3Qgcm91dGUgPSBub3JtYWxpemVSb3V0ZShocmVmUGF0aG5hbWUpXG5cbiAgICBjb25zdCBnZXRIcmVmRm9yU2x1ZyA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFSb3V0ZSA9IGdldEFzc2V0UGF0aEZyb21Sb3V0ZShcbiAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSkpLFxuICAgICAgICAnLmpzb24nXG4gICAgICApXG4gICAgICByZXR1cm4gYWRkQmFzZVBhdGgoXG4gICAgICAgIGAvX25leHQvZGF0YS8ke3RoaXMuYnVpbGRJZH0ke2RhdGFSb3V0ZX0ke3NzZyA/ICcnIDogc2VhcmNofWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBpc0R5bmFtaWM6IGJvb2xlYW4gPSBpc0R5bmFtaWNSb3V0ZShyb3V0ZSlcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRSb3V0ZSA9IGlzRHluYW1pY1xuICAgICAgPyBpbnRlcnBvbGF0ZUFzKGhyZWZQYXRobmFtZSwgYXNQYXRobmFtZSwgcXVlcnkpLnJlc3VsdFxuICAgICAgOiAnJ1xuXG4gICAgcmV0dXJuIGlzRHluYW1pY1xuICAgICAgPyBpbnRlcnBvbGF0ZWRSb3V0ZSAmJiBnZXRIcmVmRm9yU2x1ZyhpbnRlcnBvbGF0ZWRSb3V0ZSlcbiAgICAgIDogZ2V0SHJlZkZvclNsdWcocm91dGUpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIC0gdGhlIHJvdXRlIChmaWxlLXN5c3RlbSBwYXRoKVxuICAgKi9cbiAgX2lzU3NnKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlZFNzZ01hbmlmZXN0IS50aGVuKChzOiBDbGllbnRTc2dNYW5pZmVzdCkgPT5cbiAgICAgIHMuaGFzKHJvdXRlKVxuICAgIClcbiAgfVxuXG4gIGxvYWRQYWdlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZUxvYWRlci5sb2FkUm91dGUocm91dGUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCdjb21wb25lbnQnIGluIHJlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhZ2U6IHJlcy5jb21wb25lbnQsXG4gICAgICAgICAgbW9kOiByZXMuZXhwb3J0cyxcbiAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlcy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgICBocmVmOiBvLmhyZWYsXG4gICAgICAgICAgICB0ZXh0OiBvLmNvbnRlbnQsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyByZXMuZXJyb3JcbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlTG9hZGVyLnByZWZldGNoKHJvdXRlKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcblxudHlwZSBQb3J0YWxQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICB0eXBlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFBvcnRhbDogUmVhY3QuRkM8UG9ydGFsUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHR5cGUgfSkgPT4ge1xuICBsZXQgcG9ydGFsTm9kZSA9IFJlYWN0LnVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpXG4gIGxldCBbLCBmb3JjZVVwZGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7fT4oKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcnRhbE5vZGUuY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcnRhbE5vZGUuY3VycmVudClcbiAgICBmb3JjZVVwZGF0ZSh7fSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHBvcnRhbE5vZGUuY3VycmVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBvcnRhbE5vZGUuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt0eXBlXSlcblxuICByZXR1cm4gcG9ydGFsTm9kZS5jdXJyZW50ID8gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBwb3J0YWxOb2RlLmN1cnJlbnQpIDogbnVsbFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZUFubm91bmNlcigpIHtcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtyb3V0ZUFubm91bmNlbWVudCwgc2V0Um91dGVBbm5vdW5jZW1lbnRdID0gdXNlU3RhdGUoJycpXG5cbiAgLy8gT25seSBhbm5vdW5jZSB0aGUgcGF0aCBjaGFuZ2UsIGJ1dCBub3QgZm9yIHRoZSBmaXJzdCBsb2FkIGJlY2F1c2Ugc2NyZWVuIHJlYWRlciB3aWxsIGRvIHRoYXQgYXV0b21hdGljYWxseS5cbiAgY29uc3QgaW5pdGlhbFBhdGhMb2FkZWQgPSB1c2VSZWYoZmFsc2UpXG5cbiAgLy8gRXZlcnkgdGltZSB0aGUgcGF0aCBjaGFuZ2VzLCBhbm5vdW5jZSB0aGUgcm91dGUgY2hhbmdlLiBUaGUgYW5ub3VuY2VtZW50IHdpbGwgYmUgcHJpb3JpdGl6ZWQgYnkgaDEsIHRoZW4gdGl0bGVcbiAgLy8gKGZyb20gbWV0YWRhdGEpLCBhbmQgZmluYWxseSBpZiB0aG9zZSBkb24ndCBleGlzdCwgdGhlbiB0aGUgcGF0aE5hbWUgdGhhdCBpcyBpbiB0aGUgVVJMLiBUaGlzIG1ldGhvZG9sb2d5IGlzXG4gIC8vIGluc3BpcmVkIGJ5IE1hcmN5IFN1dHRvbidzIGFjY2Vzc2libGUgY2xpZW50IHJvdXRpbmcgdXNlciB0ZXN0aW5nLiBNb3JlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBoZXJlOlxuICAvLyBodHRwczovL3d3dy5nYXRzYnlqcy5jb20vYmxvZy8yMDE5LTA3LTExLXVzZXItdGVzdGluZy1hY2Nlc3NpYmxlLWNsaWVudC1yb3V0aW5nL1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKCFpbml0aWFsUGF0aExvYWRlZC5jdXJyZW50KSB7XG4gICAgICAgIGluaXRpYWxQYXRoTG9hZGVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgbmV3Um91dGVBbm5vdW5jZW1lbnRcbiAgICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXG5cbiAgICAgIGlmIChwYWdlSGVhZGVyKSB7XG4gICAgICAgIG5ld1JvdXRlQW5ub3VuY2VtZW50ID0gcGFnZUhlYWRlci5pbm5lclRleHQgfHwgcGFnZUhlYWRlci50ZXh0Q29udGVudFxuICAgICAgfVxuICAgICAgaWYgKCFuZXdSb3V0ZUFubm91bmNlbWVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQudGl0bGUpIHtcbiAgICAgICAgICBuZXdSb3V0ZUFubm91bmNlbWVudCA9IGRvY3VtZW50LnRpdGxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Um91dGVBbm5vdW5jZW1lbnQgPSBhc1BhdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRSb3V0ZUFubm91bmNlbWVudChuZXdSb3V0ZUFubm91bmNlbWVudClcbiAgICB9LFxuICAgIC8vIFRPRE86IHN3aXRjaCB0byBwYXRobmFtZSArIHF1ZXJ5IG9iamVjdCBvZiBkeW5hbWljIHJvdXRlIHJlcXVpcmVtZW50c1xuICAgIFthc1BhdGhdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxwXG4gICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiAvLyBNYWtlIHRoZSBhbm5vdW5jZW1lbnQgaW1tZWRpYXRlbHkuXG4gICAgICBpZD1cIl9fbmV4dC1yb3V0ZS1hbm5vdW5jZXJfX1wiXG4gICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgICAgIGhlaWdodDogJzFweCcsXG4gICAgICAgIG1hcmdpbjogJy0xcHgnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzFweCcsXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0BqZXNzZWJlYWNoL2Jld2FyZS1zbXVzaGVkLW9mZi1zY3JlZW4tYWNjZXNzaWJsZS10ZXh0LTU5NTJhNGMyY2JmZVxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgd29yZFdyYXA6ICdub3JtYWwnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cm91dGVBbm5vdW5jZW1lbnR9XG4gICAgPC9wPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlQW5ub3VuY2VyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyJdLCJzb3VyY2VSb290IjoiIn0=