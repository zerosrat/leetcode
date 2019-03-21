/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c in map) {
      stack.push(c)
    } else {
      const last = stack[stack.length - 1]
      if (map[last] === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
