/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s: string, numRows: number): string {
  numRows = Math.min(s.length, numRows)
  if (numRows <= 1) {
    return s
  }

  const arr = new Array(numRows)
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(0)
  }

  for (let i = 0, j = 0, count = 0, goDown = true; count < s.length; count++) {
    arr[i][j] = s.charAt(count)
    if (goDown) {
      i++
    } else {
      j++
      i--
    }
    if ((count + 1) % (numRows - 1) === 0) {
      goDown = !goDown
    }
  }

  let result = ''
  arr.forEach(row => {
    row.forEach(c => {
      if (typeof c !== 'undefined') {
        result += c
      }
    })
  })

  return result
}
