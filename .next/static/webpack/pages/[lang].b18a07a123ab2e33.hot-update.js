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

/***/ "./components/Slider/styles.ts":
/*!*************************************!*\
  !*** ./components/Slider/styles.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonFontAwesomeIcon: function() { return /* binding */ ButtonFontAwesomeIcon; },\n/* harmony export */   Buttons: function() { return /* binding */ Buttons; },\n/* harmony export */   CardContainer: function() { return /* binding */ CardContainer; },\n/* harmony export */   CardReflection: function() { return /* binding */ CardReflection; },\n/* harmony export */   CarouselContainerSection: function() { return /* binding */ CarouselContainerSection; },\n/* harmony export */   Content: function() { return /* binding */ Content; },\n/* harmony export */   DescriptionContainer: function() { return /* binding */ DescriptionContainer; },\n/* harmony export */   TitleContainer: function() { return /* binding */ TitleContainer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\n  position: relative;\\n  flex-direction:column;\\n  perspective: 200px;\\n  transform-style: preserve-3d;\\n    width: 362px;\\n  height: 272px; \\n  margin: 0 auto;\\n  justify-content: center;\\n  align-items: center;\\ntext-align: center;\\n\\n  @media (min-width: 990px) {\\n    perspective: 1000px;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay:flex;\\ncolor: white;\\ntext-align: center;\\nalign-items: center;\\njustify-content: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay:flex;\\ncolor: white;\\nfont-weight: 300;\\ntext-align: center;\\nfont-size: 10px;\\nalign-items: center;\\njustify-content: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\nwidth: 80%;\\nheight: 302px;\\nalign-items: center;\\nflex-direction: column;\\njustify-content: center;\\n  \\n  transition: transform 500ms ease 0s, opacity 500ms ease 0s,\\nvisibility 500ms ease 0s;\\n  position: absolute;\\n  top: 0;\\n  border-radius: 12px;\\n  justify-content: center;\\n  align-items: center;\\n\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay:flex;\\nflex-direction: column;\\ntext-align: center;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  width: 80%;\\n  height: 40px;\\n  bottom:   -65px;\\n  border-radius: 12px;\\n  transition: transform 500ms ease 0s, opacity 500ms ease 0s,\\n  visibility 500ms ease 0s;\\n    \"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-top: 80px;\\n  margin-bottom: 50px;\\n\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nborder: 1px ;\\npadding: 25px;\\nborder-radius: 60px;\\n&:hover{\\nbackground: white;\\ntransition: 3s;\\n\\n}\\n\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nconst TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1(_templateObject1());\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h3(_templateObject2());\nconst CardContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject3());\nconst CarouselContainerSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\nconst CardReflection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\nconst Buttons = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\nconst ButtonFontAwesomeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon)(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNhO0FBQ2E7QUFFMUQsTUFBTUcsVUFBVUgsNkRBQVUsb0JBZ0IvQjtBQUVLLE1BQU1LLGlCQUFpQkwsNERBQVMscUJBTXJDO0FBQ0ssTUFBTU8sdUJBQXVCUCw0REFBUyxxQkFRM0M7QUFHSyxNQUFNUyxnQkFBZ0JULDZEQUFNQSxDQUFDQyxpRUFBV0Esc0JBZ0I3QztBQUVLLE1BQU1TLDJCQUEwQlYsNkRBQVUscUJBSS9DO0FBRUssTUFBTVcsaUJBQWdCWCw2REFBVSxxQkFRakM7QUFFQyxNQUFNWSxVQUFTWiw2REFBVSxxQkFJOUI7QUFFSyxNQUFNYSx3QkFBdUJiLDZEQUFNQSxDQUFDRSwyRUFBZUEsc0JBVXhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyL3N0eWxlcy50cz9mMGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgcGVyc3BlY3RpdmU6IDIwMHB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB3aWR0aDogMzYycHg7XHJcbiAgaGVpZ2h0OiAyNzJweDsgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmgxYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmNvbG9yOiB3aGl0ZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmgzYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXNpemU6IDEwcHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKENhcmRDb250ZW50KWBcclxuZGlzcGxheTogZmxleDtcclxud2lkdGg6IDgwJTtcclxuaGVpZ2h0OiAzMDJweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UgMHMsIG9wYWNpdHkgNTAwbXMgZWFzZSAwcyxcclxudmlzaWJpbGl0eSA1MDBtcyBlYXNlIDBzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lclNlY3Rpb24gPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRSZWZsZWN0aW9uID1zdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3R0b206ICAgLTY1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZSAwcywgb3BhY2l0eSA1MDBtcyBlYXNlIDBzLFxyXG4gIHZpc2liaWxpdHkgNTAwbXMgZWFzZSAwcztcclxuICAgIGA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9c3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvbnRBd2Vzb21lSWNvbj0gc3R5bGVkKEZvbnRBd2Vzb21lSWNvbilgXHJcbmJvcmRlcjogMXB4IDtcclxucGFkZGluZzogMjVweDtcclxuYm9yZGVyLXJhZGl1czogNjBweDtcclxuJjpob3ZlcntcclxuYmFja2dyb3VuZDogd2hpdGU7XHJcbnRyYW5zaXRpb246IDNzO1xyXG5cclxufVxyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNhcmRDb250ZW50IiwiRm9udEF3ZXNvbWVJY29uIiwiQ29udGVudCIsImRpdiIsIlRpdGxlQ29udGFpbmVyIiwiaDEiLCJEZXNjcmlwdGlvbkNvbnRhaW5lciIsImgzIiwiQ2FyZENvbnRhaW5lciIsIkNhcm91c2VsQ29udGFpbmVyU2VjdGlvbiIsIkNhcmRSZWZsZWN0aW9uIiwiQnV0dG9ucyIsIkJ1dHRvbkZvbnRBd2Vzb21lSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/styles.ts\n"));

/***/ })

});