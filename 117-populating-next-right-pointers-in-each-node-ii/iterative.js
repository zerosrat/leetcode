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
  const pointer = root
  while (root) {
    let tempChild = new Node(0)
    let currentChild = tempChild
    while (root) {
      if (root.left) {
        currentChild.next = root.left
        currentChild = currentChild.next
      }
      if (root.right) {
        currentChild.next = root.right
        currentChild = currentChild.next
      }
      root = root.next
    }
    root = tempChild.next
  }
  return pointer
}
