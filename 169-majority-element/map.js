/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]
  const map = new Map()
  for (let i = nums.length; i--;) {
    const num = nums[i]
    if (map.has(num)) {
      const count = map.get(num)
      if (count + 1 > ~~(nums.length / 2)) return num
      map.set(num, count + 1)
    } else {
      map.set(num, 1)
    }
  }
}
