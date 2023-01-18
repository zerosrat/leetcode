/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let listsLength;
  let tempArry = [];

  // Delete all empty entries.
  for (let i = 0; i < lists.length; ) {
    if (lists[i]) {
      i++;
    } else {
      lists.splice(i, 1);
    }
  }

  if (lists.length === 0) return null;

  while (lists.length > 1) {
    listsLength = lists.length;
    if (listsLength % 2 !== 0) {
      lists.push(null);
      listsLength++;
    }
    for (let i = 0; i < listsLength; i += 2) {
      tempArry.push(merge(lists[i], lists[i + 1]));
    }
    lists = tempArry;
    tempArry = [];
  }

  return lists[0];
};

function merge(left, right) {
  const head = new ListNode();
  let p = head;

  while (left && right) {
    if (left.val < right.val) {
      p.next = new ListNode(left.val);
      left = left.next;
    } else {
      p.next = new ListNode(right.val);
      right = right.next;
    }
    p = p.next;
  }

  if (left) {
    p.next = left;
  }
  if (right) {
    p.next = right;
  }

  return head.next;
}
