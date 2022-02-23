interface ListNode {
  val: number;
  next: ListNode;
}

// class ListNode {
//   val: number;
//   next: ListNode | null;
//
//   constructor (val?: number, next?: ListNode | null) {
//     this.val = val ?? 0;
//     this.next = next ?? null;
//   }
// }
// 1 -> 2 -> 3 -> 4 -> null
// node = 3
// node = node.next
function deleteNode (node: ListNode): void {
  node.val = node.next.val;
  node.next = node.next.next;
}
