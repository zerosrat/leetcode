/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const rtn = []
  const buffer = []

  function backtrack(start) {
    rtn.push(buffer.concat())
    for (let i = start; i < nums.length; i++) {
      buffer.push(nums[i])
      backtrack(i + 1)
      buffer.pop()
    }
  }

  backtrack(0)
  return rtn
}
