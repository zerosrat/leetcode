const combinationSum = function (
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);
  const buffer = [];
  const result = [];

  backtrack(0, target, candidates, buffer, result);

  return result;
};

// dfs
function backtrack(
  start: number,
  target: number,
  candidates: number[],
  buffer: number[],
  result: number[][]
): void {
  if (target < 0) return;
  if (target === 0) {
    result.push(buffer.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    buffer.push(candidates[i]);
    backtrack(i, target - candidates[i], candidates, buffer, result);
    buffer.pop();
  }
}
