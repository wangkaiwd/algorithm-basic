// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
const ListNode = require('./ListNode');
const head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
};
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

// 递归实现链表反转
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// 宏观思路：第一次执行
//  1. 通过执行函数a得到除第一个元素外已经翻转好的链表reverseLinedList
//  2. head.next = null
//  3. reverseLinkedList.next = head
const stringifyLinkedList = (head) => {
  let cur = head;
  let str = '';
  while (cur !== null) {
    str += `${cur.val} -> `;
    cur = cur.next;
  }
  str += 'null';
  return str;
};
// 最终拿到的是翻转好的链表
const reverseList2 = (head, depth = 0) => {
  // 1. head == null 用来处理空节点
  // 2. 要反转的换至少要有2个节点，当只有一个节点时，即head.next == null, 直接将原链表的头返回
  if (head == null || head.next == null) {
    return head;
  }
  console.log('--'.repeat(depth), 'before head: ' + stringifyLinkedList(head));
  // 返回已经反转好的链表
  const result = reverseList2(head.next, depth + 1);
  // 进行链表反转
  // 将已经反转好的链表的最后一项的next指向head
  console.log('--'.repeat(depth), 'result: ' + stringifyLinkedList(result));
  console.log('--'.repeat(depth), 'after head: ' + stringifyLinkedList(head));
  head.next.next = head;
  // head的next指向null
  head.next = null;
  return result;
};
reverseList2(head);
