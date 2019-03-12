/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // one-pass Hash Table
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    const b = target - a
    if (map.has(b)) {
      return [i, map.get(b)]
    }
    map.set(a, i)
  }
}
