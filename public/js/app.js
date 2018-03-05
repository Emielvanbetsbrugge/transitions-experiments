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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(42);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_smooth_scrolling__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_charming__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_charming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_charming__);





var letters = function letters() {
  var h1 = document.querySelector('h1');
  __WEBPACK_IMPORTED_MODULE_1_charming___default()(h1, {
    tagName: 'b', // defaults to 'span'
    classPrefix: 'letter' // defaults to 'char'
  });

  var letterItems = document.querySelectorAll('h1 b');
  TweenMax.staggerFromTo(letterItems, .5, { opacity: 0 }, { opacity: 1, delay: 1 }, 0.05);
};

var init = function init() {

  var smoothContainer = document.querySelector('.smooth');
  var smooth = new __WEBPACK_IMPORTED_MODULE_0_smooth_scrolling__["a" /* default */]({
    native: true,
    section: smoothContainer,
    ease: 0.03,
    noscrollbar: true
  });

  smooth.init();
  letters();
};

init();

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_classes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dom_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_create_element__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dom_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prefix__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prefix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prefix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_virtual_scroll__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_virtual_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_virtual_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_events__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dom_events__);






class Smooth {
    
    constructor(opt = {}) {
                
        this.createBound()

        this.options = opt

        this.prefix = __WEBPACK_IMPORTED_MODULE_2_prefix___default()('transform')
        this.rAF = undefined

        // It seems that under heavy load, Firefox will still call the RAF callback even though the RAF has been canceled
        // To prevent that we set a flag to prevent any callback to be executed when RAF is removed
        this.isRAFCanceled = false
        
        const constructorName = this.constructor.name ? this.constructor.name : 'Smooth'
        this.extends = constructorName != 'Smooth'
        
        this.callback = this.options.callback || null
        
        this.vars = {
            direction: this.options.direction || 'vertical',
            native: this.options.native || false,
            ease: this.options.ease || 0.075,
            preload: this.options.preload || false,
            current: 0,
            last: 0,
            target: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            bounding: 0,
            timer: null,
            ticking: false
        }
        
        this.vs = this.vars.native ? null : new __WEBPACK_IMPORTED_MODULE_3_virtual_scroll___default.a({
            limitInertia: this.options.vs && this.options.vs.limitInertia || false,
            mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
            touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
            firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
            preventTouch: this.options.vs && this.options.vs.preventTouch || true
        })
        
        this.dom = {
            listener: this.options.listener || document.body,
            section: this.options.section || document.querySelector('.vs-section') || null,
            scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                state: {
                    clicked: false,
                    x: 0
                },
                el: __WEBPACK_IMPORTED_MODULE_1_dom_create_element___default()({ selector: 'div', styles: `vs-scrollbar vs-${this.vars.direction} vs-scrollbar-${constructorName.toLowerCase()}` }),
                drag: {
                    el: __WEBPACK_IMPORTED_MODULE_1_dom_create_element___default()({ selector: 'div', styles: 'vs-scrolldrag' }),
                    delta: 0,
                    height: 50
                }
            }
        }
    }
    
    createBound() {

        ['run', 'calc', 'debounce', 'resize', 'mouseUp', 'mouseDown', 'mouseMove', 'calcScroll', 'scrollTo']
        .forEach((fn) => this[fn] = this[fn].bind(this));
    }
    
    init() {

        this.addClasses()

        this.vars.preload && this.preloadImages()
        this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar()
        
        this.addEvents()
        this.resize()
    }
    
    addClasses() {
        
        const type = this.vars.native ? 'native' : 'virtual'
        const direction = this.vars.direction === 'vertical' ? 'y' : 'x'
        
        __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.add(this.dom.listener, `is-${type}-scroll`)
        __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.add(this.dom.listener, `${direction}-scroll`)
    }

    preloadImages() {
        
        const images = Array.prototype.slice.call(this.dom.listener.querySelectorAll('img'), 0)
        
        images.forEach((image) => {
            
            const img = document.createElement('img')
            
            __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.once(img, 'load', () => {
                
                images.splice(images.indexOf(image), 1)
                images.length === 0 && this.resize()
            })
            
            img.src = image.getAttribute('src')
        })
    }
    
    calc(e) {
        
        const delta = this.vars.direction == 'horizontal' ? e.deltaX : e.deltaY
        
        this.vars.target += delta * -1
        this.clampTarget()
    }
    
    debounce() {

        const win = this.dom.listener === document.body

        this.vars.target = this.vars.direction === 'vertical' ? win ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : win ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft
        
        clearTimeout(this.vars.timer)
        
        if(!this.vars.ticking) {
            this.vars.ticking = true;
            __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.add(this.dom.listener, 'is-scrolling')
        }
        
        this.vars.timer = setTimeout(() => {
            this.vars.ticking = false
            __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'is-scrolling')
        }, 200)
    }
    
    run() {
        if (this.isRAFCanceled) return

        this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease
        this.vars.current < .1 && (this.vars.current = 0)
        
        this.rAF = requestAnimationFrame(this.run)

        if(!this.extends){
            this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))
        }
        
        if(!this.vars.native && !this.options.noscrollbar) {
            const size = this.dom.scrollbar.drag.height
            const bounds = this.vars.direction === 'vertical' ? this.vars.height : this.vars.width
            const value = (Math.abs(this.vars.current) / (this.vars.bounding / (bounds - size))) + (size / .5) - size
            const clamp = Math.max(0, Math.min(value-size, value+size))
            this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(clamp.toFixed(2))
        }

        if (this.callback && this.vars.current !== this.vars.last) {
            this.callback(this.vars.current)
        }

        this.vars.last = this.vars.current;
    }
    
    getTransform(value) {
        
        return this.vars.direction === 'vertical' ? 'translate3d(0,' + value + 'px,0)' : 'translate3d(' + value + 'px,0,0)'
    }
    
    on(requestAnimationFrame = true) {
        if (this.isRAFCanceled) {
            this.isRAFCanceled = false
        }

        const node = this.dom.listener === document.body ? window : this.dom.listener

        this.vars.native ? __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(node, 'scroll', this.debounce) : (this.vs && this.vs.on(this.calc))
        
        requestAnimationFrame && this.requestAnimationFrame()
    }
    
    off(cancelAnimationFrame = true) {
        
        const node = this.dom.listener === document.body ? window : this.dom.listener
        
        this.vars.native ? __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(node, 'scroll', this.debounce) : (this.vs && this.vs.off(this.calc))
        
        cancelAnimationFrame && this.cancelAnimationFrame()
    }

    requestAnimationFrame() {

        this.rAF = requestAnimationFrame(this.run)
    }
    
    cancelAnimationFrame() {
        this.isRAFCanceled = true
        cancelAnimationFrame(this.rAF)
    }
    
    addEvents() {
        
        this.on()
        
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(window, 'resize', this.resize)
    }
    
    removeEvents() {
        
        this.off()
        
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(window, 'resize', this.resize)
    }

    addFakeScrollBar() {
        
        this.dom.listener.appendChild(this.dom.scrollbar.el)
        this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el)

        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(this.dom.scrollbar.el, 'click', this.calcScroll)
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(this.dom.scrollbar.el, 'mousedown', this.mouseDown)
        
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(document, 'mousemove', this.mouseMove)
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.on(document, 'mouseup', this.mouseUp)
    }

    removeFakeScrollBar() {

        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(this.dom.scrollbar.el, 'click', this.calcScroll)
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(this.dom.scrollbar.el, 'mousedown', this.mouseDown)

        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(document, 'mousemove', this.mouseMove)
        __WEBPACK_IMPORTED_MODULE_4_dom_events___default.a.off(document, 'mouseup', this.mouseUp)

        this.dom.listener.removeChild(this.dom.scrollbar.el)
    }

    mouseDown(e) {
        
        e.preventDefault()
        e.which == 1 && (this.dom.scrollbar.state.clicked = true)
    }

    mouseUp(e) {

        this.dom.scrollbar.state.clicked = false
        
        __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'is-dragging')
    }

    mouseMove(e) {

        this.dom.scrollbar.state.clicked && this.calcScroll(e)
    }

    addFakeScrollHeight() {

        this.dom.scroll = __WEBPACK_IMPORTED_MODULE_1_dom_create_element___default()({
            selector: 'div',
            styles: 'vs-scroll-view'
        })
        
        this.dom.listener.appendChild(this.dom.scroll)
    }
    
    removeFakeScrollHeight() {

        this.dom.listener.removeChild(this.dom.scroll)
    }
    
    calcScroll(e) {

        const client = this.vars.direction == 'vertical' ? e.clientY : e.clientX
        const bounds = this.vars.direction == 'vertical' ? this.vars.height : this.vars.width
        const delta = client * (this.vars.bounding / bounds)
        
        __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.add(this.dom.listener, 'is-dragging')

        this.vars.target = delta
        this.clampTarget()
        this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
    }
    
    scrollTo(offset) {
        
        if(this.vars.native) {
            
            this.vars.direction == 'vertical' ? window.scrollTo(0, offset) : window.scrollTo(offset, 0)
            
        } else {

            this.vars.target = offset
            this.clampTarget()
        }
    }

    resize() {
        
        const prop = this.vars.direction === 'vertical' ? 'height' : 'width';
        
        this.vars.height = window.innerHeight
        this.vars.width = window.innerWidth
        
        if(!this.extends) {
            const bounding = this.dom.section.getBoundingClientRect()
            this.vars.bounding = this.vars.direction === 'vertical' ? bounding.height - (this.vars.native ? 0 : this.vars.height) : bounding.right - (this.vars.native ? 0 : this.vars.width)
        }
        
        if(!this.vars.native && !this.options.noscrollbar) {
            this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height))
            this.dom.scrollbar.drag.el.style[prop] = `${this.dom.scrollbar.drag.height}px`
        } else if(this.vars.native) {
            this.dom.scroll.style[prop] = `${this.vars.bounding}px`
        }
        
        !this.vars.native && this.clampTarget();
    }

    clampTarget() {
        
        this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
    }
    
    destroy() {
        
        if(this.vars.native) {

            __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'is-native-scroll')
            
            this.removeFakeScrollHeight()

        } else {
            
            __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'is-virtual-scroll')
            
            !this.options.noscrollbar && this.removeFakeScrollBar()
        } 
        
        this.vars.direction === 'vertical' ? __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'y-scroll') : __WEBPACK_IMPORTED_MODULE_0_dom_classes___default.a.remove(this.dom.listener, 'x-scroll')
        this.vars.current = 0
        
        this.vs && (this.vs.destroy(), this.vs = null)
        
        this.removeEvents()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Smooth;


