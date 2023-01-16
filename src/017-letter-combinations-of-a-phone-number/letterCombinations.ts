/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits: string): string[] {
  const kv = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const letters = kv[digit];
    if (typeof letters === "undefined") continue;
    if (result.length === 0) {
      result.push(...letters);
    } else {
      for (let i = 0, len = result.length; i < len; i++) {
        const str = result[0];
        result.splice(0, 1);
        result.push(...letters.map((l) => str + l));
      }
    }
  }

  return result;
};
