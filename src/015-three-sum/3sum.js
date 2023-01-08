/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  if (nums.length < 3) return result
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]
    if (a > 0) return result
    if (a === nums[i - 1] && i > 0) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const b = nums[j]
      const c = nums[k]
      const sum = a + b + c
      if (sum === 0) {
        result.push([a, b, c])
        j++
        k--
        while (j < k && c === nums[k]) {
          k--
        }
        while (j < k && b === nums[j]) {
          j++
        }
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }

  return result
}
