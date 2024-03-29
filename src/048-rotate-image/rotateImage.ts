/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 上下对称 + 主对角线对称
 */
const rotate = function (matrix: number[][]): void {
  const len = matrix.length;
  for (let i = 0; i < ~~(len / 2); i++) {
    [matrix[i], matrix[len - i - 1]] = [matrix[len - i - 1], matrix[i]];
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
