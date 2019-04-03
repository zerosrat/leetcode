/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  function dfs(level, node) {
    if (node) {
      if (!rtn[level]) {
        rtn[level] = []
      }
      if (level % 2 === 0) {
        rtn[level].push(node.val)
      } else {
        rtn[level].unshift(node.val)
      }
      if (node.left) {
        dfs(level + 1, node.left)
      }
      if (node.right) {
        dfs(level + 1, node.right)
      }
    }
  }
  const rtn = []
  dfs(0, root)
  return rtn
}
