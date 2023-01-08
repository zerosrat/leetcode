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
var preorderTraversal = function(root) {
  const stack = []
  const rtn = []

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      rtn.push(root.val)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }

  return rtn
}
