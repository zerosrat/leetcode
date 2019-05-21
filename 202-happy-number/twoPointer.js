/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = fast = n
  do {
    slow = getSum(slow)
    fast = getSum(fast)
    fast = getSum(fast)
  } while (slow !== fast)
  if (slow === 1) return true
  return false

  function getSum(n) {
    let sum = 0
    while (n) {
      sum += (n % 10) ** 2
      n = ~~(n / 10)
    }
    return sum
  }
}
