/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let s = 0, e = arr.length - 1
  while (s < e) {
    if (arr[s] !== arr[e]) break
    s++
    e--
  }
  return s >= e
}
