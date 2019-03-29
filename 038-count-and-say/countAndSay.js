/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1'
  for (let i = 1; i < n; i++) {
    let strArray = str.split('')
    str = ''
    let count = 1
    // Loop through current nth level line
    for (let j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j]
        count = 1
      } else {
        count++
      }
    }
  }
  return str
}
