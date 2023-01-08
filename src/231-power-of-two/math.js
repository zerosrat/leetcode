/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && ((Number.MAX_SAFE_INTEGER + 1) % n === 0)
}
