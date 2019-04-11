var reverseList = function(head) {
  if (!head || !head.next) return head
  const stack = []
  while (head) {
    stack.push(head)
    head = head.next
  }
  head = stack.pop()
  let p = head
  while (stack.length) {
    p.next = stack.pop()
    p = p.next
  }
  p.next = null
  return head
}
