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
  const queue = []
  preorder(root)

  function preorder(root) {
    if (root) {
      queue.push(root)
      preorder(root.left)
      preorder(root.right)
    }
  }

  let pre, cur
  for (let i = 1; i < queue.length; i++) {
    pre = queue[i - 1]
    cur = queue[i]
    pre.right = cur
    pre.left = null
  }
  if (cur) {
    cur.left = null
    cur.right = null
  }
}
