/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let _x = 0
  const orginalX = x
  while (x) {
    _x *= 10
    _x += x % 10
    x = ~~(x / 10)
  }
  return _x === orginalX
}
