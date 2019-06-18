webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sponsor.js":
/*!*******************************!*\
  !*** ./components/Sponsor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Sponsor.js";


var Sponsor = function Sponsor(_ref) {
  var name = _ref.name,
      link = _ref.link,
      logo = _ref.logo;
  // Hack to get the /static/ folder to work for gh-pages. Set to true for gh-pages build
  var ghPages = false;
  var assetPrefix = ghPages ? '/devfest-nola-2019' : '';
  var img = "".concat(assetPrefix).concat(logo);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ })

})
//# sourceMappingURL=index.js.e5f1442d0a18c1861a9c.hot-update.js.map