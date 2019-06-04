/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s1, s2) {
  let m = new Array(512)
  for (let i = 0; i < s1.length; i++) {
    if (m[s1.charAt(i)] != m[s2.charAt(i) + 256]) return false
    m[s1.charAt(i)] = m[s2.charAt(i) + 256] = i + 1
  }
  return true
}
