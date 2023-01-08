/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums: number[], target: number): number[] | undefined {
  // Brute Force
  for (let i = 0, len = nums.length; i < len; i++) {
    const a = nums[i]
    const b = target - a
    const j = nums.indexOf(b)
    
    if (j !== -1 && i !== j) {
      return [i, j]
    }
  }
};
