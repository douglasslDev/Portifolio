module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[lang]/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/AboutMe/index.tsx":
/*!**************************************!*\
  !*** ./components/AboutMe/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTranslation */ "./hooks/useTranslation.tsx");
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/config */ "./translations/config.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/AboutMe/styles.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\components\\AboutMe\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AboutMe = () => {
  const {
    t
  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const handleLocaleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(locale => {
    const regex = new RegExp(`^/(${_translations_config__WEBPACK_IMPORTED_MODULE_3__["locales"].join("|")})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${locale}`));
    const htmlEl = document.getElementsByTagName("html");
    htmlEl[0].setAttribute("lang", locale);
  }, [router]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["TranslateContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("span", {
    onClick: () => handleLocaleChange("pt"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "PT"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, " | "), __jsx("span", {
    onClick: () => handleLocaleChange("en"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "EN")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ImagePersonal"], {
    src: "https://avatars.githubusercontent.com/u/87835597?v=4",
    width: 100,
    height: 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["TitleName"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Douglas S. Leite"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Qualities"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Quality"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, t("quality1")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Quality"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, t("quality2")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Quality"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, t("quality3")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Quality"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, t("quality4"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, t("description")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["IconsContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    href: "https://github.com/douglasslDev",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Github",
    className: "fab fa-github-square fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    href: "https://www.linkedin.com/in/devdouglassantos/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Linkedin",
    className: "fab fa-linkedin fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    href: "https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "WhatsApp",
    className: "fab fa-whatsapp-square fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    href: "mailto:main@douglas.crc@outlook.com",
    title: "E-mail",
    className: "fas fa-envelope-square fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ButtonContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ContactMe"], {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, t("contactButton"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./components/AboutMe/styles.ts":
/*!**************************************!*\
  !*** ./components/AboutMe/styles.ts ***!
  \**************************************/
/*! exports provided: Content, TranslateContainer, TitleName, ImagePersonal, Qualities, LineHorizontal, Quality, Description, IconsContainer, Icon, ButtonContainer, ContactMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateContainer", function() { return TranslateContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleName", function() { return TitleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePersonal", function() { return ImagePersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qualities", function() { return Qualities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineHorizontal", function() { return LineHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quality", function() { return Quality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsContainer", function() { return IconsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMe", function() { return ContactMe; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  padding: 5% 10%;
  height: 100vh;
 
  @media (min-width: 990px) {
    padding: 20% 18%;
    position: sticky;
    top: 0;
  }
`;
const TranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: absolute;
  top: 3%;
  right: 5%;
  transition: 0.3s;

  > span {
    font-size: 22px;
  }

  > span:nth-child(2) {
    color: darkgray;
  }

  > span:first-child,
  span:last-child {
    cursor: pointer;
    font-size: 18px;
  }

  > span:first-child:hover,
  span:last-child:hover {
    opacity: 0.5;
  }
`;
const TitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 35px;
  font-family: 'serif';
`;
const ImagePersonal = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(next_image__WEBPACK_IMPORTED_MODULE_1___default.a)`
border-radius:80px`;
const Qualities = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 10%;
  margin-bottom: 10%;
  > strong:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 990px) {
    margin-top: 10%;
  }
`;
const LineHorizontal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

`;
const Quality = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.strong`
  font-size: 15px;
  display: block;
  font-family:serif;
  color: #555;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  margin-top: 5%;
  
`;
const IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  height: 50px;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  color: #56baec;
  opacity: 0.5;

  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 10%;
`;
const ContactMe = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-size: 17px;
  font-weight: 500;
  padding: 15px 24px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  background: #007bfc;
  opacity: 0.7;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

/***/ }),

/***/ "./components/Projects/components/Footer/index.tsx":
/*!*********************************************************!*\
  !*** ./components/Projects/components/Footer/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Projects/components/Footer/styles.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\components\\Projects\\components\\Footer\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Content"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "\xA9 2023 Douglas Santos Leite."));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Projects/components/Footer/styles.ts":
/*!*********************************************************!*\
  !*** ./components/Projects/components/Footer/styles.ts ***!
  \*********************************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer`
  display: block;
  > div {
    height: 80px;
    display: flex;
    background: darkgray;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

/***/ }),

/***/ "./components/Projects/components/Project/index.tsx":
/*!**********************************************************!*\
  !*** ./components/Projects/components/Project/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useTranslation */ "./hooks/useTranslation.tsx");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ "primereact/button");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Projects/components/Project/styles.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\components\\Projects\\components\\Project\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Project = ({
  role,
  img,
  type,
  title,
  description,
  source,
  deploy
}) => {
  const {
    t
  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["TopInfo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["RoleInfo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, role)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MockUpContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MockUp"], {
    src: img,
    type: type,
    alt: t("projectImage"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ProjectFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Presentation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, title), __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, description)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["IconsContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    href: source,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Source",
    className: "fab fa-github-square fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    href: deploy,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Deploy",
    className: "fas fa-satellite-dish fa-2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))), __jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    label: "Info",
    severity: "secondary",
    rounded: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), "    ");
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./components/Projects/components/Project/styles.ts":
/*!**********************************************************!*\
  !*** ./components/Projects/components/Project/styles.ts ***!
  \**********************************************************/
/*! exports provided: Content, TopInfo, RoleInfo, MockUpContainer, MockUp, ProjectFooter, Presentation, IconsContainer, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopInfo", function() { return TopInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleInfo", function() { return RoleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockUpContainer", function() { return MockUpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockUp", function() { return MockUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFooter", function() { return ProjectFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presentation", function() { return Presentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsContainer", function() { return IconsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: #0194be;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:20px;
`;
const TopInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;
const RoleInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.strong``;
const MockUpContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  max-width: 100%;
  max-height: 70%;
  display: flex;
  justify-content: center;
`;
const MockUp = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  justify-content: center;
  max-width: ${({
  type
}) => type === "desktop" ? "60%" : " 40%"};
  object-fit: contain;
`;
const ProjectFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    margin-bottom: 15px;
  }
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    > div:first-child {
      margin-bottom: 0;
    }
  }
`;
const Presentation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  color: white;
  text-align: center;
  > span {
    display: block;
  }
`;
const IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
  @media (min-width: 990px) {
    align-items: center;
    justify-content: unset;
  }
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  color: white;
  opacity: 0.5;

  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;

/***/ }),

