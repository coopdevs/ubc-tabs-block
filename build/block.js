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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
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
/* harmony import */ var _src_blocks_tab_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/tab/block */ "./src/blocks/tab/block.js");
/* harmony import */ var _src_blocks_tabs_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/blocks/tabs/block */ "./src/blocks/tabs/block.js");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/blocks/tabs/editor.scss */ "./src/blocks/tabs/editor.scss");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * styles and scripts that goes into editor
 */




/***/ }),

/***/ "./src/blocks/helper.js":
/*!******************************!*\
  !*** ./src/blocks/helper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Original Source: https://salferrarello.com/wordpress-sanitize-title-javascript/
 *
 * Version: 1.0.3
 *
 * JavaScript function to mimic the WordPress PHP function sanitize_title()
 * See https://codex.wordpress.org/Function_Reference/sanitize_title
 *
 * Note: the WordPress PHP function sanitize_title() accepts two additional
 * optional parameters. At this time, this function does not.
 *
 * @param string title The title to be santized.
 * @return string The sanitized string.
 */
function WPSanitizeTitle(title) {
  var diacriticsMap;
  return removeSingleTrailingDash(replaceSpacesWithDash(removeAccents( // Strip any HTML tags.
  title.replace(/<[^>]+>/ig, '')).toLowerCase() // Replace any forward slashes (/) or periods (.) with a dash (-).
  .replace(/[\/\.]/g, '-') // Replace anything that is not a:
  // word character
  // space
  // nor a dash (-)
  // with an empty string (i.e. remove it).
  .replace(/[^\w\s-]+/g, '')));
  /**
   * Replace one or more blank spaces (or repeated dashes) with a single dash.
   *
   * @param str String that may contain spaces or multiple dashes.
   * @return String with spaces replaced by dashes and no more than one dash in a row.
   */

  function replaceSpacesWithDash(str) {
    return str // Replace one or more blank spaces with a single dash (-)
    .replace(/ +/g, '-') // Replace two or more dashes (-) with a single dash (-).
    .replace(/-{2,}/g, '-');
  }
  /**
   * If the string end in a dash, remove it.
   *
   * @param string str The string which may or may not end in a dash.
   * @return string The string without a dash on the end.
   */


  function removeSingleTrailingDash(str) {
    if ('-' === str.substr(str.length - 1)) {
      return str.substr(0, str.length - 1);
    }

    return str;
  }
  /* Remove accents/diacritics in a string in JavaScript
   * from https://stackoverflow.com/a/18391901
   */

  /*
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  function getDiacriticsRemovalMap() {
    if (diacriticsMap) {
      return diacriticsMap;
    }

    var defaultDiacriticsRemovalMap = [{
      'base': '-',
      'letters': '\u2013\u2014'
    }, {
      'base': 'A',
      'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
    }, {
      'base': 'AA',
      'letters': '\uA732'
    }, {
      'base': 'AE',
      'letters': '\u00C6\u01FC\u01E2'
    }, {
      'base': 'AO',
      'letters': '\uA734'
    }, {
      'base': 'AU',
      'letters': '\uA736'
    }, {
      'base': 'AV',
      'letters': '\uA738\uA73A'
    }, {
      'base': 'AY',
      'letters': '\uA73C'
    }, {
      'base': 'B',
      'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
    }, {
      'base': 'C',
      'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
    }, {
      'base': 'D',
      'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
    }, {
      'base': 'DZ',
      'letters': '\u01F1\u01C4'
    }, {
      'base': 'Dz',
      'letters': '\u01F2\u01C5'
    }, {
      'base': 'E',
      'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
    }, {
      'base': 'F',
      'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
    }, {
      'base': 'G',
      'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
    }, {
      'base': 'H',
      'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
    }, {
      'base': 'I',
      'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
    }, {
      'base': 'J',
      'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
    }, {
      'base': 'K',
      'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
    }, {
      'base': 'L',
      'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
    }, {
      'base': 'LJ',
      'letters': '\u01C7'
    }, {
      'base': 'Lj',
      'letters': '\u01C8'
    }, {
      'base': 'M',
      'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
    }, {
      'base': 'N',
      'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
    }, {
      'base': 'NJ',
      'letters': '\u01CA'
    }, {
      'base': 'Nj',
      'letters': '\u01CB'
    }, {
      'base': 'O',
      'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
    }, {
      'base': 'OI',
      'letters': '\u01A2'
    }, {
      'base': 'OO',
      'letters': '\uA74E'
    }, {
      'base': 'OU',
      'letters': '\u0222'
    }, {
      'base': 'OE',
      'letters': '\u008C\u0152'
    }, {
      'base': 'oe',
      'letters': '\u009C\u0153'
    }, {
      'base': 'P',
      'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
    }, {
      'base': 'Q',
      'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
    }, {
      'base': 'R',
      'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
    }, {
      'base': 'S',
      'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
    }, {
      'base': 'T',
      'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
    }, {
      'base': 'TZ',
      'letters': '\uA728'
    }, {
      'base': 'U',
      'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
    }, {
      'base': 'V',
      'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
    }, {
      'base': 'VY',
      'letters': '\uA760'
    }, {
      'base': 'W',
      'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
    }, {
      'base': 'X',
      'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
    }, {
      'base': 'Y',
      'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
    }, {
      'base': 'Z',
      'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
    }, {
      'base': 'a',
      'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
    }, {
      'base': 'aa',
      'letters': '\uA733'
    }, {
      'base': 'ae',
      'letters': '\u00E6\u01FD\u01E3'
    }, {
      'base': 'ao',
      'letters': '\uA735'
    }, {
      'base': 'au',
      'letters': '\uA737'
    }, {
      'base': 'av',
      'letters': '\uA739\uA73B'
    }, {
      'base': 'ay',
      'letters': '\uA73D'
    }, {
      'base': 'b',
      'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
    }, {
      'base': 'c',
      'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
    }, {
      'base': 'd',
      'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
    }, {
      'base': 'dz',
      'letters': '\u01F3\u01C6'
    }, {
      'base': 'e',
      'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
    }, {
      'base': 'f',
      'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
    }, {
      'base': 'g',
      'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
    }, {
      'base': 'h',
      'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
    }, {
      'base': 'hv',
      'letters': '\u0195'
    }, {
      'base': 'i',
      'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
    }, {
      'base': 'j',
      'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
    }, {
      'base': 'k',
      'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
    }, {
      'base': 'l',
      'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
    }, {
      'base': 'lj',
      'letters': '\u01C9'
    }, {
      'base': 'm',
      'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
    }, {
      'base': 'n',
      'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
    }, {
      'base': 'nj',
      'letters': '\u01CC'
    }, {
      'base': 'o',
      'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
    }, {
      'base': 'oi',
      'letters': '\u01A3'
    }, {
      'base': 'ou',
      'letters': '\u0223'
    }, {
      'base': 'oo',
      'letters': '\uA74F'
    }, {
      'base': 'p',
      'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
    }, {
      'base': 'q',
      'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
    }, {
      'base': 'r',
      'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
    }, {
      'base': 's',
      'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
    }, {
      'base': 't',
      'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
    }, {
      'base': 'tz',
      'letters': '\uA729'
    }, {
      'base': 'u',
      'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
    }, {
      'base': 'v',
      'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
    }, {
      'base': 'vy',
      'letters': '\uA761'
    }, {
      'base': 'w',
      'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
    }, {
      'base': 'x',
      'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
    }, {
      'base': 'y',
      'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
    }, {
      'base': 'z',
      'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
    }];
    diacriticsMap = {};

    for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
      var letters = defaultDiacriticsRemovalMap[i].letters;

      for (var j = 0; j < letters.length; j++) {
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
      }
    }

    return diacriticsMap;
  } // Remove accent characters/diacritics from the string.


  function removeAccents(str) {
    diacriticsMap = getDiacriticsRemovalMap();
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return diacriticsMap[a] || a;
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WPSanitizeTitle);

/***/ }),

