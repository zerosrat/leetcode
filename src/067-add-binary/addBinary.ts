/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a: string, b: string): string {
  const rtn = [];
  for (
    var i = a.length - 1, j = b.length - 1, carry = false;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    let sum = 0;
    if (i >= 0) {
      sum += Number(a[i]);
    }
    if (j >= 0) {
      sum += Number(b[j]);
    }
    if (carry) {
      sum++;
      carry = false;
    }
    if (sum >= 2) {
      sum = sum % 2;
      carry = true;
    }
    rtn.unshift(sum + "");
  }
  if (carry) {
    rtn.unshift("1");
  }
  return rtn.join("");
};
