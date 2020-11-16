// Reverse a singly linked list.
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Approach 1：
// 时间复杂度: O(n)
// const head = [1, 2, 3, 4, 5];
// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   while (current) {
//     // 保存下一个节点
//     // 1->2->3->4->5->NULL
//     const temp = current.next;
//     current.next = prev;
//     prev = current;
//     current = temp;
//   }
//   return prev;
// };
//
// console.log(reverseList(head));
//

// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/fan-zhuan-lian-biao-yi-dong-de-shuang-zhi-zhen-jia/
// 递归，由于创建了n个函数，所以空间复杂度：O(n)
// const head = [1, 2, 3, 4, 5];
// // 1->2->3->4->5->NULL
// const reverseList1 = (head) => {
//   // 递归进行处理
//   if (head == null || head.next == null) {
//     return head;
//   }
//   const result = reverseList1(head.next);
//   head.next.next = head;
//   head.next = null;
//   return result;
// };


