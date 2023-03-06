; (function (undefined) {
  "use strict"
  let _global
  const objectPrototype = Object.prototype
  const arrayPrototype = Array.prototype
  const serialize = objectPrototype.toString

  const utils = {
    isFunction: function (fn) {
      return serialize.call(fn) === '[object Function]'
    },
    isArray: Array.isArray || /* istanbul ignore next */ function (array) {
      return serialize.call(array) === '[object Array]'
    },
    isPlainObject: function (obj) {
      return serialize.call(obj) === '[object Object]' && Object.getPrototypeOf(obj) === objectPrototype
    }
  }

  // 最后将插件对象暴露给全局对象
  _global = (function () { return this || (0, eval)('this') }())
  if (typeof module !== "undefined" && module.exports) {
    module.exports = utils
  } else if (typeof define === "function" && define.amd) {
    define(function () { return utils })
  } else {
    !('utils' in _global) && (_global.utils = utils)
  }
})()