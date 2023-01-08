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
  const stack = []
  let cur = root, pre = null, SUM = 0
  const rtn = []

  while (stack.length || cur) {
    while (cur) {
      stack.push(cur)
      SUM += cur.val
      cur = cur.left
    }
    cur = stack[stack.length - 1]
    if (!cur.left && !cur.right && SUM === sum) {
      rtn.push(stack.map(({ val }) => val))
    }
    if (cur.right && pre !== cur.right) {
      cur = cur.right
    } else {
      pre = cur
      stack.pop()
      SUM -= cur.val
      cur = null
    }
  }
  return rtn
}
