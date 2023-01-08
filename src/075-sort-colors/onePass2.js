/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let j = 0
  let k = nums.length - 1
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(nums, i, j++)
    } else if (nums[i] === 2) {
      swap(nums, i--, k--)
    }
  }
}

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
