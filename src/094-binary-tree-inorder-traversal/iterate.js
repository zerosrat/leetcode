/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const stack = []
  const rtn = []
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      rtn.push(root.val)
      root = root.right
    }
  }
  return rtn
}
