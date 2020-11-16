// Given a linked list, swap every two adjacent nodes and return its head.
//   You may not modify the values in the list's nodes. Only nodes itself may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

const head = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } };
// 递归解法: https://lyl0724.github.io/2020/01/25/1/
// 递归需要关注的3个点： 1. 返回值: 已经交换好的链表 2. 调用单元做了什么: head,next,已经交换好的链表，将head和next进行交换 3. 终止条件: 链表只剩一个节点或者没有节点的时候，递归终止
// [1,2,3,4]
// 1.  next=2,  head=1 -> next=2 -> swapPairs(3)
// 2.  swapPairs(3), next = 4,  head=3 -> null
// 3.  next=4 -> head=3 -> null
// 4.  head=1 -> next=2 -> 4 -> 3 -> null
// 5.  next=2 -> head=1-> 4 -> 3 -> null

const swapPairs1 = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  // 交换 head,next, swapPairs1(next.next)
  const next = head.next; //
  head.next = swapPairs1(next.next); //
  next.next = head;
  return next;
};
console.log(swapPairs1(head));
