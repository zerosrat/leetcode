/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = {}
  for (let i = 0, l = nums.length; i < l; i++) {
    const item = nums[i]
    if (map[item]) return true
    map[item] = true
  }
  return false
}
