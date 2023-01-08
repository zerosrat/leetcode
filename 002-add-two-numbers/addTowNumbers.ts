
// Definition for singly-linked list.
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
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
