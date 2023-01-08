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
  const rtn = []
  helper(root, rtn)
  return rtn
}

function helper(node, arr) {
  if (node) {
    if (node.left) {
      helper(node.left, arr)
    }
    arr.push(node.val)
    if (node.right) {
      helper(node.right, arr)
    }
  }
}
