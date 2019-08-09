webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tito.js":
/*!****************************!*\
  !*** ./components/Tito.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Tito.js";


var Tito = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tito",
  componentId: "ulkgqu-0"
})(["*/ *{box-sizing:border-box}.tito-wrapper{border:1px solid #ccc;background:rgba(0,0,0,0.02);font-family:sans-serif;color:#333;margin:20px auto;max-width:900px;padding:10px 0 0 0;width:100%}.tito-ticket-list{display:block;list-style-type:none;margin:0;padding:0;width:100%}#tito-previous-releases,.tito-ticket-list.tito-ticket-waitlist{margin:0}.tito-ticket.row{display:block !important;border-bottom:1px solid #ccc !important;margin:0 15px !important;min-height:54px !important;padding:10px 0 !important}.tito-ticket:after{content:'';display:table;clear:both}.tito-ticket-name-wrapper,.tito-ticket-price-quantity-wrapper{border:none;display:block;float:left;vertical-align:middle;width:100%}@media screen and (min-width:520px){.tito-ticket-name-wrapper,.tito-ticket-price-quantity-wrapper{width:50%}}.tito-ticket-name{display:block;font-size:16px;font-weight:normal;line-height:1.2;margin:8px 0 5px}.tito-ticket-name .label.label-default{border:1px solid #333 !important;border-radius:2px !important;color:#333 !important;font-size:10px !important;font-weight:bold !important;margin-left:5px !important;padding:2px 5px !important;position:relative !important;top:-1px !important;text-transform:uppercase !important}.tito-ticket-name-wrapper .tito-tickets-remaining{background:#ddd;border:1px solid rgba(51,51,51,0.2);color:#333;font-size:10px;padding:2px 5px;position:relative;top:-3px;margin-left:10px;white-space:nowrap}.tito-ticket-description{color:#adadad;font-size:12px}.tito-degressive-price-desc+.tito-ticket-description{margin-top:.5rem}.tito-ticket-price-quantity{text-align:right;width:auto}@media screen and (min-width:520px){.tito-ticket-price-quantity{float:right}}.tito-ticket-price{float:left;text-align:left;width:50%}@media screen and (min-width:520px){.tito-ticket-price{text-align:right;width:auto}}.tito-ticket-quantity{float:right;min-width:70px}.tito-ticket-quantity span{margin:0 10px}input[type=text].tito-ticket-quantity-field,input[type=text].tito-ticket-donation-field{background-color:#fff !important;border:1px solid #ccc !important;border-radius:4px !important;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075) !important;color:#333 !important;display:inline-block !important;font-size:14px !important;height:34px !important;line-height:1.42857143 !important;margin:0 !important;padding:6px 12px !important;text-align:center !important}input[type=text].tito-ticket-quantity-field{width:45px !important}input[type=text].tito-ticket-donation-field{width:85px !important;margin-left:6px !important}.tito-ticket-price span{display:block;font-size:16px;line-height:34px}.tito-ticket-vat{color:#adadad;font-size:10px;padding-bottom:5px}.tito-ticket-status span{background:#efefef;border-radius:4px;color:#adadad;display:inline-block;font-size:14px;height:34px;line-height:34px;min-width:90px;padding:0 10px;text-align:center;text-decoration:none;width:100%}.btn.btn-default.btn-waitlist{background:#fff;border:1px solid #ccc;border-radius:4px !important;color:#333;font-size:14px !important;height:34px !important;line-height:1.42857143 !important;padding:6px 12px !important;white-space:nowrap !important;width:200px}.btn.btn-default.btn-waitlist:hover{border:1px solid #333}.tito-discount-code{display:block;margin:0 30px;padding:5px 0}@media screen and (min-width:520px){.tito-discount-code{float:left}}.tito-discount-code-label{display:none}.btn.btn-default.tito-discount-apply-button{display:none !important}.tito-discount-code .tab-pane.tito-discount-code-show.active{display:none !important}.tito-discount-code .tab-pane.tito-discount-code-edit{display:block !important;visibility:visible !important}input.form-control.tito-discount-code-field.discount-code-field{background:#fff !important;border:1px solid #ccc !important;border-radius:4px !important;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075) !important;display:inline-block !important;font-size:14px !important;height:34px !important;line-height:1.42857143 !important;margin:5px 0 !important;padding:6px 12px !important;width:100% !important}@media screen and (min-width:520px){input.form-control.tito-discount-code-field.discount-code-field{width:200px !important}}.tito-discount-code-show{padding-top:15px}.tito-discount-code-edit,.tito-discount-code-show{display:none}.tito-discount-code-edit.active,.tito-discount-code-show.active{display:inline-block}.tito-submit-wrapper{margin:0 15px;padding:10px 0;text-align:right}.tito-submit{background:#428bca !important;border:1px solid #357ebd !important;border-radius:4px !important;color:#fff !important;cursor:pointer !important;font-size:14px !important;height:34px !important;line-height:1.42857143 !important;margin:0 !important;padding:6px 12px !important;text-align:center !important;width:100% !important}@media screen and (min-width:520px){.tito-submit{width:100px !important}}.tito-submit:hover{border-color:#285e8e !important;background:#3276b1 !important}.tito-ticket.tito-locked-ticket>div{padding:10px 0 !important}.tito-ticket.tito-locked-ticket label,.tito-ticket.tito-locked-ticket span{opacity:.5 !important}.locked-tickets-message p{font-size:14px !important;line-height:1.3 !important;opacity:.5 !important}.tito-badge-link{font-size:12px;display:inline-block;margin:15px 0 5px;text-align:center;width:100%}"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tito, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://js.tito.io/v1",
    async: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tito-widget", {
    event: "gdg-new-orleans/devfest-new-orleans-2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
});

/***/ }),

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
/* harmony import */ var _components_Tito__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Tito */ "./components/Tito.js");

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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    skyline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      lineNumber: 32
    },
    __self: this
  }), " DevFest New Orleans 2019")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "October 5, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "We are pleased to offer a limited number of scholarships to potential attendees who would experience financial hardship. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Anchor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "https://forms.gle/GNihqAGiK8aWgMZb7",
    target: "_blank",
    rel: "noopener noreferrer",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Apply here"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tito__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white/green",
    href: "https://ti.to/gdg-new-orleans/devfest-new-orleans-2019",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Register now"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Speakers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    people: speakers,
    rainbow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "emcee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Master of Ceremonies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Emcee__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, emcee, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Schedule"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_12__["default"], {
    schedule: schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SponsorList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sponsors: sponsors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:gdgneworleans@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Become a sponsor"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "organizers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Organizers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    people: organizers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.6f2aff2774f9e636dd4d.hot-update.js.map