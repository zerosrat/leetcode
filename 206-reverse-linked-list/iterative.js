/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head
  let p1 = head
  let p2 = p1.next
  let p3 = p2.next
  p1.next = null

  while (p2) {
    p2.next = p1
    p1 = p2
    p2 = p3
    p3 = p2 ? p2.next : null
  }

  return p1
}
