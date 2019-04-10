/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let tail = head
  let len = 1
  while (tail.next) {
    tail = tail.next
    len++
  }
  tail.next = head
  k = k % len
  for (let i = 0; i < len - k; i++) {
    tail = tail.next
  }
  head = tail.next
  tail.next = null
  return head
}
