self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Cursos\\NLW5 React\\NLW5-Podcastr-React-e-NextJS\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();






function Player() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__.PlayerContext),
      episodeList = _useContext.episodeList,
      currentEpisode = _useContext.currentEpisode;

  var episode = episodeList[currentEpisode];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().playerContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentEpisode),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().emptyPlayer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: !episode ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().empty) : '',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().progress),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slider),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().emptySlider)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().playButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/play-next.svg",
            alt: "Tocar proxima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 8
  }, this);
}

_s(Player, "buBlAeZNknooX1xL1wXk2DB/uL4=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-slider/assets/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-slider/assets/index.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-slider/assets/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-slider/assets/index.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/rc-slider/assets/index.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", "",{"version":3,"sources":["webpack://node_modules/rc-slider/assets/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,6BAA6B;AAC/B;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,MAAM;EACN,UAAU;EACV,YAAY;AACd;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,gCAAwB;UAAxB,wBAAwB;EACxB,iCAAyB;UAAzB,yBAAyB;EACzB,yBAAyB;EACzB,oCAA4B;UAA5B,4BAA4B;AAC9B;AACA;EACE,gCAAwB;UAAxB,wBAAwB;EACxB,iCAAyB;UAAzB,yBAAyB;EACzB,yBAAyB;EACzB,oCAA4B;UAA5B,4BAA4B;AAC9B;AACA;;EAEE,iDAAyC;UAAzC,yCAAyC;EACzC,qCAA6B;UAA7B,6BAA6B;AAC/B;AACA;EACE,kDAA0C;UAA1C,0CAA0C;EAC1C,qCAA6B;UAA7B,6BAA6B;AAC/B;AACA;;EAEE,8BAAsB;UAAtB,sBAAsB;EACtB,iEAAyD;UAAzD,yDAAyD;AAC3D;AACA;EACE,yEAAiE;UAAjE,iEAAiE;AACnE;AACA;EACE;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AACA;EACE;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,uBAAuB;EACvB,yBAAyB;AAC3B","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzPzJiYzkiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VDb250ZXh0IiwiUGxheWVyQ29udGV4dCIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGUiLCJlcGlzb2RlIiwic3R5bGVzIiwidGl0bGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiZW1wdHlTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFTyxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsb0JBQ2lCQyxpREFBVSxDQUFDQyxrRUFBRCxDQUQzQjtBQUFBLE1BQ2RDLFdBRGMsZUFDZEEsV0FEYztBQUFBLE1BQ0RDLGNBREMsZUFDREEsY0FEQzs7QUFHckIsTUFBTUMsT0FBTyxHQUFHRixXQUFXLENBQUNDLGNBQUQsQ0FBM0I7QUFFQSxzQkFDRztBQUFLLGFBQVMsRUFBRUUsNEVBQWhCO0FBQUEsNEJBQ0M7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQyxjQUFUO0FBQXdCLFdBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLHFDQUF1QkQsT0FBdkIsYUFBdUJBLE9BQXZCLHVCQUF1QkEsT0FBTyxDQUFFRSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQU1FRixPQUFPLGdCQUNKO0FBQUssZUFBUyxFQUFHQywyRUFBakI7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUFPLGFBQUssRUFBRSxHQUFk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LE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFL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QSwrREFBZSx1QkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYyZWQ4ZmUwOTAwYzU2OWJjYWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgUGxheWVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCkge1xuICAgIGNvbnN0IHtlcGlzb2RlTGlzdCwgY3VycmVudEVwaXNvZGV9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxuXG4gICAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlXVxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5aW5nLnN2Z1wiIGFsdD1cIlRvY2FuZG8gYWdvcmFcIi8+XG4gICAgICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEge2VwaXNvZGU/LnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICB7ZXBpc29kZSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezU5Mn0gaGVpZ2h0PXs1OTJ9IHNyYz17ZXBpc29kZS50aHVtYm5haWx9IG9iamVjdEZpdD0gXCJjb3ZlclwiLz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cbiAgICAgICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZSA/IHN0eWxlcy5lbXB0eSA6ICcnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiVG9jYXIgcHJveGltYVwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL2luZGV4LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yYy1zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXIgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyLXJhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5yYy1zbGlkZXItdHJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZTJmYjtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjOTZkYmZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlLWRyYWdnaW5nLnJjLXNsaWRlci1oYW5kbGUtZHJhZ2dpbmcucmMtc2xpZGVyLWhhbmRsZS1kcmFnZ2luZyB7XFxuICBib3JkZXItY29sb3I6ICM1N2M1Zjc7XFxuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzk2ZGJmYTtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUtY2xpY2stZm9jdXNlZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5NmRiZmE7XFxuICBib3gtc2hhZG93OiB1bnNldDtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNTdjNWY3O1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuLnJjLXNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMThweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnJjLXNsaWRlci1tYXJrLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucmMtc2xpZGVyLW1hcmstdGV4dC1hY3RpdmUge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5yYy1zbGlkZXItc3RlcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5yYy1zbGlkZXItZG90IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZTllOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucmMtc2xpZGVyLWRvdC1hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTZkYmZhO1xcbn1cXG4ucmMtc2xpZGVyLWRvdC1yZXZlcnNlIHtcXG4gIG1hcmdpbi1yaWdodDogLTRweDtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLWhhbmRsZSxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLW1hcmstdGV4dCxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItcmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWhhbmRsZSB7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1tYXJrIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDE4cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1zdGVwIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1kb3Qge1xcbiAgbGVmdDogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWRvdDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItZG90Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1lbnRlcixcXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWFwcGVhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1lbnRlci5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXItYWN0aXZlLFxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXItYWN0aXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bkluO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWxlYXZlLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bk91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bkluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bk91dCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5OXB4O1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXBsYWNlbWVudC10b3Age1xcbiAgcGFkZGluZzogNHB4IDAgOHB4IDA7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1pbm5lciB7XFxuICBwYWRkaW5nOiA2cHggMnB4O1xcbiAgbWluLXdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzZjNmM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4ICNkOWQ5ZDk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtcGxhY2VtZW50LXRvcCAucmMtc2xpZGVyLXRvb2x0aXAtYXJyb3cge1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZjNmM2YztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VB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QUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGO0FBVkE7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJjLXNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLnJjLXNsaWRlciAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItcmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnJjLXNsaWRlci10cmFjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJlMmZiO1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMnB4ICM5NmRiZmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teDtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUtZHJhZ2dpbmcucmMtc2xpZGVyLWhhbmRsZS1kcmFnZ2luZy5yYy1zbGlkZXItaGFuZGxlLWRyYWdnaW5nIHtcXG4gIGJvcmRlci1jb2xvcjogIzU3YzVmNztcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjOTZkYmZhO1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZS1jbGljay1mb2N1c2VkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzk2ZGJmYTtcXG4gIGJveC1zaGFkb3c6IHVuc2V0O1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM1N2M1Zjc7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlOmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM1N2M1Zjc7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM1N2M1Zjc7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG4ucmMtc2xpZGVyLW1hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxOHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ucmMtc2xpZGVyLW1hcmstdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5yYy1zbGlkZXItbWFyay10ZXh0LWFjdGl2ZSB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLnJjLXNsaWRlci1zdGVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnJjLXNsaWRlci1kb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZTllOWU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5yYy1zbGlkZXItZG90LWFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM5NmRiZmE7XFxufVxcbi5yYy1zbGlkZXItZG90LXJldmVyc2Uge1xcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcbi5yYy1zbGlkZXItZGlzYWJsZWQgLnJjLXNsaWRlci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItaGFuZGxlLFxcbi5yYy1zbGlkZXItZGlzYWJsZWQgLnJjLXNsaWRlci1kb3Qge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItbWFyay10ZXh0LFxcbi5yYy1zbGlkZXItZGlzYWJsZWQgLnJjLXNsaWRlci1kb3Qge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1yYWlsIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci10cmFjayB7XFxuICBsZWZ0OiA1cHg7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItaGFuZGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLW1hcmsge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMThweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLXN0ZXAge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWRvdCB7XFxuICBsZWZ0OiAycHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItZG90OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1kb3Q6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLFxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLWFjdGl2ZSxcXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWFwcGVhci5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyLWFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogcmNTbGlkZXJUb29sdGlwWm9vbURvd25JbjtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWxlYXZlLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZS1hY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0O1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZSB7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG59XFxuQGtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bkluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcmNTbGlkZXJUb29sdGlwWm9vbURvd25PdXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIH1cXG59XFxuLnJjLXNsaWRlci10b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5cHg7XFxuICB0b3A6IC05OTk5cHg7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtcGxhY2VtZW50LXRvcCB7XFxuICBwYWRkaW5nOiA0cHggMCA4cHggMDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLWlubmVyIHtcXG4gIHBhZGRpbmc6IDZweCAycHg7XFxuICBtaW4td2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNmM2YztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggI2Q5ZDlkOTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLWFycm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1wbGFjZW1lbnQtdG9wIC5yYy1zbGlkZXItdG9vbHRpcC1hcnJvdyB7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDA7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNmM2YzZjO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==