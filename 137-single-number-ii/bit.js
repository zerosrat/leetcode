/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = b = 0
  for (const num of nums) {
    b = b ^ num & ~a
    a = a ^ num & ~b
  }
  return a | b
}
