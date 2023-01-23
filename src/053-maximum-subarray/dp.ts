const maxSubArray = function (nums: number[]) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 状态转移方程
    // dp[i]：表示以 nums[i] 结尾 的 连续 子数组的最大和。
    dp[i] = Math.max(num, (dp[i - 1] || 0) + num);
  }

  return Math.max(...dp);
};
