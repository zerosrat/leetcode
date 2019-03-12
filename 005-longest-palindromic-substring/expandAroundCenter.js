var longestPalindrome = function(s) {
  let start = 0
  let end = 0
  const len = s.length

  for (let i = 0; i < len; i++) {
    const len1 = expand(s, i, i)
    const len2 = expand(s, i, i + 1)
    const maxLen = Math.max(len1, len2)
    if (maxLen > end - start) {
      if (maxLen % 2 === 0) {
        start = i - (maxLen / 2 - 1)
        end = i + (maxLen / 2 - 1) + 1
      } else {
        start = i - Math.floor(maxLen / 2)
        end = i + Math.floor(maxLen / 2)
      }
    }
  }

  return s.substring(start, end + 1)
}

function expand(s, i, j) {
  while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
    i--
    j++
  }
  return j - i - 1
}
