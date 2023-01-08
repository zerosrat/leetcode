/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][0]) return false
    if (matrix[i].includes(target)) return true
  }
  return false
}
