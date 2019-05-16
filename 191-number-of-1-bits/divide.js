/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  while (n) {
    n % 2 === 1 && count++
    n = ~~(n / 2)
  }
  return count
}
