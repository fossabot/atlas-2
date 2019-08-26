"use strict"
var __values =
  (this && this.__values) ||
  function(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0
    if (m) return m.call(o)
    return {
      next: function() {
        if (o && i >= o.length) o = void 0
        return { value: o && o[i++], done: !o }
      },
    }
  }
var __read =
  (this && this.__read) ||
  function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var __spread =
  (this && this.__spread) ||
  function() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]))
    return ar
  }
exports.__esModule = true
/**
 * Removes all entries in list1 from list2 and return list2.
 *
 * @export
 * @param list1
 * @param list2
 * @returns {array} The Difference list2 - list1
 */
function removeFrom(list1, list2) {
  var e_1, _a
  try {
    for (
      var list1_1 = __values(list1), list1_1_1 = list1_1.next();
      !list1_1_1.done;
      list1_1_1 = list1_1.next()
    ) {
      var entry = list1_1_1.value
      if (includes(list2, entry)) {
        var pos = list2.indexOf(entry)
        list2.splice(pos, 1)
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 }
  } finally {
    try {
      if (list1_1_1 && !list1_1_1.done && (_a = list1_1["return"]))
        _a.call(list1_1)
    } finally {
      if (e_1) throw e_1.error
    }
  }
  return list2
}
exports.removeFrom = removeFrom
/**
 * Return true if value is in container.
 * @param container an array of X
 * @param value X
 */
function includes(container, value) {
  var pos = container.indexOf(value)
  if (pos >= 0) {
    return true
  }
  return false
}
exports.includes = includes
/**
 * Strips whitespace from start or end.
 *
 * @param text Input string
 */
function strip(text) {
  return text.replace(/^\s+|\s+$/g, "")
}
exports.strip = strip
/**
 * @description Returns a number that is within lower and upper.
 * If value is outside of these boundaries, it will return the lower or upper value instead.
 * @export
 * @param {Number} lower
 * @param {number} value
 * @param {number} upper
 * @returns {number}
 */
function bound(lower, value, upper) {
  return Math.max(lower, Math.min(value, upper))
}
exports.bound = bound
/**
 * @description Calculate how many unique companies are offering jobs.
 * @param {IJob[]} jobs
 * @returns {number}
 * @memberof Sample
 */
function keyCount(arr, key) {
  var e_2, _a
  var companies = []
  try {
    for (
      var arr_1 = __values(arr), arr_1_1 = arr_1.next();
      !arr_1_1.done;
      arr_1_1 = arr_1.next()
    ) {
      var entry = arr_1_1.value
      if (entry.hasOwnProperty(key)) {
        companies.push(entry[key])
      }
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 }
  } finally {
    try {
      if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1)
    } finally {
      if (e_2) throw e_2.error
    }
  }
  return __spread(new Set(companies)).length
}
exports.keyCount = keyCount
