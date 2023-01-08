/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0
  let _x = x
  x = x > 0 ? x : -x

  while (x) {
    result = (result * 10) + (x % 10)
    x = ~~(x / 10)
  }

  if (result > 2 ** 31) {
    return 0
  }

  return _x > 0 ? result : -result
}
