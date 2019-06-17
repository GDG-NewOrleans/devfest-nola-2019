webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SocialLink.js":
/*!**********************************!*\
  !*** ./components/SocialLink.js ***!
  \**********************************/
/*! exports provided: GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubLink", function() { return GithubLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterLink", function() { return TwitterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInLink", function() { return LinkedInLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteLink", function() { return WebsiteLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLink", function() { return BlogLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/github.svg */ "./components/icons/github.svg");
/* harmony import */ var _icons_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/twitter.svg */ "./components/icons/twitter.svg");
/* harmony import */ var _icons_linkedin_in_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/linkedin-in.svg */ "./components/icons/linkedin-in.svg");
/* harmony import */ var _icons_globe_africa_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/globe-africa.svg */ "./components/icons/globe-africa.svg");
/* harmony import */ var _icons_pen_nib_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/pen-nib.svg */ "./components/icons/pen-nib.svg");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "./components/theme.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/SocialLink.js";








var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "SocialLink__StyledLink",
  componentId: "sc-1jltyee-0"
})(["margin-right:12px;svg{width:24px;fill:white;}svg:hover{fill:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.lightGrey);

var SocialLink = function SocialLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children);
};

var GithubLink = function GithubLink(_ref2) {
  var username = _ref2.username;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: "https://github.com/".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_github_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alt: "Github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};
var TwitterLink = function TwitterLink(_ref3) {
  var username = _ref3.username;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: "https://twitter.com/".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    alt: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};
var LinkedInLink = function LinkedInLink(_ref4) {
  var link = _ref4.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_linkedin_in_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    alt: "LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};
var WebsiteLink = function WebsiteLink(_ref5) {
  var link = _ref5.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_globe_africa_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alt: "personal website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};
var BlogLink = function BlogLink(_ref6) {
  var link = _ref6.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_pen_nib_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    alt: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.db46181c721f36cae565.hot-update.js.map