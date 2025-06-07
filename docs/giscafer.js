/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#map,\nbody,\nhtml {\n    height: 100%\n}\n\n#banner,\n#map {\n    width: 100%;\n    background-color: #fff\n}\n\n#legend,\n#map {\n    position: absolute\n}\n\n#banner,\n#legend {\n    background-repeat: no-repeat\n}\n\nbody,\nhtml {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden\n}\n\n.fontfix {\n    font-family: Arial, \"\\5FAE\\8F6F\\96C5\\9ED1\", \"Hiragino Sans GB\", \"\\65B0\\5B8B\\4F53\", sans-serif;\n    -webkit-font-smoothing: antialiased\n}\n\n.no-select {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n#banner {\n    height: 0;\n    background-position: 0 0\n}\n\n#mapcontainer {\n    position: relative;\n    width: 100%;\n    height: 100%\n}\n\n.leaflet-container {\n    background: #fff\n}\n\n.pictures {\n    margin: 0;\n    margin-top: 10px;\n    padding: 0;\n    list-style: none;\n    max-width: 30rem;\n    display: flex;\n    justify-content: start;\n    white-space: pre-wrap;\n    flex-wrap: wrap;\n    min-width: 262px;\n}\n\n.pictures::after {\n    display: table;\n    content: ' ';\n    clear: both;\n}\n\n.pictures>li {\n    margin: 0 5px 2px 0;\n    border: 1px solid transparent;\n    overflow: hidden;\n}\n\n.pictures>li>img {\n    width: 100%;\n    cursor: -webkit-zoom-in;\n    cursor: zoom-in;\n}\n\n.viewer-download {\n    color: #fff;\n    font-family: FontAwesome;\n    font-size: .75rem;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.viewer-download::before {\n    content: \"\\F019\";\n}\n\nul.pictures li img {\n    width: 80px;\n    height: 80px;\n}\n\n.leaflet-popup-content {\n    width: auto !important;\n}", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

