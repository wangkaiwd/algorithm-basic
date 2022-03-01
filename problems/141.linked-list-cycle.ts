import { ListNodeOrNull } from './types';

function hasCycle (head: ListNodeOrNull): boolean {
  let walker = head; // 1 step each time
  let runner = head; // 2 step each time
  while (walker?.next && runner?.next?.next) {
    walker = walker?.next;
    runner = runner?.next?.next || null;
    if (walker === runner) {
      return true;
    }
  }
  return false;
}
