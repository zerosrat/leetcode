/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  const map = new Map()
  let p = headA
  for (let i = 0; p; i++) {
    map.set(p, i)
    p = p.next
  }
  p = headB
  while (p) {
    if (map.has(p)) return p
    p = p.next
  }
  return null
}
