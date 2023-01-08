var lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let i = 0
  let j = 0
  const len = s.length
  let long = 0
  while (j < len) {
    const c = s.charAt(j)
    if (!map.has(c)) {
      map.set(c, j++)
      long = Math.max(long, j - i)
    } else {
      j = i = map.get(c) + 1
      map.clear()
    }
  }
  return long
}
