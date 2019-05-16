/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`)
  const joined = nums.join('')
  return parseInt(joined) === 0 ? '0' : joined
}