/***/ "./components/Projects/index.tsx":
/*!***************************************!*\
  !*** ./components/Projects/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useTranslation */ "./hooks/useTranslation.tsx");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Project */ "./components/Projects/components/Project/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./components/Projects/components/Footer/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Projects/styles.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\components\\Projects\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Projects = () => {
  const {
    locale,
    t
  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ProjectContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    role: "Front-end",
    number: "001",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    role: "Front-end",
    number: "001",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    role: "Front-end",
    number: "001",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }), __jsx(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    role: "Front-end",
    number: "001",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Projects/styles.ts":
/*!***************************************!*\
  !*** ./components/Projects/styles.ts ***!
  \***************************************/
/*! exports provided: Content, ProjectContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContainer", function() { return ProjectContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
display: flex;
flex-direction: column;
`;
const ProjectContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
display: flex;
flex-direction: row;

`;

/***/ }),

/***/ "./context/LocaleContext.tsx":
/*!***********************************!*\
  !*** ./context/LocaleContext.tsx ***!
  \***********************************/
/*! exports provided: LocaleContext, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleContext", function() { return LocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations_myTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/myTypes */ "./translations/myTypes.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\context\\LocaleContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LocaleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  locale: "en",
  setLocale: () => null
});
const LocaleProvider = ({
  lang,
  children
}) => {
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(lang);
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (typeof query.lang === "string" && Object(_translations_myTypes__WEBPACK_IMPORTED_MODULE_2__["isLocale"])(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale,
      setLocale
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./hocs/withLocale.tsx":
/*!*****************************!*\
  !*** ./hocs/withLocale.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "next/dist/next-server/lib/utils");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _translations_myTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/myTypes */ "./translations/myTypes.ts");
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.tsx");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\hocs\\withLocale.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/* harmony default export */ __webpack_exports__["default"] = (WrappedPage => {
  const WithLocale = (_ref) => {
    let {
      locale
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["locale"]);

    if (!locale) {
      return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
        statusCode: 404,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      });
    }

    return __jsx(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__["LocaleProvider"], {
      lang: locale,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(WrappedPage, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    })));
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};

    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (typeof ctx.query.lang !== "string" || !Object(_translations_myTypes__WEBPACK_IMPORTED_MODULE_3__["isLocale"])(ctx.query.lang)) {
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        locale: undefined
      });
    }

    return _objectSpread(_objectSpread({}, pageProps), {}, {
      locale: ctx.query.lang
    });
  };

  WithLocale.displayName = `withLang(${Object(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(WrappedPage)})`;
  return WithLocale;
});

/***/ }),

/***/ "./hooks/useTranslation.tsx":
/*!**********************************!*\
  !*** ./hooks/useTranslation.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTranslation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.tsx");
/* harmony import */ var _translations_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/strings */ "./translations/strings.ts");
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/config */ "./translations/config.ts");




function useTranslation() {
  const {
    locale
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__["LocaleContext"]);

  function t(key) {
    if (!_translations_strings__WEBPACK_IMPORTED_MODULE_2__["default"][locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return _translations_strings__WEBPACK_IMPORTED_MODULE_2__["default"][locale][key] || _translations_strings__WEBPACK_IMPORTED_MODULE_2__["default"][_translations_config__WEBPACK_IMPORTED_MODULE_3__["defaultLocale"]][key] || "";
  }

  return {
    t,
    locale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["avatars.githubusercontent.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/[lang]/index.tsx":
/*!********************************!*\
  !*** ./pages/[lang]/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTranslation */ "./hooks/useTranslation.tsx");
/* harmony import */ var _hocs_withLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hocs/withLocale */ "./hocs/withLocale.tsx");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AboutMe */ "./components/AboutMe/index.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Projects */ "./components/Projects/index.tsx");
/* harmony import */ var _styles_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/home */ "./styles/home.ts");
var _jsxFileName = "C:\\Users\\admin2\\Desktop\\portfolio-page\\pages\\[lang]\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = () => {
  const {
    locale,
    t
  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const htmlEl = document.getElementsByTagName("html");
    htmlEl[0].setAttribute("lang", locale);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Douglas Santos - ", t("jobRole")), __jsx("meta", {
    name: "description",
    content: t("metaDescription"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_6__["Main"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_withLocale__WEBPACK_IMPORTED_MODULE_3__["default"])(Home));

/***/ }),

/***/ "./styles/home.ts":
/*!************************!*\
  !*** ./styles/home.ts ***!
  \************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
  }
`;

/***/ }),

/***/ "./translations/config.ts":
/*!********************************!*\
  !*** ./translations/config.ts ***!
  \********************************/
/*! exports provided: defaultLocale, locales, languageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocale", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageNames", function() { return languageNames; });
const defaultLocale = "en";
const locales = ["en", "pt"];
const languageNames = {
  en: "English",
  pt: "Português"
};

/***/ }),

/***/ "./translations/myTypes.ts":
/*!*********************************!*\
  !*** ./translations/myTypes.ts ***!
  \*********************************/
/*! exports provided: isLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocale", function() { return isLocale; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./translations/config.ts");

function isLocale(tested) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["locales"].some(locale => locale === tested);
}

/***/ }),

