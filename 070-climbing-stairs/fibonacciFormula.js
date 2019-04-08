/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const sqrt5 = Math.sqrt(5)
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)
  return Math.round(fibn / sqrt5)
}
