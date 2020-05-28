(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["rkTree"] = factory(require("jquery"));
	else
		root["rkTree"] = factory(root["jquery"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_c5e1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "aa1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a15b");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("baa5");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var E_github_project_rk_tree_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("53ca");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("c5e1");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);















/*
 * JQuery zTree core
 * v3.5.44
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-04-29
 */


(function (_$) {
  var settings = {},
      roots = {},
      caches = {},
      //default consts of core
  _consts = {
    className: {
      BUTTON: "button",
      LEVEL: "level",
      ICO_LOADING: "ico_loading",
      SWITCH: "switch",
      NAME: 'node_name'
    },
    event: {
      NODECREATED: "ztree_nodeCreated",
      CLICK: "ztree_click",
      EXPAND: "ztree_expand",
      COLLAPSE: "ztree_collapse",
      ASYNC_SUCCESS: "ztree_async_success",
      ASYNC_ERROR: "ztree_async_error",
      REMOVE: "ztree_remove",
      SELECTED: "ztree_selected",
      UNSELECTED: "ztree_unselected"
    },
    id: {
      A: "_a",
      ICON: "_ico",
      SPAN: "_span",
      SWITCH: "_switch",
      UL: "_ul"
    },
    line: {
      ROOT: "root",
      ROOTS: "roots",
      CENTER: "center",
      BOTTOM: "bottom",
      NOLINE: "noline",
      LINE: "line"
    },
    folder: {
      OPEN: "open",
      CLOSE: "close",
      DOCU: "docu"
    },
    node: {
      CURSELECTED: "curSelectedNode"
    }
  },
      //default setting of core
  _setting = {
    treeId: "",
    treeObj: null,
    view: {
      addDiyDom: null,
      autoCancelSelected: true,
      dblClickExpand: true,
      expandSpeed: "fast",
      fontCss: {},
      nodeClasses: {},
      nameIsHTML: false,
      selectedMulti: true,
      showIcon: true,
      showLine: true,
      showTitle: true,
      txtSelectedEnable: false
    },
    data: {
      key: {
        isParent: "isParent",
        children: "children",
        name: "name",
        title: "",
        url: "url",
        icon: "icon"
      },
      simpleData: {
        enable: false,
        idKey: "id",
        pIdKey: "pId",
        rootPId: null
      },
      keep: {
        parent: false,
        leaf: false
      }
    },
    async: {
      enable: false,
      contentType: "application/x-www-form-urlencoded",
      type: "post",
      dataType: "text",
      headers: {},
      xhrFields: {},
      url: "",
      autoParam: [],
      otherParam: [],
      dataFilter: null
    },
    callback: {
      beforeAsync: null,
      beforeClick: null,
      beforeDblClick: null,
      beforeRightClick: null,
      beforeMouseDown: null,
      beforeMouseUp: null,
      beforeExpand: null,
      beforeCollapse: null,
      beforeRemove: null,
      onAsyncError: null,
      onAsyncSuccess: null,
      onNodeCreated: null,
      onClick: null,
      onDblClick: null,
      onRightClick: null,
      onMouseDown: null,
      onMouseUp: null,
      onExpand: null,
      onCollapse: null,
      onRemove: null
    }
  },
      //default root of core
  //zTree use root to save full data
  _initRoot = function _initRoot(setting) {
    var r = data.getRoot(setting);

    if (!r) {
      r = {};
      data.setRoot(setting, r);
    }

    data.nodeChildren(setting, r, []);
    r.expandTriggerFlag = false;
    r.curSelectedList = [];
    r.noSelection = true;
    r.createdNodes = [];
    r.zId = 0;
    r._ver = new Date().getTime();
  },
      //default cache of core
  _initCache = function _initCache(setting) {
    var c = data.getCache(setting);

    if (!c) {
      c = {};
      data.setCache(setting, c);
    }

    c.nodes = [];
    c.doms = [];
  },
      //default bindEvent of core
  _bindEvent = function _bindEvent(setting) {
    var o = setting.treeObj,
        c = consts.event;
    o.bind(c.NODECREATED, function (event, treeId, node) {
      tools.apply(setting.callback.onNodeCreated, [event, treeId, node]);
    });
    o.bind(c.CLICK, function (event, srcEvent, treeId, node, clickFlag) {
      tools.apply(setting.callback.onClick, [srcEvent, treeId, node, clickFlag]);
    });
    o.bind(c.EXPAND, function (event, treeId, node) {
      tools.apply(setting.callback.onExpand, [event, treeId, node]);
    });
    o.bind(c.COLLAPSE, function (event, treeId, node) {
      tools.apply(setting.callback.onCollapse, [event, treeId, node]);
    });
    o.bind(c.ASYNC_SUCCESS, function (event, treeId, node, msg) {
      tools.apply(setting.callback.onAsyncSuccess, [event, treeId, node, msg]);
    });
    o.bind(c.ASYNC_ERROR, function (event, treeId, node, XMLHttpRequest, textStatus, errorThrown) {
      tools.apply(setting.callback.onAsyncError, [event, treeId, node, XMLHttpRequest, textStatus, errorThrown]);
    });
    o.bind(c.REMOVE, function (event, treeId, treeNode) {
      tools.apply(setting.callback.onRemove, [event, treeId, treeNode]);
    });
    o.bind(c.SELECTED, function (event, treeId, node) {
      tools.apply(setting.callback.onSelected, [treeId, node]);
    });
    o.bind(c.UNSELECTED, function (event, treeId, node) {
      tools.apply(setting.callback.onUnSelected, [treeId, node]);
    });
  },
      _unbindEvent = function _unbindEvent(setting) {
    var o = setting.treeObj,
        c = consts.event;
    o.unbind(c.NODECREATED).unbind(c.CLICK).unbind(c.EXPAND).unbind(c.COLLAPSE).unbind(c.ASYNC_SUCCESS).unbind(c.ASYNC_ERROR).unbind(c.REMOVE).unbind(c.SELECTED).unbind(c.UNSELECTED);
  },
      //default event proxy of core
  _eventProxy = function _eventProxy(event) {
    var target = event.target,
        setting = data.getSetting(event.data.treeId),
        tId = "",
        node = null,
        nodeEventType = "",
        treeEventType = "",
        nodeEventCallback = null,
        treeEventCallback = null,
        tmp = null;

    if (tools.eqs(event.type, "mousedown")) {
      treeEventType = "mousedown";
    } else if (tools.eqs(event.type, "mouseup")) {
      treeEventType = "mouseup";
    } else if (tools.eqs(event.type, "contextmenu")) {
      treeEventType = "contextmenu";
    } else if (tools.eqs(event.type, "click")) {
      if (tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.SWITCH) !== null) {
        tId = tools.getNodeMainDom(target).id;
        nodeEventType = "switchNode";
      } else {
        tmp = tools.getMDom(setting, target, [{
          tagName: "a",
          attrName: "treeNode" + consts.id.A
        }]);

        if (tmp) {
          tId = tools.getNodeMainDom(tmp).id;
          nodeEventType = "clickNode";
        }
      }
    } else if (tools.eqs(event.type, "dblclick")) {
      treeEventType = "dblclick";
      tmp = tools.getMDom(setting, target, [{
        tagName: "a",
        attrName: "treeNode" + consts.id.A
      }]);

      if (tmp) {
        tId = tools.getNodeMainDom(tmp).id;
        nodeEventType = "switchNode";
      }
    }

    if (treeEventType.length > 0 && tId.length == 0) {
      tmp = tools.getMDom(setting, target, [{
        tagName: "a",
        attrName: "treeNode" + consts.id.A
      }]);

      if (tmp) {
        tId = tools.getNodeMainDom(tmp).id;
      }
    } // event to node


    if (tId.length > 0) {
      node = data.getNodeCache(setting, tId);

      switch (nodeEventType) {
        case "switchNode":
          var isParent = data.nodeIsParent(setting, node);

          if (!isParent) {
            nodeEventType = "";
          } else if (tools.eqs(event.type, "click") || tools.eqs(event.type, "dblclick") && tools.apply(setting.view.dblClickExpand, [setting.treeId, node], setting.view.dblClickExpand)) {
            nodeEventCallback = handler.onSwitchNode;
          } else {
            nodeEventType = "";
          }

          break;

        case "clickNode":
          nodeEventCallback = handler.onClickNode;
          break;
      }
    } // event to zTree


    switch (treeEventType) {
      case "mousedown":
        treeEventCallback = handler.onZTreeMousedown;
        break;

      case "mouseup":
        treeEventCallback = handler.onZTreeMouseup;
        break;

      case "dblclick":
        treeEventCallback = handler.onZTreeDblclick;
        break;

      case "contextmenu":
        treeEventCallback = handler.onZTreeContextmenu;
        break;
    }

    var proxyResult = {
      stop: false,
      node: node,
      nodeEventType: nodeEventType,
      nodeEventCallback: nodeEventCallback,
      treeEventType: treeEventType,
      treeEventCallback: treeEventCallback
    };
    return proxyResult;
  },
      //default init node of core
  _initNode = function _initNode(setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
    if (!n) return;
    var r = data.getRoot(setting),
        children = data.nodeChildren(setting, n);
    n.level = level;
    n.tId = setting.treeId + "_" + ++r.zId;
    n.parentTId = parentNode ? parentNode.tId : null;
    n.open = typeof n.open == "string" ? tools.eqs(n.open, "true") : !!n.open;
    var isParent = data.nodeIsParent(setting, n);

    if (tools.isArray(children)) {
      data.nodeIsParent(setting, n, true);
      n.zAsync = true;
    } else {
      isParent = data.nodeIsParent(setting, n, isParent);
      n.open = isParent && !setting.async.enable ? n.open : false;
      n.zAsync = !isParent;
    }

    n.isFirstNode = isFirstNode;
    n.isLastNode = isLastNode;

    n.getParentNode = function () {
      return data.getNodeCache(setting, n.parentTId);
    };

    n.getPreNode = function () {
      return data.getPreNode(setting, n);
    };

    n.getNextNode = function () {
      return data.getNextNode(setting, n);
    };

    n.getIndex = function () {
      return data.getNodeIndex(setting, n);
    };

    n.getPath = function () {
      return data.getNodePath(setting, n);
    };

    n.isAjaxing = false;
    data.fixPIdKeyValue(setting, n);
  },
      _init = {
    bind: [_bindEvent],
    unbind: [_unbindEvent],
    caches: [_initCache],
    nodes: [_initNode],
    proxys: [_eventProxy],
    roots: [_initRoot],
    beforeA: [],
    afterA: [],
    innerBeforeA: [],
    innerAfterA: [],
    zTreeTools: []
  },
      //method of operate data
  data = {
    addNodeCache: function addNodeCache(setting, node) {
      data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = node;
    },
    getNodeCacheId: function getNodeCacheId(tId) {
      return tId.substring(tId.lastIndexOf("_") + 1);
    },
    addAfterA: function addAfterA(afterA) {
      _init.afterA.push(afterA);
    },
    addBeforeA: function addBeforeA(beforeA) {
      _init.beforeA.push(beforeA);
    },
    addInnerAfterA: function addInnerAfterA(innerAfterA) {
      _init.innerAfterA.push(innerAfterA);
    },
    addInnerBeforeA: function addInnerBeforeA(innerBeforeA) {
      _init.innerBeforeA.push(innerBeforeA);
    },
    addInitBind: function addInitBind(bindEvent) {
      _init.bind.push(bindEvent);
    },
    addInitUnBind: function addInitUnBind(unbindEvent) {
      _init.unbind.push(unbindEvent);
    },
    addInitCache: function addInitCache(initCache) {
      _init.caches.push(initCache);
    },
    addInitNode: function addInitNode(initNode) {
      _init.nodes.push(initNode);
    },
    addInitProxy: function addInitProxy(initProxy, isFirst) {
      if (!!isFirst) {
        _init.proxys.splice(0, 0, initProxy);
      } else {
        _init.proxys.push(initProxy);
      }
    },
    addInitRoot: function addInitRoot(initRoot) {
      _init.roots.push(initRoot);
    },
    addNodesData: function addNodesData(setting, parentNode, index, nodes) {
      var children = data.nodeChildren(setting, parentNode),
          params;

      if (!children) {
        children = data.nodeChildren(setting, parentNode, []);
        index = -1;
      } else if (index >= children.length) {
        index = -1;
      }

      if (children.length > 0 && index === 0) {
        children[0].isFirstNode = false;
        view.setNodeLineIcos(setting, children[0]);
      } else if (children.length > 0 && index < 0) {
        children[children.length - 1].isLastNode = false;
        view.setNodeLineIcos(setting, children[children.length - 1]);
      }

      data.nodeIsParent(setting, parentNode, true);

      if (index < 0) {
        data.nodeChildren(setting, parentNode, children.concat(nodes));
      } else {
        params = [index, 0].concat(nodes);
        children.splice.apply(children, params);
      }
    },
    addSelectedNode: function addSelectedNode(setting, node) {
      var root = data.getRoot(setting);

      if (!data.isSelectedNode(setting, node)) {
        root.curSelectedList.push(node);
      }
    },
    addCreatedNode: function addCreatedNode(setting, node) {
      if (!!setting.callback.onNodeCreated || !!setting.view.addDiyDom) {
        var root = data.getRoot(setting);
        root.createdNodes.push(node);
      }
    },
    addZTreeTools: function addZTreeTools(zTreeTools) {
      _init.zTreeTools.push(zTreeTools);
    },
    exSetting: function exSetting(s) {
      _$.extend(true, _setting, s);
    },
    fixPIdKeyValue: function fixPIdKeyValue(setting, node) {
      if (setting.data.simpleData.enable) {
        node[setting.data.simpleData.pIdKey] = node.parentTId ? node.getParentNode()[setting.data.simpleData.idKey] : setting.data.simpleData.rootPId;
      }
    },
    getAfterA: function getAfterA(setting, node, array) {
      for (var i = 0, j = _init.afterA.length; i < j; i++) {
        _init.afterA[i].apply(this, arguments);
      }
    },
    getBeforeA: function getBeforeA(setting, node, array) {
      for (var i = 0, j = _init.beforeA.length; i < j; i++) {
        _init.beforeA[i].apply(this, arguments);
      }
    },
    getInnerAfterA: function getInnerAfterA(setting, node, array) {
      for (var i = 0, j = _init.innerAfterA.length; i < j; i++) {
        _init.innerAfterA[i].apply(this, arguments);
      }
    },
    getInnerBeforeA: function getInnerBeforeA(setting, node, array) {
      for (var i = 0, j = _init.innerBeforeA.length; i < j; i++) {
        _init.innerBeforeA[i].apply(this, arguments);
      }
    },
    getCache: function getCache(setting) {
      return caches[setting.treeId];
    },
    getNodeIndex: function getNodeIndex(setting, node) {
      if (!node) return null;
      var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);

      for (var i = 0, l = children.length - 1; i <= l; i++) {
        if (children[i] === node) {
          return i;
        }
      }

      return -1;
    },
    getNextNode: function getNextNode(setting, node) {
      if (!node) return null;
      var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);

      for (var i = 0, l = children.length - 1; i <= l; i++) {
        if (children[i] === node) {
          return i == l ? null : children[i + 1];
        }
      }

      return null;
    },
    getNodeByParam: function getNodeByParam(setting, nodes, key, value) {
      if (!nodes || !key) return null;

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (node[key] == value) {
          return nodes[i];
        }

        var children = data.nodeChildren(setting, node);
        var tmp = data.getNodeByParam(setting, children, key, value);
        if (tmp) return tmp;
      }

      return null;
    },
    getNodeCache: function getNodeCache(setting, tId) {
      if (!tId) return null;
      var n = caches[setting.treeId].nodes[data.getNodeCacheId(tId)];
      return n ? n : null;
    },
    getNodePath: function getNodePath(setting, node) {
      if (!node) return null;
      var path;

      if (node.parentTId) {
        path = node.getParentNode().getPath();
      } else {
        path = [];
      }

      if (path) {
        path.push(node);
      }

      return path;
    },
    getNodes: function getNodes(setting) {
      return data.nodeChildren(setting, data.getRoot(setting));
    },
    getNodesByParam: function getNodesByParam(setting, nodes, key, value) {
      if (!nodes || !key) return [];
      var result = [];

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (node[key] == value) {
          result.push(node);
        }

        var children = data.nodeChildren(setting, node);
        result = result.concat(data.getNodesByParam(setting, children, key, value));
      }

      return result;
    },
    getNodesByParamFuzzy: function getNodesByParamFuzzy(setting, nodes, key, value) {
      if (!nodes || !key) return [];
      var result = [];
      value = value.toLowerCase();

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (typeof node[key] == "string" && nodes[i][key].toLowerCase().indexOf(value) > -1) {
          result.push(node);
        }

        var children = data.nodeChildren(setting, node);
        result = result.concat(data.getNodesByParamFuzzy(setting, children, key, value));
      }

      return result;
    },
    getNodesByFilter: function getNodesByFilter(setting, nodes, filter, isSingle, invokeParam) {
      if (!nodes) return isSingle ? null : [];
      var result = isSingle ? null : [];

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (tools.apply(filter, [node, invokeParam], false)) {
          if (isSingle) {
            return node;
          }

          result.push(node);
        }

        var children = data.nodeChildren(setting, node);
        var tmpResult = data.getNodesByFilter(setting, children, filter, isSingle, invokeParam);

        if (isSingle && !!tmpResult) {
          return tmpResult;
        }

        result = isSingle ? tmpResult : result.concat(tmpResult);
      }

      return result;
    },
    getPreNode: function getPreNode(setting, node) {
      if (!node) return null;
      var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);

      for (var i = 0, l = children.length; i < l; i++) {
        if (children[i] === node) {
          return i == 0 ? null : children[i - 1];
        }
      }

      return null;
    },
    getRoot: function getRoot(setting) {
      return setting ? roots[setting.treeId] : null;
    },
    getRoots: function getRoots() {
      return roots;
    },
    getSetting: function getSetting(treeId) {
      return settings[treeId];
    },
    getSettings: function getSettings() {
      return settings;
    },
    getZTreeTools: function getZTreeTools(treeId) {
      var r = this.getRoot(this.getSetting(treeId));
      return r ? r.treeTools : null;
    },
    initCache: function initCache(setting) {
      for (var i = 0, j = _init.caches.length; i < j; i++) {
        _init.caches[i].apply(this, arguments);
      }
    },
    initNode: function initNode(setting, level, node, parentNode, preNode, nextNode) {
      for (var i = 0, j = _init.nodes.length; i < j; i++) {
        _init.nodes[i].apply(this, arguments);
      }
    },
    initRoot: function initRoot(setting) {
      for (var i = 0, j = _init.roots.length; i < j; i++) {
        _init.roots[i].apply(this, arguments);
      }
    },
    isSelectedNode: function isSelectedNode(setting, node) {
      var root = data.getRoot(setting);

      for (var i = 0, j = root.curSelectedList.length; i < j; i++) {
        if (node === root.curSelectedList[i]) return true;
      }

      return false;
    },
    nodeChildren: function nodeChildren(setting, node, newChildren) {
      if (!node) {
        return null;
      }

      var key = setting.data.key.children;

      if (typeof newChildren !== 'undefined') {
        node[key] = newChildren;
      }

      return node[key];
    },
    nodeIsParent: function nodeIsParent(setting, node, newIsParent) {
      if (!node) {
        return false;
      }

      var key = setting.data.key.isParent;

      if (typeof newIsParent !== 'undefined') {
        if (typeof newIsParent === "string") {
          newIsParent = tools.eqs(newIsParent, "true");
        }

        newIsParent = !!newIsParent;
        node[key] = newIsParent;
      } else if (typeof node[key] == "string") {
        node[key] = tools.eqs(node[key], "true");
      } else {
        node[key] = !!node[key];
      }

      return node[key];
    },
    nodeName: function nodeName(setting, node, newName) {
      var key = setting.data.key.name;

      if (typeof newName !== 'undefined') {
        node[key] = newName;
      }

      return "" + node[key];
    },
    nodeTitle: function nodeTitle(setting, node) {
      var t = setting.data.key.title === "" ? setting.data.key.name : setting.data.key.title;
      return "" + node[t];
    },
    removeNodeCache: function removeNodeCache(setting, node) {
      var children = data.nodeChildren(setting, node);

      if (children) {
        for (var i = 0, l = children.length; i < l; i++) {
          data.removeNodeCache(setting, children[i]);
        }
      }

      data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = null;
    },
    removeSelectedNode: function removeSelectedNode(setting, node) {
      var root = data.getRoot(setting);

      for (var i = 0, j = root.curSelectedList.length; i < j; i++) {
        if (node === root.curSelectedList[i] || !data.getNodeCache(setting, root.curSelectedList[i].tId)) {
          root.curSelectedList.splice(i, 1);
          setting.treeObj.trigger(consts.event.UNSELECTED, [setting.treeId, node]);
          i--;
          j--;
        }
      }
    },
    setCache: function setCache(setting, cache) {
      caches[setting.treeId] = cache;
    },
    setRoot: function setRoot(setting, root) {
      roots[setting.treeId] = root;
    },
    setZTreeTools: function setZTreeTools(setting, zTreeTools) {
      for (var i = 0, j = _init.zTreeTools.length; i < j; i++) {
        _init.zTreeTools[i].apply(this, arguments);
      }
    },
    transformToArrayFormat: function transformToArrayFormat(setting, nodes) {
      if (!nodes) return [];
      var r = [];

      if (tools.isArray(nodes)) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];

          _do(node);
        }
      } else {
        _do(nodes);
      }

      return r;

      function _do(_node) {
        r.push(_node);
        var children = data.nodeChildren(setting, _node);

        if (children) {
          r = r.concat(data.transformToArrayFormat(setting, children));
        }
      }
    },
    transformTozTreeFormat: function transformTozTreeFormat(setting, sNodes) {
      var i,
          l,
          key = setting.data.simpleData.idKey,
          parentKey = setting.data.simpleData.pIdKey;
      if (!key || key == "" || !sNodes) return [];

      if (tools.isArray(sNodes)) {
        var r = [];
        var tmpMap = {};

        for (i = 0, l = sNodes.length; i < l; i++) {
          tmpMap[sNodes[i][key]] = sNodes[i];
        }

        for (i = 0, l = sNodes.length; i < l; i++) {
          var p = tmpMap[sNodes[i][parentKey]];

          if (p && sNodes[i][key] != sNodes[i][parentKey]) {
            var children = data.nodeChildren(setting, p);

            if (!children) {
              children = data.nodeChildren(setting, p, []);
            }

            children.push(sNodes[i]);
          } else {
            r.push(sNodes[i]);
          }
        }

        return r;
      } else {
        return [sNodes];
      }
    }
  },
      //method of event proxy
  event = {
    bindEvent: function bindEvent(setting) {
      for (var i = 0, j = _init.bind.length; i < j; i++) {
        _init.bind[i].apply(this, arguments);
      }
    },
    unbindEvent: function unbindEvent(setting) {
      for (var i = 0, j = _init.unbind.length; i < j; i++) {
        _init.unbind[i].apply(this, arguments);
      }
    },
    bindTree: function bindTree(setting) {
      var eventParam = {
        treeId: setting.treeId
      },
          o = setting.treeObj;

      if (!setting.view.txtSelectedEnable) {
        // for can't select text
        o.bind('selectstart', handler.onSelectStart).css({
          "-moz-user-select": "-moz-none"
        });
      }

      o.bind('click', eventParam, event.proxy);
      o.bind('dblclick', eventParam, event.proxy);
      o.bind('mouseover', eventParam, event.proxy);
      o.bind('mouseout', eventParam, event.proxy);
      o.bind('mousedown', eventParam, event.proxy);
      o.bind('mouseup', eventParam, event.proxy);
      o.bind('contextmenu', eventParam, event.proxy);
    },
    unbindTree: function unbindTree(setting) {
      var o = setting.treeObj;
      o.unbind('selectstart', handler.onSelectStart).unbind('click', event.proxy).unbind('dblclick', event.proxy).unbind('mouseover', event.proxy).unbind('mouseout', event.proxy).unbind('mousedown', event.proxy).unbind('mouseup', event.proxy).unbind('contextmenu', event.proxy);
    },
    doProxy: function doProxy(e) {
      var results = [];

      for (var i = 0, j = _init.proxys.length; i < j; i++) {
        var proxyResult = _init.proxys[i].apply(this, arguments);

        results.push(proxyResult);

        if (proxyResult.stop) {
          break;
        }
      }

      return results;
    },
    proxy: function proxy(e) {
      var setting = data.getSetting(e.data.treeId);
      if (!tools.uCanDo(setting, e)) return true;
      var results = event.doProxy(e),
          r = true,
          x = false;

      for (var i = 0, l = results.length; i < l; i++) {
        var proxyResult = results[i];

        if (proxyResult.nodeEventCallback) {
          x = true;
          r = proxyResult.nodeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r;
        }

        if (proxyResult.treeEventCallback) {
          x = true;
          r = proxyResult.treeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r;
        }
      }

      return r;
    }
  },
      //method of event handler
  handler = {
    onSwitchNode: function onSwitchNode(event, node) {
      var setting = data.getSetting(event.data.treeId);

      if (node.open) {
        if (tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], true) == false) return true;
        data.getRoot(setting).expandTriggerFlag = true;
        view.switchNode(setting, node);
      } else {
        if (tools.apply(setting.callback.beforeExpand, [setting.treeId, node], true) == false) return true;
        data.getRoot(setting).expandTriggerFlag = true;
        view.switchNode(setting, node);
      }

      return true;
    },
    onClickNode: function onClickNode(event, node) {
      var setting = data.getSetting(event.data.treeId),
          clickFlag = setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey) && data.isSelectedNode(setting, node) ? 0 : setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey) && setting.view.selectedMulti ? 2 : 1;
      if (tools.apply(setting.callback.beforeClick, [setting.treeId, node, clickFlag], true) == false) return true;

      if (clickFlag === 0) {
        view.cancelPreSelectedNode(setting, node);
      } else {
        view.selectNode(setting, node, clickFlag === 2);
      }

      setting.treeObj.trigger(consts.event.CLICK, [event, setting.treeId, node, clickFlag]);
      return true;
    },
    onZTreeMousedown: function onZTreeMousedown(event, node) {
      var setting = data.getSetting(event.data.treeId);

      if (tools.apply(setting.callback.beforeMouseDown, [setting.treeId, node], true)) {
        tools.apply(setting.callback.onMouseDown, [event, setting.treeId, node]);
      }

      return true;
    },
    onZTreeMouseup: function onZTreeMouseup(event, node) {
      var setting = data.getSetting(event.data.treeId);

      if (tools.apply(setting.callback.beforeMouseUp, [setting.treeId, node], true)) {
        tools.apply(setting.callback.onMouseUp, [event, setting.treeId, node]);
      }

      return true;
    },
    onZTreeDblclick: function onZTreeDblclick(event, node) {
      var setting = data.getSetting(event.data.treeId);

      if (tools.apply(setting.callback.beforeDblClick, [setting.treeId, node], true)) {
        tools.apply(setting.callback.onDblClick, [event, setting.treeId, node]);
      }

      return true;
    },
    onZTreeContextmenu: function onZTreeContextmenu(event, node) {
      var setting = data.getSetting(event.data.treeId);

      if (tools.apply(setting.callback.beforeRightClick, [setting.treeId, node], true)) {
        tools.apply(setting.callback.onRightClick, [event, setting.treeId, node]);
      }

      return typeof setting.callback.onRightClick != "function";
    },
    onSelectStart: function onSelectStart(e) {
      var n = e.originalEvent.srcElement.nodeName.toLowerCase();
      return n === "input" || n === "textarea";
    }
  },
      //method of tools for zTree
  tools = {
    apply: function apply(fun, param, defaultValue) {
      if (typeof fun == "function") {
        return fun.apply(zt, param ? param : []);
      }

      return defaultValue;
    },
    canAsync: function canAsync(setting, node) {
      var children = data.nodeChildren(setting, node);
      var isParent = data.nodeIsParent(setting, node);
      return setting.async.enable && node && isParent && !(node.zAsync || children && children.length > 0);
    },
    clone: function clone(obj) {
      if (obj === null) return null;
      var o = tools.isArray(obj) ? [] : {};

      for (var i in obj) {
        o[i] = obj[i] instanceof Date ? new Date(obj[i].getTime()) : Object(E_github_project_rk_tree_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(obj[i]) === "object" ? tools.clone(obj[i]) : obj[i];
      }

      return o;
    },
    eqs: function eqs(str1, str2) {
      return str1.toLowerCase() === str2.toLowerCase();
    },
    isArray: function isArray(arr) {
      return Object.prototype.toString.apply(arr) === "[object Array]";
    },
    isElement: function isElement(o) {
      return (typeof HTMLElement === "undefined" ? "undefined" : Object(E_github_project_rk_tree_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
      o && Object(E_github_project_rk_tree_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    },
    $: function $(node, exp, setting) {
      if (!!exp && typeof exp != "string") {
        setting = exp;
        exp = "";
      }

      if (typeof node == "string") {
        return _$(node, setting ? setting.treeObj.get(0).ownerDocument : null);
      } else {
        return _$("#" + node.tId + exp, setting ? setting.treeObj : null);
      }
    },
    getMDom: function getMDom(setting, curDom, targetExpr) {
      if (!curDom) return null;

      while (curDom && curDom.id !== setting.treeId) {
        for (var i = 0, l = targetExpr.length; curDom.tagName && i < l; i++) {
          if (tools.eqs(curDom.tagName, targetExpr[i].tagName) && curDom.getAttribute(targetExpr[i].attrName) !== null) {
            return curDom;
          }
        }

        curDom = curDom.parentNode;
      }

      return null;
    },
    getNodeMainDom: function getNodeMainDom(target) {
      return _$(target).parent("li").get(0) || _$(target).parentsUntil("li").parent().get(0);
    },
    isChildOrSelf: function isChildOrSelf(dom, parentId) {
      return _$(dom).closest("#" + parentId).length > 0;
    },
    uCanDo: function uCanDo(setting, e) {
      return true;
    }
  },
      //method of operate ztree dom
  view = {
    addNodes: function addNodes(setting, parentNode, index, newNodes, isSilent) {
      var isParent = data.nodeIsParent(setting, parentNode);

      if (setting.data.keep.leaf && parentNode && !isParent) {
        return;
      }

      if (!tools.isArray(newNodes)) {
        newNodes = [newNodes];
      }

      if (setting.data.simpleData.enable) {
        newNodes = data.transformTozTreeFormat(setting, newNodes);
      }

      if (parentNode) {
        var target_switchObj = $$(parentNode, consts.id.SWITCH, setting),
            target_icoObj = $$(parentNode, consts.id.ICON, setting),
            target_ulObj = $$(parentNode, consts.id.UL, setting);

        if (!parentNode.open) {
          view.replaceSwitchClass(parentNode, target_switchObj, consts.folder.CLOSE);
          view.replaceIcoClass(parentNode, target_icoObj, consts.folder.CLOSE);
          parentNode.open = false;
          target_ulObj.css({
            "display": "none"
          });
        }

        data.addNodesData(setting, parentNode, index, newNodes);
        view.createNodes(setting, parentNode.level + 1, newNodes, parentNode, index);

        if (!isSilent) {
          view.expandCollapseParentNode(setting, parentNode, true);
        }
      } else {
        data.addNodesData(setting, data.getRoot(setting), index, newNodes);
        view.createNodes(setting, 0, newNodes, null, index);
      }
    },
    appendNodes: function appendNodes(setting, level, nodes, parentNode, index, initFlag, openFlag) {
      if (!nodes) return [];
      var html = [];
      var tmpPNode = parentNode ? parentNode : data.getRoot(setting),
          tmpPChild = data.nodeChildren(setting, tmpPNode),
          isFirstNode,
          isLastNode;

      if (!tmpPChild || index >= tmpPChild.length - nodes.length) {
        index = -1;
      }

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (initFlag) {
          isFirstNode = (index === 0 || tmpPChild.length == nodes.length) && i == 0;
          isLastNode = index < 0 && i == nodes.length - 1;
          data.initNode(setting, level, node, parentNode, isFirstNode, isLastNode, openFlag);
          data.addNodeCache(setting, node);
        }

        var isParent = data.nodeIsParent(setting, node);
        var childHtml = [];
        var children = data.nodeChildren(setting, node);

        if (children && children.length > 0) {
          //make child html first, because checkType
          childHtml = view.appendNodes(setting, level + 1, children, node, -1, initFlag, openFlag && node.open);
        }

        if (openFlag) {
          view.makeDOMNodeMainBefore(html, setting, node);
          view.makeDOMNodeLine(html, setting, node);
          data.getBeforeA(setting, node, html);
          view.makeDOMNodeNameBefore(html, setting, node);
          data.getInnerBeforeA(setting, node, html);
          view.makeDOMNodeIcon(html, setting, node);
          data.getInnerAfterA(setting, node, html);
          view.makeDOMNodeNameAfter(html, setting, node);
          data.getAfterA(setting, node, html);

          if (isParent && node.open) {
            view.makeUlHtml(setting, node, html, childHtml.join(''));
          }

          view.makeDOMNodeMainAfter(html, setting, node);
          data.addCreatedNode(setting, node);
        }
      }

      return html;
    },
    appendParentULDom: function appendParentULDom(setting, node) {
      var html = [],
          nObj = $$(node, setting);

      if (!nObj.get(0) && !!node.parentTId) {
        view.appendParentULDom(setting, node.getParentNode());
        nObj = $$(node, setting);
      }

      var ulObj = $$(node, consts.id.UL, setting);

      if (ulObj.get(0)) {
        ulObj.remove();
      }

      var children = data.nodeChildren(setting, node),
          childHtml = view.appendNodes(setting, node.level + 1, children, node, -1, false, true);
      view.makeUlHtml(setting, node, html, childHtml.join(''));
      nObj.append(html.join(''));
    },
    asyncNode: function asyncNode(setting, node, isSilent, callback) {
      var i, l;
      var isParent = data.nodeIsParent(setting, node);

      if (node && !isParent) {
        tools.apply(callback);
        return false;
      } else if (node && node.isAjaxing) {
        return false;
      } else if (tools.apply(setting.callback.beforeAsync, [setting.treeId, node], true) == false) {
        tools.apply(callback);
        return false;
      }

      if (node) {
        node.isAjaxing = true;
        var icoObj = $$(node, consts.id.ICON, setting);
        icoObj.attr({
          "style": "",
          "class": consts.className.BUTTON + " " + consts.className.ICO_LOADING
        });
      }

      var tmpParam = {};
      var autoParam = tools.apply(setting.async.autoParam, [setting.treeId, node], setting.async.autoParam);

      for (i = 0, l = autoParam.length; node && i < l; i++) {
        var pKey = autoParam[i].split("="),
            spKey = pKey;

        if (pKey.length > 1) {
          spKey = pKey[1];
          pKey = pKey[0];
        }

        tmpParam[spKey] = node[pKey];
      }

      var otherParam = tools.apply(setting.async.otherParam, [setting.treeId, node], setting.async.otherParam);

      if (tools.isArray(otherParam)) {
        for (i = 0, l = otherParam.length; i < l; i += 2) {
          tmpParam[otherParam[i]] = otherParam[i + 1];
        }
      } else {
        for (var p in otherParam) {
          tmpParam[p] = otherParam[p];
        }
      }

      var _tmpV = data.getRoot(setting)._ver;

      _$.ajax({
        contentType: setting.async.contentType,
        cache: false,
        type: setting.async.type,
        url: tools.apply(setting.async.url, [setting.treeId, node], setting.async.url),
        data: setting.async.contentType.indexOf('application/json') > -1 ? JSON.stringify(tmpParam) : tmpParam,
        dataType: setting.async.dataType,
        headers: setting.async.headers,
        xhrFields: setting.async.xhrFields,
        success: function success(msg) {
          if (_tmpV != data.getRoot(setting)._ver) {
            return;
          }

          var newNodes = [];

          try {
            if (!msg || msg.length == 0) {
              newNodes = [];
            } else if (typeof msg == "string") {
              newNodes = eval("(" + msg + ")");
            } else {
              newNodes = msg;
            }
          } catch (err) {
            newNodes = msg;
          }

          if (node) {
            node.isAjaxing = null;
            node.zAsync = true;
          }

          view.setNodeLineIcos(setting, node);

          if (newNodes && newNodes !== "") {
            newNodes = tools.apply(setting.async.dataFilter, [setting.treeId, node, newNodes], newNodes);
            view.addNodes(setting, node, -1, !!newNodes ? tools.clone(newNodes) : [], !!isSilent);
          } else {
            view.addNodes(setting, node, -1, [], !!isSilent);
          }

          setting.treeObj.trigger(consts.event.ASYNC_SUCCESS, [setting.treeId, node, msg]);
          tools.apply(callback);
        },
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          if (_tmpV != data.getRoot(setting)._ver) {
            return;
          }

          if (node) node.isAjaxing = null;
          view.setNodeLineIcos(setting, node);
          setting.treeObj.trigger(consts.event.ASYNC_ERROR, [setting.treeId, node, XMLHttpRequest, textStatus, errorThrown]);
        }
      });

      return true;
    },
    cancelPreSelectedNode: function cancelPreSelectedNode(setting, node, excludeNode) {
      var list = data.getRoot(setting).curSelectedList,
          i,
          n;

      for (i = list.length - 1; i >= 0; i--) {
        n = list[i];

        if (node === n || !node && (!excludeNode || excludeNode !== n)) {
          $$(n, consts.id.A, setting).removeClass(consts.node.CURSELECTED);

          if (node) {
            data.removeSelectedNode(setting, node);
            break;
          } else {
            list.splice(i, 1);
            setting.treeObj.trigger(consts.event.UNSELECTED, [setting.treeId, n]);
          }
        }
      }
    },
    createNodeCallback: function createNodeCallback(setting) {
      if (!!setting.callback.onNodeCreated || !!setting.view.addDiyDom) {
        var root = data.getRoot(setting);

        while (root.createdNodes.length > 0) {
          var node = root.createdNodes.shift();
          tools.apply(setting.view.addDiyDom, [setting.treeId, node]);

          if (!!setting.callback.onNodeCreated) {
            setting.treeObj.trigger(consts.event.NODECREATED, [setting.treeId, node]);
          }
        }
      }
    },
    createNodes: function createNodes(setting, level, nodes, parentNode, index) {
      if (!nodes || nodes.length == 0) return;
      var root = data.getRoot(setting),
          openFlag = !parentNode || parentNode.open || !!$$(data.nodeChildren(setting, parentNode)[0], setting).get(0);
      root.createdNodes = [];
      var zTreeHtml = view.appendNodes(setting, level, nodes, parentNode, index, true, openFlag),
          parentObj,
          nextObj;

      if (!parentNode) {
        parentObj = setting.treeObj; //setting.treeObj.append(zTreeHtml.join(''));
      } else {
        var ulObj = $$(parentNode, consts.id.UL, setting);

        if (ulObj.get(0)) {
          parentObj = ulObj; //ulObj.append(zTreeHtml.join(''));
        }
      }

      if (parentObj) {
        if (index >= 0) {
          nextObj = parentObj.children()[index];
        }

        if (index >= 0 && nextObj) {
          _$(nextObj).before(zTreeHtml.join(''));
        } else {
          parentObj.append(zTreeHtml.join(''));
        }
      }

      view.createNodeCallback(setting);
    },
    destroy: function destroy(setting) {
      if (!setting) return;
      data.initCache(setting);
      data.initRoot(setting);
      event.unbindTree(setting);
      event.unbindEvent(setting);
      setting.treeObj.empty();
      delete settings[setting.treeId];
    },
    expandCollapseNode: function expandCollapseNode(setting, node, expandFlag, animateFlag, callback) {
      var root = data.getRoot(setting);

      var tmpCb, _callback;

      if (!node) {
        tools.apply(callback, []);
        return;
      }

      var children = data.nodeChildren(setting, node);
      var isParent = data.nodeIsParent(setting, node);

      if (root.expandTriggerFlag) {
        _callback = callback;

        tmpCb = function tmpCb() {
          if (_callback) _callback();

          if (node.open) {
            setting.treeObj.trigger(consts.event.EXPAND, [setting.treeId, node]);
          } else {
            setting.treeObj.trigger(consts.event.COLLAPSE, [setting.treeId, node]);
          }
        };

        callback = tmpCb;
        root.expandTriggerFlag = false;
      }

      if (!node.open && isParent && (!$$(node, consts.id.UL, setting).get(0) || children && children.length > 0 && !$$(children[0], setting).get(0))) {
        view.appendParentULDom(setting, node);
        view.createNodeCallback(setting);
      }

      if (node.open == expandFlag) {
        tools.apply(callback, []);
        return;
      }

      var ulObj = $$(node, consts.id.UL, setting),
          switchObj = $$(node, consts.id.SWITCH, setting),
          icoObj = $$(node, consts.id.ICON, setting);

      if (isParent) {
        node.open = !node.open;

        if (node.iconOpen && node.iconClose) {
          icoObj.attr("style", view.makeNodeIcoStyle(setting, node));
        }

        if (node.open) {
          view.replaceSwitchClass(node, switchObj, consts.folder.OPEN);
          view.replaceIcoClass(node, icoObj, consts.folder.OPEN);

          if (animateFlag == false || setting.view.expandSpeed == "") {
            ulObj.show();
            tools.apply(callback, []);
          } else {
            if (children && children.length > 0) {
              ulObj.slideDown(setting.view.expandSpeed, callback);
            } else {
              ulObj.show();
              tools.apply(callback, []);
            }
          }
        } else {
          view.replaceSwitchClass(node, switchObj, consts.folder.CLOSE);
          view.replaceIcoClass(node, icoObj, consts.folder.CLOSE);

          if (animateFlag == false || setting.view.expandSpeed == "" || !(children && children.length > 0)) {
            ulObj.hide();
            tools.apply(callback, []);
          } else {
            ulObj.slideUp(setting.view.expandSpeed, callback);
          }
        }
      } else {
        tools.apply(callback, []);
      }
    },
    expandCollapseParentNode: function expandCollapseParentNode(setting, node, expandFlag, animateFlag, callback) {
      if (!node) return;

      if (!node.parentTId) {
        view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback);
        return;
      } else {
        view.expandCollapseNode(setting, node, expandFlag, animateFlag);
      }

      if (node.parentTId) {
        view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, animateFlag, callback);
      }
    },
    expandCollapseSonNode: function expandCollapseSonNode(setting, node, expandFlag, animateFlag, callback) {
      var root = data.getRoot(setting),
          treeNodes = node ? data.nodeChildren(setting, node) : data.nodeChildren(setting, root),
          selfAnimateSign = node ? false : animateFlag,
          expandTriggerFlag = data.getRoot(setting).expandTriggerFlag;
      data.getRoot(setting).expandTriggerFlag = false;

      if (treeNodes) {
        for (var i = 0, l = treeNodes.length; i < l; i++) {
          if (treeNodes[i]) view.expandCollapseSonNode(setting, treeNodes[i], expandFlag, selfAnimateSign);
        }
      }

      data.getRoot(setting).expandTriggerFlag = expandTriggerFlag;
      view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback);
    },
    isSelectedNode: function isSelectedNode(setting, node) {
      if (!node) {
        return false;
      }

      var list = data.getRoot(setting).curSelectedList,
          i;

      for (i = list.length - 1; i >= 0; i--) {
        if (node === list[i]) {
          return true;
        }
      }

      return false;
    },
    makeDOMNodeIcon: function makeDOMNodeIcon(html, setting, node) {
      var nameStr = data.nodeName(setting, node),
          name = setting.view.nameIsHTML ? nameStr : nameStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      html.push("<span id='", node.tId, consts.id.ICON, "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(setting, node), "' style='", view.makeNodeIcoStyle(setting, node), "'></span><span id='", node.tId, consts.id.SPAN, "' class='", consts.className.NAME, "'>", name, "</span>");
    },
    makeDOMNodeLine: function makeDOMNodeLine(html, setting, node) {
      html.push("<span id='", node.tId, consts.id.SWITCH, "' title='' class='", view.makeNodeLineClass(setting, node), "' treeNode", consts.id.SWITCH, "></span>");
    },
    makeDOMNodeMainAfter: function makeDOMNodeMainAfter(html, setting, node) {
      html.push("</li>");
    },
    makeDOMNodeMainBefore: function makeDOMNodeMainBefore(html, setting, node) {
      html.push("<li id='", node.tId, "' class='", consts.className.LEVEL, node.level, "' tabindex='0' hidefocus='true' treenode>");
    },
    makeDOMNodeNameAfter: function makeDOMNodeNameAfter(html, setting, node) {
      html.push("</a>");
    },
    makeDOMNodeNameBefore: function makeDOMNodeNameBefore(html, setting, node) {
      var title = data.nodeTitle(setting, node),
          url = view.makeNodeUrl(setting, node),
          fontcss = view.makeNodeFontCss(setting, node),
          nodeClasses = view.makeNodeClasses(setting, node),
          fontStyle = [];

      for (var f in fontcss) {
        fontStyle.push(f, ":", fontcss[f], ";");
      }

      html.push("<a id='", node.tId, consts.id.A, "' class='", consts.className.LEVEL, node.level, nodeClasses.add ? ' ' + nodeClasses.add.join(' ') : '', "' treeNode", consts.id.A, " onclick=\"", node.click || '', "\" ", url != null && url.length > 0 ? "href='" + url + "'" : "", " target='", view.makeNodeTarget(node), "' style='", fontStyle.join(''), "'");

      if (tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle) && title) {
        html.push("title='", title.replace(/'/g, "&#39;").replace(/</g, '&lt;').replace(/>/g, '&gt;'), "'");
      }

      html.push(">");
    },
    makeNodeFontCss: function makeNodeFontCss(setting, node) {
      var fontCss = tools.apply(setting.view.fontCss, [setting.treeId, node], setting.view.fontCss);
      return fontCss && typeof fontCss != "function" ? fontCss : {};
    },
    makeNodeClasses: function makeNodeClasses(setting, node) {
      var classes = tools.apply(setting.view.nodeClasses, [setting.treeId, node], setting.view.nodeClasses);
      return classes && typeof classes !== "function" ? classes : {
        add: [],
        remove: []
      };
    },
    makeNodeIcoClass: function makeNodeIcoClass(setting, node) {
      var icoCss = ["ico"];

      if (!node.isAjaxing) {
        var isParent = data.nodeIsParent(setting, node);
        icoCss[0] = (node.iconSkin ? node.iconSkin + "_" : "") + icoCss[0];

        if (isParent) {
          icoCss.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE);
        } else {
          icoCss.push(consts.folder.DOCU);
        }
      }

      return consts.className.BUTTON + " " + icoCss.join('_');
    },
    makeNodeIcoStyle: function makeNodeIcoStyle(setting, node) {
      var icoStyle = [];

      if (!node.isAjaxing) {
        var isParent = data.nodeIsParent(setting, node);
        var icon = isParent && node.iconOpen && node.iconClose ? node.open ? node.iconOpen : node.iconClose : node[setting.data.key.icon];
        if (icon) icoStyle.push("background:url(", icon, ") 0 0 no-repeat;");

        if (setting.view.showIcon == false || !tools.apply(setting.view.showIcon, [setting.treeId, node], true)) {
          icoStyle.push("display:none;");
        }
      }

      return icoStyle.join('');
    },
    makeNodeLineClass: function makeNodeLineClass(setting, node) {
      var lineClass = [];

      if (setting.view.showLine) {
        if (node.level == 0 && node.isFirstNode && node.isLastNode) {
          lineClass.push(consts.line.ROOT);
        } else if (node.level == 0 && node.isFirstNode) {
          lineClass.push(consts.line.ROOTS);
        } else if (node.isLastNode) {
          lineClass.push(consts.line.BOTTOM);
        } else {
          lineClass.push(consts.line.CENTER);
        }
      } else {
        lineClass.push(consts.line.NOLINE);
      }

      if (data.nodeIsParent(setting, node)) {
        lineClass.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE);
      } else {
        lineClass.push(consts.folder.DOCU);
      }

      return view.makeNodeLineClassEx(node) + lineClass.join('_');
    },
    makeNodeLineClassEx: function makeNodeLineClassEx(node) {
      return consts.className.BUTTON + " " + consts.className.LEVEL + node.level + " " + consts.className.SWITCH + " ";
    },
    makeNodeTarget: function makeNodeTarget(node) {
      return node.target || "_blank";
    },
    makeNodeUrl: function makeNodeUrl(setting, node) {
      var urlKey = setting.data.key.url;
      return node[urlKey] ? node[urlKey] : null;
    },
    makeUlHtml: function makeUlHtml(setting, node, html, content) {
      html.push("<ul id='", node.tId, consts.id.UL, "' class='", consts.className.LEVEL, node.level, " ", view.makeUlLineClass(setting, node), "' style='display:", node.open ? "block" : "none", "'>");
      html.push(content);
      html.push("</ul>");
    },
    makeUlLineClass: function makeUlLineClass(setting, node) {
      return setting.view.showLine && !node.isLastNode ? consts.line.LINE : "";
    },
    removeChildNodes: function removeChildNodes(setting, node) {
      if (!node) return;
      var nodes = data.nodeChildren(setting, node);
      if (!nodes) return;

      for (var i = 0, l = nodes.length; i < l; i++) {
        data.removeNodeCache(setting, nodes[i]);
      }

      data.removeSelectedNode(setting);
      delete node[setting.data.key.children];

      if (!setting.data.keep.parent) {
        data.nodeIsParent(setting, node, false);
        node.open = false;
        var tmp_switchObj = $$(node, consts.id.SWITCH, setting),
            tmp_icoObj = $$(node, consts.id.ICON, setting);
        view.replaceSwitchClass(node, tmp_switchObj, consts.folder.DOCU);
        view.replaceIcoClass(node, tmp_icoObj, consts.folder.DOCU);
        $$(node, consts.id.UL, setting).remove();
      } else {
        $$(node, consts.id.UL, setting).empty();
      }
    },
    scrollIntoView: function scrollIntoView(setting, dom) {
      if (!dom) {
        return;
      } // support IE 7 / 8


      if (typeof Element === 'undefined' || typeof HTMLElement === 'undefined') {
        var contRect = setting.treeObj.get(0).getBoundingClientRect(),
            findMeRect = dom.getBoundingClientRect();

        if (findMeRect.top < contRect.top || findMeRect.bottom > contRect.bottom || findMeRect.right > contRect.right || findMeRect.left < contRect.left) {
          dom.scrollIntoView();
        }

        return;
      } // CC-BY jocki84@googlemail.com, https://gist.github.com/jocki84/6ffafd003387179a988e


      if (!Element.prototype.scrollIntoViewIfNeeded) {
        Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
          "use strict";

          function makeRange(start, length) {
            return {
              "start": start,
              "length": length,
              "end": start + length
            };
          }

          function coverRange(inner, outer) {
            if (false === centerIfNeeded || outer.start < inner.end && inner.start < outer.end) {
              return Math.max(inner.end - outer.length, Math.min(outer.start, inner.start));
            }

            return (inner.start + inner.end - outer.length) / 2;
          }

          function makePoint(x, y) {
            return {
              "x": x,
              "y": y,
              "translate": function translate(dX, dY) {
                return makePoint(x + dX, y + dY);
              }
            };
          }

          function absolute(elem, pt) {
            while (elem) {
              pt = pt.translate(elem.offsetLeft, elem.offsetTop);
              elem = elem.offsetParent;
            }

            return pt;
          }

          var target = absolute(this, makePoint(0, 0)),
              extent = makePoint(this.offsetWidth, this.offsetHeight),
              elem = this.parentNode,
              origin;

          while (elem instanceof HTMLElement) {
            // Apply desired scroll amount.
            origin = absolute(elem, makePoint(elem.clientLeft, elem.clientTop));
            elem.scrollLeft = coverRange(makeRange(target.x - origin.x, extent.x), makeRange(elem.scrollLeft, elem.clientWidth));
            elem.scrollTop = coverRange(makeRange(target.y - origin.y, extent.y), makeRange(elem.scrollTop, elem.clientHeight)); // Determine actual scroll amount by reading back scroll properties.

            target = target.translate(-elem.scrollLeft, -elem.scrollTop);
            elem = elem.parentNode;
          }
        };
      }

      dom.scrollIntoViewIfNeeded();
    },
    setFirstNode: function setFirstNode(setting, parentNode) {
      var children = data.nodeChildren(setting, parentNode);

      if (children.length > 0) {
        children[0].isFirstNode = true;
      }
    },
    setLastNode: function setLastNode(setting, parentNode) {
      var children = data.nodeChildren(setting, parentNode);

      if (children.length > 0) {
        children[children.length - 1].isLastNode = true;
      }
    },
    removeNode: function removeNode(setting, node) {
      var root = data.getRoot(setting),
          parentNode = node.parentTId ? node.getParentNode() : root;
      node.isFirstNode = false;
      node.isLastNode = false;

      node.getPreNode = function () {
        return null;
      };

      node.getNextNode = function () {
        return null;
      };

      if (!data.getNodeCache(setting, node.tId)) {
        return;
      }

      $$(node, setting).remove();
      data.removeNodeCache(setting, node);
      data.removeSelectedNode(setting, node);
      var children = data.nodeChildren(setting, parentNode);

      for (var i = 0, l = children.length; i < l; i++) {
        if (children[i].tId == node.tId) {
          children.splice(i, 1);
          break;
        }
      }

      view.setFirstNode(setting, parentNode);
      view.setLastNode(setting, parentNode);
      var tmp_ulObj,
          tmp_switchObj,
          tmp_icoObj,
          childLength = children.length; //repair nodes old parent

      if (!setting.data.keep.parent && childLength == 0) {
        //old parentNode has no child nodes
        data.nodeIsParent(setting, parentNode, false);
        parentNode.open = false;
        delete parentNode[setting.data.key.children];
        tmp_ulObj = $$(parentNode, consts.id.UL, setting);
        tmp_switchObj = $$(parentNode, consts.id.SWITCH, setting);
        tmp_icoObj = $$(parentNode, consts.id.ICON, setting);
        view.replaceSwitchClass(parentNode, tmp_switchObj, consts.folder.DOCU);
        view.replaceIcoClass(parentNode, tmp_icoObj, consts.folder.DOCU);
        tmp_ulObj.css("display", "none");
      } else if (setting.view.showLine && childLength > 0) {
        //old parentNode has child nodes
        var newLast = children[childLength - 1];
        tmp_ulObj = $$(newLast, consts.id.UL, setting);
        tmp_switchObj = $$(newLast, consts.id.SWITCH, setting);
        tmp_icoObj = $$(newLast, consts.id.ICON, setting);

        if (parentNode == root) {
          if (children.length == 1) {
            //node was root, and ztree has only one root after move node
            view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.ROOT);
          } else {
            var tmp_first_switchObj = $$(children[0], consts.id.SWITCH, setting);
            view.replaceSwitchClass(children[0], tmp_first_switchObj, consts.line.ROOTS);
            view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM);
          }
        } else {
          view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM);
        }

        tmp_ulObj.removeClass(consts.line.LINE);
      }
    },
    replaceIcoClass: function replaceIcoClass(node, obj, newName) {
      if (!obj || node.isAjaxing) return;
      var tmpName = obj.attr("class");
      if (tmpName == undefined) return;
      var tmpList = tmpName.split("_");

      switch (newName) {
        case consts.folder.OPEN:
        case consts.folder.CLOSE:
        case consts.folder.DOCU:
          tmpList[tmpList.length - 1] = newName;
          break;
      }

      obj.attr("class", tmpList.join("_"));
    },
    replaceSwitchClass: function replaceSwitchClass(node, obj, newName) {
      if (!obj) return;
      var tmpName = obj.attr("class");
      if (tmpName == undefined) return;
      var tmpList = tmpName.split("_");

      switch (newName) {
        case consts.line.ROOT:
        case consts.line.ROOTS:
        case consts.line.CENTER:
        case consts.line.BOTTOM:
        case consts.line.NOLINE:
          tmpList[0] = view.makeNodeLineClassEx(node) + newName;
          break;

        case consts.folder.OPEN:
        case consts.folder.CLOSE:
        case consts.folder.DOCU:
          tmpList[1] = newName;
          break;
      }

      obj.attr("class", tmpList.join("_"));

      if (newName !== consts.folder.DOCU) {
        obj.removeAttr("disabled");
      } else {
        obj.attr("disabled", "disabled");
      }
    },
    selectNode: function selectNode(setting, node, addFlag) {
      if (!addFlag) {
        view.cancelPreSelectedNode(setting, null, node);
      }

      $$(node, consts.id.A, setting).addClass(consts.node.CURSELECTED);
      data.addSelectedNode(setting, node);
      setting.treeObj.trigger(consts.event.SELECTED, [setting.treeId, node]);
    },
    setNodeFontCss: function setNodeFontCss(setting, treeNode) {
      var aObj = $$(treeNode, consts.id.A, setting),
          fontCss = view.makeNodeFontCss(setting, treeNode);

      if (fontCss) {
        aObj.css(fontCss);
      }
    },
    setNodeClasses: function setNodeClasses(setting, treeNode) {
      var aObj = $$(treeNode, consts.id.A, setting),
          classes = view.makeNodeClasses(setting, treeNode);

      if ('add' in classes && classes.add.length) {
        aObj.addClass(classes.add.join(' '));
      }

      if ('remove' in classes && classes.remove.length) {
        aObj.removeClass(classes.remove.join(' '));
      }
    },
    setNodeLineIcos: function setNodeLineIcos(setting, node) {
      if (!node) return;
      var switchObj = $$(node, consts.id.SWITCH, setting),
          ulObj = $$(node, consts.id.UL, setting),
          icoObj = $$(node, consts.id.ICON, setting),
          ulLine = view.makeUlLineClass(setting, node);

      if (ulLine.length == 0) {
        ulObj.removeClass(consts.line.LINE);
      } else {
        ulObj.addClass(ulLine);
      }

      switchObj.attr("class", view.makeNodeLineClass(setting, node));

      if (data.nodeIsParent(setting, node)) {
        switchObj.removeAttr("disabled");
      } else {
        switchObj.attr("disabled", "disabled");
      }

      icoObj.removeAttr("style");
      icoObj.attr("style", view.makeNodeIcoStyle(setting, node));
      icoObj.attr("class", view.makeNodeIcoClass(setting, node));
    },
    setNodeName: function setNodeName(setting, node) {
      var title = data.nodeTitle(setting, node),
          nObj = $$(node, consts.id.SPAN, setting);
      nObj.empty();

      if (setting.view.nameIsHTML) {
        nObj.html(data.nodeName(setting, node));
      } else {
        nObj.text(data.nodeName(setting, node));
      }

      if (tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle)) {
        var aObj = $$(node, consts.id.A, setting);
        aObj.attr("title", !title ? "" : title);
      }
    },
    setNodeTarget: function setNodeTarget(setting, node) {
      var aObj = $$(node, consts.id.A, setting);
      aObj.attr("target", view.makeNodeTarget(node));
    },
    setNodeUrl: function setNodeUrl(setting, node) {
      var aObj = $$(node, consts.id.A, setting),
          url = view.makeNodeUrl(setting, node);

      if (url == null || url.length == 0) {
        aObj.removeAttr("href");
      } else {
        aObj.attr("href", url);
      }
    },
    switchNode: function switchNode(setting, node) {
      if (node.open || !tools.canAsync(setting, node)) {
        view.expandCollapseNode(setting, node, !node.open);
      } else if (setting.async.enable) {
        if (!view.asyncNode(setting, node)) {
          view.expandCollapseNode(setting, node, !node.open);
          return;
        }
      } else if (node) {
        view.expandCollapseNode(setting, node, !node.open);
      }
    }
  }; // zTree defind


  _$.fn.zTree = {
    consts: _consts,
    _z: {
      tools: tools,
      view: view,
      event: event,
      data: data
    },
    getZTreeObj: function getZTreeObj(treeId) {
      var o = data.getZTreeTools(treeId);
      return o ? o : null;
    },
    destroy: function destroy(treeId) {
      if (!!treeId && treeId.length > 0) {
        view.destroy(data.getSetting(treeId));
      } else {
        for (var s in settings) {
          view.destroy(settings[s]);
        }
      }
    },
    init: function init(obj, zSetting, zNodes) {
      var setting = tools.clone(_setting);

      _$.extend(true, setting, zSetting);

      setting.treeId = obj.attr("id");
      setting.treeObj = obj;
      setting.treeObj.empty();
      settings[setting.treeId] = setting; //For some older browser,(e.g., ie6)

      if (typeof document.body.style.maxHeight === "undefined") {
        setting.view.expandSpeed = "";
      }

      data.initRoot(setting);
      var root = data.getRoot(setting);
      zNodes = zNodes ? tools.clone(tools.isArray(zNodes) ? zNodes : [zNodes]) : [];

      if (setting.data.simpleData.enable) {
        data.nodeChildren(setting, root, data.transformTozTreeFormat(setting, zNodes));
      } else {
        data.nodeChildren(setting, root, zNodes);
      }

      data.initCache(setting);
      event.unbindTree(setting);
      event.bindTree(setting);
      event.unbindEvent(setting);
      event.bindEvent(setting);
      var zTreeTools = {
        setting: setting,
        addNodes: function addNodes(parentNode, index, newNodes, isSilent) {
          if (!parentNode) parentNode = null;
          var isParent = data.nodeIsParent(setting, parentNode);
          if (parentNode && !isParent && setting.data.keep.leaf) return null;
          var i = parseInt(index, 10);

          if (isNaN(i)) {
            isSilent = !!newNodes;
            newNodes = index;
            index = -1;
          } else {
            index = i;
          }

          if (!newNodes) return null;
          var xNewNodes = tools.clone(tools.isArray(newNodes) ? newNodes : [newNodes]);

          function addCallback() {
            view.addNodes(setting, parentNode, index, xNewNodes, isSilent == true);
          }

          if (tools.canAsync(setting, parentNode)) {
            view.asyncNode(setting, parentNode, isSilent, addCallback);
          } else {
            addCallback();
          }

          return xNewNodes;
        },
        cancelSelectedNode: function cancelSelectedNode(node) {
          view.cancelPreSelectedNode(setting, node);
        },
        destroy: function destroy() {
          view.destroy(setting);
        },
        expandAll: function expandAll(expandFlag) {
          expandFlag = !!expandFlag;
          view.expandCollapseSonNode(setting, null, expandFlag, true);
          return expandFlag;
        },
        expandNode: function expandNode(node, expandFlag, sonSign, focus, callbackFlag) {
          if (!node || !data.nodeIsParent(setting, node)) return null;

          if (expandFlag !== true && expandFlag !== false) {
            expandFlag = !node.open;
          }

          callbackFlag = !!callbackFlag;

          if (callbackFlag && expandFlag && tools.apply(setting.callback.beforeExpand, [setting.treeId, node], true) == false) {
            return null;
          } else if (callbackFlag && !expandFlag && tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], true) == false) {
            return null;
          }

          if (expandFlag && node.parentTId) {
            view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, false);
          }

          if (expandFlag === node.open && !sonSign) {
            return null;
          }

          data.getRoot(setting).expandTriggerFlag = callbackFlag;

          if (!tools.canAsync(setting, node) && sonSign) {
            view.expandCollapseSonNode(setting, node, expandFlag, true, showNodeFocus);
          } else {
            node.open = !expandFlag;
            view.switchNode(this.setting, node);
            showNodeFocus();
          }

          return expandFlag;

          function showNodeFocus() {
            var a = $$(node, setting).get(0);

            if (a && focus !== false) {
              view.scrollIntoView(setting, a);
            }
          }
        },
        getNodes: function getNodes() {
          return data.getNodes(setting);
        },
        getNodeByParam: function getNodeByParam(key, value, parentNode) {
          if (!key) return null;
          return data.getNodeByParam(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodeByTId: function getNodeByTId(tId) {
          return data.getNodeCache(setting, tId);
        },
        getNodesByParam: function getNodesByParam(key, value, parentNode) {
          if (!key) return null;
          return data.getNodesByParam(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodesByParamFuzzy: function getNodesByParamFuzzy(key, value, parentNode) {
          if (!key) return null;
          return data.getNodesByParamFuzzy(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodesByFilter: function getNodesByFilter(filter, isSingle, parentNode, invokeParam) {
          isSingle = !!isSingle;
          if (!filter || typeof filter != "function") return isSingle ? null : [];
          return data.getNodesByFilter(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), filter, isSingle, invokeParam);
        },
        getNodeIndex: function getNodeIndex(node) {
          if (!node) return null;
          var parentNode = node.parentTId ? node.getParentNode() : data.getRoot(setting);
          var children = data.nodeChildren(setting, parentNode);

          for (var i = 0, l = children.length; i < l; i++) {
            if (children[i] == node) return i;
          }

          return -1;
        },
        getSelectedNodes: function getSelectedNodes() {
          var r = [],
              list = data.getRoot(setting).curSelectedList;

          for (var i = 0, l = list.length; i < l; i++) {
            r.push(list[i]);
          }

          return r;
        },
        isSelectedNode: function isSelectedNode(node) {
          return data.isSelectedNode(setting, node);
        },
        reAsyncChildNodesPromise: function reAsyncChildNodesPromise(parentNode, reloadType, isSilent) {
          var promise = new Promise(function (resolve, reject) {
            try {
              zTreeTools.reAsyncChildNodes(parentNode, reloadType, isSilent, function () {
                resolve(parentNode);
              });
            } catch (e) {
              reject(e);
            }
          });
          return promise;
        },
        reAsyncChildNodes: function reAsyncChildNodes(parentNode, reloadType, isSilent, callback) {
          if (!this.setting.async.enable) return;
          var isRoot = !parentNode;

          if (isRoot) {
            parentNode = data.getRoot(setting);
          }

          if (reloadType == "refresh") {
            var children = data.nodeChildren(setting, parentNode);

            for (var i = 0, l = children ? children.length : 0; i < l; i++) {
              data.removeNodeCache(setting, children[i]);
            }

            data.removeSelectedNode(setting);
            data.nodeChildren(setting, parentNode, []);

            if (isRoot) {
              this.setting.treeObj.empty();
            } else {
              var ulObj = $$(parentNode, consts.id.UL, setting);
              ulObj.empty();
            }
          }

          view.asyncNode(this.setting, isRoot ? null : parentNode, !!isSilent, callback);
        },
        refresh: function refresh() {
          this.setting.treeObj.empty();
          var root = data.getRoot(setting),
              nodes = data.nodeChildren(setting, root);
          data.initRoot(setting);
          data.nodeChildren(setting, root, nodes);
          data.initCache(setting);
          view.createNodes(setting, 0, data.nodeChildren(setting, root), null, -1);
        },
        removeChildNodes: function removeChildNodes(node) {
          if (!node) return null;
          var nodes = data.nodeChildren(setting, node);
          view.removeChildNodes(setting, node);
          return nodes ? nodes : null;
        },
        removeNode: function removeNode(node, callbackFlag) {
          if (!node) return;
          callbackFlag = !!callbackFlag;
          if (callbackFlag && tools.apply(setting.callback.beforeRemove, [setting.treeId, node], true) == false) return;
          view.removeNode(setting, node);

          if (callbackFlag) {
            this.setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node]);
          }
        },
        selectNode: function selectNode(node, addFlag, isSilent) {
          if (!node) return;

          if (tools.uCanDo(setting)) {
            addFlag = setting.view.selectedMulti && addFlag;

            if (node.parentTId) {
              view.expandCollapseParentNode(setting, node.getParentNode(), true, false, showNodeFocus);
            } else if (!isSilent) {
              try {
                $$(node, setting).focus().blur();
              } catch (e) {}
            }

            view.selectNode(setting, node, addFlag);
          }

          function showNodeFocus() {
            if (isSilent) {
              return;
            }

            var a = $$(node, setting).get(0);
            view.scrollIntoView(setting, a);
          }
        },
        transformTozTreeNodes: function transformTozTreeNodes(simpleNodes) {
          return data.transformTozTreeFormat(setting, simpleNodes);
        },
        transformToArray: function transformToArray(nodes) {
          return data.transformToArrayFormat(setting, nodes);
        },
        updateNode: function updateNode(node, checkTypeFlag) {
          if (!node) return;
          var nObj = $$(node, setting);

          if (nObj.get(0) && tools.uCanDo(setting)) {
            view.setNodeName(setting, node);
            view.setNodeTarget(setting, node);
            view.setNodeUrl(setting, node);
            view.setNodeLineIcos(setting, node);
            view.setNodeFontCss(setting, node);
            view.setNodeClasses(setting, node);
          }
        }
      };
      root.treeTools = zTreeTools;
      data.setZTreeTools(setting, zTreeTools);
      var children = data.nodeChildren(setting, root);

      if (children && children.length > 0) {
        view.createNodes(setting, 0, children, null, -1);
      } else if (setting.async.enable && setting.async.url && setting.async.url !== '') {
        view.asyncNode(setting);
      }

      return zTreeTools;
    }
  };
  var zt = _$.fn.zTree,
      $$ = tools.$,
      consts = zt.consts;
})(jquery__WEBPACK_IMPORTED_MODULE_14___default.a);
/*
 * JQuery zTree excheck
 * v3.5.44
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-04-29
 */


