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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTranslation */ \"./hooks/useTranslation.tsx\");\n/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/config */ \"./translations/config.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./components/AboutMe/styles.ts\");\n/* harmony import */ var _LottieAnimation_AnimationDeveloper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LottieAnimation/AnimationDeveloper */ \"./components/LottieAnimation/AnimationDeveloper.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AboutMe = ()=>{\n    _s();\n    const { t } = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLocaleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((locale)=>{\n        const regex = new RegExp(\"^/(\".concat(_translations_config__WEBPACK_IMPORTED_MODULE_4__.locales.join(\"|\"), \")\"));\n        router.push(router.pathname, router.asPath.replace(regex, \"/\".concat(locale)));\n        const htmlEl = document.getElementsByTagName(\"html\");\n        htmlEl[0].setAttribute(\"lang\", locale);\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Content, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.AboutMeContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.DataAboutMe, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ImagePersonal, {\n                            src: \"https://avatars.githubusercontent.com/u/87835597?v=4\",\n                            width: 120,\n                            height: 120,\n                            alt: \"Imagem Pessoal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.TitleName, {\n                            children: \"Douglas S. Leite\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Description, {\n                            children: t(\"description\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.IconsContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                    href: \"https://github.com/douglasslDev\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    title: \"Github\",\n                                    className: \"fab fa-github-square fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                    href: \"https://www.linkedin.com/in/devdouglassantos/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    title: \"Linkedin\",\n                                    className: \"fab fa-linkedin fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                    href: \"https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    title: \"WhatsApp\",\n                                    className: \"fab fa-whatsapp-square fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                    href: \"mailto:main@douglas.crc@outlook.com\",\n                                    title: \"E-mail\",\n                                    className: \"fas fa-envelope-square fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContactMe, {\n                            label: t(\"contactButton\"),\n                            severity: \"secondary\",\n                            onClick: ()=>window.open(\"https://wa.me/5521966199134?text=Fala%20dev!\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LottieAnimation_AnimationDeveloper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\AboutMe\\\\index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutMe, \"j4syor6rCU6tP5g5mJnpnSbiC8Q=\", false, function() {\n    return [\n        _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0TWUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSTtBQUNrQjtBQUNOO0FBWWhDO0FBQ2tEO0FBRXBFLE1BQU1jLFVBQVU7O0lBQ2QsTUFBTSxFQUFDQyxDQUFDLEVBQUMsR0FBR2IsaUVBQWNBO0lBQzFCLE1BQU1jLFNBQVNmLHNEQUFTQTtJQUV4QixNQUFNZ0IscUJBQXFCakIsa0RBQVdBLENBQ3BDLENBQUNrQjtRQUNDLE1BQU1DLFFBQVEsSUFBSUMsT0FBTyxNQUF3QixPQUFsQmpCLHlEQUFPQSxDQUFDa0IsSUFBSSxDQUFDLE1BQUs7UUFDakRMLE9BQU9NLElBQUksQ0FBQ04sT0FBT08sUUFBUSxFQUFFUCxPQUFPUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ04sT0FBTyxJQUFXLE9BQVBEO1FBQzlELE1BQU1RLFNBQVNDLFNBQVNDLG9CQUFvQixDQUFDO1FBQzdDRixNQUFNLENBQUMsRUFBRSxDQUFDRyxZQUFZLENBQUMsUUFBUVg7SUFDakMsR0FDQTtRQUFDRjtLQUFPO0lBR1YscUJBQ0UsOERBQUNaLDRDQUFPQTtrQkFFTiw0RUFBQ0cscURBQWdCQTs7OEJBQ2pCLDhEQUFDQyxnREFBV0E7O3NDQUNaLDhEQUFDRixrREFBYUE7NEJBQUN3QixLQUFJOzRCQUF1REMsT0FBTzs0QkFBS0MsUUFBUTs0QkFBTUMsS0FBSTs7Ozs7O3NDQUN4Ryw4REFBQzVCLDhDQUFTQTtzQ0FBQzs7Ozs7O3NDQUNYLDhEQUFDSSxnREFBV0E7c0NBQUVNLEVBQUU7Ozs7OztzQ0FDaEIsOERBQUNMLG1EQUFjQTs7OENBQ2IsOERBQUNDLHlDQUFJQTtvQ0FDSHVCLE1BQUs7b0NBQ0xDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pDLE9BQU07b0NBQ05DLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQzNCLHlDQUFJQTtvQ0FDSHVCLE1BQUs7b0NBQ0xDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pDLE9BQU07b0NBQ05DLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQzNCLHlDQUFJQTtvQ0FDSHVCLE1BQUs7b0NBQ0xDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pDLE9BQU07b0NBQ05DLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQzNCLHlDQUFJQTtvQ0FDSHVCLE1BQUs7b0NBQ0xHLE9BQU07b0NBQ05DLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQzFCLDhDQUFTQTs0QkFBQzJCLE9BQU94QixFQUFFOzRCQUFrQnlCLFVBQVM7NEJBQVlDLFNBQVMsSUFBSUMsT0FBT0MsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7OEJBRXBGLDhEQUFDOUIsMkVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCO0dBeERNQzs7UUFDUVosNkRBQWNBO1FBQ1hELGtEQUFTQTs7O0tBRnBCYTtBQXlETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fib3V0TWUvaW5kZXgudHN4PzE0ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCIuLi8uLi9ob29rcy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQge2xvY2FsZXN9IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudCxcclxuICBUcmFuc2xhdGVDb250YWluZXIsXHJcbiAgVGl0bGVOYW1lLFxyXG4gIEltYWdlUGVyc29uYWwsXHJcbiAgQWJvdXRNZUNvbnRhaW5lcixcclxuICBEYXRhQWJvdXRNZSxcclxuICBEZXNjcmlwdGlvbixcclxuICBJY29uc0NvbnRhaW5lcixcclxuICBJY29uLFxyXG4gIENvbnRhY3RNZSxcclxufSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IExvdHRpZUFuaW1hdGlvbiBmcm9tIFwiLi4vTG90dGllQW5pbWF0aW9uL0FuaW1hdGlvbkRldmVsb3BlclwiO1xyXG5cclxuY29uc3QgQWJvdXRNZSA9ICgpID0+IHtcclxuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2NhbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChsb2NhbGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4vKCR7bG9jYWxlcy5qb2luKFwifFwiKX0pYCk7XHJcbiAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5wYXRobmFtZSwgcm91dGVyLmFzUGF0aC5yZXBsYWNlKHJlZ2V4LCBgLyR7bG9jYWxlfWApKTtcclxuICAgICAgY29uc3QgaHRtbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpO1xyXG4gICAgICBodG1sRWxbMF0uc2V0QXR0cmlidXRlKFwibGFuZ1wiLCBsb2NhbGUpO1xyXG4gICAgfSxcclxuICAgIFtyb3V0ZXJdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudD5cclxuICAgICBcclxuICAgICAgPEFib3V0TWVDb250YWluZXI+XHJcbiAgICAgIDxEYXRhQWJvdXRNZT5cclxuICAgICAgPEltYWdlUGVyc29uYWwgc3JjPSdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODc4MzU1OTc/dj00JyB3aWR0aD17MTIwfSBoZWlnaHQ9ezEyMH0gIGFsdD1cIkltYWdlbSBQZXNzb2FsXCIgLz5cclxuICAgICAgPFRpdGxlTmFtZT5Eb3VnbGFzIFMuIExlaXRlPC9UaXRsZU5hbWU+XHJcbiAgICAgIDxEZXNjcmlwdGlvbj57dChcImRlc2NyaXB0aW9uXCIpfTwvRGVzY3JpcHRpb24+XHJcbiAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb3VnbGFzc2xEZXZcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJHaXRodWJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmUgZmEtMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGV2ZG91Z2xhc3NhbnRvcy9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJMaW5rZWRpblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4gZmEtMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTIxOTY2MTk5MTM0JnRleHQ9RmFsYSUyMGRldiFcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJXaGF0c0FwcFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAtc3F1YXJlIGZhLTJ4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBocmVmPVwibWFpbHRvOm1haW5AZG91Z2xhcy5jcmNAb3V0bG9vay5jb21cIlxyXG4gICAgICAgICAgdGl0bGU9XCJFLW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZSBmYS0yeFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9JY29uc0NvbnRhaW5lcj4gXHJcbiAgICAgIDxDb250YWN0TWUgbGFiZWw9e3QoXCJjb250YWN0QnV0dG9uXCIpfSBzZXZlcml0eT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpPT53aW5kb3cub3BlbignaHR0cHM6Ly93YS5tZS81NTIxOTY2MTk5MTM0P3RleHQ9RmFsYSUyMGRldiEnKX0gLz4gICBcclxuICAgICAgPC9EYXRhQWJvdXRNZT5cclxuICAgICAgPExvdHRpZUFuaW1hdGlvbi8+XHJcbiAgICAgIDwvQWJvdXRNZUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VUcmFuc2xhdGlvbiIsImxvY2FsZXMiLCJDb250ZW50IiwiVGl0bGVOYW1lIiwiSW1hZ2VQZXJzb25hbCIsIkFib3V0TWVDb250YWluZXIiLCJEYXRhQWJvdXRNZSIsIkRlc2NyaXB0aW9uIiwiSWNvbnNDb250YWluZXIiLCJJY29uIiwiQ29udGFjdE1lIiwiTG90dGllQW5pbWF0aW9uIiwiQWJvdXRNZSIsInQiLCJyb3V0ZXIiLCJoYW5kbGVMb2NhbGVDaGFuZ2UiLCJsb2NhbGUiLCJyZWdleCIsIlJlZ0V4cCIsImpvaW4iLCJwdXNoIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJyZXBsYWNlIiwiaHRtbEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaHJlZiIsInRhcmdldCIsInJlbCIsInRpdGxlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJzZXZlcml0eSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AboutMe/index.tsx\n"));

/***/ })

});