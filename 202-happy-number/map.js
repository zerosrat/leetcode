/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = 0
  const map = {}
  map[n] = 1
  while (true) {
    while (n) {
      sum += (n % 10) ** 2
      n = ~~(n / 10)
    }
    if (sum === 1) return true
    if (map[sum]) return false
    map[sum] = 1
    n = sum
    sum = 0
  }
}
