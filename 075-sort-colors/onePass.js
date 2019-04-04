/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n0 = -1
  let n1 = -1
  let n2 = -1
  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        nums[++n2] = 2
        nums[++n1] = 1
        nums[++n0] = 0
        break
      case 1:
        nums[++n2] = 2
        nums[++n1] = 1
        break
      case 2:
        nums[++n2] = 2
        break
    }
  }
}
