/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root
  const obj = {}

  const queue = []
  root.depth = 1
  queue.push(root)

  while (queue.length) {
    const node = queue.pop()
    const depth = node.depth

    if (!obj[depth]) {
      obj[depth] = []
    }

    const len = obj[depth].length
    if (len) {
      obj[depth][len - 1].next = node
    }

    node.next = null
    obj[depth].push(node)

    if (node.left) {
      node.left.depth = depth + 1
      queue.unshift(node.left)
    }
    if (node.right) {
      node.right.depth = depth + 1
      queue.unshift(node.right)
    }
  }

  return root
}
