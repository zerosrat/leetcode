/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str: string): number {
  const num = parseInt(str, 10) || 0;
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  if (num > MAX) return MAX;
  if (num < MIN) return MIN;
  return num;
};
