// [2,7,11,15]  9
function twoSum (nums: number[], target: number): any {
  const map: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    } else {
      map[num] = i;
    }
  }
}
