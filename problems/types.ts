export interface ListNode {
  val: number;
  next: ListNodeOrNull;
}

export type ListNodeOrNull = ListNode | null

export class ListNode {
  constructor (val: number) {
    this.val = val;
    this.next = null;
  }
}
