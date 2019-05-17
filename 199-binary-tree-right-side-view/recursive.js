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
var rightSideView = function(root) {
  const rtn = []
  if (!root) return rtn
  helper(root, 0)
  return rtn

  function helper(node, depth) {
    if (!node) return
    if (rtn.length === depth) rtn.push(node.val)
    helper(node.right, depth + 1)
    helper(node.left, depth + 1)
  }
}
