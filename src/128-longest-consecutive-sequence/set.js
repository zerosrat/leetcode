/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums)
  let cur, max = 0
  for (let num of nums) {
    if (!set.has(num - 1)) {
      cur = 1
      while (set.has(++num)) {
        cur++
      }
      if (cur > max) {
        max = cur
      }
    }
  }
  return max
}
