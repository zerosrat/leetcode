/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Brute Force
    for (var i = 0, len = nums.length; i < len; i++) {
        var a = nums[i];
        var b = target - a;
        var j = nums.indexOf(b);
        if (j !== -1 && i !== j) {
            return [i, j];
        }
    }
}
;
//# sourceMappingURL=bruteForce.js.map