window.Smooth = Smooth

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var index = __webpack_require__(55);

/**
 * Whitespace regexp.
 */

var whitespaceRe = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

module.exports = classes;
module.exports.add = add;
module.exports.contains = has;
module.exports.has = has;
module.exports.toggle = toggle;
module.exports.remove = remove;
module.exports.removeMatching = removeMatching;

function classes (el) {
  if (el.classList) {
    return el.classList;
  }

  var str = el.className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(whitespaceRe);
  if ('' === arr[0]) arr.shift();
  return arr;
}

function add (el, name) {
  // classList
  if (el.classList) {
    el.classList.add(name);
    return;
  }

  // fallback
  var arr = classes(el);
  var i = index(arr, name);
  if (!~i) arr.push(name);
  el.className = arr.join(' ');
}

function has (el, name) {
  return el.classList
    ? el.classList.contains(name)
    : !! ~index(classes(el), name);
}

function remove (el, name) {
  if ('[object RegExp]' == toString.call(name)) {
    return removeMatching(el, name);
  }

  // classList
  if (el.classList) {
    el.classList.remove(name);
    return;
  }

  // fallback
  var arr = classes(el);
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  el.className = arr.join(' ');
}

function removeMatching (el, re, ref) {
  var arr = Array.prototype.slice.call(classes(el));
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      remove(el, arr[i]);
    }
  }
}

