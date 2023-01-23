const lengthOfLastWord = function (s: string): number {
  if (s.length <= 0) {
    return 0;
  }

  let right = s.length - 1;

  while (s.charAt(right) === " ") {
    right--;
  }

  let left = right;
  do {
    left--;
  } while (s.charAt(left) !== " " && left >= 0);
  left++;

  return right - left + 1;
};
