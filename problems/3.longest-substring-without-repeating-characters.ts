// O(n^2)
function lengthOfLongestSubstring (s: string): number {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const x = [current];
    for (let j = i + 1; j < s.length; j++) {
      const after = s[j];
      if (!x.includes(after)) {
        x.push(after);
      } else {
        break;
      }
    }
    result.push(x);
  }
  let maxLength = 0;
  for (let i = 0; i < result.length; i++) {
    const length = result[i].length;
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}

// abccbcbb
// slide window:
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
// O(n)
// map.size is current window length
function lengthOfLongestSubstring1 (s: string): number {
  let max = 0;
  const map = new Map();
  let right = -1;
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      map.delete(s[i - 1]);
    }
    while (!map.has(s[right + 1]) && right + 1 < s.length) {
      map.set(s[right + 1], right + 1);
      right++;
    }
    // repeat
    max = Math.max(max, right - i + 1);
  }
  return max;
}
