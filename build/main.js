/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/tabs/editor.scss */ "./src/blocks/tabs/editor.scss");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * styles and scripts that goes into editor
 */
// import './src/blocks/tab/block';
// import './src/blocks/tabs/block';


/***/ }),

/***/ "./src/blocks/tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/tabs/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\n    at getRenderFuncFromSassImpl (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/sass-loader/dist/index.js:165:13)\n    at Object.loader (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/sass-loader/dist/index.js:79:18)\n    at /home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at Array.<anonymous> (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /home/daniquilez/code/_WEB/www/somcomunitats/wp-content/plugins/ubc-tabs-block/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./block.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./block.js */"./block.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map