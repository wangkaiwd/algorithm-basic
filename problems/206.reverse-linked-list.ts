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
import { ListNodeOrNull } from './types';

// 1 -> 2 -> 3 -> 4 -> null
// 4 -> 3 -> 2 -> 1 -> null

// next = cur.next
// cur.next = prev
// prev = cur
// cur = next
// until cur = null

// prev, cur, next
function reverse (prev: ListNodeOrNull, cur: ListNodeOrNull, next: ListNodeOrNull): ListNodeOrNull {
  if (cur === null) {
    return prev;
  }
  next = cur.next;
  cur.next = prev;
  prev = cur;
  cur = next;
  return reverse(prev, cur, next);
}

function reverseList (head: ListNodeOrNull): ListNodeOrNull {
  return reverse(null, head, null);
}


