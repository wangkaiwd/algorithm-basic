const isValidBrackets = (string: string) => {
  const stack: string[] = [];
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  for (let i = 0; i < string.length; i++) {
    const current = stack[stack.length - 1];
    const element = string[i];
    if ((map as any)[element]) { // left bracket push
      stack.push(element);
    } else {
      if ((map as any)[current] === element) { // closed bracket, pop
        stack.pop();
      }
      // must invalid
      // ([{ -> next only } may be valid
      // ([{ ],) must invalid
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValidBrackets('()[]{}'));
console.log(isValidBrackets('(]'));
