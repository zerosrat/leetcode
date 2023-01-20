const removeElement = function (nums: number[], val: number) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
  }

  return i;
};
