
// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = num2list(list2num(l1) + list2num(l2))

  return head
}

function list2num(list: ListNode | null) {
  if (!list) return BigInt(0)
  let str = ''
  let p: ListNode | null = list

  while(p) {
    str = p.val + str
    p = p.next 
  }

  return BigInt(str)
}

function num2list(num) {
  const head = new ListNode(0)
  
  if (num <= 0) {
    return head
  }

  let p: ListNode | null = head
  const arr = `${num}`.split('').reverse()
  arr.map((e, i) => {
    if (p) {
      p.val = parseInt(e, 10)
      if (i != arr.length - 1) {
        p.next = new ListNode(0)
        p = p.next
      }
    }
  })

  return head
}

// addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))