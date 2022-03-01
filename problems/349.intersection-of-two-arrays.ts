// O(n): Set, iterable protocol, iterator protocol, Set/Map is built-in iterables
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
function intersection (nums1: number[], nums2: number[]): number[] {
  // const set1 = new Set(nums1);
  // const set2 = new Set(nums2);
  // const set3 = new Set<number>();
  //
  // set1.forEach(item => {
  //   if (set2.has(item)) {
  //     set3.add(item);
  //   }
  // });
  // return [...set3];
  return [...new Set(nums1)].filter((num) => new Set(nums2).has(num));
}

// first sort array: o(nlogn)
function intersection2 (nums1: number[], nums2: number[]): number[] {
  // todo:
  return [];
}

// first sort array
// then use binary search
function intersection3 (nums1: number[], nums2: number[]): number[] {
  // todo:
  return [];
}
