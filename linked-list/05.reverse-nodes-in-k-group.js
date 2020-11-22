// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
//   k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
//
//   Follow up:
//   Could you solve the problem in O(1) extra memory space?
//   You may not alter the values in the list's nodes, only nodes itself may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Example 3:
// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]

// Example 4:
// Input: head = [1], k = 1
// Output: [1]

const head = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } },
  k = 2;

// 分段进行反转：
//  1. 找到每一段的开始节点和结束节点，对其进行翻转
//  2. 翻转后的结果连接到之前的节点
//  3. 继续进行下一段翻转
const reverseKGroup1 = (head, k) => {
  const dummy = { value: 0, next: head };
  let pre = dummy;
  let end = dummy;
  while (end.next !== null) {
    // 找到要翻转的节点的尾部
    for (let i = 0; (i < k) && (end !== null); i++) {
      end = end.next;
    }
    // 说明链表长度不足k，停止翻转
    if (end === null) {
      break;
    }
    // 开始节点为
    let start = pre.next;
    // 保存下一段的开始节点
    let next = end.next;
    // 将链表断开，用于reverse方法进行翻转[start,end(end.next => null)]
    end.next = null;
    // 通过pre连接翻转好的节点
    pre.next = reverse(start);
    // 将start置为下一段的开始节点
    start.next = next;
    // 将pre和end置为下一段的开始节点
    pre = start;
    end = pre;
  }
  return dummy.next;
};

function reverse (head) {
  let curNode = head;
  let preNode = null;
  while (curNode) {
    const temp = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = temp;
  }
  return preNode;
}

console.log('reverse', reverseKGroup1(head, k));
