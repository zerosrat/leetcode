/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0]
  for (let s = 0, e = nums.length, mid = ~~((s + e) / 2); s <= e; mid = ~~((s + e) / 2)) {
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid]
    }
    if (nums[mid] > nums[0]) {
      s = mid + 1
    } else {
      e = mid - 1
    }
  }
}
