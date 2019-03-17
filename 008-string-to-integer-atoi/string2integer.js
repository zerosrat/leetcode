/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2 ** 31 - 1), -(2 ** 31))
}
