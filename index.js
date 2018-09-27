'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

webpackJsonp([0], [
/* 0 */
/***/function (module, exports) {

    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
        return [];
    };

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    // http://dev.w3.org/csswg/css-color/

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HEX3 = /^#([a-f0-9]{3})$/i;
    var hex3 = function hex3(value) {
        var match = value.match(HEX3);
        if (match) {
            return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
        }
        return false;
    };

    var HEX6 = /^#([a-f0-9]{6})$/i;
    var hex6 = function hex6(value) {
        var match = value.match(HEX6);
        if (match) {
            return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
        }
        return false;
    };

    var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    var rgb = function rgb(value) {
        var match = value.match(RGB);
        if (match) {
            return [Number(match[1]), Number(match[2]), Number(match[3]), null];
        }
        return false;
    };

    var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
    var rgba = function rgba(value) {
        var match = value.match(RGBA);
        if (match && match.length > 4) {
            return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
        }
        return false;
    };

    var fromArray = function fromArray(array) {
        return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
    };

    var namedColor = function namedColor(name) {
        var color = NAMED_COLORS[name.toLowerCase()];
        return color ? color : false;
    };

    var Color = function () {
        function Color(value) {
            _classCallCheck(this, Color);

            var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
                _ref2 = _slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                a = _ref2[3];

            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }

        _createClass(Color, [{
            key: 'isTransparent',
            value: function isTransparent() {
                return this.a === 0;
            }
        }, {
            key: 'toString',
            value: function toString() {
                return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
            }
        }]);

        return Color;
    }();

    exports.default = Color;

    var NAMED_COLORS = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, null],
        antiquewhite: [250, 235, 215, null],
        aqua: [0, 255, 255, null],
        aquamarine: [127, 255, 212, null],
        azure: [240, 255, 255, null],
        beige: [245, 245, 220, null],
        bisque: [255, 228, 196, null],
        black: [0, 0, 0, null],
        blanchedalmond: [255, 235, 205, null],
        blue: [0, 0, 255, null],
        blueviolet: [138, 43, 226, null],
        brown: [165, 42, 42, null],
        burlywood: [222, 184, 135, null],
        cadetblue: [95, 158, 160, null],
        chartreuse: [127, 255, 0, null],
        chocolate: [210, 105, 30, null],
        coral: [255, 127, 80, null],
        cornflowerblue: [100, 149, 237, null],
        cornsilk: [255, 248, 220, null],
        crimson: [220, 20, 60, null],
        cyan: [0, 255, 255, null],
        darkblue: [0, 0, 139, null],
        darkcyan: [0, 139, 139, null],
        darkgoldenrod: [184, 134, 11, null],
        darkgray: [169, 169, 169, null],
        darkgreen: [0, 100, 0, null],
        darkgrey: [169, 169, 169, null],
        darkkhaki: [189, 183, 107, null],
        darkmagenta: [139, 0, 139, null],
        darkolivegreen: [85, 107, 47, null],
        darkorange: [255, 140, 0, null],
        darkorchid: [153, 50, 204, null],
        darkred: [139, 0, 0, null],
        darksalmon: [233, 150, 122, null],
        darkseagreen: [143, 188, 143, null],
        darkslateblue: [72, 61, 139, null],
        darkslategray: [47, 79, 79, null],
        darkslategrey: [47, 79, 79, null],
        darkturquoise: [0, 206, 209, null],
        darkviolet: [148, 0, 211, null],
        deeppink: [255, 20, 147, null],
        deepskyblue: [0, 191, 255, null],
        dimgray: [105, 105, 105, null],
        dimgrey: [105, 105, 105, null],
        dodgerblue: [30, 144, 255, null],
        firebrick: [178, 34, 34, null],
        floralwhite: [255, 250, 240, null],
        forestgreen: [34, 139, 34, null],
        fuchsia: [255, 0, 255, null],
        gainsboro: [220, 220, 220, null],
        ghostwhite: [248, 248, 255, null],
        gold: [255, 215, 0, null],
        goldenrod: [218, 165, 32, null],
        gray: [128, 128, 128, null],
        green: [0, 128, 0, null],
        greenyellow: [173, 255, 47, null],
        grey: [128, 128, 128, null],
        honeydew: [240, 255, 240, null],
        hotpink: [255, 105, 180, null],
        indianred: [205, 92, 92, null],
        indigo: [75, 0, 130, null],
        ivory: [255, 255, 240, null],
        khaki: [240, 230, 140, null],
        lavender: [230, 230, 250, null],
        lavenderblush: [255, 240, 245, null],
        lawngreen: [124, 252, 0, null],
        lemonchiffon: [255, 250, 205, null],
        lightblue: [173, 216, 230, null],
        lightcoral: [240, 128, 128, null],
        lightcyan: [224, 255, 255, null],
        lightgoldenrodyellow: [250, 250, 210, null],
        lightgray: [211, 211, 211, null],
        lightgreen: [144, 238, 144, null],
        lightgrey: [211, 211, 211, null],
        lightpink: [255, 182, 193, null],
        lightsalmon: [255, 160, 122, null],
        lightseagreen: [32, 178, 170, null],
        lightskyblue: [135, 206, 250, null],
        lightslategray: [119, 136, 153, null],
        lightslategrey: [119, 136, 153, null],
        lightsteelblue: [176, 196, 222, null],
        lightyellow: [255, 255, 224, null],
        lime: [0, 255, 0, null],
        limegreen: [50, 205, 50, null],
        linen: [250, 240, 230, null],
        magenta: [255, 0, 255, null],
        maroon: [128, 0, 0, null],
        mediumaquamarine: [102, 205, 170, null],
        mediumblue: [0, 0, 205, null],
        mediumorchid: [186, 85, 211, null],
        mediumpurple: [147, 112, 219, null],
        mediumseagreen: [60, 179, 113, null],
        mediumslateblue: [123, 104, 238, null],
        mediumspringgreen: [0, 250, 154, null],
        mediumturquoise: [72, 209, 204, null],
        mediumvioletred: [199, 21, 133, null],
        midnightblue: [25, 25, 112, null],
        mintcream: [245, 255, 250, null],
        mistyrose: [255, 228, 225, null],
        moccasin: [255, 228, 181, null],
        navajowhite: [255, 222, 173, null],
        navy: [0, 0, 128, null],
        oldlace: [253, 245, 230, null],
        olive: [128, 128, 0, null],
        olivedrab: [107, 142, 35, null],
        orange: [255, 165, 0, null],
        orangered: [255, 69, 0, null],
        orchid: [218, 112, 214, null],
        palegoldenrod: [238, 232, 170, null],
        palegreen: [152, 251, 152, null],
        paleturquoise: [175, 238, 238, null],
        palevioletred: [219, 112, 147, null],
        papayawhip: [255, 239, 213, null],
        peachpuff: [255, 218, 185, null],
        peru: [205, 133, 63, null],
        pink: [255, 192, 203, null],
        plum: [221, 160, 221, null],
        powderblue: [176, 224, 230, null],
        purple: [128, 0, 128, null],
        rebeccapurple: [102, 51, 153, null],
        red: [255, 0, 0, null],
        rosybrown: [188, 143, 143, null],
        royalblue: [65, 105, 225, null],
        saddlebrown: [139, 69, 19, null],
        salmon: [250, 128, 114, null],
        sandybrown: [244, 164, 96, null],
        seagreen: [46, 139, 87, null],
        seashell: [255, 245, 238, null],
        sienna: [160, 82, 45, null],
        silver: [192, 192, 192, null],
        skyblue: [135, 206, 235, null],
        slateblue: [106, 90, 205, null],
        slategray: [112, 128, 144, null],
        slategrey: [112, 128, 144, null],
        snow: [255, 250, 250, null],
        springgreen: [0, 255, 127, null],
        steelblue: [70, 130, 180, null],
        tan: [210, 180, 140, null],
        teal: [0, 128, 128, null],
        thistle: [216, 191, 216, null],
        tomato: [255, 99, 71, null],
        turquoise: [64, 224, 208, null],
        violet: [238, 130, 238, null],
        wheat: [245, 222, 179, null],
        white: [255, 255, 255, null],
        whitesmoke: [245, 245, 245, null],
        yellow: [255, 255, 0, null],
        yellowgreen: [154, 205, 50, null]
    };

    var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _NodeContainer = __webpack_require__(4);

        var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

        var LENGTH_TYPE = exports.LENGTH_TYPE = {
            PX: 0,
            PERCENTAGE: 1
        };

        var Length = function () {
            function Length(value) {
                _classCallCheck(this, Length);

                this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
                var parsedValue = parseFloat(value);
                if (process.env.NODE_ENV !== 'production' && isNaN(parsedValue)) {
                    console.error('Invalid value given for Length: "' + value + '"');
                }
                this.value = isNaN(parsedValue) ? 0 : parsedValue;
            }

            _createClass(Length, [{
                key: 'isPercentage',
                value: function isPercentage() {
                    return this.type === LENGTH_TYPE.PERCENTAGE;
                }
            }, {
                key: 'getAbsoluteValue',
                value: function getAbsoluteValue(parentLength) {
                    return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
                }
            }], [{
                key: 'create',
                value: function create(v) {
                    return new Length(v);
                }
            }]);

            return Length;
        }();

        exports.default = Length;

        var getRootFontSize = function getRootFontSize(container) {
            var parent = container.parent;
            return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
        };

        var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
            switch (unit) {
                case 'px':
                case '%':
                    return new Length(value + unit);
                case 'em':
                case 'rem':
                    var length = new Length(value);
                    length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
                    return length;
                default:
                    // TODO: handle correctly if unknown unit is used
                    return new Length('0');
            }
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Vector = __webpack_require__(8);

        var _Vector2 = _interopRequireDefault(_Vector);

        var _BezierCurve = __webpack_require__(43);

        var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var TOP = 0;
        var RIGHT = 1;
        var BOTTOM = 2;
        var LEFT = 3;

        var H = 0;
        var V = 1;

        var Bounds = exports.Bounds = function () {
            function Bounds(x, y, w, h) {
                _classCallCheck(this, Bounds);

                this.left = x;
                this.top = y;
                this.width = w;
                this.height = h;
            }

            _createClass(Bounds, null, [{
                key: 'fromClientRect',
                value: function fromClientRect(clientRect, scrollX, scrollY) {
                    return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
                }
            }]);

            return Bounds;
        }();

        var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
            return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
        };

        var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
            return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
        };

        var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
            // TODO support percentage paddings
            var paddingTop = padding[TOP].value;
            var paddingRight = padding[RIGHT].value;
            var paddingBottom = padding[BOTTOM].value;
            var paddingLeft = padding[LEFT].value;

            return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
        };

        var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
            var body = document.body;
            var documentElement = document.documentElement;

            if (!body || !documentElement) {
                throw new Error(process.env.NODE_ENV !== 'production' ? 'Unable to get document size' : '');
            }
            var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

            var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

            return new Bounds(0, 0, width, height);
        };

        var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
            switch (borderSide) {
                case TOP:
                    return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
                case RIGHT:
                    return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
                case BOTTOM:
                    return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
                case LEFT:
                default:
                    return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
            }
        };

        var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
            var path = [];
            if (outer1 instanceof _BezierCurve2.default) {
                path.push(outer1.subdivide(0.5, false));
            } else {
                path.push(outer1);
            }

            if (outer2 instanceof _BezierCurve2.default) {
                path.push(outer2.subdivide(0.5, true));
            } else {
                path.push(outer2);
            }

            if (inner2 instanceof _BezierCurve2.default) {
                path.push(inner2.subdivide(0.5, true).reverse());
            } else {
                path.push(inner2);
            }

            if (inner1 instanceof _BezierCurve2.default) {
                path.push(inner1.subdivide(0.5, false).reverse());
            } else {
                path.push(inner1);
            }

            return path;
        };

        var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
            return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
        };

        var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
            return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
        };

        var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
            var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
            var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
            var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
            var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
            var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
            var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
            var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
            var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);

            if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }

            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;

            return {
                topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
                topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
                topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
                topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
                bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
                bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
                bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
                bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
            };
        };

        var CORNER = {
            TOP_LEFT: 0,
            TOP_RIGHT: 1,
            BOTTOM_RIGHT: 2,
            BOTTOM_LEFT: 3
        };

        var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
            var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
            var ox = r1 * kappa; // control point offset horizontal
            var oy = r2 * kappa; // control point offset vertical
            var xm = x + r1; // x-middle
            var ym = y + r2; // y-middle

            switch (position) {
                case CORNER.TOP_LEFT:
                    return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
                case CORNER.TOP_RIGHT:
                    return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
                case CORNER.BOTTOM_RIGHT:
                    return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
                case CORNER.BOTTOM_LEFT:
                default:
                    return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
            }
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Color = __webpack_require__(1);

        var _Color2 = _interopRequireDefault(_Color);

        var _Util = __webpack_require__(5);

        var _background = __webpack_require__(6);

        var _border = __webpack_require__(14);

        var _borderRadius = __webpack_require__(44);

        var _display = __webpack_require__(45);

        var _float = __webpack_require__(46);

        var _font = __webpack_require__(47);

        var _letterSpacing = __webpack_require__(48);

        var _lineBreak = __webpack_require__(49);

        var _listStyle = __webpack_require__(9);

        var _margin = __webpack_require__(50);

        var _overflow = __webpack_require__(51);

        var _overflowWrap = __webpack_require__(20);

        var _padding = __webpack_require__(19);

        var _position = __webpack_require__(21);

        var _textDecoration = __webpack_require__(13);

        var _textShadow = __webpack_require__(52);

        var _textTransform = __webpack_require__(22);

        var _transform = __webpack_require__(53);

        var _visibility = __webpack_require__(54);

        var _wordBreak = __webpack_require__(55);

        var _zIndex = __webpack_require__(56);

        var _Bounds = __webpack_require__(3);

        var _Input = __webpack_require__(23);

        var _ListItem = __webpack_require__(16);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

        var NodeContainer = function () {
            function NodeContainer(node, parent, resourceLoader, index) {
                var _this = this;

                _classCallCheck(this, NodeContainer);

                this.parent = parent;
                this.tagName = node.tagName;
                this.index = index;
                this.childNodes = [];
                this.listItems = [];
                if (typeof node.start === 'number') {
                    this.listStart = node.start;
                }
                var defaultView = node.ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;
                var style = defaultView.getComputedStyle(node, null);
                var display = (0, _display.parseDisplay)(style.display);

                var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

                var position = (0, _position.parsePosition)(style.position);

                this.style = {
                    background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
                    border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
                    borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
                    color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
                    display: display,
                    float: (0, _float.parseCSSFloat)(style.float),
                    font: (0, _font.parseFont)(style),
                    letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
                    listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
                    lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
                    margin: (0, _margin.parseMargin)(style),
                    opacity: parseFloat(style.opacity),
                    overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
                    overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
                    padding: (0, _padding.parsePadding)(style),
                    position: position,
                    textDecoration: (0, _textDecoration.parseTextDecoration)(style),
                    textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
                    textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
                    transform: (0, _transform.parseTransform)(style),
                    visibility: (0, _visibility.parseVisibility)(style.visibility),
                    wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
                    zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
                };

                if (this.isTransformed()) {
                    // getBoundingClientRect provides values post-transform, we want them without the transformation
                    node.style.transform = 'matrix(1,0,0,1,0,0)';
                }

                if (display === _display.DISPLAY.LIST_ITEM) {
                    var listOwner = (0, _ListItem.getListOwner)(this);
                    if (listOwner) {
                        var listIndex = listOwner.listItems.length;
                        listOwner.listItems.push(this);
                        this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
                    }
                }

                // TODO move bound retrieval for all nodes to a later stage?
                if (node.tagName === 'IMG') {
                    node.addEventListener('load', function () {
                        _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                        _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
                    });
                }
                this.image = getImage(node, resourceLoader);
                this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

                if (process.env.NODE_ENV !== 'production') {
                    this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                        return s.length ? '.' + s : '';
                    }).join('');
                }
            }

            _createClass(NodeContainer, [{
                key: 'getClipPaths',
                value: function getClipPaths() {
                    var parentClips = this.parent ? this.parent.getClipPaths() : [];
                    var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

                    return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
                }
            }, {
                key: 'isInFlow',
                value: function isInFlow() {
                    return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
                }
            }, {
                key: 'isVisible',
                value: function isVisible() {
                    return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
                }
            }, {
                key: 'isAbsolutelyPositioned',
                value: function isAbsolutelyPositioned() {
                    return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
                }
            }, {
                key: 'isPositioned',
                value: function isPositioned() {
                    return this.style.position !== _position.POSITION.STATIC;
                }
            }, {
                key: 'isFloating',
                value: function isFloating() {
                    return this.style.float !== _float.FLOAT.NONE;
                }
            }, {
                key: 'isRootElement',
                value: function isRootElement() {
                    return this.parent === null;
                }
            }, {
                key: 'isTransformed',
                value: function isTransformed() {
                    return this.style.transform !== null;
                }
            }, {
                key: 'isPositionedWithZIndex',
                value: function isPositionedWithZIndex() {
                    return this.isPositioned() && !this.style.zIndex.auto;
                }
            }, {
                key: 'isInlineLevel',
                value: function isInlineLevel() {
                    return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
                }
            }, {
                key: 'isInlineBlockOrInlineTable',
                value: function isInlineBlockOrInlineTable() {
                    return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
                }
            }]);

            return NodeContainer;
        }();

        exports.default = NodeContainer;

        var getImage = function getImage(node, resourceLoader) {
            if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
                var s = new XMLSerializer();
                return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
            }
            switch (node.tagName) {
                case 'IMG':
                    // $FlowFixMe
                    var img = node;
                    return resourceLoader.loadImage(img.currentSrc || img.src);
                case 'CANVAS':
                    // $FlowFixMe
                    var canvas = node;
                    return resourceLoader.loadCanvas(canvas);
                case 'IFRAME':
                    var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
                    if (iframeKey) {
                        return iframeKey;
                    }
                    break;
            }

            return null;
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var contains = exports.contains = function contains(bit, value) {
        return (bit & value) !== 0;
    };

    var distance = exports.distance = function distance(a, b) {
        return Math.sqrt(a * a + b * b);
    };

    var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
        // Edge does not provide value for cssText
        for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);
            // Safari shows pseudoelements if content is set
            if (property !== 'content') {
                target.style.setProperty(property, style.getPropertyValue(property));
            }
        }
        return target;
    };

    var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

        var _Color = __webpack_require__(1);

        var _Color2 = _interopRequireDefault(_Color);

        var _Length = __webpack_require__(2);

        var _Length2 = _interopRequireDefault(_Length);

        var _Size = __webpack_require__(42);

        var _Size2 = _interopRequireDefault(_Size);

        var _Vector = __webpack_require__(8);

        var _Vector2 = _interopRequireDefault(_Vector);

        var _Bounds = __webpack_require__(3);

        var _padding = __webpack_require__(19);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
            REPEAT: 0,
            NO_REPEAT: 1,
            REPEAT_X: 2,
            REPEAT_Y: 3
        };

        var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
            AUTO: 0,
            CONTAIN: 1,
            COVER: 2,
            LENGTH: 3
        };

        var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
            BORDER_BOX: 0,
            PADDING_BOX: 1,
            CONTENT_BOX: 2
        };

        var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

        var AUTO = 'auto';

        var BackgroundSize = function BackgroundSize(size) {
            _classCallCheck(this, BackgroundSize);

            switch (size) {
                case 'contain':
                    this.size = BACKGROUND_SIZE.CONTAIN;
                    break;
                case 'cover':
                    this.size = BACKGROUND_SIZE.COVER;
                    break;
                case 'auto':
                    this.size = BACKGROUND_SIZE.AUTO;
                    break;
                default:
                    this.value = new _Length2.default(size);
            }
        };

        var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
            var width = 0;
            var height = 0;
            var size = backgroundImage.size;
            if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
                var targetRatio = bounds.width / bounds.height;
                var currentRatio = image.width / image.height;
                return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
            }

            if (size[0].value) {
                width = size[0].value.getAbsoluteValue(bounds.width);
            }

            if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
                height = image.height;
            } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
                height = width / image.width * image.height;
            } else if (size[1].value) {
                height = size[1].value.getAbsoluteValue(bounds.height);
            }

            if (size[0].size === BACKGROUND_SIZE.AUTO) {
                width = height / image.height * image.width;
            }

            return new _Size2.default(width, height);
        };

        var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
            var size = backgroundImage.size;
            var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
            var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

            return new _Size2.default(width, height);
        };

        var AUTO_SIZE = new BackgroundSize(AUTO);

        var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
            switch (clip) {
                case BACKGROUND_CLIP.BORDER_BOX:
                    return (0, _Bounds.calculateBorderBoxPath)(curves);
                case BACKGROUND_CLIP.PADDING_BOX:
                default:
                    return (0, _Bounds.calculatePaddingBoxPath)(curves);
            }
        };

        var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
            var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

            switch (backgroundOrigin) {
                case BACKGROUND_ORIGIN.BORDER_BOX:
                    return bounds;
                case BACKGROUND_ORIGIN.CONTENT_BOX:
                    var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
                    var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
                    var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
                    var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
                    return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
                case BACKGROUND_ORIGIN.PADDING_BOX:
                default:
                    return paddingBox;
            }
        };

        var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
            return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
        };

        var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
            var repeat = background.repeat;
            switch (repeat) {
                case BACKGROUND_REPEAT.REPEAT_X:
                    return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
                case BACKGROUND_REPEAT.REPEAT_Y:
                    return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
                case BACKGROUND_REPEAT.NO_REPEAT:
                    return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
                default:
                    return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
            }
        };

        var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
            return {
                backgroundColor: new _Color2.default(style.backgroundColor),
                backgroundImage: parseBackgroundImages(style, resourceLoader),
                backgroundClip: parseBackgroundClip(style.backgroundClip),
                backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
            };
        };

        var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
            switch (backgroundClip) {
                case 'padding-box':
                    return BACKGROUND_CLIP.PADDING_BOX;
                case 'content-box':
                    return BACKGROUND_CLIP.CONTENT_BOX;
            }
            return BACKGROUND_CLIP.BORDER_BOX;
        };

        var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
            switch (backgroundOrigin) {
                case 'padding-box':
                    return BACKGROUND_ORIGIN.PADDING_BOX;
                case 'content-box':
                    return BACKGROUND_ORIGIN.CONTENT_BOX;
            }
            return BACKGROUND_ORIGIN.BORDER_BOX;
        };

        var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
            switch (backgroundRepeat.trim()) {
                case 'no-repeat':
                    return BACKGROUND_REPEAT.NO_REPEAT;
                case 'repeat-x':
                case 'repeat no-repeat':
                    return BACKGROUND_REPEAT.REPEAT_X;
                case 'repeat-y':
                case 'no-repeat repeat':
                    return BACKGROUND_REPEAT.REPEAT_Y;
                case 'repeat':
                    return BACKGROUND_REPEAT.REPEAT;
            }

            if (process.env.NODE_ENV !== 'production') {
                console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
            }

            return BACKGROUND_REPEAT.REPEAT;
        };

        var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
            var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
                if (backgroundImage.method === 'url') {
                    var key = resourceLoader.loadImage(backgroundImage.args[0]);
                    backgroundImage.args = key ? [key] : [];
                }
                return backgroundImage;
            });
            var positions = style.backgroundPosition.split(',');
            var repeats = style.backgroundRepeat.split(',');
            var sizes = style.backgroundSize.split(',');

            return sources.map(function (source, index) {
                var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
                var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

                return {
                    source: source,
                    repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
                    size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
                    position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
                };
            });
        };

        var parseBackgroundSize = function parseBackgroundSize(size) {
            return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
        };

        var parseBackgoundPosition = function parseBackgoundPosition(position) {
            switch (position) {
                case 'bottom':
                case 'right':
                    return new _Length2.default('100%');
                case 'left':
                case 'top':
                    return new _Length2.default('0%');
                case 'auto':
                    return new _Length2.default('0');
            }
            return new _Length2.default(position);
        };

        var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
            var whitespace = /^\s$/;
            var results = [];

            var args = [];
            var method = '';
            var quote = null;
            var definition = '';
            var mode = 0;
            var numParen = 0;

            var appendResult = function appendResult() {
                var prefix = '';
                if (method) {
                    if (definition.substr(0, 1) === '"') {
                        definition = definition.substr(1, definition.length - 2);
                    }

                    if (definition) {
                        args.push(definition.trim());
                    }

                    var prefix_i = method.indexOf('-', 1) + 1;
                    if (method.substr(0, 1) === '-' && prefix_i > 0) {
                        prefix = method.substr(0, prefix_i).toLowerCase();
                        method = method.substr(prefix_i);
                    }
                    method = method.toLowerCase();
                    if (method !== 'none') {
                        results.push({
                            prefix: prefix,
                            method: method,
                            args: args
                        });
                    }
                }
                args = [];
                method = definition = '';
            };

            image.split('').forEach(function (c) {
                if (mode === 0 && whitespace.test(c)) {
                    return;
                }
                switch (c) {
                    case '"':
                        if (!quote) {
                            quote = c;
                        } else if (quote === c) {
                            quote = null;
                        }
                        break;
                    case '(':
                        if (quote) {
                            break;
                        } else if (mode === 0) {
                            mode = 1;
                            return;
                        } else {
                            numParen++;
                        }
                        break;
                    case ')':
                        if (quote) {
                            break;
                        } else if (mode === 1) {
                            if (numParen === 0) {
                                mode = 0;
                                appendResult();
                                return;
                            } else {
                                numParen--;
                            }
                        }
                        break;

                    case ',':
                        if (quote) {
                            break;
                        } else if (mode === 0) {
                            appendResult();
                            return;
                        } else if (mode === 1) {
                            if (numParen === 0 && !method.match(/^url$/i)) {
                                args.push(definition.trim());
                                definition = '';
                                return;
                            }
                        }
                        break;
                }

                if (mode === 0) {
                    method += c;
                } else {
                    definition += c;
                }
            });

            appendResult();
            return results;
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var PATH = exports.PATH = {
        VECTOR: 0,
        BEZIER_CURVE: 1,
        CIRCLE: 2
    };

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Path = __webpack_require__(7);

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Vector = function Vector(x, y) {
            _classCallCheck(this, Vector);

            this.type = _Path.PATH.VECTOR;
            this.x = x;
            this.y = y;
            if (process.env.NODE_ENV !== 'production') {
                if (isNaN(x)) {
                    console.error('Invalid x value given for Vector');
                }
                if (isNaN(y)) {
                    console.error('Invalid y value given for Vector');
                }
            }
        };

        exports.default = Vector;
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

    var _background = __webpack_require__(6);

    var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
        INSIDE: 0,
        OUTSIDE: 1
    };

    var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
        NONE: -1,
        DISC: 0,
        CIRCLE: 1,
        SQUARE: 2,
        DECIMAL: 3,
        CJK_DECIMAL: 4,
        DECIMAL_LEADING_ZERO: 5,
        LOWER_ROMAN: 6,
        UPPER_ROMAN: 7,
        LOWER_GREEK: 8,
        LOWER_ALPHA: 9,
        UPPER_ALPHA: 10,
        ARABIC_INDIC: 11,
        ARMENIAN: 12,
        BENGALI: 13,
        CAMBODIAN: 14,
        CJK_EARTHLY_BRANCH: 15,
        CJK_HEAVENLY_STEM: 16,
        CJK_IDEOGRAPHIC: 17,
        DEVANAGARI: 18,
        ETHIOPIC_NUMERIC: 19,
        GEORGIAN: 20,
        GUJARATI: 21,
        GURMUKHI: 22,
        HEBREW: 22,
        HIRAGANA: 23,
        HIRAGANA_IROHA: 24,
        JAPANESE_FORMAL: 25,
        JAPANESE_INFORMAL: 26,
        KANNADA: 27,
        KATAKANA: 28,
        KATAKANA_IROHA: 29,
        KHMER: 30,
        KOREAN_HANGUL_FORMAL: 31,
        KOREAN_HANJA_FORMAL: 32,
        KOREAN_HANJA_INFORMAL: 33,
        LAO: 34,
        LOWER_ARMENIAN: 35,
        MALAYALAM: 36,
        MONGOLIAN: 37,
        MYANMAR: 38,
        ORIYA: 39,
        PERSIAN: 40,
        SIMP_CHINESE_FORMAL: 41,
        SIMP_CHINESE_INFORMAL: 42,
        TAMIL: 43,
        TELUGU: 44,
        THAI: 45,
        TIBETAN: 46,
        TRAD_CHINESE_FORMAL: 47,
        TRAD_CHINESE_INFORMAL: 48,
        UPPER_ARMENIAN: 49,
        DISCLOSURE_OPEN: 50,
        DISCLOSURE_CLOSED: 51
    };

    var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
        switch (type) {
            case 'disc':
                return LIST_STYLE_TYPE.DISC;
            case 'circle':
                return LIST_STYLE_TYPE.CIRCLE;
            case 'square':
                return LIST_STYLE_TYPE.SQUARE;
            case 'decimal':
                return LIST_STYLE_TYPE.DECIMAL;
            case 'cjk-decimal':
                return LIST_STYLE_TYPE.CJK_DECIMAL;
            case 'decimal-leading-zero':
                return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
            case 'lower-roman':
                return LIST_STYLE_TYPE.LOWER_ROMAN;
            case 'upper-roman':
                return LIST_STYLE_TYPE.UPPER_ROMAN;
            case 'lower-greek':
                return LIST_STYLE_TYPE.LOWER_GREEK;
            case 'lower-alpha':
                return LIST_STYLE_TYPE.LOWER_ALPHA;
            case 'upper-alpha':
                return LIST_STYLE_TYPE.UPPER_ALPHA;
            case 'arabic-indic':
                return LIST_STYLE_TYPE.ARABIC_INDIC;
            case 'armenian':
                return LIST_STYLE_TYPE.ARMENIAN;
            case 'bengali':
                return LIST_STYLE_TYPE.BENGALI;
            case 'cambodian':
                return LIST_STYLE_TYPE.CAMBODIAN;
            case 'cjk-earthly-branch':
                return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
            case 'cjk-heavenly-stem':
                return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
            case 'cjk-ideographic':
                return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
            case 'devanagari':
                return LIST_STYLE_TYPE.DEVANAGARI;
            case 'ethiopic-numeric':
                return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
            case 'georgian':
                return LIST_STYLE_TYPE.GEORGIAN;
            case 'gujarati':
                return LIST_STYLE_TYPE.GUJARATI;
            case 'gurmukhi':
                return LIST_STYLE_TYPE.GURMUKHI;
            case 'hebrew':
                return LIST_STYLE_TYPE.HEBREW;
            case 'hiragana':
                return LIST_STYLE_TYPE.HIRAGANA;
            case 'hiragana-iroha':
                return LIST_STYLE_TYPE.HIRAGANA_IROHA;
            case 'japanese-formal':
                return LIST_STYLE_TYPE.JAPANESE_FORMAL;
            case 'japanese-informal':
                return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
            case 'kannada':
                return LIST_STYLE_TYPE.KANNADA;
            case 'katakana':
                return LIST_STYLE_TYPE.KATAKANA;
            case 'katakana-iroha':
                return LIST_STYLE_TYPE.KATAKANA_IROHA;
            case 'khmer':
                return LIST_STYLE_TYPE.KHMER;
            case 'korean-hangul-formal':
                return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
            case 'korean-hanja-formal':
                return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
            case 'korean-hanja-informal':
                return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
            case 'lao':
                return LIST_STYLE_TYPE.LAO;
            case 'lower-armenian':
                return LIST_STYLE_TYPE.LOWER_ARMENIAN;
            case 'malayalam':
                return LIST_STYLE_TYPE.MALAYALAM;
            case 'mongolian':
                return LIST_STYLE_TYPE.MONGOLIAN;
            case 'myanmar':
                return LIST_STYLE_TYPE.MYANMAR;
            case 'oriya':
                return LIST_STYLE_TYPE.ORIYA;
            case 'persian':
                return LIST_STYLE_TYPE.PERSIAN;
            case 'simp-chinese-formal':
                return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
            case 'simp-chinese-informal':
                return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
            case 'tamil':
                return LIST_STYLE_TYPE.TAMIL;
            case 'telugu':
                return LIST_STYLE_TYPE.TELUGU;
            case 'thai':
                return LIST_STYLE_TYPE.THAI;
            case 'tibetan':
                return LIST_STYLE_TYPE.TIBETAN;
            case 'trad-chinese-formal':
                return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
            case 'trad-chinese-informal':
                return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
            case 'upper-armenian':
                return LIST_STYLE_TYPE.UPPER_ARMENIAN;
            case 'disclosure-open':
                return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
            case 'disclosure-closed':
                return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
            case 'none':
            default:
                return LIST_STYLE_TYPE.NONE;
        }
    };

    var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
        var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
        return {
            listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
            listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
            listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
        };
    };

    var parseListStylePosition = function parseListStylePosition(position) {
        switch (position) {
            case 'inside':
                return LIST_STYLE_POSITION.INSIDE;
            case 'outside':
            default:
                return LIST_STYLE_POSITION.OUTSIDE;
        }
    };

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _textTransform = __webpack_require__(22);

    var _TextBounds = __webpack_require__(24);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TextContainer = function () {
        function TextContainer(text, parent, bounds) {
            _classCallCheck(this, TextContainer);

            this.text = text;
            this.parent = parent;
            this.bounds = bounds;
        }

        _createClass(TextContainer, null, [{
            key: 'fromTextNode',
            value: function fromTextNode(node, parent) {
                var text = transform(node.data, parent.style.textTransform);
                return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
            }
        }]);

        return TextContainer;
    }();

    exports.default = TextContainer;

    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

    var transform = function transform(text, _transform) {
        switch (_transform) {
            case _textTransform.TEXT_TRANSFORM.LOWERCASE:
                return text.toLowerCase();
            case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
                return text.replace(CAPITALIZE, capitalize);
            case _textTransform.TEXT_TRANSFORM.UPPERCASE:
                return text.toUpperCase();
            default:
                return text;
        }
    };

    function capitalize(m, p1, p2) {
        if (m.length > 0) {
            return p1 + p2.toUpperCase();
        }

        return m;
    }

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _ForeignObjectRenderer = __webpack_require__(25);

    var testRangeBounds = function testRangeBounds(document) {
        var TEST_HEIGHT = 123;

        if (document.createRange) {
            var range = document.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + 'px';
                testElement.style.display = 'block';
                document.body.appendChild(testElement);

                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) {
                    return true;
                }
            }
        }

        return false;
    };

    // iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
    var testBase64 = function testBase64(document, src) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        return new Promise(function (resolve) {
            // Single pixel base64 image renders fine on iOS 10.3???
            img.src = src;

            var onload = function onload() {
                try {
                    ctx.drawImage(img, 0, 0);
                    canvas.toDataURL();
                } catch (e) {
                    return resolve(false);
                }

                return resolve(true);
            };

            img.onload = onload;
            img.onerror = function () {
                return resolve(false);
            };

            if (img.complete === true) {
                setTimeout(function () {
                    onload();
                }, 500);
            }
        });
    };

    var testCORS = function testCORS() {
        return typeof new Image().crossOrigin !== 'undefined';
    };

    var testResponseType = function testResponseType() {
        return typeof new XMLHttpRequest().responseType === 'string';
    };

    var testSVG = function testSVG(document) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        } catch (e) {
            return false;
        }
        return true;
    };

    var isGreenPixel = function isGreenPixel(data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };

    var testForeignObject = function testForeignObject(document) {
        var canvas = document.createElement('canvas');
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, size, size);

        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);

            var node = document.createElement('div');
            node.style.backgroundImage = 'url(' + greenImageSrc + ')';
            node.style.height = size + 'px';
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
        }).then(function (img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        }).catch(function (e) {
            return false;
        });
    };

    var FEATURES = {
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_RANGE_BOUNDS() {
            'use strict';

            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_SVG_DRAWING() {
            'use strict';

            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_BASE64_DRAWING() {
            'use strict';

            return function (src) {
                var _value = testBase64(document, src);
                Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                        return _value;
                    } });
                return _value;
            };
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            'use strict';

            var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_CORS_IMAGES() {
            'use strict';

            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_RESPONSE_TYPE() {
            'use strict';

            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_CORS_XHR() {
            'use strict';

            var value = 'withCredentials' in new XMLHttpRequest();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
            return value;
        }
    };

    exports.default = FEATURES;

    /***/
},,
/* 12 */
/* 13 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

    var _Color = __webpack_require__(1);

    var _Color2 = _interopRequireDefault(_Color);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
        SOLID: 0,
        DOUBLE: 1,
        DOTTED: 2,
        DASHED: 3,
        WAVY: 4
    };

    var TEXT_DECORATION = exports.TEXT_DECORATION = {
        NONE: null
    };

    var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
        UNDERLINE: 1,
        OVERLINE: 2,
        LINE_THROUGH: 3,
        BLINK: 4
    };

    var parseLine = function parseLine(line) {
        switch (line) {
            case 'underline':
                return TEXT_DECORATION_LINE.UNDERLINE;
            case 'overline':
                return TEXT_DECORATION_LINE.OVERLINE;
            case 'line-through':
                return TEXT_DECORATION_LINE.LINE_THROUGH;
        }
        return TEXT_DECORATION_LINE.BLINK;
    };

    var parseTextDecorationLine = function parseTextDecorationLine(line) {
        if (line === 'none') {
            return null;
        }

        return line.split(' ').map(parseLine);
    };

    var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
        switch (style) {
            case 'double':
                return TEXT_DECORATION_STYLE.DOUBLE;
            case 'dotted':
                return TEXT_DECORATION_STYLE.DOTTED;
            case 'dashed':
                return TEXT_DECORATION_STYLE.DASHED;
            case 'wavy':
                return TEXT_DECORATION_STYLE.WAVY;
        }
        return TEXT_DECORATION_STYLE.SOLID;
    };

    var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
        var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
        if (textDecorationLine === null) {
            return TEXT_DECORATION.NONE;
        }

        var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
        var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

        return {
            textDecorationLine: textDecorationLine,
            textDecorationColor: textDecorationColor,
            textDecorationStyle: textDecorationStyle
        };
    };

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

    var _Color = __webpack_require__(1);

    var _Color2 = _interopRequireDefault(_Color);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var BORDER_STYLE = exports.BORDER_STYLE = {
        NONE: 0,
        SOLID: 1
    };

    var BORDER_SIDES = exports.BORDER_SIDES = {
        TOP: 0,
        RIGHT: 1,
        BOTTOM: 2,
        LEFT: 3
    };

    var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
        return s.toLowerCase();
    });

    var parseBorderStyle = function parseBorderStyle(style) {
        switch (style) {
            case 'none':
                return BORDER_STYLE.NONE;
        }
        return BORDER_STYLE.SOLID;
    };

    var parseBorder = exports.parseBorder = function parseBorder(style) {
        return SIDES.map(function (side) {
            var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
            var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
            var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
            return {
                borderColor: borderColor,
                borderStyle: borderStyle,
                borderWidth: isNaN(borderWidth) ? 0 : borderWidth
            };
        });
    };

    /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                } else {
                    codePoints.push(value);
                    i--;
                }
            } else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };

    var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, arguments);
        }

        var length = arguments.length;
        if (!length) {
            return '';
        }

        var codeUnits = [];

        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = arguments.length <= index ? undefined : arguments[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            } else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    var decode = exports.decode = function decode(base64) {
        var bufferLength = base64.length * 0.75,
            len = base64.length,
            i = void 0,
            p = 0,
            encoded1 = void 0,
            encoded2 = void 0,
            encoded3 = void 0,
            encoded4 = void 0;

        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }

        var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

        for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];

            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }

        return buffer;
    };

    var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var _i = 0; _i < length; _i += 2) {
            bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
        }
        return bytes;
    };

    var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var _i2 = 0; _i2 < length; _i2 += 4) {
            bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
        }
        return bytes;
    };

    /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

    var _Util = __webpack_require__(5);

    var _NodeContainer = __webpack_require__(4);

    var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

    var _TextContainer = __webpack_require__(10);

    var _TextContainer2 = _interopRequireDefault(_TextContainer);

    var _listStyle = __webpack_require__(9);

    var _Unicode = __webpack_require__(26);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    // Margin between the enumeration and the list item content
    var MARGIN_RIGHT = 7;

    var ancestorTypes = ['OL', 'UL', 'MENU'];

    var getListOwner = exports.getListOwner = function getListOwner(container) {
        var parent = container.parent;
        if (!parent) {
            return null;
        }

        do {
            var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
            if (isAncestor) {
                return parent;
            }
            parent = parent.parent;
        } while (parent);

        return container.parent;
    };

    var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
        var listStyle = container.style.listStyle;

        if (!listStyle) {
            return;
        }

        var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(style, wrapper);

        wrapper.style.position = 'absolute';
        wrapper.style.bottom = 'auto';
        wrapper.style.display = 'block';
        wrapper.style.letterSpacing = 'normal';

        switch (listStyle.listStylePosition) {
            case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
                wrapper.style.left = 'auto';
                wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
                wrapper.style.textAlign = 'right';
                break;
            case _listStyle.LIST_STYLE_POSITION.INSIDE:
                wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
                wrapper.style.right = 'auto';
                wrapper.style.textAlign = 'left';
                break;
        }

        var text = void 0;
        var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
        var styleImage = listStyle.listStyleImage;
        if (styleImage) {
            if (styleImage.method === 'url') {
                var image = node.ownerDocument.createElement('img');
                image.src = styleImage.args[0];
                wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
                wrapper.style.width = 'auto';
                wrapper.style.height = 'auto';
                wrapper.appendChild(image);
            } else {
                var size = parseFloat(container.style.font.fontSize) * 0.5;
                wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
                wrapper.style.width = size + 'px';
                wrapper.style.height = size + 'px';
                wrapper.style.backgroundImage = style.listStyleImage;
            }
        } else if (typeof container.listIndex === 'number') {
            text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
            wrapper.appendChild(text);
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
        }

        // $FlowFixMe
        var body = node.ownerDocument.body;
        body.appendChild(wrapper);

        if (text) {
            container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
            body.removeChild(wrapper);
        } else {
            // $FlowFixMe
            container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
        }
    };

    var ROMAN_UPPER = {
        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    };

    var ARMENIAN = {
        integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
    };

    var HEBREW = {
        integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
    };

    var GEORGIAN = {
        integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
    };

    var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
        }

        return symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, '') + suffix;
    };

    var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
        var string = '';

        do {
            if (!isNumeric) {
                value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
        } while (value * codePointRangeLength >= codePointRangeLength);

        return string;
    };

    var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

        return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
            return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
        }) + suffix);
    };

    var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
        var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

        var codePointRangeLength = symbols.length;
        return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
        }) + suffix;
    };

    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

    var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) {
            return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
        }
        var tmp = Math.abs(value);
        var string = suffix;

        if (tmp === 0) {
            return numbers[0] + string;
        }

        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;

            if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
                string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            } else if (coefficient === 1 && digit > 0) {
                string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
        }

        return (value < 0 ? negativeSign : '') + string;
    };

    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
    var JAPANESE_NEGATIVE = 'マイナス';
    var KOREAN_NEGATIVE = '마이너스 ';

    var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '、' : '';
        var koreanSuffix = appendSuffix ? ', ' : '';
        switch (type) {
            case _listStyle.LIST_STYLE_TYPE.DISC:
                return '•';
            case _listStyle.LIST_STYLE_TYPE.CIRCLE:
                return '◦';
            case _listStyle.LIST_STYLE_TYPE.SQUARE:
                return '◾';
            case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? '0' + string : string;
            case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
            case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
            case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
            case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
            case _listStyle.LIST_STYLE_TYPE.BENGALI:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
            case _listStyle.LIST_STYLE_TYPE.KHMER:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
            case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
            case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
            case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
            case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
            case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.GUJARATI:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.HEBREW:
                return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
            case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
            case _listStyle.LIST_STYLE_TYPE.KANNADA:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.KATAKANA:
                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
            case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
            case _listStyle.LIST_STYLE_TYPE.LAO:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.MYANMAR:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.ORIYA:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.PERSIAN:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.TAMIL:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.TELUGU:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.THAI:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.TIBETAN:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case _listStyle.LIST_STYLE_TYPE.DECIMAL:
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };

    /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Path = __webpack_require__(7);

    var _textDecoration = __webpack_require__(13);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var addColorStops = function addColorStops(gradient, canvasGradient) {
        var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
            return colorStop.stop;
        }));
        var f = 1 / Math.max(1, maxStop);
        gradient.colorStops.forEach(function (colorStop) {
            canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
        });
    };

    var CanvasRenderer = function () {
        function CanvasRenderer(canvas) {
            _classCallCheck(this, CanvasRenderer);

            this.canvas = canvas ? canvas : document.createElement('canvas');
        }

        _createClass(CanvasRenderer, [{
            key: 'render',
            value: function render(options) {
                this.ctx = this.canvas.getContext('2d');
                this.options = options;
                this.canvas.width = Math.floor(options.width * options.scale);
                this.canvas.height = Math.floor(options.height * options.scale);
                this.canvas.style.width = options.width + 'px';
                this.canvas.style.height = options.height + 'px';

                this.ctx.scale(this.options.scale, this.options.scale);
                this.ctx.translate(-options.x, -options.y);
                this.ctx.textBaseline = 'bottom';
                options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
            }
        }, {
            key: 'clip',
            value: function clip(clipPaths, callback) {
                var _this = this;

                if (clipPaths.length) {
                    this.ctx.save();
                    clipPaths.forEach(function (path) {
                        _this.path(path);
                        _this.ctx.clip();
                    });
                }

                callback();

                if (clipPaths.length) {
                    this.ctx.restore();
                }
            }
        }, {
            key: 'drawImage',
            value: function drawImage(image, source, destination) {
                this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
            }
        }, {
            key: 'drawShape',
            value: function drawShape(path, color) {
                this.path(path);
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        }, {
            key: 'fill',
            value: function fill(color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        }, {
            key: 'getTarget',
            value: function getTarget() {
                this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
                return Promise.resolve(this.canvas);
            }
        }, {
            key: 'path',
            value: function path(_path) {
                var _this2 = this;

                this.ctx.beginPath();
                if (Array.isArray(_path)) {
                    _path.forEach(function (point, index) {
                        var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                        if (index === 0) {
                            _this2.ctx.moveTo(start.x, start.y);
                        } else {
                            _this2.ctx.lineTo(start.x, start.y);
                        }

                        if (point.type === _Path.PATH.BEZIER_CURVE) {
                            _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                        }
                    });
                } else {
                    this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
                }

                this.ctx.closePath();
            }
        }, {
            key: 'rectangle',
            value: function rectangle(x, y, width, height, color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fillRect(x, y, width, height);
            }
        }, {
            key: 'renderLinearGradient',
            value: function renderLinearGradient(bounds, gradient) {
                var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

                addColorStops(gradient, linearGradient);
                this.ctx.fillStyle = linearGradient;
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }, {
            key: 'renderRadialGradient',
            value: function renderRadialGradient(bounds, gradient) {
                var _this3 = this;

                var x = bounds.left + gradient.center.x;
                var y = bounds.top + gradient.center.y;

                var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
                if (!radialGradient) {
                    return;
                }

                addColorStops(gradient, radialGradient);
                this.ctx.fillStyle = radialGradient;

                if (gradient.radius.x !== gradient.radius.y) {
                    // transforms for elliptical radial gradient
                    var midX = bounds.left + 0.5 * bounds.width;
                    var midY = bounds.top + 0.5 * bounds.height;
                    var f = gradient.radius.y / gradient.radius.x;
                    var invF = 1 / f;

                    this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                        return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                    });
                } else {
                    this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
                }
            }
        }, {
            key: 'renderRepeat',
            value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
                this.path(path);
                this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
                this.ctx.translate(offsetX, offsetY);
                this.ctx.fill();
                this.ctx.translate(-offsetX, -offsetY);
            }
        }, {
            key: 'renderTextNode',
            value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
                var _this4 = this;

                this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

                textBounds.forEach(function (text) {
                    _this4.ctx.fillStyle = color.toString();
                    if (textShadows && text.text.trim().length) {
                        textShadows.slice(0).reverse().forEach(function (textShadow) {
                            _this4.ctx.shadowColor = textShadow.color.toString();
                            _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                            _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                            _this4.ctx.shadowBlur = textShadow.blur;

                            _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                        });
                    } else {
                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    }

                    if (textDecoration !== null) {
                        var textDecorationColor = textDecoration.textDecorationColor || color;
                        textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                            switch (textDecorationLine) {
                                case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                    // Draws a line at the baseline of the font
                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                    // need to take that into account both in position and size
                                    var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                        baseline = _options$fontMetrics$.baseline;

                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                    // TODO try and find exact position for line-through
                                    var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                        middle = _options$fontMetrics$2.middle;

                                    _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                    break;
                            }
                        });
                    }
                });
            }
        }, {
            key: 'resizeImage',
            value: function resizeImage(image, size) {
                if (image.width === size.width && image.height === size.height) {
                    return image;
                }

                var canvas = this.canvas.ownerDocument.createElement('canvas');
                canvas.width = size.width;
                canvas.height = size.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
                return canvas;
            }
        }, {
            key: 'setOpacity',
            value: function setOpacity(opacity) {
                this.ctx.globalAlpha = opacity;
            }
        }, {
            key: 'transform',
            value: function transform(offsetX, offsetY, matrix, callback) {
                this.ctx.save();
                this.ctx.translate(offsetX, offsetY);
                this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                this.ctx.translate(-offsetX, -offsetY);

                callback();

                this.ctx.restore();
            }
        }]);

        return CanvasRenderer;
    }();

    exports.default = CanvasRenderer;

    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Logger = function () {
        function Logger(enabled, id, start) {
            _classCallCheck(this, Logger);

            this.enabled = typeof window !== 'undefined' && enabled;
            this.start = start ? start : Date.now();
            this.id = id;
        }

        _createClass(Logger, [{
            key: 'child',
            value: function child(id) {
                return new Logger(this.enabled, id, this.start);
            }

            // eslint-disable-next-line flowtype/no-weak-types

        }, {
            key: 'log',
            value: function log() {
                if (this.enabled && window.console && window.console.log) {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
                }
            }

            // eslint-disable-next-line flowtype/no-weak-types

        }, {
            key: 'error',
            value: function error() {
                if (this.enabled && window.console && window.console.error) {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
                }
            }
        }]);

        return Logger;
    }();

    exports.default = Logger;

    /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parsePadding = exports.PADDING_SIDES = undefined;

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var PADDING_SIDES = exports.PADDING_SIDES = {
        TOP: 0,
        RIGHT: 1,
        BOTTOM: 2,
        LEFT: 3
    };

    var SIDES = ['top', 'right', 'bottom', 'left'];

    var parsePadding = exports.parsePadding = function parsePadding(style) {
        return SIDES.map(function (side) {
            return new _Length2.default(style.getPropertyValue('padding-' + side));
        });
    };

    /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
        NORMAL: 0,
        BREAK_WORD: 1
    };

    var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
        switch (overflow) {
            case 'break-word':
                return OVERFLOW_WRAP.BREAK_WORD;
            case 'normal':
            default:
                return OVERFLOW_WRAP.NORMAL;
        }
    };

    /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var POSITION = exports.POSITION = {
        STATIC: 0,
        RELATIVE: 1,
        ABSOLUTE: 2,
        FIXED: 3,
        STICKY: 4
    };

    var parsePosition = exports.parsePosition = function parsePosition(position) {
        switch (position) {
            case 'relative':
                return POSITION.RELATIVE;
            case 'absolute':
                return POSITION.ABSOLUTE;
            case 'fixed':
                return POSITION.FIXED;
            case 'sticky':
                return POSITION.STICKY;
        }

        return POSITION.STATIC;
    };

    /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
        NONE: 0,
        LOWERCASE: 1,
        UPPERCASE: 2,
        CAPITALIZE: 3
    };

    var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
        switch (textTransform) {
            case 'uppercase':
                return TEXT_TRANSFORM.UPPERCASE;
            case 'lowercase':
                return TEXT_TRANSFORM.LOWERCASE;
            case 'capitalize':
                return TEXT_TRANSFORM.CAPITALIZE;
        }

        return TEXT_TRANSFORM.NONE;
    };

    /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

    var _TextContainer = __webpack_require__(10);

    var _TextContainer2 = _interopRequireDefault(_TextContainer);

    var _background = __webpack_require__(6);

    var _border = __webpack_require__(14);

    var _Circle = __webpack_require__(61);

    var _Circle2 = _interopRequireDefault(_Circle);

    var _Vector = __webpack_require__(8);

    var _Vector2 = _interopRequireDefault(_Vector);

    var _Color = __webpack_require__(1);

    var _Color2 = _interopRequireDefault(_Color);

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    var _Bounds = __webpack_require__(3);

    var _TextBounds = __webpack_require__(24);

    var _Util = __webpack_require__(5);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
    var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
    var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
    var INPUT_BORDER = {
        borderWidth: 1,
        borderColor: INPUT_BORDER_COLOR,
        borderStyle: _border.BORDER_STYLE.SOLID
    };
    var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
    var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
        backgroundColor: INPUT_BACKGROUND_COLOR,
        backgroundImage: [],
        backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
        backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
    };

    var RADIO_BORDER_RADIUS = new _Length2.default('50%');
    var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
    var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

    var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
    var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
    var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

    var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
        return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
    };

    var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
        if (node.type === 'radio' || node.type === 'checkbox') {
            if (node.checked) {
                var size = Math.min(container.bounds.width, container.bounds.height);
                container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
            }
        } else {
            inlineFormElement(getInputValue(node), node, container, false);
        }
    };

    var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
        inlineFormElement(node.value, node, container, true);
    };

    var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
        var option = node.options[node.selectedIndex || 0];
        inlineFormElement(option ? option.text || '' : '', node, container, false);
    };

    var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
        if (bounds.width > bounds.height) {
            bounds.left += (bounds.width - bounds.height) / 2;
            bounds.width = bounds.height;
        } else if (bounds.width < bounds.height) {
            bounds.top += (bounds.height - bounds.width) / 2;
            bounds.height = bounds.width;
        }
        return bounds;
    };

    var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
        var body = node.ownerDocument.body;
        if (value.length > 0 && body) {
            var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
            (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
            wrapper.style.position = 'absolute';
            wrapper.style.left = container.bounds.left + 'px';
            wrapper.style.top = container.bounds.top + 'px';
            if (!allowLinebreak) {
                wrapper.style.whiteSpace = 'nowrap';
            }
            var text = node.ownerDocument.createTextNode(value);
            wrapper.appendChild(text);
            body.appendChild(wrapper);
            container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
            body.removeChild(wrapper);
        }
    };

    var getInputValue = function getInputValue(node) {
        var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

        return value.length === 0 ? node.placeholder || '' : value;
    };

    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextBounds = exports.TextBounds = undefined;

    var _Bounds = __webpack_require__(3);

    var _textDecoration = __webpack_require__(13);

    var _Feature = __webpack_require__(11);

    var _Feature2 = _interopRequireDefault(_Feature);

    var _Unicode = __webpack_require__(26);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
        _classCallCheck(this, TextBounds);

        this.text = text;
        this.bounds = bounds;
    };

    var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
        var letterRendering = parent.style.letterSpacing !== 0;
        var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
            return (0, _Unicode.fromCodePoint)(i);
        }) : (0, _Unicode.breakWords)(value, parent);
        var length = textList.length;
        var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
        var scrollX = defaultView ? defaultView.pageXOffset : 0;
        var scrollY = defaultView ? defaultView.pageYOffset : 0;
        var textBounds = [];
        var offset = 0;
        for (var i = 0; i < length; i++) {
            var text = textList[i];
            if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
                if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                    textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
                } else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                    node = replacementNode;
                }
            } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                node = node.splitText(text.length);
            }
            offset += text.length;
        }
        return textBounds;
    };

    var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        wrapper.appendChild(node.cloneNode(true));
        var parentNode = node.parentNode;
        if (parentNode) {
            parentNode.replaceChild(wrapper, node);
            var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
            if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
            }
            return bounds;
        }
        return new _Bounds.Bounds(0, 0, 0, 0);
    };

    var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
        var range = node.ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
    };

    /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ForeignObjectRenderer = function () {
        function ForeignObjectRenderer(element) {
            _classCallCheck(this, ForeignObjectRenderer);

            this.element = element;
        }

        _createClass(ForeignObjectRenderer, [{
            key: 'render',
            value: function render(options) {
                var _this = this;

                this.options = options;
                this.canvas = document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.canvas.width = Math.floor(options.width) * options.scale;
                this.canvas.height = Math.floor(options.height) * options.scale;
                this.canvas.style.width = options.width + 'px';
                this.canvas.style.height = options.height + 'px';

                options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
                var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

                return loadSerializedSVG(svg).then(function (img) {
                    if (options.backgroundColor) {
                        _this.ctx.fillStyle = options.backgroundColor.toString();
                        _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                    }

                    _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                    return _this.canvas;
                });
            }
        }]);

        return ForeignObjectRenderer;
    }();

    exports.default = ForeignObjectRenderer;
    var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(xmlns, 'svg');
        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', width);
        svg.setAttributeNS(null, 'height', height);

        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'x', x);
        foreignObject.setAttributeNS(null, 'y', y);
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);

        foreignObject.appendChild(node);

        return svg;
    };

    var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                return resolve(img);
            };
            img.onerror = reject;

            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };

    /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

    var _cssLineBreak = __webpack_require__(57);

    Object.defineProperty(exports, 'toCodePoints', {
        enumerable: true,
        get: function get() {
            return _cssLineBreak.toCodePoints;
        }
    });
    Object.defineProperty(exports, 'fromCodePoint', {
        enumerable: true,
        get: function get() {
            return _cssLineBreak.fromCodePoint;
        }
    });

    var _NodeContainer = __webpack_require__(4);

    var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

    var _overflowWrap = __webpack_require__(20);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var breakWords = exports.breakWords = function breakWords(str, parent) {
        var breaker = (0, _cssLineBreak.LineBreaker)(str, {
            lineBreak: parent.style.lineBreak,
            wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
        });

        var words = [];
        var bk = void 0;

        while (!(bk = breaker.next()).done) {
            words.push(bk.value.slice());
        }

        return words;
    };

    /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.FontMetrics = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Util = __webpack_require__(5);

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var SAMPLE_TEXT = 'Hidden Text';

        var FontMetrics = exports.FontMetrics = function () {
            function FontMetrics(document) {
                _classCallCheck(this, FontMetrics);

                this._data = {};
                this._document = document;
            }

            _createClass(FontMetrics, [{
                key: '_parseMetrics',
                value: function _parseMetrics(font) {
                    var container = this._document.createElement('div');
                    var img = this._document.createElement('img');
                    var span = this._document.createElement('span');

                    var body = this._document.body;
                    if (!body) {
                        throw new Error(process.env.NODE_ENV !== 'production' ? 'No document found for font metrics' : '');
                    }

                    container.style.visibility = 'hidden';
                    container.style.fontFamily = font.fontFamily;
                    container.style.fontSize = font.fontSize;
                    container.style.margin = '0';
                    container.style.padding = '0';

                    body.appendChild(container);

                    img.src = _Util.SMALL_IMAGE;
                    img.width = 1;
                    img.height = 1;

                    img.style.margin = '0';
                    img.style.padding = '0';
                    img.style.verticalAlign = 'baseline';

                    span.style.fontFamily = font.fontFamily;
                    span.style.fontSize = font.fontSize;
                    span.style.margin = '0';
                    span.style.padding = '0';

                    span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                    container.appendChild(span);
                    container.appendChild(img);
                    var baseline = img.offsetTop - span.offsetTop + 2;

                    container.removeChild(span);
                    container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

                    container.style.lineHeight = 'normal';
                    img.style.verticalAlign = 'super';

                    var middle = img.offsetTop - container.offsetTop + 2;

                    body.removeChild(container);

                    return { baseline: baseline, middle: middle };
                }
            }, {
                key: 'getMetrics',
                value: function getMetrics(font) {
                    var key = font.fontFamily + ' ' + font.fontSize;
                    if (this._data[key] === undefined) {
                        this._data[key] = this._parseMetrics(font);
                    }

                    return this._data[key];
                }
            }]);

            return FontMetrics;
        }();
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Proxy = undefined;

        var _Feature = __webpack_require__(11);

        var _Feature2 = _interopRequireDefault(_Feature);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Proxy = exports.Proxy = function Proxy(src, options) {
            if (!options.proxy) {
                return Promise.reject(process.env.NODE_ENV !== 'production' ? 'No proxy defined' : null);
            }
            var proxy = options.proxy;

            return new Promise(function (resolve, reject) {
                var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
                xhr.onload = function () {
                    if (xhr instanceof XMLHttpRequest) {
                        if (xhr.status === 200) {
                            if (responseType === 'text') {
                                resolve(xhr.response);
                            } else {
                                var reader = new FileReader();
                                // $FlowFixMe
                                reader.addEventListener('load', function () {
                                    return resolve(reader.result);
                                }, false);
                                // $FlowFixMe
                                reader.addEventListener('error', function (e) {
                                    return reject(e);
                                }, false);
                                reader.readAsDataURL(xhr.response);
                            }
                        } else {
                            reject(process.env.NODE_ENV !== 'production' ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : '');
                        }
                    } else {
                        resolve(xhr.responseText);
                    }
                };

                xhr.onerror = reject;
                xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

                if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                    xhr.responseType = responseType;
                }

                if (options.imageTimeout) {
                    var timeout = options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : '');
                    };
                }

                xhr.send();
            });
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 29 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* WEBPACK VAR INJECTION */(function ($) {
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(34);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(36);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_html2canvas__ = __webpack_require__(38);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_html2canvas__);
        __webpack_require__(32);
        __webpack_require__(33);

        var Preloader = __webpack_require__(37);

        var ClipboardJS = __webpack_require__(68);

        var TEXT = [
        //白起
        [
        //9.21
        {
            title: '庙会上，白起买了一把梳子递给你，你……',
            label: ['欢喜', '钟情', '悠远'],
            option: ['“白起……你知道这是什么意思吗？”', '红着脸接过了梳子', '“你以后是要天天帮我梳头嘛~”'],
            answer: ['“……知道。”白起的眼中浮涌着温柔的光斑，也装满了你的影子，他的耳根上爬上了点点红晕，明媚而美好。', '“感情真好呀~”摊主看着你们笑道，你和白起对视了一眼，两个人又同时红了脸，他拉过你的手，握得紧紧的。', '“嗯。”白起温柔地揽过你，“每一天都可以。”']
        },
        //9.22
        {
            title: '逛庙会实在太累了，你想……',
            label: ['赤诚', '温柔', '陪伴'],
            option: ['跟白起说再也不要走了', '拉着白起在长椅上坐一会', '跟白起去小吃店里休息'],
            answer: ['白起笑着蹲下身子把你背了起来：“那我来走。”', '满月温柔地坠着光，清风缓缓，你靠在白起的肩膀上，好像一身的疲惫都消散得干干净净。', '你和白起在小吃店尝了很多风情美食，正好外面放起了烟花，你们坐的位置视野清晰而明朗，两个人开心地笑了。']
        },
        //9.23
        {
            title: '白起去买别的东西，卖桂花酒的店家邀请你来尝尝，你……',
            label: ['心动', '温柔', '钟情'],
            option: ['就尝一点吧', '等白起来了再喝', '听话，不喝'],
            answer: ['酒太过甘甜，白起回来后你傻笑着扑到他怀里，凑在他的嘴边轻轻啄了一下，“打……打上标签了哦。”', '白起回来以后在你的再三保证下允许你小酌了一口，“不能贪杯。”说罢便一口将你剩下的酒饮尽了。', '白起回来的时候，你向白起邀功，他笑着揉了揉你的头：“乖。”']
        },
        //9.24
        {
            title: '心情正好，让你想唱一首歌，你想唱……',
            label: ['守护', '赤诚', '陪伴'],
            option: ['《水调歌头》', '《喜欢你》', '《知足》'],
            answer: ['唱了首中秋的歌，只是在唱到“人有悲欢离合”这句时紧紧握住了你的手。', '你小声地哼了几句，白起便牵起你的手，在你的手上落下了一个轻吻。', '清风过明月，时间的脚步似乎也变得慢了很多，你们的手紧紧相握，你在唱，他在笑。']
        },
        //9.25
        {
            title: '终于到了赏月的地方，可是人太多了，你打算……',
            label: ['悠远', '心动', '温柔'],
            option: ['靠在白起身边', '和白起席地而坐', '望了望白起'],
            answer: ['你依偎在白起身边，“希望以后每一天都像今天一样~”白起的脸贴着你的发，“每一天都会是这样。”', '你和白起在草地上坐下，夕月缀着韶光悠悠，你侧过头看着白起，发现他也在看着你。', '白起笑着揽过你，一个失神你们已经在夜空之上，“这里没人打扰。”']
        },
        //9.26
        {
            title: '你与白起并肩坐在屋顶上赏月，你……',
            label: ['欢喜', '守护', '陪伴'],
            option: ['“明年我们也这样赏月吧！”', '“不知道明年我们会不会也这样……”', '“明年中秋我们可以做些别的~”'],
            answer: ['“不止是明年。”白起的声音淡而温柔，“未来的每一年，都可以。”', '白起轻笑了一声，把你揽到了怀里，“以后每一天我们都会这样，我向你保证。”', '白起没有说话，满是笑意地拉过你的手，“你在身边，做什么都好。”']
        },
        //9.27
        {
            title: '夜晚，游人都散去了，白起似乎是靠着栏杆有些睡熟，看着睡熟的他，你要……',
            label: ['悠远', '赤诚', '心动'],
            option: ['赏花', '赏月', '凑到白起面前'],
            answer: ['中秋佳节，桂花开得灿烂，你静静地看着身边熟睡而毫无防备的侧脸，风轻轻地吹，觉得这胜过千山万水。', '天边明月皎洁，你轻轻抚过白起的侧脸，“愿我如星君如月，夜夜流光相皎洁。”', '你在白起唇边轻啄了一口，太过害羞又立刻转过身装作赏月，错过了那个红透的耳根和换了姿势窝在手臂中的脸。']
        }],
        //周棋洛
        [
        //9.21
        {
            title: '你和周棋洛在岸边，追着人们放的河灯跑，突然一下撞到了周棋洛怀里，你……',
            label: ['钟情', '温柔', '默契'],
            option: ['假装喊痛', '假装起不来', '假装晕倒在地'],
            answer: ['“那就让我吹吹，吹一下就不痛了！”周棋洛说罢便坏笑地凑到你刚被撞的鼻尖前，偷亲了一下。', '“没事吧？哪里撞疼了吗？”周棋洛把你抱在怀里使劲揉你的脑袋。', '“薯片小姐！我这就给你人工呼吸！”周棋洛跪倒在地上，配合你演出。']
        },
        //9.22
        {
            title: '中秋佳节，你为身边人都准备了礼物，可是周棋洛喜欢什么呢？你最后决定……',
            label: ['期待', '专属', '欢喜'],
            option: ['买了熊猫灯笼给他', '准备赏月晚会的门票', '把各色小吃收集起来给他'],
            answer: ['“是因为我的衣服上有熊猫吗？”周棋洛接过灯笼嘟了嘟嘴，“那我下次要把你的照片也印在衣服上！”', '“可是，今天我不想和那么多人一起赏月，我只想和你两个人呆一会。”周棋洛说罢委屈巴巴地拉住你。', '“都是我喜欢吃的！”话音刚落周棋洛就把你抱了个满怀，“当然，最喜欢的是这个。”']
        },
        //9.23
        {
            title: '正在包中秋节的礼物，周棋洛突然来到你身边，捂住了你的眼睛让你猜他是谁，你……',
            label: ['专属', '心动', '期待'],
            option: ['“捣蛋鬼本鬼！”', '“踩着七色彩云的盖世英雄？”', '“哪里来的幼稚鬼？”'],
            answer: ['“我没有捣蛋啊。”周棋洛抽了一条彩带绑在你的手上：“这才是捣蛋~”', '“那这位美丽的仙子要不要跟我走呀？”眼前是朦胧的黑，耳边是低沉而蛊惑的言语，你红着脸只好轻轻点点头。', '“哼既然你这么说……”在你好奇转过身时感受到嘴角处一片柔软，“幼稚鬼来讨要糖果了！”']
        },
        //9.24
        {
            title: '刚买来的月饼眼看着都被周棋洛吃光了，你准备……',
            label: ['钟情', '默契', '欢喜'],
            option: ['从周棋洛嘴边抢过来', '“哼哼你把我的那份都吃掉了！”', '拿出新的一盒'],
            answer: ['周棋洛眯了眯眼，按住了你玩闹的手，脸靠了过来，一时间世界仿佛失了声响。', '周棋洛得意地笑了一下，变出了一个装饰精美的月饼盒，里面放着各种各样精致设计的月饼。', '“嘿嘿我还有一盒，不过不给你~！”周棋洛笑着扑到了你身边，你们开心地厮闹在一起。']
        },
        //9.25
        {
            title: '中秋节的晚上，你跟周棋洛看起了中秋节晚会，你……',
            label: ['温柔', '专属', '陪伴'],
            option: ['“我还以为你也会去参加晚会呢。”', '偷瞄了一眼身边的周棋洛', '“外面月亮是不是已经升起来了啦！”'],
            answer: ['“他们邀请过我，不过我拒绝了。”周棋洛笑了笑，把你揽到怀里，“这种时候当然是要和你在一起啦。”', '身边的少年放松地与你依靠在沙发上，他咧着的笑脸很暖，相握的手很暖，那是唯一只属于你的模样。', '周棋洛拉起你来到阳台上，满月高悬，耳边是他温柔的耳语，“以后无论月是阴晴圆缺，我都会在你身边。”']
        },
        //9.26
        {
            title: '周棋洛也忍不住想要去逛庙会，你打算……',
            label: ['欢喜', '守护', '陪伴'],
            option: ['让周棋洛戴上民俗风格的面具', '让周棋洛化个妆再戴上假头套', '让周棋洛穿上朴素的衣饰'],
            answer: ['你们逛得很开心，后来他在角落里偷偷把面具摘下来透气，河水静涌，圆月悠悠，世间的光亮都聚在了他的眼中。', '周棋洛全副武装，你们看起来像一对普通的情侣，他趁你不注意在你脸上轻啄了一口：“要自然~”', '普通衣物依然暴露了周棋洛的身份，他带着你四处“逃窜”，你们最后躲到了桥洞下，狼狈却也开心。']
        },
        //9.27
        {
            title: '餐馆现在提供中秋大餐，还有特级大厨特制的鲜嫩烤鹅，你……',
            label: ['期待', '陪伴', '默契'],
            option: ['对周棋洛眨了眨眼', '进去大吃一顿', '怕胖，还是算了'],
            answer: ['周棋洛收到了你的电波，拉着你走进了店中，“我知道你也会对这个感兴趣，早就预定好位置了~！”', '“哇……”你们看到烤鹅上桌时，不约而同地惊叹了出来，两个人开心地指着对方笑了，喜提三斤脂肪。', '你和周棋洛对视了一眼，默契而无奈地相视一笑，手牵手走过了餐馆。']
        }],
        //李泽言
        [
        //9.21
        {
            title: '晚上，风有些大，在公园赏月的你穿得太少，被冻得差点感冒，你打算……',
            label: ['呵护', '温柔', '欢喜'],
            option: ['回车里暖暖', '钻进了李泽言的怀里', '靠在李泽言身边'],
            answer: ['你钻回了车里，发现车里竟然暖暖的，“暖气一直在开？”李泽言偏过头，云淡风轻地“嗯”了一声。', '李泽言顺势把你拥得紧紧的，“笨蛋。”', '李泽言轻叹了一声，拉开外套把你裹在怀中，“下次给你包成企鹅再出门。”']
        },
        //9.22
        {
            title: '李泽言许诺你给你一件特别的中秋礼物，你现在特别想要……',
            label: ['心动', '珍藏', '拥有'],
            option: ['华锐公司', '李泽言的嫌弃技能', '想了想，你没说话'],
            answer: ['“胃口倒是不小。”李泽言笑了笑，“像你这种笨蛋还是乖乖呆在另一个位置比较好。”', '“这样就轮到我来嫌弃你喽！”李泽言听后嗤笑了一声，低下头，“嫌弃你也得呆着。”', '你只是安静地靠在李泽言的肩膀上，他也没多说什么，只是收紧了手臂。时间漫淡，仿佛能这样到很久以后。']
        },
        //9.23
        {
            title: '中秋节的晚上，天空上燃起了烟火，你……',
            label: ['温柔', '呵护', '钟情'],
            option: ['叫李泽言一起来看', '看到烟火灭了突然有些伤感', '拍照'],
            answer: ['“烟花而已。”李泽言说完便走了过来，站到了你身边。', '“又在想什么？烟花还没结束。”李泽言捏了捏你的脸，轻轻的吻落在额头上，你心中新的烟花久久回响个不停。', '你的镜头却对准了烟花下的李泽言，背后铺染着霓虹灯火，他的眸中装满了你的身影。']
        },
        //9.24
        {
            title: '你和李泽言提及中秋有什么有趣的事情可以做，你说……',
            label: ['拥有', '珍藏', '欢喜'],
            option: ['奔月', '变玉兔', '整蛊月饼'],
            answer: ['“奔月？”李泽言若有所思地望着你，你发觉手被攥得紧紧的，“除了我身边，你还想奔到哪儿去？”', '“玉兔就算了，龟兔赛跑的那只兔子倒是和你有几分相似。”李泽言笑了笑，把你圈在怀里。', '李泽言吃到了芥末馅月饼，你在一边笑得猖狂，他皱了皱眉头，随即又笑了。']
        },
        //9.25
        {
            title: '听说中秋节对着月亮许愿，愿望就能成功，你想……',
            label: ['心动', '温柔', '陪伴'],
            option: ['默默把关于李泽言的愿望说给月亮听', '“希望李泽言可以听我的话！”', '没有许愿'],
            answer: ['“你不必向月亮许愿。”李泽言说着把你拉到他身边，“我都同意了。”', '“你想让我做什么？”李泽言在你身后淡淡问道，“我很有兴趣听听看。”', '“这次倒是有进步。”李泽言挑了挑眉注视着你，你开心地凑到了他身边，“毕竟愿望都已经实现了嘛~”']
        },
        //9.26
        {
            title: '在庙会的人烟稀少处你遇见了一只蜷缩起来的小黑猫，你……',
            label: ['温柔', '呵护', '陪伴'],
            option: ['喂点吃的给它', '先抱回去，打算明天再送到领养中心', '询问身旁的李泽言'],
            answer: ['小黑猫警戒地偏过了头去。“李泽言它跟你好像喔。”李泽言冷哼着把买好的罐头放在地上，拉着你走开了。', '你把小黑猫抱在怀里，它却一直在你怀里挣扎，李泽言皱着眉头把猫接了过去。', '“很干净，应该是走失了。”李泽言抱着小黑猫，拉过你的手，悠悠转转最后你们找到了小黑猫的主人。']
        },
        //9.27
        {
            title: '你买了个五仁月饼，但李泽言似乎不喜欢那个味道，你……',
            label: ['欢喜', '珍藏', '钟情'],
            option: ['“您要不要了解一下真香定律？”', '自己都吃完', '打算换下一个味道给李泽言试试'],
            answer: ['李泽言没理会你的讨笑，但还是咬了一口：“难吃。”', '“像一只仓鼠。”李泽言笑着戳了戳你的脸：“笨蛋。”', '李泽言皱着眉头尝了好几块月饼：“你还想让我吃多少。”他淡淡地望了你一眼，“我给你做。”']
        }],
        //许墨
        [
        //9.21
        {
            title: '中秋节快到了，你找许墨送月饼，这次你打算出题考考他，你想……',
            label: ['陪伴', '愿景', '着迷'],
            option: ['让他说一首月亮有关的诗', '问他的中秋节愿望是什么', '问他最希望和谁过中秋'],
            answer: ['许墨想了想：“海上生明月，天涯共此时，幸好，我们还不是相隔天涯。”', '“愿望，跟以前的也一样。”他说着牵起你的手，“希望年年岁岁花相似，人也相似。”', '许墨没有说话笑望着你，眼中盈盈月影，却比月色更美更浓稠。']
        },
        //9.22
        {
            title: '你们决定去屋顶看月亮，只是通向屋顶的楼道里没有开灯，眼中漆黑一片，你……',
            label: ['相许', '温柔', '钟情'],
            option: ['准备拉着许墨的袖子', '问许墨在哪', '扶着栏杆'],
            answer: ['许墨直接牵过你的手，将你的手握在掌心，“别怕，我在你身边。”', '“我在这里”，许墨的声音在你的耳旁响起，他在黑暗中揽过你的肩膀，一瞬间赶走了你所有的恐惧。', '你扶着栏杆慢慢往上走，一个踉跄正巧扑进了许墨的怀里，他坚实有力的心跳在耳边响起。']
        },
        //9.23
        {
            title: '在看中秋灯展的时候，你和许墨面前走着一对牵着手的老年夫妻，你……',
            label: ['心动', '着迷', '愿景'],
            option: ['偷瞥了许墨一眼', '一直看着他们', '感慨了一句“真好呀。”'],
            answer: ['你正好撞进了许墨赤满笑意的眼瞳，温暖的笑容在他嘴角便轻轻绽开，他拉过你的手，像是攥紧了最珍贵的宝物。', '此时你感到自己的手被融进了一个温暖的掌心中，你红着脸低下了头，市井喧嚣但是仿佛只有他的轻笑格外清晰。', '许墨没说话，只是笑着牵起你的手，灯火下你们的影子叠在一起被拉得长长的，好像漫到了岁月的终点。']
        },
        //9.24
        {
            title: '中秋灯展的活动有很多，你想先……',
            label: ['相许', '温柔', '陪伴'],
            option: ['放河灯', '吃月饼', '扎兔子灯'],
            answer: ['看着河灯飘远，你有些担忧自己的愿望会不会实现，告诉许墨后，他笑着拉过你的手：“会实现的。”', '你开心地吃月饼，许墨一边笑着，一边将你嘴角的碎屑抹去。', '你将扎好的兔子灯递给了许墨，“把所有的好运都送给你！”他将你搂进怀里笑了笑，“我早已经收到了。”']
        },
        //9.25
        {
            title: '手里的灯笼突然着起了火，你此时……',
            label: ['愿景', '陪伴', '温柔'],
            option: ['将灯笼踩灭', '将灯笼丢到河里', '手足无措'],
            answer: ['你赶紧将灯笼踩灭，火虽然灭了，但灯笼也碎的不成样子，许墨拉过挫败的你，摸了摸你的头，“没关系。”', '灯纸在水上烧了一会便慢慢哑了火浮在了水面上，许墨拽过你的手，“怎么这么不当心？”', '还没有反应过来，河灯已经不在自己的手中了，你注意到许墨的手有点发红，立刻焦急地查看，“没事吧？！”']
        },
        //9.26
        {
            title: '你拿到的灯谜是背诵出一首写中秋节的诗，你打算说……',
            label: ['心动', '欢喜', '着迷'],
            option: ['自挂东南枝', '愿逐月华流照君', '今夜月明人尽望'],
            answer: ['错的太离谱了，你不好意思地把脸埋在许墨怀里，他低沉的笑意烧灼着你的耳朵。', '你得到了一份鼓励的小礼物，你把它送给了许墨。他握着你拿礼物的手，“最好的礼物已经在我手里了。”', '你获得了一份回答正确的礼物，你回过头一眼在人群里看到了充满笑意的许墨，向他开心地跑去。']
        },
        //9.27
        {
            title: '你跟许墨在空地前看月亮，你此时想到了……',
            label: ['相许', '钟情', '陪伴'],
            option: ['“这么圆满的月亮一年只有一次……”', '“我们是不是还要吃团圆饭呀？”', '很久之前与父亲的中秋'],
            answer: ['“等待它再次圆满也会不同的感受。”许墨坐在你的身边，“我们一起等待。”', '“团圆不必单纯用食物表现。”许墨揽过你，圆月朗朗，晚风温柔。', '你勉强地笑了笑，许墨叹了口气，轻轻地靠在你的身边：“小傻瓜，还有我。”']
        }]];

        //恭喜获得所有兑换码0.0
        var CODE = ['fCIincHXxsdx', 'fCIjd4govpBp', 'fCJa9eWxZHwe', 'fCJbNMaFFLRw', 'fCJc4urJ9COv', 'fCJdwhOjpKtV', 'fCJeQoWsjcR0'];

        var SELECT = {
            charactor: {
                index: 0,
                name: 'bq'
            },
            option: 0
        };

        var DATE = new Date().getDate() - 21 >= 0 ? new Date().getDate() - 21 : 0;

        var btn = document.querySelector('.copy-button');

        var step = 0;

        var musicCtrl = void 0;

        //如果屏幕大于内容，将内容居中
        if (window.innerHeight > $('#wrap').height()) {
            $('#wrap').css({ 'left': '50%', 'top': '50%', 'transform': 'translate(-50%, -50%)' });
        }

        var preloader = new Preloader({
            resources: ['https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/anime_bg.jpg', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_bg.jpg', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_man_bq.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_man_cover.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_man_lzy.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_man_xm.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/back_moon_man_zql.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/background.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/bg_city_day.jpg', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/btn_moon_back_h.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/btn_moon_back.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/btn_moon_share_gift.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/btn_moon_share_gift_h.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/copy_button_h.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/copy_button.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/load.gif', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/music_close.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/music.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/page_button.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/page_reverse_title.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/page_share.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/page_title.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/petal.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/share_bg.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/share_info.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/sprite.anime.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/sprite.index.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/star.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/star2.png', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/yuesong.ttf', 'https://blcdnsmall.nikkigames.cn/sdk/poster/evolweb/m/zhongqiu/img/music.m4a'],
            concurrency: 0
        });
        preloader.addCompletionListener(function () {
            $('.index').removeClass('hide');
            setTimeout(function functionName() {
                $('.loading').hide();
                Object(__WEBPACK_IMPORTED_MODULE_1__animation__["default"])($('#wrap').width(), $('#wrap').height());
                init();
            }, 1500);
        });
        preloader.start();

        function init() {
            setTimeout(toggleAudio, 700);
            initEvent();
            initAnime(start);
        }

        function toggleAudio() {
            var audio = document.querySelector('audio');
            if (audio.paused) {
                $('#audio_btn').removeClass('audio-btn-close');
                $('#audio_btn').addClass('audio-btn');
                musicCtrl.play();
                audio.play();
            } else {
                $('#audio_btn').removeClass('audio-btn');
                $('#audio_btn').addClass('audio-btn-close');
                musicCtrl.pause();
                audio.pause();
            }
        }

        function initEvent() {
            btn.addEventListener('mouseleave', clearTooltip);
            btn.addEventListener('blur', clearTooltip);

            //选择男主分支选项后页面变化
            $('.option').tap(handleClickOption);
            $('.option1').tap(function () {
                SELECT.option = 0;
                setAnswer();
            });
            $('.option2').tap(function () {
                SELECT.option = 1;
                setAnswer();
            });
            $('.option3').tap(function () {
                SELECT.option = 2;
                setAnswer();
            });

            //按back键后初始化
            $('.page-back').on('touchstart', function (event) {
                event.preventDefault();
                $('.page-back-h').removeClass('hide');
            });
            $('.page-back').on('touchend', function (event) {
                event.preventDefault();
                $('.page-back-h').addClass('hide');
                handleBack();
            });

            $('.audio-btn').click(toggleAudio);

            $('.code').append('<input type="text" value="' + CODE[DATE] + '" id="code" class="code-content" readonly=\'readonly\'>');

            $('.our-keyword div').html('我和他的中秋关键词');

            $('.share-button').tap(handleClickShare);

            $('.btn-gift').on('touchstart', function (event) {
                event.preventDefault();
                $('.btn-gift-h').removeClass('hide');
            });
            $('.btn-gift').on('touchend', function (event) {
                event.preventDefault();
                handleClickGift();
            });

            $('.share-text').html('与他共度的团圆中秋，每一份光景都是最珍贵的宝物。');

            $('.copy-button').on('touchstart', function () {
                $('.c-button-h').removeClass('hide');
            });
            $('.copy-button').on('touchend', function () {
                $('.c-button-h').addClass('hide');
            });

            $('.share-channel-close').tap(function () {
                $('.share-channel-code').addClass('hide');
            });
        }

        function handleClickGift() {
            $('.btn-gift-h').addClass('hide');
            $('.share-channel-code').removeClass('hide');
            $('.copy-button .code .copy-text').html('复制兑换码:  ');
            var clipboard = new ClipboardJS('.copy-button');
            clipboard.on('success', function (e) {
                e.clearSelection();
                showTooltip(e.trigger, '复制成功！');
            });
            clipboard.on('error', function (e) {
                showTooltip(e.trigger, '复制失败，请长按选中文字复制');
            });
        }

        function initAnime(callback) {
            //初始化label标题栏的位置
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.page-reverse-title',
                rotateY: -90,
                opacity: 0,
                easing: 'linear',
                duration: 300
            });
            musicCtrl = __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.audio-btn',
                rotate: 360,
                easing: 'linear',
                loop: true,
                duration: 4000
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.light1',
                rotate: 40,
                easing: 'linear',
                duration: 2000,
                direction: 'alternate',
                loop: true
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.light2',
                rotate: -35,
                easing: 'linear',
                duration: 2000,
                direction: 'alternate',
                loop: true
            });

            __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.timeline({}).add({
                targets: '.open-mask',
                opacity: 0,
                easing: 'linear',
                offset: 0,
                duration: 2000
            }).add({
                targets: '.city-day',
                opacity: 0,
                easing: 'linear',
                offset: 1000,
                duration: 2000
            }).add({
                targets: '.anime-text1',
                opacity: 1,
                easing: 'linear',
                offset: 2000,
                duration: 800
            }).add({
                targets: '.anime-text2',
                opacity: 1,
                easing: 'linear',
                offset: 3500,
                duration: 800
            }).add({
                targets: '.light1',
                opacity: 1,
                easing: 'linear',
                offset: 3500,
                duration: 2000
            }).add({
                targets: '.light2',
                opacity: 1,
                easing: 'linear',
                offset: 3500,
                duration: 2000
            }).add({
                targets: '.anime-text1',
                opacity: 0,
                easing: 'linear',
                offset: 5500,
                duration: 400
            }).add({
                targets: '.anime-text2',
                opacity: 0,
                easing: 'linear',
                offset: 5500,
                duration: 400
            }).add({
                targets: '.anime-text3',
                opacity: 1,
                easing: 'linear',
                offset: 6000,
                duration: 800
            }).add({
                targets: '.anime-text4',
                opacity: 1,
                easing: 'linear',
                offset: 7500,
                duration: 800
            }).add({
                targets: '.anime-text3',
                opacity: 0,
                easing: 'linear',
                offset: 9500,
                duration: 400
            }).add({
                targets: '.anime-text4',
                opacity: 0,
                easing: 'linear',
                offset: 9500,
                duration: 400
            }).add({
                targets: '.opening',
                translateY: '46.76rem',
                easing: 'easeInQuart',
                offset: 9000,
                duration: 9000
            }).add({
                targets: '.anime-text5',
                opacity: 1,
                easing: 'linear',
                offset: 10000,
                duration: 800
            }).add({
                targets: '.anime-text6',
                opacity: 1,
                easing: 'linear',
                offset: 11500,
                duration: 800
            }).add({
                targets: '.anime-text5',
                opacity: 0,
                easing: 'linear',
                offset: 13500,
                duration: 400
            }).add({
                targets: '.anime-text6',
                opacity: 0,
                easing: 'linear',
                offset: 13500,
                duration: 400
            }).add({
                targets: '.anime-text7',
                opacity: 1,
                easing: 'linear',
                offset: 14000,
                duration: 800
            }).add({
                targets: '.anime-text8',
                opacity: 1,
                easing: 'linear',
                offset: 15500,
                duration: 800
            }).add({
                targets: '.anime-text7',
                opacity: 0,
                easing: 'linear',
                offset: 17500,
                duration: 400
            }).add({
                targets: '.anime-text8',
                opacity: 0,
                easing: 'linear',
                offset: 17500,
                duration: 400
            }).add({
                targets: '.canvas',
                opacity: 1,
                easing: 'linear',
                offset: 18000,
                duration: 1000
            }).add({
                targets: '.index-bq',
                translateY: '-4rem',
                opacity: 1,
                easing: 'easeOutExpo',
                offset: 18000,
                duration: 3000
            }).add({
                targets: '.index-xm',
                translateY: '-4rem',
                opacity: 1,
                easing: 'easeOutExpo',
                offset: 18150,
                duration: 3000
            }).add({
                targets: '.index-zql',
                opacity: 1,
                translateY: '-4rem',
                easing: 'easeOutExpo',
                offset: 18300,
                duration: 3000
            }).add({
                targets: '.index-lzy',
                opacity: 1,
                translateY: '-4rem',
                easing: 'easeOutExpo',
                offset: 18300,
                duration: 3000
            }).add({
                targets: '.anime-text9',
                opacity: 1,
                easing: 'linear',
                offset: 18300,
                duration: 800
            }).add({
                targets: '.index-background',
                opacity: 1,
                easing: 'easeOutExpo',
                offset: 18500,
                duration: 2000
            }).complete = callback;
        }
        //反向动画
        function handleBack() {
            if (step === 0) {
                recoverToIndex();
            } else {
                recoverToOption();
            }
        }

        function recoverToIndex() {
            $('.index').removeClass('hide');
            $('.option-group').removeClass('hide');
            $('.page-title').removeClass('hide');
            $('.page .back-moon-man-bq').css('opacity', '0');
            $('.page .back-moon-man-zql').css('opacity', '0');
            $('.page .back-moon-man-lzy').css('opacity', '0');
            $('.page .back-moon-man-xm').css('opacity', '0');
            $('.page-reverse-title').addClass('hide');
            $('.share').addClass('hide');
            $('.page').css('opacity', '0');
            $('.share-channel-code').addClass('hide');
            $('.share-information').addClass('hide');
        }

        function recoverToOption() {
            $('.option-group').removeClass('hide');
            $('.page-title').removeClass('hide');
            $('.page-reverse-title').addClass('hide');
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.share',
                translateY: '4rem',
                easing: 'linear',
                duration: 300
            }).complete = function () {
                $('.share').addClass('hide');
            };
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.page-reverse-title',
                rotateY: -90,
                opacity: 0,
                easing: 'linear',
                duration: 300
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.page-title',
                rotateY: 0,
                opacity: 1,
                easing: 'linear',
                duration: 300
            });
            step = 0;
        }

        function setOptionText() {
            $('.title div').html(TEXT[SELECT.charactor.index][DATE].title);
            $('.option1').html(TEXT[SELECT.charactor.index][DATE].option[0]);
            $('.option2').html(TEXT[SELECT.charactor.index][DATE].option[1]);
            $('.option3').html(TEXT[SELECT.charactor.index][DATE].option[2]);
        }

        function setAnswer() {
            $('.share-title').html(TEXT[SELECT.charactor.index][DATE].option[SELECT.option]);
            $('.label div').html(TEXT[SELECT.charactor.index][DATE].label[SELECT.option]);
            $('.answer').html(TEXT[SELECT.charactor.index][DATE].answer[SELECT.option]);
            $('.share-button').html('分享你和他的中秋时光');
        }

        function handleClickOption() {
            step = 1;
            $('.option-group').addClass('hide');
            $('.page-title').addClass('hide');
            $('.page-reverse-title').removeClass('hide');
            $('.share').removeClass('hide');
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.share',
                translateY: '-4rem',
                easing: 'linear',
                duration: 300
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.page-title',
                rotateY: 90,
                easing: 'linear',
                duration: 300
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: '.page-reverse-title',
                rotateY: 0,
                opacity: 1,
                easing: 'linear',
                duration: 300
            });
        }

        function handleClickShare() {
            $('.share-info-text').html(TEXT[SELECT.charactor.index][DATE].title);
            $('.share-info-title').html('长按或截图保存你和他的中秋关键词');
            $('.share').addClass('hide');
            $('.share-information').removeClass('hide');
            $('.page-back').addClass('hide');
            drawCanvas('.shot').then(function (canvas) {
                var image = new Image();
                var dataURL = canvas.toDataURL();
                image.src = dataURL;
                image.width = $('#wrap').width();
                image.height = $('#wrap').height();
                image.style.opacity = '0';
                $('.saved_main').removeClass('hide');
                document.querySelector('.saved_main').appendChild(image);

                $('.btn-gift').removeClass('hide');
            });
        }

        function start() {
            $('.index-bq').tap(function () {
                SELECT.charactor.index = 0;
                SELECT.charactor.name = 'bq';
                $('.page').css('opacity', '1');
                $('.page .back-moon-man-bq').css('opacity', '1');
                $('.index').addClass('hide');
                setOptionText();
            });
            $('.index-zql').tap(function () {
                SELECT.charactor.index = 1;
                SELECT.charactor.name = 'zql';
                $('.page').css('opacity', '1');
                $('.page .back-moon-man-zql').css('opacity', '1');
                $('.index').addClass('hide');
                setOptionText();
            });
            $('.index-lzy').tap(function () {
                SELECT.charactor.index = 2;
                SELECT.charactor.name = 'lzy';
                $('.page').css('opacity', '1');
                $('.page .back-moon-man-lzy').css('opacity', '1');
                $('.index').addClass('hide');
                setOptionText();
            });
            $('.index-xm').tap(function () {
                SELECT.charactor.index = 3;
                SELECT.charactor.name = 'xm';
                $('.page').css('opacity', '1');
                $('.page .back-moon-man-xm').css('opacity', '1');
                $('.index').addClass('hide');
                setOptionText();
            });
            __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.timeline({
                loop: true
            }).add({
                targets: '.index-background-star1',
                opacity: 1,
                easing: 'linear',
                rotate: '0.5turn',
                duration: 3000
            }).add({
                targets: '.index-background-star1',
                opacity: 0,
                easing: 'linear',
                duration: 2000
            }).add({
                targets: '.index-background-star2',
                opacity: 1,
                easing: 'linear',
                offset: '-=1600',
                duration: 3000
            }).add({
                targets: '.index-background-star2',
                opacity: 0,
                easing: 'linear',
                duration: 2000
            }).add({
                targets: '.index-background-star3',
                opacity: 1,
                easing: 'linear',
                offset: '-=1600',
                rotate: '0.5turn',
                duration: 3000
            }).add({
                targets: '.index-background-star3',
                opacity: 0,
                easing: 'linear',
                duration: 2000
            }).add({
                targets: '.index-background-star4',
                opacity: 1,
                easing: 'linear',
                offset: '-=1600',
                rotate: '0.5turn',
                duration: 3000
            }).add({
                targets: '.index-background-star4',
                opacity: 0,
                easing: 'linear',
                duration: 2000
            });
        }

        //util func
        function clearTooltip(e) {
            e.currentTarget.setAttribute('class', 'copy-button');
            e.currentTarget.removeAttribute('aria-label');
        }
        function showTooltip(elem, msg) {
            elem.setAttribute('class', 'copy-button tooltipped tooltipped-s tooltipped-no-delay');
            elem.setAttribute('aria-label', msg);
        }
        /**
         * 根据window.devicePixelRatio获取像素比
         */
        function DPR() {
            if (window.devicePixelRatio && window.devicePixelRatio > 1) {
                return window.devicePixelRatio;
            }
            return 1;
        }
        /**
         *  将传入值转为整数
         */
        function parseValue(value) {
            return parseInt(value, 10);
        }
        /**
         * 绘制canvas
         */
        function drawCanvas(selector) {
            // 获取想要转换的 DOM 节点
            var dom = document.querySelector(selector);
            var box = window.getComputedStyle(dom);
            // DOM 节点计算后宽高
            var width = parseValue(box.width);
            var height = parseValue(box.height);
            // 获取像素比
            var scaleBy = DPR();
            // 创建自定义 canvas 元素
            var canvas = document.createElement('canvas');

            // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
            canvas.width = width * scaleBy;
            canvas.height = height * scaleBy;
            // 设定 canvas css宽高为 DOM 节点宽高
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            // 获取画笔
            var context = canvas.getContext('2d');

            // 将所有绘制内容放大像素比倍
            context.scale(scaleBy, scaleBy);

            // 将自定义 canvas 作为配置项传入，开始绘制
            return __WEBPACK_IMPORTED_MODULE_2_html2canvas___default()(dom, { canvas: canvas, logging: false, useCORS: true });
        }

        /* WEBPACK VAR INJECTION */
    }).call(__webpack_exports__, __webpack_require__(12));

    /***/
},,,
/* 30 */
/* 31 */
/* 32 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 33 */
/***/function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function (Zepto) {
        //     Zepto.js
        //     (c) 2010-2016 Thomas Fuchs
        //     Zepto.js may be freely distributed under the MIT license.

        ;(function ($) {
            var touch = {},
                touchTimeout,
                tapTimeout,
                swipeTimeout,
                longTapTimeout,
                longTapDelay = 750,
                gesture;

            function swipeDirection(x1, x2, y1, y2) {
                return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
            }

            function longTap() {
                longTapTimeout = null;
                if (touch.last) {
                    touch.el.trigger('longTap');
                    touch = {};
                }
            }

            function cancelLongTap() {
                if (longTapTimeout) clearTimeout(longTapTimeout);
                longTapTimeout = null;
            }

            function cancelAll() {
                if (touchTimeout) clearTimeout(touchTimeout);
                if (tapTimeout) clearTimeout(tapTimeout);
                if (swipeTimeout) clearTimeout(swipeTimeout);
                if (longTapTimeout) clearTimeout(longTapTimeout);
                touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
                touch = {};
            }

            function isPrimaryTouch(event) {
                return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
            }

            function isPointerEventType(e, type) {
                return e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type;
            }

            $(document).ready(function () {
                var now,
                    delta,
                    deltaX = 0,
                    deltaY = 0,
                    firstTouch,
                    _isPointerType;

                if ('MSGesture' in window) {
                    gesture = new MSGesture();
                    gesture.target = document.body;
                }

                $(document).bind('MSGestureEnd', function (e) {
                    var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
                    if (swipeDirectionFromVelocity) {
                        touch.el.trigger('swipe');
                        touch.el.trigger('swipe' + swipeDirectionFromVelocity);
                    }
                }).on('touchstart MSPointerDown pointerdown', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return;
                    firstTouch = _isPointerType ? e : e.touches[0];
                    if (e.touches && e.touches.length === 1 && touch.x2) {
                        // Clear out touch movement data if we have it sticking around
                        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
                        touch.x2 = undefined;
                        touch.y2 = undefined;
                    }
                    now = Date.now();
                    delta = now - (touch.last || now);
                    touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
                    touchTimeout && clearTimeout(touchTimeout);
                    touch.x1 = firstTouch.pageX;
                    touch.y1 = firstTouch.pageY;
                    if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
                    touch.last = now;
                    longTapTimeout = setTimeout(longTap, longTapDelay);
                    // adds the current touch contact for IE gesture recognition
                    if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
                }).on('touchmove MSPointerMove pointermove', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return;
                    firstTouch = _isPointerType ? e : e.touches[0];
                    cancelLongTap();
                    touch.x2 = firstTouch.pageX;
                    touch.y2 = firstTouch.pageY;

                    deltaX += Math.abs(touch.x1 - touch.x2);
                    deltaY += Math.abs(touch.y1 - touch.y2);
                }).on('touchend MSPointerUp pointerup', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return;
                    cancelLongTap();

                    // swipe
                    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function () {
                        if (touch.el) {
                            touch.el.trigger('swipe');
                            touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                        }
                        touch = {};
                    }, 0);

                    // normal tap
                    else if ('last' in touch)
                            // don't fire tap when delta position changed by more than 30 pixels,
                            // for instance when moving to a point and back to origin
                            if (deltaX < 30 && deltaY < 30) {
                                // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                                // ('tap' fires before 'scroll')
                                tapTimeout = setTimeout(function () {

                                    // trigger universal 'tap' with the option to cancelTouch()
                                    // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                                    var event = $.Event('tap');
                                    event.cancelTouch = cancelAll;
                                    // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap
                                    if (touch.el) touch.el.trigger(event);

                                    // trigger double tap immediately
                                    if (touch.isDoubleTap) {
                                        if (touch.el) touch.el.trigger('doubleTap');
                                        touch = {};
                                    }

                                    // trigger single tap after 250ms of inactivity
                                    else {
                                            touchTimeout = setTimeout(function () {
                                                touchTimeout = null;
                                                if (touch.el) touch.el.trigger('singleTap');
                                                touch = {};
                                            }, 250);
                                        }
                                }, 0);
                            } else {
                                touch = {};
                            }
                    deltaX = deltaY = 0;
                })
                // when the browser window loses focus,
                // for example when a modal dialog is shown,
                // cancel all ongoing events
                .on('touchcancel MSPointerCancel pointercancel', cancelAll);

                // scrolling the window indicates intention of the user
                // to scroll, not tap or swipe, so cancel all ongoing events
                $(window).on('scroll', cancelAll);
            });['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
                $.fn[eventName] = function (callback) {
                    return this.on(eventName, callback);
                };
            });
        })(Zepto);

        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(12));

    /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function (global) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
                                                                                                         2017 Julian Garnier
                                                                                                         Released under the MIT license
                                                                                                         */
        var $jscomp = { scope: {} };$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
            if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");e != Array.prototype && e != Object.prototype && (e[r] = p.value);
        };$jscomp.getGlobal = function (e) {
            return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
        };$jscomp.global = $jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
        $jscomp.initSymbol = function () {
            $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
        };$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
            return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
        };
        $jscomp.initSymbolIterator = function () {
            $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function value() {
                    return $jscomp.arrayIterator(this);
                } });$jscomp.initSymbolIterator = function () {};
        };$jscomp.arrayIterator = function (e) {
            var r = 0;return $jscomp.iteratorPrototype(function () {
                return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
            });
        };
        $jscomp.iteratorPrototype = function (e) {
            $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
                return this;
            };return e;
        };$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
            $jscomp.initSymbolIterator();e instanceof String && (e += "");var p = 0,
                m = { next: function next() {
                    if (p < e.length) {
                        var u = p++;return { value: r(u, e[u]), done: !1 };
                    }m.next = function () {
                        return { done: !0, value: void 0 };
                    };return m.next();
                } };m[Symbol.iterator] = function () {
                return m;
            };return m;
        };
        $jscomp.polyfill = function (e, r, p, m) {
            if (r) {
                p = $jscomp.global;e = e.split(".");for (m = 0; m < e.length - 1; m++) {
                    var u = e[m];u in p || (p[u] = {});p = p[u];
                }e = e[e.length - 1];m = p[e];r = r(m);r != m && null != r && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
            }
        };$jscomp.polyfill("Array.prototype.keys", function (e) {
            return e ? e : function () {
                return $jscomp.iteratorFromArray(this, function (e) {
                    return e;
                });
            };
        }, "es6-impl", "es3");var $jscomp$this = this;
        (function (e, r) {
            true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = r, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = r() : e.anime = r();
        })(this, function () {
            function e(a) {
                if (!h.col(a)) try {
                    return document.querySelectorAll(a);
                } catch (c) {}
            }function r(a, c) {
                for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
                    if (n in a) {
                        var k = a[n];c.call(b, k, n, a) && f.push(k);
                    }
                }return f;
            }function p(a) {
                return a.reduce(function (a, d) {
                    return a.concat(h.arr(d) ? p(d) : d);
                }, []);
            }function m(a) {
                if (h.arr(a)) return a;
                h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
            }function u(a, c) {
                return a.some(function (a) {
                    return a === c;
                });
            }function C(a) {
                var c = {},
                    d;for (d in a) {
                    c[d] = a[d];
                }return c;
            }function D(a, c) {
                var d = C(a),
                    b;for (b in a) {
                    d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
                }return d;
            }function z(a, c) {
                var d = C(a),
                    b;for (b in c) {
                    d[b] = h.und(a[b]) ? c[b] : a[b];
                }return d;
            }function T(a) {
                a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
                    return c + c + d + d + k + k;
                });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                a = parseInt(c[1], 16);var d = parseInt(c[2], 16),
                    c = parseInt(c[3], 16);return "rgba(" + a + "," + d + "," + c + ",1)";
            }function U(a) {
                function c(a, c, b) {
                    0 > b && (b += 1);1 < b && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
                }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100,
                    f = parseInt(d[3]) / 100,
                    d = d[4] || 1;if (0 == b) f = b = a = f;else {
                    var n = .5 > f ? f * (1 + b) : f + b - f * b,
                        k = 2 * f - n,
                        f = c(k, n, a + 1 / 3),
                        b = c(k, n, a);a = c(k, n, a - 1 / 3);
                }return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
            }function y(a) {
                if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
            }function V(a) {
                if (-1 < a.indexOf("translate") || "perspective" === a) return "px";if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
            }function I(a, c) {
                return h.fnc(a) ? a(c.target, c.id, c.total) : a;
            }function E(a, c) {
                if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
            }function J(a, c) {
                if (h.dom(a) && u(W, c)) return "transform";if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";if (h.dom(a) && "transform" !== c && E(a, c)) return "css";if (null != a[c]) return "object";
            }function X(a, c) {
                var d = V(c),
                    d = -1 < c.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
                    f.push(b[1]), n.push(b[2]);
                }a = r(n, function (a, b) {
                    return f[b] === c;
                });return a.length ? a[0] : d;
            }function K(a, c) {
                switch (J(a, c)) {case "transform":
                        return X(a, c);case "css":
                        return E(a, c);case "attribute":
                        return a.getAttribute(c);}return a[c] || 0;
            }function L(a, c) {
                var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
                        return c + a + b;case "-":
                        return c - a + b;case "*":
                        return c * a + b;}
            }function F(a, c) {
                return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
            }function M(a) {
                a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
                    var f = a.getItem(b);0 < b && (c += F(d, f));d = f;
                }return c;
            }function N(a) {
                if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {case "circle":
                        return 2 * Math.PI * a.getAttribute("r");case "rect":
                        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");case "line":
                        return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });case "polyline":
                        return M(a);case "polygon":
                        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));}
            }function Y(a, c) {
                function d(b) {
                    b = void 0 === b ? 0 : b;return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
                }var b = d(),
                    f = d(-1),
                    n = d(1);switch (a.property) {case "x":
                        return b.x;case "y":
                        return b.y;
                    case "angle":
                        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;}
            }function O(a, c) {
                var d = /-?\d*\.?\d+/g,
                    b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
                    if (h.rgb(b)) {
                        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? "rgba(" + f[1] + ",1)" : b;
                    } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
                } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += "";return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
            }function P(a) {
                a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
                    return b.indexOf(a) === d;
                });
            }function Z(a) {
                var c = P(a);return c.map(function (a, b) {
                    return { target: a, id: b, total: c.length };
                });
            }function aa(a, c) {
                var d = C(c);if (h.arr(a)) {
                    var b = a.length;2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
                }return m(a).map(function (a, b) {
                    b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
                }).map(function (a) {
                    return z(a, d);
                });
            }function ba(a, c) {
                var d = {},
                    b;for (b in a) {
                    var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
                        return I(a, c);
                    }), 1 === f.length && (f = f[0]));d[b] = f;
                }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
            }function ca(a) {
                return h.arr(a) ? A.apply(this, a) : Q[a];
            }function da(a, c) {
                var d;return a.tweens.map(function (b) {
                    b = ba(b, c);var f = b.value,
                        e = K(c.target, a.name),
                        k = d ? d.to.original : e,
                        k = h.arr(f) ? f[0] : k,
                        w = L(h.arr(f) ? f[1] : f, k),
                        e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
                });
            }function ea(a, c) {
                return r(p(a.map(function (a) {
                    return c.map(function (b) {
                        var c = J(a.target, b.name);if (c) {
                            var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
                        } else b = void 0;return b;
                    });
                })), function (a) {
                    return !h.und(a);
                });
            }function R(a, c, d, b) {
                var f = "delay" === a;return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
                    return b[a];
                })) : f ? b.delay : d.offset + b.delay + b.duration;
            }function fa(a) {
                var c = D(ga, a),
                    d = D(S, a),
                    b = Z(a.targets),
                    f = [],
                    e = z(c, d),
                    k;for (k in a) {
                    e.hasOwnProperty(k) || "targets" === k || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
                }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R("duration", a, c, d), delay: R("delay", a, c, d) });
            }function q(a) {
                function c() {
                    return window.Promise && new Promise(function (a) {
                        return p = a;
                    });
                }function d(a) {
                    return g.reversed ? g.duration - a : a;
                }function b(a) {
                    for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
                        var e = d[b],
                            k = e.animatable,
                            h = e.tweens,
                            n = h.length - 1,
                            l = h[n];n && (l = r(h, function (b) {
                            return a < b.end;
                        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
                            var x = void 0,
                                x = l.to.numbers[t],
                                q = l.from.numbers[t],
                                x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));n.push(x);
                        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
                            p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
                        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
                    }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
                        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
                    }g.currentTime = a;g.progress = a / g.duration * 100;
                }function f(a) {
                    if (g[a]) g[a](g);
                }function e() {
                    g.remaining && !0 !== g.remaining && g.remaining--;
                }function k(a) {
                    var k = g.duration,
                        n = g.offset,
                        w = n + g.delay,
                        r = g.currentTime,
                        x = g.reversed,
                        q = d(a);if (g.children.length) {
                        var u = g.children,
                            v = u.length;
                        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
                            u[G].seek(q);
                        } else for (; v--;) {
                            u[v].seek(q);
                        }
                    }if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f("update");a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
                }a = void 0 === a ? {} : a;var h,
                    t,
                    l = 0,
                    p = null,
                    m = c(),
                    g = fa(a);g.reset = function () {
                    var a = g.direction,
                        c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = "reverse" === a;g.remaining = "alternate" === a && 1 === c ? 2 : c;b(0);for (a = g.children.length; a--;) {
                        g.children[a].reset();
                    }
                };g.tick = function (a) {
                    h = a;t || (t = h);k((l + h - t) * q.speed);
                };g.seek = function (a) {
                    k(d(a));
                };g.pause = function () {
                    var a = v.indexOf(g);-1 < a && v.splice(a, 1);g.paused = !0;
                };g.play = function () {
                    g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
                };g.reverse = function () {
                    g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
                };g.restart = function () {
                    g.pause();
                    g.reset();g.play();
                };g.finished = m;g.reset();g.autoplay && g.play();return g;
            }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
                S = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
                W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
                H,
                h = { arr: function arr(a) {
                    return Array.isArray(a);
                }, obj: function obj(a) {
                    return -1 < Object.prototype.toString.call(a).indexOf("Object");
                },
                pth: function pth(a) {
                    return h.obj(a) && a.hasOwnProperty("totalLength");
                }, svg: function svg(a) {
                    return a instanceof SVGElement;
                }, dom: function dom(a) {
                    return a.nodeType || h.svg(a);
                }, str: function str(a) {
                    return "string" === typeof a;
                }, fnc: function fnc(a) {
                    return "function" === typeof a;
                }, und: function und(a) {
                    return "undefined" === typeof a;
                }, hex: function hex(a) {
                    return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
                    );
                }, rgb: function rgb(a) {
                    return (/^rgb/.test(a)
                    );
                }, hsl: function hsl(a) {
                    return (/^hsl/.test(a)
                    );
                }, col: function col(a) {
                    return h.hex(a) || h.rgb(a) || h.hsl(a);
                } },
                A = function () {
                function a(a, d, b) {
                    return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
                }return function (c, d, b, f) {
                    if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
                        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
                            e[k] = a(.1 * k, c, b);
                        }return function (k) {
                            if (c === d && b === f) return k;if (0 === k) return 0;if (1 === k) return 1;for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
                                h += .1;
                            }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
                                n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (.001 <= n) {
                                for (h = 0; 4 > h; ++h) {
                                    n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (0 === n) break;var m = a(l, c, b) - k,
                                        l = l - m / n;
                                }k = l;
                            } else if (0 === n) k = l;else {
                                var l = h,
                                    h = h + .1,
                                    g = 0;do {
                                    m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
                                } while (1e-7 < Math.abs(n) && 10 > ++g);k = m;
                            }return a(k, d, f);
                        };
                    }
                };
            }(),
                Q = function () {
                function a(a, b) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
                }var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                    d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
                        return 1 - a(1 - b, c);
                    }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
                        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
                    }] },
                    b = { linear: A(.25, .25, .75, .75) },
                    f = {},
                    e;for (e in d) {
                    f.type = e, d[f.type].forEach(function (a) {
                        return function (d, f) {
                            b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
                        };
                    }(f)), f = { type: f.type };
                }return b;
            }(),
                ha = { css: function css(a, c, d) {
                    return a.style[c] = d;
                }, attribute: function attribute(a, c, d) {
                    return a.setAttribute(c, d);
                }, object: function object(a, c, d) {
                    return a[c] = d;
                }, transform: function transform(a, c, d, b, f) {
                    b[f] || (b[f] = []);b[f].push(c + "(" + d + ")");
                } },
                v = [],
                B = 0,
                ia = function () {
                function a() {
                    B = requestAnimationFrame(c);
                }function c(c) {
                    var b = v.length;if (b) {
                        for (var d = 0; d < b;) {
                            v[d] && v[d].tick(c), d++;
                        }a();
                    } else cancelAnimationFrame(B), B = 0;
                }return a;
            }();q.version = "2.2.0";q.speed = 1;q.running = v;q.remove = function (a) {
                a = P(a);for (var c = v.length; c--;) {
                    for (var d = v[c], b = d.animations, f = b.length; f--;) {
                        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
                    }
                }
            };q.getValue = K;q.path = function (a, c) {
                var d = h.str(a) ? e(a)[0] : a,
                    b = c || 100;return function (a) {
                    return { el: d, property: a, totalLength: N(d) * (b / 100) };
                };
            };q.setDashoffset = function (a) {
                var c = N(a);a.setAttribute("stroke-dasharray", c);return c;
            };q.bezier = A;q.easings = Q;q.timeline = function (a) {
                var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
                    c.children.forEach(function (a) {
                        a.began = !0;a.completed = !0;
                    });m(d).forEach(function (b) {
                        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
                    });c.seek(0);c.reset();c.autoplay && c.restart();return c;
                };return c;
            };q.random = function (a, c) {
                return Math.floor(Math.random() * (c - a + 1)) + a;
            };return q;
        });
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(35));

    /***/
},
/* 35 */
/***/function (module, exports) {

    var g;

    // This works in non-strict mode
    g = function () {
        return this;
    }();

    try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
    }

    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}

    module.exports = g;

    /***/
},,
/* 36 */
/* 37 */
/***/function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
        if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
            // CMD
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.Preloader = factory();
        }
    })(this, function () {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        var assign = Object.assign || function (target) {
            'use strict';

            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
        var body = document.body || document.getElementsByTagName('body')[0];

        var Preloader = function Preloader(options) {
            this.opts = assign({
                resources: [],
                concurrency: 0,
                perMinTime: 0,
                attr: 'data-preload',
                onProgress: null,
                onCompletion: null
            }, options);

            var preloads = document.querySelectorAll('[' + this.opts.attr + ']');
            for (var i = 0; i < preloads.length; i++) {
                var preload = preloads[i];
                if (preload.src) this.opts.resources.push(preload.src);
            }

            this.length = this.opts.resources.length;
            this.completedCount = 0;
            this.loadingIndex = 0;
            this.resourceMap = {};
            this.div = document.createElement('div');

            var style = this.div.style;
            style.visibility = 'hidden';
            style.position = 'absolute';
            style.width = style.height = '10px';
            style.overflow = 'hidden';
            style.transform = style.msTransform = style.webkitTransform = style.oTransform = 'translate(-10px, -10px)';
            body.appendChild(this.div);

            this.done = function (resource, instance) {
                if (this.length === 0) return this.onCompletion && this.onCompletion(0);

                this.completedCount += 1;
                this.resourceMap[resource] = instance;

                this.onProgress && this.onProgress(this.completedCount, this.length, resource);
                if (this.completedCount >= this.length) {
                    this.onCompletion && this.onCompletion(this.length);
                } else if (this.opts.concurrency > 0) {
                    this.loader();
                }
            };

            this.loader = function () {
                if (this.loadingIndex >= this.length) return;
                var resource = this.opts.resources[this.loadingIndex];
                this.loadingIndex++;

                if (~['mp3', 'ogg', 'wav'].indexOf(getType(resource))) {
                    this.audioLoader(resource);
                } else {
                    this.imageLoader(resource);
                }
            };

            this.imageLoader = function (resource) {
                var self = this;

                var image = new Image();
                self.div.appendChild(image);
                var startTime = new Date();
                image.onload = image.onerror = function () {
                    var duration = new Date() - startTime;
                    var diff = self.opts.perMinTime - duration;

                    diff > 0 ? setTimeout(function () {
                        self.done(resource, image);
                    }, diff) : self.done(resource, image);
                };
                image.src = resource;
            };
            this.audioLoader = function (resource) {
                var self = this;

                var audio = new Audio();
                self.div.appendChild(audio);
                var startTime = new Date();
                var handler = function handler() {
                    var duration = new Date() - startTime;
                    var diff = self.opts.perMinTime - duration;

                    diff > 0 ? setTimeout(function () {
                        self.done(resource, audio);
                    }, diff) : self.done(resource, audio);
                };
                audio.addEventListener('canplaythrough', handler);
                audio.addEventListener('error', handler);
                audio.preload = 'auto';
                audio.src = resource;
                audio.load();
            };
        };

        /**
         * add progress event callback
         */
        Preloader.prototype.addProgressListener = function (fn) {
            this.onProgress = fn;
        };

        /**
         * add completed event callback
         */
        Preloader.prototype.addCompletionListener = function (fn) {
            this.onCompletion = fn;
        };

        /**
         * get resource instance
         */
        Preloader.prototype.get = function (resource) {
            return this.resourceMap[resource];
        };

        /**
         * load begin
         */
        Preloader.prototype.start = function () {
            if (!this.length) return this.done(null, null);

            if (this.opts.concurrency === 0) {
                while (this.loadingIndex < this.length) {
                    this.loader();
                }
            } else {
                for (var i = 0; i < this.opts.concurrency; i++) {
                    this.loader();
                }
            }
        };

        function getType(resource) {
            var parser = document.createElement('a');
            parser.href = resource;
            return parser.pathname.split('.').pop().toLowerCase();
        }

        return Preloader;
    });

    /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }return target;
        };

        var _CanvasRenderer = __webpack_require__(17);

        var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

        var _Logger = __webpack_require__(18);

        var _Logger2 = _interopRequireDefault(_Logger);

        var _Window = __webpack_require__(39);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var html2canvas = function html2canvas(element, conf) {
            var config = conf || {};
            var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
            logger.log('html2canvas ' + "$npm_package_version");

            if (process.env.NODE_ENV !== 'production' && typeof config.onrendered === 'function') {
                logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
            }

            var ownerDocument = element.ownerDocument;
            if (!ownerDocument) {
                return Promise.reject('Provided element is not within a Document');
            }
            var defaultView = ownerDocument.defaultView;

            var defaultOptions = {
                async: true,
                allowTaint: false,
                backgroundColor: '#ffffff',
                imageTimeout: 15000,
                logging: true,
                proxy: null,
                removeContainer: true,
                foreignObjectRendering: false,
                scale: defaultView.devicePixelRatio || 1,
                target: new _CanvasRenderer2.default(config.canvas),
                useCORS: false,
                windowWidth: defaultView.innerWidth,
                windowHeight: defaultView.innerHeight,
                scrollX: defaultView.pageXOffset,
                scrollY: defaultView.pageYOffset
            };

            var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

            if (process.env.NODE_ENV !== 'production') {
                return result.catch(function (e) {
                    logger.error(e);
                    throw e;
                });
            }
            return result;
        };

        html2canvas.CanvasRenderer = _CanvasRenderer2.default;

        module.exports = html2canvas;
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.renderElement = undefined;

        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;_e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }return _arr;
            }return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();

        var _Logger = __webpack_require__(18);

        var _Logger2 = _interopRequireDefault(_Logger);

        var _NodeParser = __webpack_require__(40);

        var _Renderer = __webpack_require__(62);

        var _Renderer2 = _interopRequireDefault(_Renderer);

        var _ForeignObjectRenderer = __webpack_require__(25);

        var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

        var _Feature = __webpack_require__(11);

        var _Feature2 = _interopRequireDefault(_Feature);

        var _Bounds = __webpack_require__(3);

        var _Clone = __webpack_require__(65);

        var _Font = __webpack_require__(27);

        var _Color = __webpack_require__(1);

        var _Color2 = _interopRequireDefault(_Color);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var renderElement = exports.renderElement = function renderElement(element, options, logger) {
            var ownerDocument = element.ownerDocument;

            var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

            // http://www.w3.org/TR/css3-background/#special-backgrounds
            var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
            var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

            var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

            return (options.foreignObjectRendering ? // $FlowFixMe
            _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
                return supportForeignObject ? function (cloner) {
                    if (process.env.NODE_ENV !== 'production') {
                        logger.log('Document cloned, using foreignObject rendering');
                    }

                    return cloner.inlineFonts(ownerDocument).then(function () {
                        return cloner.resourceLoader.ready();
                    }).then(function () {
                        var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                        var defaultView = ownerDocument.defaultView;
                        var scrollX = defaultView.pageXOffset;
                        var scrollY = defaultView.pageYOffset;

                        var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                        var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                            width = _ref.width,
                            height = _ref.height,
                            left = _ref.left,
                            top = _ref.top;

                        return renderer.render({
                            backgroundColor: backgroundColor,
                            logger: logger,
                            scale: options.scale,
                            x: typeof options.x === 'number' ? options.x : left,
                            y: typeof options.y === 'number' ? options.y : top,
                            width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                            height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                            windowWidth: options.windowWidth,
                            windowHeight: options.windowHeight,
                            scrollX: options.scrollX,
                            scrollY: options.scrollY
                        });
                    });
                }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 3),
                        container = _ref3[0],
                        clonedElement = _ref3[1],
                        resourceLoader = _ref3[2];

                    if (process.env.NODE_ENV !== 'production') {
                        logger.log('Document cloned, using computed rendering');
                    }

                    var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
                    var clonedDocument = clonedElement.ownerDocument;

                    if (backgroundColor === stack.container.style.background.backgroundColor) {
                        stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
                    }

                    return resourceLoader.ready().then(function (imageStore) {
                        var fontMetrics = new _Font.FontMetrics(clonedDocument);
                        if (process.env.NODE_ENV !== 'production') {
                            logger.log('Starting renderer');
                        }

                        var defaultView = clonedDocument.defaultView;
                        var scrollX = defaultView.pageXOffset;
                        var scrollY = defaultView.pageYOffset;

                        var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                        var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                            width = _ref4.width,
                            height = _ref4.height,
                            left = _ref4.left,
                            top = _ref4.top;

                        var renderOptions = {
                            backgroundColor: backgroundColor,
                            fontMetrics: fontMetrics,
                            imageStore: imageStore,
                            logger: logger,
                            scale: options.scale,
                            x: typeof options.x === 'number' ? options.x : left,
                            y: typeof options.y === 'number' ? options.y : top,
                            width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                            height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                        };

                        if (Array.isArray(options.target)) {
                            return Promise.all(options.target.map(function (target) {
                                var renderer = new _Renderer2.default(target, renderOptions);
                                return renderer.render(stack);
                            }));
                        } else {
                            var renderer = new _Renderer2.default(options.target, renderOptions);
                            var canvas = renderer.render(stack);
                            if (options.removeContainer === true) {
                                if (container.parentNode) {
                                    container.parentNode.removeChild(container);
                                } else if (process.env.NODE_ENV !== 'production') {
                                    logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                                }
                            }

                            return canvas;
                        }
                    });
                });
            });
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.NodeParser = undefined;

        var _StackingContext = __webpack_require__(41);

        var _StackingContext2 = _interopRequireDefault(_StackingContext);

        var _NodeContainer = __webpack_require__(4);

        var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

        var _TextContainer = __webpack_require__(10);

        var _TextContainer2 = _interopRequireDefault(_TextContainer);

        var _Input = __webpack_require__(23);

        var _ListItem = __webpack_require__(16);

        var _listStyle = __webpack_require__(9);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
            if (process.env.NODE_ENV !== 'production') {
                logger.log('Starting node parsing');
            }

            var index = 0;

            var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
            var stack = new _StackingContext2.default(container, null, true);

            parseNodeTree(node, container, stack, resourceLoader, index);

            if (process.env.NODE_ENV !== 'production') {
                logger.log('Finished parsing node tree');
            }

            return stack;
        };

        var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

        var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
            if (process.env.NODE_ENV !== 'production' && index > 50000) {
                throw new Error('Recursion error while parsing node tree');
            }

            for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
                nextNode = childNode.nextSibling;
                var defaultView = childNode.ownerDocument.defaultView;
                if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
                    if (childNode.data.trim().length > 0) {
                        parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
                    }
                } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
                    if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                        var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                        if (container.isVisible()) {
                            if (childNode.tagName === 'INPUT') {
                                // $FlowFixMe
                                (0, _Input.inlineInputElement)(childNode, container);
                            } else if (childNode.tagName === 'TEXTAREA') {
                                // $FlowFixMe
                                (0, _Input.inlineTextAreaElement)(childNode, container);
                            } else if (childNode.tagName === 'SELECT') {
                                // $FlowFixMe
                                (0, _Input.inlineSelectElement)(childNode, container);
                            } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                                (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                            }

                            var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                            var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                            if (treatAsRealStackingContext || createsStackingContext(container)) {
                                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                                // which actually create a new stacking context should be considered part of the parent stacking context
                                var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                                var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                                parentStack.contexts.push(childStack);
                                if (SHOULD_TRAVERSE_CHILDREN) {
                                    parseNodeTree(childNode, container, childStack, resourceLoader, index);
                                }
                            } else {
                                stack.children.push(container);
                                if (SHOULD_TRAVERSE_CHILDREN) {
                                    parseNodeTree(childNode, container, stack, resourceLoader, index);
                                }
                            }
                        }
                    }
                } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
                    var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                    var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
                    if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                        _parentStack.contexts.push(_childStack);
                    } else {
                        stack.children.push(_container);
                    }
                }
            }
        };

        var createsRealStackingContext = function createsRealStackingContext(container, node) {
            return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
        };

        var createsStackingContext = function createsStackingContext(container) {
            return container.isPositioned() || container.isFloating();
        };

        var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
            return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _NodeContainer = __webpack_require__(4);

    var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

    var _position = __webpack_require__(21);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var StackingContext = function () {
        function StackingContext(container, parent, treatAsRealStackingContext) {
            _classCallCheck(this, StackingContext);

            this.container = container;
            this.parent = parent;
            this.contexts = [];
            this.children = [];
            this.treatAsRealStackingContext = treatAsRealStackingContext;
        }

        _createClass(StackingContext, [{
            key: 'getOpacity',
            value: function getOpacity() {
                return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
            }
        }, {
            key: 'getRealParentStackingContext',
            value: function getRealParentStackingContext() {
                return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
            }
        }]);

        return StackingContext;
    }();

    exports.default = StackingContext;

    /***/
},
/* 42 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Size = function Size(width, height) {
        _classCallCheck(this, Size);

        this.width = width;
        this.height = height;
    };

    exports.default = Size;

    /***/
},
/* 43 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Path = __webpack_require__(7);

    var _Vector = __webpack_require__(8);

    var _Vector2 = _interopRequireDefault(_Vector);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var lerp = function lerp(a, b, t) {
        return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };

    var BezierCurve = function () {
        function BezierCurve(start, startControl, endControl, end) {
            _classCallCheck(this, BezierCurve);

            this.type = _Path.PATH.BEZIER_CURVE;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }

        _createClass(BezierCurve, [{
            key: 'subdivide',
            value: function subdivide(t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t);
                var bc = lerp(this.startControl, this.endControl, t);
                var cd = lerp(this.endControl, this.end, t);
                var abbc = lerp(ab, bc, t);
                var bccd = lerp(bc, cd, t);
                var dest = lerp(abbc, bccd, t);
                return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
            }
        }, {
            key: 'reverse',
            value: function reverse() {
                return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
            }
        }]);

        return BezierCurve;
    }();

    exports.default = BezierCurve;

    /***/
},
/* 44 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBorderRadius = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

    var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
        return SIDES.map(function (side) {
            var value = style.getPropertyValue('border-' + side + '-radius');

            var _value$split$map = value.split(' ').map(_Length2.default.create),
                _value$split$map2 = _slicedToArray(_value$split$map, 2),
                horizontal = _value$split$map2[0],
                vertical = _value$split$map2[1];

            return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
        });
    };

    /***/
},
/* 45 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var DISPLAY = exports.DISPLAY = {
        NONE: 1 << 0,
        BLOCK: 1 << 1,
        INLINE: 1 << 2,
        RUN_IN: 1 << 3,
        FLOW: 1 << 4,
        FLOW_ROOT: 1 << 5,
        TABLE: 1 << 6,
        FLEX: 1 << 7,
        GRID: 1 << 8,
        RUBY: 1 << 9,
        SUBGRID: 1 << 10,
        LIST_ITEM: 1 << 11,
        TABLE_ROW_GROUP: 1 << 12,
        TABLE_HEADER_GROUP: 1 << 13,
        TABLE_FOOTER_GROUP: 1 << 14,
        TABLE_ROW: 1 << 15,
        TABLE_CELL: 1 << 16,
        TABLE_COLUMN_GROUP: 1 << 17,
        TABLE_COLUMN: 1 << 18,
        TABLE_CAPTION: 1 << 19,
        RUBY_BASE: 1 << 20,
        RUBY_TEXT: 1 << 21,
        RUBY_BASE_CONTAINER: 1 << 22,
        RUBY_TEXT_CONTAINER: 1 << 23,
        CONTENTS: 1 << 24,
        INLINE_BLOCK: 1 << 25,
        INLINE_LIST_ITEM: 1 << 26,
        INLINE_TABLE: 1 << 27,
        INLINE_FLEX: 1 << 28,
        INLINE_GRID: 1 << 29
    };

    var parseDisplayValue = function parseDisplayValue(display) {
        switch (display) {
            case 'block':
                return DISPLAY.BLOCK;
            case 'inline':
                return DISPLAY.INLINE;
            case 'run-in':
                return DISPLAY.RUN_IN;
            case 'flow':
                return DISPLAY.FLOW;
            case 'flow-root':
                return DISPLAY.FLOW_ROOT;
            case 'table':
                return DISPLAY.TABLE;
            case 'flex':
                return DISPLAY.FLEX;
            case 'grid':
                return DISPLAY.GRID;
            case 'ruby':
                return DISPLAY.RUBY;
            case 'subgrid':
                return DISPLAY.SUBGRID;
            case 'list-item':
                return DISPLAY.LIST_ITEM;
            case 'table-row-group':
                return DISPLAY.TABLE_ROW_GROUP;
            case 'table-header-group':
                return DISPLAY.TABLE_HEADER_GROUP;
            case 'table-footer-group':
                return DISPLAY.TABLE_FOOTER_GROUP;
            case 'table-row':
                return DISPLAY.TABLE_ROW;
            case 'table-cell':
                return DISPLAY.TABLE_CELL;
            case 'table-column-group':
                return DISPLAY.TABLE_COLUMN_GROUP;
            case 'table-column':
                return DISPLAY.TABLE_COLUMN;
            case 'table-caption':
                return DISPLAY.TABLE_CAPTION;
            case 'ruby-base':
                return DISPLAY.RUBY_BASE;
            case 'ruby-text':
                return DISPLAY.RUBY_TEXT;
            case 'ruby-base-container':
                return DISPLAY.RUBY_BASE_CONTAINER;
            case 'ruby-text-container':
                return DISPLAY.RUBY_TEXT_CONTAINER;
            case 'contents':
                return DISPLAY.CONTENTS;
            case 'inline-block':
                return DISPLAY.INLINE_BLOCK;
            case 'inline-list-item':
                return DISPLAY.INLINE_LIST_ITEM;
            case 'inline-table':
                return DISPLAY.INLINE_TABLE;
            case 'inline-flex':
                return DISPLAY.INLINE_FLEX;
            case 'inline-grid':
                return DISPLAY.INLINE_GRID;
        }

        return DISPLAY.NONE;
    };

    var setDisplayBit = function setDisplayBit(bit, display) {
        return bit | parseDisplayValue(display);
    };

    var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
        return display.split(' ').reduce(setDisplayBit, 0);
    };

    /***/
},
/* 46 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var FLOAT = exports.FLOAT = {
        NONE: 0,
        LEFT: 1,
        RIGHT: 2,
        INLINE_START: 3,
        INLINE_END: 4
    };

    var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
        switch (float) {
            case 'left':
                return FLOAT.LEFT;
            case 'right':
                return FLOAT.RIGHT;
            case 'inline-start':
                return FLOAT.INLINE_START;
            case 'inline-end':
                return FLOAT.INLINE_END;
        }
        return FLOAT.NONE;
    };

    /***/
},
/* 47 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var parseFontWeight = function parseFontWeight(weight) {
        switch (weight) {
            case 'normal':
                return 400;
            case 'bold':
                return 700;
        }

        var value = parseInt(weight, 10);
        return isNaN(value) ? 400 : value;
    };

    var parseFont = exports.parseFont = function parseFont(style) {
        var fontFamily = style.fontFamily;
        var fontSize = style.fontSize;
        var fontStyle = style.fontStyle;
        var fontVariant = style.fontVariant;
        var fontWeight = parseFontWeight(style.fontWeight);

        return {
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontStyle: fontStyle,
            fontVariant: fontVariant,
            fontWeight: fontWeight
        };
    };

    /***/
},
/* 48 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
        if (letterSpacing === 'normal') {
            return 0;
        }
        var value = parseFloat(letterSpacing);
        return isNaN(value) ? 0 : value;
    };

    /***/
},
/* 49 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var LINE_BREAK = exports.LINE_BREAK = {
        NORMAL: 'normal',
        STRICT: 'strict'
    };

    var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
        switch (wordBreak) {
            case 'strict':
                return LINE_BREAK.STRICT;
            case 'normal':
            default:
                return LINE_BREAK.NORMAL;
        }
    };

    /***/
},
/* 50 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseMargin = undefined;

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var SIDES = ['top', 'right', 'bottom', 'left'];

    var parseMargin = exports.parseMargin = function parseMargin(style) {
        return SIDES.map(function (side) {
            return new _Length2.default(style.getPropertyValue('margin-' + side));
        });
    };

    /***/
},
/* 51 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var OVERFLOW = exports.OVERFLOW = {
        VISIBLE: 0,
        HIDDEN: 1,
        SCROLL: 2,
        AUTO: 3
    };

    var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
        switch (overflow) {
            case 'hidden':
                return OVERFLOW.HIDDEN;
            case 'scroll':
                return OVERFLOW.SCROLL;
            case 'auto':
                return OVERFLOW.AUTO;
            case 'visible':
            default:
                return OVERFLOW.VISIBLE;
        }
    };

    /***/
},
/* 52 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextShadow = undefined;

    var _Color = __webpack_require__(1);

    var _Color2 = _interopRequireDefault(_Color);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var NUMBER = /^([+-]|\d|\.)$/i;

    var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
        if (textShadow === 'none' || typeof textShadow !== 'string') {
            return null;
        }

        var currentValue = '';
        var isLength = false;
        var values = [];
        var shadows = [];
        var numParens = 0;
        var color = null;

        var appendValue = function appendValue() {
            if (currentValue.length) {
                if (isLength) {
                    values.push(parseFloat(currentValue));
                } else {
                    color = new _Color2.default(currentValue);
                }
            }
            isLength = false;
            currentValue = '';
        };

        var appendShadow = function appendShadow() {
            if (values.length && color !== null) {
                shadows.push({
                    color: color,
                    offsetX: values[0] || 0,
                    offsetY: values[1] || 0,
                    blur: values[2] || 0
                });
            }
            values.splice(0, values.length);
            color = null;
        };

        for (var i = 0; i < textShadow.length; i++) {
            var c = textShadow[i];
            switch (c) {
                case '(':
                    currentValue += c;
                    numParens++;
                    break;
                case ')':
                    currentValue += c;
                    numParens--;
                    break;
                case ',':
                    if (numParens === 0) {
                        appendValue();
                        appendShadow();
                    } else {
                        currentValue += c;
                    }
                    break;
                case ' ':
                    if (numParens === 0) {
                        appendValue();
                    } else {
                        currentValue += c;
                    }
                    break;
                default:
                    if (currentValue.length === 0 && NUMBER.test(c)) {
                        isLength = true;
                    }
                    currentValue += c;
            }
        }

        appendValue();
        appendShadow();

        if (shadows.length === 0) {
            return null;
        }

        return shadows;
    };

    /***/
},
/* 53 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTransform = undefined;

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var toFloat = function toFloat(s) {
        return parseFloat(s.trim());
    };

    var MATRIX = /(matrix|matrix3d)\((.+)\)/;

    var parseTransform = exports.parseTransform = function parseTransform(style) {
        var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
        // $FlowFixMe
        style.msTransform ||
        // $FlowFixMe
        style.oTransform);
        if (transform === null) {
            return null;
        }

        return {
            transform: transform,
            transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
            // $FlowFixMe
            style.msTransformOrigin ||
            // $FlowFixMe
            style.oTransformOrigin)
        };
    };

    // $FlowFixMe
    var parseTransformOrigin = function parseTransformOrigin(origin) {
        if (typeof origin !== 'string') {
            var v = new _Length2.default('0');
            return [v, v];
        }
        var values = origin.split(' ').map(_Length2.default.create);
        return [values[0], values[1]];
    };

    // $FlowFixMe
    var parseTransformMatrix = function parseTransformMatrix(transform) {
        if (transform === 'none' || typeof transform !== 'string') {
            return null;
        }

        var match = transform.match(MATRIX);
        if (match) {
            if (match[1] === 'matrix') {
                var matrix = match[2].split(',').map(toFloat);
                return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
            } else {
                var matrix3d = match[2].split(',').map(toFloat);
                return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
            }
        }
        return null;
    };

    /***/
},
/* 54 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var VISIBILITY = exports.VISIBILITY = {
        VISIBLE: 0,
        HIDDEN: 1,
        COLLAPSE: 2
    };

    var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
        switch (visibility) {
            case 'hidden':
                return VISIBILITY.HIDDEN;
            case 'collapse':
                return VISIBILITY.COLLAPSE;
            case 'visible':
            default:
                return VISIBILITY.VISIBLE;
        }
    };

    /***/
},
/* 55 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var WORD_BREAK = exports.WORD_BREAK = {
        NORMAL: 'normal',
        BREAK_ALL: 'break-all',
        KEEP_ALL: 'keep-all'
    };

    var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
        switch (wordBreak) {
            case 'break-all':
                return WORD_BREAK.BREAK_ALL;
            case 'keep-all':
                return WORD_BREAK.KEEP_ALL;
            case 'normal':
            default:
                return WORD_BREAK.NORMAL;
        }
    };

    /***/
},
/* 56 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
        var auto = zIndex === 'auto';
        return {
            auto: auto,
            order: auto ? 0 : parseInt(zIndex, 10)
        };
    };

    /***/
},
/* 57 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _Util = __webpack_require__(15);

    Object.defineProperty(exports, 'toCodePoints', {
        enumerable: true,
        get: function get() {
            return _Util.toCodePoints;
        }
    });
    Object.defineProperty(exports, 'fromCodePoint', {
        enumerable: true,
        get: function get() {
            return _Util.fromCodePoint;
        }
    });

    var _LineBreak = __webpack_require__(58);

    Object.defineProperty(exports, 'LineBreaker', {
        enumerable: true,
        get: function get() {
            return _LineBreak.LineBreaker;
        }
    });

    /***/
},
/* 58 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _Trie = __webpack_require__(59);

    var _linebreakTrie = __webpack_require__(60);

    var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

    var _Util = __webpack_require__(15);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR = 2; //  Cause a line break (after), except between CR and LF
    var LF = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var SG = 6; //  Do not occur in well-formed text
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

    var classes = exports.classes = {
        BK: BK,
        CR: CR,
        LF: LF,
        CM: CM,
        NL: NL,
        SG: SG,
        WJ: WJ,
        ZW: ZW,
        GL: GL,
        SP: SP,
        ZWJ: ZWJ,
        B2: B2,
        BA: BA,
        BB: BB,
        HY: HY,
        CB: CB,
        CL: CL,
        CP: CP,
        EX: EX,
        IN: IN,
        NS: NS,
        OP: OP,
        QU: QU,
        IS: IS,
        NU: NU,
        PO: PO,
        PR: PR,
        SY: SY,
        AI: AI,
        AL: AL,
        CJ: CJ,
        EB: EB,
        EM: EM,
        H2: H2,
        H3: H3,
        HL: HL,
        ID: ID,
        JL: JL,
        JV: JV,
        JT: JT,
        RI: RI,
        SA: SA,
        XX: XX
    };

    var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
    var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
    var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

    var ALPHABETICS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR, LF, NL];
    var SPACE = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var HYPHEN = [HY, BA];

    var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
        var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

        var types = [];
        var indicies = [];
        var categories = [];
        codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            } else {
                categories.push(false);
            }

            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    indicies.push(index);
                    return types.push(CB);
                }
            }

            if (classType === CM || classType === ZWJ) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indicies.push(index);
                    return types.push(AL);
                }

                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indicies.push(indicies[index - 1]);
                    return types.push(prev);
                }
                indicies.push(index);
                return types.push(AL);
            }

            indicies.push(index);

            if (classType === CJ) {
                return types.push(lineBreak === 'strict' ? NS : ID);
            }

            if (classType === SA) {
                return types.push(AL);
            }

            if (classType === AI) {
                return types.push(AL);
            }

            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                    return types.push(ID);
                } else {
                    return types.push(AL);
                }
            }

            types.push(classType);
        });

        return [indicies, types, categories];
    };

    var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while (i <= classTypes.length) {
                i++;
                var next = classTypes[i];

                if (next === b) {
                    return true;
                }

                if (next !== SP) {
                    break;
                }
            }
        }

        if (current === SP) {
            var _i = currentIndex;

            while (_i > 0) {
                _i--;
                var prev = classTypes[_i];

                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while (n <= classTypes.length) {
                        n++;
                        var _next = classTypes[n];

                        if (_next === b) {
                            return true;
                        }

                        if (_next !== SP) {
                            break;
                        }
                    }
                }

                if (prev !== SP) {
                    break;
                }
            }
        }
        return false;
    };

    var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
        var i = currentIndex;
        while (i >= 0) {
            var type = classTypes[i];
            if (type === SP) {
                i--;
            } else {
                return type;
            }
        }
        return 0;
    };

    var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED;
        }

        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED;
        }

        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];

        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];

        if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
        }

        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
        }

        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB7 Do not break before spaces or zero width space.
        if (SPACE.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED;
        }

        // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
        if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED;
        }

        // LB12 Do not break after NBSP and related characters.
        if (current === GL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED;
        }

        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB18 Break after spaces.
        if (current === SP) {
            return BREAK_ALLOWED;
        }

        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED;
        }

        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) {
            return BREAK_ALLOWED;
        }

        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED;
        }

        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
        if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB23 Do not break between digits and letters.
        if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED;
        }

        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED;
        }

        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (
        // (PR | PO) × ( OP | HY )? NU
        [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
        // ( OP | HY ) × NU
        [OP, HY].indexOf(current) !== -1 && next === NU ||
        // NU ×	(NU | SY | IS)
        current === NU && [NU, SY, IS].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED;
                } else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                } else {
                    break;
                }
            }
        }

        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(next) !== -1) {
            var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (_prevIndex >= 0) {
                var _type = classTypes[_prevIndex];
                if (_type === NU) {
                    return BREAK_NOT_ALLOWED;
                } else if ([SY, IS].indexOf(_type) !== -1) {
                    _prevIndex--;
                } else {
                    break;
                }
            }
        }

        // LB26 Do not break a Korean syllable.
        if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED;
        }

        // LB27 Treat a Korean Syllable Block the same as ID.
        if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED;
        }

        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED;
        }

        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI && next === RI) {
            var i = indicies[currentIndex];
            var count = 1;
            while (i > 0) {
                i--;
                if (classTypes[i] === RI) {
                    count++;
                } else {
                    break;
                }
            }
            if (count % 2 !== 0) {
                return BREAK_NOT_ALLOWED;
            }
        }

        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED;
        }

        return BREAK_ALLOWED;
    };

    var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
        // LB2 Never break at the start of text.
        if (index === 0) {
            return BREAK_NOT_ALLOWED;
        }

        // LB3 Always break at the end of text.
        if (index >= codePoints.length) {
            return BREAK_MANDATORY;
        }

        var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
            _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
            indicies = _codePointsToCharacte2[0],
            classTypes = _codePointsToCharacte2[1];

        return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
    };

    var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
        if (!options) {
            options = { lineBreak: 'normal', wordBreak: 'normal' };
        }

        var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
            _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
            indicies = _codePointsToCharacte4[0],
            classTypes = _codePointsToCharacte4[1],
            isLetterNumber = _codePointsToCharacte4[2];

        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) {
                return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
        }

        var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
            return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        }) : null;

        return [indicies, classTypes, forbiddenBreakpoints];
    };

    var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
        var codePoints = (0, _Util.toCodePoints)(str);
        var output = BREAK_NOT_ALLOWED;

        var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
            _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
            indicies = _cssFormattedClasses2[0],
            classTypes = _cssFormattedClasses2[1],
            forbiddenBreakpoints = _cssFormattedClasses2[2];

        codePoints.forEach(function (codePoint, i) {
            output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
        });

        return output;
    };

    var Break = function () {
        function Break(codePoints, lineBreak, start, end) {
            _classCallCheck(this, Break);

            this._codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }

        _createClass(Break, [{
            key: 'slice',
            value: function slice() {
                return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
            }
        }]);

        return Break;
    }();

    var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
        var codePoints = (0, _Util.toCodePoints)(str);

        var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
            _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
            indicies = _cssFormattedClasses4[0],
            classTypes = _cssFormattedClasses4[1],
            forbiddenBreakpoints = _cssFormattedClasses4[2];

        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;

        return {
            next: function next() {
                if (nextIndex >= length) {
                    return { done: true };
                }
                var lineBreak = BREAK_NOT_ALLOWED;
                while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

                if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return { value: value, done: false };
                }

                return { done: true };
            }
        };
    };

    /***/
},
/* 59 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Util = __webpack_require__(15);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

    var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

    var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
        var buffer = (0, _Util.decode)(base64);
        var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
        var headerLength = 24;

        var index = view16.slice(headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };

    var Trie = exports.Trie = function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            _classCallCheck(this, Trie);

            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }

        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */

        _createClass(Trie, [{
            key: 'get',
            value: function get(codePoint) {
                var ix = void 0;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                        // Ordinary BMP code point, excluding leading surrogates.
                        // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                        // 16 bit data is stored in the index array itself.
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }

                    if (codePoint <= 0xffff) {
                        // Lead Surrogate Code Point.  A Separate index section is stored for
                        // lead surrogate code units and code points.
                        //   The main index has the code unit data.
                        //   For this function, we need the code point data.
                        // Note: this expression could be refactored for slightly improved efficiency, but
                        //       surrogate code points will be so rare in practice that it's not worth it.
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }

                    if (codePoint < this.highStart) {
                        // Supplemental code point, use two-level lookup.
                        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                        ix = this.index[ix];
                        ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) {
                        return this.data[this.highValueIndex];
                    }
                }

                // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
                return this.errorValue;
            }
        }]);

        return Trie;
    }();

    /***/
},
/* 60 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

    /***/
},
/* 61 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Path = __webpack_require__(7);

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Circle = function Circle(x, y, radius) {
            _classCallCheck(this, Circle);

            this.type = _Path.PATH.CIRCLE;
            this.x = x;
            this.y = y;
            this.radius = radius;
            if (process.env.NODE_ENV !== 'production') {
                if (isNaN(x)) {
                    console.error('Invalid x value given for Circle');
                }
                if (isNaN(y)) {
                    console.error('Invalid y value given for Circle');
                }
                if (isNaN(radius)) {
                    console.error('Invalid radius value given for Circle');
                }
            }
        };

        exports.default = Circle;
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 62 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;_e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }return _arr;
            }return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Bounds = __webpack_require__(3);

        var _Font = __webpack_require__(27);

        var _Gradient = __webpack_require__(63);

        var _TextContainer = __webpack_require__(10);

        var _TextContainer2 = _interopRequireDefault(_TextContainer);

        var _background = __webpack_require__(6);

        var _border = __webpack_require__(14);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Renderer = function () {
            function Renderer(target, options) {
                _classCallCheck(this, Renderer);

                this.target = target;
                this.options = options;
                target.render(options);
            }

            _createClass(Renderer, [{
                key: 'renderNode',
                value: function renderNode(container) {
                    if (container.isVisible()) {
                        this.renderNodeBackgroundAndBorders(container);
                        this.renderNodeContent(container);
                    }
                }
            }, {
                key: 'renderNodeContent',
                value: function renderNodeContent(container) {
                    var _this = this;

                    var callback = function callback() {
                        if (container.childNodes.length) {
                            container.childNodes.forEach(function (child) {
                                if (child instanceof _TextContainer2.default) {
                                    var style = child.parent.style;
                                    _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                                } else {
                                    _this.target.drawShape(child, container.style.color);
                                }
                            });
                        }

                        if (container.image) {
                            var _image = _this.options.imageStore.get(container.image);
                            if (_image) {
                                var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                                var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                                var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                                if (_width > 0 && _height > 0) {
                                    _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                        _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                                    });
                                }
                            }
                        }
                    };
                    var paths = container.getClipPaths();
                    if (paths.length) {
                        this.target.clip(paths, callback);
                    } else {
                        callback();
                    }
                }
            }, {
                key: 'renderNodeBackgroundAndBorders',
                value: function renderNodeBackgroundAndBorders(container) {
                    var _this2 = this;

                    var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

                    var hasRenderableBorders = container.style.border.some(function (border) {
                        return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
                    });

                    var callback = function callback() {
                        var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                        if (HAS_BACKGROUND) {
                            _this2.target.clip([backgroundPaintingArea], function () {
                                if (!container.style.background.backgroundColor.isTransparent()) {
                                    _this2.target.fill(container.style.background.backgroundColor);
                                }

                                _this2.renderBackgroundImage(container);
                            });
                        }

                        container.style.border.forEach(function (border, side) {
                            if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                                _this2.renderBorder(border, side, container.curvedBounds);
                            }
                        });
                    };

                    if (HAS_BACKGROUND || hasRenderableBorders) {
                        var paths = container.parent ? container.parent.getClipPaths() : [];
                        if (paths.length) {
                            this.target.clip(paths, callback);
                        } else {
                            callback();
                        }
                    }
                }
            }, {
                key: 'renderBackgroundImage',
                value: function renderBackgroundImage(container) {
                    var _this3 = this;

                    container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                        if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                            _this3.renderBackgroundRepeat(container, backgroundImage);
                        } else if (/gradient/i.test(backgroundImage.source.method)) {
                            _this3.renderBackgroundGradient(container, backgroundImage);
                        }
                    });
                }
            }, {
                key: 'renderBackgroundRepeat',
                value: function renderBackgroundRepeat(container, background) {
                    var image = this.options.imageStore.get(background.source.args[0]);
                    if (image) {
                        var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                        var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                        var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                        var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                        var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                        var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                        this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
                    }
                }
            }, {
                key: 'renderBackgroundGradient',
                value: function renderBackgroundGradient(container, background) {
                    var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                    var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
                    var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                    var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

                    var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
                    if (gradient) {
                        switch (gradient.type) {
                            case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                                // $FlowFixMe
                                this.target.renderLinearGradient(gradientBounds, gradient);
                                break;
                            case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                                // $FlowFixMe
                                this.target.renderRadialGradient(gradientBounds, gradient);
                                break;
                        }
                    }
                }
            }, {
                key: 'renderBorder',
                value: function renderBorder(border, side, curvePoints) {
                    this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
                }
            }, {
                key: 'renderStack',
                value: function renderStack(stack) {
                    var _this4 = this;

                    if (stack.container.isVisible()) {
                        var _opacity = stack.getOpacity();
                        if (_opacity !== this._opacity) {
                            this.target.setOpacity(stack.getOpacity());
                            this._opacity = _opacity;
                        }

                        var _transform = stack.container.style.transform;
                        if (_transform !== null) {
                            this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                                return _this4.renderStackContent(stack);
                            });
                        } else {
                            this.renderStackContent(stack);
                        }
                    }
                }
            }, {
                key: 'renderStackContent',
                value: function renderStackContent(stack) {
                    var _splitStackingContext = splitStackingContexts(stack),
                        _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                        negativeZIndex = _splitStackingContext2[0],
                        zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                        positiveZIndex = _splitStackingContext2[2],
                        nonPositionedFloats = _splitStackingContext2[3],
                        nonPositionedInlineLevel = _splitStackingContext2[4];

                    var _splitDescendants = splitDescendants(stack),
                        _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                        inlineLevel = _splitDescendants2[0],
                        nonInlineLevel = _splitDescendants2[1];

                    // https://www.w3.org/TR/css-position-3/#painting-order
                    // 1. the background and borders of the element forming the stacking context.


                    this.renderNodeBackgroundAndBorders(stack.container);
                    // 2. the child stacking contexts with negative stack levels (most negative first).
                    negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
                    // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                    this.renderNodeContent(stack.container);
                    nonInlineLevel.forEach(this.renderNode, this);
                    // 4. All non-positioned floating descendants, in tree order. For each one of these,
                    // treat the element as if it created a new stacking context, but any positioned descendants and descendants
                    // which actually create a new stacking context should be considered part of the parent stacking context,
                    // not this new one.
                    nonPositionedFloats.forEach(this.renderStack, this);
                    // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
                    nonPositionedInlineLevel.forEach(this.renderStack, this);
                    inlineLevel.forEach(this.renderNode, this);
                    // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
                    //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
                    //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
                    //  but any positioned descendants and descendants which actually create a new stacking context should be
                    //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
                    //  treat the stacking context generated atomically.
                    //
                    //  All opacity descendants with opacity less than 1
                    //
                    //  All transform descendants with transform other than none
                    zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
                    // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
                    // order (smallest first) then tree order.
                    positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
                }
            }, {
                key: 'render',
                value: function render(stack) {
                    var _this5 = this;

                    if (this.options.backgroundColor) {
                        this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
                    }
                    this.renderStack(stack);
                    var target = this.target.getTarget();
                    if (process.env.NODE_ENV !== 'production') {
                        return target.then(function (output) {
                            _this5.options.logger.log('Render completed');
                            return output;
                        });
                    }
                    return target;
                }
            }]);

            return Renderer;
        }();

        exports.default = Renderer;

        var splitDescendants = function splitDescendants(stack) {
            var inlineLevel = [];
            var nonInlineLevel = [];

            var length = stack.children.length;
            for (var i = 0; i < length; i++) {
                var child = stack.children[i];
                if (child.isInlineLevel()) {
                    inlineLevel.push(child);
                } else {
                    nonInlineLevel.push(child);
                }
            }
            return [inlineLevel, nonInlineLevel];
        };

        var splitStackingContexts = function splitStackingContexts(stack) {
            var negativeZIndex = [];
            var zeroOrAutoZIndexOrTransformedOrOpacity = [];
            var positiveZIndex = [];
            var nonPositionedFloats = [];
            var nonPositionedInlineLevel = [];
            var length = stack.contexts.length;
            for (var i = 0; i < length; i++) {
                var child = stack.contexts[i];
                if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
                    if (child.container.style.zIndex.order < 0) {
                        negativeZIndex.push(child);
                    } else if (child.container.style.zIndex.order > 0) {
                        positiveZIndex.push(child);
                    } else {
                        zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
                    }
                } else {
                    if (child.container.isFloating()) {
                        nonPositionedFloats.push(child);
                    } else {
                        nonPositionedInlineLevel.push(child);
                    }
                }
            }
            return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
        };

        var sortByZIndex = function sortByZIndex(a, b) {
            if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
                return 1;
            } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
                return -1;
            }

            return a.container.index > b.container.index ? 1 : -1;
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 63 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _NodeContainer = __webpack_require__(4);

    var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

    var _Angle = __webpack_require__(64);

    var _Color = __webpack_require__(1);

    var _Color2 = _interopRequireDefault(_Color);

    var _Length = __webpack_require__(2);

    var _Length2 = _interopRequireDefault(_Length);

    var _Util = __webpack_require__(5);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
    var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
    var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
    var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
    var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

    var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
        LINEAR_GRADIENT: 0,
        RADIAL_GRADIENT: 1
    };

    var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
        CIRCLE: 0,
        ELLIPSE: 1
    };

    var LENGTH_FOR_POSITION = {
        left: new _Length2.default('0%'),
        top: new _Length2.default('0%'),
        center: new _Length2.default('50%'),
        right: new _Length2.default('100%'),
        bottom: new _Length2.default('100%')
    };

    var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
        _classCallCheck(this, LinearGradient);

        this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
        this.colorStops = colorStops;
        this.direction = direction;
    };

    var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
        _classCallCheck(this, RadialGradient);

        this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
        this.colorStops = colorStops;
        this.shape = shape;
        this.center = center;
        this.radius = radius;
    };

    var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
        var args = _ref.args,
            method = _ref.method,
            prefix = _ref.prefix;

        if (method === 'linear-gradient') {
            return parseLinearGradient(args, bounds, !!prefix);
        } else if (method === 'gradient' && args[0] === 'linear') {
            // TODO handle correct angle
            return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
        } else if (method === 'radial-gradient') {
            return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
        } else if (method === 'gradient' && args[0] === 'radial') {
            return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
        }
    };

    var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
        var colorStops = [];

        for (var i = firstColorStopIndex; i < args.length; i++) {
            var value = args[i];
            var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
            var lastSpaceIndex = value.lastIndexOf(' ');
            var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
            var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
            colorStops.push({ color: _color, stop: _stop });
        }

        var absoluteValuedColorStops = colorStops.map(function (_ref2) {
            var color = _ref2.color,
                stop = _ref2.stop;

            var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

            return {
                color: color,
                // $FlowFixMe
                stop: absoluteStop
            };
        });

        var previousColorStop = absoluteValuedColorStops[0].stop;
        for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
            if (previousColorStop !== null) {
                var _stop2 = absoluteValuedColorStops[_i].stop;
                if (_stop2 === null) {
                    var n = _i;
                    while (absoluteValuedColorStops[n].stop === null) {
                        n++;
                    }
                    var steps = n - _i + 1;
                    var nextColorStep = absoluteValuedColorStops[n].stop;
                    var stepSize = (nextColorStep - previousColorStop) / steps;
                    for (; _i < n; _i++) {
                        previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                    }
                } else {
                    previousColorStop = _stop2;
                }
            }
        }

        return absoluteValuedColorStops;
    };

    var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
        var angle = (0, _Angle.parseAngle)(args[0]);
        var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
        var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
        var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
        // if there is a prefix, the 0° angle points due East (instead of North per W3C)
        hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
        var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

        // TODO: Fix some inaccuracy with color stops with px values
        var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

        return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
    };

    var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
        var m = args[0].match(RADIAL_SHAPE_DEFINITION);
        var shape = m && (m[1] === 'circle' || // explicit shape specification
        m[3] !== undefined && m[5] === undefined) // only one radius coordinate
        ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
        var radius = {};
        var center = {};

        if (m) {
            // Radius
            if (m[3] !== undefined) {
                radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
            }

            if (m[5] !== undefined) {
                radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
            }

            // Position
            if (m[7]) {
                center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
            } else if (m[8] !== undefined) {
                center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
            }

            if (m[10]) {
                center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
            } else if (m[11] !== undefined) {
                center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
            }
        }

        var gradientCenter = {
            x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
            y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
        };
        var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

        return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
    };

    var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
        var width = bounds.width;
        var height = bounds.height;
        var HALF_WIDTH = width * 0.5;
        var HALF_HEIGHT = height * 0.5;
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var HALF_LINE_LENGTH = lineLength / 2;

        var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
        var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
        var x1 = width - x0;
        var y1 = height - y0;

        return { x0: x0, x1: x1, y0: y0, y1: y1 };
    };

    var parseTopRight = function parseTopRight(bounds) {
        return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
    };

    var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
        switch (side) {
            case 'bottom':
            case 'to top':
                return calculateGradientDirection(0, bounds);
            case 'left':
            case 'to right':
                return calculateGradientDirection(Math.PI / 2, bounds);
            case 'right':
            case 'to left':
                return calculateGradientDirection(3 * Math.PI / 2, bounds);
            case 'top right':
            case 'right top':
            case 'to bottom left':
            case 'to left bottom':
                return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
            case 'top left':
            case 'left top':
            case 'to bottom right':
            case 'to right bottom':
                return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
            case 'bottom left':
            case 'left bottom':
            case 'to top right':
            case 'to right top':
                return calculateGradientDirection(parseTopRight(bounds), bounds);
            case 'bottom right':
            case 'right bottom':
            case 'to top left':
            case 'to left top':
                return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
            case 'top':
            case 'to bottom':
            default:
                return calculateGradientDirection(Math.PI, bounds);
        }
    };

    var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
        var _angle$split$map = angle.split(' ').map(parseFloat),
            _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
            left = _angle$split$map2[0],
            top = _angle$split$map2[1];

        var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

        return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
    };

    var findCorner = function findCorner(bounds, x, y, closest) {
        var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

        // $FlowFixMe
        return corners.reduce(function (stat, corner) {
            var d = (0, _Util.distance)(x - corner.x, y - corner.y);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                return {
                    optimumCorner: corner,
                    optimumDistance: d
                };
            }

            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };

    var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
        var x = center.x;
        var y = center.y;
        var rx = 0;
        var ry = 0;

        switch (extent) {
            case 'closest-side':
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                    ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
                }
                break;

            case 'closest-corner':
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                    var corner = findCorner(bounds, x, y, true);
                    rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                    ry = c * rx;
                }
                break;

            case 'farthest-side':
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                    ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
                }
                break;

            case 'farthest-corner':
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                    var _corner = findCorner(bounds, x, y, false);
                    rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                    ry = _c * rx;
                }
                break;

            default:
                // pixel or percentage values
                rx = radius.x || 0;
                ry = radius.y !== undefined ? radius.y : rx;
                break;
        }

        return {
            x: rx,
            y: ry
        };
    };

    var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
        var shape = '';
        var radius = '';
        var extent = '';
        var position = '';
        var idx = 0;

        var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
        var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
        var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

        var matchStartPosition = args[idx].match(POSITION);
        if (matchStartPosition) {
            idx++;
        }

        var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
        if (matchShapeExtent) {
            shape = matchShapeExtent[1] || '';
            extent = matchShapeExtent[2] || '';
            if (extent === 'contain') {
                extent = 'closest-side';
            } else if (extent === 'cover') {
                extent = 'farthest-corner';
            }
            idx++;
        }

        var matchStartRadius = args[idx].match(RADIUS);
        if (matchStartRadius) {
            idx++;
        }

        var matchEndPosition = args[idx].match(POSITION);
        if (matchEndPosition) {
            idx++;
        }

        var matchEndRadius = args[idx].match(RADIUS);
        if (matchEndRadius) {
            idx++;
        }

        var matchPosition = matchEndPosition || matchStartPosition;
        if (matchPosition && matchPosition[1]) {
            position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
            if (matchPosition[2]) {
                position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
            }
        }

        var matchRadius = matchEndRadius || matchStartRadius;
        if (matchRadius) {
            radius = matchRadius[0];
            if (!matchRadius[1]) {
                radius += 'px';
            }
        }

        if (position && !shape && !radius && !extent) {
            radius = position;
            position = '';
        }

        if (position) {
            position = 'at ' + position;
        }

        return [[shape, extent, radius, position].filter(function (s) {
            return !!s;
        }).join(' ')].concat(args.slice(idx));
    };

    var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
        return args.map(function (color) {
            return color.match(FROM_TO_COLORSTOP);
        })
        // $FlowFixMe
        .map(function (v, index) {
            if (!v) {
                return args[index];
            }

            switch (v[1]) {
                case 'from':
                    return v[4] + ' 0%';
                case 'to':
                    return v[4] + ' 100%';
                case 'color-stop':
                    if (v[3] === '%') {
                        return v[4] + ' ' + v[2];
                    }
                    return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
            }
        });
    };

    /***/
},
/* 64 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

    var parseAngle = exports.parseAngle = function parseAngle(angle) {
        var match = angle.match(ANGLE);

        if (match) {
            var value = parseFloat(match[1]);
            switch (match[2].toLowerCase()) {
                case 'deg':
                    return Math.PI * value / 180;
                case 'grad':
                    return Math.PI / 200 * value;
                case 'rad':
                    return value;
                case 'turn':
                    return Math.PI * 2 * value;
            }
        }

        return null;
    };

    /***/
},
/* 65 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.cloneWindow = exports.DocumentCloner = undefined;

        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;_e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }return _arr;
            }return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Bounds = __webpack_require__(3);

        var _Proxy = __webpack_require__(28);

        var _ResourceLoader = __webpack_require__(66);

        var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

        var _Util = __webpack_require__(5);

        var _background = __webpack_require__(6);

        var _CanvasRenderer = __webpack_require__(17);

        var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

        var _PseudoNodeContent = __webpack_require__(67);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

        var DocumentCloner = exports.DocumentCloner = function () {
            function DocumentCloner(element, options, logger, copyInline, renderer) {
                _classCallCheck(this, DocumentCloner);

                this.referenceElement = element;
                this.scrolledElements = [];
                this.copyStyles = copyInline;
                this.inlineImages = copyInline;
                this.logger = logger;
                this.options = options;
                this.renderer = renderer;
                this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
                this.pseudoContentData = {
                    counters: {},
                    quoteDepth: 0
                };
                // $FlowFixMe
                this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
            }

            _createClass(DocumentCloner, [{
                key: 'inlineAllImages',
                value: function inlineAllImages(node) {
                    var _this = this;

                    if (this.inlineImages && node) {
                        var style = node.style;
                        Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                            if (backgroundImage.method === 'url') {
                                return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                                    return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                                }).catch(function (e) {
                                    if (process.env.NODE_ENV !== 'production') {
                                        _this.logger.log('Unable to load image', e);
                                    }
                                });
                            }
                            return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                        })).then(function (backgroundImages) {
                            if (backgroundImages.length > 1) {
                                // TODO Multiple backgrounds somehow broken in Chrome
                                style.backgroundColor = '';
                            }
                            style.backgroundImage = backgroundImages.join(',');
                        });

                        if (node instanceof HTMLImageElement) {
                            this.resourceLoader.inlineImage(node.src).then(function (img) {
                                if (img && node instanceof HTMLImageElement && node.parentNode) {
                                    var parentNode = node.parentNode;
                                    var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                                    parentNode.replaceChild(clonedChild, node);
                                }
                            }).catch(function (e) {
                                if (process.env.NODE_ENV !== 'production') {
                                    _this.logger.log('Unable to load image', e);
                                }
                            });
                        }
                    }
                }
            }, {
                key: 'inlineFonts',
                value: function inlineFonts(document) {
                    var _this2 = this;

                    return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                        if (sheet.href) {
                            return fetch(sheet.href).then(function (res) {
                                return res.text();
                            }).then(function (text) {
                                return createStyleSheetFontsFromText(text, sheet.href);
                            }).catch(function (e) {
                                if (process.env.NODE_ENV !== 'production') {
                                    _this2.logger.log('Unable to load stylesheet', e);
                                }
                                return [];
                            });
                        }
                        return getSheetFonts(sheet, document);
                    })).then(function (fonts) {
                        return fonts.reduce(function (acc, font) {
                            return acc.concat(font);
                        }, []);
                    }).then(function (fonts) {
                        return Promise.all(fonts.map(function (font) {
                            return fetch(font.formats[0].src).then(function (response) {
                                return response.blob();
                            }).then(function (blob) {
                                return new Promise(function (resolve, reject) {
                                    var reader = new FileReader();
                                    reader.onerror = reject;
                                    reader.onload = function () {
                                        // $FlowFixMe
                                        var result = reader.result;
                                        resolve(result);
                                    };
                                    reader.readAsDataURL(blob);
                                });
                            }).then(function (dataUri) {
                                font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                                return '@font-face {' + font.fontFace.cssText + ' ';
                            });
                        }));
                    }).then(function (fontCss) {
                        var style = document.createElement('style');
                        style.textContent = fontCss.join('\n');
                        _this2.documentElement.appendChild(style);
                    });
                }
            }, {
                key: 'createElementClone',
                value: function createElementClone(node) {
                    var _this3 = this;

                    if (this.copyStyles && node instanceof HTMLCanvasElement) {
                        var img = node.ownerDocument.createElement('img');
                        try {
                            img.src = node.toDataURL();
                            return img;
                        } catch (e) {
                            if (process.env.NODE_ENV !== 'production') {
                                this.logger.log('Unable to clone canvas contents, canvas is tainted');
                            }
                        }
                    }

                    if (node instanceof HTMLIFrameElement) {
                        var tempIframe = node.cloneNode(false);
                        var iframeKey = generateIframeKey();
                        tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                        var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                            width = _parseBounds.width,
                            height = _parseBounds.height;

                        this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                            return _this3.renderer(documentElement, {
                                async: _this3.options.async,
                                allowTaint: _this3.options.allowTaint,
                                backgroundColor: '#ffffff',
                                canvas: null,
                                imageTimeout: _this3.options.imageTimeout,
                                logging: _this3.options.logging,
                                proxy: _this3.options.proxy,
                                removeContainer: _this3.options.removeContainer,
                                scale: _this3.options.scale,
                                foreignObjectRendering: _this3.options.foreignObjectRendering,
                                useCORS: _this3.options.useCORS,
                                target: new _CanvasRenderer2.default(),
                                width: width,
                                height: height,
                                x: 0,
                                y: 0,
                                windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                                windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                                scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                                scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                            }, _this3.logger.child(iframeKey));
                        }).then(function (canvas) {
                            return new Promise(function (resolve, reject) {
                                var iframeCanvas = document.createElement('img');
                                iframeCanvas.onload = function () {
                                    return resolve(canvas);
                                };
                                iframeCanvas.onerror = reject;
                                iframeCanvas.src = canvas.toDataURL();
                                if (tempIframe.parentNode) {
                                    tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                                }
                            });
                        });
                        return tempIframe;
                    }

                    if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                        var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                            try {
                                if (rule && rule.cssText) {
                                    return css + rule.cssText;
                                }
                                return css;
                            } catch (err) {
                                _this3.logger.log('Unable to access cssText property', rule.name);
                                return css;
                            }
                        }, '');
                        var style = node.cloneNode(false);
                        style.textContent = css;
                        return style;
                    }

                    return node.cloneNode(false);
                }
            }, {
                key: 'cloneNode',
                value: function cloneNode(node) {
                    var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

                    var window = node.ownerDocument.defaultView;
                    var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
                    var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
                    var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

                    if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                        this.clonedReferenceElement = clone;
                    }

                    if (clone instanceof window.HTMLBodyElement) {
                        createPseudoHideStyles(clone);
                    }

                    var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
                    var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

                    for (var child = node.firstChild; child; child = child.nextSibling) {
                        if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                        // $FlowFixMe
                        !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                        // $FlowFixMe
                        !this.options.ignoreElements(child))) {
                            if (!this.copyStyles || child.nodeName !== 'STYLE') {
                                clone.appendChild(this.cloneNode(child));
                            }
                        }
                    }

                    var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
                    (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

                    if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                        if (styleBefore) {
                            this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                        }
                        if (styleAfter) {
                            this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                        }
                        if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                            (0, _Util.copyCSSStyles)(style, clone);
                        }
                        this.inlineAllImages(clone);
                        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                            this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                        }
                        switch (node.nodeName) {
                            case 'CANVAS':
                                if (!this.copyStyles) {
                                    cloneCanvasContents(node, clone);
                                }
                                break;
                            case 'TEXTAREA':
                            case 'SELECT':
                                clone.value = node.value;
                                break;
                        }
                    }
                    return clone;
                }
            }]);

            return DocumentCloner;
        }();

        var getSheetFonts = function getSheetFonts(sheet, document) {
            // $FlowFixMe
            return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
                return rule.type === CSSRule.FONT_FACE_RULE;
            }).map(function (rule) {
                var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
                var formats = [];
                for (var i = 0; i < src.length; i++) {
                    if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                        var a = document.createElement('a');
                        a.href = src[i].args[0];
                        if (document.body) {
                            document.body.appendChild(a);
                        }

                        var font = {
                            src: a.href,
                            format: src[i + 1].args[0]
                        };
                        formats.push(font);
                    }
                }

                return {
                    // TODO select correct format for browser),

                    formats: formats.filter(function (font) {
                        return (/^woff/i.test(font.format)
                        );
                    }),
                    fontFace: rule.style
                };
            }).filter(function (font) {
                return font.formats.length;
            });
        };

        var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
            var doc = document.implementation.createHTMLDocument('');
            var base = document.createElement('base');
            // $FlowFixMe
            base.href = baseHref;
            var style = document.createElement('style');

            style.textContent = text;
            if (doc.head) {
                doc.head.appendChild(base);
            }
            if (doc.body) {
                doc.body.appendChild(style);
            }

            return style.sheet ? getSheetFonts(style.sheet, doc) : [];
        };

        var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
            if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
                ownerDocument.defaultView.scrollTo(x, y);
            }
        };

        var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
            try {
                if (clonedCanvas) {
                    clonedCanvas.width = canvas.width;
                    clonedCanvas.height = canvas.height;
                    var ctx = canvas.getContext('2d');
                    var clonedCtx = clonedCanvas.getContext('2d');
                    if (ctx) {
                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    } else {
                        clonedCtx.drawImage(canvas, 0, 0);
                    }
                }
            } catch (e) {}
        };

        var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
            if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
                return;
            }

            var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
            (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

            if (contentItems) {
                var len = contentItems.length;
                for (var i = 0; i < len; i++) {
                    var item = contentItems[i];
                    switch (item.type) {
                        case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                            var img = clone.ownerDocument.createElement('img');
                            img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                            img.style.opacity = '1';
                            anonymousReplacedElement.appendChild(img);
                            break;
                        case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                            anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                            break;
                    }
                }
            }

            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (pseudoElt === PSEUDO_BEFORE) {
                clone.insertBefore(anonymousReplacedElement, clone.firstChild);
            } else {
                clone.appendChild(anonymousReplacedElement);
            }

            return anonymousReplacedElement;
        };

        var URL_REGEXP = /^url\((.+)\)$/i;
        var PSEUDO_BEFORE = ':before';
        var PSEUDO_AFTER = ':after';
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

        var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

        var createPseudoHideStyles = function createPseudoHideStyles(body) {
            createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };

        var createStyles = function createStyles(body, styles) {
            var style = body.ownerDocument.createElement('style');
            style.innerHTML = styles;
            body.appendChild(style);
        };

        var initNode = function initNode(_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                element = _ref2[0],
                x = _ref2[1],
                y = _ref2[2];

            element.scrollLeft = x;
            element.scrollTop = y;
        };

        var generateIframeKey = function generateIframeKey() {
            return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
        };

        var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

        var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
            try {
                return Promise.resolve(node.contentWindow.document.documentElement);
            } catch (e) {
                return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
                    var match = html.match(DATA_URI_REGEXP);
                    if (!match) {
                        return Promise.reject();
                    }

                    return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
                }).then(function (html) {
                    return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                        var cloneWindow = cloneIframeContainer.contentWindow;
                        var documentClone = cloneWindow.document;

                        documentClone.open();
                        documentClone.write(html);
                        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                            return documentClone.documentElement;
                        });

                        documentClone.close();
                        return iframeLoad;
                    });
                }) : Promise.reject();
            }
        };

        var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
            var cloneIframeContainer = ownerDocument.createElement('iframe');

            cloneIframeContainer.className = 'html2canvas-container';
            cloneIframeContainer.style.visibility = 'hidden';
            cloneIframeContainer.style.position = 'fixed';
            cloneIframeContainer.style.left = '-10000px';
            cloneIframeContainer.style.top = '0px';
            cloneIframeContainer.style.border = '0';
            cloneIframeContainer.width = bounds.width.toString();
            cloneIframeContainer.height = bounds.height.toString();
            cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
            cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
            if (!ownerDocument.body) {
                return Promise.reject(process.env.NODE_ENV !== 'production' ? 'Body element not found in Document that is getting rendered' : '');
            }

            ownerDocument.body.appendChild(cloneIframeContainer);

            return Promise.resolve(cloneIframeContainer);
        };

        var iframeLoader = function iframeLoader(cloneIframeContainer) {
            var cloneWindow = cloneIframeContainer.contentWindow;
            var documentClone = cloneWindow.document;

            return new Promise(function (resolve, reject) {
                cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
                    var interval = setInterval(function () {
                        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                            clearInterval(interval);
                            resolve(cloneIframeContainer);
                        }
                    }, 50);
                };
            });
        };

        var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
            var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;

            return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
                     if window url is about:blank, we can assign the url to current by writing onto the document
                     */

                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    cloner.scrolledElements.forEach(initNode);
                    cloneWindow.scrollTo(bounds.left, bounds.top);
                    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                        documentClone.documentElement.style.top = -bounds.top + 'px';
                        documentClone.documentElement.style.left = -bounds.left + 'px';
                        documentClone.documentElement.style.position = 'absolute';
                    }

                    var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

                    var onclone = options.onclone;

                    return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                        return onclone(documentClone);
                    }).then(function () {
                        return result;
                    }) : result : Promise.reject(process.env.NODE_ENV !== 'production' ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : '');
                });

                documentClone.open();
                documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
                // Chrome scrolls the parent document for some reason after the write to the cloned window???
                restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
                documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
                documentClone.close();

                return iframeLoad;
            });
        };

        var serializeDoctype = function serializeDoctype(doctype) {
            var str = '';
            if (doctype) {
                str += '<!DOCTYPE ';
                if (doctype.name) {
                    str += doctype.name;
                }

                if (doctype.internalSubset) {
                    str += doctype.internalSubset;
                }

                if (doctype.publicId) {
                    str += '"' + doctype.publicId + '"';
                }

                if (doctype.systemId) {
                    str += '"' + doctype.systemId + '"';
                }

                str += '>';
            }

            return str;
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 66 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */
    (function (process) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ResourceStore = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Feature = __webpack_require__(11);

        var _Feature2 = _interopRequireDefault(_Feature);

        var _Proxy = __webpack_require__(28);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ResourceLoader = function () {
            function ResourceLoader(options, logger, window) {
                _classCallCheck(this, ResourceLoader);

                this.options = options;
                this._window = window;
                this.origin = this.getOrigin(window.location.href);
                this.cache = {};
                this.logger = logger;
                this._index = 0;
            }

            _createClass(ResourceLoader, [{
                key: 'loadImage',
                value: function loadImage(src) {
                    var _this = this;

                    if (this.hasResourceInCache(src)) {
                        return src;
                    }
                    if (isBlobImage(src)) {
                        this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                        return src;
                    }

                    if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                        if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                            return this.addImage(src, src, false);
                        } else if (!this.isSameOrigin(src)) {
                            if (typeof this.options.proxy === 'string') {
                                this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                                    return _loadImage(src, _this.options.imageTimeout || 0);
                                });
                                return src;
                            } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                                return this.addImage(src, src, true);
                            }
                        }
                    }
                }
            }, {
                key: 'inlineImage',
                value: function inlineImage(src) {
                    var _this2 = this;

                    if (isInlineImage(src)) {
                        return _loadImage(src, this.options.imageTimeout || 0);
                    }
                    if (this.hasResourceInCache(src)) {
                        return this.cache[src];
                    }
                    if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                        return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this2.options.imageTimeout || 0);
                        });
                    }

                    return this.xhrImage(src);
                }
            }, {
                key: 'xhrImage',
                value: function xhrImage(src) {
                    var _this3 = this;

                    this.cache[src] = new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status !== 200) {
                                    reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                                } else {
                                    var reader = new FileReader();
                                    reader.addEventListener('load', function () {
                                        // $FlowFixMe
                                        var result = reader.result;
                                        resolve(result);
                                    }, false);
                                    reader.addEventListener('error', function (e) {
                                        return reject(e);
                                    }, false);
                                    reader.readAsDataURL(xhr.response);
                                }
                            }
                        };
                        xhr.responseType = 'blob';
                        if (_this3.options.imageTimeout) {
                            var timeout = _this3.options.imageTimeout;
                            xhr.timeout = timeout;
                            xhr.ontimeout = function () {
                                return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                            };
                        }
                        xhr.open('GET', src, true);
                        xhr.send();
                    }).then(function (src) {
                        return _loadImage(src, _this3.options.imageTimeout || 0);
                    });

                    return this.cache[src];
                }
            }, {
                key: 'loadCanvas',
                value: function loadCanvas(node) {
                    var key = String(this._index++);
                    this.cache[key] = Promise.resolve(node);
                    return key;
                }
            }, {
                key: 'hasResourceInCache',
                value: function hasResourceInCache(key) {
                    return typeof this.cache[key] !== 'undefined';
                }
            }, {
                key: 'addImage',
                value: function addImage(key, src, useCORS) {
                    var _this4 = this;

                    if (process.env.NODE_ENV !== 'production') {
                        this.logger.log('Added image ' + key.substring(0, 256));
                    }

                    var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                        return new Promise(function (resolve, reject) {
                            var img = new Image();
                            img.onload = function () {
                                return resolve(img);
                            };
                            //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                            if (!supportsDataImages || useCORS) {
                                img.crossOrigin = 'anonymous';
                            }

                            img.onerror = reject;
                            img.src = src;
                            if (img.complete === true) {
                                // Inline XML images may fail to parse, throwing an Error later on
                                setTimeout(function () {
                                    resolve(img);
                                }, 500);
                            }
                            if (_this4.options.imageTimeout) {
                                var timeout = _this4.options.imageTimeout;
                                setTimeout(function () {
                                    return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : '');
                                }, timeout);
                            }
                        });
                    };

                    this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
                    _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
                    return key;
                }
            }, {
                key: 'isSameOrigin',
                value: function isSameOrigin(url) {
                    return this.getOrigin(url) === this.origin;
                }
            }, {
                key: 'getOrigin',
                value: function getOrigin(url) {
                    var link = this._link || (this._link = this._window.document.createElement('a'));
                    link.href = url;
                    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
                    return link.protocol + link.hostname + link.port;
                }
            }, {
                key: 'ready',
                value: function ready() {
                    var _this5 = this;

                    var keys = Object.keys(this.cache);
                    var values = keys.map(function (str) {
                        return _this5.cache[str].catch(function (e) {
                            if (process.env.NODE_ENV !== 'production') {
                                _this5.logger.log('Unable to load image', e);
                            }
                            return null;
                        });
                    });
                    return Promise.all(values).then(function (images) {
                        if (process.env.NODE_ENV !== 'production') {
                            _this5.logger.log('Finished loading ' + images.length + ' images', images);
                        }
                        return new ResourceStore(keys, images);
                    });
                }
            }]);

            return ResourceLoader;
        }();

        exports.default = ResourceLoader;

        var ResourceStore = exports.ResourceStore = function () {
            function ResourceStore(keys, resources) {
                _classCallCheck(this, ResourceStore);

                this._keys = keys;
                this._resources = resources;
            }

            _createClass(ResourceStore, [{
                key: 'get',
                value: function get(key) {
                    var index = this._keys.indexOf(key);
                    return index === -1 ? null : this._resources[index];
                }
            }]);

            return ResourceStore;
        }();

        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;

        var isInlineImage = function isInlineImage(src) {
            return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function isInlineBase64Image(src) {
            return INLINE_BASE64.test(src);
        };
        var isBlobImage = function isBlobImage(src) {
            return src.substr(0, 4) === 'blob';
        };

        var isSVG = function isSVG(src) {
            return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
        };

        var _loadImage = function _loadImage(src, timeout) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    return resolve(img);
                };
                img.onerror = reject;
                img.src = src;
                if (img.complete === true) {
                    // Inline XML images may fail to parse, throwing an Error later on
                    setTimeout(function () {
                        resolve(img);
                    }, 500);
                }
                if (timeout) {
                    setTimeout(function () {
                        return reject(process.env.NODE_ENV !== 'production' ? 'Timed out (' + timeout + 'ms) loading image' : '');
                    }, timeout);
                }
            });
        };
        /* WEBPACK VAR INJECTION */
    }).call(exports, __webpack_require__(0));

    /***/
},
/* 67 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _ListItem = __webpack_require__(16);

    var _listStyle = __webpack_require__(9);

    var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
        TEXT: 0,
        IMAGE: 1
    };

    var TOKEN_TYPE = exports.TOKEN_TYPE = {
        STRING: 0,
        ATTRIBUTE: 1,
        URL: 2,
        COUNTER: 3,
        COUNTERS: 4,
        OPENQUOTE: 5,
        CLOSEQUOTE: 6
    };

    var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
        if (!style || !style.counterReset || style.counterReset === 'none') {
            return [];
        }

        var counterNames = [];
        var counterResets = style.counterReset.split(/\s*,\s*/);
        var lenCounterResets = counterResets.length;

        for (var i = 0; i < lenCounterResets; i++) {
            var _counterResets$i$spli = counterResets[i].split(/\s+/),
                _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
                counterName = _counterResets$i$spli2[0],
                initialValue = _counterResets$i$spli2[1];

            counterNames.push(counterName);
            var counter = data.counters[counterName];
            if (!counter) {
                counter = data.counters[counterName] = [];
            }
            counter.push(parseInt(initialValue || 0, 10));
        }

        return counterNames;
    };

    var popCounters = exports.popCounters = function popCounters(counterNames, data) {
        var lenCounters = counterNames.length;
        for (var i = 0; i < lenCounters; i++) {
            data.counters[counterNames[i]].pop();
        }
    };

    var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
        if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
            return null;
        }

        var tokens = parseContent(style.content);

        var len = tokens.length;
        var contentItems = [];
        var s = '';

        // increment the counter (if there is a "counter-increment" declaration)
        var counterIncrement = style.counterIncrement;
        if (counterIncrement && counterIncrement !== 'none') {
            var _counterIncrement$spl = counterIncrement.split(/\s+/),
                _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
                counterName = _counterIncrement$spl2[0],
                incrementValue = _counterIncrement$spl2[1];

            var counter = data.counters[counterName];
            if (counter) {
                counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
            }
        }

        // build the content string
        for (var i = 0; i < len; i++) {
            var token = tokens[i];
            switch (token.type) {
                case TOKEN_TYPE.STRING:
                    s += token.value || '';
                    break;

                case TOKEN_TYPE.ATTRIBUTE:
                    if (node instanceof HTMLElement && token.value) {
                        s += node.getAttribute(token.value) || '';
                    }
                    break;

                case TOKEN_TYPE.COUNTER:
                    var _counter = data.counters[token.name || ''];
                    if (_counter) {
                        s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                    }
                    break;

                case TOKEN_TYPE.COUNTERS:
                    var _counters = data.counters[token.name || ''];
                    if (_counters) {
                        s += formatCounterValue(_counters, token.glue, token.format);
                    }
                    break;

                case TOKEN_TYPE.OPENQUOTE:
                    s += getQuote(style, true, data.quoteDepth);
                    data.quoteDepth++;
                    break;

                case TOKEN_TYPE.CLOSEQUOTE:
                    data.quoteDepth--;
                    s += getQuote(style, false, data.quoteDepth);
                    break;

                case TOKEN_TYPE.URL:
                    if (s) {
                        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                        s = '';
                    }
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                    break;
            }
        }

        if (s) {
            contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
        }

        return contentItems;
    };

    var parseContent = exports.parseContent = function parseContent(content, cache) {
        if (cache && cache[content]) {
            return cache[content];
        }

        var tokens = [];
        var len = content.length;

        var isString = false;
        var isEscaped = false;
        var isFunction = false;
        var str = '';
        var functionName = '';
        var args = [];

        for (var i = 0; i < len; i++) {
            var c = content.charAt(i);

            switch (c) {
                case "'":
                case '"':
                    if (isEscaped) {
                        str += c;
                    } else {
                        isString = !isString;
                        if (!isFunction && !isString) {
                            tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                            str = '';
                        }
                    }
                    break;

                case '\\':
                    if (isEscaped) {
                        str += c;
                        isEscaped = false;
                    } else {
                        isEscaped = true;
                    }
                    break;

                case '(':
                    if (isString) {
                        str += c;
                    } else {
                        isFunction = true;
                        functionName = str;
                        str = '';
                        args = [];
                    }
                    break;

                case ')':
                    if (isString) {
                        str += c;
                    } else if (isFunction) {
                        if (str) {
                            args.push(str);
                        }

                        switch (functionName) {
                            case 'attr':
                                if (args.length > 0) {
                                    tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                                }
                                break;

                            case 'counter':
                                if (args.length > 0) {
                                    var counter = {
                                        type: TOKEN_TYPE.COUNTER,
                                        name: args[0]
                                    };
                                    if (args.length > 1) {
                                        counter.format = args[1];
                                    }
                                    tokens.push(counter);
                                }
                                break;

                            case 'counters':
                                if (args.length > 0) {
                                    var _counters2 = {
                                        type: TOKEN_TYPE.COUNTERS,
                                        name: args[0]
                                    };
                                    if (args.length > 1) {
                                        _counters2.glue = args[1];
                                    }
                                    if (args.length > 2) {
                                        _counters2.format = args[2];
                                    }
                                    tokens.push(_counters2);
                                }
                                break;

                            case 'url':
                                if (args.length > 0) {
                                    tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                                }
                                break;
                        }

                        isFunction = false;
                        str = '';
                    }
                    break;

                case ',':
                    if (isString) {
                        str += c;
                    } else if (isFunction) {
                        args.push(str);
                        str = '';
                    }
                    break;

                case ' ':
                case '\t':
                    if (isString) {
                        str += c;
                    } else if (str) {
                        addOtherToken(tokens, str);
                        str = '';
                    }
                    break;

                default:
                    str += c;
            }

            if (c !== '\\') {
                isEscaped = false;
            }
        }

        if (str) {
            addOtherToken(tokens, str);
        }

        if (cache) {
            cache[content] = tokens;
        }

        return tokens;
    };

    var addOtherToken = function addOtherToken(tokens, identifier) {
        switch (identifier) {
            case 'open-quote':
                tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
                break;
            case 'close-quote':
                tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
                break;
        }
    };

    var getQuote = function getQuote(style, isOpening, quoteDepth) {
        var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
        var idx = quoteDepth * 2;
        if (idx >= quotes.length) {
            idx = quotes.length - 2;
        }
        if (!isOpening) {
            ++idx;
        }
        return quotes[idx].replace(/^["']|["']$/g, '');
    };

    var formatCounterValue = function formatCounterValue(counter, glue, format) {
        var len = counter.length;
        var result = '';

        for (var i = 0; i < len; i++) {
            if (i > 0) {
                result += glue || '';
            }
            result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
        }

        return result;
    };

    /***/
},
/* 68 */
/***/function (module, exports, __webpack_require__) {

    /*!
     * clipboard.js v2.0.1
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
    !function (t, e) {
        true ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports.ClipboardJS = e() : t.ClipboardJS = e();
    }(this, function () {
        return function (t) {
            function e(o) {
                if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
            }var n = {};return e.m = t, e.c = n, e.i = function (t) {
                return t;
            }, e.d = function (t, n, o) {
                e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o });
            }, e.n = function (t) {
                var n = t && t.__esModule ? function () {
                    return t.default;
                } : function () {
                    return t;
                };return e.d(n, "a", n), n;
            }, e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, e.p = "", e(e.s = 3);
        }([function (t, e, n) {
            var o, r, i;!function (a, c) {
                r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
            }(0, function (t, e) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }var o = function (t) {
                    return t && t.__esModule ? t : { default: t };
                }(e),
                    r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
                    return typeof t === 'undefined' ? 'undefined' : _typeof(t);
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
                },
                    i = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }return function (e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e;
                    };
                }(),
                    a = function () {
                    function t(e) {
                        n(this, t), this.resolveOptions(e), this.initSelection();
                    }return i(t, [{ key: "resolveOptions", value: function value() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
                        } }, { key: "initSelection", value: function value() {
                            this.text ? this.selectFake() : this.target && this.selectTarget();
                        } }, { key: "selectFake", value: function value() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");this.removeFake(), this.fakeHandlerCallback = function () {
                                return t.removeFake();
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";var n = window.pageYOffset || document.documentElement.scrollTop;this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText();
                        } }, { key: "removeFake", value: function value() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
                        } }, { key: "selectTarget", value: function value() {
                            this.selectedText = (0, o.default)(this.target), this.copyText();
                        } }, { key: "copyText", value: function value() {
                            var t = void 0;try {
                                t = document.execCommand(this.action);
                            } catch (e) {
                                t = !1;
                            }this.handleResult(t);
                        } }, { key: "handleResult", value: function value(t) {
                            this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                        } }, { key: "clearSelection", value: function value() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                        } }, { key: "destroy", value: function value() {
                            this.removeFake();
                        } }, { key: "action", set: function set() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        }, get: function get() {
                            return this._action;
                        } }, { key: "target", set: function set(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target = t;
                            }
                        }, get: function get() {
                            return this._target;
                        } }]), t;
                }();t.exports = a;
            });
        }, function (t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");if (!c.string(e)) throw new TypeError("Second argument must be a String");if (!c.fn(n)) throw new TypeError("Third argument must be a Function");if (c.node(t)) return r(t, e, n);if (c.nodeList(t)) return i(t, e, n);if (c.string(t)) return a(t, e, n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }function r(t, e, n) {
                return t.addEventListener(e, n), { destroy: function destroy() {
                        t.removeEventListener(e, n);
                    } };
            }function i(t, e, n) {
                return Array.prototype.forEach.call(t, function (t) {
                    t.addEventListener(e, n);
                }), { destroy: function destroy() {
                        Array.prototype.forEach.call(t, function (t) {
                            t.removeEventListener(e, n);
                        });
                    } };
            }function a(t, e, n) {
                return u(document.body, t, e, n);
            }var c = n(6),
                u = n(5);t.exports = o;
        }, function (t, e) {
            function n() {}n.prototype = { on: function on(t, e, n) {
                    var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
                }, once: function once(t, e, n) {
                    function o() {
                        r.off(t, o), e.apply(n, arguments);
                    }var r = this;return o._ = e, this.on(t, o, n);
                }, emit: function emit(t) {
                    var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        o = 0,
                        r = n.length;for (o; o < r; o++) {
                        n[o].fn.apply(n[o].ctx, e);
                    }return this;
                }, off: function off(t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];if (o && e) for (var i = 0, a = o.length; i < a; i++) {
                        o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    }return r.length ? n[t] = r : delete n[t], this;
                } }, t.exports = n;
        }, function (t, e, n) {
            var o, r, i;!function (a, c) {
                r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
            }(0, function (t, e, n, o) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : { default: t };
                }function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && "function" != typeof e ? t : e;
                }function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === 'undefined' ? 'undefined' : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                }function u(t, e) {
                    var n = "data-clipboard-" + t;if (e.hasAttribute(n)) return e.getAttribute(n);
                }var l = r(e),
                    s = r(n),
                    f = r(o),
                    d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
                    return typeof t === 'undefined' ? 'undefined' : _typeof(t);
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
                },
                    h = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }return function (e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e;
                    };
                }(),
                    p = function (t) {
                    function e(t, n) {
                        i(this, e);var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n), o.listenClick(t), o;
                    }return c(e, t), h(e, [{ key: "resolveOptions", value: function value() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body;
                        } }, { key: "listenClick", value: function value(t) {
                            var e = this;this.listener = (0, f.default)(t, "click", function (t) {
                                return e.onClick(t);
                            });
                        } }, { key: "onClick", value: function value(t) {
                            var e = t.delegateTarget || t.currentTarget;this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this });
                        } }, { key: "defaultAction", value: function value(t) {
                            return u("action", t);
                        } }, { key: "defaultTarget", value: function value(t) {
                            var e = u("target", t);if (e) return document.querySelector(e);
                        } }, { key: "defaultText", value: function value(t) {
                            return u("text", t);
                        } }, { key: "destroy", value: function value() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
                        } }], [{ key: "isSupported", value: function value() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;return e.forEach(function (t) {
                                n = n && !!document.queryCommandSupported(t);
                            }), n;
                        } }]), e;
                }(s.default);t.exports = p;
            });
        }, function (t, e) {
            function n(t, e) {
                for (; t && t.nodeType !== o;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;
                }
            }var o = 9;if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
            }t.exports = n;
        }, function (t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);return t.addEventListener(n, a, r), { destroy: function destroy() {
                        t.removeEventListener(n, a, r);
                    } };
            }function r(t, e, n, r, i) {
                return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return o(t, e, n, r, i);
                }));
            }function i(t, e, n, o) {
                return function (n) {
                    n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n);
                };
            }var a = n(4);t.exports = r;
        }, function (t, e) {
            e.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
            }, e.nodeList = function (t) {
                var n = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
            }, e.string = function (t) {
                return "string" == typeof t || t instanceof String;
            }, e.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t);
            };
        }, function (t, e) {
            function n(t) {
                var e;if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
                } else {
                    t.hasAttribute("contenteditable") && t.focus();var o = window.getSelection(),
                        r = document.createRange();r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
                }return e;
            }t.exports = n;
        }]);
    });

    /***/
}], [29]);