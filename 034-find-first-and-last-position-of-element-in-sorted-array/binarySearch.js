/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // return [nums.indexOf(target), nums.lastIndexOf(target)]
  const index = binarySearch(nums, target)
  for (var i1 = index - 1; i1 >= 0; i1--) {
    if (nums[i1] !== nums[index]) break
  }
  let firstIndex = i1 + 1
  for (var i2 = index + 1; i2 < nums.length; i2++) {
    if (nums[i2] !== nums[index]) break
  }
  let lastIndex = i2 - 1
  return [firstIndex, lastIndex]
}

function binarySearch(nums, target) {
  for (let s = 0, e = nums.length - 1, i = ~~((s + e) / 2); s <= e; i = ~~((s + e) / 2)) {
    if (target === nums[i]) return i
    if (nums[i] < target) {
      s = i + 1
    } else if (nums[i] > target) {
      e = i - 1
    }
  }
  return -1
}
