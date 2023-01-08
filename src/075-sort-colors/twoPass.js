/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count0 = 0
  let count1 = 0
  let count2 = 0
  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        count0++
        break
      case 1:
        count1++
        break
      case 2:
        count2++
        break
    }
  }
  for (let i = 0; i < count0; i++) nums[i] = 0
  for (let i = 0; i < count1; i++) nums[count0 + i] = 1
  for (let i = 0; i < count2; i++) nums[count0 + count1 + i] = 2
}
