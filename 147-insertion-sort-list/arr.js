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
var insertionSortList = function(head) {
  if (!head) return head
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.sort((a, b) => a - b)
  const helper = new ListNode(null)
  let p = helper
  arr.forEach(i => {
    p.next = new ListNode(i)
    p = p.next
  })
  return helper.next
}
