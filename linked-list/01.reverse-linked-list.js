// Reverse a singly linked list.
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Approach 1：
// 时间复杂度: O(n)
const head = [1, 2, 3, 4, 5];
const reverseList = (head) => {
  let current = head;
  let next = null;
  while (current) {
    // 保存下一个节点
    // 1->2->3->4->5->NULL
    const temp = current.next;
    current.next = next;
    next = current;
    current = temp;
  }
  return next;
};

console.log(reverseList(head));

