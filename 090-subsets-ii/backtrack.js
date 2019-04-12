/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const rtn = []
  const buffer = []
  nums.sort((a, b) => a - b)

  function backtrack(start) {
    rtn.push(buffer.concat())
    for (let i = start; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i > start) continue
      buffer.push(nums[i])
      backtrack(i + 1)
      buffer.pop()
    }
  }

  backtrack(0)
  return rtn
}