(function ($) {
  //default consts of excheck
  var _consts = {
    event: {
      CHECK: "ztree_check"
    },
    id: {
      CHECK: "_check"
    },
    checkbox: {
      STYLE: "checkbox",
      DEFAULT: "chk",
      DISABLED: "disable",
      FALSE: "false",
      TRUE: "true",
      FULL: "full",
      PART: "part",
      FOCUS: "focus"
    },
    radio: {
      STYLE: "radio",
      TYPE_ALL: "all",
      TYPE_LEVEL: "level"
    }
  },
      //default setting of excheck
  _setting = {
    check: {
      enable: false,
      autoCheckTrigger: false,
      chkStyle: _consts.checkbox.STYLE,
      nocheckInherit: false,
      chkDisabledInherit: false,
      radioType: _consts.radio.TYPE_LEVEL,
      chkboxType: {
        "Y": "ps",
        "N": "ps"
      }
    },
    data: {
      key: {
        checked: "checked"
      }
    },
    callback: {
      beforeCheck: null,
      onCheck: null
    }
  },
      //default root of excheck
  _initRoot = function _initRoot(setting) {
    var r = data.getRoot(setting);
    r.radioCheckedList = [];
  },
      //default cache of excheck
  _initCache = function _initCache(treeId) {},
      //default bind event of excheck
  _bindEvent = function _bindEvent(setting) {
    var o = setting.treeObj,
        c = consts.event;
    o.bind(c.CHECK, function (event, srcEvent, treeId, node) {
      event.srcEvent = srcEvent;
      tools.apply(setting.callback.onCheck, [event, treeId, node]);
    });
  },
      _unbindEvent = function _unbindEvent(setting) {
    var o = setting.treeObj,
        c = consts.event;
    o.unbind(c.CHECK);
  },
      //default event proxy of excheck
  _eventProxy = function _eventProxy(e) {
    var target = e.target,
        setting = data.getSetting(e.data.treeId),
        tId = "",
        node = null,
        nodeEventType = "",
        treeEventType = "",
        nodeEventCallback = null,
        treeEventCallback = null;

    if (tools.eqs(e.type, "mouseover")) {
      if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
        tId = tools.getNodeMainDom(target).id;
        nodeEventType = "mouseoverCheck";
      }
    } else if (tools.eqs(e.type, "mouseout")) {
      if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
        tId = tools.getNodeMainDom(target).id;
        nodeEventType = "mouseoutCheck";
      }
    } else if (tools.eqs(e.type, "click")) {
      if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
        tId = tools.getNodeMainDom(target).id;
        nodeEventType = "checkNode";
      }
    }

    if (tId.length > 0) {
      node = data.getNodeCache(setting, tId);

      switch (nodeEventType) {
        case "checkNode":
          nodeEventCallback = _handler.onCheckNode;
          break;

        case "mouseoverCheck":
          nodeEventCallback = _handler.onMouseoverCheck;
          break;

        case "mouseoutCheck":
          nodeEventCallback = _handler.onMouseoutCheck;
          break;
      }
    }

    var proxyResult = {
      stop: nodeEventType === "checkNode",
      node: node,
      nodeEventType: nodeEventType,
      nodeEventCallback: nodeEventCallback,
      treeEventType: treeEventType,
      treeEventCallback: treeEventCallback
    };
    return proxyResult;
  },
      //default init node of excheck
  _initNode = function _initNode(setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
    if (!n) return;
    var checked = data.nodeChecked(setting, n);
    n.checkedOld = checked;
    if (typeof n.nocheck == "string") n.nocheck = tools.eqs(n.nocheck, "true");
    n.nocheck = !!n.nocheck || setting.check.nocheckInherit && parentNode && !!parentNode.nocheck;
    if (typeof n.chkDisabled == "string") n.chkDisabled = tools.eqs(n.chkDisabled, "true");
    n.chkDisabled = !!n.chkDisabled || setting.check.chkDisabledInherit && parentNode && !!parentNode.chkDisabled;
    if (typeof n.halfCheck == "string") n.halfCheck = tools.eqs(n.halfCheck, "true");
    n.halfCheck = !!n.halfCheck;
    n.check_Child_State = -1;
    n.check_Focus = false;

    n.getCheckStatus = function () {
      return data.getCheckStatus(setting, n);
    };

    if (setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL && checked) {
      var r = data.getRoot(setting);
      r.radioCheckedList.push(n);
    }
  },
      //add dom for check
  _beforeA = function _beforeA(setting, node, html) {
    if (setting.check.enable) {
      data.makeChkFlag(setting, node);
      html.push("<span ID='", node.tId, consts.id.CHECK, "' class='", view.makeChkClass(setting, node), "' treeNode", consts.id.CHECK, node.nocheck === true ? " style='display:none;'" : "", "></span>");
    }
  },
      //update zTreeObj, add method of check
  _zTreeTools = function _zTreeTools(setting, zTreeTools) {
    zTreeTools.checkNode = function (node, checked, checkTypeFlag, callbackFlag) {
      var nodeChecked = data.nodeChecked(setting, node);
      if (node.chkDisabled === true) return;

      if (checked !== true && checked !== false) {
        checked = !nodeChecked;
      }

      callbackFlag = !!callbackFlag;

      if (nodeChecked === checked && !checkTypeFlag) {
        return;
      } else if (callbackFlag && tools.apply(this.setting.callback.beforeCheck, [this.setting.treeId, node], true) == false) {
        return;
      }

      if (tools.uCanDo(this.setting) && this.setting.check.enable && node.nocheck !== true) {
        data.nodeChecked(setting, node, checked);
        var checkObj = $$(node, consts.id.CHECK, this.setting);
        if (checkTypeFlag || this.setting.check.chkStyle === consts.radio.STYLE) view.checkNodeRelation(this.setting, node);
        view.setChkClass(this.setting, checkObj, node);
        view.repairParentChkClassWithSelf(this.setting, node);

        if (callbackFlag) {
          this.setting.treeObj.trigger(consts.event.CHECK, [null, this.setting.treeId, node]);
        }
      }
    };

    zTreeTools.checkAllNodes = function (checked) {
      view.repairAllChk(this.setting, !!checked);
    };

    zTreeTools.getCheckedNodes = function (checked) {
      checked = checked !== false;
      var children = data.nodeChildren(setting, data.getRoot(this.setting));
      return data.getTreeCheckedNodes(this.setting, children, checked);
    };

    zTreeTools.getChangeCheckedNodes = function () {
      var children = data.nodeChildren(setting, data.getRoot(this.setting));
      return data.getTreeChangeCheckedNodes(this.setting, children);
    };

    zTreeTools.setChkDisabled = function (node, disabled, inheritParent, inheritChildren) {
      disabled = !!disabled;
      inheritParent = !!inheritParent;
      inheritChildren = !!inheritChildren;
      view.repairSonChkDisabled(this.setting, node, disabled, inheritChildren);
      view.repairParentChkDisabled(this.setting, node.getParentNode(), disabled, inheritParent);
    };

    var _updateNode = zTreeTools.updateNode;

    zTreeTools.updateNode = function (node, checkTypeFlag) {
      if (_updateNode) _updateNode.apply(zTreeTools, arguments);
      if (!node || !this.setting.check.enable) return;
      var nObj = $$(node, this.setting);

      if (nObj.get(0) && tools.uCanDo(this.setting)) {
        var checkObj = $$(node, consts.id.CHECK, this.setting);
        if (checkTypeFlag == true || this.setting.check.chkStyle === consts.radio.STYLE) view.checkNodeRelation(this.setting, node);
        view.setChkClass(this.setting, checkObj, node);
        view.repairParentChkClassWithSelf(this.setting, node);
      }
    };
  },
      //method of operate data
  _data = {
    getRadioCheckedList: function getRadioCheckedList(setting) {
      var checkedList = data.getRoot(setting).radioCheckedList;

      for (var i = 0, j = checkedList.length; i < j; i++) {
        if (!data.getNodeCache(setting, checkedList[i].tId)) {
          checkedList.splice(i, 1);
          i--;
          j--;
        }
      }

      return checkedList;
    },
    getCheckStatus: function getCheckStatus(setting, node) {
      if (!setting.check.enable || node.nocheck || node.chkDisabled) return null;
      var checked = data.nodeChecked(setting, node),
          r = {
        checked: checked,
        half: node.halfCheck ? node.halfCheck : setting.check.chkStyle == consts.radio.STYLE ? node.check_Child_State === 2 : checked ? node.check_Child_State > -1 && node.check_Child_State < 2 : node.check_Child_State > 0
      };
      return r;
    },
    getTreeCheckedNodes: function getTreeCheckedNodes(setting, nodes, checked, results) {
      if (!nodes) return [];
      var onlyOne = checked && setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL;
      results = !results ? [] : results;

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var children = data.nodeChildren(setting, node);
        var nodeChecked = data.nodeChecked(setting, node);

        if (node.nocheck !== true && node.chkDisabled !== true && nodeChecked == checked) {
          results.push(node);

          if (onlyOne) {
            break;
          }
        }

        data.getTreeCheckedNodes(setting, children, checked, results);

        if (onlyOne && results.length > 0) {
          break;
        }
      }

      return results;
    },
    getTreeChangeCheckedNodes: function getTreeChangeCheckedNodes(setting, nodes, results) {
      if (!nodes) return [];
      results = !results ? [] : results;

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var children = data.nodeChildren(setting, node);
        var nodeChecked = data.nodeChecked(setting, node);

        if (node.nocheck !== true && node.chkDisabled !== true && nodeChecked != node.checkedOld) {
          results.push(node);
        }

        data.getTreeChangeCheckedNodes(setting, children, results);
      }

      return results;
    },
    makeChkFlag: function makeChkFlag(setting, node) {
      if (!node) return;
      var chkFlag = -1;
      var children = data.nodeChildren(setting, node);

      if (children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var cNode = children[i];
          var nodeChecked = data.nodeChecked(setting, cNode);
          var tmp = -1;

          if (setting.check.chkStyle == consts.radio.STYLE) {
            if (cNode.nocheck === true || cNode.chkDisabled === true) {
              tmp = cNode.check_Child_State;
            } else if (cNode.halfCheck === true) {
              tmp = 2;
            } else if (nodeChecked) {
              tmp = 2;
            } else {
              tmp = cNode.check_Child_State > 0 ? 2 : 0;
            }

            if (tmp == 2) {
              chkFlag = 2;
              break;
            } else if (tmp == 0) {
              chkFlag = 0;
            }
          } else if (setting.check.chkStyle == consts.checkbox.STYLE) {
            if (cNode.nocheck === true || cNode.chkDisabled === true) {
              tmp = cNode.check_Child_State;
            } else if (cNode.halfCheck === true) {
              tmp = 1;
            } else if (nodeChecked) {
              tmp = cNode.check_Child_State === -1 || cNode.check_Child_State === 2 ? 2 : 1;
            } else {
              tmp = cNode.check_Child_State > 0 ? 1 : 0;
            }

            if (tmp === 1) {
              chkFlag = 1;
              break;
            } else if (tmp === 2 && chkFlag > -1 && i > 0 && tmp !== chkFlag) {
              chkFlag = 1;
              break;
            } else if (chkFlag === 2 && tmp > -1 && tmp < 2) {
              chkFlag = 1;
              break;
            } else if (tmp > -1) {
              chkFlag = tmp;
            }
          }
        }
      }

      node.check_Child_State = chkFlag;
    }
  },
      //method of event proxy
  _event = {},
      //method of event handler
  _handler = {
    onCheckNode: function onCheckNode(event, node) {
      if (node.chkDisabled === true) return false;
      var setting = data.getSetting(event.data.treeId);
      if (tools.apply(setting.callback.beforeCheck, [setting.treeId, node], true) == false) return true;
      var nodeChecked = data.nodeChecked(setting, node);
      data.nodeChecked(setting, node, !nodeChecked);
      view.checkNodeRelation(setting, node);
      var checkObj = $$(node, consts.id.CHECK, setting);
      view.setChkClass(setting, checkObj, node);
      view.repairParentChkClassWithSelf(setting, node);
      setting.treeObj.trigger(consts.event.CHECK, [event, setting.treeId, node]);
      return true;
    },
    onMouseoverCheck: function onMouseoverCheck(event, node) {
      if (node.chkDisabled === true) return false;
      var setting = data.getSetting(event.data.treeId),
          checkObj = $$(node, consts.id.CHECK, setting);
      node.check_Focus = true;
      view.setChkClass(setting, checkObj, node);
      return true;
    },
    onMouseoutCheck: function onMouseoutCheck(event, node) {
      if (node.chkDisabled === true) return false;
      var setting = data.getSetting(event.data.treeId),
          checkObj = $$(node, consts.id.CHECK, setting);
      node.check_Focus = false;
      view.setChkClass(setting, checkObj, node);
      return true;
    }
  },
      //method of tools for zTree
  _tools = {},
      //method of operate ztree dom
  _view = {
    checkNodeRelation: function checkNodeRelation(setting, node) {
      var pNode,
          i,
          l,
          r = consts.radio;
      var nodeChecked = data.nodeChecked(setting, node);

      if (setting.check.chkStyle == r.STYLE) {
        var checkedList = data.getRadioCheckedList(setting);

        if (nodeChecked) {
          if (setting.check.radioType == r.TYPE_ALL) {
            for (i = checkedList.length - 1; i >= 0; i--) {
              pNode = checkedList[i];
              var pNodeChecked = data.nodeChecked(setting, pNode);

              if (pNodeChecked && pNode != node) {
                data.nodeChecked(setting, pNode, false);
                checkedList.splice(i, 1);
                view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode);

                if (pNode.parentTId != node.parentTId) {
                  view.repairParentChkClassWithSelf(setting, pNode);
                }
              }
            }

            checkedList.push(node);
          } else {
            var parentNode = node.parentTId ? node.getParentNode() : data.getRoot(setting);
            var children = data.nodeChildren(setting, parentNode);

            for (i = 0, l = children.length; i < l; i++) {
              pNode = children[i];
              var pNodeChecked = data.nodeChecked(setting, pNode);

              if (pNodeChecked && pNode != node) {
                data.nodeChecked(setting, pNode, false);
                view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode);
              }
            }
          }
        } else if (setting.check.radioType == r.TYPE_ALL) {
          for (i = 0, l = checkedList.length; i < l; i++) {
            if (node == checkedList[i]) {
              checkedList.splice(i, 1);
              break;
            }
          }
        }
      } else {
        var children = data.nodeChildren(setting, node);

        if (nodeChecked && (!children || children.length == 0 || setting.check.chkboxType.Y.indexOf("s") > -1)) {
          view.setSonNodeCheckBox(setting, node, true);
        }

        if (!nodeChecked && (!children || children.length == 0 || setting.check.chkboxType.N.indexOf("s") > -1)) {
          view.setSonNodeCheckBox(setting, node, false);
        }

        if (nodeChecked && setting.check.chkboxType.Y.indexOf("p") > -1) {
          view.setParentNodeCheckBox(setting, node, true);
        }

        if (!nodeChecked && setting.check.chkboxType.N.indexOf("p") > -1) {
          view.setParentNodeCheckBox(setting, node, false);
        }
      }
    },
    makeChkClass: function makeChkClass(setting, node) {
      var c = consts.checkbox,
          r = consts.radio,
          fullStyle = "";
      var nodeChecked = data.nodeChecked(setting, node);

      if (node.chkDisabled === true) {
        fullStyle = c.DISABLED;
      } else if (node.halfCheck) {
        fullStyle = c.PART;
      } else if (setting.check.chkStyle == r.STYLE) {
        fullStyle = node.check_Child_State < 1 ? c.FULL : c.PART;
      } else {
        fullStyle = nodeChecked ? node.check_Child_State === 2 || node.check_Child_State === -1 ? c.FULL : c.PART : node.check_Child_State < 1 ? c.FULL : c.PART;
      }

      var chkName = setting.check.chkStyle + "_" + (nodeChecked ? c.TRUE : c.FALSE) + "_" + fullStyle;
      chkName = node.check_Focus && node.chkDisabled !== true ? chkName + "_" + c.FOCUS : chkName;
      return consts.className.BUTTON + " " + c.DEFAULT + " " + chkName;
    },
    repairAllChk: function repairAllChk(setting, checked) {
      if (setting.check.enable && setting.check.chkStyle === consts.checkbox.STYLE) {
        var root = data.getRoot(setting);
        var children = data.nodeChildren(setting, root);

        for (var i = 0, l = children.length; i < l; i++) {
          var node = children[i];

          if (node.nocheck !== true && node.chkDisabled !== true) {
            data.nodeChecked(setting, node, checked);
          }

          view.setSonNodeCheckBox(setting, node, checked);
        }
      }
    },
    repairChkClass: function repairChkClass(setting, node) {
      if (!node) return;
      data.makeChkFlag(setting, node);

      if (node.nocheck !== true) {
        var checkObj = $$(node, consts.id.CHECK, setting);
        view.setChkClass(setting, checkObj, node);
      }
    },
    repairParentChkClass: function repairParentChkClass(setting, node) {
      if (!node || !node.parentTId) return;
      var pNode = node.getParentNode();
      view.repairChkClass(setting, pNode);
      view.repairParentChkClass(setting, pNode);
    },
    repairParentChkClassWithSelf: function repairParentChkClassWithSelf(setting, node) {
      if (!node) return;
      var children = data.nodeChildren(setting, node);

      if (children && children.length > 0) {
        view.repairParentChkClass(setting, children[0]);
      } else {
        view.repairParentChkClass(setting, node);
      }
    },
    repairSonChkDisabled: function repairSonChkDisabled(setting, node, chkDisabled, inherit) {
      if (!node) return;

      if (node.chkDisabled != chkDisabled) {
        node.chkDisabled = chkDisabled;
      }

      view.repairChkClass(setting, node);
      var children = data.nodeChildren(setting, node);

      if (children && inherit) {
        for (var i = 0, l = children.length; i < l; i++) {
          var sNode = children[i];
          view.repairSonChkDisabled(setting, sNode, chkDisabled, inherit);
        }
      }
    },
    repairParentChkDisabled: function repairParentChkDisabled(setting, node, chkDisabled, inherit) {
      if (!node) return;

      if (node.chkDisabled != chkDisabled && inherit) {
        node.chkDisabled = chkDisabled;
      }

      view.repairChkClass(setting, node);
      view.repairParentChkDisabled(setting, node.getParentNode(), chkDisabled, inherit);
    },
    setChkClass: function setChkClass(setting, obj, node) {
      if (!obj) return;

      if (node.nocheck === true) {
        obj.hide();
      } else {
        obj.show();
      }

      obj.attr('class', view.makeChkClass(setting, node));
    },
    setParentNodeCheckBox: function setParentNodeCheckBox(setting, node, value, srcNode) {
      var checkObj = $$(node, consts.id.CHECK, setting);
      if (!srcNode) srcNode = node;
      data.makeChkFlag(setting, node);

      if (node.nocheck !== true && node.chkDisabled !== true) {
        data.nodeChecked(setting, node, value);
        view.setChkClass(setting, checkObj, node);

        if (setting.check.autoCheckTrigger && node != srcNode) {
          setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node]);
        }
      }

      if (node.parentTId) {
        var pSign = true;

        if (!value) {
          var pNodes = data.nodeChildren(setting, node.getParentNode());

          for (var i = 0, l = pNodes.length; i < l; i++) {
            var pNode = pNodes[i];
            var nodeChecked = data.nodeChecked(setting, pNode);

            if (pNode.nocheck !== true && pNode.chkDisabled !== true && nodeChecked || (pNode.nocheck === true || pNode.chkDisabled === true) && pNode.check_Child_State > 0) {
              pSign = false;
              break;
            }
          }
        }

        if (pSign) {
          view.setParentNodeCheckBox(setting, node.getParentNode(), value, srcNode);
        }
      }
    },
    setSonNodeCheckBox: function setSonNodeCheckBox(setting, node, value, srcNode) {
      if (!node) return;
      var checkObj = $$(node, consts.id.CHECK, setting);
      if (!srcNode) srcNode = node;
      var hasDisable = false;
      var children = data.nodeChildren(setting, node);

      if (children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var sNode = children[i];
          view.setSonNodeCheckBox(setting, sNode, value, srcNode);
          if (sNode.chkDisabled === true) hasDisable = true;
        }
      }

      if (node != data.getRoot(setting) && node.chkDisabled !== true) {
        if (hasDisable && node.nocheck !== true) {
          data.makeChkFlag(setting, node);
        }

        if (node.nocheck !== true && node.chkDisabled !== true) {
          data.nodeChecked(setting, node, value);
          if (!hasDisable) node.check_Child_State = children && children.length > 0 ? value ? 2 : 0 : -1;
        } else {
          node.check_Child_State = -1;
        }

        view.setChkClass(setting, checkObj, node);

        if (setting.check.autoCheckTrigger && node != srcNode && node.nocheck !== true && node.chkDisabled !== true) {
          setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node]);
        }
      }
    }
  },
      _z = {
    tools: _tools,
    view: _view,
    event: _event,
    data: _data
  };

  $.extend(true, $.fn.zTree.consts, _consts);
  $.extend(true, $.fn.zTree._z, _z);
  var zt = $.fn.zTree,
      tools = zt._z.tools,
      consts = zt.consts,
      view = zt._z.view,
      data = zt._z.data,
      event = zt._z.event,
      $$ = tools.$;

  data.nodeChecked = function (setting, node, newChecked) {
    if (!node) {
      return false;
    }

    var key = setting.data.key.checked;

    if (typeof newChecked !== 'undefined') {
      if (typeof newChecked === "string") {
        newChecked = tools.eqs(newChecked, "true");
      }

      newChecked = !!newChecked;
      node[key] = newChecked;
    } else if (typeof node[key] == "string") {
      node[key] = tools.eqs(node[key], "true");
    } else {
      node[key] = !!node[key];
    }

    return node[key];
  };

  data.exSetting(_setting);
  data.addInitBind(_bindEvent);
  data.addInitUnBind(_unbindEvent);
  data.addInitCache(_initCache);
  data.addInitNode(_initNode);
  data.addInitProxy(_eventProxy, true);
  data.addInitRoot(_initRoot);
  data.addBeforeA(_beforeA);
  data.addZTreeTools(_zTreeTools);
  var _createNodes = view.createNodes;

  view.createNodes = function (setting, level, nodes, parentNode, index) {
    if (_createNodes) _createNodes.apply(view, arguments);
    if (!nodes) return;
    view.repairParentChkClassWithSelf(setting, parentNode);
  };

  var _removeNode = view.removeNode;

  view.removeNode = function (setting, node) {
    var parentNode = node.getParentNode();
    if (_removeNode) _removeNode.apply(view, arguments);
    if (!node || !parentNode) return;
    view.repairChkClass(setting, parentNode);
    view.repairParentChkClass(setting, parentNode);
  };

  var _appendNodes = view.appendNodes;

  view.appendNodes = function (setting, level, nodes, parentNode, index, initFlag, openFlag) {
    var html = "";

    if (_appendNodes) {
      html = _appendNodes.apply(view, arguments);
    }

    if (parentNode) {
      data.makeChkFlag(setting, parentNode);
    }

    return html;
  };
})(jquery__WEBPACK_IMPORTED_MODULE_14___default.a);
/*
 * JQuery zTree exedit
 * v3.5.44
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-04-29
 */


