/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1], curRow
  if (rowIndex === 0) return row
  while (rowIndex) {
    curRow = []
    curRow.push(1)
    const len = row.length
    for (let i = 0; i + 1 < len; i++) {
      curRow.push(row[i] + row[i + 1])
    }
    curRow.push(1)
    row = curRow
    rowIndex--
  }
  return row
}
