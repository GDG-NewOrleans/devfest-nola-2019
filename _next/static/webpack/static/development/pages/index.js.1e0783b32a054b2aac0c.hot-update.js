webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Person/PersonList.js":
/*!*****************************************!*\
  !*** ./components/Person/PersonList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PersonCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PersonCard */ "./components/Person/PersonCard.js");

var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Person/PersonList.js";



var StyledCardDeck = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PersonList__StyledCardDeck",
  componentId: "sc-9aegl2-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;"]);

var PersonList = function PersonList(_ref) {
  var people = _ref.people;
  var cards = people.map(function (person) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PersonCard__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, person, {
      key: person.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCardDeck, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, cards);
};

/* harmony default export */ __webpack_exports__["default"] = (PersonList);

/***/ })

})
//# sourceMappingURL=index.js.1e0783b32a054b2aac0c.hot-update.js.map