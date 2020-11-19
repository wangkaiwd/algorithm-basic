// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
//   There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Notice that you should not modify the linked list.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

const head = { value: 1, next: { value: 2, next: { value: 0, next: { value: -4 } } } };
head.next.next.next.next = head.next;
// linked list cycle
// Set object: lets you store unique values of any type, whether primitive values or object references
// set can store object reference, this question object reference not change
// const detectCycle1 = (head) => {
//   const set = new Set();
//   while (head) {
//     if (set.has(head)) {
//       return head;
//     } else {
//       set.add(head);
//     }
//     head = head.next;
//   }
//   return null;
// };
//
// console.log('result', detectCycle1(head));
