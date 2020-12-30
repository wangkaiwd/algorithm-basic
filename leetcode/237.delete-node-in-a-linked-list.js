function ListNode (val) {
  this.val = val;
  this.next = null;
}

// 删除给定的节点
// 由于访问不到之前的节点，我们可以将下一个节点的值赋值给当前节点，然后将当前节点的next指向它的next.next
function deleteNode (node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

