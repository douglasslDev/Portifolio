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

/***/ "./components/Slider/index.tsx":
/*!*************************************!*\
  !*** ./components/Slider/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Slider/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Carousel = (props)=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.activeSlide);\n    const next = ()=>{\n        if (activeSlide < props.data.length - 1) setActiveSlide(activeSlide + 1);\n    };\n    const prev = ()=>activeSlide > 0 && setActiveSlide(activeSlide - 1);\n    const getStyles = (index)=>{\n        if (activeSlide === index) return {\n            opacity: 1,\n            transform: \"translateX(0px) translateZ(0px) rotateY(0deg)\",\n            zIndex: 10\n        };\n        else if (activeSlide - 1 === index) return {\n            opacity: 1,\n            transform: \"translateX(-240px) translateZ(-400px) rotateY(35deg)\",\n            zIndex: 9\n        };\n        else if (activeSlide + 1 === index) return {\n            opacity: 1,\n            transform: \"translateX(240px) translateZ(-400px) rotateY(-35deg)\",\n            zIndex: 9\n        };\n        else if (activeSlide - 2 === index) return {\n            opacity: 1,\n            transform: \"translateX(-480px) translateZ(-500px) rotateY(35deg)\",\n            zIndex: 8\n        };\n        else if (activeSlide + 2 === index) return {\n            opacity: 1,\n            transform: \"translateX(480px) translateZ(-500px) rotateY(-35deg)\",\n            zIndex: 8\n        };\n        else if (index < activeSlide - 2) return {\n            opacity: 0,\n            transform: \"translateX(-480px) translateZ(-500px) rotateY(35deg)\",\n            zIndex: 7\n        };\n        else if (index > activeSlide + 2) return {\n            opacity: 0,\n            transform: \"translateX(480px) translateZ(-500px) rotateY(-35deg)\",\n            zIndex: 7\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CarouselContainerSection, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                children: props.data.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n                                style: {\n                                    background: item.bgColor,\n                                    boxShadow: item.bgColor,\n                                    ...getStyles(i)\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderContent, {\n                                    ...item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardReflection, {\n                                style: {\n                                    background: item.bgColor,\n                                    ...getStyles(i)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 96,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Buttons, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        className: \"btn\",\n                        style: {\n                            cursor: \"pointer\",\n                            marginRight: 25\n                        },\n                        onClick: prev,\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronLeft,\n                        color: \"#fff\",\n                        size: \"2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        className: \"btn\",\n                        onClick: next,\n                        style: {\n                            cursor: \"pointer\"\n                        },\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronRight,\n                        color: \"#fff\",\n                        size: \"2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carousel, \"nieGKp6DETTsMv9oBXTMtP1Y/lw=\");\n_c = Carousel;\nconst SliderContent = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: props.icon,\n                style: {\n                    fontSize: \"80px\",\n                    color: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 143,\n                columnNumber: 2\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.TitleContainer, {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 144,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.DescriptionContainer, {\n                children: props.desc\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = SliderContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c, _c1;\n$RefreshReg$(_c, \"Carousel\");\n$RefreshReg$(_c1, \"SliderContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQUd2QztNQVJNWDtBQVVOLCtEQUFlckIsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9pbmRleC50c3g/NTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBmYUNoZXZyb25SaWdodCxcclxuICAgIGZhQ2hldnJvbkxlZnRcclxuICB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuICBcclxuaW1wb3J0IHtcclxuICAgIENvbnRlbnQsXHJcbiAgICBDYXJvdXNlbENvbnRhaW5lclNlY3Rpb24sXHJcbiAgICBDYXJkQ29udGFpbmVyLFxyXG4gICAgQ2FyZFJlZmxlY3Rpb24sXHJcbiAgICBCdXR0b25zLFxyXG4gICAgVGl0bGVDb250YWluZXIsXHJcbiAgICBEZXNjcmlwdGlvbkNvbnRhaW5lclxyXG4gIH0gXHJcbiAgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7IEhlaWdodCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuXHJcbiAgaW50ZXJmYWNlIENhcm91c2VsUHJvcHMge1xyXG4gICAgZGF0YToge1xyXG4gICAgICBpZDogbnVtYmVyO1xyXG4gICAgICBpY29uOiBJY29uRGVmaW5pdGlvbjtcclxuICAgICAgYmdDb2xvcjogc3RyaW5nO1xyXG4gICAgICB0aXRsZTogc3RyaW5nOyBcclxuICAgICAgZGVzYzogc3RyaW5nOyBcclxuICAgIH1bXTtcclxuICAgIGFjdGl2ZVNsaWRlOiBudW1iZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBTbGlkZXJDb250ZW50UHJvcHMge1xyXG4gICAgaWNvbjogSWNvbkRlZmluaXRpb247XHJcbiAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIGRlc2M6IHN0cmluZztcclxuICAgICAgfVxyXG5cclxuY29uc3QgQ2Fyb3VzZWw6IFJlYWN0LkZDPENhcm91c2VsUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXRBY3RpdmVTbGlkZV0gPSB1c2VTdGF0ZShwcm9wcy5hY3RpdmVTbGlkZSkgXHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PntcclxuICAgIGlmKGFjdGl2ZVNsaWRlIDwgcHJvcHMuZGF0YS5sZW5ndGggLSAxKSBcclxuICAgIHNldEFjdGl2ZVNsaWRlKGFjdGl2ZVNsaWRlICsgMSlcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2ID0gKCkgPT4gYWN0aXZlU2xpZGUgPiAwICYmIHNldEFjdGl2ZVNsaWRlKGFjdGl2ZVNsaWRlIC0gMSk7XHJcblxyXG4gIGNvbnN0IGdldFN0eWxlcyA9IChpbmRleDpudW1iZXIpID0+IHtcclxuICAgIGlmIChhY3RpdmVTbGlkZSA9PT0gaW5kZXgpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVooMHB4KSByb3RhdGVZKDBkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiAxMFxyXG4gICAgICB9O1xyXG4gICAgZWxzZSBpZiAoYWN0aXZlU2xpZGUgLSAxID09PSBpbmRleClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0yNDBweCkgdHJhbnNsYXRlWigtNDAwcHgpIHJvdGF0ZVkoMzVkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiA5XHJcbiAgICAgIH07XHJcbiAgICBlbHNlIGlmIChhY3RpdmVTbGlkZSArIDEgPT09IGluZGV4KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMjQwcHgpIHRyYW5zbGF0ZVooLTQwMHB4KSByb3RhdGVZKC0zNWRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDlcclxuICAgICAgfTtcclxuICAgIGVsc2UgaWYgKGFjdGl2ZVNsaWRlIC0gMiA9PT0gaW5kZXgpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNDgwcHgpIHRyYW5zbGF0ZVooLTUwMHB4KSByb3RhdGVZKDM1ZGVnKVwiLFxyXG4gICAgICAgIHpJbmRleDogOFxyXG4gICAgICB9O1xyXG4gICAgZWxzZSBpZiAoYWN0aXZlU2xpZGUgKyAyID09PSBpbmRleClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDQ4MHB4KSB0cmFuc2xhdGVaKC01MDBweCkgcm90YXRlWSgtMzVkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiA4XHJcbiAgICAgIH07XHJcbiAgICBlbHNlIGlmIChpbmRleCA8IGFjdGl2ZVNsaWRlIC0gMilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC00ODBweCkgdHJhbnNsYXRlWigtNTAwcHgpIHJvdGF0ZVkoMzVkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiA3XHJcbiAgICAgIH07XHJcbiAgICBlbHNlIGlmIChpbmRleCA+IGFjdGl2ZVNsaWRlICsgMilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDQ4MHB4KSB0cmFuc2xhdGVaKC01MDBweCkgcm90YXRlWSgtMzVkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiA3XHJcbiAgICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbENvbnRhaW5lclNlY3Rpb24+ICBcclxuICAgICA8Q29udGVudCA+XHJcbiAgICAgICAge3Byb3BzLmRhdGEubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgPENhcmRDb250YWluZXIgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGl0ZW0uYmdDb2xvcixcclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogaXRlbS5iZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgLi4uZ2V0U3R5bGVzKGkpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJDb250ZW50IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDYXJkUmVmbGVjdGlvblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpdGVtLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAuLi5nZXRTdHlsZXMoaSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8QnV0dG9ucyA+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJywgbWFyZ2luUmlnaHQ6MjUsfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZ9XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25MZWZ0fVxyXG4gICAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgb25DbGljaz17bmV4dH1cclxuICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJyx9fVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uUmlnaHR9XHJcbiAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0J1dHRvbnM+XHJcbiAgICA8L0Nhcm91c2VsQ29udGFpbmVyU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2xpZGVyQ29udGVudCA9IChwcm9wczpTbGlkZXJDb250ZW50UHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8Q2FyZENvbnRhaW5lcj5cclxuIDxGb250QXdlc29tZUljb24gaWNvbj17cHJvcHMuaWNvbn0gc3R5bGU9e3tmb250U2l6ZTogJzgwcHgnLCBjb2xvcjond2hpdGUnIH19IC8+IFxyXG4gICAgIDxUaXRsZUNvbnRhaW5lcj57cHJvcHMudGl0bGV9PC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPntwcm9wcy5kZXNjfTwvRGVzY3JpcHRpb25Db250YWluZXI+XHJcbiAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2hldnJvblJpZ2h0IiwiZmFDaGV2cm9uTGVmdCIsIkNvbnRlbnQiLCJDYXJvdXNlbENvbnRhaW5lclNlY3Rpb24iLCJDYXJkQ29udGFpbmVyIiwiQ2FyZFJlZmxlY3Rpb24iLCJCdXR0b25zIiwiVGl0bGVDb250YWluZXIiLCJEZXNjcmlwdGlvbkNvbnRhaW5lciIsIkNhcm91c2VsIiwicHJvcHMiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwibmV4dCIsImRhdGEiLCJsZW5ndGgiLCJwcmV2IiwiZ2V0U3R5bGVzIiwiaW5kZXgiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiekluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJGcmFnbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJnQ29sb3IiLCJib3hTaGFkb3ciLCJTbGlkZXJDb250ZW50IiwiaWQiLCJjbGFzc05hbWUiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJpY29uIiwiY29sb3IiLCJzaXplIiwiZm9udFNpemUiLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider/index.tsx\n"));

/***/ })

});