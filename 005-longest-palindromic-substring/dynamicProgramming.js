/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  const dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
  }
  let longest = ''

  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j][i] = (i - j <= 2 || dp[j + 1][i - 1]) && (s.charAt(i) === s.charAt(j))
      if (dp[j][i] && (i - j + 1 > longest.length || longest === '')) {
        longest = s.substring(j, i + 1)
      }
    }
  }

  return longest
}
