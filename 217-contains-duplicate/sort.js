/**
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b)
  for (var i = 0, l = nums.length; i < l; i++) {
    if (i + 1 > l) break
    if (nums[i] === nums[i + 1]) break
  }
  return i !== l
}
