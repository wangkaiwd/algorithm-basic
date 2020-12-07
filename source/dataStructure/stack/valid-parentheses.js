// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// Example 1:
//  Input: s = "()"
//  Output: true

// Example 2:
//  Input: s = "()[]{}"
//  Output: true

// Example 3:
//  Input: s = "(]"
//  Output: false

// Example 4:
//  Input: s = "([)]"
//  Output: false

// Example 5:
//  Input: s = "{[]}"
//  Output: true
const isValid = function (s) {
  const stack = [];
  const map = { '{': '}', '(': ')', '[': ']' };
  for (let i = 0; i < s.length; i++) {
    const last = stack[stack.length - 1];
    if (map[last] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  // 如果最后栈中没有元素，说明都匹配完毕
  return stack.length === 0;
};
const s = '([)]';
const s1 = '()[]{}';
console.log(isValid(s));
console.log(isValid(s1));
