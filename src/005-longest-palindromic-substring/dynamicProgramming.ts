/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s: string): string {
  const len = s.length;
  const dp = new Array(len);
  let longest = '';

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
  }

  for (let right = 0; right < len; right++) {
    for (let left = right; left >= 0; left--) {
      dp[left][right] = (right - left <= 2 || dp[left + 1][right - 1]) && s.charAt(right) === s.charAt(left);
      if (dp[left][right] && (right - left + 1 > longest.length || longest === '')) {
        longest = s.substring(left, right + 1);
      }
    }
  }

  return longest;
};
