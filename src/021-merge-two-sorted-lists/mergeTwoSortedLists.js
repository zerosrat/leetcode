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
var mergeTwoLists = function(l1, l2) {
  const listHead = new ListNode()
  let p = listHead

  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = new ListNode(l2.val)
      l2 = l2.next
    } else {
      p.next = new ListNode(l1.val)
      l1 = l1.next
    }
    p = p.next
  }

  if (l1) {
    p.next = l1
  }
  if (l2) {
    p.next = l2
  }

  return listHead.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}
