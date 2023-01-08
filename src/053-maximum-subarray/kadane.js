/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxCurrent = maxGlobal = nums[0]
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent
    }
  }
  return maxGlobal
}
