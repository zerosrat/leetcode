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
  const len = getLength(head)
  if (n > len) return head
  if (n === len) return head.next
  let k = len - n
  let p = head
  while (k > 1) {
    p = p.next
    k--
  }
  p.next = p.next.next
  return head
}

function getLength(p) {
  let l = 1
  while (p.next) {
    l++
    p = p.next
  }
  return l
}
