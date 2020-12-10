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
  while (prev !== null) {
    let cur = prev.next;
    if (cur && (cur.val === val)) { // 将元素删除之后，需要继续判断下一个元素。如果也将prev后移，将会跳过对下一个元素的处理
      prev.next = cur.next;
      cur.next = null;
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
