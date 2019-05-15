/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0
  for (let i = 5; n / i > 0; i *= 5) {
    result += ~~(n / i)
  }
  return result
}
