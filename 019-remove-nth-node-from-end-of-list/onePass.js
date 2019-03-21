/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let left = before = { next: head }
  let right = head
  while (n--) {
    right = right.next
  }
  while (right) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return before.next
}
