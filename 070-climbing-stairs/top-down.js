/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = []
  function helper(n) {
    if (n === 0 || n === 1) return 1
    if (!memo[n - 1]) {
      memo[n - 1] = helper(n - 1)
    }
    if (!memo[n - 2]) {
      memo[n - 2] = helper(n - 2)
    }
    return memo[n - 1] + memo[n - 2]
  }
  return helper(n)
}
