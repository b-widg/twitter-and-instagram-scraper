(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrapeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrapeContext */ "./components/ScrapeContext.js");
var _jsxFileName = "C:\\Users\\bdwid\\Documents\\MiscPractice\\twitter-and-instagram-scraper\\components\\Page.js";


function Page(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrapeContext__WEBPACK_IMPORTED_MODULE_1__["ScrapeProvider"], {
    value: {
      hey: "ho",
      lets: "go"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children));
}

/***/ }),

/***/ "./components/ScrapeContext.js":
/*!*************************************!*\
  !*** ./components/ScrapeContext.js ***!
  \*************************************/
/*! exports provided: ScrapeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapeProvider", function() { return ScrapeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ScrapeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var ScrapeProvider = ScrapeContext.Provider;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbdwid%5CDocuments%5CMiscPractice%5Ctwitter-and-instagram-scraper%5Cpages%5Cindex.js!./":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbdwid%5CDocuments%5CMiscPractice%5Ctwitter-and-instagram-scraper%5Cpages%5Cindex.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "C:\\Users\\bdwid\\Documents\\MiscPractice\\twitter-and-instagram-scraper\\pages\\index.js";


function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "hey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "heyoooo"));
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbdwid%5CDocuments%5CMiscPractice%5Ctwitter-and-instagram-scraper%5Cpages%5Cindex.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbdwid%5CDocuments%5CMiscPractice%5Ctwitter-and-instagram-scraper%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbdwid%5CDocuments%5CMiscPractice%5Ctwitter-and-instagram-scraper%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_829b10deddf10e1653a8":
/*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_829b10deddf10e1653a8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map