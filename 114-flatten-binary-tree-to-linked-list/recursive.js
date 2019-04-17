/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let pre
  function helper(root) {
    if (!root) return
    helper(root.right)
    helper(root.left)
    root.right = pre
    root.left = null
    pre = root
  }
  helper(root)
}