(function ($) {
  //default consts of exedit
  var _consts = {
    event: {
      DRAG: "ztree_drag",
      DROP: "ztree_drop",
      RENAME: "ztree_rename",
      DRAGMOVE: "ztree_dragmove"
    },
    id: {
      EDIT: "_edit",
      INPUT: "_input",
      REMOVE: "_remove"
    },
    move: {
      TYPE_INNER: "inner",
      TYPE_PREV: "prev",
      TYPE_NEXT: "next"
    },
    node: {
      CURSELECTED_EDIT: "curSelectedNode_Edit",
      TMPTARGET_TREE: "tmpTargetzTree",
      TMPTARGET_NODE: "tmpTargetNode"
    }
  },
      //default setting of exedit
  _setting = {
    edit: {
      enable: false,
      editNameSelectAll: false,
      showRemoveBtn: true,
      showRenameBtn: true,
      removeTitle: "remove",
      renameTitle: "rename",
      drag: {
        autoExpandTrigger: false,
        isCopy: true,
        isMove: true,
        prev: true,
        next: true,
        inner: true,
        minMoveSize: 5,
        borderMax: 10,
        borderMin: -5,
        maxShowNodeNum: 5,
        autoOpenTime: 500
      }
    },
    view: {
      addHoverDom: null,
      removeHoverDom: null
    },
    callback: {
      beforeDrag: null,
      beforeDragOpen: null,
      beforeDrop: null,
      beforeEditName: null,
      beforeRename: null,
      onDrag: null,
      onDragMove: null,
      onDrop: null,
      onRename: null
    }
  },
      //default root of exedit
  _initRoot = function _initRoot(setting) {
    var r = data.getRoot(setting),
        rs = data.getRoots();
    r.curEditNode = null;
    r.curEditInput = null;
    r.curHoverNode = null;
    r.dragFlag = 0;
    r.dragNodeShowBefore = [];
    r.dragMaskList = new Array();
    rs.showHoverDom = true;
  },
      //default cache of exedit
  _initCache = function _initCache(treeId) {},
      //default bind event of exedit
  _bindEvent = function _bindEvent(setting) {
    var o = setting.treeObj;
    var c = consts.event;
    o.bind(c.RENAME, function (event, treeId, treeNode, isCancel) {
      tools.apply(setting.callback.onRename, [event, treeId, treeNode, isCancel]);
    });
    o.bind(c.DRAG, function (event, srcEvent, treeId, treeNodes) {
      tools.apply(setting.callback.onDrag, [srcEvent, treeId, treeNodes]);
    });
    o.bind(c.DRAGMOVE, function (event, srcEvent, treeId, treeNodes) {
      tools.apply(setting.callback.onDragMove, [srcEvent, treeId, treeNodes]);
    });
    o.bind(c.DROP, function (event, srcEvent, treeId, treeNodes, targetNode, moveType, isCopy) {
      tools.apply(setting.callback.onDrop, [srcEvent, treeId, treeNodes, targetNode, moveType, isCopy]);
    });
  },
      _unbindEvent = function _unbindEvent(setting) {
    var o = setting.treeObj;
    var c = consts.event;
    o.unbind(c.RENAME);
    o.unbind(c.DRAG);
    o.unbind(c.DRAGMOVE);
    o.unbind(c.DROP);
  },
      //default event proxy of exedit
  _eventProxy = function _eventProxy(e) {
    var target = e.target,
        setting = data.getSetting(e.data.treeId),
        relatedTarget = e.relatedTarget,
        tId = "",
        node = null,
        nodeEventType = "",
        treeEventType = "",
        nodeEventCallback = null,
        treeEventCallback = null,
        tmp = null;

    if (tools.eqs(e.type, "mouseover")) {
      tmp = tools.getMDom(setting, target, [{
        tagName: "a",
        attrName: "treeNode" + consts.id.A
      }]);

      if (tmp) {
        tId = tools.getNodeMainDom(tmp).id;
        nodeEventType = "hoverOverNode";
      }
    } else if (tools.eqs(e.type, "mouseout")) {
      tmp = tools.getMDom(setting, relatedTarget, [{
        tagName: "a",
        attrName: "treeNode" + consts.id.A
      }]);

      if (!tmp) {
        tId = "remove";
        nodeEventType = "hoverOutNode";
      }
    } else if (tools.eqs(e.type, "mousedown")) {
      tmp = tools.getMDom(setting, target, [{
        tagName: "a",
        attrName: "treeNode" + consts.id.A
      }]);

      if (tmp) {
        tId = tools.getNodeMainDom(tmp).id;
        nodeEventType = "mousedownNode";
      }
    }

    if (tId.length > 0) {
      node = data.getNodeCache(setting, tId);

      switch (nodeEventType) {
        case "mousedownNode":
          nodeEventCallback = _handler.onMousedownNode;
          break;

        case "hoverOverNode":
          nodeEventCallback = _handler.onHoverOverNode;
          break;

        case "hoverOutNode":
          nodeEventCallback = _handler.onHoverOutNode;
          break;
      }
    }

    var proxyResult = {
      stop: false,
      node: node,
      nodeEventType: nodeEventType,
      nodeEventCallback: nodeEventCallback,
      treeEventType: treeEventType,
      treeEventCallback: treeEventCallback
    };
    return proxyResult;
  },
      //default init node of exedit
  _initNode = function _initNode(setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
    if (!n) return;
    n.isHover = false;
    n.editNameFlag = false;
  },
      //update zTreeObj, add method of edit
  _zTreeTools = function _zTreeTools(setting, zTreeTools) {
    zTreeTools.cancelEditName = function (newName) {
      var root = data.getRoot(this.setting);
      if (!root.curEditNode) return;
      view.cancelCurEditNode(this.setting, newName ? newName : null, true);
    };

    zTreeTools.copyNode = function (targetNode, node, moveType, isSilent) {
      if (!node) return null;
      var isParent = data.nodeIsParent(setting, targetNode);
      if (targetNode && !isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) return null;

      var _this = this,
          newNode = tools.clone(node);

      if (!targetNode) {
        targetNode = null;
        moveType = consts.move.TYPE_INNER;
      }

      if (moveType == consts.move.TYPE_INNER) {
        function copyCallback() {
          view.addNodes(_this.setting, targetNode, -1, [newNode], isSilent);
        }

        if (tools.canAsync(this.setting, targetNode)) {
          view.asyncNode(this.setting, targetNode, isSilent, copyCallback);
        } else {
          copyCallback();
        }
      } else {
        view.addNodes(this.setting, targetNode.parentNode, -1, [newNode], isSilent);
        view.moveNode(this.setting, targetNode, newNode, moveType, false, isSilent);
      }

      return newNode;
    };

    zTreeTools.editName = function (node) {
      if (!node || !node.tId || node !== data.getNodeCache(this.setting, node.tId)) return;
      if (node.parentTId) view.expandCollapseParentNode(this.setting, node.getParentNode(), true);
      view.editNode(this.setting, node);
    };

    zTreeTools.moveNode = function (targetNode, node, moveType, isSilent) {
      if (!node) return node;
      var isParent = data.nodeIsParent(setting, targetNode);

      if (targetNode && !isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) {
        return null;
      } else if (targetNode && (node.parentTId == targetNode.tId && moveType == consts.move.TYPE_INNER || $$(node, this.setting).find("#" + targetNode.tId).length > 0)) {
        return null;
      } else if (!targetNode) {
        targetNode = null;
      }

      var _this = this;

      function moveCallback() {
        view.moveNode(_this.setting, targetNode, node, moveType, false, isSilent);
      }

      if (tools.canAsync(this.setting, targetNode) && moveType === consts.move.TYPE_INNER) {
        view.asyncNode(this.setting, targetNode, isSilent, moveCallback);
      } else {
        moveCallback();
      }

      return node;
    };

    zTreeTools.setEditable = function (editable) {
      this.setting.edit.enable = editable;
      return this.refresh();
    };
  },
      //method of operate data
  _data = {
    setSonNodeLevel: function setSonNodeLevel(setting, parentNode, node) {
      if (!node) return;
      var children = data.nodeChildren(setting, node);
      node.level = parentNode ? parentNode.level + 1 : 0;
      if (!children) return;

      for (var i = 0, l = children.length; i < l; i++) {
        if (children[i]) data.setSonNodeLevel(setting, node, children[i]);
      }
    }
  },
      //method of event proxy
  _event = {},
      //method of event handler
  _handler = {
    onHoverOverNode: function onHoverOverNode(event, node) {
      var setting = data.getSetting(event.data.treeId),
          root = data.getRoot(setting);

      if (root.curHoverNode != node) {
        _handler.onHoverOutNode(event);
      }

      root.curHoverNode = node;
      view.addHoverDom(setting, node);
    },
    onHoverOutNode: function onHoverOutNode(event, node) {
      var setting = data.getSetting(event.data.treeId),
          root = data.getRoot(setting);

      if (root.curHoverNode && !data.isSelectedNode(setting, root.curHoverNode)) {
        view.removeTreeDom(setting, root.curHoverNode);
        root.curHoverNode = null;
      }
    },
    onMousedownNode: function onMousedownNode(eventMouseDown, _node) {
      var i,
          l,
          setting = data.getSetting(eventMouseDown.data.treeId),
          root = data.getRoot(setting),
          roots = data.getRoots(); //right click can't drag & drop

      if (eventMouseDown.button == 2 || !setting.edit.enable || !setting.edit.drag.isCopy && !setting.edit.drag.isMove) return true; //input of edit node name can't drag & drop

      var target = eventMouseDown.target,
          _nodes = data.getRoot(setting).curSelectedList,
          nodes = [];

      if (!data.isSelectedNode(setting, _node)) {
        nodes = [_node];
      } else {
        for (i = 0, l = _nodes.length; i < l; i++) {
          if (_nodes[i].editNameFlag && tools.eqs(target.tagName, "input") && target.getAttribute("treeNode" + consts.id.INPUT) !== null) {
            return true;
          }

          nodes.push(_nodes[i]);

          if (nodes[0].parentTId !== _nodes[i].parentTId) {
            nodes = [_node];
            break;
          }
        }
      }

      view.editNodeBlur = true;
      view.cancelCurEditNode(setting);
      var doc = $(setting.treeObj.get(0).ownerDocument),
          body = $(setting.treeObj.get(0).ownerDocument.body),
          curNode,
          tmpArrow,
          tmpTarget,
          isOtherTree = false,
          targetSetting = setting,
          sourceSetting = setting,
          preNode,
          nextNode,
          preTmpTargetNodeId = null,
          preTmpMoveType = null,
          tmpTargetNodeId = null,
          moveType = consts.move.TYPE_INNER,
          mouseDownX = eventMouseDown.clientX,
          mouseDownY = eventMouseDown.clientY,
          startTime = new Date().getTime();

      if (tools.uCanDo(setting)) {
        doc.bind("mousemove", _docMouseMove);
      }

      function _docMouseMove(event) {
        //avoid start drag after click node
        if (root.dragFlag == 0 && Math.abs(mouseDownX - event.clientX) < setting.edit.drag.minMoveSize && Math.abs(mouseDownY - event.clientY) < setting.edit.drag.minMoveSize) {
          return true;
        }

        var i, l, tmpNode, tmpDom, tmpNodes;
        body.css("cursor", "pointer");

        if (root.dragFlag == 0) {
          if (tools.apply(setting.callback.beforeDrag, [setting.treeId, nodes], true) == false) {
            _docMouseUp(event);

            return true;
          }

          for (i = 0, l = nodes.length; i < l; i++) {
            if (i == 0) {
              root.dragNodeShowBefore = [];
            }

            tmpNode = nodes[i];

            if (data.nodeIsParent(setting, tmpNode) && tmpNode.open) {
              view.expandCollapseNode(setting, tmpNode, !tmpNode.open);
              root.dragNodeShowBefore[tmpNode.tId] = true;
            } else {
              root.dragNodeShowBefore[tmpNode.tId] = false;
            }
          }

          root.dragFlag = 1;
          roots.showHoverDom = false;
          tools.showIfameMask(setting, true); //sort

          var isOrder = true,
              lastIndex = -1;

          if (nodes.length > 1) {
            var pNodes = nodes[0].parentTId ? data.nodeChildren(setting, nodes[0].getParentNode()) : data.getNodes(setting);
            tmpNodes = [];

            for (i = 0, l = pNodes.length; i < l; i++) {
              if (root.dragNodeShowBefore[pNodes[i].tId] !== undefined) {
                if (isOrder && lastIndex > -1 && lastIndex + 1 !== i) {
                  isOrder = false;
                }

                tmpNodes.push(pNodes[i]);
                lastIndex = i;
              }

              if (nodes.length === tmpNodes.length) {
                nodes = tmpNodes;
                break;
              }
            }
          }

          if (isOrder) {
            preNode = nodes[0].getPreNode();
            nextNode = nodes[nodes.length - 1].getNextNode();
          } //set node in selected


          curNode = $$("<ul class='zTreeDragUL'></ul>", setting);

          for (i = 0, l = nodes.length; i < l; i++) {
            tmpNode = nodes[i];
            tmpNode.editNameFlag = false;
            view.selectNode(setting, tmpNode, i > 0);
            view.removeTreeDom(setting, tmpNode);

            if (i > setting.edit.drag.maxShowNodeNum - 1) {
              continue;
            }

            tmpDom = $$("<li id='" + tmpNode.tId + "_tmp'></li>", setting);
            tmpDom.append($$(tmpNode, consts.id.A, setting).clone());
            tmpDom.css("padding", "0");
            tmpDom.children("#" + tmpNode.tId + consts.id.A).removeClass(consts.node.CURSELECTED);
            curNode.append(tmpDom);

            if (i == setting.edit.drag.maxShowNodeNum - 1) {
              tmpDom = $$("<li id='" + tmpNode.tId + "_moretmp'><a>  ...  </a></li>", setting);
              curNode.append(tmpDom);
            }
          }

          curNode.attr("id", nodes[0].tId + consts.id.UL + "_tmp");
          curNode.addClass(setting.treeObj.attr("class"));
          curNode.appendTo(body);
          tmpArrow = $$("<span class='tmpzTreeMove_arrow'></span>", setting);
          tmpArrow.attr("id", "zTreeMove_arrow_tmp");
          tmpArrow.appendTo(body);
          setting.treeObj.trigger(consts.event.DRAG, [event, setting.treeId, nodes]);
        }

        if (root.dragFlag == 1) {
          if (tmpTarget && tmpArrow.attr("id") == event.target.id && tmpTargetNodeId && event.clientX + doc.scrollLeft() + 2 > $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).offset().left) {
            var xT = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget);
            event.target = xT.length > 0 ? xT.get(0) : event.target;
          } else if (tmpTarget) {
            tmpTarget.removeClass(consts.node.TMPTARGET_TREE);
            if (tmpTargetNodeId) $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER);
          }

          tmpTarget = null;
          tmpTargetNodeId = null; //judge drag & drop in multi ztree

          isOtherTree = false;
          targetSetting = setting;
          var settings = data.getSettings();

          for (var s in settings) {
            if (settings[s].treeId && settings[s].edit.enable && settings[s].treeId != setting.treeId && (event.target.id == settings[s].treeId || $(event.target).parents("#" + settings[s].treeId).length > 0)) {
              isOtherTree = true;
              targetSetting = settings[s];
            }
          }

          var docScrollTop = doc.scrollTop(),
              docScrollLeft = doc.scrollLeft(),
              treeOffset = targetSetting.treeObj.offset(),
              scrollHeight = targetSetting.treeObj.get(0).scrollHeight,
              scrollWidth = targetSetting.treeObj.get(0).scrollWidth,
              dTop = event.clientY + docScrollTop - treeOffset.top,
              dBottom = targetSetting.treeObj.height() + treeOffset.top - event.clientY - docScrollTop,
              dLeft = event.clientX + docScrollLeft - treeOffset.left,
              dRight = targetSetting.treeObj.width() + treeOffset.left - event.clientX - docScrollLeft,
              isTop = dTop < setting.edit.drag.borderMax && dTop > setting.edit.drag.borderMin,
              isBottom = dBottom < setting.edit.drag.borderMax && dBottom > setting.edit.drag.borderMin,
              isLeft = dLeft < setting.edit.drag.borderMax && dLeft > setting.edit.drag.borderMin,
              isRight = dRight < setting.edit.drag.borderMax && dRight > setting.edit.drag.borderMin,
              isTreeInner = dTop > setting.edit.drag.borderMin && dBottom > setting.edit.drag.borderMin && dLeft > setting.edit.drag.borderMin && dRight > setting.edit.drag.borderMin,
              isTreeTop = isTop && targetSetting.treeObj.scrollTop() <= 0,
              isTreeBottom = isBottom && targetSetting.treeObj.scrollTop() + targetSetting.treeObj.height() + 10 >= scrollHeight,
              isTreeLeft = isLeft && targetSetting.treeObj.scrollLeft() <= 0,
              isTreeRight = isRight && targetSetting.treeObj.scrollLeft() + targetSetting.treeObj.width() + 10 >= scrollWidth;

          if (event.target && tools.isChildOrSelf(event.target, targetSetting.treeId)) {
            //get node <li> dom
            var targetObj = event.target;

            while (targetObj && targetObj.tagName && !tools.eqs(targetObj.tagName, "li") && targetObj.id != targetSetting.treeId) {
              targetObj = targetObj.parentNode;
            }

            var canMove = true; //don't move to self or children of self

            for (i = 0, l = nodes.length; i < l; i++) {
              tmpNode = nodes[i];

              if (targetObj.id === tmpNode.tId) {
                canMove = false;
                break;
              } else if ($$(tmpNode, setting).find("#" + targetObj.id).length > 0) {
                canMove = false;
                break;
              }
            }

            if (canMove && event.target && tools.isChildOrSelf(event.target, targetObj.id + consts.id.A)) {
              tmpTarget = $(targetObj);
              tmpTargetNodeId = targetObj.id;
            }
          } //the mouse must be in zTree


          tmpNode = nodes[0];

          if (isTreeInner && tools.isChildOrSelf(event.target, targetSetting.treeId)) {
            //judge mouse move in root of ztree
            if (!tmpTarget && (event.target.id == targetSetting.treeId || isTreeTop || isTreeBottom || isTreeLeft || isTreeRight) && (isOtherTree || !isOtherTree && tmpNode.parentTId)) {
              tmpTarget = targetSetting.treeObj;
            } //auto scroll top


            if (isTop) {
              targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() - 10);
            } else if (isBottom) {
              targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() + 10);
            }

            if (isLeft) {
              targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() - 10);
            } else if (isRight) {
              targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + 10);
            } //auto scroll left


            if (tmpTarget && tmpTarget != targetSetting.treeObj && tmpTarget.offset().left < targetSetting.treeObj.offset().left) {
              targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + tmpTarget.offset().left - targetSetting.treeObj.offset().left);
            }
          }

          curNode.css({
            "top": event.clientY + docScrollTop + 3 + "px",
            "left": event.clientX + docScrollLeft + 3 + "px"
          });
          var dX = 0;
          var dY = 0;

          if (tmpTarget && tmpTarget.attr("id") != targetSetting.treeId) {
            var tmpTargetNode = tmpTargetNodeId == null ? null : data.getNodeCache(targetSetting, tmpTargetNodeId),
                isCopy = (event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy || !setting.edit.drag.isMove && setting.edit.drag.isCopy,
                isPrev = !!(preNode && tmpTargetNodeId === preNode.tId),
                isNext = !!(nextNode && tmpTargetNodeId === nextNode.tId),
                isInner = tmpNode.parentTId && tmpNode.parentTId == tmpTargetNodeId,
                canPrev = (isCopy || !isNext) && tools.apply(targetSetting.edit.drag.prev, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.prev),
                canNext = (isCopy || !isPrev) && tools.apply(targetSetting.edit.drag.next, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.next),
                canInner = (isCopy || !isInner) && !(targetSetting.data.keep.leaf && !data.nodeIsParent(setting, tmpTargetNode)) && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.inner);

            function clearMove() {
              tmpTarget = null;
              tmpTargetNodeId = "";
              moveType = consts.move.TYPE_INNER;
              tmpArrow.css({
                "display": "none"
              });

              if (window.zTreeMoveTimer) {
                clearTimeout(window.zTreeMoveTimer);
                window.zTreeMoveTargetNodeTId = null;
              }
            }

            if (!canPrev && !canNext && !canInner) {
              clearMove();
            } else {
              var tmpTargetA = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget),
                  tmpNextA = tmpTargetNode.isLastNode ? null : $("#" + tmpTargetNode.getNextNode().tId + consts.id.A, tmpTarget.next()),
                  tmpTop = tmpTargetA.offset().top,
                  tmpLeft = tmpTargetA.offset().left,
                  prevPercent = canPrev ? canInner ? 0.25 : canNext ? 0.5 : 1 : -1,
                  nextPercent = canNext ? canInner ? 0.75 : canPrev ? 0.5 : 0 : -1,
                  dY_percent = (event.clientY + docScrollTop - tmpTop) / tmpTargetA.height();

              if ((prevPercent == 1 || dY_percent <= prevPercent && dY_percent >= -.2) && canPrev) {
                dX = 1 - tmpArrow.width();
                dY = tmpTop - tmpArrow.height() / 2;
                moveType = consts.move.TYPE_PREV;
              } else if ((nextPercent == 0 || dY_percent >= nextPercent && dY_percent <= 1.2) && canNext) {
                dX = 1 - tmpArrow.width();
                dY = tmpNextA == null || data.nodeIsParent(setting, tmpTargetNode) && tmpTargetNode.open ? tmpTop + tmpTargetA.height() - tmpArrow.height() / 2 : tmpNextA.offset().top - tmpArrow.height() / 2;
                moveType = consts.move.TYPE_NEXT;
              } else if (canInner) {
                dX = 5 - tmpArrow.width();
                dY = tmpTop;
                moveType = consts.move.TYPE_INNER;
              } else {
                clearMove();
              }

              if (tmpTarget) {
                tmpArrow.css({
                  "display": "block",
                  "top": dY + "px",
                  "left": tmpLeft + dX + "px"
                });
                tmpTargetA.addClass(consts.node.TMPTARGET_NODE + "_" + moveType);

                if (preTmpTargetNodeId != tmpTargetNodeId || preTmpMoveType != moveType) {
                  startTime = new Date().getTime();
                }

                if (tmpTargetNode && data.nodeIsParent(setting, tmpTargetNode) && moveType == consts.move.TYPE_INNER) {
                  var startTimer = true;

                  if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== tmpTargetNode.tId) {
                    clearTimeout(window.zTreeMoveTimer);
                    window.zTreeMoveTargetNodeTId = null;
                  } else if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === tmpTargetNode.tId) {
                    startTimer = false;
                  }

                  if (startTimer) {
                    window.zTreeMoveTimer = setTimeout(function () {
                      if (moveType != consts.move.TYPE_INNER) return;

                      if (tmpTargetNode && data.nodeIsParent(setting, tmpTargetNode) && !tmpTargetNode.open && new Date().getTime() - startTime > targetSetting.edit.drag.autoOpenTime && tools.apply(targetSetting.callback.beforeDragOpen, [targetSetting.treeId, tmpTargetNode], true)) {
                        view.switchNode(targetSetting, tmpTargetNode);

                        if (targetSetting.edit.drag.autoExpandTrigger) {
                          targetSetting.treeObj.trigger(consts.event.EXPAND, [targetSetting.treeId, tmpTargetNode]);
                        }
                      }
                    }, targetSetting.edit.drag.autoOpenTime + 50);
                    window.zTreeMoveTargetNodeTId = tmpTargetNode.tId;
                  }
                }
              }
            }
          } else {
            moveType = consts.move.TYPE_INNER;

            if (tmpTarget && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, null], !!targetSetting.edit.drag.inner)) {
              tmpTarget.addClass(consts.node.TMPTARGET_TREE);
            } else {
              tmpTarget = null;
            }

            tmpArrow.css({
              "display": "none"
            });

            if (window.zTreeMoveTimer) {
              clearTimeout(window.zTreeMoveTimer);
              window.zTreeMoveTargetNodeTId = null;
            }
          }

          preTmpTargetNodeId = tmpTargetNodeId;
          preTmpMoveType = moveType;
          setting.treeObj.trigger(consts.event.DRAGMOVE, [event, setting.treeId, nodes]);
        }

        return false;
      }

      doc.bind("mouseup", _docMouseUp);

      function _docMouseUp(event) {
        if (window.zTreeMoveTimer) {
          clearTimeout(window.zTreeMoveTimer);
          window.zTreeMoveTargetNodeTId = null;
        }

        preTmpTargetNodeId = null;
        preTmpMoveType = null;
        doc.unbind("mousemove", _docMouseMove);
        doc.unbind("mouseup", _docMouseUp);
        doc.unbind("selectstart", _docSelect);
        body.css("cursor", "");

        if (tmpTarget) {
          tmpTarget.removeClass(consts.node.TMPTARGET_TREE);
          if (tmpTargetNodeId) $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER);
        }

        tools.showIfameMask(setting, false);
        roots.showHoverDom = true;
        if (root.dragFlag == 0) return;
        root.dragFlag = 0;
        var i, l, tmpNode;

        for (i = 0, l = nodes.length; i < l; i++) {
          tmpNode = nodes[i];

          if (data.nodeIsParent(setting, tmpNode) && root.dragNodeShowBefore[tmpNode.tId] && !tmpNode.open) {
            view.expandCollapseNode(setting, tmpNode, !tmpNode.open);
            delete root.dragNodeShowBefore[tmpNode.tId];
          }
        }

        if (curNode) curNode.remove();
        if (tmpArrow) tmpArrow.remove();
        var isCopy = (event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy || !setting.edit.drag.isMove && setting.edit.drag.isCopy;

        if (!isCopy && tmpTarget && tmpTargetNodeId && nodes[0].parentTId && tmpTargetNodeId == nodes[0].parentTId && moveType == consts.move.TYPE_INNER) {
          tmpTarget = null;
        }

        if (tmpTarget) {
          var dragTargetNode = tmpTargetNodeId == null ? null : data.getNodeCache(targetSetting, tmpTargetNodeId);

          if (tools.apply(setting.callback.beforeDrop, [targetSetting.treeId, nodes, dragTargetNode, moveType, isCopy], true) == false) {
            view.selectNodes(sourceSetting, nodes);
            return;
          }

          var newNodes = isCopy ? tools.clone(nodes) : nodes;

          function dropCallback() {
            if (isOtherTree) {
              if (!isCopy) {
                for (var i = 0, l = nodes.length; i < l; i++) {
                  view.removeNode(setting, nodes[i]);
                }
              }

              if (moveType == consts.move.TYPE_INNER) {
                view.addNodes(targetSetting, dragTargetNode, -1, newNodes);
              } else {
                view.addNodes(targetSetting, dragTargetNode.getParentNode(), moveType == consts.move.TYPE_PREV ? dragTargetNode.getIndex() : dragTargetNode.getIndex() + 1, newNodes);
              }
            } else {
              if (isCopy && moveType == consts.move.TYPE_INNER) {
                view.addNodes(targetSetting, dragTargetNode, -1, newNodes);
              } else if (isCopy) {
                view.addNodes(targetSetting, dragTargetNode.getParentNode(), moveType == consts.move.TYPE_PREV ? dragTargetNode.getIndex() : dragTargetNode.getIndex() + 1, newNodes);
              } else {
                if (moveType != consts.move.TYPE_NEXT) {
                  for (i = 0, l = newNodes.length; i < l; i++) {
                    view.moveNode(targetSetting, dragTargetNode, newNodes[i], moveType, false);
                  }
                } else {
                  for (i = -1, l = newNodes.length - 1; i < l; l--) {
                    view.moveNode(targetSetting, dragTargetNode, newNodes[l], moveType, false);
                  }
                }
              }
            }

            view.selectNodes(targetSetting, newNodes);
            var a = $$(newNodes[0], setting).get(0);
            view.scrollIntoView(setting, a);
            setting.treeObj.trigger(consts.event.DROP, [event, targetSetting.treeId, newNodes, dragTargetNode, moveType, isCopy]);
          }

          if (moveType == consts.move.TYPE_INNER && tools.canAsync(targetSetting, dragTargetNode)) {
            view.asyncNode(targetSetting, dragTargetNode, false, dropCallback);
          } else {
            dropCallback();
          }
        } else {
          view.selectNodes(sourceSetting, nodes);
          setting.treeObj.trigger(consts.event.DROP, [event, setting.treeId, nodes, null, null, null]);
        }
      }

      doc.bind("selectstart", _docSelect);

      function _docSelect() {
        return false;
      } // 2018-03-30 FireFox has fixed this issue.
      //Avoid FireFox's Bug
      //If zTree Div CSS set 'overflow', so drag node outside of zTree, and event.target is error.
      // if(eventMouseDown.preventDefault) {
      // 	eventMouseDown.preventDefault();
      // }


      return true;
    }
  },
      //method of tools for zTree
  _tools = {
    getAbs: function getAbs(obj) {
      var oRect = obj.getBoundingClientRect(),
          scrollTop = document.body.scrollTop + document.documentElement.scrollTop,
          scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
      return [oRect.left + scrollLeft, oRect.top + scrollTop];
    },
    inputFocus: function inputFocus(inputObj) {
      if (inputObj.get(0)) {
        inputObj.focus();
        tools.setCursorPosition(inputObj.get(0), inputObj.val().length);
      }
    },
    inputSelect: function inputSelect(inputObj) {
      if (inputObj.get(0)) {
        inputObj.focus();
        inputObj.select();
      }
    },
    setCursorPosition: function setCursorPosition(obj, pos) {
      if (obj.setSelectionRange) {
        obj.focus();
        obj.setSelectionRange(pos, pos);
      } else if (obj.createTextRange) {
        var range = obj.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    },
    showIfameMask: function showIfameMask(setting, showSign) {
      var root = data.getRoot(setting); //clear full mask

      while (root.dragMaskList.length > 0) {
        root.dragMaskList[0].remove();
        root.dragMaskList.shift();
      }

      if (showSign) {
        //show mask
        var iframeList = $$("iframe", setting);

        for (var i = 0, l = iframeList.length; i < l; i++) {
          var obj = iframeList.get(i),
              r = tools.getAbs(obj),
              dragMask = $$("<div id='zTreeMask_" + i + "' class='zTreeMask' style='top:" + r[1] + "px; left:" + r[0] + "px; width:" + obj.offsetWidth + "px; height:" + obj.offsetHeight + "px;'></div>", setting);
          dragMask.appendTo($$("body", setting));
          root.dragMaskList.push(dragMask);
        }
      }
    }
  },
      //method of operate ztree dom
  _view = {
    addEditBtn: function addEditBtn(setting, node) {
      if (node.editNameFlag || $$(node, consts.id.EDIT, setting).length > 0) {
        return;
      }

      if (!tools.apply(setting.edit.showRenameBtn, [setting.treeId, node], setting.edit.showRenameBtn)) {
        return;
      }

      var aObj = $$(node, consts.id.A, setting),
          editStr = "<span class='" + consts.className.BUTTON + " edit' id='" + node.tId + consts.id.EDIT + "' title='" + tools.apply(setting.edit.renameTitle, [setting.treeId, node], setting.edit.renameTitle) + "' treeNode" + consts.id.EDIT + " style='display:none;'></span>";
      aObj.append(editStr);
      $$(node, consts.id.EDIT, setting).bind('click', function () {
        if (!tools.uCanDo(setting) || tools.apply(setting.callback.beforeEditName, [setting.treeId, node], true) == false) return false;
        view.editNode(setting, node);
        return false;
      }).show();
    },
    addRemoveBtn: function addRemoveBtn(setting, node) {
      if (node.editNameFlag || $$(node, consts.id.REMOVE, setting).length > 0) {
        return;
      }

      if (!tools.apply(setting.edit.showRemoveBtn, [setting.treeId, node], setting.edit.showRemoveBtn)) {
        return;
      }

      var aObj = $$(node, consts.id.A, setting),
          removeStr = "<span class='" + consts.className.BUTTON + " remove' id='" + node.tId + consts.id.REMOVE + "' title='" + tools.apply(setting.edit.removeTitle, [setting.treeId, node], setting.edit.removeTitle) + "' treeNode" + consts.id.REMOVE + " style='display:none;'></span>";
      aObj.append(removeStr);
      $$(node, consts.id.REMOVE, setting).bind('click', function () {
        if (!tools.uCanDo(setting) || tools.apply(setting.callback.beforeRemove, [setting.treeId, node], true) == false) return false;
        view.removeNode(setting, node);
        setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node]);
        return false;
      }).bind('mousedown', function (eventMouseDown) {
        return true;
      }).show();
    },
    addHoverDom: function addHoverDom(setting, node) {
      if (data.getRoots().showHoverDom) {
        node.isHover = true;

        if (setting.edit.enable) {
          view.addEditBtn(setting, node);
          view.addRemoveBtn(setting, node);
        }

        tools.apply(setting.view.addHoverDom, [setting.treeId, node]);
      }
    },
    cancelCurEditNode: function cancelCurEditNode(setting, forceName, isCancel) {
      var root = data.getRoot(setting),
          node = root.curEditNode;

      if (node) {
        var inputObj = root.curEditInput,
            newName = forceName ? forceName : isCancel ? data.nodeName(setting, node) : inputObj.val();

        if (tools.apply(setting.callback.beforeRename, [setting.treeId, node, newName, isCancel], true) === false) {
          return false;
        }

        data.nodeName(setting, node, newName);
        var aObj = $$(node, consts.id.A, setting);
        aObj.removeClass(consts.node.CURSELECTED_EDIT);
        inputObj.unbind();
        view.setNodeName(setting, node);
        node.editNameFlag = false;
        root.curEditNode = null;
        root.curEditInput = null;
        view.selectNode(setting, node, false);
        setting.treeObj.trigger(consts.event.RENAME, [setting.treeId, node, isCancel]);
      }

      root.noSelection = true;
      return true;
    },
    editNode: function editNode(setting, node) {
      var root = data.getRoot(setting);
      view.editNodeBlur = false;

      if (data.isSelectedNode(setting, node) && root.curEditNode == node && node.editNameFlag) {
        setTimeout(function () {
          tools.inputFocus(root.curEditInput);
        }, 0);
        return;
      }

      node.editNameFlag = true;
      view.removeTreeDom(setting, node);
      view.cancelCurEditNode(setting);
      view.selectNode(setting, node, false);
      $$(node, consts.id.SPAN, setting).html("<input type=text class='rename' id='" + node.tId + consts.id.INPUT + "' treeNode" + consts.id.INPUT + " >");
      var inputObj = $$(node, consts.id.INPUT, setting);
      inputObj.attr("value", data.nodeName(setting, node));

      if (setting.edit.editNameSelectAll) {
        tools.inputSelect(inputObj);
      } else {
        tools.inputFocus(inputObj);
      }

      inputObj.bind('blur', function (event) {
        if (!view.editNodeBlur) {
          view.cancelCurEditNode(setting);
        }
      }).bind('keydown', function (event) {
        if (event.keyCode == "13") {
          view.editNodeBlur = true;
          view.cancelCurEditNode(setting);
        } else if (event.keyCode == "27") {
          view.cancelCurEditNode(setting, null, true);
        }
      }).bind('click', function (event) {
        return false;
      }).bind('dblclick', function (event) {
        return false;
      });
      $$(node, consts.id.A, setting).addClass(consts.node.CURSELECTED_EDIT);
      root.curEditInput = inputObj;
      root.noSelection = false;
      root.curEditNode = node;
    },
    moveNode: function moveNode(setting, targetNode, node, moveType, animateFlag, isSilent) {
      var root = data.getRoot(setting);
      if (targetNode == node) return;
      if (setting.data.keep.leaf && targetNode && !data.nodeIsParent(setting, targetNode) && moveType == consts.move.TYPE_INNER) return;
      var oldParentNode = node.parentTId ? node.getParentNode() : root,
          targetNodeIsRoot = targetNode === null || targetNode == root;
      if (targetNodeIsRoot && targetNode === null) targetNode = root;
      if (targetNodeIsRoot) moveType = consts.move.TYPE_INNER;
      var targetParentNode = targetNode.parentTId ? targetNode.getParentNode() : root;

      if (moveType != consts.move.TYPE_PREV && moveType != consts.move.TYPE_NEXT) {
        moveType = consts.move.TYPE_INNER;
      }

      if (moveType == consts.move.TYPE_INNER) {
        if (targetNodeIsRoot) {
          //parentTId of root node is null
          node.parentTId = null;
        } else {
          if (!data.nodeIsParent(setting, targetNode)) {
            data.nodeIsParent(setting, targetNode, true);
            targetNode.open = !!targetNode.open;
            view.setNodeLineIcos(setting, targetNode);
          }

          node.parentTId = targetNode.tId;
        }
      } //move node Dom


      var targetObj, target_ulObj;

      if (targetNodeIsRoot) {
        targetObj = setting.treeObj;
        target_ulObj = targetObj;
      } else {
        if (!isSilent && moveType == consts.move.TYPE_INNER) {
          view.expandCollapseNode(setting, targetNode, true, false);
        } else if (!isSilent) {
          view.expandCollapseNode(setting, targetNode.getParentNode(), true, false);
        }

        targetObj = $$(targetNode, setting);
        target_ulObj = $$(targetNode, consts.id.UL, setting);

        if (!!targetObj.get(0) && !target_ulObj.get(0)) {
          var ulstr = [];
          view.makeUlHtml(setting, targetNode, ulstr, '');
          targetObj.append(ulstr.join(''));
        }

        target_ulObj = $$(targetNode, consts.id.UL, setting);
      }

      var nodeDom = $$(node, setting);

      if (!nodeDom.get(0)) {
        nodeDom = view.appendNodes(setting, node.level, [node], null, -1, false, true).join('');
      } else if (!targetObj.get(0)) {
        nodeDom.remove();
      }

      if (target_ulObj.get(0) && moveType == consts.move.TYPE_INNER) {
        target_ulObj.append(nodeDom);
      } else if (targetObj.get(0) && moveType == consts.move.TYPE_PREV) {
        targetObj.before(nodeDom);
      } else if (targetObj.get(0) && moveType == consts.move.TYPE_NEXT) {
        targetObj.after(nodeDom);
      } //repair the data after move


      var i,
          l,
          tmpSrcIndex = -1,
          tmpTargetIndex = 0,
          oldNeighbor = null,
          newNeighbor = null,
          oldLevel = node.level;
      var oldChildren = data.nodeChildren(setting, oldParentNode);
      var targetParentChildren = data.nodeChildren(setting, targetParentNode);
      var targetChildren = data.nodeChildren(setting, targetNode);

      if (node.isFirstNode) {
        tmpSrcIndex = 0;

        if (oldChildren.length > 1) {
          oldNeighbor = oldChildren[1];
          oldNeighbor.isFirstNode = true;
        }
      } else if (node.isLastNode) {
        tmpSrcIndex = oldChildren.length - 1;
        oldNeighbor = oldChildren[tmpSrcIndex - 1];
        oldNeighbor.isLastNode = true;
      } else {
        for (i = 0, l = oldChildren.length; i < l; i++) {
          if (oldChildren[i].tId == node.tId) {
            tmpSrcIndex = i;
            break;
          }
        }
      }

      if (tmpSrcIndex >= 0) {
        oldChildren.splice(tmpSrcIndex, 1);
      }

      if (moveType != consts.move.TYPE_INNER) {
        for (i = 0, l = targetParentChildren.length; i < l; i++) {
          if (targetParentChildren[i].tId == targetNode.tId) tmpTargetIndex = i;
        }
      }

      if (moveType == consts.move.TYPE_INNER) {
        if (!targetChildren) {
          targetChildren = data.nodeChildren(setting, targetNode, []);
        }

        if (targetChildren.length > 0) {
          newNeighbor = targetChildren[targetChildren.length - 1];
          newNeighbor.isLastNode = false;
        }

        targetChildren.splice(targetChildren.length, 0, node);
        node.isLastNode = true;
        node.isFirstNode = targetChildren.length == 1;
      } else if (targetNode.isFirstNode && moveType == consts.move.TYPE_PREV) {
        targetParentChildren.splice(tmpTargetIndex, 0, node);
        newNeighbor = targetNode;
        newNeighbor.isFirstNode = false;
        node.parentTId = targetNode.parentTId;
        node.isFirstNode = true;
        node.isLastNode = false;
      } else if (targetNode.isLastNode && moveType == consts.move.TYPE_NEXT) {
        targetParentChildren.splice(tmpTargetIndex + 1, 0, node);
        newNeighbor = targetNode;
        newNeighbor.isLastNode = false;
        node.parentTId = targetNode.parentTId;
        node.isFirstNode = false;
        node.isLastNode = true;
      } else {
        if (moveType == consts.move.TYPE_PREV) {
          targetParentChildren.splice(tmpTargetIndex, 0, node);
        } else {
          targetParentChildren.splice(tmpTargetIndex + 1, 0, node);
        }

        node.parentTId = targetNode.parentTId;
        node.isFirstNode = false;
        node.isLastNode = false;
      }

      data.fixPIdKeyValue(setting, node);
      data.setSonNodeLevel(setting, node.getParentNode(), node); //repair node what been moved

      view.setNodeLineIcos(setting, node);
      view.repairNodeLevelClass(setting, node, oldLevel); //repair node's old parentNode dom

      if (!setting.data.keep.parent && oldChildren.length < 1) {
        //old parentNode has no child nodes
        data.nodeIsParent(setting, oldParentNode, false);
        oldParentNode.open = false;
        var tmp_ulObj = $$(oldParentNode, consts.id.UL, setting),
            tmp_switchObj = $$(oldParentNode, consts.id.SWITCH, setting),
            tmp_icoObj = $$(oldParentNode, consts.id.ICON, setting);
        view.replaceSwitchClass(oldParentNode, tmp_switchObj, consts.folder.DOCU);
        view.replaceIcoClass(oldParentNode, tmp_icoObj, consts.folder.DOCU);
        tmp_ulObj.css("display", "none");
      } else if (oldNeighbor) {
        //old neigbor node
        view.setNodeLineIcos(setting, oldNeighbor);
      } //new neigbor node


      if (newNeighbor) {
        view.setNodeLineIcos(setting, newNeighbor);
      } //repair checkbox / radio


      if (!!setting.check && setting.check.enable && view.repairChkClass) {
        view.repairChkClass(setting, oldParentNode);
        view.repairParentChkClassWithSelf(setting, oldParentNode);
        if (oldParentNode != node.parent) view.repairParentChkClassWithSelf(setting, node);
      } //expand parents after move


      if (!isSilent) {
        view.expandCollapseParentNode(setting, node.getParentNode(), true, animateFlag);
      }
    },
    removeEditBtn: function removeEditBtn(setting, node) {
      $$(node, consts.id.EDIT, setting).unbind().remove();
    },
    removeRemoveBtn: function removeRemoveBtn(setting, node) {
      $$(node, consts.id.REMOVE, setting).unbind().remove();
    },
    removeTreeDom: function removeTreeDom(setting, node) {
      node.isHover = false;
      view.removeEditBtn(setting, node);
      view.removeRemoveBtn(setting, node);
      tools.apply(setting.view.removeHoverDom, [setting.treeId, node]);
    },
    repairNodeLevelClass: function repairNodeLevelClass(setting, node, oldLevel) {
      if (oldLevel === node.level) return;
      var liObj = $$(node, setting),
          aObj = $$(node, consts.id.A, setting),
          ulObj = $$(node, consts.id.UL, setting),
          oldClass = consts.className.LEVEL + oldLevel,
          newClass = consts.className.LEVEL + node.level;
      liObj.removeClass(oldClass);
      liObj.addClass(newClass);
      aObj.removeClass(oldClass);
      aObj.addClass(newClass);
      ulObj.removeClass(oldClass);
      ulObj.addClass(newClass);
    },
    selectNodes: function selectNodes(setting, nodes) {
      for (var i = 0, l = nodes.length; i < l; i++) {
        view.selectNode(setting, nodes[i], i > 0);
      }
    }
  },
      _z = {
    tools: _tools,
    view: _view,
    event: _event,
    data: _data
  };

  $.extend(true, $.fn.zTree.consts, _consts);
  $.extend(true, $.fn.zTree._z, _z);
  var zt = $.fn.zTree,
      tools = zt._z.tools,
      consts = zt.consts,
      view = zt._z.view,
      data = zt._z.data,
      event = zt._z.event,
      $$ = tools.$;
  data.exSetting(_setting);
  data.addInitBind(_bindEvent);
  data.addInitUnBind(_unbindEvent);
  data.addInitCache(_initCache);
  data.addInitNode(_initNode);
  data.addInitProxy(_eventProxy);
  data.addInitRoot(_initRoot);
  data.addZTreeTools(_zTreeTools);
  var _cancelPreSelectedNode = view.cancelPreSelectedNode;

  view.cancelPreSelectedNode = function (setting, node) {
    var list = data.getRoot(setting).curSelectedList;

    for (var i = 0, j = list.length; i < j; i++) {
      if (!node || node === list[i]) {
        view.removeTreeDom(setting, list[i]);
        if (node) break;
      }
    }

    if (_cancelPreSelectedNode) _cancelPreSelectedNode.apply(view, arguments);
  };

  var _createNodes = view.createNodes;

  view.createNodes = function (setting, level, nodes, parentNode, index) {
    if (_createNodes) {
      _createNodes.apply(view, arguments);
    }

    if (!nodes) return;

    if (view.repairParentChkClassWithSelf) {
      view.repairParentChkClassWithSelf(setting, parentNode);
    }
  };

  var _makeNodeUrl = view.makeNodeUrl;

  view.makeNodeUrl = function (setting, node) {
    return setting.edit.enable ? null : _makeNodeUrl.apply(view, arguments);
  };

  var _removeNode = view.removeNode;

  view.removeNode = function (setting, node) {
    var root = data.getRoot(setting);
    if (root.curEditNode === node) root.curEditNode = null;

    if (_removeNode) {
      _removeNode.apply(view, arguments);
    }
  };

  var _selectNode = view.selectNode;

  view.selectNode = function (setting, node, addFlag) {
    var root = data.getRoot(setting);

    if (data.isSelectedNode(setting, node) && root.curEditNode == node && node.editNameFlag) {
      return false;
    }

    if (_selectNode) _selectNode.apply(view, arguments);
    view.addHoverDom(setting, node);
    return true;
  };

  var _uCanDo = tools.uCanDo;

  tools.uCanDo = function (setting, e) {
    var root = data.getRoot(setting);

    if (e && (tools.eqs(e.type, "mouseover") || tools.eqs(e.type, "mouseout") || tools.eqs(e.type, "mousedown") || tools.eqs(e.type, "mouseup"))) {
      return true;
    }

    if (root.curEditNode) {
      view.editNodeBlur = false;
      root.curEditInput.focus();
    }

    return !root.curEditNode && (_uCanDo ? _uCanDo.apply(view, arguments) : true);
  };
})(jquery__WEBPACK_IMPORTED_MODULE_14___default.a);

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "baa5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var lastIndexOf = __webpack_require__("e58c");

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c5e1":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_c5e1__;

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e58c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "rkTree", function() { return /* reexport */ rkTree; });
__webpack_require__.d(__webpack_exports__, "$", function() { return /* reexport */ $; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/third-part-lib/ztree/js/jquery.ztree.all.js
var jquery_ztree_all = __webpack_require__("aa1b");

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("c5e1");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./packages/ZTree.js


var rkTree = external_jquery_default.a.fn.zTree;
var $ = external_jquery_default.a;
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
});
//# sourceMappingURL=rkTree.umd.js.map