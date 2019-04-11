/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let subList, prev, next
  subList = head
  for (let i = 1; i < m; i++) {
    prev = subList
    subList = subList.next
  }
  let p = subList
  for (let i = 0; i < n - m; i++) {
    p = p.next
  }
  next = p.next
  p.next = null
  subList = reverseList(subList)
  p = subList
  if (next) {
    while (p.next) {
      p = p.next
    }
    p.next = next
  }
  if (prev) {
    prev.next = subList
    return head
  }
  return subList
}

function reverseList(head) {
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
