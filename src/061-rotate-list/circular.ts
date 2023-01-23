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
const rotateRight = function (head: ListNode, k: number): ListNode {
  if (!head || !head.next) return head;
  let tail = head;
  let len = 1;
  // get len
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  // link
  tail.next = head;

  k = k % len;
  for (let i = 0; i < len - k; i++) {
    tail = tail.next;
  }
  // unlink
  head = tail.next;
  tail.next = null;

  return head;
};
