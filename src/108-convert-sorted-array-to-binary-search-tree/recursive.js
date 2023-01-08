/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  const root = helper(nums, 0, nums.length - 1)
  return root
}

function helper(num, low, high) {
  if (low > high) { // Done
    return null
  }
  const mid = ~~((low + high) / 2)
  const node = new TreeNode(num[mid])
  node.left = helper(num, low, mid - 1)
  node.right = helper(num, mid + 1, high)
  return node
}
