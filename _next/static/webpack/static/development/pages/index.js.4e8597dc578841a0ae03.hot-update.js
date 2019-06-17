webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PersonCard.js":
/*!**********************************!*\
  !*** ./components/PersonCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialLink */ "./components/SocialLink.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/PersonCard.js";



var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PersonCard__StyledCard",
  componentId: "w17h0d-0"
})(["padding:16px;width:280px;&.card h1{font-size:1.6em;margin-bottom:0;}&.card h2{font-size:1.4em;}"]);
var StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "PersonCard__StyledImg",
  componentId: "w17h0d-1"
})(["border-radius:50%;border:4px solid white;width:250px;"]);

var PersonCard = function PersonCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      bio = _ref.bio,
      company = _ref.company,
      twitter = _ref.twitter,
      github = _ref.github,
      linkedin = _ref.linkedin,
      website = _ref.website,
      blog = _ref.blog;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCard, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledImg, {
    src: image,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, bio), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, github ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["GithubLink"], {
    username: github,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : null, twitter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["TwitterLink"], {
    username: twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }) : null, linkedin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["LinkedInLink"], {
    link: linkedin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : null, website ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["WebsiteLink"], {
    link: website,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : null, blog ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["BlogLink"], {
    link: blog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ })

})
//# sourceMappingURL=index.js.4e8597dc578841a0ae03.hot-update.js.map