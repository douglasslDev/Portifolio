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

/***/ "./components/AboutMe/index.tsx":
/*!**************************************!*\
  !*** ./components/AboutMe/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTranslation */ \"./hooks/useTranslation.tsx\");\n/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/config */ \"./translations/config.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./components/AboutMe/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AboutMe = ()=>{\n    _s();\n    const { t } = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLocaleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((locale)=>{\n        const regex = new RegExp(\"^/(\".concat(_translations_config__WEBPACK_IMPORTED_MODULE_4__.locales.join(\"|\"), \")\"));\n        router.push(router.pathname, router.asPath.replace(regex, \"/\".concat(locale)));\n        const htmlEl = document.getElementsByTagName(\"html\");\n        htmlEl[0].setAttribute(\"lang\", locale);\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Content, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.TranslateContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"pt\"),\n                        children: \"PT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \" | \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>handleLocaleChange(\"en\"),\n                        children: \"EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ImagePersonal, {\n                src: \"https://avatars.githubusercontent.com/u/87835597?v=4\",\n                width: 120,\n                height: 120,\n                alt: \"Imagem Pessoal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.TitleName, {\n                children: \"Douglas S. Leite\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Description, {\n                children: t(\"description\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.IconsContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                        href: \"https://github.com/douglasslDev\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        title: \"Github\",\n                        className: \"fab fa-github-square fa-2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                        href: \"https://www.linkedin.com/in/devdouglassantos/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        title: \"Linkedin\",\n                        className: \"fab fa-linkedin fa-2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                        href: \"https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        title: \"WhatsApp\",\n                        className: \"fab fa-whatsapp-square fa-2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                        href: \"mailto:main@douglas.crc@outlook.com\",\n                        title: \"E-mail\",\n                        className: \"fas fa-envelope-square fa-2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContactMe, {\n                label: t(\"contactButton\"),\n                severity: \"secondary\",\n                onClick: ()=>window.open(\"https://wa.me/5521966199134?text=Fala%20dev!\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutMe, \"j4syor6rCU6tP5g5mJnpnSbiC8Q=\", false, function() {\n    return [\n        _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0TWUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBRWtCO0FBQ047QUFXaEM7QUFFbEIsTUFBTVksVUFBVTs7SUFDZCxNQUFNLEVBQUNDLENBQUMsRUFBQyxHQUFHWCxpRUFBY0E7SUFDMUIsTUFBTVksU0FBU2Isc0RBQVNBO0lBRXhCLE1BQU1jLHFCQUFxQmYsa0RBQVdBLENBQ3BDLENBQUNnQjtRQUNDLE1BQU1DLFFBQVEsSUFBSUMsT0FBTyxNQUF3QixPQUFsQmYseURBQU9BLENBQUNnQixJQUFJLENBQUMsTUFBSztRQUNqREwsT0FBT00sSUFBSSxDQUFDTixPQUFPTyxRQUFRLEVBQUVQLE9BQU9RLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixPQUFPLElBQVcsT0FBUEQ7UUFDOUQsTUFBTVEsU0FBU0MsU0FBU0Msb0JBQW9CLENBQUM7UUFDN0NGLE1BQU0sQ0FBQyxFQUFFLENBQUNHLFlBQVksQ0FBQyxRQUFRWDtJQUNqQyxHQUNBO1FBQUNGO0tBQU87SUFHVixxQkFDRSw4REFBQ1YsNENBQU9BOzswQkFDTiw4REFBQ0MsdURBQWtCQTs7a0NBQ2pCLDhEQUFDdUI7d0JBQUtDLFNBQVMsSUFBTWQsbUJBQW1CO2tDQUFPOzs7Ozs7a0NBQy9DLDhEQUFDYTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTt3QkFBS0MsU0FBUyxJQUFNZCxtQkFBbUI7a0NBQU87Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUNSLGtEQUFhQTtnQkFBQ3VCLEtBQUk7Z0JBQXVEQyxPQUFPO2dCQUFLQyxRQUFRO2dCQUFNQyxLQUFJOzs7Ozs7MEJBQ3hHLDhEQUFDM0IsOENBQVNBOzBCQUFDOzs7Ozs7MEJBRVgsOERBQUNFLGdEQUFXQTswQkFBRUssRUFBRTs7Ozs7OzBCQUNoQiw4REFBQ0osbURBQWNBOztrQ0FDYiw4REFBQ0MseUNBQUlBO3dCQUNId0IsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDNUIseUNBQUlBO3dCQUNId0IsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDNUIseUNBQUlBO3dCQUNId0IsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDNUIseUNBQUlBO3dCQUNId0IsTUFBSzt3QkFDTEcsT0FBTTt3QkFDTkMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDM0IsOENBQVNBO2dCQUFDNEIsT0FBTzFCLEVBQUU7Z0JBQWtCMkIsVUFBUztnQkFBWVgsU0FBUyxJQUFJWSxPQUFPQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztBQUcxRjtHQXpETTlCOztRQUNRViw2REFBY0E7UUFDWEQsa0RBQVNBOzs7S0FGcEJXO0FBMEROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXRNZS9pbmRleC50c3g/MTRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCIuLi8uLi9ob29rcy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQge2xvY2FsZXN9IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudCxcclxuICBUcmFuc2xhdGVDb250YWluZXIsXHJcbiAgVGl0bGVOYW1lLFxyXG4gIEltYWdlUGVyc29uYWwsXHJcbiBcclxuICBEZXNjcmlwdGlvbixcclxuICBJY29uc0NvbnRhaW5lcixcclxuICBJY29uLFxyXG4gIENvbnRhY3RNZSxcclxufSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0TWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9jYWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAobG9jYWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeLygke2xvY2FsZXMuam9pbihcInxcIil9KWApO1xyXG4gICAgICByb3V0ZXIucHVzaChyb3V0ZXIucGF0aG5hbWUsIHJvdXRlci5hc1BhdGgucmVwbGFjZShyZWdleCwgYC8ke2xvY2FsZX1gKSk7XHJcbiAgICAgIGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKTtcclxuICAgICAgaHRtbEVsWzBdLnNldEF0dHJpYnV0ZShcImxhbmdcIiwgbG9jYWxlKTtcclxuICAgIH0sXHJcbiAgICBbcm91dGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIDxUcmFuc2xhdGVDb250YWluZXI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlTG9jYWxlQ2hhbmdlKFwicHRcIil9PlBUPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2NhbGVDaGFuZ2UoXCJlblwiKX0+RU48L3NwYW4+XHJcbiAgICAgIDwvVHJhbnNsYXRlQ29udGFpbmVyPlxyXG5cclxuICAgICAgPEltYWdlUGVyc29uYWwgc3JjPSdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODc4MzU1OTc/dj00JyB3aWR0aD17MTIwfSBoZWlnaHQ9ezEyMH0gIGFsdD1cIkltYWdlbSBQZXNzb2FsXCIgLz5cclxuICAgICAgPFRpdGxlTmFtZT5Eb3VnbGFzIFMuIExlaXRlPC9UaXRsZU5hbWU+XHJcbiAgICBcclxuICAgICAgPERlc2NyaXB0aW9uPnt0KFwiZGVzY3JpcHRpb25cIil9PC9EZXNjcmlwdGlvbj5cclxuICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RvdWdsYXNzbERldlwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkdpdGh1YlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZSBmYS0yeFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kZXZkb3VnbGFzc2FudG9zL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkxpbmtlZGluXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1MjE5NjYxOTkxMzQmdGV4dD1GYWxhJTIwZGV2IVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIldoYXRzQXBwXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcC1zcXVhcmUgZmEtMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIGhyZWY9XCJtYWlsdG86bWFpbkBkb3VnbGFzLmNyY0BvdXRsb29rLmNvbVwiXHJcbiAgICAgICAgICB0aXRsZT1cIkUtbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtc3F1YXJlIGZhLTJ4XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0ljb25zQ29udGFpbmVyPiBcclxuICAgICAgPENvbnRhY3RNZSBsYWJlbD17dChcImNvbnRhY3RCdXR0b25cIil9IHNldmVyaXR5PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCk9PndpbmRvdy5vcGVuKCdodHRwczovL3dhLm1lLzU1MjE5NjYxOTkxMzQ/dGV4dD1GYWxhJTIwZGV2IScpfSAvPiAgIFxyXG4gICAgPC9Db250ZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlcyIsIkNvbnRlbnQiLCJUcmFuc2xhdGVDb250YWluZXIiLCJUaXRsZU5hbWUiLCJJbWFnZVBlcnNvbmFsIiwiRGVzY3JpcHRpb24iLCJJY29uc0NvbnRhaW5lciIsIkljb24iLCJDb250YWN0TWUiLCJBYm91dE1lIiwidCIsInJvdXRlciIsImhhbmRsZUxvY2FsZUNoYW5nZSIsImxvY2FsZSIsInJlZ2V4IiwiUmVnRXhwIiwiam9pbiIsInB1c2giLCJwYXRobmFtZSIsImFzUGF0aCIsInJlcGxhY2UiLCJodG1sRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwic3BhbiIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ0aXRsZSIsImNsYXNzTmFtZSIsImxhYmVsIiwic2V2ZXJpdHkiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AboutMe/index.tsx\n"));

/***/ })

});