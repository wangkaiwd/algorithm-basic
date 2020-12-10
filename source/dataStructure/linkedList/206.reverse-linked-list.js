// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
const ListNode = require('./ListNode');
const reverseList1 = (head) => {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    const tempNext = cur.next;
    cur.next = prev;
    // prev已经脱离了当前节点
    prev = cur;
    cur = tempNext;
  }
  return prev;
};
