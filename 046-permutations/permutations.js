/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    let subNums = nums.concat()
    subNums.splice(i, 1)
    permute(subNums).forEach(arr => result.push([].concat(nums[i], arr)))
  }
  if (nums.length === 0) {
    result.push(nums)
  }
  return result
}
