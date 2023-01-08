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
  let pre = root, cur = null
  while (pre.left) {
    cur = pre
    while (cur) {
      cur.left.next = cur.right
      if (cur.next) cur.right.next = cur.next.left
      cur = cur.next
    }
    pre = pre.left
  }
  return root
}
