/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const reg = /^[A-Za-z0-9]$/
  s = s.toLowerCase()
  for (let i = 0, j = s.length - 1; i <= j;) {
    const c1 = s[i]
    const c2 = s[j]
    if (!reg.test(c1)) {
      i++
      continue
    }
    if (!reg.test(c2)) {
      j--
      continue
    }
    if (c1 !== c2) {
      return false
    }
    i++
    j--
  }
  return true
}