/***/ "./translations/strings.ts":
/*!*********************************!*\
  !*** ./translations/strings.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const strings = {
  en: {
    jobRole: "Developer",
    metaDescription: "Douglas Santos is a Front-End Developer, that loves JavaScript and related libraries/frameworks like ReactJS and React Native.",
    quality1: "DEVELOPER.",
    quality2: "RELIABLE.",
    quality3: "FAST.",
    quality4: "SMART.",
    description: "Front-End Developer. Currently working as Front-End Lead at Loocal with React & React-Native w/ Redux/Redux-Saga. Follow my work below.",
    contactButton: "Contact me",
    projectImage: "Project Image",
    title001: 'LOUDDI Ministry website',
    description001: "LOUDDI Ministry Landing Page.",
    title002: "Challenge - Employees Management",
    description002: "A simple management system built with TypeScript and ReactJS.",
    title003: "Challenge - API to Employees Management System",
    description003: "A simple API coded to employees management system, built in TypeScript, Express and MongoDB.",
    title004: "Notflix - Netflix clone",
    description004: "A simple Netflix clone made for study purposes, built in TypeScript and ReactJS.",
    title005: "Challenge - Reddit API",
    description005: "In this challenge was used the ReactJS SubReddit API, built in TypeScript an ReactJS.",
    title006: "Challenge - Loocal",
    description006: "Built in TypeScript and ReactJS."
  },
  pt: {
    jobRole: "Desenvolvedor",
    metaDescription: "Douglas Santos é um Desenvolvedor Front-End, que ama JavaScript e bibliotecas/frameworks correlatos, tais como ReactJS e React Native.",
    contactButton: "Contate-me",
    projectImage: "Imagem do Projeto",
    quality1: "DESENVOLVEDOR.",
    quality2: "CONFIÁVEL.",
    quality3: "RÁPIDO.",
    quality4: "INTELIGENTE.",
    description: "Desenvolvedor Front-End. Atualmente trabalhando como Freelancer  de Front-Ent com React & React-Native. Siga meu trabalho nas redes abaixo.",
    title001: "Site Ministério LOUDDI",
    description001: " Landing Page do ministério LOUDDI.",
    title002: "Desafio - Gerenciamento de Funcionários",
    description002: "Um sistema simples de gerenciamento de funcionários feito em TypeScript e ReactJS.",
    title003: "Desafio - API para o Sistema de Gerenciamento de Funcionários",
    description003: "Uma API simples codada para o sistema de gerenciamento de funcionários, feita em TypeScript, Express e MongoDB."
  }
};
/* harmony default export */ __webpack_exports__["default"] = (strings);

/***/ }),

