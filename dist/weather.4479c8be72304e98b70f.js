/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
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

/******/ })()
;
//# sourceMappingURL=weather.4479c8be72304e98b70f.js.map