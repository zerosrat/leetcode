/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length
  const col = Array.isArray(matrix[0]) ? matrix[0].length : 0
  let s = 0
  let e = row * col - 1
  while (s <= e) {
    const mid = ~~((s + e) / 2)
    const midItem = matrix[~~(mid / col)][mid % col]
    if (target === midItem) {
      return true
    } else if (target < midItem) {
      e = mid - 1
    } else {
      s = mid + 1
    }
  }
  return false
}
