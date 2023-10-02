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

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/config */ \"./translations/config.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const handleScroll = (e)=>{\n        e.preventDefault();\n        const href = e.currentTarget.href;\n        const targetId = href.replace(/.*\\#/, \"\");\n        const elem = document.getElementById(targetId);\n        elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLocaleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((locale)=>{\n        const regex = new RegExp(\"^/(\".concat(_translations_config__WEBPACK_IMPORTED_MODULE_4__.locales.join(\"|\"), \")\"));\n        router.push(router.pathname, router.asPath.replace(regex, \"/\".concat(locale)));\n        const htmlEl = document.getElementsByTagName(\"html\");\n        htmlEl[0].setAttribute(\"lang\", locale);\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavList, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#AboutMe\",\n                            onClick: handleScroll,\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#TecAndFrams\",\n                            onClick: handleScroll,\n                            children: \"T\\xc9CNOLOGIAS E FRAMEWORKS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#Projects\",\n                            onClick: handleScroll,\n                            children: \"PROJETOS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TranslateContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"pt\"),\n                        children: \"PT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \" | \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"en\"),\n                        children: \"EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"j9OfDDOg26KOGnuS6dOGPtMg1Rc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEU7QUFDNUM7QUFDSTtBQUVXO0FBQ2pELE1BQU1RLFNBQVM7O0lBQ2IsTUFBTUMsZUFBZSxDQUFDQztRQUVwQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxPQUFPRixFQUFFRyxhQUFhLENBQUNELElBQUk7UUFDakMsTUFBTUUsV0FBV0YsS0FBS0csT0FBTyxDQUFDLFFBQVE7UUFDdEMsTUFBTUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDSjtRQUNyQ0UsaUJBQUFBLDJCQUFBQSxLQUFNRyxjQUFjLENBQUM7WUFDbkJDLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUMsU0FBU2Ysc0RBQVNBO0lBRXhCLE1BQU1nQixxQkFBcUJqQixrREFBV0EsQ0FDcEMsQ0FBQ2tCO1FBQ0MsTUFBTUMsUUFBUSxJQUFJQyxPQUFPLE1BQXdCLE9BQWxCbEIseURBQU9BLENBQUNtQixJQUFJLENBQUMsTUFBSztRQUNqREwsT0FBT00sSUFBSSxDQUFDTixPQUFPTyxRQUFRLEVBQUVQLE9BQU9RLE1BQU0sQ0FBQ2QsT0FBTyxDQUFDUyxPQUFPLElBQVcsT0FBUEQ7UUFDOUQsTUFBTU8sU0FBU2IsU0FBU2Msb0JBQW9CLENBQUM7UUFDN0NELE1BQU0sQ0FBQyxFQUFFLENBQUNFLFlBQVksQ0FBQyxRQUFRVDtJQUNqQyxHQUNBO1FBQUNGO0tBQU87SUFHWixxQkFFRSw4REFBQ3JCLDRDQUFPQTs7MEJBQ1IsOERBQUNDLDRDQUFPQTs7a0NBQ0EsOERBQUNDLDRDQUFPQTtrQ0FDTiw0RUFBQ0MsMENBQUtBOzRCQUFDUyxNQUFLOzRCQUFXcUIsU0FBU3hCO3NDQUFjOzs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNQLDRDQUFPQTtrQ0FDTiw0RUFBQ0MsMENBQUtBOzRCQUFDUyxNQUFLOzRCQUFlcUIsU0FBU3hCO3NDQUFjOzs7Ozs7Ozs7OztrQ0FJcEQsOERBQUNQLDRDQUFPQTtrQ0FDTiw0RUFBQ0MsMENBQUtBOzRCQUFDUyxNQUFLOzRCQUFZcUIsU0FBU3hCO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkQsOERBQUNMLHVEQUFrQkE7O2tDQUNuQiw4REFBQzhCO3dCQUFLRCxTQUFTLElBQU1YLG1CQUFtQjtrQ0FBTzs7Ozs7O2tDQUMvQyw4REFBQ1k7a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0E7d0JBQUtELFNBQVMsSUFBTVgsbUJBQW1CO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7R0FsRE1kOztRQVlXRixrREFBU0E7OztLQVpwQkU7QUFtRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50LE5hdkxpc3QsIE5hdkl0ZW0sIExpbmtzLCAgVHJhbnNsYXRlQ29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCIuLi8uLi9ob29rcy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQge2xvY2FsZXN9IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvY29uZmlnXCJcclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBocmVmID0gZS5jdXJyZW50VGFyZ2V0LmhyZWY7XHJcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhyZWYucmVwbGFjZSgvLipcXCMvLCBcIlwiKTtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcbiAgICBlbGVtPy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvY2FsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGxvY2FsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXi8oJHtsb2NhbGVzLmpvaW4oXCJ8XCIpfSlgKTtcclxuICAgICAgcm91dGVyLnB1c2gocm91dGVyLnBhdGhuYW1lLCByb3V0ZXIuYXNQYXRoLnJlcGxhY2UocmVnZXgsIGAvJHtsb2NhbGV9YCkpO1xyXG4gICAgICBjb25zdCBodG1sRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIik7XHJcbiAgICAgIGh0bWxFbFswXS5zZXRBdHRyaWJ1dGUoXCJsYW5nXCIsIGxvY2FsZSk7XHJcbiAgICB9LFxyXG4gICAgW3JvdXRlcl0sXHJcbiAgKTtcclxuXHJcbnJldHVybiggXHJcbiAgXHJcbiAgPENvbnRlbnQ+XHJcbiAgPE5hdkxpc3Q+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPExpbmtzIGhyZWY9XCIjQWJvdXRNZVwiIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbH0+SE9NRTwvTGlua3M+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPExpbmtzIGhyZWY9XCIjVGVjQW5kRnJhbXNcIiBvbkNsaWNrPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgICAgICAgVMOJQ05PTE9HSUFTIEUgRlJBTUVXT1JLU1xyXG4gICAgICAgICAgICA8L0xpbmtzPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPiAgIFxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rcyBocmVmPVwiI1Byb2plY3RzXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICAgICAgICBQUk9KRVRPU1xyXG4gICAgICAgICAgICA8L0xpbmtzPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2TGlzdD4gICBcclxuICAgICAgICA8VHJhbnNsYXRlQ29udGFpbmVyPlxyXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvY2FsZUNoYW5nZShcInB0XCIpfT5QVDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj4gfCA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlTG9jYWxlQ2hhbmdlKFwiZW5cIil9PkVOPC9zcGFuPlxyXG4gICAgICA8L1RyYW5zbGF0ZUNvbnRhaW5lcj5cclxuICAgIFxyXG4gIDwvQ29udGVudD5cclxuKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJDb250ZW50IiwiTmF2TGlzdCIsIk5hdkl0ZW0iLCJMaW5rcyIsIlRyYW5zbGF0ZUNvbnRhaW5lciIsInVzZUNhbGxiYWNrIiwidXNlUm91dGVyIiwibG9jYWxlcyIsIkhlYWRlciIsImhhbmRsZVNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0SWQiLCJyZXBsYWNlIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwicm91dGVyIiwiaGFuZGxlTG9jYWxlQ2hhbmdlIiwibG9jYWxlIiwicmVnZXgiLCJSZWdFeHAiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwiYXNQYXRoIiwiaHRtbEVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});