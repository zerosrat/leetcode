/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const buffer = []
  const result = []

  function backtrack(start, target) {
    if (target < 0) return
    if (target === 0) {
      result.push(buffer.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      buffer.push(candidates[i])
      backtrack(i, target - candidates[i])
      buffer.pop()
    }
  }

  backtrack(0, target)
  return result
}
