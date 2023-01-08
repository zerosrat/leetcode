/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // one-pass Hash Table
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var a = nums[i];
        var b = target - a;
        if (map.has(b)) {
            return [i, map.get(b)];
        }
        map.set(a, i);
    }
};
//# sourceMappingURL=map.js.map