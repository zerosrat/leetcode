/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = []
  return helper(0, n, memo)
}

function helper(cur, dest, memo) {
  if (cur > dest) return 0
  if (cur === dest) return 1
  if (memo[cur] > 0) return memo[cur]
  memo[cur] = helper(cur + 1, dest, memo) + helper(cur + 2, dest, memo)
  return memo[cur]
}
