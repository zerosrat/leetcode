const plusOne = function (digits: number[]): number[] {
  if (digits.length < 1) {
    return digits;
  }

  let i = digits.length - 1;
  let carry = 0;

  digits[i]++;

  do {
    if (carry !== 0) {
      digits[i] += carry;
      carry = 0;
    }
    if (digits[i] < 10) {
      break;
    }
    digits[i] = 0;
    carry = 1;
  } while (--i >= 0);

  if (i < 0 && carry === 1) {
    digits.unshift(1);
  }

  return digits;
};
