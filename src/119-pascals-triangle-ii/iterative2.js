/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1]
  if (rowIndex === 0) return row
  while (rowIndex) {
    for (let i = row.length; i - 1 >= 0; i--) {
      if (!row[i]) row[i] = 0
      row[i] += row[i - 1]
    }
    rowIndex--
  }
  return row
}
