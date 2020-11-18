// Given head, the head of a linked list, determine if the linked list has a cycle in it.
//
//   There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
//
// Return true if there is a cycle in the linked list. Otherwise, return false.
//
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// set: 让你存储任何类型的唯一值，不管是原始值还是对象引用
// easy: 思路：设置一个set用来存储当前列表节点，循环列表中的每一项，如果循环过程中某一项和之前的某一项相同，说明它是一个环形链表
// 如果直到遍历完成，都没有重复项，那么说明不是环形链表
const head = { value: 1, next: { value: 2, next: { value: 0, next: { value: -4 } } } };
head.next.next.next.next = head.next;
const hasCycle1 = (head) => {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
    }
    head = head.next;
  }
  return false;
};

console.log(hasCycle1(head));
