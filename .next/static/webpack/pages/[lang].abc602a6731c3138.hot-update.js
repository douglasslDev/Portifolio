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

/***/ "./components/Header/styles.ts":
/*!*************************************!*\
  !*** ./components/Header/styles.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: function() { return /* binding */ Content; },\n/* harmony export */   HeaderContainer: function() { return /* binding */ HeaderContainer; },\n/* harmony export */   Links: function() { return /* binding */ Links; },\n/* harmony export */   NavItem: function() { return /* binding */ NavItem; },\n/* harmony export */   NavList: function() { return /* binding */ NavList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\npadding: 20px;\\n  align-items: center;\\nwidth: 90%;\\nheight: 100px;\\nborder-radius: 120px;\\nbackground: black;\\nopacity: 0.8;\\nposition: fixed;\\ntop: 5vh;\\n&:hover{\\n  opacity: 1;\\n}\\n\\n@media (min-width: 990px) {\\n  height: 120px;\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  \\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n \\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nfont-size: 14px;\\nfont-weight: 400;\\ncolor: white;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].footer(_templateObject());\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].footer(_templateObject1());\nconst NavList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul(_templateObject2());\nconst NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li(_templateObject3());\nconst Links = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBR3RCLE1BQU1FLFVBQVVGLGdFQUFhLG9CQWtCbEM7QUFDSyxNQUFNSSxrQkFBa0JKLGdFQUFhLHFCQUUxQztBQUlLLE1BQU1LLFVBQVVMLDREQUFTLHFCQUc5QjtBQUVLLE1BQU1PLFVBQVVQLDREQUFTLHFCQUc5QjtBQUVLLE1BQU1TLFFBQVFULDZEQUFNQSxDQUFDQyxrREFBSUEsc0JBSTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cz9iYjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5mb290ZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxucGFkZGluZzogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG53aWR0aDogOTAlO1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMjBweDtcclxuYmFja2dyb3VuZDogYmxhY2s7XHJcbm9wYWNpdHk6IDAuODtcclxucG9zaXRpb246IGZpeGVkO1xyXG50b3A6IDV2aDtcclxuJjpob3ZlcntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG5cclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkxpc3QgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmxpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rcyA9IHN0eWxlZChMaW5rKWBcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5jb2xvcjogd2hpdGU7XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJDb250ZW50IiwiZm9vdGVyIiwiSGVhZGVyQ29udGFpbmVyIiwiTmF2TGlzdCIsInVsIiwiTmF2SXRlbSIsImxpIiwiTGlua3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/styles.ts\n"));

/***/ })

});