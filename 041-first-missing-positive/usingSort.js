/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums = [...new Set(nums.sort((a, b) => a - b))]
  let rtn = 1
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (item <= 0) continue
    if (item === rtn) {
      rtn++
    } else {
      break
    }
  }
  return rtn
}
