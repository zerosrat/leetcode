/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (set.has(item)) {
      set.delete(item)
    } else {
      set.add(item)
    }
  }
  return set.values().next().value
}
