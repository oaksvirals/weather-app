/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100vw;
  height: 100vh;
}

.app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
}

header {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 50px 25px 25px;
  margin-top: 20px;
}

header h1 {
  grid-column: 1 / -1;
  text-align: center;
}

header #search {
  grid-column: 4 / 5;
}

header #searchBtn {
  width: 80%;
  justify-self: center;
}

#weatherImg {
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: cover;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#conditionText {
  margin-bottom: 15px;
}

.display {
  margin-top: 100px;
  width: 500px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 5px rgb(0, 0, 0, 0.33);
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.temperature {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 25px;
  text-align: center;
  font-size: 26px;
}

#temp-actual,
#temp-feelslike {
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
}

.other-data {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px dashed black;
}

.toggle {
  margin-top: 25px;
}

.F,
.C {
  font-size: 28px;
  font-weight: bold;
  padding: 25px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: lightseagreen;
  color: white;
  margin-right: 25px;
  margin-left: 25px;
  box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.33);
}

.F:hover,
.C:hover {
  transform: scale(0.95);
  cursor: pointer;
}

.activeBtn {
  color: lightseagreen;
  background-color: white;
  border: 2px solid lightseagreen;
  box-shadow: inset 4px 4px 4px rgb(0, 0, 0, 0.33);
}

.activeBtn:hover {
  transform: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,8CAA8C;EAC9C,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,0CAA0C;AAC5C;;AAEA;;EAEE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,+BAA+B;EAC/B,gDAAgD;AAClD;;AAEA;EACE,eAAe;AACjB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n}\n\n.app {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 50px 25px 25px;\n  margin-top: 20px;\n}\n\nheader h1 {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\nheader #search {\n  grid-column: 4 / 5;\n}\n\nheader #searchBtn {\n  width: 80%;\n  justify-self: center;\n}\n\n#weatherImg {\n  width: 80px;\n  height: 80px;\n  background-position: center;\n  background-size: cover;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#conditionText {\n  margin-bottom: 15px;\n}\n\n.display {\n  margin-top: 100px;\n  width: 500px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 5px 5px rgb(0, 0, 0, 0.33);\n  padding: 25px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.temperature {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  margin-top: 25px;\n  text-align: center;\n  font-size: 26px;\n}\n\n#temp-actual,\n#temp-feelslike {\n  font-size: 26px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.other-data {\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  width: 70%;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  border-bottom: 1px dashed black;\n}\n\n.toggle {\n  margin-top: 25px;\n}\n\n.F,\n.C {\n  font-size: 28px;\n  font-weight: bold;\n  padding: 25px;\n  width: 100px;\n  border: none;\n  border-radius: 8px;\n  background-color: lightseagreen;\n  color: white;\n  margin-right: 25px;\n  margin-left: 25px;\n  box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.33);\n}\n\n.F:hover,\n.C:hover {\n  transform: scale(0.95);\n  cursor: pointer;\n}\n\n.activeBtn {\n  color: lightseagreen;\n  background-color: white;\n  border: 2px solid lightseagreen;\n  box-shadow: inset 4px 4px 4px rgb(0, 0, 0, 0.33);\n}\n\n.activeBtn:hover {\n  transform: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherAutoIP: () => (/* binding */ weatherAutoIP),
/* harmony export */   weatherLocation: () => (/* binding */ weatherLocation)
/* harmony export */ });


async function weatherAutoIP() {
  try {
    const getData = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=7110af8146e149ae9da190029240602&q=auto:ip&aqi=no",
      { mode: "cors" }
    );
    const currentData = await getData.json();
    return currentData;
  } catch {
    console.log("error with weatherAutoIP API fetch");
  }
}