function toggle (el, name) {
  // classList
  if (el.classList) {
    return el.classList.toggle(name);
  }

  // fallback
  if (has(el, name)) {
    remove(el, name);
  } else {
    add(el, name);
  }
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

/*
`dom-create-element`

var create = require('dom-create-element');

var el = create({
  selector: 'div',
  styles: 'preloader',
  html: '<span>Text</span>'
});
*/

module.exports = create;

function create(opt) {

	opt = opt || {};
	
	var el = document.createElement(opt.selector);
	
	if(opt.attr) for(var index in opt.attr)
		opt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index]);
	
	"a" == opt.selector && opt.link && (
		el.href = opt.link,
		opt.target && el.setAttribute("target", opt.target)
	);

	"img" == opt.selector && opt.src && (
		el.src = opt.src,
		opt.lazyload && (
			el.style.opacity = 0,
			el.onload = function(){
				el.style.opacity = 1;
			}
		)
	);

	opt.id && (el.id = opt.id);
	opt.styles && (el.className = opt.styles);

	opt.html && (el.innerHTML = opt.html);
	opt.children && (el.appendChild(opt.children));
	
	return el;
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// check document first so it doesn't error in node.js
var style = typeof document != 'undefined'
  ? document.createElement('p').style
  : {}

var prefixes = ['O', 'ms', 'Moz', 'Webkit']
var upper = /([A-Z])/g
var memo = {}