L.CanvasLayer = L.Class.extend({
    includes: [L.Mixin.Events],
    options: {
        fill: !0,
        fillColor: "rgba(51, 153, 255, 0.25)",
        stroke: !0,
        color: "rgba(51, 153, 255, 0.5)",
        weight: 1,
        clickable: !0,
        zoomAnimation: !0,
        redrawWhenMove: !1
    },
    initialize: function (t) {
        L.setOptions(this, t)
    },
    onAdd: function (t) {
        this._map = t,
            this._initCanvas(),
            this._initEvents(),
            t.getPanes().overlayPane.appendChild(this._canvas),
            this.options.redrawWhenMove && t.on("move", this.redraw, this),
            t.on("moveend", this.redraw, this),
            this._draw()
    },
    onRemove: function (t) {
        t.getPanes().overlayPane.removeChild(this._canvas),
            t.off("moveend", this.redraw, this),
            this.options.redrawWhenMove && t.off("move", this.redraw, this),
            this.options.clickable && t.off({
                mousemove: this._mouseMove,
                click: this._click
            }, this),
            this.options.zoomAnimation && L.Browser.any3d && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoom
            }, this)
    },
    addTo: function (t) {
        return t.addLayer(this),
            this
    },
    setData: function (t) {
        this._data = t,
            this.redraw()
    },
    redraw: function () {
        this._draw()
    },
    _draw: function () {
        this._map && this._canvas && (this._updateCanvasViewport(),
            this._update())
    },
    _update: function () { },
    _initCanvas: function () {
        this._canvas = L.DomUtil.create("canvas"),
            this._canvas.style.position = "absolute",
            this.options.zoomAnimation && L.Browser.any3d ? (this._canvas.className = "leaflet-zoom-animated",
                this._map.on("zoomanim", this._animateZoom, this),
                this._map.on("zoomend", this._endZoom, this)) : this._canvas.className = "leaflet-zoom-hide"
    },
    _initEvents: function () {
        this.options.clickable && (this._map.on("mousemove", this._mouseMove, this),
            this._map.on("click", this._click, this))
    },
    _mouseMove: function (t) {
        if (this._map && !this._zooming) {
            var i = this._getFeature(t.layerPoint);
            i ? (this._canvas.style.cursor = "pointer",
                this._mouseInside = !0,
                this.fire("mouseover", t)) : this._mouseInside && (this._canvas.style.cursor = "",
                    this._mouseInside = !1,
                    this.fire("mouseout", t))
        }
    },
    _click: function (t) {
        if (!this._map.dragging || !this._map.dragging.moved()) {
            var i = this._getFeature(t.layerPoint);
            i && (t.feature = i,
                this.fire("click", t))
        }
    },
    _updateCanvasViewport: function () {
        this._zooming || (this._updateViewport(),
            L.DomUtil.setPosition(this._canvas, this._viewport.min))
    },
    _updateViewport: function () {
        var t = this._map.getSize()
            , i = L.DomUtil.getPosition(this._map._mapPane)
            , e = i.multiplyBy(-1)._round()
            , a = e.add(t.multiplyBy(1)._round());
        this._canvas.width = t.x,
            this._canvas.height = t.y,
            this._viewport = new L.Bounds(e, a)
    },
    _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom)
            , e = this._map._getCenterOffset(t.center)._multiplyBy(-i)._add(this._viewport.min);
        this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(e) + " scale(" + i + ") ",
            this._zooming = !0
    },
    _endZoom: function () {
        this._zooming = !1
    },
    _getFeature: function (t) {
        for (var i, e = this._projs || [], a = 0; a < e.length; a++)
            if (i = e[a],
                i && this._containsPoint(i, t))
                return this._data.features[a];
        return null
    },
    _controlPoint: function (t, i) {
        var e = (t.x + i.x) / 2
            , a = (t.y + i.y) / 2
            , n = Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - t.y, 2))
            , o = n / 5;
        if (t.x === i.x)
            return t.y > i.y ? [e - o, a] : [e + o, a];
        if (t.y === i.y)
            return t.x > i.x ? {
                x: e,
                y: a + o
            } : {
                    x: e,
                    y: a - o
                };
        var s = e + (i.y - t.y) / 5
            , r = a + (e - s) * (t.x - e) / (t.y - a);
        return {
            x: s,
            y: r
        }
    },
    _latLng2Screen: function (t, i) {
        var e = this._map.latLngToLayerPoint(new L.latLng(t, i));
        return this._map.layerPointToContainerPoint(e)._round()
    }
}),
    L.CanvasLayer.Flow = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            asyn: !1
        },
        _beziers: [],
        _controls: [],
        _flowend: !1,
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        setData: function (t) {
            this.stop(),
                this._data = t,
                this._updateBeziers(),
                this.options.asyn ? this._animateAsyn() : this._animate()
        },
        _update: function () {
            if (this._data) {
                if (this._updateBeziers(),
                    !this._flowend)
                    return void (this.options.asyn ? this._animateAsyn() : this._animate());
                var t, i, e = this._map.getSize(), a = this._canvas.getContext("2d"), n = this._data.geo;
                this.options.reverse ? (t = this._data.to,
                    i = this._data.from) : (t = this._data.from,
                        i = this._data.to);
                var o, s, r, h, l = this.options, _ = n[t], c = this._latLng2Screen(_[1], _[0]);
                a.clearRect(0, 0, e.x, e.y);
                for (var d = 0; d < i.length; d++)
                    o = n[i[d]],
                        s = this._latLng2Screen(o[1], o[0]),
                        r = this._controls[d],
                        h = this._beziers[d],
                        a.lineWidth = 0,
                        // a.lineWidth = l.weight + 4,
                        a.strokeStyle = "rgba(255, 255, 255, 0)",//隐藏线
                        // a.strokeStyle = "rgba(255, 255, 255, 0.15)",
                        this._curve(a, c, r, s),
                        a.lineWidth = 0,
                        a.strokeStyle = this._color(d, 0),//隐藏线
                        // a.lineWidth = l.weight,
                        // a.strokeStyle = this._color(d, .8),
                        this._curve(a, c, r, s),
                        a.fillStyle = this._color(d, 0),// 隐藏箭头
                        // a.fillStyle = this._color(d, 1),
                        this._arrow(a, h[h.length - 1], h[h.length - 2])
            }
        },
        _animate: function () {
            if (this._data) {
                this._animid && (L.Util.cancelAnimFrame(this._animid),
                    this._animid = null);
                var t, i = this._map.getSize(), e = this._canvas.getContext("2d"), a = this._beziers, n = this.options, o = this, s = 0, r = 40, h = function () {
                    if (++s,
                        r >= s) {
                        e.clearRect(0, 0, i.x, i.y);
                        for (var l = 0; l < a.length; l++)
                            t = a[l].slice(0, s),
                                e.lineWidth = n.weight + 4,
                                e.strokeStyle = "rgba(255, 255, 255,0)",// 初始化线隐藏
                                // e.strokeStyle = "rgba(255, 255, 255, 0.15)",
                                o._line(e, t),
                                e.lineWidth = n.weight,
                                e.strokeStyle = o._color(l,0),// 初始化线隐藏
                                // e.strokeStyle = o._color(l, .8),// 初始化线隐藏
                                o._line(e, t),
                                s > 1 && (e.fillStyle = o._color(l, 0),
                                // s > 1 && (e.fillStyle = o._color(l, 1),
                                    o._arrow(e, t[t.length - 1], t[t.length - 2]));
                        o._animid = L.Util.requestAnimFrame(h, o)
                    } else
                        L.Util.cancelAnimFrame(o._animid),
                            o._flowend = !0,
                            o._update(),
                            o.fire("flowend", {
                                data: o._data
                            })
                };
                this._animid = L.Util.requestAnimFrame(h, this)
            }
        },
        _animateAsyn: function () {
            if (this._data) {
                this._animid && (L.Util.cancelAnimFrame(this._animid),
                    this._animid = null);
                var t, i, e, a, n, o = this._map.getSize(), s = this._canvas.getContext("2d"), r = this._beziers, h = this.options, l = this, _ = 0, c = 0;
                for (t = 0; t < r.length; t++)
                    c += r[t].length;
                var d = function () {
                    if (++_,
                        c >= _) {
                        for (s.clearRect(0, 0, o.x, o.y),
                            e = 0,
                            a = _,
                            t = 0; t < r.length && !((a -= r[t].length) <= 0); t++)
                            ++e;
                        for (a += r[e].length,
                            i = 0; e > i; i++)
                            n = r[i],
                                s.lineWidth = h.weight + 4,
                                s.strokeStyle = "rgba(255, 255, 255, 0.15)",
                                l._line(s, n),
                                s.lineWidth = h.weight,
                                s.strokeStyle = l._color(i, .8),
                                l._line(s, n),
                                s.fillStyle = l._color(i, 1),
                                l._arrow(s, n[n.length - 1], n[n.length - 2]);
                        a > 1 && (n = r[i].slice(0, a),
                            s.lineWidth = h.weight + 4,
                            s.strokeStyle = "rgba(255, 255, 255, 0.15)",
                            l._line(s, n),
                            s.lineWidth = h.weight,
                            s.strokeStyle = l._color(i, .8),
                            l._line(s, n),
                            s.fillStyle = l._color(i, 1),
                            l._arrow(s, n[n.length - 1], n[n.length - 2])),
                            l._animid = L.Util.requestAnimFrame(d, l)
                    } else
                        L.Util.cancelAnimFrame(l._animid),
                            l._flowend = !0,
                            l._update(),
                            l.fire("flowend", {
                                data: l._data
                            })
                };
                this._animid = L.Util.requestAnimFrame(d, this)
            }
        },
        _curve: function (t, i, e, a) {
            t.beginPath(),
                t.moveTo(i.x, i.y),
                t.quadraticCurveTo(e.x, e.y, a.x, a.y),
                t.stroke(),
                t.closePath()
        },
        _line: function (t, i) {
            if (i && !(i.length < 1)) {
                t.beginPath(),
                    t.moveTo(i[0][0], i[0][1]);
                for (var e = 1; e < i.length; e++)
                    t.lineTo(i[e][0], i[e][1]);
                t.stroke(),
                    t.closePath()
            }
        },
        _arrow: function (t, i, e) {
            var a = this._angle(i, e)
                , n = this._arrowPoints(i);
            t.save(),
                t.beginPath(),
                t.translate(i[0], i[1]),
                t.moveTo(0, 0),
                t.rotate(a);
            for (var o = 0; o < n.length; o++)
                t.lineTo(n[o].x - i[0], n[o].y - i[1]);
            t.fill(),
                t.restore()
        },
        _angle: function (t, i) {
            return t[0] === i[0] ? t[1] > i[1] ? Math.PI : 0 : t[1] === i[1] ? t[0] < i[0] ? -Math.PI / 2 : Math.PI / 2 : t[0] < i[0] ? t[1] < i[1] ? -Math.atan((i[0] - t[0]) / (i[1] - t[1])) : -Math.PI / 2 - Math.atan((i[1] - t[1]) / (t[0] - i[0])) : t[1] < i[1] ? Math.atan((t[0] - i[0]) / (i[1] - t[1])) : Math.PI / 2 + Math.atan((t[1] - i[1]) / (t[0] - i[0]))
        },
        _arrowPoints: function (t) {
            var i = 8
                , e = {}
                , a = {}
                , n = {}
                , o = Math.sqrt(3);
            return a.x = t[0],
                a.y = t[1] + i,
                e.x = Math.round(t[0] - i * o / 2),
                n.x = Math.round(t[0] + i * o / 2),
                e.y = n.y = t[1] + 3 * i / 2,
                [e, a, n]
        },
        _updateBeziers: function () {
            this._beziers = [],
                this._controls = [];
            var t, i, e = this._data.geo;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            for (var a, n, o, s, r = e[t], h = this._latLng2Screen(r[1], r[0]), l = 0; l < i.length; l++)
                a = e[i[l]],
                    n = this._latLng2Screen(a[1], a[0]),
                    this.options.reverse ? (o = this._controlPoint(n, h),
                        s = this._bezier(n, o, h)) : (o = this._controlPoint(h, n),
                            s = this._bezier(h, o, n)),
                    this._beziers.push(s),
                    this._controls.push(o)
        },
        _bezier: function (t, i, e) {
            for (var a, n, o, s = [], r = .025, h = 0; 1 >= h; h += r)
                a = Math.pow(1 - h, 2) * t.x + 2 * h * (1 - h) * i.x + Math.pow(h, 2) * e.x,
                    n = Math.pow(1 - h, 2) * t.y + 2 * h * (1 - h) * i.y + Math.pow(h, 2) * e.y,
                    s.length > 0 && (o = s[s.length - 1],
                        o[0] === a && o[1] === n) || s.push([a, n]);
            return o = s[s.length - 1],
                (o[0] !== e.x || o[1] !== e.y) && s.push([e.x, e.y]),
                s
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y),
                this._flowend = !1
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.flow = function (t) {
        return new L.CanvasLayer.Flow(t)
    };
    /**移动的圆形 */
    L.CanvasLayer.MovingCircle = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            redrawWhenMove: !0
        },
        _beziers: [],
        _controls: [],
        _indexes: [],
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        setData: function (t) {
            this._data = t,
                this._update()
        },
        _update: function () {
            this._data && (this._updateBeziers(),
                this._move())
        },
        _move: function () {
            this.stop(),
                this._reset();
            var t, i, e, a, n = this._map.getSize(), o = this._canvas.getContext("2d"), s = this._beziers, r = this;
            t = this.options.reverse ? this._data.from : this._data.to;
            var h = function () {
                o.clearRect(0, 0, n.x, n.y);
                for (var l = 0; l < t.length; l++)
                    r._indexes[l] === s[l].length && (r._indexes[l] = 1),
                        i = s[l].slice(0, r._indexes[l]),
                        o.lineWidth = 0,
                        // 隐藏线
                        // o.lineWidth = 6,
                        // o.strokeStyle = r._color(l, 0),
                        o.strokeStyle = r._color(l, .15),
                        r._line(o, i),
                        e = s[l][r._indexes[l]],
                        a = s[l][r._indexes[l] - 1],
                        r._flare(o, e, a, l),
                        ++r._indexes[l];
                r._animid = L.Util.requestAnimFrame(h, r)
            };
            this._animid = L.Util.requestAnimFrame(h, this)
        },
        _line: function (t, i) {
            if (i && !(i.length < 1)) {
                t.beginPath(),
                    t.moveTo(i[0][0], i[0][1]);
                for (var e = 1; e < i.length; e++)
                    t.lineTo(i[e][0], i[e][1]);
                t.stroke(),
                    t.closePath()
            }
        },
        _flare: function (t, i, e, a) {
            var n = this._angle(i, e)
                , o = this._flarePoints(i);
            t.save(),
                // 绘制线
                t.beginPath(),
                t.translate(i[0], i[1]),
                t.moveTo(0, 0),
                t.rotate(n),
                t.moveTo(o[0].x - i[0], o[0].y - i[1]),
                t.lineTo(o[1].x - i[0], o[1].y - i[1]),
                t.lineTo(o[2].x - i[0], o[2].y - i[1]),
                t.fillStyle = "rgba(0, 255, 255, 0.5)",
                t.fill(),
                // 绘制弧线
                t.beginPath(),
                t.arc(0, 0, 2, 0, Math.PI, !0), // 圆形弧度
                t.fill(),
                t.restore()
        },
        _flarePoints: function (t) {
            var i = 2
                , e = 20 // 线长
                , a = {}
                , n = {}
                , o = {}
                , s = {};
            return a.x = t[0] - i,
                o.x = t[0] + i,
                n.x = s.x = t[0],
                a.y = o.y = t[1],
                n.y = t[1] + e,
                s.y = t[1] - 2 * i,
                [a, n, o, s]
        },
        _angle: function (t, i) {
            return t[0] === i[0] ? t[1] > i[1] ? Math.PI : 0 : t[1] === i[1] ? t[0] < i[0] ? -Math.PI / 2 : Math.PI / 2 : t[0] < i[0] ? t[1] < i[1] ? -Math.atan((i[0] - t[0]) / (i[1] - t[1])) : -Math.PI / 2 - Math.atan((i[1] - t[1]) / (t[0] - i[0])) : t[1] < i[1] ? Math.atan((t[0] - i[0]) / (i[1] - t[1])) : Math.PI / 2 + Math.atan((t[1] - i[1]) / (t[0] - i[0]))
        },
        _updateBeziers: function () {
            this._beziers = [],
                this._controls = [];
            var t, i, e = this._data.geo;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            for (var a, n, o, s, r = e[t], h = this._latLng2Screen(r[1], r[0]), l = 0; l < i.length; l++)
                a = e[i[l]],
                    n = this._latLng2Screen(a[1], a[0]),
                    this.options.reverse ? (o = this._controlPoint(n, h),
                        s = this._bezier(n, o, h)) : (o = this._controlPoint(h, n),
                            s = this._bezier(h, o, n)),
                    this._beziers.push(s),
                    this._controls.push(o)
        },
        _bezier: function (t, i, e) {
            for (var a, n, o, s = [], r = .75 / Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), h = 0; 1 >= h; h += r)
                a = Math.pow(1 - h, 2) * t.x + 2 * h * (1 - h) * i.x + Math.pow(h, 2) * e.x,
                    n = Math.pow(1 - h, 2) * t.y + 2 * h * (1 - h) * i.y + Math.pow(h, 2) * e.y,
                    s.length > 0 && (o = s[s.length - 1],
                        o[0] === a && o[1] === n) || s.push([a, n]);
            return o = s[s.length - 1],
                (o[0] !== e.x || o[1] !== e.y) && s.push([e.x, e.y]),
                s
        },
        _gradient: function (t, i, e, a, n) {
            var o = t.createRadialGradient(i[0], i[1], 0, i[0], i[1], e);
            return o.addColorStop(0, "rgba(255, 255, 255, 0.9)"),
                o.addColorStop(.75, "rgba(255, 255, 255, 0.75)"),
                o.addColorStop(1, this._color(a, n)),
                o
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        _reset: function () {
            var t;
            t = this.options.reverse ? this._data.from : this._data.to;
            for (var i = 0; i < t.length; i++)
                this._indexes[i] = 1
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y)
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.movingCircle = function (t) {
        return new L.CanvasLayer.MovingCircle(t)
    };
    /**闪烁圆圈效果 */
    L.CanvasLayer.AnimateCircle = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            redrawWhenMove: !0
        },
        _rs: [],
        _first: [],
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        _update: function () {
            this._data && this._animate()
        },
        _animate: function () {
            this.stop(),
                this._reset();
            var t, i, e, a, n, o, s, r = this._map.getSize(), h = this._canvas.getContext("2d"), l = this._data.geo, _ = this, c = .2, d = 5, m = !1;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            var u = function () {
                e = l[t],
                    a = _._latLng2Screen(e[1], e[0]),
                    m ? 5 >= d ? m = !1 : d -= .1 : 10 > d ? d += .1 : m = !0,
                    s = h.createRadialGradient(a.x, a.y, 0, a.x, a.y, d),
                    s.addColorStop(0, "rgba(255, 51, 51, 1)"),
                    s.addColorStop(.85, "rgba(255, 51, 51, 0.75)"),
                    s.addColorStop(1, "rgba(255, 255, 255, 0.25)"),
                    h.clearRect(0, 0, r.x, r.y),
                    h.fillStyle = s,
                    h.beginPath(),
                    h.arc(a.x, a.y, d, 0, 2 * Math.PI),
                    h.fill();
                for (var f = 0; f < i.length; f++)
                    e = l[i[f]],
                        a = _._latLng2Screen(e[1], e[0]),
                        o = _._radius(i[f]),
                        _._rs[f] < o ? _._rs[f] += c : (_._rs[f] = 0,
                            _._first[f] = !1),
                        n = _._rs[f],
                        15 > n && !_._first[f] && (s = _._gradient(h, a, o - n * c, f, .25 - .01 * n, .8 - .05 * n),
                            _._circle(h, s, a, o - n * c)),
                        s = _._gradient(h, a, n, f, .25, .8),
                        _._circle(h, s, a, n);
                _._animid = L.Util.requestAnimFrame(u, _)
            };
            this._animid = L.Util.requestAnimFrame(u, this)
        },
         // 绘制圆形
        _circle: function (t, i, e, a) {
            t.fillStyle = i,
                t.beginPath(),
                t.arc(e.x, e.y, a, 0, 2 * Math.PI),
                t.fill()
        },
        // 圆形动画渐变
        _gradient: function (t, i, e, a, n, o) {
            var s = t.createRadialGradient(i.x, i.y, 0, i.x, i.y, e);
            return s.addColorStop(0, "rgba(0, 0, 0, 0)"),
                s.addColorStop(.25, "rgba(0, 0, 0, 0)"),
                s.addColorStop(.85, this._color(a, n)),
                s.addColorStop(1, this._color(a, o)),
                s
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        _radius: function (t) {
            var i = this._data.count
                , e = 10
                , a = 40;
            return e + Math.round((a - e) * (i[t] - i.min) / (i.max - i.min))
        },
        _reset: function () {
            var t;
            t = this.options.reverse ? this._data.from : this._data.to;
            for (var i = 0; i < t.length; i++)
                this._rs[i] = 0,
                    this._first[i] = !0
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y)
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.animateCircle = function (t) {
        return new L.CanvasLayer.AnimateCircle(t)
    }
    ,
    L.TileLayer.EsriTileLayer = L.TileLayer.extend({
        initialize: function (t, i) {
            t += "/tile/{z}/{y}/{x}",
                L.TileLayer.prototype.initialize.call(this, t, i)
        }
    }),
    L.tileLayer.esriTileLayer = function (t, i) {
        return new L.TileLayer.EsriTileLayer(t, i)
    };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

﻿var centerPoint = [35.63452, 109.132287];
var _cityData = [];
var geoq = {
  colors: ['#e73336', '#dbe900', '#00e92f', '#00e6ff', '#0050ff'].reverse(),
  init: function () {
    this._map();
    this._data2();
    // this._visit();
  },
  _map: function () {
    this.map = L.map('map', {
      center: centerPoint,
      zoom: 5,
      minZoom: 1,
      maxZoom: 16,
      attributionControl: !1,
    });
    // .setView([1.05463, 87.85938], 3);
    var darkUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
    L.tileLayer(darkUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        opacity: 1,
        zIndex: 0,
      })
      .addTo(this.map);
    var e = L.control.attribution();
    e.addAttribution('那些我去过的城市');
    e.addAttribution(
      '<a href="http://giscafer.com" target="_blank">@giscafer</a>',
    );
    e.addTo(this.map);
    window.travelMap = this.map;
  },
  _data: function () {
    var t = this.util,
      e = this;
    t.getText(
      'data/data.txt',
      function (n) {
        var o = t.csv(n),
          r = e._parse(o);
        e._points(r), e._flow(r);
      },
      function (t) {
        alert('数据下载失败!');
      },
    );
  },
  _data2: function () {
    var t = this.util,
      e = this;
    t.getText(
      'data/data.json?v=' + new Date().getTime(),
      function (o) {
        o = JSON.parse(o);
        _cityData = o.rows;
        var r = e._parse(o);
        e._points(r), e._flow(r);
      },
      function (t) {
        alert('数据下载失败!');
      },
    );
  },
  _parse: function (t) {
    for (
      var e,
        n,
        o,
        r,
        i,
        a = t.rows,
        s = {
          from: '中国',
          to: [],
          geo: {},
          count: {},
          colors: [],
          countries: [],
        },
        l = -(1 / 0),
        c = 1 / 0,
        u = a.length,
        f = 50,
        p = 0;
      u > p;
      p++
    )
      (e = a[p]),
        (n = e['city']),
        (i = +e['times']),
        (o = +e.longitude),
        (r = +e.latitude),
        f > p &&
          (c > i && (c = i), i > l && (l = i), s.to.push(n), (s.count[n] = i)),
        (s.geo[n] = [o, r]),
        s.countries.push(n);
    return (
      (s.geo[s.from] = centerPoint),
      (s.colors = this.util.gradient(this.colors, f)),
      (s.count.min = c),
      (s.count.max = l),
      s
    );
  },
  _points: function (t) {
    for (var e, n, o = t.countries, r = 0, i = o.length; i > r; r++) {
      e = t.geo[o[r]];
      var city = getCityData(o[r]);
      var urls = city.imgs || [];
      var picHtml = generatePicHtml(city['city'], urls);
      n = L.latLng(e[1], e[0]);
      L.circleMarker(n, {
        color: '#ffc32c',
        opacity: 0,
        weight: 1,
        fillColor: '#ffc32c',
        fillOpacity: 1,
      })
        .setRadius(3)
        .addTo(this.map);
      var myIcon = L.icon({
        iconUrl: './lib/leaflet-0.7.3/images/marker-icon.png',
        iconAnchor: [20, 20],
      });
      // 透明marker作为点击事件
      var marker = L.marker(n, {
        color: '#ffc32c',
        opacity: 0,
        weight: 1,
        fillColor: '#ffc32c',
        fillOpacity: 1,
        icon: myIcon,
      })
        .addTo(this.map)
        // 点击气泡弹窗
        .bindPopup(
          '<h3>' +
            city['city'] +
            '</h3>' +
            city['date'] +
            '<br>' +
            city['remark'] +
            '<br>' +
            picHtml,
        );
      /* marker.on('click', function (e) {
                console.log(e);
            }) */
    }
  },
  _flow: function (t) {
    var e = new L.CanvasLayer.flow().addTo(this.map),
      n = new L.CanvasLayer.movingCircle().addTo(this.map),
      o = new L.CanvasLayer.animateCircle().addTo(this.map);
    e.on('flowend', function (t) {
      // n.setData(t.data);
      o.setData(t.data);
    });
    e.setData(t);
  },
  _visit: function () {
    this.util.get(
      'proxy.jsp?http://media.geoq.cn/media/geoq.do?handler=map&opt=visit&appid=e3b6b43a-1a5f-4a47-bf72-ec1436ced686&platform=mobile',
    );
  },
  iframe: function () {
    var t = document.createElement('iframe');
    t.setAttribute('width', '0'),
      t.setAttribute('height', '0'),
      t.setAttribute(
        'src',
        'http://www.geoq.cn/baidumedia.html?appid=e3b6b43a-1a5f-4a47-bf72-ec1436ced686',
      ),
      (t.style.display = 'none'),
      document.body.appendChild(t);
  },
};
(geoq.util = {
  get: function (t, e, n) {
    var o = new XMLHttpRequest(),
      r = this;
    return (
      o.open('GET', t, !0),
      o.send(null),
      (o.onload = function (t) {
        var n = t.target.responseText;
        'function' == typeof e && e.call(r, JSON.parse(n));
      }),
      (o.onerror = function (t) {
        'function' == typeof n && n.call(r, t);
      }),
      o
    );
  },
  getText: function (t, e, n, o) {
    var r = new XMLHttpRequest(),
      i = this;
    return (
      r.open('GET', t, !0),
      r.send(null),
      (r.onload = function (t) {
        var n = t.target.responseText;
        e.call(i, n);
      }),
      (r.onerror = function (t) {
        'function' == typeof n && n.call(i, t);
      }),
      (r.onprogress = function (t) {
        'function' == typeof o && t.lengthComputable && o.call(i, t);
      }),
      r
    );
  },
  csv: function (t) {
    if (!t) return null;
    var e = t.split('\n');
    if (!e || e.length < 2) return null;
    for (var n = e.shift().split(','), o = [], r = 0; r < n.length; r++)
      n[r] = n[r].trim().replace('\n', '').replace('\r', '');
    for (var i = 0, a = e.length; a > i; i++)
      if ('' !== e[i].trim()) {
        for (var s = e[i].split(','), l = {}, r = 0; r < n.length; r++) {
          var c = s[r];
          c ? c.indexOf('\r') > -1 && (c = c.replace('\r', '')) : (c = ''),
            (l[n[r]] = c.trim());
        }
        o.push(l);
      }
    return {
      fields: n,
      rows: o,
    };
  },
  gradient: function (t, e) {
    for (var n = [], o = 0; o < t.length; o++) n.push(this.hex2rgb(t[o]));
    if (e <= n.length) return n.slice(0, e);
    for (var r, i, a, s = n.length, l = [n[0]], c = 1; e - 1 > c; c++)
      (r = Math.floor((c * (s - 1)) / (e - 1))),
        (i = (c * (s - 1)) / (e - 1) - r),
        (a = this._color(n[r], n[r + 1], i)),
        l.unshift(a);
    return l.unshift(n[s - 1]), l;
  },
  _color: function (t, e, n) {
    return [
      Math.round(t[0] + (e[0] - t[0]) * n),
      Math.round(t[1] + (e[1] - t[1]) * n),
      Math.round(t[2] + (e[2] - t[2]) * n),
    ];
  },
  hex2rgb: function (t) {
    var e = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
      },
      n = /^#[0-9A-F]{3,6}$/,
      o = [];
    return (
      'string' == typeof t &&
        n.test(t.toUpperCase()) &&
        ((t = t.slice(1).toUpperCase()),
        3 === t.length
          ? (o = [
              16 * e[t[0]] + e[t[0]],
              16 * e[t[1]] + e[t[1]],
              16 * e[t[2]] + e[t[2]],
            ])
          : 6 === t.length &&
            (o = [
              16 * e[t[0]] + e[t[1]],
              16 * e[t[2]] + e[t[3]],
              16 * e[t[4]] + e[t[5]],
            ])),
      o
    );
  },
}),
  L.DomEvent.on(document, 'DOMContentLoaded', function () {
    geoq.init(), geoq.iframe();
  });

window.getCityData = function (cityName) {
  for (let i = 0; i < _cityData.length; i++) {
    var item = _cityData[i];
    if (item['city'] === cityName) {
      return item;
    }
  }
};
window.viewPic = function (cityName) {
  var city = getCityData(cityName);

  var galley = document.getElementById('galley');
  var viewer = new Viewer(galley, {
    url: 'data-original',
    hidden: function () {
      viewer.destroy();
    },
  });
  viewer.show();
};

window.generatePicHtml = function (cityName, urls) {
  var _html =
    '<div id="galley"><ul class="pictures" onclick="viewPic(\'' +
    cityName +
    '\')">';
  for (var i = 0; i < urls.length; i++) {
    var url = './data/pictures/' + urls[i];
    var display = 'style="display:inline-block"';
    if (i > 5) {
      display = 'style="display:none"';
    }
    _html +=
      '<li ' +
      display +
      '><img data-original="' +
      url +
      '" src="' +
      url +
      '" alt="图片预览"></li>';
  }
  _html += '</ul></div></div>';

  return _html;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {



__webpack_require__(0);
__webpack_require__(5);
__webpack_require__(6);

/***/ })
/******/ ]);