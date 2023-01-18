const isValid = function (s: string): boolean {
  if (s === "") return true;

  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c in map) {
      stack.push(c);
    } else {
      const prev = stack[stack.length - 1];
      if (map[prev] === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
