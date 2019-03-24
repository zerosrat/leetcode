var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1)
        i--
      }
    }
  }
  return nums.length
}
