// Remove all elements from a linked list of integers that have value val.
//
// Example:
//  Input:  1->2->6->3->4->5->6, val = 6
//  Output: 1->2->3->4->5

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const ListNode = require('./ListNode');
const removeElements1 = function (head, val) {
  const dummy = new ListNode(null, head);
  let prev = dummy;
  // null->1->6->6
  // 每次都处理prev.next即当前节点，最后一个节点会在prev为最后一节点的前一个节点时进行处理，所以不用担心漏掉
  while (prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};

const head = {
  val: 1,
  next: { val: 6, next: { val: 6, next: null } }
};
console.log(removeElements1(head, 6));
