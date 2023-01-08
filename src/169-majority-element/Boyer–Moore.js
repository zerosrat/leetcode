// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
var majorityElement = function(nums) {
  let candidate, count = 0
  for (let i = nums.length; i--;) {
    if (count === 0) {
      candidate = nums[i]
    }
    count = candidate === nums[i] ? count + 1 : count - 1
  }
  return candidate
}
