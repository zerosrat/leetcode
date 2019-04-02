var isSymmetric = function(root) {
  const queue = []
  queue.unshift(root)
  queue.unshift(root)
  while (queue.length) {
    const t1 = queue.pop()
    const t2 = queue.pop()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    queue.unshift(t1.left)
    queue.unshift(t2.right)
    queue.unshift(t1.right)
    queue.unshift(t2.left)
  }
  return true
}
