webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/elements/AnchorButton.js":
/*!*********************************************!*\
  !*** ./components/elements/AnchorButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./components/theme.js");

var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/elements/AnchorButton.js";



var smallStyles = "\n  font-size: 0.75em;\n";
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "AnchorButton__StyledButton",
  componentId: "sc-1553czf-0"
})(["", " ", " ", " padding:0.5em 1em;text-decoration:none;", ""], function (props) {
  return props.color == 'blue' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";color:white;&:hover{background-color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blueLight);
}, function (props) {
  return props.color == 'white/green' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:white;color:", ";&:hover{background-color:#eee;}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.green);
}, function (props) {
  return props.color == 'white/blue' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:white;color:", ";&:hover{background-color:#eee;}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blue);
}, function (props) {
  if (props.small) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], smallStyles);
  }
});
StyledButton.defaultProps = {
  color: 'blue'
};

var AnchorButton = function AnchorButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AnchorButton);

/***/ })

})
//# sourceMappingURL=index.js.3ec8c7ca9fe69d592363.hot-update.js.map