/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 2∗(a+b+c)−(a+a+b+b+c)=c
  return sum([...new Set(nums)]) * 2 - sum(nums)
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}