async function weatherLocation(loc) {
  try {
    const getData = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=7110af8146e149ae9da190029240602&q=" +
        loc +
        "&aqi=no",
      { mode: "cors" }
    );
    const currentData = await getData.json();
    return currentData;
  } catch {
    console.log("error with weatherLocation API fetch");
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");



let weatherIP = null;
let weatherLoc = null;
let activeLocation = null;

let tempC, tempF, feelsC, feelsF, country, name, region;
let gustKPH,
  gustMPH,
  humidity,
  precipIN,
  precipMM,
  pressureIN,
  pressureMB,
  uv,
  visKM,
  visMiles,
  windKPH,
  windMPH,
  weatherIcon,
  conditionText;

async function initWeatherData() {
  try {
    weatherIP = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.weatherAutoIP)();
    console.log(weatherIP);
    activeLocation = weatherIP;
    tempC = activeLocation.current.temp_c;
    tempF = activeLocation.current.temp_f;
    feelsC = activeLocation.current.feelslike_c;
    feelsF = activeLocation.current.feelslike_f;
    gustKPH = activeLocation.current.gust_kph;
    gustMPH = activeLocation.current.gust_mph;
    humidity = activeLocation.current.humidity;
    precipIN = activeLocation.current.precip_in;
    precipMM = activeLocation.current.precip_mm;
    pressureIN = activeLocation.current.pressure_in;
    pressureMB = activeLocation.current.pressure_mb;
    uv = activeLocation.current.uv;
    visKM = activeLocation.current.vis_km;
    visMiles = activeLocation.current.vis_miles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
    weatherIcon = activeLocation.current.condition.icon;
    conditionText = activeLocation.current.condition.text;
  } catch {
    console.log("error with initWeatherData");
  }
}

(async function onLoad() {
  await initWeatherData();
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  humid.textContent = humidity;
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
  uvIndex.textContent = uv;

  headingCountry.textContent = country;
  headingLocation.textContent = name + ", " + region;

  weatherImage.style.backgroundImage = `url(${weatherIcon})`;
  conditionTxt.textContent = conditionText;
})();

async function initWeatherLocation(location) {
  try {
    weatherLoc = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.weatherLocation)(location);
    console.log(weatherLoc);
    activeLocation = weatherLoc;
    tempC = activeLocation.current.temp_c;
    tempF = activeLocation.current.temp_f;
    feelsC = activeLocation.current.feelslike_c;
    feelsF = activeLocation.current.feelslike_f;
    gustKPH = activeLocation.current.gust_kph;
    gustMPH = activeLocation.current.gust_mph;
    humidity = activeLocation.current.humidity;
    precipIN = activeLocation.current.precip_in;
    precipMM = activeLocation.current.precip_mm;
    pressureIN = activeLocation.current.pressure_in;
    pressureMB = activeLocation.current.pressure_mb;
    uv = activeLocation.current.uv;
    visKM = activeLocation.current.vis_km;
    visMiles = activeLocation.current.vis_miles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
    weatherIcon = activeLocation.current.condition.icon;
    conditionText = activeLocation.current.condition.text;
  } catch {
    console.log("error with initWeatherLocation");
  }
}

const tempActual = document.querySelector("#temp-actual");
const tempFeelsLike = document.querySelector("#temp-feelslike");
const percipitation = document.querySelector("#percipitation");
const humid = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const visibility = document.querySelector("#visibility");
const wind = document.querySelector("#wind");
const uvIndex = document.querySelector("#uv");

const headingCountry = document.querySelector("#country");
const headingLocation = document.querySelector("#location");

const weatherImage = document.querySelector("#weatherImg");
const conditionTxt = document.querySelector("#conditionText");

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

async function searchWeather() {
  await initWeatherLocation(search.value);
  search.value = "";
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  humid.textContent = humidity;
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
  uvIndex.textContent = uv;

  headingCountry.textContent = country;
  headingLocation.textContent = name + ", " + region;

  weatherImage.style.backgroundImage = `url(${weatherIcon})`;
  conditionTxt.textContent = conditionText;
}

searchBtn.addEventListener("click", searchWeather);

const fButton = document.querySelector("#F");
const cButton = document.querySelector("#C");

function activateF() {
  fButton.classList.add("activeBtn");
  cButton.classList.remove("activeBtn");
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
}

function activateC() {
  cButton.classList.add("activeBtn");
  fButton.classList.remove("activeBtn");
  tempActual.textContent = tempC + "°C";
  tempFeelsLike.textContent = feelsC + "°C";
  percipitation.textContent = precipMM + " mm";
  pressure.textContent = pressureMB + " mb";
  visibility.textContent = visKM + " km";
  wind.textContent = windKPH + " kph";
}

fButton.addEventListener("click", activateF);
cButton.addEventListener("click", activateC);

})();

/******/ })()
;
//# sourceMappingURL=index.15936f2a212be48141ab.js.map