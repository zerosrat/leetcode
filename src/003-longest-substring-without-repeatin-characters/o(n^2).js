/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  const len = s.length
  let long = 1
  for (let i = 0; i + long <= len; i++) {
    let j = i + 1
    while (j < len) {
      const curStr = s.substring(i, j)
      const firstIndex = curStr.indexOf(s.charAt(j))
      if (curStr.charAt(firstIndex) === s.charAt(j)) {
        break
      }
      j++
    }
    const distance = j - i
    if (distance > long) {
      long = distance
    }
  }
  return long
}
