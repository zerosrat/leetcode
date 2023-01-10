/**
 * P(i, j) = true // P(i, j) 是回文
 * P(i, j) = false // s(i, j) 不是回文，或 i>j
 * 可得
 * P(i, j) = P(i + 1, j - 1) && char(i) === char(j)
 *
 * 边界条件：
 * P(i, i) = true
 * P(i, i + 1) = char(i) === char(i + 1)
 *
 * 解：
 * 寻找 P(i, j) 中 Max(j-i+1)
 */
const longestPalindrome = function (s: string): string {
  const len = s.length;
  // dp[l][r] 表示 s(l,r) 是否是回文串
  const dp = new Array(len);
  let longest = '';

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
  }

  for (let right = 0; right < len; right++) {
    for (let left = right; left >= 0; left--) {
      if (s.charAt(right) !== s.charAt(left)) {
        dp[left][right] = false;
      } else {
        // left > right -> false
        // left === right ||left+1 == right -> true
        dp[left][right] = right - left <= 2 || dp[left + 1][right - 1];
      }
      // dp[left][right] = (right - left <= 2 || dp[left + 1][right - 1]) && s.charAt(right) === s.charAt(left);
      if (dp[left][right] && (right - left + 1 > longest.length || longest === '')) {
        longest = s.substring(left, right + 1);
      }
    }
  }

  return longest;
};
