/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
      if (candidates[i] === candidates[i - 1] && i > start) continue
      buffer.push(candidates[i])
      backtrack(i + 1, target - candidates[i])
      buffer.pop()
    }
  }
  backtrack(0, target)
  return result
}
