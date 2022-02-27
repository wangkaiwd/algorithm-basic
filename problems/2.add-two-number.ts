import { ListNode, ListNodeOrNull } from './types';

function addTwoNumbers (l1: ListNodeOrNull, l2: ListNodeOrNull): ListNodeOrNull {
  let carry = 0;
  let newList: ListNodeOrNull = new ListNode(0);
  let cur: ListNodeOrNull = newList;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    const remainder = (sum) % 10;
    const val = sum >= 10 ? remainder : sum;
    carry = Math.floor(sum / 10);
    cur.next = { val, next: null };
    cur = cur.next;
    if (l1) {l1 = l1.next;}
    if (l2) {l2 = l2.next;}
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return newList.next;
}
