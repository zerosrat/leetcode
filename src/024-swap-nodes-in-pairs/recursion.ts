const swapPairs = function (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const v1 = head;
  const v2 = head.next;
  const v3 = v2.next;

  v2.next = v1;
  v1.next = swapPairs(v3);

  return v2;
};
