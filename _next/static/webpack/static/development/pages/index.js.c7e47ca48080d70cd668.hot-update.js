webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/elements/Section.js":
/*!****************************************!*\
  !*** ./components/elements/Section.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _nola_google_skyline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nola-google-skyline.svg */ "./components/elements/nola-google-skyline.svg");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/elements/Section.js";




var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-1gqzih2-0"
})(["", " ", " ", " align-items:center;display:flex;flex-direction:column;width:100%;"], function (props) {
  return props.color === 'blue' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background-color:", ";color:white;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blue);
}, function (props) {
  return props.color === 'red' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background-color:", ";color:white;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.red);
}, function (props) {
  return props.color === 'green' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background-color:", ";color:white;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.green);
});
var InnerSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__InnerSection",
  componentId: "sc-1gqzih2-1"
})(["max-width:800px;padding:4em 1em;h2{margin-bottom:30px;}p:last-of-type{margin-top:40px;}"]);

var Section = function Section(_ref) {
  var skyline = _ref.skyline,
      children = _ref.children,
      color = _ref.color;

  if (skyline) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSection, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nola_google_skyline_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: "max-width:100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContainer, {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ })

})
//# sourceMappingURL=index.js.c7e47ca48080d70cd668.hot-update.js.map