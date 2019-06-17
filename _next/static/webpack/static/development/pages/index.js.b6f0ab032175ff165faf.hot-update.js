webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PersonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PersonList */ "./components/PersonList.js");
/* harmony import */ var _components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/AnchorButton */ "./components/elements/AnchorButton.js");
/* harmony import */ var _components_elements_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/Section */ "./components/elements/Section.js");
/* harmony import */ var _components_SponsorList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SponsorList */ "./components/SponsorList.js");
/* harmony import */ var _components_icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/icons/gdg_logo.svg */ "./components/icons/gdg_logo.svg");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/pages/index.js";









var organizers = __webpack_require__(/*! ../data/organizers.yml.json */ "./data/organizers.yml.json");

var sponsors = __webpack_require__(/*! ../data/sponsors.yml.json */ "./data/sponsors.yml.json");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1qq5ej1-0"
})(["font-family:'Product Sans',sans-serif;margin-left:20px;text-align:center;&#title{font-size:3em;}"]); // Offset scroll position due to navbar positioning

var OffsetHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__OffsetHeading",
  componentId: "sc-1qq5ej1-1"
})(["margin-top:-70px;padding-top:70px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    skyline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alt: "GDG",
    width: "120px",
    style: {
      position: 'relative',
      top: '11px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), " DevFest New Orleans 2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "October 5, 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "white/green",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Register now"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OffsetHeading, {
    id: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Speakers & Talks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "We are looking for speakers to deliver innovative talks in web, mobile, UI/UX, cloud, emerging technologies and more. Got a talk idea? We want to hear from you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "The CFP closes on June 30, 2019."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "white/blue",
    href: "https://www.papercall.io/devfest-neworleans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Submit your talk"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OffsetHeading, {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SponsorList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sponsors: sponsors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "mailto:gdgneworleans@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Become a sponsor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OffsetHeading, {
    id: "organizers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Organizers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PersonList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    people: organizers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.b6f0ab032175ff165faf.hot-update.js.map