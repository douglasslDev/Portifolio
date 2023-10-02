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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Slider/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Carousel = (props)=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.activeSlide);\n    const next = ()=>{\n        if (activeSlide < props.data.length - 1) setActiveSlide(activeSlide + 1);\n    };\n    const prev = ()=>activeSlide > 0 && setActiveSlide(activeSlide - 1);\n    const getStyles = (index)=>{\n        if (activeSlide === index) return {\n            opacity: 1,\n            transform: \"translateX(0px) translateZ(0px) rotateY(0deg)\",\n            zIndex: 10\n        };\n        else if (activeSlide - 1 === index) return {\n            opacity: 1,\n            transform: \"translateX(-240px) translateZ(-400px) rotateY(35deg)\",\n            zIndex: 9\n        };\n        else if (activeSlide + 1 === index) return {\n            opacity: 1,\n            transform: \"translateX(240px) translateZ(-400px) rotateY(-35deg)\",\n            zIndex: 9\n        };\n        else if (activeSlide - 2 === index) return {\n            opacity: 1,\n            transform: \"translateX(-480px) translateZ(-500px) rotateY(35deg)\",\n            zIndex: 8\n        };\n        else if (activeSlide + 2 === index) return {\n            opacity: 1,\n            transform: \"translateX(480px) translateZ(-500px) rotateY(-35deg)\",\n            zIndex: 8\n        };\n        else if (index < activeSlide - 2) return {\n            opacity: 0,\n            transform: \"translateX(-480px) translateZ(-500px) rotateY(35deg)\",\n            zIndex: 7\n        };\n        else if (index > activeSlide + 2) return {\n            opacity: 0,\n            transform: \"translateX(480px) translateZ(-500px) rotateY(-35deg)\",\n            zIndex: 7\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CarouselContainerSection, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                children: props.data.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n                                style: {\n                                    background: item.bgColor,\n                                    boxShadow: \"0 5px 20px \".concat(item.bgColor, \"30\"),\n                                    ...getStyles(i)\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderContent, {\n                                    ...item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardReflection, {\n                                style: {\n                                    background: \"linear-gradient(to bottom,#00040, transparent)\",\n                                    ...getStyles(i)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 95,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Buttons, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        className: \"btn\",\n                        style: {\n                            cursor: \"pointer\",\n                            marginRight: 25\n                        },\n                        onClick: prev,\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronLeft,\n                        color: \"#fff\",\n                        size: \"2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        className: \"btn\",\n                        onClick: next,\n                        style: {\n                            cursor: \"pointer\"\n                        },\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronRight,\n                        color: \"#fff\",\n                        size: \"2x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carousel, \"nieGKp6DETTsMv9oBXTMtP1Y/lw=\");\n_c = Carousel;\nconst SliderContent = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: props.icon,\n                style: {\n                    fontSize: \"80px\",\n                    color: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 143,\n                columnNumber: 2\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.TitleContainer, {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 144,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.DescriptionContainer, {\n                children: props.desc\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin2\\\\Desktop\\\\portfolio-page\\\\components\\\\Slider\\\\index.tsx\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = SliderContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c, _c1;\n$RefreshReg$(_c, \"Carousel\");\n$RefreshReg$(_c1, \"SliderContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFHdkM7TUFSTVg7QUFVTiwrREFBZXJCLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIvaW5kZXgudHN4PzU0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZmFDaGV2cm9uUmlnaHQsXHJcbiAgICBmYUNoZXZyb25MZWZ0XHJcbiAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbiAgXHJcbmltcG9ydCB7XHJcbiAgICBDb250ZW50LFxyXG4gICAgQ2Fyb3VzZWxDb250YWluZXJTZWN0aW9uLFxyXG4gICAgQ2FyZENvbnRhaW5lcixcclxuICAgIENhcmRSZWZsZWN0aW9uLFxyXG4gICAgQnV0dG9ucyxcclxuICAgIFRpdGxlQ29udGFpbmVyLFxyXG4gICAgRGVzY3JpcHRpb25Db250YWluZXJcclxuICB9IFxyXG4gIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBIZWlnaHQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xyXG5cclxuICBpbnRlcmZhY2UgQ2Fyb3VzZWxQcm9wcyB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG4gICAgICBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICAgIHRpdGxlOiBzdHJpbmc7IFxyXG4gICAgICBkZXNjOiBzdHJpbmc7IFxyXG4gICAgfVtdO1xyXG4gICAgYWN0aXZlU2xpZGU6IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbiAgaW50ZXJmYWNlIFNsaWRlckNvbnRlbnRQcm9wcyB7XHJcbiAgICBpY29uOiBJY29uRGVmaW5pdGlvbjtcclxuICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgZGVzYzogc3RyaW5nO1xyXG4gICAgICB9XHJcblxyXG5jb25zdCBDYXJvdXNlbDogUmVhY3QuRkM8Q2Fyb3VzZWxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKHByb3BzLmFjdGl2ZVNsaWRlKSBcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+e1xyXG4gICAgaWYoYWN0aXZlU2xpZGUgPCBwcm9wcy5kYXRhLmxlbmd0aCAtIDEpIFxyXG4gICAgc2V0QWN0aXZlU2xpZGUoYWN0aXZlU2xpZGUgKyAxKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXYgPSAoKSA9PiBhY3RpdmVTbGlkZSA+IDAgJiYgc2V0QWN0aXZlU2xpZGUoYWN0aXZlU2xpZGUgLSAxKTtcclxuXHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKGluZGV4Om51bWJlcikgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZVNsaWRlID09PSBpbmRleClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVkoMGRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDEwXHJcbiAgICAgIH07XHJcbiAgICBlbHNlIGlmIChhY3RpdmVTbGlkZSAtIDEgPT09IGluZGV4KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTI0MHB4KSB0cmFuc2xhdGVaKC00MDBweCkgcm90YXRlWSgzNWRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDlcclxuICAgICAgfTtcclxuICAgIGVsc2UgaWYgKGFjdGl2ZVNsaWRlICsgMSA9PT0gaW5kZXgpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgyNDBweCkgdHJhbnNsYXRlWigtNDAwcHgpIHJvdGF0ZVkoLTM1ZGVnKVwiLFxyXG4gICAgICAgIHpJbmRleDogOVxyXG4gICAgICB9O1xyXG4gICAgZWxzZSBpZiAoYWN0aXZlU2xpZGUgLSAyID09PSBpbmRleClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC00ODBweCkgdHJhbnNsYXRlWigtNTAwcHgpIHJvdGF0ZVkoMzVkZWcpXCIsXHJcbiAgICAgICAgekluZGV4OiA4XHJcbiAgICAgIH07XHJcbiAgICBlbHNlIGlmIChhY3RpdmVTbGlkZSArIDIgPT09IGluZGV4KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNDgwcHgpIHRyYW5zbGF0ZVooLTUwMHB4KSByb3RhdGVZKC0zNWRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDhcclxuICAgICAgfTtcclxuICAgIGVsc2UgaWYgKGluZGV4IDwgYWN0aXZlU2xpZGUgLSAyKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTQ4MHB4KSB0cmFuc2xhdGVaKC01MDBweCkgcm90YXRlWSgzNWRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDdcclxuICAgICAgfTtcclxuICAgIGVsc2UgaWYgKGluZGV4ID4gYWN0aXZlU2xpZGUgKyAyKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNDgwcHgpIHRyYW5zbGF0ZVooLTUwMHB4KSByb3RhdGVZKC0zNWRlZylcIixcclxuICAgICAgICB6SW5kZXg6IDdcclxuICAgICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcm91c2VsQ29udGFpbmVyU2VjdGlvbj4gIFxyXG4gICAgIDxDb250ZW50ID5cclxuICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRhaW5lciAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXRlbS5iZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBgMCA1cHggMjBweCAke2l0ZW0uYmdDb2xvcn0zMGAsXHJcbiAgICAgICAgICAgICAgICAuLi5nZXRTdHlsZXMoaSlcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNsaWRlckNvbnRlbnQgey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENhcmRSZWZsZWN0aW9uXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMwMDA0MCwgdHJhbnNwYXJlbnQpYCxcclxuICAgICAgICAgICAgICAgIC4uLmdldFN0eWxlcyhpKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxCdXR0b25zID5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLCBtYXJnaW5SaWdodDoyNSx9fVxyXG4gICAgICAgICAgb25DbGljaz17cHJldn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkxlZnR9XHJcbiAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtuZXh0fVxyXG4gICAgICAgICAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLH19XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25SaWdodH1cclxuICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQnV0dG9ucz5cclxuICAgIDwvQ2Fyb3VzZWxDb250YWluZXJTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTbGlkZXJDb250ZW50ID0gKHByb3BzOlNsaWRlckNvbnRlbnRQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxDYXJkQ29udGFpbmVyPlxyXG4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtwcm9wcy5pY29ufSBzdHlsZT17e2ZvbnRTaXplOiAnODBweCcsIGNvbG9yOid3aGl0ZScgfX0gLz4gXHJcbiAgICAgPFRpdGxlQ29udGFpbmVyPntwcm9wcy50aXRsZX08L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICA8RGVzY3JpcHRpb25Db250YWluZXI+e3Byb3BzLmRlc2N9PC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cclxuICAgIDwvQ2FyZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaGV2cm9uUmlnaHQiLCJmYUNoZXZyb25MZWZ0IiwiQ29udGVudCIsIkNhcm91c2VsQ29udGFpbmVyU2VjdGlvbiIsIkNhcmRDb250YWluZXIiLCJDYXJkUmVmbGVjdGlvbiIsIkJ1dHRvbnMiLCJUaXRsZUNvbnRhaW5lciIsIkRlc2NyaXB0aW9uQ29udGFpbmVyIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsImFjdGl2ZVNsaWRlIiwic2V0QWN0aXZlU2xpZGUiLCJuZXh0IiwiZGF0YSIsImxlbmd0aCIsInByZXYiLCJnZXRTdHlsZXMiLCJpbmRleCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJtYXAiLCJpdGVtIiwiaSIsIkZyYWdtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmdDb2xvciIsImJveFNoYWRvdyIsIlNsaWRlckNvbnRlbnQiLCJpZCIsImNsYXNzTmFtZSIsImN1cnNvciIsIm1hcmdpblJpZ2h0Iiwib25DbGljayIsImljb24iLCJjb2xvciIsInNpemUiLCJmb250U2l6ZSIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/index.tsx\n"));

/***/ })

});