/***/ "./src/blocks/tab/attributes.js":
/*!**************************************!*\
  !*** ./src/blocks/tab/attributes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
const attributes = {
  index: {
    type: 'number',
    default: null
  },
  title: {
    type: 'string',
    default: 'Tab'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/tab/block.js":
/*!*********************************!*\
  !*** ./src/blocks/tab/block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/tab/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tab/attributes.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/tab/save.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/tab', {
  parent: ['ubc/tabs'],
  title: 'UBC Tab Block',
  description: __('Add accessible tabs of content which convert to accordions on smaller screens.'),
  icon: () => {
    return (
      /*#__PURE__*/
      React.createElement("svg", {
        enableBackground: "new 0 0 32 32",
        height: "32px",
        id: "svg2",
        version: "1.1",
        viewBox: "0 0 32 32",
        width: "32px",
        xmlSpace: "preserve",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /*#__PURE__*/
      React.createElement("g", {
        id: "background"
      },
      /*#__PURE__*/
      React.createElement("rect", {
        fill: "none",
        height: "32",
        width: "32",
        x: "0"
      })),
      /*#__PURE__*/
      React.createElement("g", {
        id: "tab"
      },
      /*#__PURE__*/
      React.createElement("path", {
        d: "M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z"
      })))
    );
  },
  keywords: [__('tab'), __('accordion')],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/tab/edit.js":
