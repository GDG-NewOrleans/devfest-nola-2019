webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Person/PersonList */ "./components/Person/PersonList.js");
/* harmony import */ var _components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/AnchorButton */ "./components/elements/AnchorButton.js");
/* harmony import */ var _components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/elements/OffsetHeading */ "./components/elements/OffsetHeading.js");
/* harmony import */ var _components_elements_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/elements/Section */ "./components/elements/Section.js");
/* harmony import */ var _components_SponsorList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SponsorList */ "./components/SponsorList.js");
/* harmony import */ var _components_icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/icons/gdg_logo.svg */ "./components/icons/gdg_logo.svg");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_elements_Anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/elements/Anchor */ "./components/elements/Anchor.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.js");
/* harmony import */ var _components_Emcee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Emcee */ "./components/Emcee.js");

var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/pages/index.js";














var speakers = __webpack_require__(/*! ../data/speakers.yml.json */ "./data/speakers.yml.json");

var emcee = __webpack_require__(/*! ../data/mc.yml.json */ "./data/mc.yml.json")[0];

var schedule = __webpack_require__(/*! ../data/schedule.yml.json */ "./data/schedule.yml.json");

var sponsors = __webpack_require__(/*! ../data/sponsors.yml.json */ "./data/sponsors.yml.json");

var organizers = __webpack_require__(/*! ../data/organizers.yml.json */ "./data/organizers.yml.json");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1qq5ej1-0"
})(["font-family:'Product Sans',sans-serif;margin-left:20px;text-align:center;&#title{font-size:3em;}"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    skyline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alt: "GDG",
    width: "120px",
    style: {
      position: 'relative',
      top: '11px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), " DevFest New Orleans 2019")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "October 5, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "We are pleased to offer a limited number of scholarships to potential attendees who would experience financial hardship. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Anchor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "https://forms.gle/GNihqAGiK8aWgMZb7",
    target: "_blank",
    rel: "noopener noreferrer",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Apply here"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tito-widget", {
    event: "gdg-new-orleans/devfest-new-orleans-2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white/green",
    href: "https://ti.to/gdg-new-orleans/devfest-new-orleans-2019",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Register now"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Speakers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    people: speakers,
    rainbow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "emcee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Master of Ceremonies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Emcee__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, emcee, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Schedule"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_12__["default"], {
    schedule: schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SponsorList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sponsors: sponsors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:gdgneworleans@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Become a sponsor"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "organizers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Organizers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    people: organizers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.7a6f7a3fb45684d032ec.hot-update.js.map