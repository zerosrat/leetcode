const removeDuplicates = function (nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && i + 1 < nums.length) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