/*!********************************!*\
  !*** ./src/blocks/tab/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabs/context */ "./src/blocks/tabs/context.js");

const InnerBlocks = wp.blockEditor.InnerBlocks;
const _wp$element = wp.element,
      useContext = _wp$element.useContext,
      useEffect = _wp$element.useEffect;
const compose = wp.compose.compose;
const withSelect = wp.data.withSelect;

const Edit = props => {
  const getBlockTypes = props.getBlockTypes,
        setAttributes = props.setAttributes,
        attributes = props.attributes;
  const index = attributes.index;

  const _useContext = useContext(_tabs_context__WEBPACK_IMPORTED_MODULE_0__["default"]),
        currentTabSelected = _useContext.currentTabSelected,
        tabs = _useContext.tabs,
        tabTitles = _useContext.tabTitles; // Tab block does not allowed tabs block or tab block to be nested inside.


  const allowedBlocks = getBlockTypes().map(block => {
    return block.name;
  }).filter(blockName => {
    return blockName !== 'ubc/tabs' && blockName !== 'ubc/tab';
  });
  /**
   * Reset current tab block position index and title if tab titles array from parent block changed. triggered by moveUp, moveDown, Remove actions in the parent block.
   * Make sure child block always know what's their correct index and title in the parent block.
   */

  useEffect(() => {
    const newIndex = tabs.findIndex(clientId => {
      return clientId === props.clientId;
    });

    if (index === newIndex) {
      setAttributes({
        title: tabTitles[index]
      });
    } else {
      setAttributes({
        index: newIndex
      });
    }
  }, [tabTitles, tabs, props.clientId]);
  return currentTabSelected === index ?
  /*#__PURE__*/
  React.createElement("section", {
    index: index + 1,
    className: "wp-block-ubc-tab ubc-accordion-tabs__tabs-panel",
    id: `section${index + 1}`,
    role: "tabpanel",
    "aria-labelledby": `tab${index + 1}`
  },
  /*#__PURE__*/
  React.createElement("div", {
    className: "content is-open",
    "aria-hidden": true
  },
  /*#__PURE__*/
  React.createElement(InnerBlocks, {
    templateLock: false,
    allowedBlocks: allowedBlocks,
    renderAppender: () =>
    /*#__PURE__*/
    React.createElement(InnerBlocks.ButtonBlockAppender, null)
  }))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(select => {
  const _select = select('core/blocks'),
        getBlockTypes = _select.getBlockTypes;

  return {
    getBlockTypes
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/tab/save.js":
/*!********************************!*\
  !*** ./src/blocks/tab/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _props$attributes = props.attributes,
        index = _props$attributes.index,
        title = _props$attributes.title;
  return (
    /*#__PURE__*/
    React.createElement("section", {
      index: index + 1,
      className: `ubc-accordion-tabs__tabs-panel js-tabs-panel${index === 0 ? ' active' : ''}`,
      id: `section${index + 1}`,
      role: "tabpanel",
      "aria-labelledby": `tab${index + 1}`
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "ubc-accordion-tabs__accordion-trigger js-accordeon-trigger",
      "aria-controls": `section${index + 1}`,
      tabIndex: "0"
    }, title,
    /*#__PURE__*/
    React.createElement("div", {
      className: "ubc-accordion-tabs__accordion-trigger-icon"
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "label--open"
    }, "Open"),
    /*#__PURE__*/
    React.createElement("span", {
      className: "label--close"
    }, "Close"),
    /*#__PURE__*/
    React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 20 20"
    },
    /*#__PURE__*/
    React.createElement("rect", {
      className: "vert",
      height: "18",
      width: "2",
      fill: "currentColor",
      y: "1",
      x: "9"
    }),
    /*#__PURE__*/
    React.createElement("rect", {
      height: "2",
      width: "18",
      fill: "currentColor",
      y: "9",
      x: "1"
    })))),
    /*#__PURE__*/
    React.createElement("div", {
      className: "content"
    },
    /*#__PURE__*/
    React.createElement(InnerBlocks.Content, null)))
  );
});

