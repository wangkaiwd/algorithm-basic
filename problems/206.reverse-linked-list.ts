/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from './types';

// 1 -> 2 -> 3 -> 4 -> null
// 4 -> 3 -> 2 -> 1 -> null

// next = cur.next
// cur.next = prev
// prev = cur
// cur = next
// until cur = null

type NodeOrNull = ListNode | null

// prev, cur, next
function reverse (prev: NodeOrNull, cur: NodeOrNull, next: NodeOrNull): NodeOrNull {
  if (cur === null) {
    return prev;
  }
  next = cur.next;
  cur.next = prev;
  prev = cur;
  cur = next;
  return reverse(prev, cur, next);
}

function reverseList (head: NodeOrNull): NodeOrNull {
  return reverse(null, head, null);
}


