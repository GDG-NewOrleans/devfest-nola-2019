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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Sponsor.js";


var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Sponsor__Image",
  componentId: "d8ad2-0"
})(["margin:32px;max-width:80%;"]);

var Sponsor = function Sponsor(_ref) {
  var name = _ref.name,
      link = _ref.link,
      logo = _ref.logo,
      width = _ref.width;
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
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: img,
    alt: name,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ })

})
//# sourceMappingURL=index.js.7bf4d011f22e79d4693f.hot-update.js.map