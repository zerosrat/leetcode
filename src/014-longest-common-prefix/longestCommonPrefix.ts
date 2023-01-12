/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let result = "";
  for (let i = 0; ; i++) {
    const c = strs[0].charAt(i);
    if (c === "") break;
    const hasCommonChar = strs.every((str) => str.charAt(i) === c);
    if (hasCommonChar) {
      result += c;
    } else {
      break;
    }
  }
  return result;
};
