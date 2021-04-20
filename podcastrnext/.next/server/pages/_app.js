(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "date-fns/format"
var format_namespaceObject = require("date-fns/format");;
var format_default = /*#__PURE__*/__webpack_require__.n(format_namespaceObject);
;// CONCATENATED MODULE: external "date-fns/locale/pt-BR"
var pt_BR_namespaceObject = require("date-fns/locale/pt-BR");;
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR_namespaceObject);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(372);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx





function Header() {
  const currentDate = format_default()(new Date(), 'EEEEEE, d MMMM', {
    locale: (pt_BR_default())
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (styles_module_default()).headerContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/logo.svg",
      alt: "Podcastr"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "O melhor para voc\xEA ouvir, sempre"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: currentDate
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Player/styles.module.scss
var Player_styles_module = __webpack_require__(638);
var Player_styles_module_default = /*#__PURE__*/__webpack_require__.n(Player_styles_module);
;// CONCATENATED MODULE: ./src/components/Player/index.tsx



function Player() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Player_styles_module_default()).playerContainer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Tocando agora"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Player_styles_module_default()).emptyPlayer,
      children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Selecione um podcast para ouvir"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: (Player_styles_module_default()).empty,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Player_styles_module_default()).progress,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "00:00"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Player_styles_module_default()).slider,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Player_styles_module_default()).emptySlider
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "00:00"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Player_styles_module_default()).buttons,
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: (Player_styles_module_default()).playButton,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play.svg",
            alt: "Tocar"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play-next.svg",
            alt: "Tocar proxima"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          })
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/styles/app.module.scss
var app_module = __webpack_require__(811);
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (app_module_default()).wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    }), /*#__PURE__*/jsx_runtime_.jsx(Player, {})]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 372:
/***/ (function(module) {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__3jyUX"
};


/***/ }),

/***/ 638:
/***/ (function(module) {

// Exports
module.exports = {
	"playerContainer": "styles_playerContainer__2kTpC",
	"empty": "styles_empty__XvMyC",
	"emptyPlayer": "styles_emptyPlayer__WHPi6",
	"progress": "styles_progress__ULW9V",
	"slider": "styles_slider__3_Mkb",
	"emptySlider": "styles_emptySlider__3p9Ad",
	"buttons": "styles_buttons__i4fo8",
	"playButton": "styles_playButton__fmvI6"
};


/***/ }),

/***/ 811:
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "app_wrapper__X8llh"
};


/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(649));
module.exports = __webpack_exports__;

})();