/***/ "next/dist/next-server/lib/utils":
/*!**************************************************!*\
  !*** external "next/dist/next-server/lib/utils" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "primereact/button":
/*!************************************!*\
  !*** external "primereact/button" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/button");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0TWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRNZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0L3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0xvY2FsZUNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2hvY3Mvd2l0aExvY2FsZS50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVHJhbnNsYXRpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19lcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9bbGFuZ10vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lLnRzIiwid2VicGFjazovLy8uL3RyYW5zbGF0aW9ucy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vdHJhbnNsYXRpb25zL215VHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHJhbnNsYXRpb25zL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVyZWFjdC9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQWJvdXRNZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUxvY2FsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibG9jYWxlIiwicmVnZXgiLCJSZWdFeHAiLCJsb2NhbGVzIiwiam9pbiIsInB1c2giLCJwYXRobmFtZSIsImFzUGF0aCIsInJlcGxhY2UiLCJodG1sRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwiQ29udGVudCIsInN0eWxlZCIsInNlY3Rpb24iLCJUcmFuc2xhdGVDb250YWluZXIiLCJkaXYiLCJUaXRsZU5hbWUiLCJoMSIsIkltYWdlUGVyc29uYWwiLCJpbWFnZSIsIlF1YWxpdGllcyIsIkxpbmVIb3Jpem9udGFsIiwiUXVhbGl0eSIsInN0cm9uZyIsIkRlc2NyaXB0aW9uIiwicCIsIkljb25zQ29udGFpbmVyIiwiSWNvbiIsImEiLCJCdXR0b25Db250YWluZXIiLCJDb250YWN0TWUiLCJGb290ZXIiLCJmb290ZXIiLCJQcm9qZWN0Iiwicm9sZSIsImltZyIsInR5cGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiZGVwbG95IiwiVG9wSW5mbyIsIlJvbGVJbmZvIiwiTW9ja1VwQ29udGFpbmVyIiwiTW9ja1VwIiwiUHJvamVjdEZvb3RlciIsIlByZXNlbnRhdGlvbiIsIlByb2plY3RzIiwiUHJvamVjdENvbnRhaW5lciIsIkxvY2FsZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJzZXRMb2NhbGUiLCJMb2NhbGVQcm92aWRlciIsImxhbmciLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImlzTG9jYWxlIiwiV3JhcHBlZFBhZ2UiLCJXaXRoTG9jYWxlIiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidW5kZWZpbmVkIiwiZGlzcGxheU5hbWUiLCJnZXREaXNwbGF5TmFtZSIsInVzZUNvbnRleHQiLCJrZXkiLCJzdHJpbmdzIiwiY29uc29sZSIsIndhcm4iLCJkZWZhdWx0TG9jYWxlIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJsYXlvdXQiLCJ3aWR0aHMiLCJraW5kIiwid2lkdGgiLCJ3IiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJpIiwic2l6ZXMiLCJzcmMiLCJwYXJzZUludCIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwic3RhdHVzQ29kZXMiLCJzdGF0dXNDb2RlIiwicmVzIiwiZXJyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic3R5bGVzIiwiX19odG1sIiwiRXJyb3IiLCJfZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImVycm9yIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkZXNjIiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaDIiLCJIb21lIiwid2l0aExvY2FsZSIsIk1haW4iLCJtYWluIiwibGFuZ3VhZ2VOYW1lcyIsImVuIiwicHQiLCJ0ZXN0ZWQiLCJzb21lIiwiam9iUm9sZSIsIm1ldGFEZXNjcmlwdGlvbiIsInF1YWxpdHkxIiwicXVhbGl0eTIiLCJxdWFsaXR5MyIsInF1YWxpdHk0IiwiY29udGFjdEJ1dHRvbiIsInByb2plY3RJbWFnZSIsInRpdGxlMDAxIiwiZGVzY3JpcHRpb24wMDEiLCJ0aXRsZTAwMiIsImRlc2NyaXB0aW9uMDAyIiwidGl0bGUwMDMiLCJkZXNjcmlwdGlvbjAwMyIsInRpdGxlMDA0IiwiZGVzY3JpcHRpb24wMDQiLCJ0aXRsZTAwNSIsImRlc2NyaXB0aW9uMDA1IiwidGl0bGUwMDYiLCJkZXNjcmlwdGlvbjAwNiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBY0EsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFDQztBQUFELE1BQU1DLHFFQUFjLEVBQTFCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUNuQ0MsTUFBRCxJQUFvQjtBQUNs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UlI7QUFTRkMsWUFBUSxFQUFFLGNBVFI7QUFVRjNMLGVBQVcsRUFDVCw2SUFYQTtBQVlGOEwsWUFBUSxFQUFFLHdCQVpSO0FBYUZDLGtCQUFjLEVBQUUscUNBYmQ7QUFjRkMsWUFBUSxFQUFFLHlDQWRSO0FBZUZDLGtCQUFjLEVBQ1osb0ZBaEJBO0FBaUJGQyxZQUFRLEVBQUUsK0RBakJSO0FBa0JGQyxrQkFBYyxFQUNaO0FBbkJBO0FBL0JtQixDQUF6QjtBQXdEZWhLLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLDREOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL1tsYW5nXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW2xhbmddL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IHtsb2NhbGVzfSBmcm9tIFwiLi4vLi4vdHJhbnNsYXRpb25zL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnQsXHJcbiAgVHJhbnNsYXRlQ29udGFpbmVyLFxyXG4gIFRpdGxlTmFtZSxcclxuICBJbWFnZVBlcnNvbmFsLFxyXG4gIFF1YWxpdGllcyxcclxuICBRdWFsaXR5LFxyXG4gIERlc2NyaXB0aW9uLFxyXG4gIEljb25zQ29udGFpbmVyLFxyXG4gIEljb24sXHJcbiAgQnV0dG9uQ29udGFpbmVyLFxyXG4gIENvbnRhY3RNZSxcclxufSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0TWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9jYWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAobG9jYWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeLygke2xvY2FsZXMuam9pbihcInxcIil9KWApO1xyXG4gICAgICByb3V0ZXIucHVzaChyb3V0ZXIucGF0aG5hbWUsIHJvdXRlci5hc1BhdGgucmVwbGFjZShyZWdleCwgYC8ke2xvY2FsZX1gKSk7XHJcbiAgICAgIGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKTtcclxuICAgICAgaHRtbEVsWzBdLnNldEF0dHJpYnV0ZShcImxhbmdcIiwgbG9jYWxlKTtcclxuICAgIH0sXHJcbiAgICBbcm91dGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIDxUcmFuc2xhdGVDb250YWluZXI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlTG9jYWxlQ2hhbmdlKFwicHRcIil9PlBUPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2NhbGVDaGFuZ2UoXCJlblwiKX0+RU48L3NwYW4+XHJcbiAgICAgIDwvVHJhbnNsYXRlQ29udGFpbmVyPlxyXG4gICAgICA8SW1hZ2VQZXJzb25hbCBzcmM9J2h0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS84NzgzNTU5Nz92PTQnIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG4gICAgICA8VGl0bGVOYW1lPkRvdWdsYXMgUy4gTGVpdGU8L1RpdGxlTmFtZT5cclxuICAgICAgPFF1YWxpdGllcz5cclxuICAgICAgICA8UXVhbGl0eT57dChcInF1YWxpdHkxXCIpfTwvUXVhbGl0eT5cclxuICAgICAgICA8UXVhbGl0eT57dChcInF1YWxpdHkyXCIpfTwvUXVhbGl0eT5cclxuICAgICAgICA8UXVhbGl0eT57dChcInF1YWxpdHkzXCIpfTwvUXVhbGl0eT5cclxuICAgICAgICA8UXVhbGl0eT57dChcInF1YWxpdHk0XCIpfTwvUXVhbGl0eT5cclxuICAgICAgPC9RdWFsaXRpZXM+XHJcbiAgICAgIDxEZXNjcmlwdGlvbj57dChcImRlc2NyaXB0aW9uXCIpfTwvRGVzY3JpcHRpb24+XHJcbiAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb3VnbGFzc2xEZXZcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJHaXRodWJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmUgZmEtMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGV2ZG91Z2xhc3NhbnRvcy9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJMaW5rZWRpblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4gZmEtMnhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTIxOTY2MTk5MTM0JnRleHQ9RmFsYSUyMGRldiFcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJXaGF0c0FwcFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAtc3F1YXJlIGZhLTJ4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBocmVmPVwibWFpbHRvOm1haW5AZG91Z2xhcy5jcmNAb3V0bG9vay5jb21cIlxyXG4gICAgICAgICAgdGl0bGU9XCJFLW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZSBmYS0yeFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFjdE1lXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUyMTk2NjE5OTEzNCZ0ZXh0PUZhbGElMjBkZXYhXCI+XHJcbiAgICAgICAgICB7dChcImNvbnRhY3RCdXR0b25cIil9XHJcbiAgICAgICAgPC9Db250YWN0TWU+XHJcbiAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICBcclxuICAgIDwvQ29udGVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IGltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDUlIDEwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAyMCUgMTglO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNsYXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzJTtcclxuICByaWdodDogNSU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gID4gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuXHJcbiAgPiBzcGFuOmZpcnN0LWNoaWxkLFxyXG4gIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICA+IHNwYW46Zmlyc3QtY2hpbGQ6aG92ZXIsXHJcbiAgc3BhbjpsYXN0LWNoaWxkOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVOYW1lID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LWZhbWlseTogJ3NlcmlmJztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVBlcnNvbmFsID0gc3R5bGVkKGltYWdlKWBcclxuYm9yZGVyLXJhZGl1czo4MHB4YDtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWFsaXRpZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgPiBzdHJvbmc6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVIb3Jpem9udGFsPXN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1YWxpdHkgPSBzdHlsZWQuc3Ryb25nYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTpzZXJpZjtcclxuICBjb2xvcjogIzU1NTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICM1NmJhZWM7XHJcbiAgb3BhY2l0eTogMC41O1xyXG5cclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0TWUgPSBzdHlsZWQuYWBcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxNXB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZjO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7Q29udGVudH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPENvbnRlbnQ+XHJcbiAgICA8ZGl2PsKpIDIwMjMgRG91Z2xhcyBTYW50b3MgTGVpdGUuPC9kaXY+XHJcbiAgPC9Db250ZW50PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5mb290ZXJgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtncmF5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmltcG9ydCB7XHJcbiAgQ29udGVudCxcclxuICBUb3BJbmZvLFxyXG4gIFJvbGVJbmZvLFxyXG4gIE1vY2tVcCxcclxuICBQcm9qZWN0Rm9vdGVyLFxyXG4gIE1vY2tVcENvbnRhaW5lcixcclxuICBQcmVzZW50YXRpb24sXHJcbiAgSWNvbnNDb250YWluZXIsXHJcbiAgSWNvbixcclxufSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmludGVyZmFjZSBpUHJvamVjdCB7XHJcbiAgcm9sZTogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgdHlwZTogXCJtb2JpbGVcIiB8IFwiZGVza3RvcFwiO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBkZXBsb3k6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHJvamVjdCA9ICh7XHJcbiAgcm9sZSxcclxuICBpbWcsXHJcbiAgdHlwZSxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBzb3VyY2UsXHJcbiAgZGVwbG95LFxyXG59OiBpUHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50ID5cclxuICAgICAgPFRvcEluZm8+XHJcbiAgICAgICAgPFJvbGVJbmZvPntyb2xlfTwvUm9sZUluZm8+XHJcbiAgICAgIDwvVG9wSW5mbz5cclxuICAgICAgPE1vY2tVcENvbnRhaW5lcj5cclxuICAgICAgICA8TW9ja1VwIHNyYz17aW1nfSB0eXBlPXt0eXBlfSBhbHQ9e3QoXCJwcm9qZWN0SW1hZ2VcIil9IC8+XHJcbiAgICAgIDwvTW9ja1VwQ29udGFpbmVyPlxyXG4gICAgICA8UHJvamVjdEZvb3Rlcj5cclxuICAgICAgICA8UHJlc2VudGF0aW9uPlxyXG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+e2Rlc2NyaXB0aW9ufTwvc3Ryb25nPlxyXG4gICAgICAgIDwvUHJlc2VudGF0aW9uPlxyXG4gICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIGhyZWY9e3NvdXJjZX1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU291cmNlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmUgZmEtMnhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIGhyZWY9e2RlcGxveX1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRGVwbG95XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdGVsbGl0ZS1kaXNoIGZhLTJ4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgXHJcblxyXG4gICAgICA8L1Byb2plY3RGb290ZXI+XHJcbiAgICAgIDxCdXR0b24gbGFiZWw9XCJJbmZvXCIgc2V2ZXJpdHk9XCJzZWNvbmRhcnlcIiByb3VuZGVkIC8+ICAgIDwvQ29udGVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMwMTk0YmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcEluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb2xlSW5mbyA9IHN0eWxlZC5zdHJvbmdgYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTW9ja1VwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9ja1VwID0gc3R5bGVkLmltZ2BcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6ICR7KHt0eXBlfToge3R5cGU6IHN0cmluZ30pID0+XHJcbiAgICB0eXBlID09PSBcImRlc2t0b3BcIiA/IFwiNjAlXCIgOiBcIiA0MCVcIn07XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0Rm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZXNlbnRhdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uXCI7XHJcblxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IHtDb250ZW50LCBQcm9qZWN0Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtsb2NhbGUsIHR9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIDxQcm9qZWN0Q29udGFpbmVyPlxyXG4gICAgICA8UHJvamVjdFxyXG4gICAgICAgIHJvbGU9XCJGcm9udC1lbmRcIlxyXG4gICAgICAgIG51bWJlcj1cIjAwMVwiXHJcbiAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICBpbWc9XCIvaW1nL21vY2t1cExvdWRkaS5wbmdcIlxyXG4gICAgICAgIHR5cGU9XCJkZXNrdG9wXCJcclxuICAgICAgICB0aXRsZT17dChcInRpdGxlMDAxXCIpfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXt0KFwiZGVzY3JpcHRpb24wMDFcIil9XHJcbiAgICAgICAgc291cmNlPVwiXCJcclxuICAgICAgICBkZXBsb3k9XCJodHRwczovL2xvdWRkaS1naXQtbWFpbi1kb3VnbGFzc2xkZXYudmVyY2VsLmFwcC9cIlxyXG4gICAgICAvPlxyXG4gICAgICA8UHJvamVjdFxyXG4gICAgICAgIHJvbGU9XCJGcm9udC1lbmRcIlxyXG4gICAgICAgIG51bWJlcj1cIjAwMVwiXHJcbiAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICBpbWc9XCIvaW1nL21vY2t1cExvdWRkaS5wbmdcIlxyXG4gICAgICAgIHR5cGU9XCJkZXNrdG9wXCJcclxuICAgICAgICB0aXRsZT17dChcInRpdGxlMDAxXCIpfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXt0KFwiZGVzY3JpcHRpb24wMDFcIil9XHJcbiAgICAgICAgc291cmNlPVwiXCJcclxuICAgICAgICBkZXBsb3k9XCJodHRwczovL2xvdWRkaS1naXQtbWFpbi1kb3VnbGFzc2xkZXYudmVyY2VsLmFwcC9cIlxyXG4gICAgICAvPlxyXG4gICAgICAgPFByb2plY3RcclxuICAgICAgICByb2xlPVwiRnJvbnQtZW5kXCJcclxuICAgICAgICBudW1iZXI9XCIwMDFcIlxyXG4gICAgICAgIGNvbG9yPVwiZ3JheVwiXHJcbiAgICAgICAgaW1nPVwiL2ltZy9tb2NrdXBMb3VkZGkucG5nXCJcclxuICAgICAgICB0eXBlPVwiZGVza3RvcFwiXHJcbiAgICAgICAgdGl0bGU9e3QoXCJ0aXRsZTAwMVwiKX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17dChcImRlc2NyaXB0aW9uMDAxXCIpfVxyXG4gICAgICAgIHNvdXJjZT1cIlwiXHJcbiAgICAgICAgZGVwbG95PVwiaHR0cHM6Ly9sb3VkZGktZ2l0LW1haW4tZG91Z2xhc3NsZGV2LnZlcmNlbC5hcHAvXCJcclxuICAgICAgLz5cclxuICAgICAgPFByb2plY3RcclxuICAgICAgICByb2xlPVwiRnJvbnQtZW5kXCJcclxuICAgICAgICBudW1iZXI9XCIwMDFcIlxyXG4gICAgICAgIGNvbG9yPVwiZ3JheVwiXHJcbiAgICAgICAgaW1nPVwiL2ltZy9tb2NrdXBMb3VkZGkucG5nXCJcclxuICAgICAgICB0eXBlPVwiZGVza3RvcFwiXHJcbiAgICAgICAgdGl0bGU9e3QoXCJ0aXRsZTAwMVwiKX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17dChcImRlc2NyaXB0aW9uMDAxXCIpfVxyXG4gICAgICAgIHNvdXJjZT1cIlwiXHJcbiAgICAgICAgZGVwbG95PVwiaHR0cHM6Ly9sb3VkZGktZ2l0LW1haW4tZG91Z2xhc3NsZGV2LnZlcmNlbC5hcHAvXCJcclxuICAgICAgLz5cclxuICAgICA8L1Byb2plY3RDb250YWluZXI+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvQ29udGVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0Q29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG5gOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge0xvY2FsZSwgaXNMb2NhbGV9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbXlUeXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIENvbnRleHRQcm9wcyB7XHJcbiAgcmVhZG9ubHkgbG9jYWxlOiBMb2NhbGU7XHJcbiAgcmVhZG9ubHkgc2V0TG9jYWxlOiAobG9jYWxlOiBMb2NhbGUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhbGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0UHJvcHM+KHtcclxuICBsb2NhbGU6IFwiZW5cIixcclxuICBzZXRMb2NhbGU6ICgpID0+IG51bGwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2FsZVByb3ZpZGVyOiBSZWFjdC5GQzx7bGFuZzogTG9jYWxlfT4gPSAoe2xhbmcsIGNoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSBSZWFjdC51c2VTdGF0ZShsYW5nKTtcclxuICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBsb2NhbGUpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhbGVdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHF1ZXJ5LmxhbmcgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgaXNMb2NhbGUocXVlcnkubGFuZykgJiZcclxuICAgICAgbG9jYWxlICE9PSBxdWVyeS5sYW5nXHJcbiAgICApIHtcclxuICAgICAgc2V0TG9jYWxlKHF1ZXJ5LmxhbmcpO1xyXG4gICAgfVxyXG4gIH0sIFtxdWVyeS5sYW5nLCBsb2NhbGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bG9jYWxlLCBzZXRMb2NhbGV9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Mb2NhbGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCB7Z2V0RGlzcGxheU5hbWV9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCI7XHJcblxyXG5pbXBvcnQge2lzTG9jYWxlLCBMb2NhbGV9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbXlUeXBlc1wiO1xyXG5pbXBvcnQge0xvY2FsZVByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dC9Mb2NhbGVDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ1Byb3BzIHtcclxuICBsb2NhbGU/OiBMb2NhbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChXcmFwcGVkUGFnZTogTmV4dFBhZ2U8YW55PikgPT4ge1xyXG4gIGNvbnN0IFdpdGhMb2NhbGU6IE5leHRQYWdlPGFueSwgTGFuZ1Byb3BzPiA9ICh7bG9jYWxlLCAuLi5wYWdlUHJvcHN9KSA9PiB7XHJcbiAgICBpZiAoIWxvY2FsZSkge1xyXG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TG9jYWxlUHJvdmlkZXIgbGFuZz17bG9jYWxlfT5cclxuICAgICAgICA8V3JhcHBlZFBhZ2Ugey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgV2l0aExvY2FsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBpZiAoV3JhcHBlZFBhZ2UuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IFdyYXBwZWRQYWdlLmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjdHgucXVlcnkubGFuZyAhPT0gXCJzdHJpbmdcIiB8fCAhaXNMb2NhbGUoY3R4LnF1ZXJ5LmxhbmcpKSB7XHJcbiAgICAgIHJldHVybiB7Li4ucGFnZVByb3BzLCBsb2NhbGU6IHVuZGVmaW5lZH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gey4uLnBhZ2VQcm9wcywgbG9jYWxlOiBjdHgucXVlcnkubGFuZ307XHJcbiAgfTtcclxuXHJcbiAgV2l0aExvY2FsZS5kaXNwbGF5TmFtZSA9IGB3aXRoTGFuZygke2dldERpc3BsYXlOYW1lKFdyYXBwZWRQYWdlKX0pYDtcclxuXHJcbiAgcmV0dXJuIFdpdGhMb2NhbGU7XHJcbn07XHJcbiIsImltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TG9jYWxlQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvTG9jYWxlQ29udGV4dFwiO1xyXG5pbXBvcnQgc3RyaW5ncyBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL3N0cmluZ3NcIjtcclxuaW1wb3J0IHtkZWZhdWx0TG9jYWxlfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVHJhbnNsYXRpb24oKSB7XHJcbiAgY29uc3Qge2xvY2FsZX0gPSB1c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xyXG5cclxuICBmdW5jdGlvbiB0KGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cmluZ3NbbG9jYWxlXVtrZXldKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgVHJhbnNsYXRpb24gJyR7a2V5fScgZm9yIGxvY2FsZSAnJHtsb2NhbGV9JyBub3QgZm91bmQuYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nc1tsb2NhbGVdW2tleV0gfHwgc3RyaW5nc1tkZWZhdWx0TG9jYWxlXVtrZXldIHx8IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdCxcclxuICAgIGxvY2FsZSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8TG9hZGVyVmFsdWUsIChwcm9wczogTG9hZGVyUHJvcHMpID0+IHN0cmluZz4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIsIHdpZHRoICogM10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIENhbGxMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGNhbGxMb2FkZXIobG9hZGVyUHJvcHM6IENhbGxMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSBQaWNrPFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzaXplcycgfCAnc3JjU2V0J1xuPlxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYyB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIGNvbnN0IHNyY1NldCA9IHdpZHRoc1xuICAgIC5tYXAoXG4gICAgICAodywgaSkgPT5cbiAgICAgICAgYCR7Y2FsbExvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgIH0ke2tpbmR9YFxuICAgIClcbiAgICAuam9pbignLCAnKVxuXG4gIGlmICghc2l6ZXMgJiYga2luZCA9PT0gJ3cnKSB7XG4gICAgc2l6ZXMgPSB3aWR0aHNcbiAgICAgIC5tYXAoKHcsIGkpID0+IChpID09PSBsYXN0ID8gYCR7d31weGAgOiBgKG1heC13aWR0aDogJHt3fXB4KSAke3d9cHhgKSlcbiAgICAgIC5qb2luKCcsICcpXG4gIH1cblxuICBzcmMgPSBjYWxsTG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pXG5cbiAgcmV0dXJuIHsgc3JjLCBzaXplcywgc3JjU2V0IH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbnR5cGUgTG9hZGVyUHJvcHMgPSBDYWxsTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZykge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoLCBxdWFsaXR5IH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoLCBxdWFsaXR5IH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdC90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncV8nICsgcXVhbGl0eSlcbiAgfVxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcblxuY29uc3Qgc3RhdHVzQ29kZXM6IHsgW2NvZGU6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxufVxuXG5leHBvcnQgdHlwZSBFcnJvclByb3BzID0ge1xuICBzdGF0dXNDb2RlOiBudW1iZXJcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7XG4gIHJlcyxcbiAgZXJyLFxufTogTmV4dFBhZ2VDb250ZXh0KTogUHJvbWlzZTxFcnJvclByb3BzPiB8IEVycm9yUHJvcHMge1xuICBjb25zdCBzdGF0dXNDb2RlID1cbiAgICByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlISA6IDQwNFxuICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbn1cblxuLyoqXG4gKiBgRXJyb3JgIGNvbXBvbmVudCB1c2VkIGZvciBoYW5kbGluZyBlcnJvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yPFAgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCAmIEVycm9yUHJvcHM+IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSdcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGl0bGUgPVxuICAgICAgdGhpcy5wcm9wcy50aXRsZSB8fFxuICAgICAgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHxcbiAgICAgICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7c3RhdHVzQ29kZX06IHt0aXRsZX1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfScgfX0gLz5cbiAgICAgICAgICB7c3RhdHVzQ29kZSA/IDxoMSBzdHlsZT17c3R5bGVzLmgxfT57c3RhdHVzQ29kZX08L2gxPiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaDJ9Pnt0aXRsZX0uPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzOiB7IFtrOiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0gPSB7XG4gIGVycm9yOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgZm9udEZhbWlseTpcbiAgICAgICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG5cbiAgZGVzYzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgfSxcblxuICBoMToge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgfSxcblxuICBoMjoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2Vycm9yJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uXCI7XHJcblxyXG5pbXBvcnQgd2l0aExvY2FsZSBmcm9tIFwiLi4vLi4vaG9jcy93aXRoTG9jYWxlXCI7XHJcblxyXG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BYm91dE1lXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWVcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7bG9jYWxlLCB0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBodG1sRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIik7XHJcbiAgICBodG1sRWxbMF0uc2V0QXR0cmlidXRlKFwibGFuZ1wiLCBsb2NhbGUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRvdWdsYXMgU2FudG9zIC0ge3QoXCJqb2JSb2xlXCIpfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dChcIm1ldGFEZXNjcmlwdGlvblwiKX0+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluPlxyXG4gICAgICAgIDxBYm91dE1lIC8+XHJcbiAgICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgIDwvTWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMb2NhbGUoSG9tZSk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAxZnI7XHJcbiAgfVxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZSA9IFwiZW5cIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhbGVzID0gW1wiZW5cIiwgXCJwdFwiXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZU5hbWVzID0ge1xyXG4gIGVuOiBcIkVuZ2xpc2hcIixcclxuICBwdDogXCJQb3J0dWd1w6pzXCIsXHJcbn07XHJcbiIsImltcG9ydCB7bG9jYWxlc30gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgdHlwZSBMb2NhbGUgPSB0eXBlb2YgbG9jYWxlc1tudW1iZXJdO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RyaW5ncyA9IHtcclxuICBba2V5IGluIExvY2FsZV06IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxlKHRlc3RlZDogc3RyaW5nKTogdGVzdGVkIGlzIExvY2FsZSB7XHJcbiAgcmV0dXJuIGxvY2FsZXMuc29tZSgobG9jYWxlKSA9PiBsb2NhbGUgPT09IHRlc3RlZCk7XHJcbn1cclxuIiwiaW1wb3J0IHtTdHJpbmdzfSBmcm9tIFwiLi9teVR5cGVzXCI7XHJcblxyXG5jb25zdCBzdHJpbmdzOiBTdHJpbmdzID0ge1xyXG4gIGVuOiB7XHJcbiAgICBqb2JSb2xlOiBcIkRldmVsb3BlclwiLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOlxyXG4gICAgICBcIkRvdWdsYXMgU2FudG9zIGlzIGEgRnJvbnQtRW5kIERldmVsb3BlciwgdGhhdCBsb3ZlcyBKYXZhU2NyaXB0IGFuZCByZWxhdGVkIGxpYnJhcmllcy9mcmFtZXdvcmtzIGxpa2UgUmVhY3RKUyBhbmQgUmVhY3QgTmF0aXZlLlwiLFxyXG4gICAgcXVhbGl0eTE6IFwiREVWRUxPUEVSLlwiLFxyXG4gICAgcXVhbGl0eTI6IFwiUkVMSUFCTEUuXCIsXHJcbiAgICBxdWFsaXR5MzogXCJGQVNULlwiLFxyXG4gICAgcXVhbGl0eTQ6IFwiU01BUlQuXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGcm9udC1FbmQgRGV2ZWxvcGVyLiBDdXJyZW50bHkgd29ya2luZyBhcyBGcm9udC1FbmQgTGVhZCBhdCBMb29jYWwgd2l0aCBSZWFjdCAmIFJlYWN0LU5hdGl2ZSB3LyBSZWR1eC9SZWR1eC1TYWdhLiBGb2xsb3cgbXkgd29yayBiZWxvdy5cIixcclxuICAgIGNvbnRhY3RCdXR0b246IFwiQ29udGFjdCBtZVwiLFxyXG4gICAgcHJvamVjdEltYWdlOiBcIlByb2plY3QgSW1hZ2VcIixcclxuICAgIHRpdGxlMDAxOiAnTE9VRERJIE1pbmlzdHJ5IHdlYnNpdGUnLFxyXG4gICAgZGVzY3JpcHRpb24wMDE6IFwiTE9VRERJIE1pbmlzdHJ5IExhbmRpbmcgUGFnZS5cIixcclxuICAgIHRpdGxlMDAyOiBcIkNoYWxsZW5nZSAtIEVtcGxveWVlcyBNYW5hZ2VtZW50XCIsXHJcbiAgICBkZXNjcmlwdGlvbjAwMjpcclxuICAgICAgXCJBIHNpbXBsZSBtYW5hZ2VtZW50IHN5c3RlbSBidWlsdCB3aXRoIFR5cGVTY3JpcHQgYW5kIFJlYWN0SlMuXCIsXHJcbiAgICB0aXRsZTAwMzogXCJDaGFsbGVuZ2UgLSBBUEkgdG8gRW1wbG95ZWVzIE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjAwMzpcclxuICAgICAgXCJBIHNpbXBsZSBBUEkgY29kZWQgdG8gZW1wbG95ZWVzIG1hbmFnZW1lbnQgc3lzdGVtLCBidWlsdCBpbiBUeXBlU2NyaXB0LCBFeHByZXNzIGFuZCBNb25nb0RCLlwiLFxyXG4gICAgdGl0bGUwMDQ6IFwiTm90ZmxpeCAtIE5ldGZsaXggY2xvbmVcIixcclxuICAgIGRlc2NyaXB0aW9uMDA0OlxyXG4gICAgICBcIkEgc2ltcGxlIE5ldGZsaXggY2xvbmUgbWFkZSBmb3Igc3R1ZHkgcHVycG9zZXMsIGJ1aWx0IGluIFR5cGVTY3JpcHQgYW5kIFJlYWN0SlMuXCIsXHJcbiAgICB0aXRsZTAwNTogXCJDaGFsbGVuZ2UgLSBSZWRkaXQgQVBJXCIsXHJcbiAgICBkZXNjcmlwdGlvbjAwNTpcclxuICAgICAgXCJJbiB0aGlzIGNoYWxsZW5nZSB3YXMgdXNlZCB0aGUgUmVhY3RKUyBTdWJSZWRkaXQgQVBJLCBidWlsdCBpbiBUeXBlU2NyaXB0IGFuIFJlYWN0SlMuXCIsXHJcbiAgICAgIHRpdGxlMDA2OiBcIkNoYWxsZW5nZSAtIExvb2NhbFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjAwNjpcclxuICAgICAgICBcIkJ1aWx0IGluIFR5cGVTY3JpcHQgYW5kIFJlYWN0SlMuXCJcclxuICB9LFxyXG4gIHB0OiB7XHJcbiAgICBqb2JSb2xlOiBcIkRlc2Vudm9sdmVkb3JcIixcclxuICAgIG1ldGFEZXNjcmlwdGlvbjpcclxuICAgICAgXCJEb3VnbGFzIFNhbnRvcyDDqSB1bSBEZXNlbnZvbHZlZG9yIEZyb250LUVuZCwgcXVlIGFtYSBKYXZhU2NyaXB0IGUgYmlibGlvdGVjYXMvZnJhbWV3b3JrcyBjb3JyZWxhdG9zLCB0YWlzIGNvbW8gUmVhY3RKUyBlIFJlYWN0IE5hdGl2ZS5cIixcclxuICAgIGNvbnRhY3RCdXR0b246IFwiQ29udGF0ZS1tZVwiLFxyXG4gICAgcHJvamVjdEltYWdlOiBcIkltYWdlbSBkbyBQcm9qZXRvXCIsXHJcbiAgICBxdWFsaXR5MTogXCJERVNFTlZPTFZFRE9SLlwiLFxyXG4gICAgcXVhbGl0eTI6IFwiQ09ORknDgVZFTC5cIixcclxuICAgIHF1YWxpdHkzOiBcIlLDgVBJRE8uXCIsXHJcbiAgICBxdWFsaXR5NDogXCJJTlRFTElHRU5URS5cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkRlc2Vudm9sdmVkb3IgRnJvbnQtRW5kLiBBdHVhbG1lbnRlIHRyYWJhbGhhbmRvIGNvbW8gRnJlZWxhbmNlciAgZGUgRnJvbnQtRW50IGNvbSBSZWFjdCAmIFJlYWN0LU5hdGl2ZS4gU2lnYSBtZXUgdHJhYmFsaG8gbmFzIHJlZGVzIGFiYWl4by5cIixcclxuICAgIHRpdGxlMDAxOiBcIlNpdGUgTWluaXN0w6lyaW8gTE9VRERJXCIsXHJcbiAgICBkZXNjcmlwdGlvbjAwMTogXCIgTGFuZGluZyBQYWdlIGRvIG1pbmlzdMOpcmlvIExPVURESS5cIixcclxuICAgIHRpdGxlMDAyOiBcIkRlc2FmaW8gLSBHZXJlbmNpYW1lbnRvIGRlIEZ1bmNpb27DoXJpb3NcIixcclxuICAgIGRlc2NyaXB0aW9uMDAyOlxyXG4gICAgICBcIlVtIHNpc3RlbWEgc2ltcGxlcyBkZSBnZXJlbmNpYW1lbnRvIGRlIGZ1bmNpb27DoXJpb3MgZmVpdG8gZW0gVHlwZVNjcmlwdCBlIFJlYWN0SlMuXCIsXHJcbiAgICB0aXRsZTAwMzogXCJEZXNhZmlvIC0gQVBJIHBhcmEgbyBTaXN0ZW1hIGRlIEdlcmVuY2lhbWVudG8gZGUgRnVuY2lvbsOhcmlvc1wiLFxyXG4gICAgZGVzY3JpcHRpb24wMDM6XHJcbiAgICAgIFwiVW1hIEFQSSBzaW1wbGVzIGNvZGFkYSBwYXJhIG8gc2lzdGVtYSBkZSBnZXJlbmNpYW1lbnRvIGRlIGZ1bmNpb27DoXJpb3MsIGZlaXRhIGVtIFR5cGVTY3JpcHQsIEV4cHJlc3MgZSBNb25nb0RCLlwiLFxyXG4gICBcclxuXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0cmluZ3M7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=