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
var detectCycle = function(head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      let slow2 = head
      while (slow2 !== slow) {
        slow = slow.next
        slow2 = slow2.next
      }
      return slow
    }
  }
  return null
}
