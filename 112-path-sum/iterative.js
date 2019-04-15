/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false
  const stack = []
  stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    if (!cur.left && !cur.right && cur.val === sum) return true
    if (cur.right) {
      cur.right.val = cur.val + cur.right.val
      stack.push(cur.right)
    }
    if (cur.left) {
      cur.left.val = cur.val + cur.left.val
      stack.push(cur.left)
    }
  }
  return false
}