/***/ }),

/***/ "./src/blocks/tabs/attributes.js":
/*!***************************************!*\
  !*** ./src/blocks/tabs/attributes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
const attributes = {
  tabTitles: {
    type: 'array',
    default: ['Tab1', 'Tab2']
  },
  initialTabSelected: {
    type: 'number',
    default: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/tabs/block.js":
/*!**********************************!*\
  !*** ./src/blocks/tabs/block.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/tabs/save.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/tabs', {
  title: __('UBC Tabs Block', 'ubc-tabs'),
  description: __('Add accessible tabs of content which convert to accordions on smaller screens.', 'ubc-tabs'),
  icon: () => {
    return (
      /*#__PURE__*/
      React.createElement("svg", {
        enableBackground: "new 0 0 32 32",
        height: "32px",
        id: "svg2",
        version: "1.1",
        viewBox: "0 0 32 32",
        width: "32px",
        xmlSpace: "preserve",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /*#__PURE__*/
      React.createElement("g", {
        id: "background"
      },
      /*#__PURE__*/
      React.createElement("rect", {
        fill: "none",
        height: "32",
        width: "32",
        x: "0"
      })),
      /*#__PURE__*/
      React.createElement("g", {
        id: "tab"
      },
      /*#__PURE__*/
      React.createElement("path", {
        d: "M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z"
      })))
    );
  },
  keywords: [__('tabs'), __('ubc-tabs')],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/tabs/context.js":
/*!************************************!*\
  !*** ./src/blocks/tabs/context.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createContext = wp.element.createContext;
const TabsContext = createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TabsContext);

/***/ }),

/***/ "./src/blocks/tabs/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/blocks/tabs/context.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * BLOCK: Tabs
 */

const InspectorControls = wp.blockEditor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup;
const _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      InnerBlocks = _wp$blockEditor.InnerBlocks;
const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const useState = wp.element.useState;
/**
 * This component create editor UI for tabs block.
 * A tabs block contains two parts
 * 	- Tab title, an array of tab titles associated with attribute 'tabTitles'
 *  - Tab content, an array of child tab block rendered by innderblock template.
 * Tab titles and Tab content are complete seprate. For example, action such as move tab position or delete a tab will envolve actions for both tab title and tab content.
 * @param {object} props block props.
 */