/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefix(key){
  // Camel case
  key = key.replace(/-([a-z])/g, function(_, char){
    return char.toUpperCase()
  })

  // Without prefix
  if (style[key] !== undefined) return key

  // With prefix
  var Key = key.charAt(0).toUpperCase() + key.slice(1)
  var i = prefixes.length
  while (i--) {
    var name = prefixes[i] + Key
    if (style[name] !== undefined) return name
  }

  return key
}

/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixMemozied(key){
  return key in memo
    ? memo[key]
    : memo[key] = prefix(key)
}

/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixDashed(key){
  key = prefix(key)
  if (upper.test(key)) {
    key = '-' + key.replace(upper, '-$1')
    upper.lastIndex = 0
  }
  return key.toLowerCase()
}

module.exports = prefixMemozied
module.exports.dash = prefixDashed


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(59);
var Emitter = __webpack_require__(60);
var Lethargy = __webpack_require__(61).Lethargy;
var support = __webpack_require__(62);
var clone = __webpack_require__(63);
var bindAll = __webpack_require__(64);
var EVT_ID = 'virtualscroll';

module.exports = VirtualScroll;

var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function VirtualScroll(options) {
    bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false
    }, options);

    if (this.options.limitInertia) this._lethargy = new Lethargy();

    this._emitter = new Emitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;

    if (this.options.passive !== undefined) {
        this.listenerOptions = {passive: this.options.passive};
    }
}

VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;

   this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
   });
};

VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;

    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if(support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }

    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;

    this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;

    var evt = this._event;

    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
    evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

    this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function(e) {
    var t = (e.targetTouches) ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if(options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case keyCodes.SPACE && e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    if(support.hasTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
      return false;
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(this);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in document,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString,
    hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function(object) {
    if(!object) return console.warn('bindAll requires at least one argument.');

    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {

        for (var method in object) {
            if(hasOwnProperty.call(object, method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};

/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


var synth = __webpack_require__(66);

var on = function(element, name, fn, capture) {
    return element.addEventListener(name, fn, capture || false);
};

var off = function(element, name, fn, capture) {
    return element.removeEventListener(name, fn, capture || false);
};

var once = function (element, name, fn, capture) {
    function tmp (ev) {
        off(element, name, tmp, capture);
        fn(ev);
    }
    on(element, name, tmp, capture);
};

var emit = function(element, name, opt) {
    var ev = synth(name, opt);
    element.dispatchEvent(ev);
};

if (!document.addEventListener) {
    on = function(element, name, fn) {
        return element.attachEvent('on' + name, fn);
    };
}

if (!document.removeEventListener) {
    off = function(element, name, fn) {
        return element.detachEvent('on' + name, fn);
    };
}

if (!document.dispatchEvent) {
    emit = function(element, name, opt) {
        var ev = synth(name, opt);
        return element.fireEvent('on' + ev.type, ev);
    };
}

module.exports = {
    on: on,
    off: off,
    once: once,
    emit: emit
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


// for compression
var win = window;
var doc = document || {};
var root = doc.documentElement || {};

// detect if we need to use firefox KeyEvents vs KeyboardEvents
var use_key_event = true;
try {
    doc.createEvent('KeyEvents');
}
catch (err) {
    use_key_event = false;
}

// Workaround for https://bugs.webkit.org/show_bug.cgi?id=16735
function check_kb(ev, opts) {
    if (ev.ctrlKey != (opts.ctrlKey || false) ||
        ev.altKey != (opts.altKey || false) ||
        ev.shiftKey != (opts.shiftKey || false) ||
        ev.metaKey != (opts.metaKey || false) ||
        ev.keyCode != (opts.keyCode || 0) ||
        ev.charCode != (opts.charCode || 0)) {

        ev = document.createEvent('Event');
        ev.initEvent(opts.type, opts.bubbles, opts.cancelable);
        ev.ctrlKey  = opts.ctrlKey || false;
        ev.altKey   = opts.altKey || false;
        ev.shiftKey = opts.shiftKey || false;
        ev.metaKey  = opts.metaKey || false;
        ev.keyCode  = opts.keyCode || 0;
        ev.charCode = opts.charCode || 0;
    }

    return ev;
}

// modern browsers, do a proper dispatchEvent()
var modern = function(type, opts) {
    opts = opts || {};

    // which init fn do we use
    var family = typeOf(type);
    var init_fam = family;
    if (family === 'KeyboardEvent' && use_key_event) {
        family = 'KeyEvents';
        init_fam = 'KeyEvent';
    }

    var ev = doc.createEvent(family);
    var init_fn = 'init' + init_fam;
    var init = typeof ev[init_fn] === 'function' ? init_fn : 'initEvent';

    var sig = initSignatures[init];
    var args = [];
    var used = {};

    opts.type = type;
    for (var i = 0; i < sig.length; ++i) {
        var key = sig[i];
        var val = opts[key];
        // if no user specified value, then use event default
        if (val === undefined) {
            val = ev[key];
        }
        used[key] = true;
        args.push(val);
    }
    ev[init].apply(ev, args);

    // webkit key event issue workaround
    if (family === 'KeyboardEvent') {
        ev = check_kb(ev, opts);
    }

    // attach remaining unused options to the object
    for (var key in opts) {
        if (!used[key]) {
            ev[key] = opts[key];
        }
    }

    return ev;
};

var legacy = function (type, opts) {
    opts = opts || {};
    var ev = doc.createEventObject();

    ev.type = type;
    for (var key in opts) {
        if (opts[key] !== undefined) {
            ev[key] = opts[key];
        }
    }

    return ev;
};

// expose either the modern version of event generation or legacy
// depending on what we support
// avoids if statements in the code later
module.exports = doc.createEvent ? modern : legacy;

var initSignatures = __webpack_require__(67);
var types = __webpack_require__(68);
var typeOf = (function () {
    var typs = {};
    for (var key in types) {
        var ts = types[key];
        for (var i = 0; i < ts.length; i++) {
            typs[ts[i]] = key;
        }
    }

    return function (name) {
        return typs[name] || 'Event';
    };
})();


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {"initEvent":["type","bubbles","cancelable"],"initUIEvent":["type","bubbles","cancelable","view","detail"],"initMouseEvent":["type","bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],"initMutationEvent":["type","bubbles","cancelable","relatedNode","prevValue","newValue","attrName","attrChange"],"initKeyboardEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"],"initKeyEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"]}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {"MouseEvent":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"KeyboardEvent":["keydown","keyup","keypress"],"MutationEvent":["DOMSubtreeModified","DOMNodeInserted","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMNodeInsertedIntoDocument","DOMAttrModified","DOMCharacterDataModified"],"HTMLEvents":["load","unload","abort","error","select","change","submit","reset","focus","blur","resize","scroll"],"UIEvent":["DOMFocusIn","DOMFocusOut","DOMActivate"]}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (element, options) {
  options = options || {}

  var tagName = options.tagName || 'span'
  var classPrefix = options.classPrefix != null ? options.classPrefix : 'char'
  var count = 1

  function inject (element) {
    var parentNode = element.parentNode
    var string = element.nodeValue
    var length = string.length
    var i = -1
    while (++i < length) {
      var node = document.createElement(tagName)
      if (classPrefix) {
        node.className = classPrefix + count
        count++
      }
      node.appendChild(document.createTextNode(string[i]))
      parentNode.insertBefore(node, element)
    }
    parentNode.removeChild(element)
  }

  ;(function traverse (element) {
    // `element` is itself a text node.
    if (element.nodeType === Node.TEXT_NODE) {
      return inject(element)
    }

    // `element` has a single child text node.
    var childNodes = Array.prototype.slice.call(element.childNodes) // static array of nodes
    var length = childNodes.length
    if (length === 1 && childNodes[0].nodeType === Node.TEXT_NODE) {
      return inject(childNodes[0])
    }

    // `element` has more than one child node.
    var i = -1
    while (++i < length) {
      traverse(childNodes[i])
    }
  })(element)
}


/***/ })
/******/ ]);