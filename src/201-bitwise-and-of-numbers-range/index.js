// https://leetcode.com/problems/bitwise-and-of-numbers-range/discuss/56721/2-line-Solution-with-detailed-explanation

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  while (m < n) n = n & (n - 1)
  return n
}