const Edit = props => {
  const attributes = props.attributes,
        setAttributes = props.setAttributes,
        removeBlock = props.removeBlock,
        onMoveUp = props.onMoveUp,
        onMoveDown = props.onMoveDown,
        tabs = props.tabs,
        isSelected = props.isSelected,
        rootId = props.rootId,
        insertBlock = props.insertBlock;
  const tabTitles = attributes.tabTitles,
        initialTabSelected = attributes.initialTabSelected,
        className = attributes.className; // Keep current selected tab in editor as a state defaults to initialSelected tab attribute.

  const _useState = useState(initialTabSelected ? initialTabSelected : 0),
        _useState2 = _slicedToArray(_useState, 2),
        currentTabSelected = _useState2[0],
        setCurrentTabSelected = _useState2[1];

  const allowedBlocks = ['ubc/tab'];
  /**
   * Render innerblocks { tab blocks } based on the length of tab titles array.
   */

  const getInnerBlockTemplates = () => {
    return tabTitles.map(function (title, key) {
      return ['ubc/tab', {
        index: key
      }];
    });
  };
  /**
   * Abstracted setter for tab title based on index in the tab titles array
   *
   * @param {number} key index of the tab in the array.
   * @param {string} text new title to be updated.
   */


  const updateSingleTitle = (key, text) => {
    const tabTitlesClone = [...tabTitles];
    tabTitlesClone[key] = text;
    setAttributes({
      tabTitles: tabTitlesClone
    });
  };
  /**
   * Check if it is the first tab in the array.
   *
   * @param {number} index index of the tab in the array
   * @return {boolean} if index is the first in the array.
   */


  const isFirst = index => {
    return index === 0;
  };
  /**
   * Check if it is the last tab in the array.
   *
   * @param {number} index index of the tab in the array
   * @return {boolean} if index is the last in the array.
   */


  const isLast = index => {
    return index === tabTitles.length - 1;
  };
  /**
   * Render Toolbar buttons including re-order, remove, add, etc for each tab
   *
   * @param {number} key index of the tab.
   */


  const renderToolbar = key => {
    return currentTabSelected === key ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "ubc-accordion-tabs__tab-toolbar"
    },
    /*#__PURE__*/
    React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // move tab title up inside tab titles array

        const newTabTitles = [...tabTitles];
        var _ref = [newTabTitles[key], newTabTitles[key - 1]];
        newTabTitles[key - 1] = _ref[0];
        newTabTitles[key] = _ref[1];
        setAttributes({
          tabTitles: newTabTitles
        }); // Move the actual tab block up

        onMoveUp(key); // Move focus as well to make sure action does not cause different tab to be selected.

        setCurrentTabSelected(key - 1);
      },
      disabled: isFirst(key) || tabTitles.length <= 1
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "dashicons dashicons-arrow-left-alt2"
    })),
    /*#__PURE__*/
    React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // Move tab title down inside tab titles array

        const newTabTitles = [...tabTitles];
        var _ref2 = [newTabTitles[key + 1], newTabTitles[key]];
        newTabTitles[key] = _ref2[0];
        newTabTitles[key + 1] = _ref2[1];
        setAttributes({
          tabTitles: newTabTitles
        }); // Move the actual tab block down

        onMoveDown(key); // Move focus as well to make sure action does not cause different tab to be selected.

        setCurrentTabSelected(key + 1);
      },
      disabled: isLast(key) || tabTitles.length <= 1
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "dashicons dashicons-arrow-right-alt2"
    })),
    /*#__PURE__*/
    React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // Remove tab title from tab titles array

        const remainingTabs = tabTitles.filter((title, index) => key !== index);
        setAttributes({
          tabTitles: remainingTabs
        }); // Remove the actual tab block

        removeBlock(key); // Set focus to the first tab of the remaining tabs

        if (remainingTabs.length !== 0) {
          setCurrentTabSelected(0);
        }
      }
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "dashicons dashicons-trash"
    })),
    /*#__PURE__*/
    React.createElement(Button, {
      onClick:
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(function* (event) {
          event.preventDefault(); // Create the tab block and insert at the end of the root block.

          yield insertBlock(wp.blocks.createBlock('ubc/tab', {
            index: tabs.length
          }), tabs.length, rootId); // Add a new title into the title array.

          setAttributes({
            tabTitles: [...tabTitles, 'Tab']
          });
        });

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "dashicons dashicons-plus",
      style: {
        marginTop: '3px'
      }
    }))) : null;
  };

  return (
    /*#__PURE__*/
    React.createElement("section", {
      className: `ubc-accordion-tabs ${className ? className : ''}`
    },
    /*#__PURE__*/
    React.createElement("ul", {
      className: "ubc-accordion-tabs__tab-list",
      role: "tablist"
    }, tabTitles.map((singleTitle, key) => {
      return (
        /*#__PURE__*/
        React.createElement("li", {
          role: "presentation",
          key: key
        }, isSelected ? renderToolbar(key) : null,
        /*#__PURE__*/
        React.createElement("button", {
          role: "tab",
          id: `tab${key}`,
          "aria-controls": `section${key} `,
          "aria-selected": key === currentTabSelected,
          href: `#section${key + 1}`,
          className: `ubc-accordion-tabs__button${key === currentTabSelected ? ' is-selected' : ''}`,
          onClick: event => {
            event.preventDefault();
            setCurrentTabSelected(key);
          }
        },
        /*#__PURE__*/
        React.createElement(RichText, {
          value: singleTitle,
          onChange: newContent => updateSingleTitle(key, newContent)
        })))
      );
    })),
    /*#__PURE__*/
    React.createElement(_context__WEBPACK_IMPORTED_MODULE_0__["default"].Provider, {
      value: {
        currentTabSelected,
        tabs,
        tabTitles
      }
    },
    /*#__PURE__*/
    React.createElement(InnerBlocks, {
      template: getInnerBlockTemplates(),
      templateLock: false,
      allowedBlocks: allowedBlocks,
      renderAppender: false
    })),
    /*#__PURE__*/
    React.createElement(InspectorControls, null,
    /*#__PURE__*/
    React.createElement(PanelBody, {
      title: "Settings",
      initialOpen: true
    },
    /*#__PURE__*/
    React.createElement(PanelRow, null, "Initial tab selected"),
    /*#__PURE__*/
    React.createElement(ButtonGroup, {
      style: {
        marginTop: '10px'
      }
    }, tabTitles.map((tabTitle, index) => {
      return (
        /*#__PURE__*/
        React.createElement(Button, {
          onClick: event => {
            event.preventDefault();
            setAttributes({
              initialTabSelected: index
            });
          },
          key: index,
          isPrimary: initialTabSelected === index,
          isDefault: initialTabSelected !== index
        }, tabTitle)
      );
    })))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect((select, ownProps) => {
  const _select = select('core/block-editor'),
        getBlockOrder = _select.getBlockOrder;

  return {
    // Get an array of child blocks( tab blocks ) client ID in order.
    tabs: getBlockOrder(ownProps.clientId),
    rootId: ownProps.clientId
  };
}), withDispatch((dispatch, {
  tabs,
  clientId
}) => {
  const _dispatch = dispatch('core/block-editor'),
        removeBlock = _dispatch.removeBlock,
        moveBlocksDown = _dispatch.moveBlocksDown,
        moveBlocksUp = _dispatch.moveBlocksUp,
        insertBlock = _dispatch.insertBlock;

  return {
    /**
     * Move specific tab block down, switch position with next tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    onMoveDown(index) {
      moveBlocksDown([tabs[index]], clientId);
    },

    /**
     * Move specific tab block up, switch position with previous tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    onMoveUp(index) {
      moveBlocksUp([tabs[index]], clientId);
    },

    /**
     * Remove specific tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    removeBlock(index) {
      removeBlock(tabs[index]);
    },

    insertBlock
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/tabs/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/tabs/save.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/blocks/helper.js");
/**
 * BLOCK: Call To Action
 */

const InnerBlocks = wp.blockEditor.InnerBlocks;

const Save = props => {
  const attributes = props.attributes;
  const tabTitles = attributes.tabTitles,
        initialTabSelected = attributes.initialTabSelected,
        className = attributes.className;
  return (
    /*#__PURE__*/
    React.createElement("section", {
      className: `ubc-accordion-tabs ${className ? className : ''}`,
      "data-selected-tab": initialTabSelected
    },
    /*#__PURE__*/
    React.createElement("ul", {
      className: "ubc-accordion-tabs__tab-list",
      role: "tablist"
    }, tabTitles.map((singleTitle, key) => {
      const id = singleTitle.toLowerCase().replace(/ /g, '-');
      return (
        /*#__PURE__*/
        React.createElement("li", {
          id: id,
          role: "presentation",
          key: key
        },
        /*#__PURE__*/
        React.createElement("a", {
          role: "tab",
          id: Object(_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(singleTitle),
          "aria-controls": `section${key + 1} `,
          "aria-selected": key === initialTabSelected,
          className: "ubc-accordion-tabs__tabs-trigger js-tabs-trigger",
          href: `#section${key + 1}`
        }, singleTitle))
      );
    })),
    /*#__PURE__*/
    React.createElement(InnerBlocks.Content, null))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ })

/******/ });
//# sourceMappingURL=block.js.map