import { ListNodeOrNull } from './types';

function deleteDuplicates (head: ListNodeOrNull): ListNodeOrNull {
  let list = head;
  while (list) {
    if (list.next === null) {
      break;
    }
    // delete next node of linked
    if (list.val === list.next.val) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return head;
}
