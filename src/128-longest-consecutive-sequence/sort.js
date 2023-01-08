/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  nums.sort((a, b) => a - b)

  let max = cur = 0
  let pre
  for (let i = 0; i < nums.length; i++) {
    if (cur === 0 || nums[i] === pre + 1) {
      pre = nums[i]
      cur++
      if (cur > max) {
        max = cur
      }
    } else if (nums[i] === pre) {
      continue
    } else {
      pre = nums[i]
      cur = 1
    }
  }

  return max
}
