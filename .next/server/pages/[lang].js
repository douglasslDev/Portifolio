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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ae98");


/***/ }),

/***/ "0G5g":
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

/***/ "1ccW":
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

/***/ "3MaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLocale; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uGy7");

function isLocale(tested) {
  return _config__WEBPACK_IMPORTED_MODULE_0__[/* locales */ "b"].some(locale => locale === tested);
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "98FW":
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

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Ae98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./translations/myTypes.ts
var myTypes = __webpack_require__("3MaC");

// CONCATENATED MODULE: ./context/LocaleContext.tsx
var __jsx = external_react_default.a.createElement;



const LocaleContext = /*#__PURE__*/external_react_default.a.createContext({
  locale: "en",
  setLocale: () => null
});
const LocaleProvider = ({
  lang,
  children
}) => {
  const [locale, setLocale] = external_react_default.a.useState(lang);
  const {
    query
  } = Object(router_["useRouter"])();
  external_react_default.a.useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);
  external_react_default.a.useEffect(() => {
    if (typeof query.lang === "string" && Object(myTypes["a" /* isLocale */])(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale,
      setLocale
    }
  }, children);
};
// CONCATENATED MODULE: ./translations/strings.ts
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
/* harmony default export */ var translations_strings = (strings);
// EXTERNAL MODULE: ./translations/config.ts
var config = __webpack_require__("uGy7");

// CONCATENATED MODULE: ./hooks/useTranslation.tsx




function useTranslation() {
  const {
    locale
  } = Object(external_react_["useContext"])(LocaleContext);

  function t(key) {
    if (!translations_strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return translations_strings[locale][key] || translations_strings[config["a" /* defaultLocale */]][key] || "";
  }

  return {
    t,
    locale
  };
}
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: external "next/dist/next-server/lib/utils"
var utils_ = __webpack_require__("U8mc");

// CONCATENATED MODULE: ./hocs/withLocale.tsx
var withLocale_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/* harmony default export */ var withLocale = (WrappedPage => {
  const WithLocale = (_ref) => {
    let {
      locale
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["locale"]);

    if (!locale) {
      return withLocale_jsx(error_default.a, {
        statusCode: 404
      });
    }

    return withLocale_jsx(LocaleProvider, {
      lang: locale
    }, withLocale_jsx(WrappedPage, pageProps));
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};

    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (typeof ctx.query.lang !== "string" || !Object(myTypes["a" /* isLocale */])(ctx.query.lang)) {
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        locale: undefined
      });
    }

    return _objectSpread(_objectSpread({}, pageProps), {}, {
      locale: ctx.query.lang
    });
  };

  WithLocale.displayName = `withLang(${Object(utils_["getDisplayName"])(WrappedPage)})`;
  return WithLocale;
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/AboutMe/styles.ts


const Content = external_styled_components_default.a.section`
  padding: 5% 10%;
  height: 100vh;
 
  @media (min-width: 990px) {
    padding: 20% 18%;
    position: sticky;
    top: 0;
  }
`;
const TranslateContainer = external_styled_components_default.a.div`
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
const TitleName = external_styled_components_default.a.h1`
  font-size: 35px;
  font-family: 'serif';
`;
const ImagePersonal = external_styled_components_default()(image_default.a)`
border-radius:80px`;
const Qualities = external_styled_components_default.a.div`
  margin-top: 10%;
  margin-bottom: 10%;
  > strong:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 990px) {
    margin-top: 10%;
  }
`;
const LineHorizontal = external_styled_components_default.a.div`

`;
const Quality = external_styled_components_default.a.strong`
  font-size: 15px;
  display: block;
  font-family:serif;
  color: #555;
`;
const Description = external_styled_components_default.a.p`
  margin-top: 5%;
  
`;
const IconsContainer = external_styled_components_default.a.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  height: 50px;
`;
const Icon = external_styled_components_default.a.a`
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
const ButtonContainer = external_styled_components_default.a.div`
  margin-top: 10%;
`;
const ContactMe = external_styled_components_default.a.a`
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
// CONCATENATED MODULE: ./components/AboutMe/index.tsx

var AboutMe_jsx = external_react_default.a.createElement;






const AboutMe = () => {
  const {
    t
  } = useTranslation();
  const router = Object(router_["useRouter"])();
  const handleLocaleChange = Object(external_react_["useCallback"])(locale => {
    const regex = new RegExp(`^/(${config["b" /* locales */].join("|")})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${locale}`));
    const htmlEl = document.getElementsByTagName("html");
    htmlEl[0].setAttribute("lang", locale);
  }, [router]);
  return AboutMe_jsx(Content, null, AboutMe_jsx(TranslateContainer, null, AboutMe_jsx("span", {
    onClick: () => handleLocaleChange("pt")
  }, "PT"), AboutMe_jsx("span", null, " | "), AboutMe_jsx("span", {
    onClick: () => handleLocaleChange("en")
  }, "EN")), AboutMe_jsx(ImagePersonal, {
    src: "https://avatars.githubusercontent.com/u/87835597?v=4",
    width: 100,
    height: 100
  }), AboutMe_jsx(TitleName, null, "Douglas S. Leite"), AboutMe_jsx(Qualities, null, AboutMe_jsx(Quality, null, t("quality1")), AboutMe_jsx(Quality, null, t("quality2")), AboutMe_jsx(Quality, null, t("quality3")), AboutMe_jsx(Quality, null, t("quality4"))), AboutMe_jsx(Description, null, t("description")), AboutMe_jsx(IconsContainer, null, AboutMe_jsx(Icon, {
    href: "https://github.com/douglasslDev",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Github",
    className: "fab fa-github-square fa-2x"
  }), AboutMe_jsx(Icon, {
    href: "https://www.linkedin.com/in/devdouglassantos/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Linkedin",
    className: "fab fa-linkedin fa-2x"
  }), AboutMe_jsx(Icon, {
    href: "https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "WhatsApp",
    className: "fab fa-whatsapp-square fa-2x"
  }), AboutMe_jsx(Icon, {
    href: "mailto:main@douglas.crc@outlook.com",
    title: "E-mail",
    className: "fas fa-envelope-square fa-2x"
  })), AboutMe_jsx(ButtonContainer, null, AboutMe_jsx(ContactMe, {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!"
  }, t("contactButton"))));
};

