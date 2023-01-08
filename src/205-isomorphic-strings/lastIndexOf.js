/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  for (let i = 1, l = s.length; i < l; i++) {
    const sLastIdx = s.lastIndexOf(s[i], i - 1)
    const tLastIdx = t.lastIndexOf(t[i], i - 1)
    if (sLastIdx !== tLastIdx) return false
  }
  return true
}
