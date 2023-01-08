const maxSub = (nums, left, right) => {
  if (left === right) {
    return nums[left]
  } else if (left > right) {
    return Number.NEGATIVE_INFINITY
  }

  let mid = Math.floor((left + right) / 2)
  let lmax = maxSub(nums, left, mid - 1)
  let rmax = maxSub(nums, mid + 1, right)

  let leftExtendMaxSum = rightExtendMaxSum = 0
  for (let i = mid - 1, tempTotal = 0; i >= left; --i) {
    leftExtendMaxSum = Math.max(tempTotal += nums[i], leftExtendMaxSum)
  }

  for (let i = mid + 1, tempTotal = 0; i <= right; ++i) {
    rightExtendMaxSum = Math.max(tempTotal += nums[i], rightExtendMaxSum)
  }

  return Math.max(leftExtendMaxSum + nums[mid] + rightExtendMaxSum, lmax, rmax)
}

var maxSubArray = nums => maxSub(nums, 0, nums.length - 1)
