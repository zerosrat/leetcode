/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let result = nums[0] + nums[1] + nums[2]
  if (nums.length < 3) return result
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]
    if (a === nums[i - 1] && i > 0) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const sum = a + nums[j] + nums[k]
      if (sum > target) {
        k--
      } else {
        j++
      }
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum
      }
    }
  }

  return result
}
