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
  if (!head) return head

  let cur = head
  let prev = null

  while (m > 1) {
    prev = cur
    cur = cur.next
    m--
    n--
  }

  let con = prev
  let tail = cur
  let third = null

  while (n > 0) {
    third = cur.next
    cur.next = prev
    prev = cur
    cur = third
    n--
  }

  if (con) {
    con.next = prev
  } else {
    head = prev
  }

  tail.next = cur
  return head
}
