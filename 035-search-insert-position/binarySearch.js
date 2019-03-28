/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (var s = 0, e = nums.length - 1, i = ~~((s + e) / 2); s <= e; i = ~~((s + e) / 2)) {
    if (target === nums[i]) return i
    if (target > nums[i]) {
      s = i + 1
    } else {
      e = i - 1
    }
  }
  return s
}
