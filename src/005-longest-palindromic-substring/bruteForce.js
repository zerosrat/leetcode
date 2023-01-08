var longestPalindrome = function(s) {
  const len = s.length
  let longest = ''

  for (let step = len - 1; step >= 0; step--) {
    for (let i = 0, j = step; j < len; i++, j++) {
      const str = s.substring(i, j + 1)
      for (var isPalindrome = true, x = 0, y = str.length - 1; y - x >= 1; x++, y--) {
        if (str.charAt(x) === str.charAt(y)) {
          continue
        } else {
          isPalindrome = false
          break
        }
      }
      if (isPalindrome) {
        longest = str
        break
      }
    }
    if (longest.length > 0) break
  }

  return longest
}
