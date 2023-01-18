class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const listHead = new ListNode();
  let p = listHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      p.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    p = p.next;
  }

  if (l1) {
    p.next = l1;
  }
  if (l2) {
    p.next = l2;
  }

  return listHead.next;
}
