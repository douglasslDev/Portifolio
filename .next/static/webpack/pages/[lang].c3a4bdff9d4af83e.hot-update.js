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

/***/ "./components/AboutMe/styles.ts":
/*!**************************************!*\
  !*** ./components/AboutMe/styles.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutMeContainer: function() { return /* binding */ AboutMeContainer; },\n/* harmony export */   ContactMe: function() { return /* binding */ ContactMe; },\n/* harmony export */   Content: function() { return /* binding */ Content; },\n/* harmony export */   DataAboutMe: function() { return /* binding */ DataAboutMe; },\n/* harmony export */   Description: function() { return /* binding */ Description; },\n/* harmony export */   Icon: function() { return /* binding */ Icon; },\n/* harmony export */   IconsContainer: function() { return /* binding */ IconsContainer; },\n/* harmony export */   ImagePersonal: function() { return /* binding */ ImagePersonal; },\n/* harmony export */   LineHorizontal: function() { return /* binding */ LineHorizontal; },\n/* harmony export */   TitleName: function() { return /* binding */ TitleName; },\n/* harmony export */   TranslateContainer: function() { return /* binding */ TranslateContainer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n  padding:10%;\\n \\n  @media (min-width: 990px) {\\n    padding:10%;\\n    justify-content: center;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\njustify-content: end;\\npadding: 0 20px;\\ntransition: 0.3s;\\nmargin-bottom: 50px;\\n\\n  > span {\\n    font-size: 32px;\\n    padding: 0 10px;\\n  }\\n\\n  > span:nth-child(2) {\\n    color: darkgray;\\n  }\\n\\n  > span:first-child,\\n  span:last-child {\\n    cursor: pointer;\\n    font-size: 32px;\\n  }\\n\\n  > span:first-child:hover,\\n  span:last-child:hover {\\n    opacity: 0.5;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\ncolor: white;\\n  font-size: 35px;\\n  font-family: 'serif';\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nborder-radius: 80px\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nwidth: 100px;\\nborder: 1px black solid;\\n\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\ncolor: white;\\nwidth: 60%;\\n  margin-top: 8%;\\n  text-align: center;\\n  @media (min-width: 990px) {\\ndisplay: flex;\\n}\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-top: 5%;\\n  display: flex;\\n  align-items: center;\\n  height: 50px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\n  color: #56baec;\\n  opacity: 0.5;\\n  transition: 0.3s;\\n  &:not(:last-child) {\\n    margin-right: 25px;\\n  }\\n\\n  &:hover {\\n    font-size: 50px;\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nwidth: 150px;\\nmargin-top: 20px;\\n\\nmargin-bottom: 60px;\\n@media (min-width: 990px) {\\ndisplay: flex;\\nmargin-top: 20px;\\n\\n}\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nflex-direction: column;\\n\\n@media (min-width: 990px) {\\ndisplay: flex;\\nflex-direction: row;\\n}\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nflex-direction: column;\\njustify-content: center;\\nalign-items: center;\\n@media (min-width: 990px) {\\ndisplay: flex;\\n}\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\nconst TranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\nconst TitleName = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1(_templateObject2());\nconst ImagePersonal = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject3());\nconst LineHorizontal = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p(_templateObject5());\nconst IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject7());\nconst ContactMe = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button)(_templateObject8());\nconst AboutMeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject9());\nconst DataAboutMe = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject10());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0TWUvc3R5bGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1I7QUFDWTtBQUVwQyxNQUFNRyxVQUFVSCxpRUFBYyxvQkFRbkM7QUFFSyxNQUFNSyxxQkFBcUJMLDZEQUFVLHFCQTBCMUM7QUFFSyxNQUFNTyxZQUFZUCw0REFBUyxxQkFLaEM7QUFFSyxNQUFNUyxnQkFBZ0JULDZEQUFNQSxDQUFDQyxtREFBS0Esc0JBRXBCO0FBSWQsTUFBTVMsaUJBQWVWLDZEQUFVLHFCQUlwQztBQUdLLE1BQU1XLGNBQWNYLDJEQUFRLHFCQVNqQztBQUVLLE1BQU1hLGlCQUFpQmIsNkRBQVUscUJBS3RDO0FBRUssTUFBTWMsT0FBT2QsMkRBQVEscUJBYTFCO0FBSUssTUFBTWdCLFlBQVloQiw2REFBTUEsQ0FBQ0UscURBQU1BLHNCQVVwQztBQUdLLE1BQU1lLG1CQUFtQmpCLDZEQUFVLHFCQVF4QztBQUdLLE1BQU1rQixjQUFjbEIsNkRBQVUsc0JBUW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXRNZS9zdHlsZXMudHM/Y2Y2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5zZWN0aW9uYFxyXG5cclxuICBwYWRkaW5nOjEwJTtcclxuIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG4gICAgcGFkZGluZzoxMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNsYXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbnBhZGRpbmc6IDAgMjBweDtcclxudHJhbnNpdGlvbjogMC4zcztcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gID4gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuXHJcbiAgPiBzcGFuOmZpcnN0LWNoaWxkLFxyXG4gIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG5cclxuICA+IHNwYW46Zmlyc3QtY2hpbGQ6aG92ZXIsXHJcbiAgc3BhbjpsYXN0LWNoaWxkOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVOYW1lID0gc3R5bGVkLmgxYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnc2VyaWYnO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlUGVyc29uYWwgPSBzdHlsZWQoSW1hZ2UpYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5ib3JkZXItcmFkaXVzOiA4MHB4YDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVIb3Jpem9udGFsPXN0eWxlZC5kaXZgXHJcbndpZHRoOiAxMDBweDtcclxuYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5jb2xvcjogd2hpdGU7XHJcbndpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5hYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjNTZiYWVjO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdE1lID0gc3R5bGVkKEJ1dHRvbilgXHJcbndpZHRoOiAxNTBweDtcclxubWFyZ2luLXRvcDogMjBweDtcclxuXHJcbm1hcmdpbi1ib3R0b206IDYwcHg7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dE1lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFBYm91dE1lID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG59XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJJbWFnZSIsIkJ1dHRvbiIsIkNvbnRlbnQiLCJzZWN0aW9uIiwiVHJhbnNsYXRlQ29udGFpbmVyIiwiZGl2IiwiVGl0bGVOYW1lIiwiaDEiLCJJbWFnZVBlcnNvbmFsIiwiTGluZUhvcml6b250YWwiLCJEZXNjcmlwdGlvbiIsInAiLCJJY29uc0NvbnRhaW5lciIsIkljb24iLCJhIiwiQ29udGFjdE1lIiwiQWJvdXRNZUNvbnRhaW5lciIsIkRhdGFBYm91dE1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AboutMe/styles.ts\n"));

/***/ })

});