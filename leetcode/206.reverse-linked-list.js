function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
function reverseList (head) {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(JSON.stringify(reverseList(head), null, 2));
