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

/***/ "./components/Projects/components/Project/styles.ts":
/*!**********************************************************!*\
  !*** ./components/Projects/components/Project/styles.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: function() { return /* binding */ Content; },\n/* harmony export */   Icon: function() { return /* binding */ Icon; },\n/* harmony export */   IconsContainer: function() { return /* binding */ IconsContainer; },\n/* harmony export */   LineHorizontal: function() { return /* binding */ LineHorizontal; },\n/* harmony export */   MockUp: function() { return /* binding */ MockUp; },\n/* harmony export */   MockUpContainer: function() { return /* binding */ MockUpContainer; },\n/* harmony export */   ModalCard: function() { return /* binding */ ModalCard; },\n/* harmony export */   ModalContainer: function() { return /* binding */ ModalContainer; },\n/* harmony export */   ModalContainerDescription: function() { return /* binding */ ModalContainerDescription; },\n/* harmony export */   ModalContainerTitle: function() { return /* binding */ ModalContainerTitle; },\n/* harmony export */   MontalContent: function() { return /* binding */ MontalContent; },\n/* harmony export */   Presentation: function() { return /* binding */ Presentation; },\n/* harmony export */   ProjectFooter: function() { return /* binding */ ProjectFooter; },\n/* harmony export */   RoleInfo: function() { return /* binding */ RoleInfo; },\n/* harmony export */   TopInfo: function() { return /* binding */ TopInfo; },\n/* harmony export */   iconSkills: function() { return /* binding */ iconSkills; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  width: 300px;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 30px;\\n  margin: 20px 0;\\n \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"  \\n  color: white;\\n  display: flex;\\n  margin-bottom: 5px;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 5px;\\n\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  \\n  object-fit: fill;\\n  @media (min-width: 990px) {\\n\\n  justify-content: center;\\n\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\\n  > div:first-child {\\n    margin-bottom: 15px;\\n  }\\n  @media (min-width: 990px) {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n   \\n    > div:first-child {\\n      margin-bottom: 0;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nflex-direction:column;\\n  color: white;\\n  text-align: center;\\n  > span {\\n    font-size: 20px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  height: 50px;\\n  margin-top: 15px;\\n  margin-bottom: 15px;\\n  @media (min-width: 990px) {\\n    align-items: center;\\n  }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: white;\\n  opacity: 0.5;\\n  transition: 0.3s;\\n  text-decoration: none;\\n\\n  &:not(:last-child) {\\n    margin-right: 25px;\\n  }\\n\\n  &:hover {\\n    font-size: 50px;\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nborder-radius: 20px;\\n  display:flex;\\nopacity: 0.9;\\n\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nwidth: 90%;\\nborder: 1px white outset;\\nopacity: 0.5;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ncolor: black;\\nmargin-top: 20px;\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ncolor: black;\\nfont-size: 14px;\\nfont-weight: 500;\\ntext-align: justify;\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nflex:1;\\nflex-direction: column;\\npadding: 10px;\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\nborder: 1px solid #d3d3d3;\\npadding: 20px;\\nborder-radius: 10px;\\nmargin-top: 20px;\\n\"\n    ]);\n    _templateObject14 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject15() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nmargin-right: 5px;\\n\"\n    ]);\n    _templateObject15 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\nconst TopInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\nconst RoleInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].strong(_templateObject2());\nconst MockUpContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\nconst MockUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject4());\nconst ProjectFooter = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\nconst Presentation = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\nconst IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7());\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject8());\nconst ModalContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)(_templateObject9());\nconst LineHorizontal = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject10());\nconst ModalContainerTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography)(_templateObject11());\nconst ModalContainerDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography)(_templateObject12());\nconst MontalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject13());\nconst ModalCard = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject14());\nconst iconSkills = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon)(_templateObject15());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL2NvbXBvbmVudHMvUHJvamVjdC9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUjtBQUNnQjtBQUNrQjtBQUcxRCxNQUFNSyxVQUFVTCw2REFBVSxvQkFTL0I7QUFFSyxNQUFNTyxVQUFVUCw2REFBVSxxQkFLL0I7QUFFSyxNQUFNUSxXQUFXUixnRUFBYSxxQkFBRztBQUdqQyxNQUFNVSxrQkFBa0JWLDZEQUFVLHFCQUt2QztBQUVLLE1BQU1XLFNBQVNYLDZEQUFNQSxDQUFDQyxtREFBS0Esc0JBU2hDO0FBRUssTUFBTVcsZ0JBQWdCWiw2REFBVSxxQkFnQnJDO0FBRUssTUFBTWEsZUFBZWIsNkRBQVUscUJBUXBDO0FBRUssTUFBTWMsaUJBQWlCZCw2REFBVSxxQkFVdEM7QUFFSyxNQUFNZSxPQUFPZiwyREFBUSxxQkFjMUI7QUFFSyxNQUFNaUIsaUJBQWlCakIsNkRBQU1BLENBQUNFLDhDQUFHQSxzQkFLdEM7QUFJSyxNQUFNZ0IsaUJBQWVsQiw2REFBVSxzQkFJcEM7QUFHSyxNQUFNbUIsc0JBQXNCbkIsNkRBQU1BLENBQUNHLHFEQUFVQSx1QkFHbEQ7QUFFSyxNQUFNaUIsNEJBQTRCcEIsNkRBQU1BLENBQUNHLHFEQUFVQSx1QkFLeEQ7QUFDSyxNQUFNa0IsZ0JBQWdCckIsNkRBQVUsc0JBS3JDO0FBRUssTUFBTXNCLFlBQVl0Qiw2REFBVSxzQkFNakM7QUFDSyxNQUFNdUIsYUFBYXZCLDZEQUFNQSxDQUFDSSwyRUFBZUEsdUJBRTlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0L3N0eWxlcy50cz8xMjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBCb3gsVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BJbmZvID0gc3R5bGVkLmRpdmAgIFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUm9sZUluZm8gPSBzdHlsZWQuc3Ryb25nYGA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1vY2tVcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vY2tVcCA9IHN0eWxlZChJbWFnZSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzZW50YXRpb24gPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICA+IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuYWBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxyXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxub3BhY2l0eTogMC45O1xyXG5cclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVIb3Jpem9udGFsPXN0eWxlZC5kaXZgXHJcbndpZHRoOiA5MCU7XHJcbmJvcmRlcjogMXB4IHdoaXRlIG91dHNldDtcclxub3BhY2l0eTogMC41O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lclRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG5jb2xvcjogYmxhY2s7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxDb250YWluZXJEZXNjcmlwdGlvbiA9IHN0eWxlZChUeXBvZ3JhcGh5KWBcclxuY29sb3I6IGJsYWNrO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb250YWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuZmxleDoxO1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsQ2FyZCA9IHN0eWxlZC5kaXZgXHJcblxyXG5ib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgaWNvblNraWxscyA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxuYDtcclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJJbWFnZSIsIkJveCIsIlR5cG9ncmFwaHkiLCJGb250QXdlc29tZUljb24iLCJDb250ZW50IiwiZGl2IiwiVG9wSW5mbyIsIlJvbGVJbmZvIiwic3Ryb25nIiwiTW9ja1VwQ29udGFpbmVyIiwiTW9ja1VwIiwiUHJvamVjdEZvb3RlciIsIlByZXNlbnRhdGlvbiIsIkljb25zQ29udGFpbmVyIiwiSWNvbiIsImEiLCJNb2RhbENvbnRhaW5lciIsIkxpbmVIb3Jpem9udGFsIiwiTW9kYWxDb250YWluZXJUaXRsZSIsIk1vZGFsQ29udGFpbmVyRGVzY3JpcHRpb24iLCJNb250YWxDb250ZW50IiwiTW9kYWxDYXJkIiwiaWNvblNraWxscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/components/Project/styles.ts\n"));

/***/ })

});