webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Schedule.js":
/*!********************************!*\
  !*** ./components/Schedule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./components/theme.js");

var _jsxFileName = "/Users/sia1/Projects/devfest-nola-2019/components/Schedule.js";




var Article = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Schedule__Article",
  componentId: "nic6bg-0"
})(["display:grid;grid-template-columns:100px 1fr;grid-gap:8px;margin-bottom:16px;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Schedule__Time",
  componentId: "nic6bg-1"
})(["font-size:1.1em;margin:16px 0 0 0;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Schedule__Title",
  componentId: "nic6bg-2"
})(["font-size:1.3em;margin:16px 0 0 0;"]);
var Speaker = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Schedule__Speaker",
  componentId: "nic6bg-3"
})(["font-size:1.1em;font-style:italic;font-weight:400;margin:8px 0 0 0;"]);
var SpeakerLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Schedule__SpeakerLink",
  componentId: "nic6bg-4"
})(["color:white;text-decoration:none;&hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.lightGrey);

var Event = function Event(_ref) {
  var title = _ref.title,
      date = _ref.date,
      speaker = _ref.speaker,
      speakerId = _ref.speakerId,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), !!speaker && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    passHref: true,
    href: "/#".concat(speakerId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpeakerLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Speaker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, speaker))), !!description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
};

var Schedule = function Schedule(_ref2) {
  var schedule = _ref2.schedule;
  var scheduleItems = schedule.map(function (event) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Event, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event, {
      key: event.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, scheduleItems);
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=index.js.2e85d8902fd3d57d5bc5.hot-update.js.map