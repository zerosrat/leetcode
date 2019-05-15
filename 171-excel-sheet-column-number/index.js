/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const arr = s.split('')
  let rtn = 0
  for (let i = s.length, j = 0; i--; j++) {
    rtn += (s.charCodeAt(i) - 64) * (26 ** j)
  }
  return rtn
}
