webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SponsorList.js":
/*!***********************************!*\
  !*** ./components/SponsorList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sponsor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sponsor */ "./components/Sponsor.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/SponsorList.js";




var List = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "SponsorList__List",
  componentId: "ctxudo-0"
})(["display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;"]);

var getSponsorList = function getSponsorList(sponsors) {
  return sponsors.map(function (sponsor) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sponsor__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sponsor, {
      key: sponsor.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  });
};

var SponsorList = function SponsorList(_ref) {
  var sponsors = _ref.sponsors;
  console.log(sponsors);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Platinum"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, getSponsorList(sponsors.platinum)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Gold"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, getSponsorList(sponsors.gold)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Silver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, getSponsorList(sponsors.silver)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Bronze"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, getSponsorList(sponsors.bronze)));
};

/* harmony default export */ __webpack_exports__["default"] = (SponsorList);

/***/ })

})
//# sourceMappingURL=index.js.f330270a6ef641a53d6b.hot-update.js.map