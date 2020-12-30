function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// https://excalidraw.com/#json=6594459491893248,aZ8uPJld8XGLWt9LLGoj8w
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
// console.log(JSON.stringify(reverseList(head), null, 2));
// implement by recursive
// 宏观语义：将head节点进行翻转，并将翻转后的头节点返回
// https://excalidraw.com/#json=6520243799195648,ANHTTM5rhLLLb5RXzeJ9bQ
function reverseList2 (head) {
  if (head == null || head.next == null) {
    return head;
  }
  // 会将最后一个节点返回
  const reversed = reverseList2(head.next);
  // 翻转当节点
  // 将下一个节点的下一个节点指向自己
  head.next.next = head;
  // 将自己指向空
  head.next = null;
  return reversed;
}

console.log(JSON.stringify(reverseList2(head), null, 2));
