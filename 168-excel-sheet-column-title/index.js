/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const rtn = []
  const offset = 64
  while (true) {
    if (n <= 26) {
      rtn.unshift(n + offset)
      break
    } else {
      let remain = n % 26
      if (remain === 0) {
        remain = 26
      }
      rtn.unshift(remain + offset)
      n = (n - remain) / 26
    }
  }
  return String.fromCharCode(...rtn)
}
