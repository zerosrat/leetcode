/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return (3 * sum([...new Set(nums)]) - sum(nums)) / 2
}

function sum(nums) {
  return nums.reduce((a, b) => a + b, 0)
}
