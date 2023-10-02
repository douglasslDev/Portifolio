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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/config */ \"./translations/config.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const handleScroll = (e)=>{\n        e.preventDefault();\n        // get the href and remove everything before the hash (#)\n        const href = e.currentTarget.href;\n        const targetId = href.replace(/.*\\#/, \"\");\n        // get the element by id and use scrollIntoView\n        const elem = document.getElementById(targetId);\n        elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLocaleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((locale)=>{\n        const regex = new RegExp(\"^/(\".concat(_translations_config__WEBPACK_IMPORTED_MODULE_4__.locales.join(\"|\"), \")\"));\n        router.push(router.pathname, router.asPath.replace(regex, \"/\".concat(locale)));\n        const htmlEl = document.getElementsByTagName(\"html\");\n        htmlEl[0].setAttribute(\"lang\", locale);\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavList, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#\",\n                            onClick: handleScroll,\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#TecAndFrams\",\n                            onClick: handleScroll,\n                            children: \"T\\xc9CNOLOGIAS E FRAMEWORKS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NavItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            href: \"#collaborate\",\n                            onClick: handleScroll,\n                            children: \"PROJETOS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TranslateContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"pt\"),\n                        children: \"PT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \" | \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"en\"),\n                        children: \"EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 34,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"j9OfDDOg26KOGnuS6dOGPtMg1Rc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEY7QUFDNUQ7QUFDSTtBQUVXO0FBQ2pELE1BQU1RLFNBQVM7O0lBQ2IsTUFBTUMsZUFBZSxDQUFDQztRQUVwQkEsRUFBRUMsY0FBYztRQUNoQix5REFBeUQ7UUFDekQsTUFBTUMsT0FBT0YsRUFBRUcsYUFBYSxDQUFDRCxJQUFJO1FBQ2pDLE1BQU1FLFdBQVdGLEtBQUtHLE9BQU8sQ0FBQyxRQUFRO1FBQ3RDLCtDQUErQztRQUMvQyxNQUFNQyxPQUFPQyxTQUFTQyxjQUFjLENBQUNKO1FBQ3JDRSxpQkFBQUEsMkJBQUFBLEtBQU1HLGNBQWMsQ0FBQztZQUNuQkMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTZixzREFBU0E7SUFFeEIsTUFBTWdCLHFCQUFxQmpCLGtEQUFXQSxDQUNwQyxDQUFDa0I7UUFDQyxNQUFNQyxRQUFRLElBQUlDLE9BQU8sTUFBd0IsT0FBbEJsQix5REFBT0EsQ0FBQ21CLElBQUksQ0FBQyxNQUFLO1FBQ2pETCxPQUFPTSxJQUFJLENBQUNOLE9BQU9PLFFBQVEsRUFBRVAsT0FBT1EsTUFBTSxDQUFDZCxPQUFPLENBQUNTLE9BQU8sSUFBVyxPQUFQRDtRQUM5RCxNQUFNTyxTQUFTYixTQUFTYyxvQkFBb0IsQ0FBQztRQUM3Q0QsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsWUFBWSxDQUFDLFFBQVFUO0lBQ2pDLEdBQ0E7UUFBQ0Y7S0FBTztJQUdaLHFCQUVFLDhEQUFDckIsNENBQU9BOzswQkFDUiw4REFBQ0MsNENBQU9BOztrQ0FDQSw4REFBQ0MsNENBQU9BO2tDQUNOLDRFQUFDQywwQ0FBS0E7NEJBQUNTLE1BQUs7NEJBQUlxQixTQUFTeEI7c0NBQWM7Ozs7Ozs7Ozs7O2tDQUV6Qyw4REFBQ1AsNENBQU9BO2tDQUNOLDRFQUFDQywwQ0FBS0E7NEJBQUNTLE1BQUs7NEJBQWVxQixTQUFTeEI7c0NBQWM7Ozs7Ozs7Ozs7O2tDQUlwRCw4REFBQ1AsNENBQU9BO2tDQUNOLDRFQUFDQywwQ0FBS0E7NEJBQUNTLE1BQUs7NEJBQWVxQixTQUFTeEI7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt0RCw4REFBQ0wsdURBQWtCQTs7a0NBQ25CLDhEQUFDOEI7d0JBQUtELFNBQVMsSUFBTVgsbUJBQW1CO2tDQUFPOzs7Ozs7a0NBQy9DLDhEQUFDWTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTt3QkFBS0QsU0FBUyxJQUFNWCxtQkFBbUI7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RDtHQXBETWQ7O1FBY1dGLGtEQUFTQTs7O0tBZHBCRTtBQXFETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnQsSGVhZGVyQ29udGFpbmVyLE5hdkxpc3QsIE5hdkl0ZW0sIExpbmtzLCAgVHJhbnNsYXRlQ29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCIuLi8uLi9ob29rcy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQge2xvY2FsZXN9IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvY29uZmlnXCJcclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBnZXQgdGhlIGhyZWYgYW5kIHJlbW92ZSBldmVyeXRoaW5nIGJlZm9yZSB0aGUgaGFzaCAoIylcclxuICAgIGNvbnN0IGhyZWYgPSBlLmN1cnJlbnRUYXJnZXQuaHJlZjtcclxuICAgIGNvbnN0IHRhcmdldElkID0gaHJlZi5yZXBsYWNlKC8uKlxcIy8sIFwiXCIpO1xyXG4gICAgLy8gZ2V0IHRoZSBlbGVtZW50IGJ5IGlkIGFuZCB1c2Ugc2Nyb2xsSW50b1ZpZXdcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcbiAgICBlbGVtPy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvY2FsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGxvY2FsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXi8oJHtsb2NhbGVzLmpvaW4oXCJ8XCIpfSlgKTtcclxuICAgICAgcm91dGVyLnB1c2gocm91dGVyLnBhdGhuYW1lLCByb3V0ZXIuYXNQYXRoLnJlcGxhY2UocmVnZXgsIGAvJHtsb2NhbGV9YCkpO1xyXG4gICAgICBjb25zdCBodG1sRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIik7XHJcbiAgICAgIGh0bWxFbFswXS5zZXRBdHRyaWJ1dGUoXCJsYW5nXCIsIGxvY2FsZSk7XHJcbiAgICB9LFxyXG4gICAgW3JvdXRlcl0sXHJcbiAgKTtcclxuXHJcbnJldHVybiggXHJcbiAgXHJcbiAgPENvbnRlbnQ+XHJcbiAgPE5hdkxpc3Q+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPExpbmtzIGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsfT5IT01FPC9MaW5rcz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TGlua3MgaHJlZj1cIiNUZWNBbmRGcmFtc1wiIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbH0+XHJcbiAgICAgICAgICAgICBUw4lDTk9MT0dJQVMgRSBGUkFNRVdPUktTXHJcbiAgICAgICAgICAgIDwvTGlua3M+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+ICAgXHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPExpbmtzIGhyZWY9XCIjY29sbGFib3JhdGVcIiBvbkNsaWNrPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgICAgICAgIFBST0pFVE9TXHJcbiAgICAgICAgICAgIDwvTGlua3M+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9OYXZMaXN0PiAgIFxyXG4gICAgICAgIDxUcmFuc2xhdGVDb250YWluZXI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlTG9jYWxlQ2hhbmdlKFwicHRcIil9PlBUPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2NhbGVDaGFuZ2UoXCJlblwiKX0+RU48L3NwYW4+XHJcbiAgICAgIDwvVHJhbnNsYXRlQ29udGFpbmVyPlxyXG4gICAgXHJcbiAgPC9Db250ZW50PlxyXG4pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJOYXZMaXN0IiwiTmF2SXRlbSIsIkxpbmtzIiwiVHJhbnNsYXRlQ29udGFpbmVyIiwidXNlQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJsb2NhbGVzIiwiSGVhZGVyIiwiaGFuZGxlU2Nyb2xsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXRJZCIsInJlcGxhY2UiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJyb3V0ZXIiLCJoYW5kbGVMb2NhbGVDaGFuZ2UiLCJsb2NhbGUiLCJyZWdleCIsIlJlZ0V4cCIsImpvaW4iLCJwdXNoIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJodG1sRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});