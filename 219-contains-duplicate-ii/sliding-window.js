/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  for (let i = 0, l = nums.length; i < l; i++) {
    if (i > k) map[nums[i - k - 1]] = undefined
    if (map[nums[i]]) {
      return true
    } else {
      map[nums[i]] = true
    }
  }
  return false
}
