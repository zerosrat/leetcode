const lengthOfLongestSubstring = function(s: string): number {
  const map = new Map()
  let len = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      // 发现有重复字符时，可以直接把左指针移动到第一个重复字符的下一个位置即可
      j = Math.max(j, map.get(s.charAt(i)) + 1)
    }
    len = Math.max(len, i - j + 1)
    map.set(s.charAt(i), i)
  }
  return len
}
