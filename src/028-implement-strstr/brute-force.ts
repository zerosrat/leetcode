const strStr = function (haystack: string, needle: string): number {
  const len = haystack.length;

  if (needle === "") return 0;

  for (let i = 0; i <= len - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
