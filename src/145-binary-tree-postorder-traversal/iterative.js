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
var postorderTraversal = function(root) {
  const stack = []
  const rtn = []

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      rtn.unshift(root.val) // Reverse the process of preorder
      root = root.right // Reverse the process of preorder
    } else {
      root = stack.pop()
      root = root.left // Reverse the process of preorder
    }
  }

  return rtn
}
