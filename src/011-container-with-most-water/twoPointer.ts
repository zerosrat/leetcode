/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height: number[]): number {
  const area = [];
  for (let i = 0, j = height.length - 1; j - i >= 1; ) {
    const w = j - i;
    const h = Math.min(height[i], height[j]);
    area.push(w * h);

    if (height[i] <= height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    }
  }
  return Math.max(...area);
};
