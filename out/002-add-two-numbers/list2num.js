// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers2(l1, l2) {
    var head = num2list(list2num(l1) + list2num(l2));
    return head;
}
function list2num(list) {
    if (!list)
        return 0;
    var str = '';
    var p = list;
    while (p) {
        str = p.val + str;
        p = p.next;
    }
    return +str;
}
function num2list(num) {
    var head = new ListNode(0);
    if (num <= 0) {
        return head;
    }
    var p = head;
    var arr = "".concat(num).split('').reverse();
    arr.map(function (e) {
        if (p) {
            p.val = parseInt(e, 10);
            p = p.next;
        }
    });
    return head;
}
addTwoNumbers2(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))));
//# sourceMappingURL=list2num.js.map