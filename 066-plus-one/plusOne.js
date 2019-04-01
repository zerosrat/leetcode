/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1]++
  for (let i = digits.length; i--;) {
    if (digits[i] !== 10) break
    if (i !== 0) {
      digits[i] = 0
      digits[i - 1]++
    } else {
      digits[0] = 0
      digits.unshift(1)
    }
  }
  return digits
}
