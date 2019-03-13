/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const listHead = new ListNode(0)
  let p = listHead
  let carry = 0
  let sum = 0

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum -= 10
    }
    p.next = new ListNode(sum)
    p = p.next
    sum = carry
    carry = 0
  }
  return listHead.next ? listHead.next : listHead
}

function ListNode(val) {
  this.val = val
  this.next = null
}
