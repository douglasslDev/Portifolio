"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[lang]",{

/***/ "./components/Slider/data1.tsx":
/*!*************************************!*\
  !*** ./components/Slider/data1.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useTranslation */ \"./hooks/useTranslation.tsx\");\n\n\n\n\n\n\n\nconst t = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"javaScript\");\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        id: 1,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faReact,\n        title: \"React\",\n        desc: \"O React.js \\xe9 uma biblioteca JavaScript amplamente utilizada para desenvolver interfaces de usu\\xe1rio (UI) interativas em aplica\\xe7\\xf5es web.  \"\n    },\n    {\n        id: 2,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faReact,\n        title: \"React Native\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    },\n    {\n        id: 3,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSquareJs,\n        title: \"JavaScript\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    },\n    {\n        id: 4,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHtml5,\n        title: \"Html5\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    },\n    {\n        id: 5,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCss3,\n        title: \"Css3\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    },\n    {\n        id: 6,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,\n        title: \"Github\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    },\n    {\n        id: 7,\n        bgColor: \"#000\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faNodeJs,\n        title: \"Node.Js\",\n        desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \"\n    }\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9kYXRhMS50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQzZEO0FBQ0Q7QUFDRTtBQUNEO0FBQ0M7QUFDRjtBQUNKO0FBRXhELE1BQU1PLElBQUlELGlFQUFjQSxDQUFDO0FBRXpCLCtEQUFlO0lBQ2I7UUFDRUUsSUFBSTtRQUNKQyxTQUFTO1FBQ1BDLE1BQU1WLHVFQUFPQTtRQUNmVyxPQUFPO1FBQ1BDLE1BQ0U7SUFDSjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsU0FBUztRQUNQQyxNQUFNVix1RUFBT0E7UUFDZlcsT0FBTztRQUNQQyxNQUNFO0lBQ0o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsTUFBTU4sMEVBQVVBO1FBQ2hCTyxPQUFPO1FBQ1BDLE1BQ0U7SUFDSjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsU0FBUztRQUNUQyxNQUFNUCx1RUFBT0E7UUFDYlEsT0FBTztRQUNQQyxNQUNFO0lBQ0o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsTUFBTVQsc0VBQU1BO1FBQ1pVLE9BQU87UUFDUEMsTUFDRTtJQUNKO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU1SLHdFQUFRQTtRQUNkUyxPQUFPO1FBQ1BDLE1BQ0U7SUFDSjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsU0FBUztRQUNUQyxNQUFNTCx3RUFBUUE7UUFDZE0sT0FBTztRQUNQQyxNQUNFO0lBQ0o7Q0FDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyL2RhdGExLnRzeD81MDIzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBmYVJlYWN0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQ3NzMyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUh0bWw1IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFTcXVhcmVKc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFOb2RlSnN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uXCI7XHJcblxyXG5jb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oXCJqYXZhU2NyaXB0XCIpO1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGJnQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBpY29uOiBmYVJlYWN0LFxyXG4gICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgIGRlc2M6XHJcbiAgICAgIFwiTyBSZWFjdC5qcyDDqSB1bWEgYmlibGlvdGVjYSBKYXZhU2NyaXB0IGFtcGxhbWVudGUgdXRpbGl6YWRhIHBhcmEgZGVzZW52b2x2ZXIgaW50ZXJmYWNlcyBkZSB1c3XDoXJpbyAoVUkpIGludGVyYXRpdmFzIGVtIGFwbGljYcOnw7VlcyB3ZWIuICBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBiZ0NvbG9yOiBcIiMwMDBcIixcclxuICAgICAgaWNvbjogZmFSZWFjdCxcclxuICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgZGVzYzpcclxuICAgICAgXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBiZ0NvbG9yOiBcIiMwMDBcIixcclxuICAgIGljb246IGZhU3F1YXJlSnMsXHJcbiAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGJnQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgaWNvbjogZmFIdG1sNSxcclxuICAgIHRpdGxlOiBcIkh0bWw1XCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGJnQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgaWNvbjogZmFDc3MzLFxyXG4gICAgdGl0bGU6IFwiQ3NzM1wiLFxyXG4gICAgZGVzYzpcclxuICAgICAgXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBiZ0NvbG9yOiBcIiMwMDBcIixcclxuICAgIGljb246IGZhR2l0aHViLFxyXG4gICAgdGl0bGU6IFwiR2l0aHViXCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIGJnQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgaWNvbjogZmFOb2RlSnMsXHJcbiAgICB0aXRsZTogXCJOb2RlLkpzXCIsXHJcbiAgICBkZXNjOlxyXG4gICAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiXHJcbiAgfVxyXG5dO1xyXG4iXSwibmFtZXMiOlsiZmFSZWFjdCIsImZhQ3NzMyIsImZhR2l0aHViIiwiZmFIdG1sNSIsImZhU3F1YXJlSnMiLCJmYU5vZGVKcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImlkIiwiYmdDb2xvciIsImljb24iLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider/data1.tsx\n"));

/***/ })

});