/* harmony default export */ var components_AboutMe = (AboutMe);
// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__("YbSJ");

// CONCATENATED MODULE: ./components/Projects/components/Project/styles.ts

const styles_Content = external_styled_components_default.a.div`
  background: #0194be;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:20px;
`;
const TopInfo = external_styled_components_default.a.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;
const RoleInfo = external_styled_components_default.a.strong``;
const MockUpContainer = external_styled_components_default.a.div`
  max-width: 100%;
  max-height: 70%;
  display: flex;
  justify-content: center;
`;
const MockUp = external_styled_components_default.a.img`
  justify-content: center;
  max-width: ${({
  type
}) => type === "desktop" ? "60%" : " 40%"};
  object-fit: contain;
`;
const ProjectFooter = external_styled_components_default.a.div`
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
const Presentation = external_styled_components_default.a.div`
  color: white;
  text-align: center;
  > span {
    display: block;
  }
`;
const styles_IconsContainer = external_styled_components_default.a.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
  @media (min-width: 990px) {
    align-items: center;
    justify-content: unset;
  }
`;
const styles_Icon = external_styled_components_default.a.a`
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
// CONCATENATED MODULE: ./components/Projects/components/Project/index.tsx

var Project_jsx = external_react_default.a.createElement;




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
  } = useTranslation();
  return Project_jsx(styles_Content, null, Project_jsx(TopInfo, null, Project_jsx(RoleInfo, null, role)), Project_jsx(MockUpContainer, null, Project_jsx(MockUp, {
    src: img,
    type: type,
    alt: t("projectImage")
  })), Project_jsx(ProjectFooter, null, Project_jsx(Presentation, null, Project_jsx("span", null, title), Project_jsx("strong", null, description)), Project_jsx(styles_IconsContainer, null, Project_jsx(styles_Icon, {
    href: source,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Source",
    className: "fab fa-github-square fa-2x"
  }), Project_jsx(styles_Icon, {
    href: deploy,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Deploy",
    className: "fas fa-satellite-dish fa-2x"
  }))), Project_jsx(button_["Button"], {
    label: "Info",
    severity: "secondary",
    rounded: true
  }), "    ");
};

/* harmony default export */ var components_Project = (Project);
// CONCATENATED MODULE: ./components/Projects/components/Footer/styles.ts

const Footer_styles_Content = external_styled_components_default.a.footer`
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
// CONCATENATED MODULE: ./components/Projects/components/Footer/index.tsx

var Footer_jsx = external_react_default.a.createElement;


const Footer = () => Footer_jsx(Footer_styles_Content, null, Footer_jsx("div", null, "\xA9 2023 Douglas Santos Leite."));

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Projects/styles.ts

const Projects_styles_Content = external_styled_components_default.a.section`
display: flex;
flex-direction: column;
`;
const ProjectContainer = external_styled_components_default.a.section`
display: flex;
flex-direction: row;

`;
// CONCATENATED MODULE: ./components/Projects/index.tsx

var Projects_jsx = external_react_default.a.createElement;





const Projects = () => {
  const {
    locale,
    t
  } = useTranslation();
  return Projects_jsx(Projects_styles_Content, null, Projects_jsx(ProjectContainer, null, Projects_jsx(components_Project, {
    role: "Front-end",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/"
  }), Projects_jsx(components_Project, {
    role: "Front-end",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/"
  }), Projects_jsx(components_Project, {
    role: "Front-end",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/"
  }), Projects_jsx(components_Project, {
    role: "Front-end",
    color: "gray",
    img: "/img/mockupLouddi.png",
    type: "desktop",
    title: t("title001"),
    description: t("description001"),
    source: "",
    deploy: "https://louddi-git-main-douglassldev.vercel.app/"
  })), Projects_jsx(components_Footer, null));
};

/* harmony default export */ var components_Projects = (Projects);
// CONCATENATED MODULE: ./styles/home.ts

const Main = external_styled_components_default.a.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
  }
`;
// CONCATENATED MODULE: ./pages/[lang]/index.tsx

var _lang_jsx = external_react_default.a.createElement;








const Home = () => {
  const {
    locale,
    t
  } = useTranslation();
  Object(external_react_["useEffect"])(() => {
    const htmlEl = document.getElementsByTagName("html");
    htmlEl[0].setAttribute("lang", locale);
  }, []);
  return _lang_jsx(external_react_default.a.Fragment, null, _lang_jsx(head_default.a, null, _lang_jsx("title", null, "Douglas Santos - ", t("jobRole")), _lang_jsx("meta", {
    name: "description",
    content: t("metaDescription")
  })), _lang_jsx(Main, null, _lang_jsx(components_AboutMe, null), _lang_jsx(components_Projects, null)));
};

/* harmony default export */ var _lang_ = __webpack_exports__["default"] = (withLocale(Home));

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "U8mc":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "YbSJ":
/***/ (function(module, exports) {

module.exports = require("primereact/button");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

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

  if (false) {}

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
    if (false) {}
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
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "uGy7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locales; });
/* unused harmony export languageNames */
const defaultLocale = "en";
const locales = ["en", "pt"];
const languageNames = {
  en: "English",
  pt: "Português"
};

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });