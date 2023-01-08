/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root, root)
}

function isMirror(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true
  if (tree1 === null || tree2 === null) return false
  return tree1.val === tree2.val && isMirror(tree1.left, tree2.right) &&
    isMirror(tree2.left, tree1.right)
}
