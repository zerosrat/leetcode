// f(0) = 0
// f(1) = 1
// f(2) = 2
// f(3) = 3
// f(4) = f(3) + f(2) = 5
// f(n) = f(n-1) + f(n-2)
const climbStairs = function (n: number): number {
  const dp = [0, 1, 2];

  if (n < dp.length) return dp[n];

  for (let i = dp.length; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
