// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l1 = { val: 1, next: { val: 2, next: null } };
// const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: null } };

const mergeTwoLists = (l1, l2) => {
  // 终止条件
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  if (l1.val < l2.val) {
    // 2. {val:1, next: ?}
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    // 1. {val: 1 , next: ?}
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
console.log(mergeTwoLists(l1, l2));
