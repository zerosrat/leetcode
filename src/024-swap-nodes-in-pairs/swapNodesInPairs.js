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
var swapPairs = function(head) {
  if (!head || !head.next) return head
  const v1 = head
  const v2 = head.next
  const v3 = v2.next
  v2.next = v1
  v1.next = swapPairs(v3)
  return v2
}
