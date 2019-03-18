/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const area = []
  for (let i = 0, j = height.length - 1; j - i >= 1;) {
    const w = j - i
    const h = Math.min(height[i], height[j])
    area.push(w * h)

    if (height[i] < height[j]) {
      i++
    } else if (height[i] > height[j]) {
      j--
    } else {
      if (j - i === 1) break
      if (height[i + 1] > height[j - 1]) {
        j--
      } else {
        i++
      }
    }
  }
  return Math.max(...area)
}
