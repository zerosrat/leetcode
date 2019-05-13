/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    const b = target - a
    if (map.has(b)) {
      return [map.get(b) + 1, i + 1]
    }
    map.set(a, i)
  }
}
