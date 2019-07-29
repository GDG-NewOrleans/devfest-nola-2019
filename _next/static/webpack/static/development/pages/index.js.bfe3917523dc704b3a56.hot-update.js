webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Person/PersonCard.js":
/*!*****************************************!*\
  !*** ./components/Person/PersonCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialLink */ "./components/SocialLink.js");
/* harmony import */ var _elements_ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ProfileImage */ "./components/elements/ProfileImage.js");
var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Person/PersonCard.js";




var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PersonCard__StyledCard",
  componentId: "vrc94i-0"
})(["margin:16px 0;padding:16px;text-align:center;width:272px;&.card h1{font-size:1.6em;margin-top:-250px;padding-top:250px;margin-bottom:0;}&.card h2{font-size:1.4em;}"]);

var PersonCard = function PersonCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      bio = _ref.bio,
      company = _ref.company,
      twitter = _ref.twitter,
      github = _ref.github,
      linkedin = _ref.linkedin,
      website = _ref.website,
      blog = _ref.blog,
      color = _ref.color,
      id = _ref.id;
  // Hack to get the /static/ folder to work for gh-pages. Set to true for gh-pages build
  var ghPages = false;
  var assetPrefix = ghPages ? '/devfest-nola-2019' : '';
  var img = "".concat(assetPrefix).concat(image);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCard, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: img,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, bio), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, github ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["GithubLink"], {
    username: github,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : null, twitter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["TwitterLink"], {
    username: twitter,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : null, linkedin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["LinkedInLink"], {
    link: linkedin,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : null, website ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["WebsiteLink"], {
    link: website,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }) : null, blog ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["BlogLink"], {
    link: blog,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ })

})
//# sourceMappingURL=index.js.bfe3917523dc704b3a56.hot-update.js.map