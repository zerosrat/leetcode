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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const rtn = []

  function helper(root, sum, path) {
    if (!root) {
      return
    }

    path.push(root.val)

    if (!root.left && !root.right && sum - root.val === 0) {
      rtn.push(path.slice())
    }

    helper(root.left, sum - root.val, path)
    helper(root.right, sum - root.val, path)

    path.pop()
  }

  helper(root, sum, [])
  return rtn
}
