/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const arr = s.split('')
  let sum = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    const c = arr[i]
    const c_next = arr[i + 1]
    switch (c) {
      case 'I':
        if (c_next === 'V') {
          sum += 4
          i++
        } else if (c_next === 'X') {
          sum += 9
          i++
        } else {
          sum += 1
        }
        break
      case 'V':
        sum += 5
        break
      case 'X':
        if (c_next === 'L') {
          sum += 40
          i++
        } else if (c_next === 'C') {
          sum += 90
          i++
        } else {
          sum += 10
        }
        break
      case 'L':
        sum += 50
        break
      case 'C':
        if (c_next === 'D') {
          sum += 400
          i++
        } else if (c_next === 'M') {
          sum += 900
          i++
        } else {
          sum += 100
        }
        break
      case 'D':
        sum += 500
        break
      case 'M':
        sum += 1000
        break
    }
  }
  return sum
}
