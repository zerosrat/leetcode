var lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let len = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      j = Math.max(j, map.get(s.charAt(i)) + 1)
    }
    len = Math.max(len, i - j + 1)
    map.set(s.charAt(i), i)
  }
  return len
}
