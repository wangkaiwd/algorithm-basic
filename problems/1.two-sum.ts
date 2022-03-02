// [2,7,11,15]  9
function twoSum (nums: number[], target: number): any {
  const map: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (diff in map) {
      return [map[diff], i];
    } else {
      map[num] = i;
    }
  }
  throw new Error('No two sum solution!');
}
