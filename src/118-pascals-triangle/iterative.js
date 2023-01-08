/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const rtn = []
  if (numRows === 0) return rtn
  rtn.push([1])
  numRows--
  while (numRows) {
    const row = []
    row.push(1)
    const len = rtn.length
    for (let i = 0; i + 1 < rtn[len - 1].length; i++) {
      row.push(rtn[len - 1][i] + rtn[len - 1][i + 1])
    }
    row.push(1)
    rtn.push(row)
    numRows--
  }
  return rtn
}
